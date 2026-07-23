import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Home() {
  return (
    <>
      <Section aria-labelledby="layout-preview-heading">
        <Container>
          <div className="mx-auto max-w-supporting space-y-6">
            <Badge variant="sage">Phase 2 - Core layout</Badge>
            <SectionHeading
              heading="Temporary core-layout preview"
              description="This internal route verifies the shared header, responsive navigation, page shell, spacing, and footer before real homepage content is introduced."
              level="h1"
              id="layout-preview-heading"
            />
          </div>
        </Container>
      </Section>

      <Section
        aria-labelledby="layout-verification-heading"
        spacing="compact"
        surface="white"
      >
        <Container>
          <div className="mx-auto max-w-supporting space-y-8">
            <SectionHeading
              heading="Layout verification area"
              description="The shell should keep this content readable while the footer remains a calm, structured endpoint at every viewport."
              id="layout-verification-heading"
            />
            <Card as="article">
              <div className="space-y-4">
                <h2>Shared structure is ready for review</h2>
                <ul className="space-y-3 text-base leading-7 text-text-secondary">
                  <li>Sticky header alignment and primary navigation.</li>
                  <li>Keyboard-accessible mobile navigation and skip link.</li>
                  <li>Responsive footer groups and legal-link placement.</li>
                </ul>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
