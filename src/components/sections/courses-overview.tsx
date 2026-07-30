import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { courses, type Course } from "@/data/courses";
import { cn } from "@/lib/cn";

type CourseCardProps = {
  course: Course;
  navy?: boolean;
  className?: string;
};

function CourseCard({ className, course, navy = false }: CourseCardProps) {
  return (
    <Card
      as="article"
      className={cn(
        "flex h-full flex-col",
        navy
          ? "!border-primary-600 !bg-primary-600 p-6 text-text-inverse shadow-medium md:p-8"
          : "p-6 md:p-8",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.16em]",
            navy ? "text-gold-300" : "text-sage-700",
          )}
        >
          {course.category}
        </p>
        <span
          className={cn(
            "text-xs font-medium tracking-[0.08em]",
            navy ? "text-gold-200" : "text-primary-400",
          )}
        >
          {course.number}
        </span>
      </div>

      <div className={cn("mt-10", navy && "lg:mt-8")}>
        <h3
          className={cn(
            navy
              ? "text-4xl leading-[1.1]"
              : "text-2xl leading-8 md:text-3xl md:leading-9",
            navy && "text-white",
          )}
        >
          {course.name}
        </h3>
        <p
          className={cn(
            "mt-3 text-base leading-7",
            navy ? "text-primary-100" : "text-text-secondary",
          )}
        >
          {course.description}
        </p>
      </div>

      <div
        className={cn(
          "mt-auto flex justify-end border-t pt-4",
          navy ? "border-white/20" : "border-border",
        )}
      >
        <Link
          href={course.href}
          className={cn(
            "group inline-flex min-h-11 items-center gap-2 text-sm font-semibold leading-6 no-underline",
            navy
              ? "text-gold-300 hover:text-gold-200"
              : "text-primary-700 hover:text-primary-800",
          )}
        >
          <span>Explore {course.name}</span>
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-micro ease-swq-out group-hover:translate-x-0.5 motion-reduce:transition-none"
          />
        </Link>
      </div>
    </Card>
  );
}

export function CoursesOverview() {
  return (
    <Section
      id="courses-overview"
      aria-labelledby="courses-overview-heading"
      surface="canvas"
    >
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end">
          <SectionHeading
            eyebrow="COURSES"
            heading={
              <>
                <span className="block text-4xl leading-[1.08] md:text-5xl md:leading-[1.04] lg:text-6xl">
                  Five carefully crafted paths,
                </span>{" "}
                <span className="block text-4xl font-normal italic leading-[1.08] text-text-secondary md:text-5xl md:leading-[1.04] lg:text-6xl">
                  one dedicated tutor.
                </span>
              </>
            }
            id="courses-overview-heading"
          />
          <p className="max-w-supporting text-base leading-7 text-text-secondary lg:pb-1">
            From first steps in reading to Tajweed, memorisation, and Islamic
            Studies, each course is taught with patient, personal guidance.
          </p>
        </Reveal>

        <Reveal className="mt-14" delay={60}>
          <div className="grid gap-6 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
            {courses.map((course) => {
              const isTajweed = course.name === "Tajweed";

              return (
                <CourseCard
                  key={course.href}
                  course={course}
                  navy={isTajweed}
                  className={
                    isTajweed ? "lg:col-start-3 lg:row-span-2" : undefined
                  }
                />
              );
            })}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
