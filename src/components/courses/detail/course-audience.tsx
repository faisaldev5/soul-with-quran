import { Reveal } from "@/components/motion/reveal";
import { CourseIcon } from "@/components/courses/detail/course-icons";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { CourseDetail } from "@/content/courses/types";

type CourseAudienceProps = {
  course: CourseDetail;
};

export function CourseAudience({ course }: CourseAudienceProps) {
  const { audience } = course;

  return (
    <Section
      aria-labelledby="course-audience-heading"
      surface="white"
      withContainer={false}
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
              {audience.eyebrow}
            </p>
            <h2
              id="course-audience-heading"
              className="mt-4 max-w-[15ch] text-balance text-3xl leading-[1.12] text-primary-700 md:text-4xl md:leading-[1.08]"
            >
              {audience.heading}
            </h2>
            <p className="mt-6 max-w-reading text-base leading-7 text-text-secondary">
              {audience.description}
            </p>
          </Reveal>

          <Reveal className="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-8" delay={60}>
            {audience.items.map((item) => (
              <article key={item.title} className="min-w-0">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-primary-50 text-primary-700"
                >
                  <CourseIcon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold leading-6 text-primary-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-text-secondary md:text-sm md:leading-6">
                  {item.description}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
