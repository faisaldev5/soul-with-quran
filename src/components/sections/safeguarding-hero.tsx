import { LegalPageHero } from "@/components/legal/legal-page-hero";

const SAFEGUARDING_LAST_UPDATED = "8 August 2026";

export function SafeguardingHero() {
  return (
    <LegalPageHero
      eyebrow="SAFEGUARDING"
      heading="Safeguarding"
      headingId="safeguarding-hero-heading"
      lastUpdated={SAFEGUARDING_LAST_UPDATED}
      intro={
        <>
          This page explains SoulWithQuran’s approach to maintaining a
          respectful and appropriate online learning environment for
          learners, including children.
        </>
      }
    />
  );
}
