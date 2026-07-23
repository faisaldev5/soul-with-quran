import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function Loading() {
  return (
    <Section aria-label="Loading page">
      <Container>
        <div className="flex min-h-[40vh] items-center justify-center" role="status">
          <p className="text-sm leading-6 text-text-muted">Loading page...</p>
        </div>
      </Container>
    </Section>
  );
}
