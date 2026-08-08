import { standardLessonFormat } from "@/content/courses/shared";
import type { CourseDetail } from "@/content/courses/types";

export const nazraCourse = {
  slug: "nazra",
  seo: {
    title: "Online Nazra Course for Children and Adults | SoulWithQuran",
    description:
      "Develop Quran-reading fluency and confidence through patient online Nazra lessons with guided practice, correction, and consistent support.",
    canonical: "/courses/nazra",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Nazra" },
  ],
  visual: {
    accent: "soft-blue",
    heroImagePosition: "object-[54%_center]",
    featuredLearningFocus: "Preparation for deeper Tajweed study",
  },
  hero: {
    eyebrow: "ONLINE NAZRA COURSE",
    heading: "Develop confidence and fluency in Quran reading.",
    description:
      "Guided online Nazra lessons helping children and adults read the Quran with greater accuracy, confidence, and consistency.",
    supportingFact:
      "Suitable for learners who recognise Arabic letters and are ready for guided Quran reading.",
    image: "/images/courses/nazra-hero.jpg",
    imageAlt:
      "A learner reading the Quran during an online Nazra lesson with a tutor",
  },
  audience: {
    eyebrow: "WHO NAZRA IS FOR",
    heading: "A steady path toward confident Quran reading.",
    description:
      "Nazra supports learners who are ready to move from Arabic-letter foundations into regular, guided Quran reading.",
    items: [
      {
        title: "Learners who have completed Qaida",
        description:
          "Learners ready to apply their letter and sound foundations to Quran reading.",
        icon: "book-open-check",
      },
      {
        title: "Children beginning regular Quran reading",
        description:
          "Children building a consistent reading routine with patient guidance.",
        icon: "baby",
      },
      {
        title: "Adults improving reading fluency",
        description:
          "Adults who want more confidence, accuracy, and consistency when reading.",
        icon: "user-round",
      },
      {
        title: "Learners needing consistent correction and practice",
        description:
          "Learners who benefit from regular reading practice and clear feedback.",
        icon: "repeat",
      },
    ],
  },
  learningFocus: {
    eyebrow: "WHAT YOU WILL PRACTISE",
    heading: "Read with greater fluency and care.",
    description:
      "Lessons focus on guided Quran reading, practical correction, and the consistency needed for continued progress.",
    items: [
      {
        title: "Guided Quran reading",
        description:
          "Read selected verses with a tutor’s patient guidance and support.",
        icon: "book-open",
      },
      {
        title: "Reading fluency",
        description:
          "Build a smoother reading rhythm through regular supported practice.",
        icon: "repeat",
      },
      {
        title: "Pronunciation and accuracy",
        description:
          "Receive clear correction to help each word become more accurate.",
        icon: "volume",
      },
      {
        title: "Recognition of reading signs",
        description:
          "Become more familiar with the signs that guide Quran reading.",
        icon: "pen-line",
      },
      {
        title: "Consistent correction",
        description:
          "Revisit areas that need practice during regular lessons.",
        icon: "heart-handshake",
      },
      {
        title: "Preparation for deeper Tajweed study",
        description:
          "Build reading confidence before moving into more detailed recitation guidance.",
        icon: "book-open-check",
        featured: true,
      },
    ],
  },
  lessonFormat: standardLessonFormat,
  journey: {
    eyebrow: "THE NAZRA LEARNING JOURNEY",
    heading: "Build a consistent Quran reading habit.",
    stages: [
      {
        number: "01",
        title: "Starting reading assessment",
        description:
          "Understand the learner’s current reading experience, accuracy, and goals.",
      },
      {
        number: "02",
        title: "Guided verse reading",
        description:
          "Read verses with patient support and clear explanations.",
      },
      {
        number: "03",
        title: "Accuracy and correction",
        description:
          "Practise sounds and words that need more careful attention.",
      },
      {
        number: "04",
        title: "Improved fluency and consistency",
        description:
          "Develop a steadier reading rhythm through regular practice.",
      },
      {
        number: "05",
        title: "Ready for more detailed Tajweed guidance",
        description:
          "Continue to Tajweed when the learner is ready for deeper recitation study.",
      },
    ],
    supportingNote:
      "Every learner progresses differently. Lessons and practice are adjusted according to the learner’s stage and pace.",
  },
  tutorPreview: {
    eyebrow: "PATIENT, PERSONAL GUIDANCE",
    heading: "Read with calm support and clear correction.",
    description:
      "Nazra lessons give learners time to read, ask questions, and practise difficult sounds with patient guidance throughout the lesson.",
    principles: [
      {
        title: "Clear reading guidance",
        description: "Follow each verse with calm, step-by-step support.",
        icon: "book-open-check",
      },
      {
        title: "Patient correction",
        description: "Receive specific feedback when a sound or word needs practice.",
        icon: "heart-handshake",
      },
      {
        title: "Regular practice",
        description: "Build confidence through a consistent reading routine.",
        icon: "repeat",
      },
    ],
    linkLabel: "Meet your Quran tutor",
    linkHref: "/about#tutor",
  },
  faq: {
    eyebrow: "NAZRA COURSE QUESTIONS",
    heading: "Common questions about learning Nazra.",
    items: [
      {
        question: "Does a learner need to complete Qaida first?",
        answer:
          "Learners should recognise Arabic letters and sounds before beginning Nazra. The tutor can recommend whether further Qaida practice is needed.",
      },
      {
        question: "Is Nazra suitable for adults?",
        answer:
          "Yes. Adults can study Nazra with lessons adjusted to their current reading level, goals, and pace.",
      },
      {
        question: "How is the starting level assessed?",
        answer:
          "The free trial gives the tutor an opportunity to hear the learner read and understand their current stage and goals.",
      },
      {
        question: "How is reading corrected during lessons?",
        answer:
          "The tutor listens during guided reading and gives clear, patient correction on pronunciation, accuracy, and reading flow.",
      },
      {
        question: "Is there a fixed completion time?",
        answer:
          "No. Progress depends on the learner’s starting point, consistency, practice, and individual pace.",
      },
      {
        question: "What course may follow Nazra?",
        answer:
          "When the learner is ready, the tutor may recommend more detailed Tajweed guidance to support careful recitation.",
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
        name: "Tajweed",
        description:
          "Improve pronunciation and apply essential recitation rules with care.",
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
    heading: "Begin your Nazra learning journey.",
    description:
      "Request a free trial so we can understand the learner’s current reading stage and recommend the right next step.",
  },
} satisfies CourseDetail;
