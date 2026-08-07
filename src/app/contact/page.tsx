import type { Metadata } from "next";

import { ContactHero } from "@/components/sections/contact-hero";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact SoulWithQuran | Online Quran Classes",
  description:
    "Contact SoulWithQuran with questions about Quran courses, lesson formats, pricing, scheduling, or general enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
