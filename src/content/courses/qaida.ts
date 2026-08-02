import type { CourseDetail } from "@/content/courses/types";
import { standardLessonFormat } from "@/content/courses/shared";

export const qaidaCourse = {
  slug: "qaida",
  seo: {
    title: "Online Qaida Course for Children and Adults | SoulWithQuran",
    description:
      "Build strong Quran-reading foundations through patient online Qaida lessons covering Arabic letters, pronunciation, joining rules, and early reading skills.",
    canonical: "/courses/qaida",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Qaida" },
  ],
  visual: {
    accent: "sage",
    heroImagePosition: "object-[58%_center]",
    featuredLearningFocus: "Preparation for Quran reading",
  },
  hero: {
    eyebrow: "ONLINE QAIDA COURSE",
    heading: "Build a strong foundation for Quran reading.",
    description:
      "Patient, step-by-step online Qaida lessons covering Arabic letters, sounds, pronunciation, joining rules, and early reading skills for children and adults.",
    supportingFact:
      "Suitable for complete beginners, children, and adults rebuilding their reading foundations.",
    image: "/images/courses/qaida-course-hero.jpg",
    imageAlt:
      "A child learning Quran reading with a tutor online while an adult guides the lesson",
  },
  audience: {
    eyebrow: "WHO QAIDA IS FOR",
    heading: "A patient starting point for new learners.",
    description:
      "Qaida is designed for learners who need a clear introduction to Arabic letters, sounds, and early reading skills before beginning regular Quran reading.",
    items: [
      {
        title: "Complete beginners",
        description:
          "Learners starting without previous Arabic-reading experience.",
        icon: "book-open",
      },
      {
        title: "Children learning Arabic letters",
        description:
          "Young learners developing recognition, sounds, and basic joining skills.",
        icon: "baby",
      },
      {
        title: "Adults beginning Quran reading",
        description:
          "Adults who want to start from the foundations in a comfortable environment.",
        icon: "user-round",
      },
      {
        title: "Learners rebuilding weak foundations",
        description:
          "Learners who recognise some letters but need greater accuracy and confidence.",
        icon: "repeat",
      },
    ],
  },
  learningFocus: {
    eyebrow: "WHAT YOU WILL LEARN",
    heading: "Strong foundations, built step by step.",
    description:
      "Lessons focus on the core reading skills learners need before progressing to guided Quran reading.",
    items: [
      {
        title: "Arabic letter recognition",
        description:
          "Identify Arabic letters in their individual and connected forms.",
        icon: "book-open",
      },
      {
        title: "Letter sounds and pronunciation",
        description:
          "Practise basic sounds with patient correction and clear explanations.",
        icon: "volume",
      },
      {
        title: "Short vowels and reading signs",
        description:
          "Understand common marks used to guide accurate reading.",
        icon: "pen-line",
      },
      {
        title: "Joining letters and forming words",
        description:
          "Learn how letters connect and change within simple words.",
        icon: "link",
      },
      {
        title: "Gradual word and phrase reading",
        description:
          "Move from individual sounds to guided reading practice.",
        icon: "book-open-check",
      },
      {
        title: "Preparation for Quran reading",
        description:
          "Develop the foundations needed before progressing to Nazra.",
        icon: "list-checks",
        featured: true,
      },
    ],
  },
  lessonFormat: standardLessonFormat,
  journey: {
    eyebrow: "THE QAIDA LEARNING JOURNEY",
    heading: "Progress through clear, manageable stages.",
    stages: [
      {
        number: "01",
        title: "Starting assessment",
        description:
          "Understand the learner’s current recognition, pronunciation, and reading level.",
      },
      {
        number: "02",
        title: "Letter foundations",
        description: "Learn Arabic letters, shapes, and core sounds.",
      },
      {
        number: "03",
        title: "Joining and reading rules",
        description:
          "Practise connected letters, vowels, and basic reading signs.",
      },
      {
        number: "04",
        title: "Guided reading practice",
        description:
          "Build confidence through words, phrases, and repeated correction.",
      },
      {
        number: "05",
        title: "Ready for the next stage",
        description:
          "Progress toward Nazra when the learner has developed suitable foundations.",
      },
    ],
    supportingNote:
      "Every learner progresses differently. The tutor adjusts lessons and revision according to the learner’s needs.",
  },
  tutorPreview: {
    eyebrow: "PATIENT, PERSONAL GUIDANCE",
    heading: "Learn with clear explanations and steady support.",
    description:
      "Qaida lessons are taught step by step, with patient correction and attention to the learner’s pace. The aim is to build strong foundations without making the learner feel rushed or overwhelmed.",
    principles: [
      {
        title: "Clear explanations",
        description: "Understand each new letter, sound, and rule.",
        icon: "list-checks",
      },
      {
        title: "Patient correction",
        description: "Receive calm guidance when a sound needs more practice.",
        icon: "heart-handshake",
      },
      {
        title: "Consistent practice",
        description: "Build steady habits through regular revision.",
        icon: "repeat",
      },
    ],
    linkLabel: "Meet your Quran tutor",
    linkHref: "/about#tutor",
  },
  faq: {
    eyebrow: "QAIDA COURSE QUESTIONS",
    heading: "Common questions about learning Qaida.",
    items: [
      {
        question: "Is Qaida suitable for complete beginners?",
        answer:
          "Yes. Qaida is designed to introduce Arabic letters, sounds, joining rules, and early reading skills step by step.",
      },
      {
        question: "Can adults join the Qaida course?",
        answer:
          "Yes. Adults can begin from the foundations or strengthen areas they previously found difficult.",
      },
      {
        question: "How is the learner’s starting level determined?",
        answer:
          "The free trial helps the tutor understand the learner’s current recognition, pronunciation, reading experience, and goals before recommending a suitable starting point.",
      },
      {
        question: "How long does it take to complete Qaida?",
        answer:
          "There is no fixed completion time. Progress depends on the learner’s current level, consistency, practice, age, and individual pace.",
      },
      {
        question: "Are lessons one-to-one or in groups?",
        answer:
          "Lessons may be one-to-one or offered in carefully matched small groups when learners are at a similar stage.",
      },
      {
        question: "What happens after completing Qaida?",
        answer:
          "When the learner has developed suitable foundations, the tutor may recommend progressing to guided Quran reading through Nazra.",
      },
    ],
  },
  relatedCourses: {
    eyebrow: "CONTINUE YOUR LEARNING PATH",
    heading: "Explore related Quran courses.",
    items: [
      {
        name: "Nazra",
        description:
          "Develop fluency and confidence through guided Quran reading.",
        href: "/courses/nazra",
      },
      {
        name: "Tajweed",
        description:
          "Improve pronunciation and apply recitation rules more carefully.",
        href: "/courses/tajweed",
      },
      {
        name: "Islamic Studies",
        description:
          "Build practical Islamic understanding alongside Quran learning.",
        href: "/courses/islamic-studies",
      },
    ],
  },
  finalCta: {
    heading: "Begin your Qaida learning journey.",
    description:
      "Book a free trial so we can understand the learner’s current stage and recommend the right starting point.",
  },
} satisfies CourseDetail;
