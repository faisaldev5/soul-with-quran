import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const supportSteps = [
  {
    number: "1",
    title: "Enquiry",
    description: "Share your goals and tell us about the learner.",
  },
  {
    number: "2",
    title: "Assessment",
    description: "We understand the current level and learning needs.",
  },
  {
    number: "3",
    title: "Plan & Teacher Match",
    description: "We recommend the right course and suitable teacher.",
  },
  {
    number: "4",
    title: "Start Lessons",
    description: "Begin classes and follow a clear learning plan.",
  },
  {
    number: "5",
    title: "Ongoing Support",
    description: "We track progress and provide regular updates to parents.",
  },
] as const;

export function CoursesLearningPath() {
  return (
    <Section
      aria-labelledby="learning-path-heading"
      surface="white"
      spacing="compact"
      withContainer={false}
    >
      <Container>
        <Reveal className="rounded-large border border-primary-100 bg-primary-50/70 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-11">
          <div className="text-center">
            <p className="mx-auto w-fit text-center text-xs font-semibold uppercase tracking-[0.16em] text-sage-700">
              A SMOOTH LEARNING EXPERIENCE
            </p>
            <h2
              id="learning-path-heading"
              className="mx-auto mt-4 max-w-[26ch] text-balance text-2xl leading-[1.12] text-primary-700 md:text-3xl md:leading-[1.08]"
            >
              From onboarding to ongoing support, we&apos;re with you.
            </h2>
          </div>

          <ol className="mt-8 grid gap-8 md:grid-cols-5 md:gap-0">
            {supportSteps.map((step, index) => (
              <li
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {index < supportSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+1.125rem)] right-[calc(-50%+1.125rem)] top-4 hidden border-t border-dashed border-primary-200 md:block"
                  />
                ) : null}
                <span className="relative z-10 mx-auto flex size-9 items-center justify-center rounded-full border border-primary-200 bg-white text-sm font-semibold text-primary-700">
                  {step.number}
                </span>
                <h3 className="mt-4 min-h-10 text-sm font-semibold leading-5 text-primary-700">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[18ch] text-sm leading-6 text-text-secondary">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </Section>
  );
}
