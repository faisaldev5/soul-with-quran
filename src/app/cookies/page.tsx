import type { Metadata } from "next";

import { CookiesHero } from "@/components/sections/cookies-hero";
import { CookiesContent } from "@/components/sections/cookies-content";

export const metadata: Metadata = {
  title: "Cookie Policy | SoulWithQuran",
  description:
    "How SoulWithQuran uses cookies and similar technologies, including Cloudflare Turnstile on the Free Trial and Contact forms.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <CookiesHero />
      <CookiesContent />
    </>
  );
}
