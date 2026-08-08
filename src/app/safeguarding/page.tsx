import type { Metadata } from "next";

import { SafeguardingHero } from "@/components/sections/safeguarding-hero";
import { SafeguardingContent } from "@/components/sections/safeguarding-content";

export const metadata: Metadata = {
  title: "Safeguarding | SoulWithQuran",
  description:
    "SoulWithQuran's approach to safeguarding learners, including children, and maintaining an appropriate online learning environment.",
  alternates: { canonical: "/safeguarding" },
};

export default function SafeguardingPage() {
  return (
    <>
      <SafeguardingHero />
      <SafeguardingContent />
    </>
  );
}
