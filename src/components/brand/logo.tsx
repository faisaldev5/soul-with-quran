import Image from "next/image";

import { cn } from "@/lib/cn";

type LogoSize = "sm" | "md" | "lg";

export type LogoProps = {
  alt?: string;
  size?: LogoSize;
  className?: string;
  preload?: boolean;
  sizes?: string;
};

const logoSizes: Record<LogoSize, { width: number; height: number; className: string }> = {
  sm: { width: 120, height: 30, className: "h-auto w-[120px]" },
  md: { width: 168, height: 42, className: "h-auto w-[168px]" },
  lg: { width: 216, height: 54, className: "h-auto w-[216px]" },
};

export function Logo({
  alt = "SoulWithQuran",
  className,
  preload = false,
  size = "md",
  sizes = "(min-width: 1024px) 216px, 168px",
}: LogoProps) {
  const dimensions = logoSizes[size];

  return (
    <Image
      src="/brand/logos/soulwithquran-logo-primary.png"
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      preload={preload}
      sizes={sizes}
      className={cn(className ?? dimensions.className)}
    />
  );
}
