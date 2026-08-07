import { NextResponse } from "next/server";
import { Resend } from "resend";

import { buildAdminNotificationEmail, buildVisitorAcknowledgementEmail } from "@/lib/email/free-trial-emails";
import { isTrialFieldName, trialRequestSchema } from "@/lib/free-trial-schema";
import {
  TURNSTILE_ACTION,
  TURNSTILE_ALLOWED_HOSTNAMES,
  TURNSTILE_TEST_SECRET_KEY,
} from "@/lib/turnstile";

const TURNSTILE_SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_VERIFY_TIMEOUT_MS = 8000;

type SiteverifyResponse = {
  success?: boolean;
  action?: string;
  hostname?: string;
};

type TurnstileVerifyOutcome = "success" | "failed" | "service_unavailable" | "config_error";

async function verifyTurnstileToken(token: string): Promise<TurnstileVerifyOutcome> {
  const isProduction = process.env.NODE_ENV === "production";
  const secret = isProduction ? process.env.TURNSTILE_SECRET_KEY : TURNSTILE_TEST_SECRET_KEY;

  if (!secret) return "config_error";

  const params = new URLSearchParams();
  params.set("secret", secret);
  params.set("response", token);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TURNSTILE_VERIFY_TIMEOUT_MS);

  let result: SiteverifyResponse;
  try {
    const response = await fetch(TURNSTILE_SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      signal: controller.signal,
    });
    result = (await response.json()) as SiteverifyResponse;
  } catch {
    return "service_unavailable";
  } finally {
    clearTimeout(timeout);
  }

  if (result.success !== true) {
    return "failed";
  }

  // Cloudflare's official test tokens always verify as success but carry no
  // action/hostname metadata (they're canned sentinel responses, not real
  // solves), so action and hostname are only enforced in production.
  if (isProduction) {
    if (result.action !== TURNSTILE_ACTION) return "failed";
    if (!result.hostname || !TURNSTILE_ALLOWED_HOSTNAMES.includes(result.hostname)) return "failed";
  }

  return "success";
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "INVALID_JSON",
        message: "The request could not be processed.",
      },
      { status: 400 },
    );
  }

  if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
    return NextResponse.json(
      {
        ok: false,
        code: "INVALID_JSON",
        message: "The request could not be processed.",
      },
      { status: 400 },
    );
  }

  const { turnstileToken, ...formPayload } = payload as Record<string, unknown>;

  const parsed = trialRequestSchema.safeParse(formPayload);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};

    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && isTrialFieldName(field) && !(field in fieldErrors)) {
        fieldErrors[field] = issue.message;
      }
    }

    return NextResponse.json(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        message: "Please check the submitted information and try again.",
        fieldErrors,
      },
      { status: 422 },
    );
  }

  if (typeof turnstileToken !== "string" || turnstileToken.length === 0 || turnstileToken.length > 2048) {
    return NextResponse.json(
      {
        ok: false,
        code: "TURNSTILE_REQUIRED",
        message: "Please complete the security check and try again.",
      },
      { status: 403 },
    );
  }

  const turnstileOutcome = await verifyTurnstileToken(turnstileToken);

  if (turnstileOutcome === "service_unavailable") {
    console.error("free-trial: turnstile siteverify request failed");
    return NextResponse.json(
      {
        ok: false,
        code: "SECURITY_CHECK_UNAVAILABLE",
        message: "We couldn’t verify the security check right now. Please try again.",
      },
      { status: 503 },
    );
  }

  if (turnstileOutcome === "config_error") {
    console.error("free-trial: missing turnstile secret configuration");
    return NextResponse.json(
      {
        ok: false,
        code: "SERVER_CONFIG_ERROR",
        message: "We couldn’t send your request right now. Please try again.",
      },
      { status: 500 },
    );
  }

  if (turnstileOutcome === "failed") {
    return NextResponse.json(
      {
        ok: false,
        code: "TURNSTILE_FAILED",
        message: "The security check expired or could not be verified. Please try again.",
      },
      { status: 403 },
    );
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, FREE_TRIAL_RECIPIENT_EMAIL } = process.env;

  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !FREE_TRIAL_RECIPIENT_EMAIL) {
    console.error("free-trial: missing required email configuration");
    return NextResponse.json(
      {
        ok: false,
        code: "SERVER_CONFIG_ERROR",
        message: "We couldn’t send your request right now. Please try again.",
      },
      { status: 500 },
    );
  }

  const data = parsed.data;
  const admin = buildAdminNotificationEmail(data);
  const visitor = buildVisitorAcknowledgementEmail(data);
  const resend = new Resend(RESEND_API_KEY);

  let adminResult: Awaited<ReturnType<typeof resend.emails.send>>;
  let visitorResult: Awaited<ReturnType<typeof resend.emails.send>>;

  try {
    [adminResult, visitorResult] = await Promise.all([
      // Tutor/admin notification: replying goes straight back to the visitor.
      // `data.email` is already Zod-validated (proper email format) above.
      resend.emails.send({
        from: RESEND_FROM_EMAIL,
        to: FREE_TRIAL_RECIPIENT_EMAIL,
        replyTo: data.email,
        subject: admin.subject,
        html: admin.html,
        text: admin.text,
      }),
      // Visitor acknowledgement: replying goes to the tutor/admin inbox so a
      // "Reply" from the visitor's email client reaches a real person.
      resend.emails.send({
        from: RESEND_FROM_EMAIL,
        to: data.email,
        replyTo: FREE_TRIAL_RECIPIENT_EMAIL,
        subject: visitor.subject,
        html: visitor.html,
        text: visitor.text,
      }),
    ]);
  } catch {
    console.error("free-trial: email delivery threw an exception");
    return NextResponse.json(
      {
        ok: false,
        code: "EMAIL_DELIVERY_ERROR",
        message: "We couldn’t send your request right now. Please try again.",
      },
      { status: 500 },
    );
  }

  if (adminResult.error || visitorResult.error) {
    console.error("free-trial: email delivery was rejected by Resend");
    return NextResponse.json(
      {
        ok: false,
        code: "EMAIL_DELIVERY_ERROR",
        message: "We couldn’t send your request right now. Please try again.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Free trial request sent successfully.",
    },
    { status: 200 },
  );
}
