"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export function StickyHeader({ children }: { children: ReactNode }) {
  const sentinelRef = useRef<HTMLSpanElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolled(!entry?.isIntersecting);
    });

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <span
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-px w-px"
      />
      <header
        data-swq-sticky-header="true"
        data-sticky-state={isScrolled ? "scrolled" : "top"}
        className="sticky top-0 z-header isolate border-b border-border bg-background swq-sticky-header"
      >
        {children}
      </header>
    </>
  );
}
