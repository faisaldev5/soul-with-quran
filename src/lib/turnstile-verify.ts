import { TURNSTILE_ALLOWED_HOSTNAMES, TURNSTILE_TEST_SECRET_KEY } from "@/lib/turnstile";

const TURNSTILE_SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_VERIFY_TIMEOUT_MS = 8000;

type SiteverifyResponse = {
  success?: boolean;
  action?: string;
  hostname?: string;
};

export type TurnstileVerifyOutcome = "success" | "failed" | "service_unavailable" | "config_error";

/**
 * Verifies a Turnstile token against Cloudflare's Siteverify endpoint for a
 * specific expected `action`. Shared by every Route Handler that protects a
 * form submission with Turnstile — do not duplicate this logic per route.
 */
export async function verifyTurnstileToken(token: string, expectedAction: string): Promise<TurnstileVerifyOutcome> {
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
    if (result.action !== expectedAction) return "failed";
    if (!result.hostname || !TURNSTILE_ALLOWED_HOSTNAMES.includes(result.hostname)) return "failed";
  }

  return "success";
}
