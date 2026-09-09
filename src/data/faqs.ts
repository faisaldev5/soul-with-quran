export type Faq = {
  question: string;
  answer: string;
};

export const faqs = [
  {
    question: "Who can join SoulWithQuran classes?",
    answer:
      "SoulWithQuran supports children and adults at different stages of Quran learning, from first steps in reading to Tajweed, memorisation, and Islamic Studies.",
  },
  {
    question: "How long is each lesson?",
    answer: "Each lesson lasts approximately 30–40 minutes.",
  },
  {
    question: "How often are classes held?",
    answer:
      "Students attend five classes each week to support a steady and consistent learning routine.",
  },
  {
    question: "Are classes one-to-one or group-based?",
    answer:
      "Both options are available. Learners can receive one-to-one guidance or join a carefully matched small group with students at a similar stage.",
  },
  {
    question: "Which courses are available?",
    answer:
      "SoulWithQuran offers Qaida, Nazra, Tajweed, Hifz, and Islamic Studies.",
  },
  {
    question: "Is a free trial available?",
    answer:
      "Yes. You can request a free trial so we can understand the learner’s current stage, goals, and suitable learning path.",
  },
  {
    question: "Do you teach learners outside the UK?",
    answer:
      "Yes. Online classes are designed for learners in the UK, USA, Canada, Australia, UAE, and other suitable time zones.",
  },
] as const satisfies readonly Faq[];
