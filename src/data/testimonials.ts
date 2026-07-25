export type TestimonialRelationship =
  | "Student"
  | "Adult learner"
  | "Parent"
  | "Mother"
  | "Father";

export type TestimonialCourse =
  | "Qaida"
  | "Nazra"
  | "Tajweed"
  | "Hifz"
  | "Islamic Studies";

export type Testimonial = {
  id: string;
  displayName: string;
  relationship: TestimonialRelationship;
  location: string;
  course: TestimonialCourse;
  rating: number;
  quote: string;
  verified: boolean;
  placeholder: boolean;
};

// Replace all placeholder testimonials with approved feedback from genuine learners or parents before production activation.
export const verifiedTestimonials: readonly Testimonial[] = [];

export const developmentPreviewTestimonials: readonly Testimonial[] = [
  {
    id: "placeholder-sarah-m",
    displayName: "Sarah M.",
    relationship: "Parent",
    location: "London, UK",
    course: "Qaida",
    rating: 5,
    quote:
      "My daughter feels much more comfortable reading now. The tutor explains each sound patiently and never makes her feel rushed.",
    verified: false,
    placeholder: true,
  },
  {
    id: "placeholder-ahmed-r",
    displayName: "Ahmed R.",
    relationship: "Adult learner",
    location: "Toronto, Canada",
    course: "Tajweed",
    rating: 4.9,
    quote:
      "I had studied Tajweed before, but these lessons are much clearer. The corrections are respectful, practical, and easy to remember.",
    verified: false,
    placeholder: true,
  },
  {
    id: "placeholder-fatimah-k",
    displayName: "Fatimah K.",
    relationship: "Mother",
    location: "Dubai, UAE",
    course: "Nazra",
    rating: 5,
    quote:
      "The lessons are calm and well organised. My son reads with more confidence now and genuinely looks forward to his class.",
    verified: false,
    placeholder: true,
  },
  {
    id: "placeholder-yusuf-h",
    displayName: "Yusuf H.",
    relationship: "Father",
    location: "Birmingham, UK",
    course: "Hifz",
    rating: 4.9,
    quote:
      "The tutor keeps revision structured without putting pressure on my son. That balance has made Hifz feel much more manageable.",
    verified: false,
    placeholder: true,
  },
  {
    id: "placeholder-maryam-a",
    displayName: "Maryam A.",
    relationship: "Student",
    location: "Sydney, Australia",
    course: "Islamic Studies",
    rating: 5,
    quote:
      "Every topic is explained in simple English. The lessons feel practical, clear, and easy to connect with everyday life.",
    verified: false,
    placeholder: true,
  },
  {
    id: "placeholder-ibrahim-s",
    displayName: "Ibrahim S.",
    relationship: "Adult learner",
    location: "New York, USA",
    course: "Qaida",
    rating: 4.9,
    quote:
      "Starting as an adult felt intimidating, but the one-to-one guidance made it comfortable. I can learn at my pace and ask questions freely.",
    verified: false,
    placeholder: true,
  },
  {
    id: "placeholder-sana-f",
    displayName: "Sana F.",
    relationship: "Mother",
    location: "Manchester, UK",
    course: "Tajweed",
    rating: 5,
    quote:
      "The tutor notices small pronunciation mistakes and explains them gently. My daughter is becoming more careful and confident in recitation.",
    verified: false,
    placeholder: true,
  },
  {
    id: "placeholder-hamza-n",
    displayName: "Hamza N.",
    relationship: "Student",
    location: "Abu Dhabi, UAE",
    course: "Nazra",
    rating: 4.9,
    quote:
      "The classes are consistent and focused. I always know what to practise next, and the feedback after each lesson is very helpful.",
    verified: false,
    placeholder: true,
  },
] as const satisfies readonly Testimonial[];
