export type PricingPlan = {
  price: number;
  currency: "USD";
  billingPeriod: "month";
  perStudent: true;
  classesPerWeek: number;
  lessonDuration: string;
  formats: readonly string[];
  includedFeatures: readonly string[];
  courses: readonly string[];
};

export const pricingPlan: PricingPlan = {
  price: 80,
  currency: "USD",
  billingPeriod: "month",
  perStudent: true,
  classesPerWeek: 5,
  lessonDuration: "30–40 minutes",
  formats: ["One-to-one", "carefully matched small groups"],
  includedFeatures: [
    "Five live classes each week",
    "30–40 minute lessons",
    "One-to-one or carefully matched small-group learning",
    "Patient, personal guidance",
  ],
  courses: ["Qaida", "Nazra", "Tajweed", "Hifz", "Islamic Studies"],
};
