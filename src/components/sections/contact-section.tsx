import { Check } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const helpTopics = [
  "Questions about SoulWithQuran courses",
  "Lesson format and scheduling enquiries",
  "Pricing questions",
  "General learning questions",
  "Help with an existing enquiry",
] as const;

export function ContactSection() {
  return (
    <Section aria-label="Contact SoulWithQuran" surface="canvas" spacing="compact">
      <Container>
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-start lg:gap-14">
          <div>
            <p className="eyebrow text-sage-700">GET IN TOUCH</p>
            <h2 className="mt-4 text-3xl leading-tight text-primary-700 sm:text-4xl">Tell us how we can help.</h2>
            <p className="mt-5 text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
              Send your question and we’ll reply using the email address you provide. WhatsApp can also be used when you choose to include your number.
            </p>

            <ul className="mt-8 space-y-2" aria-label="What we can help with">
              {helpTopics.map((topic) => (
                <li key={topic} className="flex items-center gap-3">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary-50 text-primary-700">
                    <Check aria-hidden="true" className="size-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium leading-6 text-primary-700">{topic}</span>
                </li>
              ))}
            </ul>

            <aside className="mt-8 rounded-large border border-primary-100 bg-primary-50 p-5 sm:p-6" aria-labelledby="contact-free-trial-heading">
              <h3 id="contact-free-trial-heading" className="text-base font-semibold text-primary-700">Looking to start lessons?</h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                The Free Trial form is the best place to share the learner’s current stage, goals, and preferred availability.
              </p>
              <ButtonLink href="/free-trial" className="mt-4 w-full sm:w-auto">Request a free trial</ButtonLink>
            </aside>
          </div>

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
