import {
  CalendarCheck,
  ListChecks,
  UserRound,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type TeachingPrinciple = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const teachingPrinciples: readonly TeachingPrinciple[] = [
  {
    title: "Patient, step-by-step guidance",
    description:
      "Learners build strong foundations through clear explanations and patient correction.",
    icon: ListChecks,
  },
  {
    title: "One-to-one attention",
    description:
      "Lessons adapt to each learner's current level, pace, and goals.",
    icon: UserRound,
  },
  {
    title: "Carefully matched small groups",
    description:
      "Group lessons remain focused by bringing together learners at a similar stage.",
    icon: UsersRound,
  },
  {
    title: "Consistent lessons and revision",
    description:
      "Regular practice and planned revision support steady progress.",
    icon: CalendarCheck,
  },
];

export function AboutTeachingApproach() {
  return (
    <Section
      id="teaching-approach"
      aria-labelledby="teaching-approach-heading"
      surface="canvas"
      spacing="compact"
      withContainer={false}
    >
      <Container>
        <div className="space-y-8 md:space-y-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
              OUR TEACHING APPROACH
            </p>
            <h2
              id="teaching-approach-heading"
              className="mt-4 max-w-[24ch] text-balance text-3xl leading-[1.12] text-primary-700 md:text-4xl md:leading-[1.08]"
            >
              A calm and structured learning experience.
            </h2>
          </Reveal>

          <Reveal className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {teachingPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <Card
                  key={principle.title}
                  as="article"
                  className="h-full bg-surface p-5 shadow-none md:p-6"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-9 items-center justify-center rounded-full bg-primary-50 text-primary-700"
                  >
                    <Icon className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-7 text-primary-700">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {principle.description}
                  </p>
                </Card>
              );
            })}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
