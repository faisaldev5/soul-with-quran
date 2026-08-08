"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { primaryNavigation } from "@/data/navigation";
import { CoursesNavDropdown } from "@/components/layout/courses-nav-dropdown";

function isNavItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="flex items-center gap-1">
      {primaryNavigation.map((item) => {
        const isActive = isNavItemActive(pathname, item.href);

        if (item.label === "Courses") {
          return <CoursesNavDropdown key={item.href} isActive={isActive} />;
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative rounded-pill px-3.5 py-2 text-sm leading-6 transition-colors duration-micro ease-swq-out hover:bg-primary-50 hover:text-primary-700 motion-reduce:transition-none",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
              isActive ? "font-semibold text-primary-700" : "font-medium text-text-secondary",
            )}
          >
            {item.label}
            {isActive && (
              <span aria-hidden="true" className="absolute inset-x-3 -bottom-0.5 h-1 rounded-full bg-sage-500" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
