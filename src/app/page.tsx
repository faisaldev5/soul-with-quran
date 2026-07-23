import { Logo } from "@/components/brand/logo";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import {
  FieldErrorText,
  FieldHelperText,
  Input,
  Label,
  Textarea,
} from "@/components/ui/form-controls";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const colorSwatches = [
  { name: "Deep Navy", token: "primary-600", className: "bg-primary-600" },
  { name: "Soft Sage", token: "sage-600", className: "bg-sage-600" },
  { name: "Warm Gold", token: "gold-500", className: "bg-gold-500" },
  { name: "Warm Off White", token: "background", className: "bg-background" },
  { name: "White", token: "surface", className: "bg-surface" },
  { name: "Charcoal", token: "text-primary", className: "bg-text-primary" },
  { name: "Muted text", token: "text-muted", className: "bg-text-muted" },
];

const semanticSwatches = [
  { name: "Success", token: "success", className: "bg-success" },
  { name: "Warning", token: "warning", className: "bg-warning" },
  { name: "Error", token: "error", className: "bg-error" },
  { name: "Information", token: "information", className: "bg-information" },
];

function Swatch({
  className,
  name,
  token,
}: {
  className: string;
  name: string;
  token: string;
}) {
  return (
    <div className="space-y-2">
      <div className={`h-16 rounded-medium border border-border ${className}`} />
      <p className="text-sm font-semibold leading-5 text-text-primary">{name}</p>
      <p className="font-mono text-xs leading-5 text-text-muted">{token}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Section aria-labelledby="preview-title">
        <Container>
          <div className="flex flex-col gap-12">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <Logo size="md" priority />
              <Badge variant="sage">Internal verification preview</Badge>
            </div>
            <SectionHeading
              eyebrow="Phase 1 · Design system"
              heading="Design-system foundation preview"
              description="A restrained internal page for verifying approved tokens, typography, reusable primitives, and accessible states before page construction begins."
              level="h1"
              id="preview-title"
            />
          </div>
        </Container>
      </Section>

      <Section
        aria-labelledby="color-heading"
        spacing="compact"
        surface="white"
      >
        <Container>
          <div className="space-y-10">
            <SectionHeading
              heading="Color tokens"
              description="Approved brand, neutral, and semantic colors exposed through semantic Tailwind utilities."
              id="color-heading"
            />
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
              {colorSwatches.map((swatch) => (
                <Swatch key={swatch.token} {...swatch} />
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {semanticSwatches.map((swatch) => (
                <Swatch key={swatch.token} {...swatch} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="type-heading" spacing="compact">
        <Container>
          <div className="space-y-10">
            <SectionHeading
              heading="Typography hierarchy"
              description="Plus Jakarta Sans is used for headings and Inter is used for body text and controls."
              id="type-heading"
            />
            <div className="space-y-8">
              <div>
                <h3>Heading level three</h3>
                <p className="mt-2 text-text-secondary">
                  Body copy remains readable, calm, and content-driven across breakpoints.
                </p>
              </div>
              <div>
                <h4>Heading level four</h4>
                <p className="mt-2 text-base leading-7 text-text-secondary">
                  Supporting type uses the approved reading rhythm and neutral text hierarchy.
                </p>
              </div>
              <div>
                <h5>Heading level five</h5>
                <p className="mt-2 text-sm leading-5 text-text-muted">
                  Small supporting information and metadata remain secondary to the content.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        aria-labelledby="controls-heading"
        spacing="compact"
        surface="sage"
      >
        <Container>
          <div className="space-y-10">
            <SectionHeading
              heading="Controls and surfaces"
              description="Native controls and reusable primitives expose the approved default, hover, focus, disabled, and loading treatments."
              id="controls-heading"
            />
            <div className="grid gap-8 lg:grid-cols-2">
              <Card as="article">
                <div className="space-y-6">
                  <div>
                    <h3>Buttons</h3>
                    <p className="mt-2 text-base leading-7 text-text-secondary">
                      Use one visually dominant action per group and keep supporting actions clear.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button>Primary button</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="tertiary">Tertiary</Button>
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                    <ButtonLink href="#form-controls" iconPosition="start">
                      Button link
                    </ButtonLink>
                  </div>
                </div>
              </Card>

              <Card as="a" href="#preview-card" interactive id="preview-card">
                <div className="space-y-4">
                  <Badge variant="navy">Interactive card</Badge>
                  <h3>Base card surface</h3>
                  <p className="text-base leading-7 text-text-secondary">
                    White surface, restrained border, approved large radius, and small elevation.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        aria-labelledby="form-heading"
        spacing="compact"
        surface="white"
      >
        <Container>
          <div className="space-y-10" id="form-controls">
            <SectionHeading
              heading="Form-control primitives"
              description="Visual controls only: no submission logic, validation schema, or server integration is included in Phase 1."
              id="form-heading"
            />
            <div className="grid gap-8 lg:grid-cols-2">
              <Card as="article">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="preview-name">Name</Label>
                    <Input
                      id="preview-name"
                      defaultValue="Sample learner"
                      aria-describedby="preview-name-help"
                    />
                    <FieldHelperText id="preview-name-help">
                      Helper text remains adjacent to the control.
                    </FieldHelperText>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preview-topic" optional>
                      Topic
                    </Label>
                    <Input id="preview-topic" placeholder="Optional value" disabled />
                  </div>
                </div>
              </Card>

              <Card as="article">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="preview-message">Message</Label>
                    <Textarea
                      id="preview-message"
                      defaultValue="A content-driven textarea supports longer text."
                      aria-describedby="preview-message-help"
                    />
                    <FieldHelperText id="preview-message-help">
                      Textareas retain a practical minimum height and can grow with content.
                    </FieldHelperText>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preview-error">Error state</Label>
                    <Input
                      id="preview-error"
                      defaultValue="Needs attention"
                      error
                      aria-describedby="preview-error-message"
                    />
                    <FieldErrorText id="preview-error-message">
                      Explain what needs correction in plain language.
                    </FieldErrorText>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
