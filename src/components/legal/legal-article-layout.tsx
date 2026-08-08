import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export type LegalTocSection = {
  id: string;
  title: string;
};

type LegalArticleLayoutProps = {
  ariaLabel: string;
  sections: readonly LegalTocSection[];
  children: ReactNode;
};

// Shared two-column legal-document layout: a desktop-only sticky "On this
// page" table of contents alongside a restrained-width article. Used by
// Privacy and Terms so the legal-document family stays visually consistent.
export function LegalArticleLayout({ ariaLabel, sections, children }: LegalArticleLayoutProps) {
  return (
    <Section aria-label={ariaLabel} surface="canvas">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] lg:gap-16">
          <nav
            aria-label="On this page"
            className="hidden lg:block lg:sticky lg:top-[var(--swq-sticky-content-offset)] lg:self-start"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary-700">
              On this page
            </p>
            <ul className="mt-4 space-y-2.5 border-l border-border pl-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm leading-6 text-text-secondary transition-colors duration-micro ease-swq-out hover:text-primary-700 motion-reduce:transition-none"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="max-w-reading space-y-10 [&_h2]:scroll-mt-[var(--swq-scroll-margin-top)]">
            {children}
          </article>
        </div>
      </Container>
    </Section>
  );
}
