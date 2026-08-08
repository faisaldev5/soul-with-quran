import { CompactTrialCta } from "@/components/sections/compact-trial-cta";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type CoursesFinalCtaProps = {
  surface?: "canvas" | "white";
};

export function CoursesFinalCta({
  surface = "canvas",
}: CoursesFinalCtaProps) {
  return (
    <Section
      aria-labelledby="courses-final-cta-heading"
      surface={surface}
      spacing="compact"
      withContainer={false}
    >
      <Container>
        <CompactTrialCta
          id="courses-final-cta-heading"
          heading="Begin with the right learning path."
          description="Request a free trial and discover the most suitable course for the learner's current stage and goals."
        />
      </Container>
    </Section>
  );
}
