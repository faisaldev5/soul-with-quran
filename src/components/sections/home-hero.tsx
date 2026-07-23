import Image from "next/image";
import { ArrowRight, Check, Clock3, List, Star } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";

import type { LucideIcon } from "lucide-react";

const factCards = [
  {
    title: "Any time zone",
    description: "UK · US · CA · AU · UAE",
    icon: Clock3,
  },
  {
    title: "Personal learning plan",
    description: "Built around your pace",
    icon: List,
  },
] as const;

const proofAvatars = [
  "/images/homepage/tutor-portrait.jpg",
  "/images/homepage/child-learning-quran-online.jpg",
  "/images/homepage/quran-study-desk.jpg",
] as const;

type FactCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

function FactCard({
  className,
  description,
  icon: Icon,
  title,
}: FactCardProps) {
  return (
    <Card
      as="div"
      className={cn("relative z-10 flex max-w-[15rem] gap-3 p-4", className)}
    >
      <span
        aria-hidden="true"
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700"
      >
        <Icon className="size-4" strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-sm font-semibold leading-5 text-text-primary">
          {title}
        </p>
        <p className="mt-1 text-xs leading-5 text-text-secondary">
          {description}
        </p>
      </div>
    </Card>
  );
}

function HeroProof() {
  return (
    <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
      <div className="flex items-center gap-3">
        <div
          aria-hidden="true"
          className="flex shrink-0 -space-x-2"
        >
          {proofAvatars.map((src) => (
            <span
              key={src}
              className="relative size-8 overflow-hidden rounded-full border-2 border-background"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
          ))}
        </div>
        <div>
          <div
            role="img"
            aria-label="Five-star rating"
            className="flex items-center gap-0.5 text-gold-500"
          >
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                aria-hidden="true"
                className="size-3.5 fill-current"
                strokeWidth={1.5}
              />
            ))}
          </div>
          <p className="mt-0.5 text-xs leading-5 text-text-secondary">
            500+ families across 5 countries
          </p>
        </div>
      </div>

      <span aria-hidden="true" className="hidden h-10 w-px bg-border sm:block" />

      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700"
        >
          <Check className="size-4" strokeWidth={1.75} />
        </span>
        <div>
          <p className="text-sm font-semibold leading-5 text-text-primary">
            Certified Ijazah tutor
          </p>
          <p className="mt-0.5 text-xs leading-5 text-text-secondary">
            12+ years of experience
          </p>
        </div>
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <Section
      aria-labelledby="home-hero-heading"
      className="relative isolate overflow-visible"
      spacing="compact"
      withContainer={false}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 size-[32rem] rounded-full bg-gold-100/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 size-[28rem] rounded-full bg-sage-100/25 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 max-w-2xl lg:pt-2">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage-700">
              <span aria-hidden="true" className="text-gold-500">
                •
              </span>
              Learn · Connect · Grow
            </p>
            <h1
              id="home-hero-heading"
              className="mt-4 max-w-[13ch] text-balance text-[clamp(2.375rem,5vw,4.5rem)] leading-[1.04]"
            >
              A calmer way to learn the Quran,{" "}
              <span className="font-normal italic text-text-secondary">
                with patient guidance.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
              Live one-to-one and carefully matched small-group classes for
              children and adults, taught with structure, care, and consistency.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/free-trial"
                icon={<ArrowRight aria-hidden="true" className="size-4" />}
                className="w-full px-6 shadow-small hover:shadow-hover sm:w-auto sm:min-w-[10.5rem]"
              >
                Book a free trial
              </ButtonLink>
              <ButtonLink
                href="/courses"
                variant="secondary"
                className="w-full px-6 sm:w-auto sm:min-w-[9.75rem]"
              >
                Explore courses
              </ButtonLink>
            </div>
            <HeroProof />
          </div>

          <div className="relative mx-auto w-full max-w-[38rem] overflow-visible lg:ml-auto">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-large bg-gold-100/25 blur-2xl"
            />
            <div className="relative aspect-[5/6] overflow-hidden rounded-large border border-white/70 shadow-large">
              <Image
                src="/images/homepage/hero-online-quran-class.jpg"
                alt="Learner studying the Quran during an online lesson"
                fill
                priority
                sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 52vw, (min-width: 768px) 70vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:block">
              <FactCard
                {...factCards[0]}
                className="lg:absolute lg:-right-8 lg:top-[14%] xl:-right-10 xl:top-[15%]"
              />
              <FactCard
                {...factCards[1]}
                className="lg:absolute lg:bottom-[10%] lg:-left-10 xl:bottom-[12%] xl:-left-12"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
