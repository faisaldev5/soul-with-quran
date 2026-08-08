import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Compass,
  ListChecks,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { learningProcessSteps } from "@/data/learning-process";

const stepIcons: Record<string, LucideIcon> = {
  "01": CalendarDays,
  "02": Compass,
  "03": BookOpenCheck,
  "04": ListChecks,
};

export function HowLearningWorks() {
  return (
    <Section
      id="how-learning-works"
      aria-labelledby="how-learning-works-heading"
      surface="white"
      withContainer={false}
      className="isolate border-t border-border"
    >
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
              How learning works
            </p>
            <h2
              id="how-learning-works-heading"
              className="mt-4 max-w-[26ch] text-balance text-4xl leading-[1.08] md:text-5xl md:leading-[1.04] lg:text-5xl"
            >
              A simple, unhurried path
              <span className="block font-normal italic text-text-secondary">
                from your first trial to consistent learning.
              </span>
            </h2>
          </div>
          <p className="max-w-supporting text-base leading-7 text-text-secondary md:text-lg md:leading-8 lg:pb-1">
            We begin by understanding the learner’s current stage and goals,
            then shape a clear routine with patient, personal guidance.
          </p>
        </Reveal>

        <Reveal className="mt-14 lg:mt-20" delay={60}>
          <ol
            aria-label="Learning journey steps"
            className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-6"
          >
            {learningProcessSteps.map((step) => {
              const Icon = stepIcons[step.number];

              return (
                <li key={step.number} className="relative">
                  <article className="relative z-floating flex min-h-full flex-col rounded-large border border-border bg-background p-8 shadow-small lg:min-h-[22rem]">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex size-11 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                        <Icon
                          aria-hidden="true"
                          className="size-5"
                          strokeWidth={1.75}
                        />
                      </span>
                      <span className="text-sm font-medium tracking-[0.08em] text-neutral-400">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl leading-8">{step.title}</h3>
                    <p className="mt-3 text-base leading-7 text-text-secondary">
                      {step.description}
                    </p>
                  </article>

                  {step.number !== "04" ? (
                    <span
                      aria-hidden="true"
                      className="swq-learning-connector pointer-events-none absolute -right-6 top-9 z-0 hidden h-px w-6 bg-gold-200 lg:block"
                    />
                  ) : null}
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal className="mt-16 lg:mt-20" delay={70}>
          <div className="flex flex-col gap-6 rounded-large bg-primary-600 px-6 py-8 text-text-inverse shadow-medium md:flex-row md:items-center md:justify-between md:px-10 md:py-10 lg:px-12">
            <p className="max-w-supporting text-base leading-7 text-primary-100 md:text-lg md:leading-8">
              Begin with a free trial and find the right learning path.
            </p>
            <ButtonLink
              href="/free-trial"
              variant="secondary"
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
              className="w-full shrink-0 !border-gold-500 !bg-gold-500 !text-primary-950 hover:!border-gold-400 hover:!bg-gold-400 hover:!text-primary-950 focus-visible:outline-gold-300 md:w-auto"
            >
              Request a free trial
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
