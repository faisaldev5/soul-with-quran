import { CompactTrialCta } from "@/components/sections/compact-trial-cta";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { CourseDetail } from "@/content/courses/types";

type CourseFinalCtaProps = {
  course: CourseDetail;
};

export function CourseFinalCta({ course }: CourseFinalCtaProps) {
  return (
    <Section
      aria-labelledby="course-final-cta-heading"
      surface="canvas"
      spacing="compact"
      withContainer={false}
    >
      <Container>
        <CompactTrialCta
          id="course-final-cta-heading"
          heading={course.finalCta.heading}
          description={course.finalCta.description}
        />
      </Container>
    </Section>
  );
}
