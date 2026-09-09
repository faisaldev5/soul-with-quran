export type LearningProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const learningProcessSteps = [
  {
    number: "01",
    title: "Request a free trial",
    description:
      "Choose the free-trial option and share the learner’s current needs and goals.",
  },
  {
    number: "02",
    title: "Find the right starting point",
    description:
      "We understand the learner’s present stage so lessons can begin at an appropriate level.",
  },
  {
    number: "03",
    title: "Begin live lessons",
    description:
      "Join patient, tutor-led online classes with clear guidance through each lesson.",
  },
  {
    number: "04",
    title: "Build a consistent routine",
    description:
      "Continue with regular lessons, revision, and guidance suited to the learner’s pace.",
  },
] as const satisfies readonly LearningProcessStep[];
