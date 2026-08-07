import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ContactHero() {
  return (
    <Section aria-labelledby="contact-heading" surface="canvas" spacing="compact" className="border-b border-border/70 lg:pb-10">
      <Container>
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm leading-6 text-text-secondary">
            <li className="inline-flex items-center">
              <Link href="/" className="rounded-small underline-offset-4 hover:text-primary-700 hover:underline">
                Home
              </Link>
            </li>
            <li className="inline-flex items-center">
              <ChevronRight aria-hidden="true" className="mx-1 size-4 text-text-muted" />
              <span aria-current="page" className="text-text-primary">Contact</span>
            </li>
          </ol>
        </nav>

        <div className="max-w-[42rem]">
          <p className="eyebrow text-sage-700">CONTACT</p>
          <h1 id="contact-heading" className="mt-4 text-balance text-4xl leading-[1.12] text-primary-700 sm:text-5xl">
            We would love to hear from you.
          </h1>
          <p className="mt-5 text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            Have a question about courses, lesson formats, pricing, scheduling, or something else? Send us a message and we’ll get back to you.
          </p>
          <p className="mt-6 text-sm leading-6 text-text-secondary">
            Ready to begin learning?{" "}
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-1 font-semibold text-primary-700 underline-offset-4 hover:underline"
            >
              Request a free trial <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
}
