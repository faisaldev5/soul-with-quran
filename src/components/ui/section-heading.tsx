import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";
type HeadingAlign = "left" | "center";

export type SectionHeadingProps = {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  level?: HeadingLevel;
  align?: HeadingAlign;
  id?: string;
  className?: string;
};

export function SectionHeading({
  align = "left",
  className,
  description,
  eyebrow,
  heading,
  id,
  level = "h2",
}: SectionHeadingProps) {
  const Heading: ElementType = level;
  const isCentered = align === "center";

  return (
    <div className={cn("space-y-4", isCentered && "text-center", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary-700">
          {eyebrow}
        </p>
      ) : null}
      <Heading id={id}>{heading}</Heading>
      {description ? (
        <p
          className={cn(
            "max-w-supporting text-base leading-7 text-text-secondary",
            isCentered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
