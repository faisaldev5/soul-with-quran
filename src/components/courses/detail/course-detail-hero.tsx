import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { CourseIcon } from "@/components/courses/detail/course-icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { CourseDetail } from "@/content/courses/types";

type CourseDetailHeroProps = {
  course: CourseDetail;
};

export function CourseDetailHero({ course }: CourseDetailHeroProps) {
  const { hero } = course;

  return (
    <Section
      aria-labelledby="course-detail-hero-heading"
      surface="canvas"
      spacing="compact"
      withContainer={false}
      className="border-b border-border"
    >
      <Container>
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm leading-6 text-text-secondary">
              {course.breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.label} className="inline-flex items-center">
                  {index > 0 ? (
                    <ChevronRight aria-hidden="true" className="mx-1 size-4 text-text-muted" />
                  ) : null}
                  {breadcrumb.href ? (
                    <Link
                      href={breadcrumb.href}
                      className="rounded-small underline-offset-4 hover:text-primary-700 hover:underline"
                    >
                      {breadcrumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-primary-700">
                      {breadcrumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <Reveal className="min-w-0" variant="fade-right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 sm:text-sm">
              {hero.eyebrow}
            </p>
            <h1
              id="course-detail-hero-heading"
              className="mt-5 max-w-[16ch] text-balance text-4xl leading-[1.08] text-primary-700 md:text-5xl md:leading-[1.04] lg:text-6xl"
            >
              {hero.heading}
            </h1>
            <p className="mt-6 max-w-reading text-base leading-7 text-text-secondary md:text-lg md:leading-8">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/free-trial"
                icon={<ArrowRight aria-hidden="true" className="size-4" />}
                className="w-full sm:w-auto"
              >
                Request a free trial
              </ButtonLink>
              <ButtonLink
                href="/courses"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                View all courses
              </ButtonLink>
            </div>

            <p className="mt-7 max-w-supporting border-l-2 border-sage-300 pl-4 text-base leading-7 text-text-secondary md:text-sm md:leading-6">
              <CourseIcon
                name="book-open"
                className="mr-2 inline-block size-4 align-[-0.2em] text-sage-700"
              />
              {hero.supportingFact}
            </p>
          </Reveal>

          <Reveal
            className="relative mx-auto w-full max-w-[42rem]"
            variant="fade-left"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-large border border-border bg-sage-50 shadow-medium">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 52vw, 100vw"
                className={`object-cover ${course.visual?.heroImagePosition ?? "object-center"}`}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
