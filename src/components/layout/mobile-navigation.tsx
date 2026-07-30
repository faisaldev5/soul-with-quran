"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";

import { buttonClassName } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { primaryNavigation } from "@/data/navigation";
import { cn } from "@/lib/cn";

const mobileMenuId = "mobile-navigation-panel";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panelElements = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const focusableElements = [
        menuButtonRef.current,
        ...(panelElements ? Array.from(panelElements) : []),
      ].filter((element): element is HTMLElement => element !== null);

      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  return (
    <>
      <button
        ref={menuButtonRef}
        type="button"
        className="relative z-header inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-medium border border-border bg-surface text-primary-700 lg:hidden"
        aria-controls={mobileMenuId}
        aria-expanded={isOpen}
        aria-label={
          isOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" strokeWidth={2} />
        ) : (
          <Menu aria-hidden="true" className="size-5" strokeWidth={2} />
        )}
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={panelRef}
              id={mobileMenuId}
              role="dialog"
              aria-label="Mobile navigation"
              aria-modal="true"
              className="fixed inset-x-0 bottom-0 top-[var(--swq-site-header-height)] z-dialog isolate overflow-y-auto overscroll-contain border-t border-border bg-background shadow-overlay swq-mobile-menu-panel lg:hidden"
            >
              <Container className="min-h-full py-4">
                <nav aria-label="Mobile primary navigation" className="py-8">
                  <ul className="space-y-2">
                    {primaryNavigation.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex min-h-11 items-center rounded-medium px-3 text-lg font-medium leading-7 text-text-primary hover:bg-primary-50 hover:text-primary-700"
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/free-trial"
                    className={cn(buttonClassName("primary"), "mt-8 w-full")}
                    onClick={closeMenu}
                  >
                    Book a free trial
                  </Link>
                </nav>
              </Container>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
