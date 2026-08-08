import Link from "next/link";

import { LegalArticleLayout, type LegalTocSection } from "@/components/legal/legal-article-layout";

const cookiesSections: readonly LegalTocSection[] = [
  { id: "introduction", title: "Introduction" },
  { id: "what-cookies-are", title: "What cookies and similar technologies are" },
  { id: "how-we-use-them", title: "How SoulWithQuran uses them" },
  { id: "necessary-security-technologies", title: "Strictly necessary and security technologies" },
  { id: "analytics-and-marketing", title: "Analytics and marketing" },
  { id: "third-party-links", title: "Third-party links" },
  { id: "managing-cookies", title: "Managing cookies in your browser" },
  { id: "changes-to-this-policy", title: "Changes to this Cookie Policy" },
  { id: "contact-us", title: "Contact us" },
];

export function CookiesContent() {
  return (
    <LegalArticleLayout ariaLabel="Cookie Policy details" sections={cookiesSections}>
      <section id="introduction" aria-labelledby="introduction-heading">
        <h2 id="introduction-heading">Introduction</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          This Cookie Policy explains how cookies and similar technologies are
          used on soulwithquran.com. It should be read alongside our{" "}
          <Link href="/privacy" className="font-medium">
            Privacy Policy
          </Link>
          , which covers how we handle information you submit through the
          website more broadly.
        </p>
      </section>

      <section id="what-cookies-are" aria-labelledby="what-cookies-are-heading">
        <h2 id="what-cookies-are-heading">What cookies and similar technologies are</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Cookies are small text files a website can store in your browser.
          Similar technologies include browser storage such as local storage
          and session storage. They can be used for purposes ranging from
          keeping a website working correctly to tracking behaviour across
          sites for advertising.
        </p>
      </section>

      <section id="how-we-use-them" aria-labelledby="how-we-use-them-heading">
        <h2 id="how-we-use-them-heading">How SoulWithQuran uses them</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          soulwithquran.com itself does not set analytics or marketing
          cookies, and does not use browser local storage or session storage
          to track visitors. There is no account system and no login area
          that would require a session cookie.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The only technology on the site that may involve cookies or similar
          browser mechanisms is Cloudflare Turnstile, described below, which
          is used purely for security rather than tracking.
        </p>
      </section>

      <section id="necessary-security-technologies" aria-labelledby="necessary-security-technologies-heading">
        <h2 id="necessary-security-technologies-heading">Strictly necessary and security technologies</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Some technology is necessary simply to keep the website’s forms
          working safely.
        </p>

        <h3 className="mt-6 text-xl leading-7">Cloudflare Turnstile</h3>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          The Free Trial and Contact forms use Cloudflare Turnstile to help
          distinguish legitimate submissions from automated abuse. Turnstile
          may use cookies or similar browser mechanisms as part of completing
          this security check, and Cloudflare may process limited technical
          information about your browser or device to provide the service.
          This is used only for spam and abuse prevention — it is not an
          advertising or marketing technology, and we do not use it to track
          you across other websites.
        </p>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          We do not control the exact name or expiry of any cookie Cloudflare
          sets as part of this security check; that is determined by
          Cloudflare as the service provider.
        </p>
      </section>

      <section id="analytics-and-marketing" aria-labelledby="analytics-and-marketing-heading">
        <h2 id="analytics-and-marketing-heading">Analytics and marketing</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The website does not currently use analytics, advertising, or
          marketing cookies of any kind — there is no Google Analytics, no
          advertising pixel, and no behavioural tracking technology in place.
          If that changes in the future, this policy will be updated to
          describe it accurately before it goes live.
        </p>
      </section>

      <section id="third-party-links" aria-labelledby="third-party-links-heading">
        <h2 id="third-party-links-heading">Third-party links</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The website may link to external destinations, such as WhatsApp. If
          you follow one of these links, you leave soulwithquran.com and that
          destination’s own cookie and privacy practices apply — we do not
          control cookies set by a third-party site after you leave ours.
        </p>
      </section>

      <section id="managing-cookies" aria-labelledby="managing-cookies-heading">
        <h2 id="managing-cookies-heading">Managing cookies in your browser</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Most browsers let you view, manage, or block cookies through their
          settings. Because soulwithquran.com does not rely on cookies for
          analytics or marketing, changing these settings should not affect
          your ability to browse the site. However, blocking the security
          technology described above may prevent the Free Trial or Contact
          form from completing its spam-protection check, which could stop
          you from submitting the form.
        </p>
      </section>

      <section id="changes-to-this-policy" aria-labelledby="changes-to-this-policy-heading">
        <h2 id="changes-to-this-policy-heading">Changes to this Cookie Policy</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We may update this policy if the technologies used on the website
          change. The “Last updated” date at the top of this page reflects
          the most recent revision.
        </p>
      </section>

      <section id="contact-us" aria-labelledby="contact-us-heading">
        <h2 id="contact-us-heading">Contact us</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          For any question about this Cookie Policy, the most reliable way to
          reach us is through the{" "}
          <Link href="/contact" className="font-medium">
            Contact page
          </Link>
          . Please mention that your message relates to cookies so it can be
          directed appropriately.
        </p>
      </section>
    </LegalArticleLayout>
  );
}
