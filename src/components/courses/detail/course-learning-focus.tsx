import { Reveal } from "@/components/motion/reveal";
import { CourseIcon } from "@/components/courses/detail/course-icons";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { CourseDetail } from "@/content/courses/types";
import { cn } from "@/lib/cn";

type CourseLearningFocusProps = {
  course: CourseDetail;
};

export function CourseLearningFocus({ course }: CourseLearningFocusProps) {
  const { learningFocus } = course;

  return (
    <Section
      aria-labelledby="course-learning-focus-heading"
      surface="canvas"
      withContainer={false}
    >
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
            {learningFocus.eyebrow}
          </p>
          <h2
            id="course-learning-focus-heading"
            className="mt-4 max-w-[22ch] text-balance text-3xl leading-[1.12] text-primary-700 md:text-4xl md:leading-[1.08]"
          >
            {learningFocus.heading}
          </h2>
          <p className="mt-5 max-w-supporting text-base leading-7 text-text-secondary">
            {learningFocus.description}
          </p>
        </Reveal>

        <Reveal className="mt-10 grid gap-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3" delay={60}>
          {learningFocus.items.map((item) => (
            <Card
              as="article"
              key={item.title}
              className={cn(
                "h-full p-6 shadow-none md:p-6",
                item.featured && "border-sage-200 bg-sage-50",
              )}
            >
              <span
                aria-hidden="true"
                className="flex size-9 items-center justify-center rounded-full bg-primary-50 text-primary-700"
              >
                <CourseIcon name={item.icon} className="size-[18px]" />
              </span>
              <h3 className="mt-5 text-base font-semibold leading-6 text-primary-700">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-text-secondary md:text-sm md:leading-6">
                {item.description}
              </p>
            </Card>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
