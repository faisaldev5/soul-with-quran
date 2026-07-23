import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-site px-gutter-mobile sm:px-gutter-large-mobile md:px-gutter-tablet lg:px-gutter-desktop xl:px-gutter-wide",
        className,
      )}
      {...props}
    />
  );
}
