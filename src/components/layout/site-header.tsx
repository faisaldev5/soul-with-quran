import Link from "next/link";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { StickyHeader } from "@/components/layout/sticky-header";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { primaryNavigation } from "@/data/navigation";

export function SiteHeader() {
  return (
    <StickyHeader>
      <Container className="flex min-h-[var(--swq-site-header-height)] items-center justify-between gap-6">
        <Link href="/" aria-label="SoulWithQuran home" className="shrink-0">
          <Logo
            size="md"
            className="h-11 w-auto sm:h-12 lg:h-[52px]"
            sizes="(min-width: 1024px) 156px, (min-width: 640px) 144px, 132px"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-6"
        >
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium leading-6 text-text-secondary transition-colors duration-micro ease-swq-out hover:text-primary-700 motion-reduce:transition-none"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/free-trial" className="ml-1 shrink-0">
            Book a free trial
          </ButtonLink>
        </nav>

        <MobileNavigation />
      </Container>
    </StickyHeader>
  );
}
