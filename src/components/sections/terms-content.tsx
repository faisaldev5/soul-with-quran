import Link from "next/link";

import { LegalArticleLayout, type LegalTocSection } from "@/components/legal/legal-article-layout";

const termsSections: readonly LegalTocSection[] = [
  { id: "introduction", title: "Introduction" },
  { id: "about-soulwithquran", title: "About SoulWithQuran" },
  { id: "eligibility-and-learners", title: "Eligibility and learners" },
  { id: "courses-and-lesson-formats", title: "Courses and lesson formats" },
  { id: "free-trial", title: "Free Trial" },
  { id: "enrollment-and-scheduling", title: "Enrollment and scheduling" },
  { id: "fees-and-payments", title: "Fees and payments" },
  { id: "missed-lessons-and-cancellations", title: "Missed lessons and cancellations" },
  { id: "learner-and-guardian-responsibilities", title: "Learner and parent/guardian responsibilities" },
  { id: "online-lesson-technology", title: "Online lesson technology" },
  { id: "respectful-conduct", title: "Respectful conduct" },
  { id: "educational-outcomes", title: "Educational outcomes" },
  { id: "website-content", title: "Website content" },
  { id: "third-party-platforms-and-links", title: "Third-party platforms and links" },
  { id: "service-availability-and-changes", title: "Service availability and changes" },
  { id: "limitation-of-responsibility", title: "Limitation of responsibility" },
  { id: "privacy", title: "Privacy" },
  { id: "changes-to-these-terms", title: "Changes to these Terms" },
  { id: "contact-us", title: "Contact us" },
];

export function TermsContent() {
  return (
    <LegalArticleLayout ariaLabel="Terms and Conditions details" sections={termsSections}>
      <section id="introduction" aria-labelledby="introduction-heading">
        <h2 id="introduction-heading">Introduction</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          These Terms &amp; Conditions (“Terms”) apply when you use the
          SoulWithQuran website, send an enquiry through the Contact form, or
          request a free trial. By using the website or submitting a form, you
          agree to these Terms. If you do not agree, please do not use the
          website or submit an enquiry.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          These Terms describe how SoulWithQuran currently operates. They do
          not describe a student account, payment system, or dashboard,
          because the website does not currently include those features.
        </p>
      </section>

      <section id="about-soulwithquran" aria-labelledby="about-soulwithquran-heading">
        <h2 id="about-soulwithquran-heading">About SoulWithQuran</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran provides tutor-led online Quran learning for children
          and adults across Qaida, Nazra, Tajweed, Hifz, and Islamic Studies.
          Lessons are delivered live online, with one-to-one guidance as the
          primary model and carefully matched small groups offered where
          suitable.
        </p>
      </section>

      <section id="eligibility-and-learners" aria-labelledby="eligibility-and-learners-heading">
        <h2 id="eligibility-and-learners-heading">Eligibility and learners</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran welcomes learners of different ages and stages, from
          children to adults. Where a learner is a child, a parent or
          guardian should submit or supervise the enquiry and trial request,
          and remains the point of contact for scheduling and communication.
          There is no fixed minimum learner age published on the website;
          suitability is discussed individually as part of arranging a trial.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Please only share information that is reasonably needed to arrange
          an enquiry or trial for yourself or the learner you are enquiring
          on behalf of.
        </p>
      </section>

      <section id="courses-and-lesson-formats" aria-labelledby="courses-and-lesson-formats-heading">
        <h2 id="courses-and-lesson-formats-heading">Courses and lesson formats</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The website currently presents five courses: Qaida, Nazra, Tajweed,
          Hifz, and Islamic Studies. Lessons are offered as one-to-one
          guidance or as a carefully matched small group where learners are
          at a suitably similar stage. Requesting a particular format
          reflects a preference; it does not guarantee that a matching small
          group is immediately available, and one-to-one lessons remain the
          default where a suitable group match does not yet exist.
        </p>
      </section>

      <section id="free-trial" aria-labelledby="free-trial-heading">
        <h2 id="free-trial-heading">Free Trial</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The Free Trial form lets you request a trial lesson; it does not
          instantly book a fixed time. The trial itself is completely free
          and no payment is required. A trial lasts approximately 20–30
          minutes.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          After you submit the form, we review the request — including the
          learner’s stage, goals, and preferred day, time, and platform — and
          send confirmed trial details separately, generally within around 24
          hours. The time and platform you request are treated as
          preferences and are confirmed, rather than guaranteed automatically,
          based on availability.
        </p>
      </section>

      <section id="enrollment-and-scheduling" aria-labelledby="enrollment-and-scheduling-heading">
        <h2 id="enrollment-and-scheduling-heading">Enrollment and scheduling</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Regular classes are held Monday to Friday. The standard schedule is
          five classes each week, with each regular lesson lasting
          approximately 30–40 minutes. Lesson times are arranged to suit the
          learner’s time zone as far as reasonably possible, using the
          availability provided during enquiry or trial.
        </p>
      </section>

      <section id="fees-and-payments" aria-labelledby="fees-and-payments-heading">
        <h2 id="fees-and-payments-heading">Fees and payments</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The standard published price is $80 USD per month, per student, and
          covers the regular class schedule described above. Pricing shown
          on the website reflects current rates and may be updated
          prospectively for future periods; a change in the published price
          does not retroactively change the price already agreed for a
          period already paid for.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Payment for a paid teaching period should be made before that
          monthly period begins. Lessons are not offered on an automatically
          renewing subscription, and we do not automatically charge a card or
          collect recurring payments; each teaching period is arranged and
          paid for directly. There is currently no payment processor on the
          website — payment instructions are provided directly as part of
          enrollment and confirmation.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The free trial itself remains completely free and never requires
          payment.
        </p>
      </section>

      <section id="missed-lessons-and-cancellations" aria-labelledby="missed-lessons-and-cancellations-heading">
        <h2 id="missed-lessons-and-cancellations-heading">Missed lessons and cancellations</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          If you need to cancel or reschedule a regular lesson, please give at
          least 6 hours’ notice where reasonably possible. Unexpected
          emergencies are understood and handled case-by-case. Rescheduling a
          lesson is not guaranteed and depends on tutor and schedule
          availability.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran may offer a make-up lesson for a genuine absence where
          reasonable notice is given, subject to tutor and schedule
          availability. We are not able to guarantee that every missed lesson
          can be replaced.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Fees relating to lessons already provided are not refundable. Where
          SoulWithQuran is unable to provide paid lessons within an already
          paid teaching period, the unused portion may be rescheduled,
          credited toward a future period, or refunded, as appropriate to the
          circumstances.
        </p>
      </section>

      <section id="learner-and-guardian-responsibilities" aria-labelledby="learner-and-guardian-responsibilities-heading">
        <h2 id="learner-and-guardian-responsibilities-heading">Learner and parent/guardian responsibilities</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Learners, or a parent/guardian on a child’s behalf, are responsible
          for providing accurate enquiry and scheduling information, helping
          arrange a suitable environment for online lessons, giving
          reasonable notice of any needed changes as described above, and
          maintaining reasonable communication about attendance and
          availability. Where a learner is a child, the parent or guardian
          is responsible for appropriately managing or supervising
          enrollment, scheduling, payments, and communications on the
          child’s behalf.
        </p>
      </section>

      <section id="online-lesson-technology" aria-labelledby="online-lesson-technology-heading">
        <h2 id="online-lesson-technology-heading">Online lesson technology</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Lessons are delivered using an agreed online platform, such as
          Zoom, Google Meet, or WhatsApp. Learners are responsible for having
          a suitable internet connection, a compatible device, and access to
          the agreed platform. SoulWithQuran does not control the
          availability or performance of these third-party platforms.
        </p>
      </section>

      <section id="respectful-conduct" aria-labelledby="respectful-conduct-heading">
        <h2 id="respectful-conduct-heading">Respectful conduct</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We expect respectful, considerate communication between learners,
          parents/guardians, and SoulWithQuran during enquiries, trials, and
          lessons, consistent with the calm and personal learning environment
          SoulWithQuran aims to provide.
        </p>
      </section>

      <section id="educational-outcomes" aria-labelledby="educational-outcomes-heading">
        <h2 id="educational-outcomes-heading">Educational outcomes</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran provides patient, structured, tutor-led teaching, but
          does not guarantee a specific pace of progress, memorisation speed,
          fluency, Tajweed mastery within a fixed period, or any particular
          educational or religious outcome. Progress varies between learners
          depending on factors such as starting level, attendance, practice
          between lessons, consistency, and individual learning needs.
        </p>
      </section>

      <section id="website-content" aria-labelledby="website-content-heading">
        <h2 id="website-content-heading">Website content</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The text, design, and imagery on soulwithquran.com belong to
          SoulWithQuran or are used with appropriate permission. Please do
          not copy or reuse this content without permission.
        </p>
      </section>

      <section id="third-party-platforms-and-links" aria-labelledby="third-party-platforms-and-links-heading">
        <h2 id="third-party-platforms-and-links-heading">Third-party platforms and links</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Online lessons and enquiries may involve third-party services,
          including Zoom, Google Meet, WhatsApp, Cloudflare Turnstile, and
          Resend. Each operates under its own availability, terms, and
          privacy practices, which SoulWithQuran does not control. Links to
          any of these services take you away from soulwithquran.com.
        </p>
      </section>

      <section id="service-availability-and-changes" aria-labelledby="service-availability-and-changes-heading">
        <h2 id="service-availability-and-changes-heading">Service availability and changes</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We aim to keep the website and lesson scheduling available and
          reliable, but we do not guarantee uninterrupted availability. We
          may update the website, course offerings, and these Terms from time
          to time as the service develops.
        </p>
      </section>

      <section id="limitation-of-responsibility" aria-labelledby="limitation-of-responsibility-heading">
        <h2 id="limitation-of-responsibility-heading">Limitation of responsibility</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran provides its website and lessons with reasonable care,
          but is not responsible for issues arising from third-party
          platforms, your internet connection or device, or circumstances
          outside our reasonable control. Nothing in these Terms is intended
          to exclude any responsibility that cannot lawfully be excluded.
        </p>
      </section>

      <section id="privacy" aria-labelledby="privacy-heading">
        <h2 id="privacy-heading">Privacy</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Information submitted through the website is handled as described
          in the{" "}
          <Link href="/privacy" className="font-medium">
            Privacy Policy
          </Link>
          , which explains what we collect, how it is used, and which
          third-party services are involved.
        </p>
      </section>

      <section id="changes-to-these-terms" aria-labelledby="changes-to-these-terms-heading">
        <h2 id="changes-to-these-terms-heading">Changes to these Terms</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We may update these Terms as the website and service change. The
          “Last updated” date at the top of this page reflects the most
          recent revision. Continued use of the website after an update means
          you accept the revised Terms.
        </p>
      </section>

      <section id="contact-us" aria-labelledby="contact-us-heading">
        <h2 id="contact-us-heading">Contact us</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          For any question about these Terms, the most reliable way to reach
          us is through the{" "}
          <Link href="/contact" className="font-medium">
            Contact page
          </Link>
          . Please mention that your message relates to these Terms so it can
          be directed appropriately.
        </p>
      </section>
    </LegalArticleLayout>
  );
}
