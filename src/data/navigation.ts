export type NavigationItem = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: readonly NavigationItem[];
};

export type SocialIconName =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "tiktok"
  | "x"
  | "youtube";

export type SocialLink = {
  label: string;
  href?: string;
  icon: SocialIconName;
};

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
] satisfies readonly NavigationItem[];

export const footerLinkGroups = [
  {
    title: "Courses",
    links: [
      { label: "Qaida", href: "/courses/qaida" },
      { label: "Nazra", href: "/courses/nazra" },
      { label: "Tajweed", href: "/courses/tajweed" },
      { label: "Hifz", href: "/courses/hifz" },
      { label: "Islamic Studies", href: "/courses/islamic-studies" },
    ],
  },
  {
    title: "Quick links",
    links: [
      { label: "About", href: "/about" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Book a free trial", href: "/free-trial" },
    ],
  },
] satisfies readonly FooterLinkGroup[];

export const footerPolicyLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
] satisfies readonly NavigationItem[];

// The requested platforms are approved for display; destinations remain unset until provided.
export const footerSocialLinks: readonly SocialLink[] = [
  { label: "SoulWithQuran on Facebook", icon: "facebook" },
  { label: "SoulWithQuran on Instagram", icon: "instagram" },
  { label: "SoulWithQuran on TikTok", icon: "tiktok" },
];
