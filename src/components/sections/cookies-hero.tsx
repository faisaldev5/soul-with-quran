import { LegalPageHero } from "@/components/legal/legal-page-hero";

const COOKIES_LAST_UPDATED = "8 August 2026";

export function CookiesHero() {
  return (
    <LegalPageHero
      eyebrow="COOKIES"
      heading="Cookie Policy"
      headingId="cookies-hero-heading"
      lastUpdated={COOKIES_LAST_UPDATED}
      intro={
        <>
          This policy describes how cookies and similar technologies are used
          on soulwithquran.com.
        </>
      }
    />
  );
}
