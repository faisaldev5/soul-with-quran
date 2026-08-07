import { FreeTrialForm } from "@/components/free-trial/free-trial-form";
import { TrialProgressHorizontal } from "@/components/free-trial/trial-progress-horizontal";
import { TrialStepProvider } from "@/components/free-trial/trial-step-context";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function FreeTrialFormSection() {
  return (
    <Section aria-label="Request a free trial" surface="canvas" spacing="compact">
      <Container>
        <TrialStepProvider>
          <div className="mx-auto max-w-[740px]">
            <TrialProgressHorizontal className="mx-auto mb-4 w-4/5 sm:w-3/5" />
            <FreeTrialForm />
          </div>
        </TrialStepProvider>
      </Container>
    </Section>
  );
}
