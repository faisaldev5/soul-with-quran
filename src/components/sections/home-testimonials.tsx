import { Section } from "@/components/ui/section";
import {
  developmentPreviewTestimonials,
  verifiedTestimonials,
  type Testimonial,
} from "@/data/testimonials";
import { cn } from "@/lib/cn";

const PREVIEW_CARD_COUNT = 8;
const avatarColorClasses = [
  "bg-primary-100 text-primary-700",
  "bg-sage-100 text-sage-800",
  "bg-gold-100 text-gold-800",
  "bg-neutral-100 text-primary-700",
] as const;

type TestimonialCardProps = {
  testimonial: Testimonial;
  decorative?: boolean;
};

type TestimonialRowProps = {
  items: readonly Testimonial[];
  label: string;
  slow?: boolean;
};

function getInitials(displayName: string) {
  const parts = displayName
    .trim()
    .split(/\s+/)
    .map((part) => part.replace(/[^a-zA-Z0-9]/g, ""))
    .filter(Boolean);

  if (parts.length === 0) {
    return "";
  }

  if (parts.length === 1) {
    return parts[0][0]?.toUpperCase() ?? "";
  }

  const lastPart = parts[parts.length - 1];

  return `${parts[0][0] ?? ""}${lastPart[0] ?? ""}`.toUpperCase();
}

function getAvatarColor(id: string) {
  const score = Array.from(id).reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  );

  return avatarColorClasses[score % avatarColorClasses.length];
}

function getRating(testimonial: Testimonial) {
  if (
    !Number.isFinite(testimonial.rating) ||
    testimonial.rating < 1 ||
    testimonial.rating > 5
  ) {
    return undefined;
  }

  return testimonial.rating;
}

function TestimonialCard({
  testimonial,
  decorative = false,
}: TestimonialCardProps) {
  const rating = getRating(testimonial);
  const ratingLabel = rating ? `Rated ${rating.toFixed(1)} out of 5` : undefined;

  return (
    <article
      tabIndex={decorative ? undefined : 0}
      className="flex min-h-[18rem] w-[18rem] shrink-0 flex-col rounded-large border border-primary-400 bg-primary-600 p-6 text-white shadow-small transition-[border-color,box-shadow] duration-normal ease-swq-out hover:border-gold-400 hover:shadow-hover focus-visible:outline-3 focus-visible:outline-gold-300 focus-visible:outline-offset-2 motion-reduce:transition-none sm:w-[20rem] lg:w-[21rem]"
    >
      {ratingLabel && rating ? (
        <div
          aria-label={ratingLabel}
          className="flex items-center gap-2"
          role="img"
        >
          <span aria-hidden="true" className="flex gap-0.5 text-gold-400">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} aria-hidden="true">
                ★
              </span>
            ))}
          </span>
          <span aria-hidden="true" className="text-xs font-semibold text-white">
            {rating.toFixed(1)}
          </span>
        </div>
      ) : null}

      <blockquote className="mt-5 flex-1 text-base leading-7 text-primary-100">
        <p>“{testimonial.quote}”</p>
      </blockquote>

      <div className="mt-6 flex flex-col gap-4 border-t border-primary-400 pt-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold sm:size-12",
              getAvatarColor(testimonial.id),
            )}
          >
            {getInitials(testimonial.displayName)}
          </span>
          <div className="min-w-0">
            <p className="break-words text-sm font-semibold leading-5 text-white">
              {testimonial.displayName}
            </p>
            <p className="break-words text-xs leading-5 text-primary-100">
              {testimonial.relationship} · {testimonial.location}
            </p>
          </div>
        </div>

        <span className="inline-flex shrink-0 self-start whitespace-nowrap rounded-pill bg-sage-100 px-3 py-1 text-xs font-semibold leading-5 text-sage-900 sm:self-end">
          {testimonial.course}
        </span>
      </div>
    </article>
  );
}

function TestimonialRow({
  items,
  label,
  slow = false,
}: TestimonialRowProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div
      aria-label={label}
      className="swq-testimonial-row overflow-hidden focus-visible:outline-3 focus-visible:outline-gold-300 focus-visible:outline-offset-2"
      role="region"
      tabIndex={0}
    >
      <div
        className={cn(
          "swq-testimonial-track-wrapper",
          slow && "-translate-x-40 sm:-translate-x-48",
        )}
      >
        <div
          className={cn(
            "swq-testimonial-track flex w-max",
            slow && "swq-testimonial-track--slow",
          )}
        >
          <div className="swq-testimonial-track-group flex shrink-0 gap-6 pr-6">
            {items.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="swq-testimonial-track-group flex shrink-0 gap-6 pr-6"
          >
            {items.map((testimonial) => (
              <TestimonialCard
                key={`duplicate-${testimonial.id}`}
                testimonial={testimonial}
                decorative
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeTestimonials() {
  const isProduction = process.env.NODE_ENV === "production";
  const approvedTestimonials = verifiedTestimonials.filter(
    (testimonial) => testimonial.verified && !testimonial.placeholder,
  );
  const testimonials = isProduction
    ? approvedTestimonials
    : [
        ...approvedTestimonials,
        ...developmentPreviewTestimonials.slice(
          0,
          Math.max(0, PREVIEW_CARD_COUNT - approvedTestimonials.length),
        ),
      ];

  // Keep the section out of production until verified feedback is approved.
  if (testimonials.length === 0) {
    return null;
  }

  const hasPlaceholders = testimonials.some(
    (testimonial) => testimonial.placeholder,
  );

  return (
    <Section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      surface="white"
      className="overflow-hidden border-y border-border"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
          Testimonials
        </p>
        <h2
          id="testimonials-heading"
          className="mt-4 max-w-[22ch] text-balance text-4xl leading-[1.08] text-primary-600 md:text-5xl md:leading-[1.04]"
        >
          Kind words from learners
          <span className="block font-normal italic text-text-secondary">
            and their families.
          </span>
        </h2>
        <p className="mt-6 max-w-supporting text-base leading-7 text-text-secondary md:text-lg md:leading-8">
          {hasPlaceholders
            ? "Previewing how verified learner and family feedback will appear."
            : "Real experiences from learners and families receiving patient, personal Quran guidance."}
        </p>
      </div>

      <div className="relative mt-16 space-y-6">
        <TestimonialRow
          items={testimonials.slice(0, 4)}
          label="Testimonials row one"
        />
        <TestimonialRow
          items={testimonials.slice(4, 8)}
          label="Testimonials row two"
          slow
        />
      </div>
    </Section>
  );
}
