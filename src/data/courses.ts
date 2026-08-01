export type Course = {
  name: string;
  category: string;
  number: string;
  anchor: string;
  description: string;
  detailDescription: string;
  bestSuitedFor: string;
  learningFocus: readonly string[];
  href: string;
};

export const courses = [
  {
    name: "Qaida",
    category: "FOUNDATIONS",
    number: "01",
    anchor: "qaida",
    description:
      "Build confidence with Arabic letters, sounds, and the foundations of Quran reading.",
    detailDescription:
      "A structured starting point for learners building the foundations of Quran reading.",
    bestSuitedFor:
      "Beginners learning Arabic letters, sounds, joining rules, and early reading skills.",
    learningFocus: [
      "Recognising Arabic letters and forms",
      "Correct pronunciation and basic sounds",
      "Building confidence before Quran reading",
    ],
    href: "/courses/qaida",
  },
  {
    name: "Nazra",
    category: "FLUENCY",
    number: "02",
    anchor: "nazra",
    description:
      "Develop smoother, more accurate Quran reading through guided practice.",
    detailDescription:
      "Guided Quran reading lessons designed to improve fluency, accuracy, and confidence.",
    bestSuitedFor:
      "Learners who know the basic letters and want to read the Quran more smoothly and correctly.",
    learningFocus: [
      "Guided Quran reading",
      "Fluency and accuracy",
      "Regular correction and practice",
    ],
    href: "/courses/nazra",
  },
  {
    name: "Tajweed",
    category: "PRECISION",
    number: "03",
    anchor: "tajweed",
    description:
      "Improve pronunciation and apply essential recitation rules with care.",
    detailDescription:
      "Focused guidance for learners who want to improve pronunciation and apply Tajweed rules more carefully.",
    bestSuitedFor:
      "Learners who can read the Quran and want clearer, more accurate recitation.",
    learningFocus: [
      "Core Tajweed principles",
      "Makharij and pronunciation",
      "Guided recitation correction",
    ],
    href: "/courses/tajweed",
  },
  {
    name: "Hifz",
    category: "MEMORISATION",
    number: "04",
    anchor: "hifz",
    description:
      "Follow a structured memorisation and revision approach at a manageable pace.",
    detailDescription:
      "A structured memorisation journey supported by regular revision, correction, and consistent guidance.",
    bestSuitedFor:
      "Learners beginning or continuing Quran memorisation at a manageable pace.",
    learningFocus: [
      "Structured memorisation",
      "Planned revision",
      "Progress suited to the learner's pace",
    ],
    href: "/courses/hifz",
  },
  {
    name: "Islamic Studies",
    category: "UNDERSTANDING",
    number: "05",
    anchor: "islamic-studies",
    description:
      "Learn essential Islamic knowledge and everyday values in an age-appropriate way.",
    detailDescription:
      "Clear, age-appropriate learning that helps students understand essential Islamic knowledge and daily practice.",
    bestSuitedFor:
      "Children and adults building practical Islamic understanding alongside Quran learning.",
    learningFocus: [
      "Essential Islamic knowledge",
      "Manners and everyday practice",
      "Clear, age-appropriate explanations",
    ],
    href: "/courses/islamic-studies",
  },
] as const satisfies readonly Course[];
