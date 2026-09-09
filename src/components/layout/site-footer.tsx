import Image from "next/image";
import Link from "next/link";

import { SocialIcon } from "@/components/layout/social-icon";
import { Container } from "@/components/ui/container";
import {
  footerLinkGroups,
  footerPolicyLinks,
  footerSocialLinks,
} from "@/data/navigation";

function hasSocialDestination(
  socialLink: (typeof footerSocialLinks)[number],
): socialLink is (typeof footerSocialLinks)[number] & { href: string } {
  return typeof socialLink.href === "string" && socialLink.href.length > 0;
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const activeSocialLinks = footerSocialLinks.filter(hasSocialDestination);

  return (
    <footer data-surface="navy" className="bg-primary-600 text-white">
      <Container className="py-section-compact-mobile md:py-section-compact-tablet lg:py-section-compact-desktop">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))] lg:gap-x-12 lg:gap-y-12">
          <div className="space-y-6">
            <Link
              href="/"
              aria-label="SoulWithQuran home"
              className="inline-flex items-center gap-3 rounded-medium"
            >
              <Image
                src="/brand/marks/mark-reversed.png"
                alt="SoulWithQuran brand mark"
                width={64}
                height={64}
                sizes="64px"
              />
              <span className="font-body text-lg font-semibold leading-7 text-white">
                SoulWithQuran
              </span>
            </Link>
            <p className="max-w-supporting text-sm leading-6 text-primary-100">
              Tutor-led online Quran learning for children and adults.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-base font-semibold leading-6 text-white">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-sm leading-6 text-primary-100 transition-colors duration-micro ease-swq-out hover:text-white motion-reduce:transition-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {group.title === "Contact" && activeSocialLinks.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2" aria-label="Social media">
                  {activeSocialLinks.map((socialLink) => (
                    <a
                      key={socialLink.label}
                      href={socialLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={socialLink.label}
                      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-primary-400 text-primary-100 transition-colors duration-micro ease-swq-out hover:border-white hover:text-white motion-reduce:transition-none"
                    >
                      <SocialIcon name={socialLink.icon} />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-primary-500 pt-6 text-sm leading-6 text-primary-100 md:flex-row md:items-center md:justify-between">
          <p>Copyright {currentYear} SoulWithQuran. All rights reserved.</p>
          <nav aria-label="Footer policies">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerPolicyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white transition-colors duration-micro ease-swq-out hover:text-white motion-reduce:transition-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
