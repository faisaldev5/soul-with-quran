import { ArrowRight, Check } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { pricingPlan } from "@/data/pricing";

const formattedPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: pricingPlan.currency,
  maximumFractionDigits: 0,
}).format(pricingPlan.price);

const pricingFacts = [
  {
    label: "Monthly price",
    value: `${formattedPrice} per student`,
  },
  {
    label: "Lesson duration",
    value: pricingPlan.lessonDuration,
  },
  {
    label: "Class frequency",
    value: `${pricingPlan.classesPerWeek} classes each week`,
  },
  {
    label: "Learning format",
    value: pricingPlan.formats.join(" or "),
  },
] as const;

const includedFeatures = [
  ...pricingPlan.includedFeatures,
  `Choice of ${pricingPlan.courses.join(", ")}`,
];

export function PricingTrial() {
  return (
    <Section
      id="pricing-trial"
      aria-labelledby="pricing-trial-heading"
      surface="navy"
      className="border-y border-primary-500"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-16 xl:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold-300">
            Pricing &amp; free trial
          </p>
          <h2
            id="pricing-trial-heading"
            className="mt-4 max-w-[19ch] text-balance text-4xl leading-[1.08] text-white md:text-5xl md:leading-[1.04]"
          >
            Simple monthly pricing,
            <span className="block font-normal italic text-sage-300">
              with a free trial to begin.
            </span>
          </h2>
          <p className="mt-6 max-w-supporting text-base leading-7 text-primary-100 md:text-lg md:leading-8">
            One clear monthly price for every course, with regular live lessons
            and personal guidance for each learner.
          </p>

          <div
            aria-label="Pricing facts"
            className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5"
          >
            {pricingFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-large border border-primary-400 bg-primary-500 p-5"
              >
                <p className="text-sm leading-6 text-primary-100">{fact.label}</p>
                <p className="mt-2 text-lg font-semibold leading-7 text-white">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <article
          aria-labelledby="pricing-plan-heading"
          className="rounded-large border border-neutral-200 bg-background p-6 text-primary-600 shadow-medium sm:p-8 lg:p-10"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
                Standard monthly plan
              </p>
              <h3 id="pricing-plan-heading" className="mt-5 flex items-baseline gap-3">
                <span className="tabular-nums text-6xl leading-none tracking-[-0.04em] text-primary-600 sm:text-7xl">
                  {formattedPrice}
                </span>
                <span className="text-base font-medium leading-6 text-text-secondary">
                  per {pricingPlan.billingPeriod}
                </span>
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {pricingPlan.perStudent ? "Per student" : "Every learner"} · Every
                course
              </p>
            </div>
            <Badge variant="gold" className="shrink-0">
              Free trial available
            </Badge>
          </div>

          <div className="mt-8 border-t border-border pt-7">
            <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
              What&apos;s included
            </h4>
            <ul className="mt-5 space-y-4">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-base leading-7">
                  <Check
                    aria-hidden="true"
                    className="mt-1 size-5 shrink-0 text-gold-600"
                    strokeWidth={2}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <ButtonLink
            href="/free-trial"
            variant="secondary"
            icon={<ArrowRight aria-hidden="true" className="size-4" />}
            className="mt-8 w-full !border-gold-500 !bg-gold-500 !text-primary-950 hover:!border-gold-400 hover:!bg-gold-400 hover:!text-primary-950 focus-visible:outline-gold-300"
          >
            Book a free trial
          </ButtonLink>
          <p className="mt-4 text-center text-sm leading-6 text-text-secondary">
            Available for children and adults across all five courses.
          </p>
        </article>
      </div>
    </Section>
  );
}
