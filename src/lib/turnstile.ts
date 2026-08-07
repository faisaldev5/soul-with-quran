// Shared Turnstile constants. Only Cloudflare's official, publicly documented
// always-pass test credentials live here — never a real secret.
export const TURNSTILE_ACTION = "free_trial";
export const CONTACT_TURNSTILE_ACTION = "contact";
export const TURNSTILE_TEST_SITE_KEY = "1x00000000000000000000AA";
export const TURNSTILE_TEST_SECRET_KEY = "1x0000000000000000000000000000000AA";
export const TURNSTILE_ALLOWED_HOSTNAMES = ["soulwithquran.com", "www.soulwithquran.com"];

// Cloudflare's official test key always passes and is safe to use outside
// production; the real site key is only used in production builds.
export const TURNSTILE_SITE_KEY: string | undefined =
  process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY : TURNSTILE_TEST_SITE_KEY;
