import {
  ArrowRight,
  Baby,
  BookMarked,
  BookOpen,
  BookOpenCheck,
  Landmark,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { AboutFinalCta } from "@/components/sections/about-final-cta";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type LearnerGroup = {
  title: string;
  icon: LucideIcon;
};

const learnerGroups: LearnerGroup[] = [
  { title: "Children starting with Qaida", icon: Baby },
  { title: "Learners improving Quran reading", icon: BookOpen },
  { title: "Students focusing on Tajweed", icon: BookOpenCheck },
  { title: "Hifz learners", icon: BookMarked },
  { title: "Adults returning to Quran learning", icon: UserRound },
  { title: "Islamic Studies learners", icon: Landmark },
];

export function AboutLearnerGroups() {
  return (
    <Section
      id="lessons-for"
      aria-labelledby="lessons-for-heading"
      surface="white"
      spacing="compact"
      withContainer={false}
    >
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
            WHO THE LESSONS ARE FOR
          </p>
          <h2
            id="lessons-for-heading"
            className="mt-3 text-balance text-3xl leading-[1.12] text-primary-700 md:text-4xl md:leading-[1.08]"
          >
            Classes for children, teens, and adults.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
            {learnerGroups.map(({ title, icon: Icon }, index) => (
              <div
                key={title}
                className={`min-w-0 px-2 text-center lg:px-4 ${
                  index > 0 ? "lg:border-l lg:border-border" : ""
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className="mx-auto size-7 text-primary-700"
                  strokeWidth={1.5}
                />
                <h3 className="mx-auto mt-3 max-w-[14ch] text-xs font-semibold leading-4 text-primary-700">
                  {title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <ButtonLink
              href="/courses"
              variant="secondary"
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              Explore all courses
            </ButtonLink>
          </div>
        </Reveal>
        <AboutFinalCta />
      </Container>
    </Section>
  );
}
