"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";

import { buttonClassName } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { coursesNavigation, primaryNavigation } from "@/data/navigation";
import { cn } from "@/lib/cn";

const mobileMenuId = "mobile-navigation-panel";
const mobileCoursesSubmenuId = "mobile-courses-submenu";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesExpanded, setIsCoursesExpanded] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setIsCoursesExpanded(false);
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
        className="relative z-header inline-flex size-11 shrink-0 items-center justify-center rounded-medium border border-border bg-surface text-primary-700 transition-colors duration-micro ease-swq-out hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transition-none lg:hidden"
        aria-controls={mobileMenuId}
        aria-expanded={isOpen}
        aria-label={
          isOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={() =>
          setIsOpen((open) => {
            const next = !open;
            if (!next) setIsCoursesExpanded(false);
            return next;
          })
        }
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
                <nav aria-label="Mobile primary navigation" className="py-6">
                  <ul className="space-y-1">
                    {primaryNavigation.map((item) => {
                      if (item.label === "Courses") {
                        return (
                          <li key={item.href}>
                            <button
                              type="button"
                              aria-expanded={isCoursesExpanded}
                              aria-controls={mobileCoursesSubmenuId}
                              onClick={() => setIsCoursesExpanded((open) => !open)}
                              className="flex min-h-12 w-full items-center justify-between rounded-medium px-3 text-lg font-medium leading-7 text-text-primary transition-colors duration-micro ease-swq-out hover:bg-primary-50 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 motion-reduce:transition-none"
                            >
                              Courses
                              <ChevronDown
                                aria-hidden="true"
                                className={cn(
                                  "size-5 shrink-0 transition-transform duration-micro ease-swq-out motion-reduce:transition-none",
                                  isCoursesExpanded && "rotate-180",
                                )}
                              />
                            </button>
                            {isCoursesExpanded && (
                              <ul id={mobileCoursesSubmenuId} className="ml-3 mt-1 space-y-1 border-l border-border pl-4">
                                {coursesNavigation.map((course) => (
                                  <li key={course.href}>
                                    <Link
                                      href={course.href}
                                      className="flex min-h-11 items-center rounded-medium px-3 text-base leading-6 text-text-secondary transition-colors duration-micro ease-swq-out hover:bg-primary-50 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 motion-reduce:transition-none"
                                      onClick={closeMenu}
                                    >
                                      {course.label}
                                    </Link>
                                  </li>
                                ))}
                                <li>
                                  <Link
                                    href="/courses"
                                    className="flex min-h-11 items-center gap-1.5 rounded-medium px-3 text-base font-semibold leading-6 text-primary-700 transition-colors duration-micro ease-swq-out hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 motion-reduce:transition-none"
                                    onClick={closeMenu}
                                  >
                                    View all courses
                                    <ArrowRight aria-hidden="true" className="size-4" />
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </li>
                        );
                      }

                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="flex min-h-12 items-center rounded-medium px-3 text-lg font-medium leading-7 text-text-primary transition-colors duration-micro ease-swq-out hover:bg-primary-50 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 motion-reduce:transition-none"
                            onClick={closeMenu}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <Link
                    href="/free-trial"
                    className={cn(buttonClassName("primary"), "mt-8 w-full")}
                    onClick={closeMenu}
                  >
                    Request a free trial
                    <ArrowRight aria-hidden="true" className="size-4" />
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
