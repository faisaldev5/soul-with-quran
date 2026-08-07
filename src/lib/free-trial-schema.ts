import { z } from "zod";

const requiredText = (message: string, maxLength: number) =>
  z.string().trim().min(1, message).max(maxLength, `Please keep this under ${maxLength} characters.`);

const requiredOption = (options: readonly string[], message: string) =>
  z.string().refine((value) => options.includes(value), message);

const optionalOption = (options: readonly string[], message: string) =>
  z.string().refine((value) => value === "" || options.includes(value), message);

export const ageGroupOptions = ["Under 7", "7–12", "13–17", "18 or older"] as const;

export const courseOptions = [
  "Qaida",
  "Nazra",
  "Tajweed",
  "Hifz",
  "Islamic Studies",
  "Not sure — please recommend",
] as const;

export const currentLevelOptions = [
  "Complete beginner",
  "Recognises some Arabic letters",
  "Can read slowly with support",
  "Can read independently",
  "Has studied Tajweed",
  "Currently memorising",
  "Not sure",
] as const;

export const lessonFormatOptions = ["One-to-one", "Small group", "Not sure — please recommend"] as const;

export const platformOptions = ["Zoom", "Google Meet", "WhatsApp", "No preference"] as const;

export const trialFieldNames = [
  "contactName",
  "email",
  "whatsapp",
  "timezone",
  "learnerName",
  "ageGroup",
  "course",
  "currentLevel",
  "lessonFormat",
  "preferredDay",
  "preferredTime",
  "alternativeAvailability",
  "platform",
  "goals",
] as const;

export type TrialFieldName = (typeof trialFieldNames)[number];

export const trialRequestSchema = z.object({
  contactName: requiredText("Enter the parent or learner name.", 100),
  email: z.string().trim().email("Enter a valid email address.").max(160, "Please use a shorter email address."),
  whatsapp: z.string().trim().max(40, "Please keep the WhatsApp number under 40 characters."),
  timezone: requiredText("Enter your country or time zone.", 100),
  learnerName: z.string().trim().max(100, "Please keep the learner name under 100 characters."),
  ageGroup: requiredOption(ageGroupOptions, "Select the learner age group."),
  course: requiredOption(courseOptions, "Select a course of interest."),
  currentLevel: requiredOption(currentLevelOptions, "Select the current learning level."),
  lessonFormat: requiredOption(lessonFormatOptions, "Select a preferred lesson format."),
  preferredDay: requiredText("Choose a preferred day.", 30),
  preferredTime: requiredText("Choose a preferred time.", 30),
  alternativeAvailability: z
    .string()
    .trim()
    .max(300, "Please keep alternative availability under 300 characters."),
  platform: optionalOption(platformOptions, "Select a valid platform."),
  goals: z.string().trim().max(800, "Please keep your goals under 800 characters."),
});

export type TrialFormValues = z.infer<typeof trialRequestSchema>;

export function isTrialFieldName(value: string): value is TrialFieldName {
  return (trialFieldNames as readonly string[]).includes(value);
}
