import type { Metadata } from "next";

import { AboutHero } from "@/components/sections/about-hero";
import { MeetYourQuranTutorAbout } from "@/components/sections/meet-your-quran-tutor-about";

export const metadata: Metadata = {
  title: "About SoulWithQuran",
  description:
    "Learn about SoulWithQuran and its patient, structured approach to online Quran learning for children and adults.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MeetYourQuranTutorAbout />
    </>
  );
}
