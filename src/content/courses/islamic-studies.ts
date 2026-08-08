import { standardLessonFormat } from "@/content/courses/shared";
import type { CourseDetail } from "@/content/courses/types";

export const islamicStudiesCourse = {
  slug: "islamic-studies",
  seo: {
    title: "Online Islamic Studies Course for Children and Adults | SoulWithQuran",
    description:
      "Build practical Islamic understanding through clear online Islamic Studies lessons for children and adults, taught with structure and personal guidance.",
    canonical: "/courses/islamic-studies",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Islamic Studies" },
  ],
  visual: {
    accent: "sage",
    heroImagePosition: "object-[54%_center]",
    featuredLearningFocus: "Applying learning in everyday life",
  },
  hero: {
    eyebrow: "ONLINE ISLAMIC STUDIES COURSE",
    heading: "Build practical Islamic understanding for everyday life.",
    description:
      "Clear, age-appropriate online Islamic Studies lessons helping children and adults understand essential knowledge, values, manners, and daily practice.",
    supportingFact:
      "Suitable for children and adults learning essential Islamic knowledge in clear, accessible English.",
    image: "/images/courses/islamic-studies-hero.jpg",
    imageAlt:
      "Learners studying Islamic knowledge together during an online lesson",
  },
  audience: {
    eyebrow: "WHO ISLAMIC STUDIES IS FOR",
    heading: "Clear learning for faith and everyday life.",
    description:
      "Islamic Studies lessons give children and adults a structured way to build essential knowledge and connect it with daily practice.",
    items: [
      {
        title: "Children beginning Islamic Studies",
        description:
          "Young learners exploring essential knowledge through clear explanations.",
        icon: "baby",
      },
      {
        title: "Young learners developing manners and values",
        description:
          "Age-appropriate guidance connecting learning with character and daily life.",
        icon: "heart-handshake",
      },
      {
        title: "Adults strengthening essential knowledge",
        description:
          "Adults revisiting important foundations in clear, accessible English.",
        icon: "user-round",
      },
      {
        title: "Families seeking structured religious learning",
        description:
          "A calm learning routine for essential knowledge, practice, and questions.",
        icon: "users-round",
      },
    ],
  },
  learningFocus: {
    eyebrow: "WHAT YOU WILL EXPLORE",
    heading: "Build knowledge that connects with daily practice.",
    description:
      "The course introduces essential topics in a clear and age-appropriate way, with room for questions and practical understanding.",
    items: [
      {
        title: "Core beliefs and essential knowledge",
        description:
          "Build a clear foundation for understanding important Islamic concepts.",
        icon: "book-open",
      },
      {
        title: "Worship and everyday practice",
        description:
          "Explore the knowledge that supports worship and daily routines.",
        icon: "list-checks",
      },
      {
        title: "Islamic manners and character",
        description:
          "Connect learning with respectful conduct and everyday choices.",
        icon: "heart-handshake",
      },
      {
        title: "Age-appropriate Seerah and stories",
        description:
          "Learn through suitable stories and examples that support understanding.",
        icon: "book-marked",
      },
      {
        title: "Daily duas and practical guidance",
        description:
          "Explore useful duas and guidance for everyday situations.",
        icon: "repeat",
      },
      {
        title: "Applying learning in everyday life",
        description:
          "Reflect on how knowledge can support the learner’s daily practice.",
        icon: "book-open-check",
        featured: true,
      },
    ],
  },
  lessonFormat: standardLessonFormat,
  journey: {
    eyebrow: "THE ISLAMIC STUDIES LEARNING JOURNEY",
    heading: "Learn essential knowledge at a clear, steady pace.",
    stages: [
      {
        number: "01",
        title: "Understand the learner’s current knowledge",
        description:
          "Begin with the learner’s questions, experience, age, and goals.",
      },
      {
        number: "02",
        title: "Build essential foundations",
        description:
          "Introduce key knowledge with clear, accessible explanations.",
      },
      {
        number: "03",
        title: "Explore worship and daily practice",
        description:
          "Connect learning with practical routines and everyday questions.",
      },
      {
        number: "04",
        title: "Develop manners and practical understanding",
        description:
          "Reflect on values, character, and how learning shapes daily life.",
      },
      {
        number: "05",
        title: "Continue through suitable age-appropriate topics",
        description:
          "Build on the learner’s foundations through topics suited to their stage.",
      },
    ],
    supportingNote:
      "Topics and explanations are adjusted according to the learner’s age, knowledge, questions, and pace.",
  },
  tutorPreview: {
    eyebrow: "PATIENT, PERSONAL GUIDANCE",
    heading: "Ask questions and build understanding with care.",
    description:
      "Islamic Studies lessons make space for clear explanations, respectful questions, and practical connections to everyday life.",
    principles: [
      {
        title: "Clear explanations",
        description: "Explore essential knowledge in accessible English.",
        icon: "book-open",
      },
      {
        title: "Age-appropriate teaching",
        description: "Adjust examples and topics to the learner’s stage.",
        icon: "users-round",
      },
      {
        title: "Practical understanding",
        description: "Connect learning with worship, manners, and daily life.",
        icon: "heart-handshake",
      },
    ],
    linkLabel: "Meet your Quran tutor",
    linkHref: "/about#tutor",
  },
  faq: {
    eyebrow: "ISLAMIC STUDIES COURSE QUESTIONS",
    heading: "Common questions about Islamic Studies.",
    items: [
      {
        question: "What topics are included?",
        answer:
          "Topics may include essential knowledge, worship and daily practice, manners and character, suitable stories, daily duas, and practical guidance.",
      },
      {
        question: "Is the course suitable for children?",
        answer:
          "Yes. Lessons can be adapted to a child’s age, current knowledge, questions, and pace.",
      },
      {
        question: "Can adults join?",
        answer:
          "Yes. Adults can study essential Islamic knowledge through clear, structured lessons in accessible English.",
      },
      {
        question: "Is content adapted to the learner’s age?",
        answer:
          "Yes. Topics, examples, and explanations are adjusted according to the learner’s age and current understanding.",
      },
      {
        question: "Is Islamic Studies taught alongside Quran courses?",
        answer:
          "It can be studied alongside a Quran course when that combination suits the learner’s goals and weekly routine.",
      },
      {
        question: "Which language is used during lessons?",
        answer:
          "Lessons use clear, accessible English so learners can understand the knowledge, ask questions, and connect it with daily life.",
      },
    ],
  },
  relatedCourses: {
    eyebrow: "CONTINUE YOUR LEARNING PATH",
    heading: "Explore related Quran courses.",
    items: [
      {
        name: "Qaida",
        description:
          "Build confidence with Arabic letters, sounds, and early reading foundations.",
        href: "/courses/qaida",
      },
      {
        name: "Nazra",
        description:
          "Develop smoother, more accurate Quran reading through guided practice.",
        href: "/courses/nazra",
      },
      {
        name: "Tajweed",
        description:
          "Improve pronunciation and apply essential recitation rules with care.",
        href: "/courses/tajweed",
      },
    ],
  },
  finalCta: {
    heading: "Begin your Islamic Studies learning journey.",
    description:
      "Request a free trial so we can understand the learner’s current knowledge and recommend a suitable starting point.",
  },
} satisfies CourseDetail;
