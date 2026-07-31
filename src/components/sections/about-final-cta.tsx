import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

export function AboutFinalCta() {
  return (
    <Reveal className="mt-8 grid gap-5 rounded-large border border-primary-100 bg-primary-50 p-5 shadow-none md:mt-10 sm:p-6 lg:mt-12 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-8 lg:p-7">
      <span
        aria-hidden="true"
        className="flex size-16 items-center justify-center rounded-medium bg-white/70 text-primary-300"
      >
        <CalendarCheck className="size-9" strokeWidth={1.5} />
      </span>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
          START YOUR JOURNEY
        </p>
        <h2
          id="about-final-cta-heading"
          className="mt-3 text-2xl leading-[1.15] text-primary-700 md:text-3xl md:leading-[1.1]"
        >
          Start with a free trial
        </h2>
        <p className="mt-3 max-w-reading text-sm leading-6 text-text-secondary md:text-base md:leading-7">
          Share the learner&apos;s current level and goals. We&apos;ll recommend the
          most suitable learning path.
        </p>
      </div>

      <div className="flex flex-col items-start gap-2 sm:flex-row lg:w-52 lg:flex-col lg:items-stretch">
        <ButtonLink
          href="/free-trial"
          icon={<ArrowRight aria-hidden="true" className="size-4" />}
          className="w-full sm:w-auto lg:w-full lg:min-w-36"
        >
          Book a free trial
        </ButtonLink>
        <Link
          href="/contact"
          className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold leading-6 text-primary-700 underline-offset-4 hover:text-primary-800 hover:underline lg:w-full lg:justify-end"
        >
          <span>Contact us</span>
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-micro ease-swq-out group-hover:translate-x-0.5 motion-reduce:transition-none"
          />
        </Link>
      </div>
    </Reveal>
  );
}
