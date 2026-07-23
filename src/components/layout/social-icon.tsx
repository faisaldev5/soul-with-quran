import type { SocialIconName } from "@/data/navigation";

export function SocialIcon({ name }: { name: SocialIconName }) {
  const commonProps = {
    "aria-hidden": true,
    className: "size-5",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.75,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "facebook":
      return (
        <svg {...commonProps}>
          <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect height="16" rx="4" width="16" x="4" y="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.5" cy="6.5" fill="currentColor" r="0.75" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...commonProps}>
          <path d="M6 9v9M6 6v.01M10 18v-5a3 3 0 0 1 6 0v5M10 9v9" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...commonProps}>
          <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5c.4 0 .8.1 1.2.2V8.3c-.4-.1-.8-.1-1.2-.1a6.3 6.3 0 1 0 6.3 6.3V8.8c1.1.8 2.4 1.2 3.8 1.2V6.8c-1.8 0-3.5-1.1-4.1-2.8H14Z" />
        </svg>
      );
    case "x":
      return (
        <svg {...commonProps}>
          <path d="m5 4 14 16M19 4 5 20" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...commonProps}>
          <path d="M20.5 7.5a2 2 0 0 0-1.4-1.4C17.8 5.7 12 5.7 12 5.7s-5.8 0-7.1.4a2 2 0 0 0-1.4 1.4C3.1 8.8 3.1 12 3.1 12s0 3.2.4 4.5a2 2 0 0 0 1.4 1.4c1.3.4 7.1.4 7.1.4s5.8 0 7.1-.4a2 2 0 0 0 1.4-1.4c.4-1.3.4-4.5.4-4.5s0-3.2-.4-4.5Z" />
          <path d="m10 15 5-3-5-3v6Z" />
        </svg>
      );
  }
}
