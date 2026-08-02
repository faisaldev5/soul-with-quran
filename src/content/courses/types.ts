export type CourseAccent = "sage" | "navy" | "gold" | "soft-blue";

export type CourseIconName =
  | "baby"
  | "book-marked"
  | "book-open"
  | "book-open-check"
  | "calendar-check"
  | "clock"
  | "gauge"
  | "heart-handshake"
  | "link"
  | "list-checks"
  | "pen-line"
  | "repeat"
  | "user-round"
  | "users-round"
  | "volume";

export type CourseBreadcrumb = {
  label: string;
  href?: string;
};

export type CourseInfoItem = {
  title: string;
  description: string;
  icon: CourseIconName;
  featured?: boolean;
};

export type CourseFact = {
  title: string;
  description: string;
  icon: CourseIconName;
};

export type CourseJourneyStage = {
  number: string;
  title: string;
  description: string;
};

export type CourseFaq = {
  question: string;
  answer: string;
};

export type RelatedCourse = {
  name: string;
  description: string;
  href: string;
};

export type CourseDetail = {
  slug: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  breadcrumbs: readonly CourseBreadcrumb[];
  visual?: {
    accent?: CourseAccent;
    heroImagePosition?: string;
    featuredLearningFocus?: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    supportingFact: string;
    image: string;
    imageAlt: string;
  };
  audience: {
    eyebrow: string;
    heading: string;
    description: string;
    items: readonly CourseInfoItem[];
  };
  learningFocus: {
    eyebrow: string;
    heading: string;
    description: string;
    items: readonly CourseInfoItem[];
  };
  lessonFormat: {
    eyebrow: string;
    heading: string;
    facts: readonly CourseFact[];
    supportingNote: string;
  };
  journey: {
    eyebrow: string;
    heading: string;
    stages: readonly CourseJourneyStage[];
    supportingNote: string;
  };
  tutorPreview: {
    eyebrow: string;
    heading: string;
    description: string;
    principles: readonly CourseInfoItem[];
    linkLabel: string;
    linkHref: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: readonly CourseFaq[];
  };
  relatedCourses: {
    eyebrow: string;
    heading: string;
    items: readonly RelatedCourse[];
  };
  finalCta: {
    heading: string;
    description: string;
  };
};
