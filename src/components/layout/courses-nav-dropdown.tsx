"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { coursesNavigation } from "@/data/navigation";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export function CoursesNavDropdown({ isActive }: { isActive: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const close = useCallback((restoreFocus: boolean) => {
    setIsOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [isOpen, close]);

  const focusMenuItemAt = (index: number) => {
    const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]');
    if (!items || items.length === 0) return;
    const nextIndex = (index + items.length) % items.length;
    items[nextIndex]?.focus();
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      window.requestAnimationFrame(() => focusMenuItemAt(0));
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]') ?? []);
    const currentIndex = items.indexOf(document.activeElement as HTMLAnchorElement);

    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusMenuItemAt(currentIndex + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusMenuItemAt(currentIndex - 1);
    }
  };

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setIsOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleTriggerKeyDown}
        className={cn(
          "relative inline-flex items-center gap-1 rounded-pill px-3.5 py-2 text-sm leading-6 transition-colors duration-micro ease-swq-out hover:bg-primary-50 hover:text-primary-700 motion-reduce:transition-none",
          focusRing,
          isActive ? "font-semibold text-primary-700" : "font-medium text-text-secondary",
        )}
      >
        Courses
        <ChevronDown
          aria-hidden="true"
          className={cn("size-4 transition-transform duration-micro ease-swq-out motion-reduce:transition-none", isOpen && "rotate-180")}
        />
        {isActive && <span aria-hidden="true" className="absolute inset-x-3 -bottom-0.5 h-1 rounded-full bg-sage-500" />}
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label="Courses"
          onKeyDown={handleMenuKeyDown}
          className="absolute left-1/2 top-full z-menu mt-2 w-64 -translate-x-1/2 rounded-medium border border-border bg-surface p-2 shadow-medium"
        >
          {coursesNavigation.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              role="menuitem"
              onClick={() => close(false)}
              className={cn(
                "block rounded-small px-3 py-2 text-sm leading-6 text-text-primary transition-colors duration-micro ease-swq-out hover:bg-primary-50 hover:text-primary-700 motion-reduce:transition-none",
                focusRing,
              )}
            >
              {course.label}
            </Link>
          ))}
          <div role="separator" className="my-1.5 border-t border-border" />
          <Link
            href="/courses"
            role="menuitem"
            onClick={() => close(false)}
            className={cn(
              "flex items-center gap-1.5 rounded-small px-3 py-2 text-sm font-semibold leading-6 text-primary-700 transition-colors duration-micro ease-swq-out hover:bg-primary-50 motion-reduce:transition-none",
              focusRing,
            )}
          >
            View all courses
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
