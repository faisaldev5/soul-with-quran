import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactRequestSchema, isContactFieldName } from "@/lib/contact-schema";
import { buildAdminNotificationEmail, buildVisitorAcknowledgementEmail } from "@/lib/email/contact-emails";
import { CONTACT_TURNSTILE_ACTION } from "@/lib/turnstile";
import { verifyTurnstileToken } from "@/lib/turnstile-verify";

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

  const parsed = contactRequestSchema.safeParse(formPayload);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};

    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && isContactFieldName(field) && !(field in fieldErrors)) {
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

  const turnstileOutcome = await verifyTurnstileToken(turnstileToken, CONTACT_TURNSTILE_ACTION);

  if (turnstileOutcome === "service_unavailable") {
    console.error("contact: turnstile siteverify request failed");
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
    console.error("contact: missing turnstile secret configuration");
    return NextResponse.json(
      {
        ok: false,
        code: "SERVER_CONFIG_ERROR",
        message: "We couldn’t send your message right now. Please try again.",
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

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_EMAIL } = process.env;

  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONTACT_EMAIL) {
    console.error("contact: missing required email configuration");
    return NextResponse.json(
      {
        ok: false,
        code: "SERVER_CONFIG_ERROR",
        message: "We couldn’t send your message right now. Please try again.",
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
        to: CONTACT_EMAIL,
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
        replyTo: CONTACT_EMAIL,
        subject: visitor.subject,
        html: visitor.html,
        text: visitor.text,
      }),
    ]);
  } catch {
    console.error("contact: email delivery threw an exception");
    return NextResponse.json(
      {
        ok: false,
        code: "EMAIL_DELIVERY_ERROR",
        message: "We couldn’t send your message right now. Please try again.",
      },
      { status: 500 },
    );
  }

  if (adminResult.error || visitorResult.error) {
    console.error("contact: email delivery was rejected by Resend");
    return NextResponse.json(
      {
        ok: false,
        code: "EMAIL_DELIVERY_ERROR",
        message: "We couldn’t send your message right now. Please try again.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Message sent successfully.",
    },
    { status: 200 },
  );
}
