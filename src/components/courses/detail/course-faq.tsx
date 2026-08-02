import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { CourseDetail } from "@/content/courses/types";

type CourseFaqProps = {
  course: CourseDetail;
};

export function CourseFaq({ course }: CourseFaqProps) {
  const { faq } = course;

  return (
    <Section
      aria-labelledby="course-faq-heading"
      surface="canvas"
      withContainer={false}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
              {faq.eyebrow}
            </p>
            <h2
              id="course-faq-heading"
              className="mt-4 max-w-[15ch] text-balance text-3xl leading-[1.12] text-primary-700 md:text-4xl md:leading-[1.08]"
            >
              {faq.heading}
            </h2>
          </Reveal>

          <Reveal className="border-t border-border" delay={60}>
            {faq.items.map((item) => (
              <details key={item.question} className="group border-b border-border">
                <summary className="flex min-h-24 cursor-pointer list-none items-center justify-between gap-4 py-6 text-base font-semibold leading-7 text-primary-700 transition-colors duration-normal ease-swq-out marker:hidden hover:text-primary-800 motion-reduce:transition-none md:gap-6 md:min-h-24 md:py-6 md:text-lg md:leading-7 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="relative flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-primary-700 transition-[background-color,border-color] duration-normal ease-swq-out group-open:border-primary-200 group-open:bg-primary-50 motion-reduce:transition-none md:size-10"
                  >
                    <span className="absolute h-px w-3.5 bg-current" />
                    <span className="absolute h-3.5 w-px bg-current transition-transform duration-normal ease-swq-out group-open:scale-y-0 motion-reduce:transition-none" />
                  </span>
                </summary>
                <div className="origin-top pb-6 pr-16 text-base leading-7 text-text-secondary md:pb-6 md:pr-14 md:text-base md:leading-7">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
