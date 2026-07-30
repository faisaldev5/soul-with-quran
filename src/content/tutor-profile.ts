export type TutorProfile = {
  image: string;
  imageAlt: string;
  role: string;
  bio: string;
  specialties: readonly string[];
  teachingStyle: string;
  lessonFormat: string;
};

export const tutorProfile: TutorProfile = {
  image: "/images/tutor/tutor.webp",
  imageAlt: "Portrait used for the SoulWithQuran tutor introduction",
  role: "Quran tutor",
  bio: "SoulWithQuran is a tutor-led Quran learning service built around patient teaching, personal guidance, and a clear learning routine. Lessons are designed for children and adults, with one-to-one support as the primary model and carefully matched small groups where appropriate. The approach keeps explanations clear, practice consistent, and the pace manageable, so each learner can begin from their current stage and work towards clear learning goals with care. It is a calm, structured way to keep learning connected to each learner's needs.",
  specialties: ["Qaida", "Nazra", "Tajweed", "Hifz", "Islamic Studies"],
  teachingStyle: "Patient, structured, and personal",
  lessonFormat: "One-to-one and carefully matched small groups",
};
