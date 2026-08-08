// Single source of truth for the canonical production site URL. Falls back to
// localhost only for local development where NEXT_PUBLIC_SITE_URL is unset.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");
