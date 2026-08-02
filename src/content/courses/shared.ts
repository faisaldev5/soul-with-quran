import type { CourseDetail } from "@/content/courses/types";

export const standardLessonFormat = {
  eyebrow: "HOW LESSONS WORK",
  heading: "Personal guidance at a manageable pace.",
  facts: [
    {
      title: "One-to-one or small groups",
      description: "Carefully matched learning when group lessons are suitable.",
      icon: "users-round",
    },
    {
      title: "30–40 minute lessons",
      description: "Focused class time with room for explanation and practice.",
      icon: "clock",
    },
    {
      title: "Five classes each week",
      description: "A consistent rhythm for steady learning and revision.",
      icon: "calendar-check",
    },
    {
      title: "Patient pronunciation correction",
      description: "Gentle, specific feedback on every sound and word.",
      icon: "heart-handshake",
    },
    {
      title: "Regular practice and revision",
      description: "Revisit key sounds and skills as the learner progresses.",
      icon: "repeat",
    },
    {
      title: "Progress at the learner’s pace",
      description: "Lessons are adjusted to the learner’s current stage.",
      icon: "gauge",
    },
  ],
  supportingNote: "All courses follow the standard $80 monthly plan per student.",
} satisfies CourseDetail["lessonFormat"];
