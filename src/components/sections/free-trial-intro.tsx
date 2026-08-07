import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function FreeTrialIntro() {
  return (
    <Section
      aria-labelledby="free-trial-heading"
      surface="canvas"
      spacing="compact"
      className="lg:pb-6"
    >
      <Container>
        <div className="mx-auto max-w-[740px] text-center">
          <p className="eyebrow mx-auto w-full text-center text-sage-700">COMPLETELY FREE 20–30 MINUTE TRIAL</p>
          <h1 id="free-trial-heading" className="mt-4 text-balance text-4xl leading-[1.12] text-primary-700 sm:text-5xl">
            Begin your Quran learning journey with a free trial.
          </h1>
          <p className="mx-auto mt-5 max-w-[42rem] text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            Tell us about the learner, their goals, and a suitable time. We’ll review the request and send the confirmed trial details within 24 hours.
          </p>
          <p className="mx-auto mt-4 w-full text-center text-sm font-medium leading-6 text-primary-700 sm:text-base">
            No payment required <span aria-hidden="true">•</span> Children and adults welcome
          </p>
          <p className="mx-auto mt-3 w-full text-center text-sm leading-6 text-text-secondary">Regular classes are held Monday to Friday.</p>
        </div>
      </Container>
    </Section>
  );
}
