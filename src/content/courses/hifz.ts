import { standardLessonFormat } from "@/content/courses/shared";
import type { CourseDetail } from "@/content/courses/types";

export const hifzCourse = {
  slug: "hifz",
  seo: {
    title: "Online Hifz Course for Children and Adults | SoulWithQuran",
    description:
      "Memorise the Quran with structured online Hifz lessons, regular revision, patient correction, and guidance suited to each learner’s pace.",
    canonical: "/courses/hifz",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Hifz" },
  ],
  visual: {
    accent: "sage",
    heroImagePosition: "object-[48%_center]",
    featuredLearningFocus: "A plan suited to the learner’s capacity",
  },
  hero: {
    eyebrow: "ONLINE HIFZ COURSE",
    heading: "Memorise the Quran with structure, revision, and steady support.",
    description:
      "Personal online Hifz lessons combining manageable memorisation goals, regular revision, careful correction, and consistent guidance.",
    supportingFact:
      "Suitable for learners beginning memorisation or continuing an existing Hifz journey.",
    image: "/images/courses/hifz-hero.jpg",
    imageAlt:
      "A child memorising Quran with an online tutor and a Quran open beside a laptop",
  },
  audience: {
    eyebrow: "WHO HIFZ IS FOR",
    heading: "A structured memorisation path with room to grow.",
    description:
      "Hifz lessons give learners a manageable structure for memorisation, revision, correction, and steady practice.",
    items: [
      {
        title: "Learners beginning Quran memorisation",
        description:
          "Learners starting a memorisation routine with clear, manageable guidance.",
        icon: "book-open",
      },
      {
        title: "Children continuing an existing Hifz plan",
        description:
          "Children who need consistent support with new portions and revision.",
        icon: "baby",
      },
      {
        title: "Adults memorising at a manageable pace",
        description:
          "Adults building memorisation into their available time and routine.",
        icon: "user-round",
      },
      {
        title: "Learners needing stronger revision structure",
        description:
          "Learners who want a clearer rhythm for revisiting previous portions.",
        icon: "repeat",
      },
    ],
  },
  learningFocus: {
    eyebrow: "WHAT YOU WILL PRACTISE",
    heading: "Memorise steadily and revise with care.",
    description:
      "Lessons balance new memorisation with regular revision and patient correction so the learner can work at a sustainable pace.",
    items: [
      {
        title: "Manageable memorisation goals",
        description:
          "Set a practical amount of new memorisation for the learner’s current capacity.",
        icon: "gauge",
      },
      {
        title: "Correct recitation before memorisation",
        description:
          "Read new portions carefully before working to retain them.",
        icon: "volume",
      },
      {
        title: "Daily and weekly revision",
        description:
          "Use regular revision to revisit both recent and earlier portions.",
        icon: "calendar-check",
      },
      {
        title: "Retention of previous portions",
        description:
          "Keep earlier memorisation active through planned practice.",
        icon: "repeat",
      },
      {
        title: "Patient listening and correction",
        description:
          "Receive calm feedback while reciting memorised portions.",
        icon: "heart-handshake",
      },
      {
        title: "A plan suited to the learner’s capacity",
        description:
          "Adjust new work and revision according to the learner’s pace and needs.",
        icon: "list-checks",
        featured: true,
      },
    ],
  },
  lessonFormat: standardLessonFormat,
  journey: {
    eyebrow: "THE HIFZ LEARNING JOURNEY",
    heading: "Build memorisation through a steady routine.",
    stages: [
      {
        number: "01",
        title: "Memorisation and recitation assessment",
        description:
          "Understand the learner’s current recitation, memorisation, and revision experience.",
      },
      {
        number: "02",
        title: "Personal memorisation plan",
        description:
          "Set a manageable structure for new portions and regular revision.",
      },
      {
        number: "03",
        title: "New lesson preparation",
        description:
          "Prepare and recite new portions carefully with tutor guidance.",
      },
      {
        number: "04",
        title: "Regular revision and correction",
        description:
          "Revisit previous portions and correct areas that need more practice.",
      },
      {
        number: "05",
        title: "Long-term retention and steady progress",
        description:
          "Continue with a sustainable balance of new memorisation and revision.",
      },
    ],
    supportingNote:
      "Hifz progress varies from learner to learner. The pace and revision structure are adjusted as the learner’s needs change.",
  },
  tutorPreview: {
    eyebrow: "PATIENT, PERSONAL GUIDANCE",
    heading: "Memorise with structure and steady support.",
    description:
      "Hifz lessons provide a clear routine for new memorisation, listening, correction, and revision while respecting the learner’s pace.",
    principles: [
      {
        title: "Manageable planning",
        description: "Keep new memorisation suited to the learner’s capacity.",
        icon: "gauge",
      },
      {
        title: "Patient correction",
        description: "Receive careful listening and calm recitation guidance.",
        icon: "heart-handshake",
      },
      {
        title: "Regular revision",
        description: "Revisit previous portions as part of the learning routine.",
        icon: "repeat",
      },
    ],
    linkLabel: "Meet your Quran tutor",
    linkHref: "/about#tutor",
  },
  faq: {
    eyebrow: "HIFZ COURSE QUESTIONS",
    heading: "Common questions about learning Hifz.",
    items: [
      {
        question: "Is Hifz suitable for beginners?",
        answer:
          "Learners should have suitable Quran-reading foundations before beginning memorisation. The tutor can recommend the right starting course when needed.",
      },
      {
        question: "Must the learner read fluently first?",
        answer:
          "The learner needs a reliable reading foundation so new portions can be read correctly before memorisation begins.",
      },
      {
        question: "How much is memorised each lesson?",
        answer:
          "The amount depends on the learner’s current stage, capacity, practice, and available time. Lessons use manageable goals rather than a fixed amount for everyone.",
      },
      {
        question: "How is revision managed?",
        answer:
          "Revision is planned alongside new memorisation so learners regularly revisit previous portions and receive correction.",
      },
      {
        question: "Can adults join the Hifz course?",
        answer:
          "Yes. Adults can study Hifz with a structure adjusted to their goals, routine, and pace.",
      },
      {
        question: "How long does Hifz take?",
        answer:
          "There is no fixed completion time. The pace depends on the learner’s starting point, consistency, practice, revision, and individual capacity.",
      },
    ],
  },
  relatedCourses: {
    eyebrow: "CONTINUE YOUR LEARNING PATH",
    heading: "Explore related Quran courses.",
    items: [
      {
        name: "Tajweed",
        description:
          "Improve pronunciation and apply essential recitation rules with care.",
        href: "/courses/tajweed",
      },
      {
        name: "Nazra",
        description:
          "Develop smoother, more accurate Quran reading through guided practice.",
        href: "/courses/nazra",
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
    heading: "Begin your Hifz learning journey.",
    description:
      "Book a free trial so we can understand the learner’s current memorisation and revision stage.",
  },
} satisfies CourseDetail;
