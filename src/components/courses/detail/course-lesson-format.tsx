import { Reveal } from "@/components/motion/reveal";
import { CourseIcon } from "@/components/courses/detail/course-icons";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { CourseDetail } from "@/content/courses/types";

type CourseLessonFormatProps = {
  course: CourseDetail;
};

export function CourseLessonFormat({ course }: CourseLessonFormatProps) {
  const { lessonFormat } = course;

  return (
    <Section
      aria-labelledby="course-lesson-format-heading"
      surface="white"
      withContainer={false}
    >
      <Container>
        <Reveal className="rounded-large bg-primary-600 p-6 text-text-inverse shadow-medium sm:p-7 md:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold-300">
            {lessonFormat.eyebrow}
          </p>
          <h2
            id="course-lesson-format-heading"
            className="mt-4 max-w-[18ch] text-balance text-3xl leading-[1.12] text-white md:text-4xl md:leading-[1.08]"
          >
            {lessonFormat.heading}
          </h2>

          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-3">
            {lessonFormat.facts.map((fact) => (
              <article key={fact.title} className="min-w-0">
                <span
                  aria-hidden="true"
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-gold-200"
                >
                  <CourseIcon name={fact.icon} className="size-[18px]" />
                </span>
                <h3 className="mt-4 text-base font-semibold leading-6 text-white">
                  {fact.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-primary-100 md:text-sm md:leading-6">
                  {fact.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-12 border-t border-white/20 pt-5 text-base leading-7 text-primary-100 md:mt-10 md:text-sm md:leading-6">
            {lessonFormat.supportingNote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
