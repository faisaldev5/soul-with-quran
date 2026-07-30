import Image from "next/image";
import { HeartHandshake, UsersRound } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { tutorProfile } from "@/content/tutor-profile";

const verifiedFacts = [
  {
    label: "Teaching model",
    value: tutorProfile.lessonFormat,
    icon: UsersRound,
  },
  {
    label: "Teaching style",
    value: tutorProfile.teachingStyle,
    icon: HeartHandshake,
  },
] as const;

const introduction =
  "SoulWithQuran lessons are taught with patience, structure, and personal attention, helping each learner progress at a clear and manageable pace.";

export function MeetYourQuranTutorAbout() {
  return (
    <Section
      id="tutor"
      aria-labelledby="about-tutor-heading"
      surface="white"
      withContainer={false}
      className="border-b border-border"
    >
      <Container>
        <div className="grid gap-y-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
          <div className="lg:col-start-2 lg:row-start-1">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
                MEET YOUR QURAN TUTOR
              </p>
              <h2
                id="about-tutor-heading"
                className="mt-4 max-w-[20ch] text-balance text-4xl leading-[1.08] text-primary-700 md:text-5xl md:leading-[1.04]"
              >
                Patient, personal guidance
                <span className="block font-normal italic text-text-secondary">
                  for every stage of learning.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal
            className="relative mx-auto w-full max-w-[30rem] lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:self-start"
            variant="fade-right"
          >
            <div className="relative aspect-[5/7] w-full overflow-hidden rounded-large border border-border bg-sage-50 shadow-medium">
              <Image
                src={tutorProfile.image}
                alt={tutorProfile.imageAlt}
                fill
                sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 38vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-start-2 lg:row-start-2" delay={70}>
            <p className="max-w-reading text-base leading-7 text-text-secondary md:text-lg md:leading-8">
              {introduction}
            </p>

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="mt-7 text-xl font-semibold leading-7 text-primary-700 md:text-2xl">
                {tutorProfile.role}
              </h3>
              <p className="text-sm text-text-secondary">SoulWithQuran</p>
            </div>

            <p className="mt-5 max-w-reading text-base leading-7 text-text-secondary md:text-lg md:leading-8">
              {tutorProfile.bio}
            </p>

            <ul className="mt-7 grid gap-5 border-y border-border py-5 sm:grid-cols-2 sm:gap-x-8">
              {verifiedFacts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <li key={fact.label} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-primary-700"
                    >
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-5 text-primary-700">
                        {fact.label}
                      </p>
                      <p className="mt-1 text-sm leading-5 text-text-secondary">
                        {fact.value}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

          </Reveal>

        </div>
      </Container>
    </Section>
  );
}
