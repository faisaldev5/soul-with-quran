import {
  ArrowRight,
  HeartHandshake,
  ListChecks,
  UserRound,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const benefits: readonly Benefit[] = [
  {
    title: "One-to-one guidance",
    description:
      "Personal support through each lesson, shaped around the learner’s current stage and pace.",
    icon: UserRound,
  },
  {
    title: "Patient, structured teaching",
    description:
      "Calm, step-by-step guidance keeps learning clear, focused, and manageable.",
    icon: ListChecks,
  },
  {
    title: "Carefully matched small groups",
    description:
      "Learners at a similar stage can study together without losing personal attention.",
    icon: UsersRound,
  },
  {
    title: "Children and adults",
    description:
      "Support for different ages, goals, and stages of Quran learning.",
    icon: HeartHandshake,
  },
];

const facts = [
  { value: "30–40 minutes", label: "Focused class time" },
  { value: "5 classes", label: "Each week" },
  { value: "One-to-one", label: "Or carefully matched small groups" },
] as const;

function BenefitCard({ description, icon: Icon, title }: Benefit) {
  return (
    <Card as="article" className="flex flex-col p-6 md:min-h-64 md:p-7">
      <span
        aria-hidden="true"
        className="flex size-10 items-center justify-center rounded-full bg-sage-100 text-primary-700"
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <h3 className="mt-5 text-xl leading-7">{title}</h3>
      <p className="mt-3 text-base leading-7 text-text-secondary">
        {description}
      </p>
    </Card>
  );
}

export function WhyLearnersChooseUs() {
  return (
    <Section
      id="why-learners-choose-us"
      aria-labelledby="why-learners-choose-us-heading"
      surface="white"
      withContainer={false}
      className="border-y border-border"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16">
          <div className="min-w-0 lg:sticky lg:top-[var(--swq-sticky-content-offset)] lg:self-start">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
                Why learners choose us
              </p>
              <h2
                id="why-learners-choose-us-heading"
                className="mt-4 max-w-[13ch] text-balance text-4xl leading-[1.08] md:text-5xl md:leading-[1.04] lg:text-6xl"
              >
                A learning experience that feels personal, {" "}
                <span className="font-normal italic text-text-secondary">
                  because it is.
                </span>
              </h2>
              <p className="mt-6 max-w-supporting text-base leading-7 text-text-secondary md:text-lg md:leading-8">
                SoulWithQuran combines patient teaching, personal guidance, and a
                consistent learning routine for children and adults.
              </p>
              <ButtonLink
                href="/free-trial"
                icon={<ArrowRight aria-hidden="true" className="size-4" />}
                className="mt-7"
              >
                Request a free trial
              </ButtonLink>
            </Reveal>
          </div>

          <div className="min-w-0 space-y-6">
            <Reveal>
              <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
                {benefits.map((benefit) => (
                  <BenefitCard key={benefit.title} {...benefit} />
                ))}
              </div>
            </Reveal>

            <Reveal delay={70}>
              <aside
                aria-label="Class format"
                className="rounded-large bg-primary-600 p-6 text-text-inverse shadow-medium md:p-8 lg:p-10"
              >
              <div className="grid gap-8 md:grid-cols-3 md:gap-0">
                {facts.map((fact, index) => (
                  <div
                    key={fact.value}
                    className={
                      index === 0
                        ? ""
                        : "border-t border-white/20 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0"
                    }
                  >
                    <p className="font-heading text-2xl font-semibold leading-8 text-white md:text-3xl">
                      {fact.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-primary-100">
                      {fact.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-white/20 pt-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-supporting text-base leading-7 text-primary-100">
                  Begin with a free trial and find the right learning path.
                </p>
                <ButtonLink
                  href="/free-trial"
                  variant="tertiary"
                  icon={<ArrowRight aria-hidden="true" className="size-4" />}
                  className="shrink-0 !text-gold-300 hover:!text-gold-200 focus-visible:outline-gold-300"
                >
                  Request a free trial
                </ButtonLink>
              </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
