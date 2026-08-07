import { z } from "zod";

const requiredText = (message: string, minLength: number, maxLength: number) =>
  z
    .string()
    .trim()
    .min(minLength, message)
    .max(maxLength, `Please keep this under ${maxLength} characters.`);

const requiredOption = (options: readonly string[], message: string) =>
  z.string().refine((value) => options.includes(value), message);

export const enquiryTypeOptions = [
  "General question",
  "Course question",
  "Pricing",
  "Scheduling",
  "Technical or website help",
  "Other",
] as const;

export const contactFieldNames = ["name", "email", "whatsapp", "enquiryType", "message"] as const;

export type ContactFieldName = (typeof contactFieldNames)[number];

export const contactRequestSchema = z.object({
  name: requiredText("Enter your name.", 1, 100),
  email: z.string().trim().email("Enter a valid email address.").max(160, "Please use a shorter email address."),
  whatsapp: z.string().trim().max(40, "Please keep the WhatsApp number under 40 characters."),
  enquiryType: requiredOption(enquiryTypeOptions, "Select an enquiry type."),
  message: requiredText("Please share a few details so we can help.", 10, 1200),
});

export type ContactFormValues = z.infer<typeof contactRequestSchema>;

export function isContactFieldName(value: string): value is ContactFieldName {
  return (contactFieldNames as readonly string[]).includes(value);
}
