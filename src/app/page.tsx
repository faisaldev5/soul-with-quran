import { CoursesOverview } from "@/components/sections/courses-overview";
import { FinalTrialCta } from "@/components/sections/final-trial-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { HowLearningWorks } from "@/components/sections/how-learning-works";
import { HomeFaq } from "@/components/sections/home-faq";
import { HomeTestimonials } from "@/components/sections/home-testimonials";
import { MeetYourQuranTutor } from "@/components/sections/meet-your-quran-tutor";
import { PricingTrial } from "@/components/sections/pricing-trial";
import { WhyLearnersChooseUs } from "@/components/sections/why-learners-choose-us";

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
