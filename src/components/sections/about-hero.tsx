import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutHero() {
  return (
    <Section
      aria-labelledby="about-hero-heading"
      className="relative isolate overflow-hidden border-b border-border !py-0"
      spacing="compact"
      withContainer={false}
    >
      <div className="relative isolate min-h-[32rem] sm:min-h-[34rem] lg:min-h-[32rem]">
        <Container className="relative z-10 flex min-h-[32rem] items-center py-14 md:min-h-[34rem] md:py-16 lg:min-h-[32rem] lg:py-0">
          <Reveal className="max-w-xl lg:max-w-[48%]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-200 sm:text-sm">
              ABOUT SOULWITHQURAN
            </p>
            <h1
              id="about-hero-heading"
              className="mt-5 max-w-[17ch] text-balance text-4xl leading-[1.08] text-text-inverse md:text-5xl md:leading-[1.04] lg:text-6xl"
            >
              Personal Quran learning with patience, {" "}
              <span className="font-normal italic text-text-inverse/85">
                structure, and care.
              </span>
            </h1>
            <p className="mt-6 max-w-supporting text-base leading-7 text-text-inverse/85 sm:text-lg sm:leading-8">
            SoulWithQuran offers online Quran classes for children and adults,
            built around each learner’s level, goals, and pace.
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
                href="/courses"
                variant="secondary"
                className="w-full px-6 sm:w-auto"
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
            src="/images/about/about-hero-quran.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[86%_50%] lg:object-[78%_center]"
          />
          <div className="absolute inset-0 bg-primary-950/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/70 to-primary-950/25 lg:from-primary-950/90 lg:via-primary-950/55 lg:to-primary-950/10" />
        </div>
      </div>
    </Section>
  );
}
