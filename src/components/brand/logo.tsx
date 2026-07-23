import Image from "next/image";

import { cn } from "@/lib/cn";

type LogoSize = "sm" | "md" | "lg";

export type LogoProps = {
  alt?: string;
  size?: LogoSize;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const logoSizes: Record<LogoSize, { width: number; height: number; className: string }> = {
  sm: { width: 120, height: 40, className: "h-8 w-auto" },
  md: { width: 168, height: 56, className: "h-10 w-auto" },
  lg: { width: 216, height: 72, className: "h-12 w-auto" },
};

export function Logo({
  alt = "SoulWithQuran",
  className,
  priority = false,
  size = "md",
  sizes = "(min-width: 1024px) 216px, 168px",
}: LogoProps) {
  const dimensions = logoSizes[size];

  return (
    <Image
      src="/brand/logos/logo-horizontal-primary.png"
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      priority={priority}
      sizes={sizes}
      className={cn(dimensions.className, className)}
    />
  );
}
