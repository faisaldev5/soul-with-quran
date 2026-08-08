import { LegalPageHero } from "@/components/legal/legal-page-hero";

const TERMS_LAST_UPDATED = "8 August 2026";

export function TermsHero() {
  return (
    <LegalPageHero
      eyebrow="TERMS"
      heading="Terms & Conditions"
      headingId="terms-hero-heading"
      lastUpdated={TERMS_LAST_UPDATED}
      intro={
        <>
          These terms describe the basis on which SoulWithQuran provides its
          website, enquiries, trial lessons, and online Quran learning services.
        </>
      }
    />
  );
}
