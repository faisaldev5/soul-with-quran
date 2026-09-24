import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { PrimaryNav } from "@/components/layout/primary-nav";
import { StickyHeader } from "@/components/layout/sticky-header";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <StickyHeader>
      <Container className="py-3">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-pill border border-border/70 bg-surface px-6 py-2 shadow-small lg:px-8">
          <Link href="/" aria-label="SoulWithQuran home" className="shrink-0 justify-self-start">
            <Logo
              alt=""
              size="md"
              preload
              className="h-11 w-auto sm:h-12 lg:h-14"
              sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 176px"
            />
          </Link>

          <div className="hidden justify-self-center lg:flex">
            <PrimaryNav />
          </div>

          <div className="flex items-center gap-3 justify-self-end">
            <div className="hidden lg:block">
              <ButtonLink
                href="/free-trial"
                icon={<ArrowRight aria-hidden="true" className="size-4" />}
                className="shadow-small transition-shadow duration-micro ease-swq-out hover:shadow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transition-none"
              >
                Request a free trial
              </ButtonLink>
            </div>

            <MobileNavigation />
          </div>
        </div>
      </Container>
    </StickyHeader>
  );
}
