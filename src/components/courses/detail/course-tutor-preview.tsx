import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { CourseIcon } from "@/components/courses/detail/course-icons";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { tutorProfile } from "@/content/tutor-profile";
import type { CourseDetail } from "@/content/courses/types";

type CourseTutorPreviewProps = {
  course: CourseDetail;
};

export function CourseTutorPreview({ course }: CourseTutorPreviewProps) {
  const { tutorPreview } = course;

  return (
    <Section
      aria-labelledby="course-tutor-preview-heading"
      surface="white"
      withContainer={false}
    >
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14 lg:gap-20">
          <Reveal
            className="relative mx-auto w-full max-w-none md:max-w-[32rem]"
            variant="fade-right"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-large border border-border bg-sage-50 shadow-medium md:aspect-[4/5]">
              <Image
                src={tutorProfile.image}
                alt={tutorProfile.imageAlt}
                fill
                sizes="(min-width: 1024px) 38vw, (min-width: 768px) 42vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          <Reveal variant="fade-left">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
              {tutorPreview.eyebrow}
            </p>
            <h2
              id="course-tutor-preview-heading"
              className="mt-4 max-w-[22ch] text-balance text-3xl leading-[1.12] text-primary-700 md:text-4xl md:leading-[1.08]"
            >
              {tutorPreview.heading}
            </h2>
            <p className="mt-5 max-w-reading text-base leading-7 text-text-secondary md:text-lg md:leading-8">
              {tutorPreview.description}
            </p>

            <ul className="mt-8 grid gap-6 border-y border-border py-6 md:grid-cols-3 md:gap-4">
              {tutorPreview.principles.map((principle) => (
                <li key={principle.title} className="min-w-0">
                  <span
                    aria-hidden="true"
                    className="flex size-9 items-center justify-center rounded-full bg-sage-100 text-primary-700"
                  >
                    <CourseIcon name={principle.icon} className="size-[18px]" />
                  </span>
                  <p className="mt-3 text-base font-semibold leading-6 text-primary-700 md:text-sm md:leading-5">
                    {principle.title}
                  </p>
                  <p className="mt-1 text-base leading-7 text-text-secondary md:text-sm md:leading-5">
                    {principle.description}
                  </p>
                </li>
              ))}
            </ul>

            <Link
              href={tutorPreview.linkHref}
              className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-medium text-sm font-semibold leading-6 text-primary-700 underline-offset-4 hover:text-primary-800 hover:underline"
            >
              <span>{tutorPreview.linkLabel}</span>
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-micro ease-swq-out group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
