import { standardLessonFormat } from "@/content/courses/shared";
import type { CourseDetail } from "@/content/courses/types";

export const tajweedCourse = {
  slug: "tajweed",
  seo: {
    title: "Online Tajweed Course for Children and Adults | SoulWithQuran",
    description:
      "Improve Quran recitation through patient online Tajweed lessons focused on pronunciation, Makharij, recitation rules, and guided correction.",
    canonical: "/courses/tajweed",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Tajweed" },
  ],
  visual: {
    accent: "gold",
    heroImagePosition: "object-[54%_center]",
    featuredLearningFocus: "Applying rules during real Quran reading",
  },
  hero: {
    eyebrow: "ONLINE TAJWEED COURSE",
    heading: "Improve your Quran recitation with clear Tajweed guidance.",
    description:
      "Structured online Tajweed lessons helping learners strengthen pronunciation, understand essential rules, and recite with greater care and accuracy.",
    supportingFact:
      "Suitable for learners who can read the Quran and want to improve the quality of their recitation.",
    image: "/images/courses/tajweed-hero.jpg",
    imageAlt:
      "A learner studying Quran recitation during an online Tajweed lesson",
  },
  audience: {
    eyebrow: "WHO TAJWEED IS FOR",
    heading: "More careful recitation, built through practice.",
    description:
      "Tajweed supports learners who can read the Quran and want patient, practical guidance to improve pronunciation and recitation.",
    items: [
      {
        title: "Learners with basic Quran-reading ability",
        description:
          "Learners ready to study recitation rules through practical Quran reading.",
        icon: "book-open",
      },
      {
        title: "Children developing accurate recitation",
        description:
          "Children strengthening pronunciation with clear explanations and correction.",
        icon: "baby",
      },
      {
        title: "Adults improving pronunciation",
        description:
          "Adults who want to recite with greater care and confidence.",
        icon: "user-round",
      },
      {
        title: "Learners needing practical correction",
        description:
          "Learners who know some rules but want help applying them while reading.",
        icon: "heart-handshake",
      },
    ],
  },
  learningFocus: {
    eyebrow: "WHAT YOU WILL PRACTISE",
    heading: "Understand the rules and apply them carefully.",
    description:
      "Lessons connect essential Tajweed knowledge with guided recitation practice so learners can apply each rule more naturally.",
    items: [
      {
        title: "Makharij and correct articulation",
        description:
          "Practise where sounds are formed and how they should be articulated.",
        icon: "volume",
      },
      {
        title: "Essential Tajweed rules",
        description:
          "Learn core rules through clear, focused explanations.",
        icon: "book-marked",
      },
      {
        title: "Characteristics of Arabic letters",
        description:
          "Notice the qualities that affect careful Quran recitation.",
        icon: "pen-line",
      },
      {
        title: "Madd and common recitation patterns",
        description:
          "Practise common patterns that shape the pace and sound of recitation.",
        icon: "repeat",
      },
      {
        title: "Guided recitation correction",
        description:
          "Receive patient correction while reading selected Quran passages.",
        icon: "heart-handshake",
      },
      {
        title: "Applying rules during real Quran reading",
        description:
          "Bring the rules together during practical, guided recitation.",
        icon: "book-open-check",
        featured: true,
      },
    ],
  },
  lessonFormat: standardLessonFormat,
  journey: {
    eyebrow: "THE TAJWEED LEARNING JOURNEY",
    heading: "Move from understanding to careful recitation.",
    stages: [
      {
        number: "01",
        title: "Recitation assessment",
        description:
          "Understand the learner’s current reading, pronunciation, and goals.",
      },
      {
        number: "02",
        title: "Pronunciation foundations",
        description:
          "Strengthen articulation and the sounds that need focused practice.",
      },
      {
        number: "03",
        title: "Core Tajweed rules",
        description:
          "Study essential rules through concise and clear explanations.",
      },
      {
        number: "04",
        title: "Guided practical application",
        description:
          "Apply rules while reciting with patient correction.",
      },
      {
        number: "05",
        title: "More careful and consistent recitation",
        description:
          "Continue practising with attention to accuracy and consistency.",
      },
    ],
    supportingNote:
      "The tutor adjusts the pace and focus according to the learner’s current recitation and practice needs.",
  },
  tutorPreview: {
    eyebrow: "PATIENT, PERSONAL GUIDANCE",
    heading: "Understand Tajweed through calm, practical teaching.",
    description:
      "Tajweed lessons combine clear explanations with time to recite, listen, and practise. Learners receive specific correction without feeling rushed.",
    principles: [
      {
        title: "Clear explanations",
        description: "Understand why each recitation rule matters.",
        icon: "list-checks",
      },
      {
        title: "Practical correction",
        description: "Apply each rule while reading real Quran passages.",
        icon: "heart-handshake",
      },
      {
        title: "Steady practice",
        description: "Revisit sounds and rules that need more attention.",
        icon: "repeat",
      },
    ],
    linkLabel: "Meet your Quran tutor",
    linkHref: "/about#tutor",
  },
  faq: {
    eyebrow: "TAJWEED COURSE QUESTIONS",
    heading: "Common questions about learning Tajweed.",
    items: [
      {
        question: "Is Tajweed suitable for beginners?",
        answer:
          "Tajweed is most suitable for learners who can already read the Quran. The tutor can recommend whether Nazra or further reading practice should come first.",
      },
      {
        question: "Does the learner need to read Arabic first?",
        answer:
          "Yes. Learners need basic Quran-reading ability so lessons can focus on pronunciation, rules, and practical recitation.",
      },
      {
        question: "Can adults study Tajweed?",
        answer:
          "Yes. Adults can study Tajweed with lessons adjusted to their reading level, goals, and pace.",
      },
      {
        question: "Are rules taught practically or theoretically?",
        answer:
          "Lessons combine clear explanations with guided recitation so learners can practise applying the rules while reading.",
      },
      {
        question: "How is pronunciation corrected online?",
        answer:
          "The tutor listens during live recitation and gives specific, patient guidance on articulation and pronunciation.",
      },
      {
        question: "Is there a fixed completion time?",
        answer:
          "No. Progress depends on the learner’s current stage, consistency, practice, and individual pace.",
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
          "Develop smoother, more accurate Quran reading through guided practice.",
        href: "/courses/nazra",
      },
      {
        name: "Hifz",
        description:
          "Follow a structured memorisation and revision approach at a manageable pace.",
        href: "/courses/hifz",
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
    heading: "Begin your Tajweed learning journey.",
    description:
      "Book a free trial so we can understand the learner’s current recitation stage and recommend the right focus.",
  },
} satisfies CourseDetail;
