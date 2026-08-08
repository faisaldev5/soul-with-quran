import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type LegalPageHeroProps = {
  eyebrow: string;
  heading: string;
  headingId: string;
  intro: ReactNode;
  lastUpdated: string;
};

// Shared compact hero for legal/policy pages (Privacy, Terms, and future
// policy pages). Keeps breadcrumb, eyebrow, H1, intro, and "Last updated"
// treatment consistent across the legal-document family.
export function LegalPageHero({ eyebrow, heading, headingId, intro, lastUpdated }: LegalPageHeroProps) {
  return (
    <Section aria-labelledby={headingId} surface="white" spacing="compact" className="border-b border-border">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm leading-6 text-text-secondary">
          <Link href="/" className="transition-colors duration-micro ease-swq-out hover:text-primary-700 motion-reduce:transition-none">
            Home
          </Link>
          <ChevronRight aria-hidden="true" className="size-3.5 shrink-0 text-neutral-400" />
          <span aria-current="page" className="text-text-primary">
            {heading}
          </span>
        </nav>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
          {eyebrow}
        </p>
        <h1
          id={headingId}
          className="mt-3 max-w-[24ch] text-balance text-4xl leading-[1.08] md:text-5xl md:leading-[1.04]"
        >
          {heading}
        </h1>
        <p className="mt-5 max-w-reading text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
          {intro}
        </p>
        <p className="mt-4 text-sm leading-6 text-text-secondary">
          Last updated: {lastUpdated}
        </p>
      </Container>
    </Section>
  );
}
