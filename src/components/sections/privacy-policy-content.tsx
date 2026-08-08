import Link from "next/link";

import { LegalArticleLayout, type LegalTocSection } from "@/components/legal/legal-article-layout";

const policySections: readonly LegalTocSection[] = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "learner-information", title: "Information about learners" },
  { id: "how-we-use-information", title: "How we use information" },
  { id: "security-and-spam-protection", title: "Security and spam protection" },
  { id: "email-communications", title: "Email communications" },
  { id: "third-party-services", title: "Third-party services" },
  { id: "cookies-and-similar-technologies", title: "Cookies and similar technologies" },
  { id: "data-retention", title: "Data retention" },
  { id: "data-sharing", title: "Data sharing" },
  { id: "international-processing", title: "International processing" },
  { id: "your-choices-and-privacy-requests", title: "Your choices and privacy requests" },
  { id: "external-links", title: "External links" },
  { id: "changes-to-this-policy", title: "Changes to this policy" },
  { id: "contact-us", title: "Contact us" },
];

export function PrivacyPolicyContent() {
  return (
    <LegalArticleLayout ariaLabel="Privacy Policy details" sections={policySections}>
      <section id="introduction" aria-labelledby="introduction-heading">
        <h2 id="introduction-heading">Introduction</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran (“SoulWithQuran”, “we”, “us”) provides tutor-led online
          Quran learning for children and adults. This policy explains what
          information we collect through soulwithquran.com, why we collect it,
          and how it is used when you browse the site, send a message through
          the Contact form, or request a free trial.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          This policy covers the public marketing website only. It does not
          describe a student account, dashboard, or payment system, because the
          website does not currently include those features.
        </p>
      </section>

      <section id="information-we-collect" aria-labelledby="information-we-collect-heading">
        <h2 id="information-we-collect-heading">Information we collect</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We only collect information that you choose to submit through the
          site’s forms. We do not require an account and there is no
          login area.
        </p>

        <h3 className="mt-6 text-xl leading-7">Free Trial form</h3>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          When you request a free trial, the form can collect:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-7 text-text-secondary">
          <li>your name and email address;</li>
          <li>a WhatsApp number, if you choose to provide one;</li>
          <li>your country or time zone;</li>
          <li>the learner’s name, if provided, age group, current Quran-learning level, and course of interest;</li>
          <li>preferred lesson format, preferred trial day and time, and alternative availability if given;</li>
          <li>a preferred platform (for example Zoom, Google Meet, or WhatsApp), if selected; and</li>
          <li>any learning goals or additional information you choose to share.</li>
        </ul>

        <h3 className="mt-6 text-xl leading-7">Contact form</h3>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          When you send a message through the Contact page, the form can
          collect:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-7 text-text-secondary">
          <li>your name and email address;</li>
          <li>a WhatsApp number, if you choose to provide one;</li>
          <li>the type of enquiry you select; and</li>
          <li>your message.</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-text-secondary">
          Fields marked as optional in each form are not required to submit an
          enquiry. We do not knowingly collect payment details, government ID,
          or other sensitive information through either form.
        </p>
      </section>

      <section id="learner-information" aria-labelledby="learner-information-heading">
        <h2 id="learner-information-heading">Information about learners</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran offers Quran lessons to both children and adults. When a
          parent, guardian, or adult learner submits the Free Trial form on
          behalf of a child, that information is provided directly by the
          adult completing the form — the website does not collect information
          directly from a child.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          If you are submitting the form on behalf of a learner, please share
          only the information reasonably needed to arrange and prepare for
          the free trial, such as the learner’s name, approximate age group,
          and current learning stage. There is no confirmed minimum age for a
          learner, and eligibility is discussed individually as part of
          arranging the trial.
        </p>
      </section>

      <section id="how-we-use-information" aria-labelledby="how-we-use-information-heading">
        <h2 id="how-we-use-information-heading">How we use information</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Information submitted through the Free Trial or Contact form is used
          to:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-7 text-text-secondary">
          <li>respond to your enquiry or message;</li>
          <li>understand a learner’s current stage, goals, and availability so a suitable trial or course can be suggested;</li>
          <li>arrange and confirm a free trial lesson;</li>
          <li>send you an acknowledgement email confirming we received your submission; and</li>
          <li>help protect the site and its forms from spam and abuse.</li>
        </ul>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We do not use the information you submit for advertising, and we do
          not build advertising profiles from it.
        </p>
      </section>

      <section id="security-and-spam-protection" aria-labelledby="security-and-spam-protection-heading">
        <h2 id="security-and-spam-protection-heading">Security and spam protection</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Both the Free Trial and Contact forms use Cloudflare Turnstile, a
          security check that helps confirm a submission is coming from a
          genuine visitor rather than automated spam. Completing this check may
          involve Cloudflare processing limited technical information about
          your browser or device as part of providing that security service.
          Turnstile is used only for abuse and spam prevention — it is not used
          for advertising.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Submitted form data is validated on our server before it is used or
          sent by email, and submissions that fail this security check are not
          processed further.
        </p>
      </section>

      <section id="email-communications" aria-labelledby="email-communications-heading">
        <h2 id="email-communications-heading">Email communications</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          When you submit the Free Trial or Contact form, your information is
          sent through Resend, the email delivery service we use, so that the
          enquiry reaches SoulWithQuran and so an acknowledgement email can be
          sent back to the address you provided. Resend processes this
          information only to deliver those emails on our behalf.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Replying to our acknowledgement email, or to a reply we send from
          your enquiry, will reach a real person handling SoulWithQuran
          enquiries.
        </p>
      </section>

      <section id="third-party-services" aria-labelledby="third-party-services-heading">
        <h2 id="third-party-services-heading">Third-party services</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We keep the number of third parties involved in running the site
          deliberately small. The services currently used are:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-7 text-text-secondary">
          <li>
            <span className="font-semibold text-text-primary">Cloudflare Turnstile</span> — spam and
            abuse protection for the Free Trial and Contact forms, described
            above.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Resend</span> — delivers enquiry
            emails and acknowledgement emails on our behalf, described above.
          </li>
          <li>
            <span className="font-semibold text-text-primary">WhatsApp</span> — if you choose to
            follow a “Continue on WhatsApp” link or message us on WhatsApp, you
            leave soulwithquran.com and that conversation is handled under
            WhatsApp’s and Meta’s own privacy practices, not this policy.
          </li>
          <li>
            <span className="font-semibold text-text-primary">Hosting</span> — the website is
            hosted on Vercel’s infrastructure, which necessarily processes
            standard web traffic to serve the site.
          </li>
        </ul>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The website does not currently use any analytics or advertising
          service, so no analytics data is collected about your visit.
        </p>
      </section>

      <section id="cookies-and-similar-technologies" aria-labelledby="cookies-and-similar-technologies-heading">
        <h2 id="cookies-and-similar-technologies-heading">Cookies and similar technologies</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The website itself does not set analytics or marketing cookies, and
          does not use browser local storage or session storage to track you.
          Cloudflare Turnstile, described above, may use technical mechanisms
          necessary to complete its security check when you submit a form; this
          is a security function rather than tracking or advertising.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Because the site does not currently use analytics or marketing
          cookies, it does not show a cookie-consent banner. If that changes in
          the future, this policy and the site’s cookie practices will be
          updated accordingly.
        </p>
      </section>

      <section id="data-retention" aria-labelledby="data-retention-heading">
        <h2 id="data-retention-heading">Data retention</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We keep information submitted through the Free Trial or Contact form
          only for as long as reasonably needed to respond to your enquiry,
          arrange a trial lesson, maintain a record of the communication, and
          meet any applicable security, administrative, or legal obligations.
          We do not currently operate an automatic deletion schedule with a
          fixed number of days, but we do not keep enquiry information for
          longer than is reasonably necessary for these purposes.
        </p>
      </section>

      <section id="data-sharing" aria-labelledby="data-sharing-heading">
        <h2 id="data-sharing-heading">Data sharing</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We do not sell your personal information. Information you submit is
          shared only with the service providers necessary to operate the
          website and respond to your enquiry — currently Cloudflare
          (Turnstile), Resend, and our hosting provider, each described above —
          and, where applicable, if required to meet a legal or security
          obligation. We do not share your information with third parties for
          their own marketing purposes.
        </p>
      </section>

      <section id="international-processing" aria-labelledby="international-processing-heading">
        <h2 id="international-processing-heading">International processing</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran serves English-speaking families and adults in multiple
          countries, and the service providers described above may process
          information on servers located outside your own country. We rely on
          these providers’ own security and privacy practices when your
          information is processed in this way.
        </p>
      </section>

      <section id="your-choices-and-privacy-requests" aria-labelledby="your-choices-and-privacy-requests-heading">
        <h2 id="your-choices-and-privacy-requests-heading">Your choices and privacy requests</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          You can contact us at any time to:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-7 text-text-secondary">
          <li>ask what information we hold about you or a learner you submitted details for;</li>
          <li>ask us to correct inaccurate information; or</li>
          <li>ask us to delete information where we are not required to keep it.</li>
        </ul>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We will respond to reasonable requests using the contact details
          below.
        </p>
      </section>

      <section id="external-links" aria-labelledby="external-links-heading">
        <h2 id="external-links-heading">External links</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The website may link to external destinations, such as WhatsApp.
          Once you follow an external link, that site’s own privacy practices
          apply, not this policy.
        </p>
      </section>

      <section id="changes-to-this-policy" aria-labelledby="changes-to-this-policy-heading">
        <h2 id="changes-to-this-policy-heading">Changes to this policy</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We may update this policy as the website changes. The “Last updated”
          date at the top of this page reflects the most recent revision.
          Meaningful changes will be reflected on this page rather than
          communicated individually.
        </p>
      </section>

      <section id="contact-us" aria-labelledby="contact-us-heading">
        <h2 id="contact-us-heading">Contact us</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          For any question about this policy, or to make a privacy request, the
          most reliable way to reach us is through the{" "}
          <Link href="/contact" className="font-medium">
            Contact page
          </Link>
          . Please mention that your message relates to privacy so it can be
          directed appropriately.
        </p>
      </section>
    </LegalArticleLayout>
  );
}
