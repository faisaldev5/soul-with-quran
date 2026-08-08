import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CoursesPageHero() {
  return (
    <Section
      aria-labelledby="courses-page-hero-heading"
      spacing="compact"
      withContainer={false}
      className="relative isolate -mt-[var(--swq-site-header-height)] overflow-hidden border-b border-border !py-0 lg:-mt-[98px]"
    >
      <div className="relative isolate min-h-[calc(30rem+var(--swq-site-header-height))] sm:min-h-[calc(31rem+var(--swq-site-header-height))] lg:min-h-[calc(30rem+98px)]">
        <Container className="relative z-10 flex min-h-[calc(30rem+var(--swq-site-header-height))] items-center pt-[calc(3rem+var(--swq-site-header-height))] pb-12 md:min-h-[calc(31rem+var(--swq-site-header-height))] md:pt-[calc(3.5rem+var(--swq-site-header-height))] md:pb-14 lg:min-h-[calc(30rem+98px)] lg:pt-[98px] lg:pb-0">
          <Reveal className="max-w-2xl lg:max-w-[46%]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 sm:text-sm">
              ONLINE QURAN COURSES
            </p>
            <h1
              id="courses-page-hero-heading"
              className="mt-5 max-w-[16ch] text-balance text-4xl leading-[1.08] text-primary-600 md:text-5xl md:leading-[1.04] lg:text-6xl"
            >
              A clear learning path for every stage.
            </h1>
            <p className="mt-6 max-w-supporting text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
              Explore structured online Quran courses for children and adults,
              taught with patience, personal attention, and consistent guidance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/free-trial"
                icon={<ArrowRight aria-hidden="true" className="size-4" />}
                className="w-full !bg-gold-500 px-6 !text-primary-950 hover:!bg-gold-400 active:!bg-gold-600 sm:w-auto"
              >
                Book a free trial
              </ButtonLink>
              <ButtonLink
                href="/courses#course-paths"
                variant="secondary"
                className="w-full bg-transparent px-6 sm:w-auto"
              >
                Explore courses
              </ButtonLink>
            </div>
          </Reveal>
        </Container>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <Image
            src="/images/courses/services-hero-quran.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_58%] lg:object-[70%_60%]"
          />
          <div className="absolute inset-0 bg-primary-950/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/78 to-background/20 lg:from-background/95 lg:via-background/65 lg:to-transparent" />
        </div>
      </div>
    </Section>
  );
}
