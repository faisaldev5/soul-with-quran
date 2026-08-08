import { LegalPageHero } from "@/components/legal/legal-page-hero";

const PRIVACY_LAST_UPDATED = "8 August 2026";

export function PrivacyHero() {
  return (
    <LegalPageHero
      eyebrow="PRIVACY"
      heading="Privacy Policy"
      headingId="privacy-hero-heading"
      lastUpdated={PRIVACY_LAST_UPDATED}
      intro={
        <>
          This policy describes how SoulWithQuran handles information when someone
          uses the website, contacts us, or requests a free trial.
        </>
      }
    />
  );
}
