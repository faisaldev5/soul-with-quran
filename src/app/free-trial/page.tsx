import type { Metadata } from "next";

import { FreeTrialFormSection } from "@/components/sections/free-trial-form-section";
import { FreeTrialIntro } from "@/components/sections/free-trial-intro";
import { FreeTrialWhatsapp } from "@/components/sections/free-trial-whatsapp";

export const metadata: Metadata = {
  title: "Request a Free Online Quran Trial | SoulWithQuran",
  description:
    "Request a completely free 20–30 minute online Quran trial for a child or adult. Share the learner’s goals and preferred availability, and receive confirmed trial details within 24 hours.",
  alternates: { canonical: "/free-trial" },
};

export default function FreeTrialPage() {
  return (
    <>
      <FreeTrialIntro />
      <FreeTrialFormSection />
      <FreeTrialWhatsapp />
    </>
  );
}
