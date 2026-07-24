export type Course = {
  name: string;
  category: string;
  number: string;
  description: string;
  href: string;
};

export const courses = [
  {
    name: "Qaida",
    category: "FOUNDATIONS",
    number: "01",
    description:
      "Build confidence with Arabic letters, sounds, and the foundations of Quran reading.",
    href: "/courses/qaida",
  },
  {
    name: "Nazra",
    category: "FLUENCY",
    number: "02",
    description:
      "Develop smoother, more accurate Quran reading through guided practice.",
    href: "/courses/nazra",
  },
  {
    name: "Tajweed",
    category: "PRECISION",
    number: "03",
    description:
      "Improve pronunciation and apply essential recitation rules with care.",
    href: "/courses/tajweed",
  },
  {
    name: "Hifz",
    category: "MEMORISATION",
    number: "04",
    description:
      "Follow a structured memorisation and revision approach at a manageable pace.",
    href: "/courses/hifz",
  },
  {
    name: "Islamic Studies",
    category: "UNDERSTANDING",
    number: "05",
    description:
      "Learn essential Islamic knowledge and everyday values in an age-appropriate way.",
    href: "/courses/islamic-studies",
  },
] as const satisfies readonly Course[];
