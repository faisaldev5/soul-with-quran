"use client";

import Link from "next/link";
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
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-medium border border-border bg-surface text-primary-700 lg:hidden"
        aria-controls={mobileMenuId}
        aria-expanded={isOpen}
        aria-label={
          isOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true" className="relative size-5">
          <span
            className={cn(
              "absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition-[transform,top] duration-toggle ease-swq-out motion-reduce:transition-none",
              isOpen && "top-1/2 -translate-y-1/2 rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-[opacity,transform] duration-toggle ease-swq-out motion-reduce:transition-none",
              isOpen && "scale-x-0 opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute bottom-1 left-0 h-0.5 w-5 rounded-full bg-current transition-[bottom,transform] duration-toggle ease-swq-out motion-reduce:transition-none",
              isOpen && "bottom-1/2 -translate-y-1/2 -rotate-45",
            )}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          ref={panelRef}
          id={mobileMenuId}
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
          className="fixed inset-x-0 bottom-0 top-18 z-menu overflow-y-auto border-t border-border bg-background lg:hidden"
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
        </div>
      ) : null}
    </>
  );
}
