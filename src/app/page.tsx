import { CoursesOverview } from "@/components/sections/courses-overview";
import { HomeHero } from "@/components/sections/home-hero";
import { WhyLearnersChooseUs } from "@/components/sections/why-learners-choose-us";

export default function Home() {
  return (
    <>
      <HomeHero />
      <WhyLearnersChooseUs />
      <CoursesOverview />
    </>
  );
}
