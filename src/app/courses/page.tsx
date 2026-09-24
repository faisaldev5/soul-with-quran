import type { Metadata } from "next";

import { CoursesAdditionalServices } from "@/components/sections/courses-additional-services";
import { CoursesOverview } from "@/components/sections/courses-overview";
import { CoursesFinalCta } from "@/components/sections/courses-final-cta";
import { CoursesLearningPath } from "@/components/sections/courses-learning-path";
import { CoursesPageHero } from "@/components/sections/courses-page-hero";
import { defaultSocialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Online Quran Courses for Children and Adults | SoulWithQuran",
  description:
    "Explore online Qaida, Nazra, Tajweed, Hifz, and Islamic Studies courses for children and adults with patient, structured guidance.",
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "Online Quran Courses for Children and Adults | SoulWithQuran",
    description:
      "Explore online Qaida, Nazra, Tajweed, Hifz, and Islamic Studies courses for children and adults with patient, structured guidance.",
    url: "/courses",
    type: "website",
    images: [defaultSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Courses for Children and Adults | SoulWithQuran",
    description:
      "Explore online Qaida, Nazra, Tajweed, Hifz, and Islamic Studies courses for children and adults with patient, structured guidance.",
    images: [defaultSocialImage],
  },
};

export default function CoursesPage() {
  return (
    <>
      <CoursesPageHero />
      <CoursesOverview surface="white" />
      <CoursesLearningPath />
      <CoursesAdditionalServices />
      <CoursesFinalCta surface="white" />
    </>
  );
}
