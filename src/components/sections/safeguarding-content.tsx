import Link from "next/link";

import { LegalArticleLayout, type LegalTocSection } from "@/components/legal/legal-article-layout";

const safeguardingSections: readonly LegalTocSection[] = [
  { id: "our-commitment", title: "Our safeguarding commitment" },
  { id: "who-this-is-for", title: "Who this policy is for" },
  { id: "parent-and-guardian-involvement", title: "Parent and guardian involvement" },
  { id: "online-lesson-environment", title: "Online lesson environment" },
  { id: "one-to-one-and-small-group-lessons", title: "One-to-one and small-group lessons" },
  { id: "communication-and-boundaries", title: "Communication and appropriate boundaries" },
  { id: "privacy-and-learner-information", title: "Privacy and learner information" },
  { id: "respectful-conduct", title: "Respectful conduct" },
  { id: "third-party-lesson-platforms", title: "Third-party lesson platforms" },
  { id: "raising-a-concern", title: "Raising a concern" },
  { id: "immediate-safety-concerns", title: "Immediate safety concerns" },
  { id: "changes-to-this-policy", title: "Changes to this Safeguarding Policy" },
  { id: "contact-us", title: "Contact us" },
];

export function SafeguardingContent() {
  return (
    <LegalArticleLayout ariaLabel="Safeguarding Policy details" sections={safeguardingSections}>
      <section id="our-commitment" aria-labelledby="our-commitment-heading">
        <h2 id="our-commitment-heading">Our safeguarding commitment</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran teaches children as well as adults, and we take that
          responsibility seriously. Our aim is to provide a calm, respectful,
          and appropriate online learning environment for every learner. This
          page explains, in plain language, what learners and parents or
          guardians can expect, and how to raise a concern if something does
          not feel right.
        </p>
      </section>

      <section id="who-this-is-for" aria-labelledby="who-this-is-for-heading">
        <h2 id="who-this-is-for-heading">Who this policy is for</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          This policy applies to anyone using SoulWithQuran’s online lessons —
          children and adults — and to the parents and guardians of younger
          learners. It should be read alongside our{" "}
          <Link href="/terms" className="font-medium">
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="font-medium">
            Privacy Policy
          </Link>
          , which cover the wider service and information-handling terms.
        </p>
      </section>

      <section id="parent-and-guardian-involvement" aria-labelledby="parent-and-guardian-involvement-heading">
        <h2 id="parent-and-guardian-involvement-heading">Parent and guardian involvement</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Where a learner is a child, a parent or guardian is expected to
          appropriately manage or supervise enrollment, scheduling, payments,
          and communications on the child’s behalf, consistent with our{" "}
          <Link href="/terms" className="font-medium">
            Terms &amp; Conditions
          </Link>
          . There is no fixed minimum learner age published on the website;
          suitability is discussed individually as part of arranging a trial.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We encourage parents and guardians to stay involved in a child’s
          online learning — for example, by helping the learner access the
          online lesson where needed, and, particularly for younger learners,
          remaining reasonably available and reachable during the lesson. A
          parent or guardian is not required to sit beside the child
          throughout every lesson; what matters is that they remain
          reasonably reachable and involved in the wider learning
          arrangement.
        </p>
      </section>

      <section id="online-lesson-environment" aria-labelledby="online-lesson-environment-heading">
        <h2 id="online-lesson-environment-heading">Online lesson environment</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Lessons take place through an agreed online platform. Learners
          should join from an appropriate, comfortable space, and parents or
          guardians should help younger learners get set up and connected
          where needed. Cameras and microphones should be used as needed for
          teaching and learning, in a way that is comfortable for the
          learner and family.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Please do not share personal or private information that is not
          relevant to the lesson, and please avoid requesting it. Only the
          information reasonably needed to arrange and deliver lessons should
          be shared — see{" "}
          <Link href="/privacy" className="font-medium">
            Privacy and learner information
          </Link>{" "}
          below.
        </p>
      </section>

      <section id="one-to-one-and-small-group-lessons" aria-labelledby="one-to-one-and-small-group-lessons-heading">
        <h2 id="one-to-one-and-small-group-lessons-heading">One-to-one and small-group lessons</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran offers one-to-one guidance as its primary teaching
          model, with carefully matched small groups offered where suitable.
          One-to-one lessons take place directly between the tutor and the
          learner over the agreed online platform. We encourage parents and
          guardians of younger learners to remain reasonably available and
          reachable during lesson times, and to check in with the learner
          about how lessons are going.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Where lessons take place in a small group, the same expectations of
          respectful conduct, privacy, and appropriate communication apply to
          every learner in that group.
        </p>
      </section>

      <section id="communication-and-boundaries" aria-labelledby="communication-and-boundaries-heading">
        <h2 id="communication-and-boundaries-heading">Communication and appropriate boundaries</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          During an agreed lesson, normal direct tutor-to-learner teaching
          interaction is expected and is a routine part of one-to-one and
          small-group tuition.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Outside scheduled lessons, administrative communication — such as
          scheduling, lesson links, payment, cancellations, and changes —
          should be handled through the parent/guardian wherever reasonably
          possible, using the contact details provided during enrollment.
          Unnecessary private one-to-one messaging with a child learner
          outside of lessons should be avoided.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Communication with SoulWithQuran should stay focused on the
          learning relationship. Please do not share lesson access details
          with anyone not involved in the lesson.
        </p>
      </section>

      <section id="privacy-and-learner-information" aria-labelledby="privacy-and-learner-information-heading">
        <h2 id="privacy-and-learner-information-heading">Privacy and learner information</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          When arranging a trial or lessons, the information submitted may
          include a learner’s name, age group, course, current learning
          level, and learning goals or preferences. Please share only what is
          reasonably needed to arrange and deliver lessons. Full detail on
          what is collected and how it is used is in our{" "}
          <Link href="/privacy" className="font-medium">
            Privacy Policy
          </Link>
          .
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran’s Courses page mentions recorded lesson recaps as an
          additional service “when available”. Live lessons are not routinely
          recorded; a tutor may separately provide a recorded recap when
          available, and a recap created by the tutor to summarise the lesson
          content does not need to feature the learner. Where a recording
          would contain the identifiable voice, image, video, or personal
          information of a child learner, parent/guardian knowledge and
          permission will be obtained first.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Screenshots containing an identifiable child learner will not be
          taken or kept unless there is a genuine teaching or administrative
          reason and the parent/guardian has agreed.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran will not publicly use an identifiable learner’s
          name, photograph, video, lesson recording, screenshot, or
          identifiable learning content for testimonials, social media,
          advertising, or other promotional material without explicit
          permission. For a child learner, that permission must come from the
          parent or guardian.
        </p>
      </section>

      <section id="respectful-conduct" aria-labelledby="respectful-conduct-heading">
        <h2 id="respectful-conduct-heading">Respectful conduct</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We expect respectful, teaching-focused conduct from everyone
          involved in a SoulWithQuran lesson. This means:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-7 text-text-secondary">
          <li>respectful, age-appropriate language during lessons and communication;</li>
          <li>no harassment, bullying, intimidation, or inappropriate conduct toward a learner, tutor, or family member;</li>
          <li>no requests for private or personal information that is not relevant to learning; and</li>
          <li>not sharing another learner’s personal information or lesson access details with anyone else.</li>
        </ul>
      </section>

      <section id="third-party-lesson-platforms" aria-labelledby="third-party-lesson-platforms-heading">
        <h2 id="third-party-lesson-platforms-heading">Third-party lesson platforms</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Lessons and communication may take place through third-party
          platforms such as Zoom, Google Meet, or WhatsApp. These are
          independent services with their own privacy practices, terms, and
          security controls, which SoulWithQuran does not control. Please
          review the relevant platform’s own settings and practices if you
          have concerns about a specific platform.
        </p>
      </section>

      <section id="raising-a-concern" aria-labelledby="raising-a-concern-heading">
        <h2 id="raising-a-concern-heading">Raising a concern</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          If you have a concern about conduct, communication, or a learner’s
          wellbeing in connection with SoulWithQuran lessons, please contact
          us as soon as reasonably possible through the{" "}
          <Link href="/contact" className="font-medium">
            Contact page
          </Link>
          . Please share as much relevant detail as you comfortably can so
          the concern can be understood and looked into.
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Safeguarding concerns will be reviewed as soon as reasonably
          possible and handled according to the nature and circumstances of
          the concern.
        </p>
      </section>

      <section id="immediate-safety-concerns" aria-labelledby="immediate-safety-concerns-heading">
        <h2 id="immediate-safety-concerns-heading">Immediate safety concerns</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          SoulWithQuran is an online tuition service and is not an emergency
          service. If you believe a child or anyone else is in immediate
          danger, please contact your local emergency services or the
          appropriate child-protection authority in your country directly,
          rather than relying on SoulWithQuran to respond urgently.
        </p>
      </section>

      <section id="changes-to-this-policy" aria-labelledby="changes-to-this-policy-heading">
        <h2 id="changes-to-this-policy-heading">Changes to this Safeguarding Policy</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          We may update this policy as our practices develop. The “Last
          updated” date at the top of this page reflects the most recent
          revision.
        </p>
      </section>

      <section id="contact-us" aria-labelledby="contact-us-heading">
        <h2 id="contact-us-heading">Contact us</h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          For any question about this Safeguarding Policy, or to raise a
          concern, the most reliable way to reach us is through the{" "}
          <Link href="/contact" className="font-medium">
            Contact page
          </Link>
          . Please mention that your message relates to safeguarding so it
          can be directed appropriately.
        </p>
      </section>
    </LegalArticleLayout>
  );
}
