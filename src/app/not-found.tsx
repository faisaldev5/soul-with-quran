import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export default function NotFound() {
  return (
    <Section aria-labelledby="not-found-heading">
      <Container>
        <div className="mx-auto max-w-supporting space-y-8">
          <SectionHeading
            eyebrow="Page not found"
            heading="We couldn't find that page"
            description="The link may have changed or the page may not be available yet. You can return home or find another way to continue."
            level="h1"
            id="not-found-heading"
          />
          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/">Return home</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
