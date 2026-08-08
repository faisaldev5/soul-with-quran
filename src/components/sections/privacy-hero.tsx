import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const PRIVACY_LAST_UPDATED = "8 August 2026";

export function PrivacyHero() {
  return (
    <Section
      aria-labelledby="privacy-hero-heading"
      surface="white"
      spacing="compact"
      className="border-b border-border"
    >
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm leading-6 text-text-secondary">
          <Link href="/" className="transition-colors duration-micro ease-swq-out hover:text-primary-700 motion-reduce:transition-none">
            Home
          </Link>
          <ChevronRight aria-hidden="true" className="size-3.5 shrink-0 text-neutral-400" />
          <span aria-current="page" className="text-text-primary">
            Privacy Policy
          </span>
        </nav>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
          PRIVACY
        </p>
        <h1
          id="privacy-hero-heading"
          className="mt-3 max-w-[24ch] text-balance text-4xl leading-[1.08] md:text-5xl md:leading-[1.04]"
        >
          Privacy Policy
        </h1>
        <p className="mt-5 max-w-reading text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
          This policy describes how SoulWithQuran handles information when someone
          uses the website, contacts us, or requests a free trial.
        </p>
        <p className="mt-4 text-sm leading-6 text-text-secondary">
          Last updated: {PRIVACY_LAST_UPDATED}
        </p>
      </Container>
    </Section>
  );
}
