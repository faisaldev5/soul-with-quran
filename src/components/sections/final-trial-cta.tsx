import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function FinalTrialCta() {
  return (
    <Section
      id="final-trial-cta"
      aria-labelledby="final-trial-cta-heading"
      surface="canvas"
      withContainer={false}
      className="border-t border-border bg-background"
    >
      <Container>
        <Reveal className="relative isolate min-h-[30rem] overflow-hidden rounded-large border border-primary-500 shadow-medium sm:min-h-[32rem] lg:min-h-[34rem]" delay={60}>
          <Image
            src="/images/homepage/quran-study-desk.jpg"
            alt=""
            fill
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) calc(100vw - 80px), 1184px"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-primary-900/70"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-primary-600/45"
          />

          <div className="relative z-10 flex min-h-[30rem] items-center px-6 py-16 sm:min-h-[32rem] sm:px-12 lg:min-h-[34rem] lg:px-20">
            <div className="max-w-[36rem]">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold-300">
                Begin your journey
              </p>
              <h2
                id="final-trial-cta-heading"
                className="mt-4 max-w-[17ch] text-balance text-4xl leading-[1.08] text-white md:text-5xl md:leading-[1.04]"
              >
                Begin with a free trial,
                <span className="block font-normal italic text-sage-300">
                  and find the right learning path.
                </span>
              </h2>
              <p className="mt-6 max-w-[50ch] text-base leading-7 text-primary-100 md:text-lg md:leading-8">
                Meet your tutor, share the learner&apos;s current stage and goals,
                and discover a calm, personal approach to Quran learning.
              </p>
              <ButtonLink
                href="/free-trial"
                variant="secondary"
                icon={<ArrowRight aria-hidden="true" className="size-4" />}
                className="mt-8 w-full !border-gold-500 !bg-gold-500 !text-primary-950 shadow-medium hover:!border-gold-400 hover:!bg-gold-400 hover:!text-primary-950 hover:shadow-large focus-visible:outline-gold-300 sm:w-auto"
              >
                Request your free trial
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
