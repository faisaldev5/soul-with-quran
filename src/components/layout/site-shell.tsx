import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="isolate flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="fixed -top-16 left-4 z-toast inline-flex min-h-11 items-center rounded-pill bg-primary-600 px-5 py-2 text-sm font-semibold leading-6 text-white transition-[top] duration-normal ease-swq-out focus-visible:top-4 focus-visible:outline-gold-300 motion-reduce:transition-none"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
