import type { ComponentPropsWithoutRef } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

type SectionSpacing = "default" | "compact";
type SectionSurface = "canvas" | "white" | "sage" | "navy";

export type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: SectionSpacing;
  surface?: SectionSurface;
  withContainer?: boolean;
  containerClassName?: string;
};

const surfaceClasses: Record<SectionSurface, string> = {
  canvas: "bg-background",
  white: "bg-surface",
  sage: "bg-sage-50",
  navy: "bg-primary-600 text-text-inverse",
};

export function Section({
  children,
  className,
  containerClassName,
  spacing = "default",
  surface = "canvas",
  withContainer = true,
  ...props
}: SectionProps) {
  const content = withContainer ? (
    <Container className={containerClassName}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      data-surface={surface}
      className={cn(
        spacing === "default"
          ? "py-section-mobile md:py-section-tablet lg:py-section-desktop"
          : "py-section-compact-mobile md:py-section-compact-tablet lg:py-section-compact-desktop",
        surfaceClasses[surface],
        className,
      )}
      {...props}
    >
      {content}
    </section>
  );
}
