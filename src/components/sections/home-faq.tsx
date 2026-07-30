import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { faqs } from "@/data/faqs";

export function HomeFaq() {
  return (
    <Section
      id="faq"
      aria-labelledby="faq-heading"
      surface="white"
      className="border-t border-border"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-x-20">
        <Reveal className="max-w-[22rem] lg:self-start">
          <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
            Questions
          </p>
          <h2
            id="faq-heading"
            className="mt-4 max-w-[12ch] text-balance text-4xl leading-[1.08] md:text-5xl md:leading-[1.04]"
          >
            The things learners ask us most.
          </h2>
          <p className="mt-6 max-w-reading text-base leading-7 text-text-secondary md:text-lg md:leading-8">
            Still have a question? Send us a message and we’ll help you
            understand the right next step.
          </p>
          <ButtonLink href="/contact" variant="secondary" className="mt-8">
            Ask a question
          </ButtonLink>
          </div>
        </Reveal>

        <Reveal className="border-t border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-border">
              <summary className="flex min-h-24 cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg leading-7 text-primary-700 transition-colors duration-normal ease-swq-out marker:hidden hover:text-primary-800 motion-reduce:transition-none md:min-h-28 md:py-7 md:text-xl md:leading-8 lg:text-2xl lg:leading-9 [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="relative flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-primary-700 transition-[background-color,border-color] duration-normal ease-swq-out group-open:border-primary-200 group-open:bg-primary-50 motion-reduce:transition-none"
                >
                  <span className="absolute h-px w-4 bg-current" />
                  <span className="absolute h-4 w-px bg-current transition-transform duration-normal ease-swq-out group-open:scale-y-0 motion-reduce:transition-none" />
                </span>
              </summary>
              <div className="origin-top translate-y-1 pb-6 pr-16 text-base leading-7 text-text-secondary opacity-0 transition-[opacity,transform] duration-toggle ease-swq-out group-open:translate-y-0 group-open:opacity-100 motion-reduce:opacity-100 motion-reduce:transition-none md:pb-7 md:text-lg md:leading-8">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
