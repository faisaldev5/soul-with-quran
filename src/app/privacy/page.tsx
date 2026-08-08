import type { Metadata } from "next";

import { PrivacyHero } from "@/components/sections/privacy-hero";
import { PrivacyPolicyContent } from "@/components/sections/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | SoulWithQuran",
  description:
    "How SoulWithQuran handles information submitted through the website, the Free Trial form, and the Contact form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyPolicyContent />
    </>
  );
}
