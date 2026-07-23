import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "article" | "a";
  href?: string;
  interactive?: boolean;
  children?: ReactNode;
};

export function Card({
  as = "div",
  children,
  className,
  href,
  interactive = false,
  ...props
}: CardProps) {
  const classes = cn(
    "rounded-large border border-border bg-surface p-5 shadow-small md:p-6",
    interactive &&
      "transition-[box-shadow,transform] duration-normal ease-swq-out hover:-translate-y-0.5 hover:shadow-hover motion-reduce:transition-none",
    className,
  );

  if (as === "a") {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  if (as === "article") {
    return (
      <article className={classes} {...props}>
        {children}
      </article>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
