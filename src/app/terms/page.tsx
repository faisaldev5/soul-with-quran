import type { Metadata } from "next";

import { TermsHero } from "@/components/sections/terms-hero";
import { TermsContent } from "@/components/sections/terms-content";

export const metadata: Metadata = {
  title: "Terms & Conditions | SoulWithQuran",
  description:
    "The terms on which SoulWithQuran provides its website, enquiries, free trial, and online Quran learning services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsContent />
    </>
  );
}
