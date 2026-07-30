"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

const DEFAULT_ROOT_MARGIN = "0px 0px -8% 0px";
const DEFAULT_THRESHOLD = 0.1;

type RevealState = "pending" | "prepared" | "visible" | "complete";

export type RevealVariant =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "stagger";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  rootMargin?: string;
  threshold?: number;
  variant?: RevealVariant;
};

export function Reveal({
  children,
  className,
  delay = 0,
  rootMargin = DEFAULT_ROOT_MARGIN,
  threshold = DEFAULT_THRESHOLD,
  variant = "fade-up",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [revealState, setRevealState] = useState<RevealState>("pending");

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    let cancelled = false;
    let hasEntered = false;
    let initialFrame: number | undefined;

    const setInitialState = (state: Exclude<RevealState, "pending">) => {
      initialFrame = window.requestAnimationFrame(() => {
        if (!cancelled && !hasEntered) {
          setRevealState(state);
        }
      });
    };

    const cleanupInitialFrame = () => {
      cancelled = true;
      if (initialFrame !== undefined) {
        window.cancelAnimationFrame(initialFrame);
      }
    };

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setInitialState("complete");
      return cleanupInitialFrame;
    }

    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const { bottom, top } = element.getBoundingClientRect();

    if (top <= viewportHeight && bottom > 0) {
      setInitialState("complete");
      return cleanupInitialFrame;
    }

    if (top <= 0) {
      setInitialState("complete");
      return cleanupInitialFrame;
    }

    setInitialState("prepared");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        hasEntered = true;
        setRevealState("visible");
        observer.unobserve(element);
        observer.disconnect();
      },
      { rootMargin, threshold },
    );

    observer.observe(element);

    return () => {
      cleanupInitialFrame();
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  const style = {
    "--swq-motion-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      ref={elementRef}
      className={cn("swq-reveal", className)}
      data-swq-reveal="true"
      data-swq-reveal-state={revealState}
      data-revealed={
        revealState === "visible" || revealState === "complete"
          ? "true"
          : undefined
      }
      data-swq-reveal-variant={variant}
      style={style}
    >
      {children}
    </div>
  );
}
