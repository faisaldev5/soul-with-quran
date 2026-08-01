import Image from "next/image";
import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const additionalServices = [
  { title: "Make-up classes", description: "For genuine absences" },
  { title: "Recorded recaps", description: "When available" },
  { title: "Revision plans", description: "With extra practice" },
  { title: "Hifz guidance", description: "For revision and retention" },
] as const;

export function CoursesAdditionalServices() {
  return (
    <Section
      aria-labelledby="courses-additional-services-heading"
      surface="canvas"
      spacing="compact"
      withContainer={false}
      className="overflow-hidden"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-start lg:gap-12">
          <Reveal className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
              ADDITIONAL SERVICES
            </p>
            <h2
              id="courses-additional-services-heading"
              className="mt-4 max-w-[24ch] text-balance text-3xl leading-[1.12] text-primary-700 md:text-4xl md:leading-[1.08]"
            >
              More support for every learner.
            </h2>
            <p className="mt-5 max-w-supporting text-sm leading-6 text-text-secondary md:text-base md:leading-7">
              Support continues beyond the lesson, helping learners stay
              consistent, prepared, and confident.
            </p>

            <ul className="mt-6 grid grid-cols-1 min-[400px]:grid-cols-2 lg:mt-7">
              {additionalServices.map((service) => (
                <li
                  key={service.title}
                  className="flex items-start gap-3 border-t border-sage-200/80 px-1 py-4 text-sm leading-5 text-text-secondary min-[400px]:pr-5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700"
                  >
                    <Check className="size-3.5" strokeWidth={2.25} />
                  </span>
                  <span>
                    <span className="block font-semibold text-primary-700">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-text-secondary">
                      {service.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            className="relative mx-auto w-full max-w-2xl md:max-w-none md:justify-self-end lg:max-w-[34rem] lg:pt-1"
            variant="fade-left"
          >
            <div className="relative aspect-[4/3] w-full">
              <div
                aria-hidden="true"
                className="absolute inset-3 -bottom-3 -right-3 rounded-large bg-primary-50/80"
              />
              <div className="relative z-base size-full overflow-hidden rounded-large border border-white/80 bg-surface shadow-small">
                <Image
                  src="/images/homepage/child-learning-quran-online.jpg"
                  alt="Learner studying the Quran during an online lesson"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover object-[center_55%]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
