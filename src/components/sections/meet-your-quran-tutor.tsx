import Image from "next/image";
import {
  BookOpenCheck,
  CalendarDays,
  Clock3,
  HeartHandshake,
  UserRound,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { tutorProfile } from "@/content/tutor-profile";
import { courses } from "@/data/courses";
import { cn } from "@/lib/cn";

type TeachingDetail = {
  title: string;
  icon: LucideIcon;
};

const teachingDetails: readonly TeachingDetail[] = [
  {
    title: "One-to-one guidance",
    icon: UserRound,
  },
  {
    title: "Carefully matched groups",
    icon: UsersRound,
  },
  {
    title: "Children and adults",
    icon: HeartHandshake,
  },
  {
    title: "Five classes each week",
    icon: CalendarDays,
  },
  {
    title: "30–40 minute lessons",
    icon: Clock3,
  },
];

export function MeetYourQuranTutor() {
  return (
    <Section
      id="meet-your-quran-tutor"
      aria-labelledby="meet-your-quran-tutor-heading"
      surface="canvas"
      withContainer={false}
      className="border-y border-border"
    >
      <Container>
        <div className="relative isolate">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-x-20 lg:gap-y-4">
            <div className="lg:col-start-2 lg:row-start-1">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sage-700">
                  Meet your Quran tutor
                </p>
                <span
                  aria-hidden="true"
                  className="mt-3 block h-0.5 w-10 bg-gold-500"
                />
                <h2
                  id="meet-your-quran-tutor-heading"
                  className="mt-5 max-w-[17ch] text-balance text-4xl leading-[1.08] md:text-5xl md:leading-[1.04] lg:text-5xl"
                >
                  Patient, personal guidance
                  <span className="block font-normal italic text-text-secondary">
                    for every stage of learning.
                  </span>
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-start-2 lg:row-start-2">
              <Reveal delay={50}>
                <h3 className="text-xl font-semibold leading-7 text-primary-700 md:text-2xl">
                  Your dedicated Quran tutor
                </h3>
                <p className="mt-1 text-base leading-6 text-text-secondary">
                  Patient, structured online guidance
                </p>
              </Reveal>
            </div>

            <Reveal className="relative flex justify-center pb-14 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:items-center lg:pb-0" variant="fade-right">
              <div className="relative w-full max-w-[30rem]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-32 -top-32 z-0 size-[92%] opacity-[0.12]"
                >
                  <Image
                    src="/images/tutor/meet-tutor-bg.png"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 34vw, 90vw"
                    className="object-contain object-left-top"
                  />
                </div>

                <div className="relative z-base aspect-[5/7] w-full overflow-hidden rounded-large border border-white/80 bg-sage-50 shadow-large">
                  <Image
                    src={tutorProfile.image}
                    alt={tutorProfile.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 34vw, (min-width: 768px) 70vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                <Card
                  as="div"
                  className="!absolute bottom-[-1rem] left-3 z-floating flex w-[13rem] max-w-[calc(100%_-_1rem)] gap-3 p-4 shadow-medium lg:bottom-8 lg:left-[-1.5rem]"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sage-100 text-primary-700"
                  >
                    <UserRound className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold leading-5 text-primary-700">
                      Personal guidance
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-text-secondary">
                      {tutorProfile.lessonFormat}
                    </p>
                  </div>
                </Card>
              </div>
            </Reveal>

            <Reveal className="lg:col-start-2 lg:row-start-3" delay={70}>
              <p className="max-w-reading text-base leading-7 text-text-secondary md:text-lg md:leading-8">
                SoulWithQuran lessons are taught with patience, structure, and
                personal attention, helping children and adults learn at a
                clear and manageable pace.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
                {teachingDetails.map((detail, index) => {
                  const Icon = detail.icon;

                  return (
                    <div
                      key={detail.title}
                      className={cn(
                        "flex min-h-[5.5rem] flex-col items-center gap-3 px-3 text-center lg:px-4",
                        index > 0 && "lg:border-l lg:border-border",
                        index === 0 && "lg:pl-0",
                        index === teachingDetails.length - 1 &&
                          "max-sm:col-span-2 max-sm:justify-self-center max-sm:w-full max-sm:max-w-[12rem]",
                      )}
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-8 shrink-0 text-primary-700"
                        strokeWidth={1.5}
                      />
                      <h3 className="max-w-[9rem] text-xs font-semibold leading-4 text-primary-700">
                        {detail.title}
                      </h3>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5 max-sm:hidden">
                {courses.map((course) => (
                  <Badge
                    key={course.href}
                    variant="neutral"
                    className="rounded-pill border border-sage-200 bg-sage-50 px-4 py-1 text-xs font-semibold leading-5 text-primary-700"
                  >
                    {course.name}
                  </Badge>
                ))}
              </div>

              <Card
                as="article"
                className="mt-7 flex rounded-large border-border bg-surface p-5 shadow-small max-sm:hidden md:p-6"
              >
                <div className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700"
                  >
                    <BookOpenCheck className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-primary-700">
                      A calm and structured approach
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      Each learner is guided step by step, with clear
                      explanations, regular practice, and personal attention
                      throughout the learning journey.
                    </p>
                  </div>
                </div>
              </Card>

            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
