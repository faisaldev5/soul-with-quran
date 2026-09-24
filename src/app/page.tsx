import type { Metadata } from "next";

import { CoursesOverview } from "@/components/sections/courses-overview";
import { FinalTrialCta } from "@/components/sections/final-trial-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { HowLearningWorks } from "@/components/sections/how-learning-works";
import { HomeFaq } from "@/components/sections/home-faq";
import { HomeTestimonials } from "@/components/sections/home-testimonials";
import { MeetYourQuranTutor } from "@/components/sections/meet-your-quran-tutor";
import { PricingTrial } from "@/components/sections/pricing-trial";
import { WhyLearnersChooseUs } from "@/components/sections/why-learners-choose-us";
import { defaultSocialImage } from "@/lib/site";

const title = "Online Quran Classes for Children and Adults | SoulWithQuran";
const description =
  "Join live online Quran classes for children and adults, with patient tutor-led guidance, one-to-one teaching, and carefully matched small groups.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    images: [defaultSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [defaultSocialImage],
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <WhyLearnersChooseUs />
      <CoursesOverview />
      <HowLearningWorks />
      <MeetYourQuranTutor />
      <HomeTestimonials />
      <PricingTrial />
      <HomeFaq />
      <FinalTrialCta />
    </>
  );
}
