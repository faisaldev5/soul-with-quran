import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { CourseDetail } from "@/content/courses/types";

type RelatedCoursesProps = {
  course: CourseDetail;
};

export function RelatedCourses({ course }: RelatedCoursesProps) {
  const { relatedCourses } = course;

  return (
    <Section
      aria-labelledby="related-courses-heading"
      surface="canvas"
      withContainer={false}
    >
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
            {relatedCourses.eyebrow}
          </p>
          <h2
            id="related-courses-heading"
            className="mt-4 text-balance text-3xl leading-[1.12] text-primary-700 md:text-4xl md:leading-[1.08]"
          >
            {relatedCourses.heading}
          </h2>
        </Reveal>

        <Reveal className="mt-8 grid gap-6 md:grid-cols-3 md:gap-5" delay={60}>
          {relatedCourses.items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex min-h-52 flex-col rounded-large border border-border bg-surface p-6 shadow-small transition-[border-color,box-shadow,transform] duration-normal ease-swq-out hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-hover focus-visible:-translate-y-0.5 motion-reduce:transition-none"
            >
              <span
                aria-hidden="true"
                className="flex size-9 items-center justify-center rounded-full bg-primary-50 text-primary-700"
              >
                <BookOpen className="size-[18px]" strokeWidth={1.7} />
              </span>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-primary-700">
                {item.name}
              </h3>
              <p className="mt-3 text-base leading-7 text-text-secondary md:mt-2 md:text-sm md:leading-6">
                {item.description}
              </p>
              <span className="mt-auto inline-flex min-h-11 items-end gap-2 pt-6 text-sm font-semibold leading-6 text-primary-700 md:pt-5">
                <span>View course</span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-micro ease-swq-out group-hover:translate-x-0.5 motion-reduce:transition-none"
                />
              </span>
            </Link>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
