import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export type BadgeVariant = "navy" | "sage" | "gold" | "neutral";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  navy: "bg-primary-100 text-primary-800",
  sage: "bg-sage-100 text-sage-800",
  gold: "bg-gold-100 text-gold-800",
  neutral: "bg-neutral-100 text-neutral-800",
};

export function Badge({
  children,
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-small px-3 py-1 text-sm font-medium leading-5",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
