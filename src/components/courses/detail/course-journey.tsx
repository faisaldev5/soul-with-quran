import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { CourseDetail } from "@/content/courses/types";

type CourseJourneyProps = {
  course: CourseDetail;
};

export function CourseJourney({ course }: CourseJourneyProps) {
  const { journey } = course;

  return (
    <Section
      aria-labelledby="course-journey-heading"
      surface="canvas"
      withContainer={false}
    >
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
            {journey.eyebrow}
          </p>
          <h2
            id="course-journey-heading"
            className="mt-4 max-w-[22ch] text-balance text-3xl leading-[1.12] text-primary-700 md:text-4xl md:leading-[1.08]"
          >
            {journey.heading}
          </h2>
        </Reveal>

        <Reveal className="relative mt-10" delay={60}>
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[18px] top-4 w-px bg-primary-100 md:bottom-auto md:left-[10%] md:right-[10%] md:top-5 md:h-px md:w-auto"
          />
          <ol className="grid gap-y-10 md:grid-cols-5 md:gap-0">
            {journey.stages.map((stage) => (
              <li
                key={stage.number}
                className="relative flex gap-5 md:block md:px-3 md:text-center lg:px-5"
              >
                <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border border-primary-200 bg-white text-xs font-semibold text-primary-700 md:mx-auto">
                  {stage.number}
                </span>
                <div>
                  <h3 className="md:mt-4 text-base font-semibold leading-6 text-primary-700">
                    {stage.title}
                  </h3>
                  <p className="mt-2 max-w-[20ch] text-base leading-7 text-text-secondary md:mx-auto md:text-sm md:leading-6">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-reading text-base leading-7 text-text-secondary md:mt-10 md:text-sm md:leading-6">
            {journey.supportingNote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
