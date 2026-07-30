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
      className="relative isolate overflow-hidden border-b border-border !py-12 md:!py-14 lg:!py-16"
      spacing="compact"
      withContainer={false}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-56 w-full sm:h-64 lg:inset-y-0 lg:h-auto lg:w-[68%]"
      >
        <Image
          src="/images/about/about-hero-quran.webp"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 68vw, 100vw"
          className="object-cover object-[78%_center] opacity-80 lg:opacity-100"
        />
        <div className="absolute inset-0 bg-primary-950/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/90 lg:to-background/10" />
      </div>

      <Container className="relative z-10">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 sm:text-sm">
            ABOUT SOULWITHQURAN
          </p>
          <h1
            id="about-hero-heading"
            className="mt-5 max-w-[17ch] text-balance text-4xl leading-[1.08] text-primary-600 md:text-5xl md:leading-[1.04] lg:text-6xl"
          >
            Personal Quran learning with patience, {" "}
            <span className="font-normal italic text-text-secondary">
              structure, and care.
            </span>
          </h1>
          <p className="mt-6 max-w-supporting text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
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
              className="w-full bg-transparent px-6 sm:w-auto"
            >
              Explore courses
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
