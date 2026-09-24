import type { ContactFormValues } from "@/lib/contact-schema";
import { emailLogoHtml } from "@/lib/email/branding";

type EmailContent = {
  subject: string;
  html: string;
  text: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildAdminNotificationEmail(data: ContactFormValues): EmailContent {
  const submittedAt = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const rows: { label: string; value: string }[] = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
  ];
  if (data.whatsapp) rows.push({ label: "WhatsApp number", value: data.whatsapp });
  rows.push(
    { label: "Enquiry type", value: data.enquiryType },
    { label: "Submitted", value: submittedAt },
  );

  const subject = `New SoulWithQuran enquiry — ${data.enquiryType}`;

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #2b2b2b;">
      ${emailLogoHtml}
      <h2 style="color: #17324d;">New contact enquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        ${rows
          .map(
            (row) => `
          <tr>
            <td style="padding: 6px 12px 6px 0; color: #5b6673; vertical-align: top; white-space: nowrap;">${escapeHtml(row.label)}</td>
            <td style="padding: 6px 0; font-weight: 600;">${escapeHtml(row.value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="margin-top: 16px; color: #5b6673;">Message</p>
      <p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
  `.trim();

  const text = [
    ...rows.map((row) => `${row.label}: ${row.value}`),
    "",
    "Message:",
    data.message,
  ].join("\n");

  return { subject, html, text };
}

export function buildVisitorAcknowledgementEmail(data: ContactFormValues): EmailContent {
  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #2b2b2b; line-height: 1.6;">
      ${emailLogoHtml}
      <p>Dear ${escapeHtml(data.name)},</p>
      <p>Thank you for getting in touch with SoulWithQuran. We’ve received your message and will reply using the contact details you provided.</p>
      <table style="border-collapse: collapse; margin: 16px 0;">
        <tr><td style="padding: 4px 12px 4px 0; color: #5b6673;">Enquiry type</td><td style="font-weight: 600;">${escapeHtml(data.enquiryType)}</td></tr>
      </table>
      <p style="color: #5b6673; font-size: 14px;">Please check your spam or junk folder if you don’t see our reply.</p>
      <p>Warm regards,<br />SoulWithQuran</p>
    </div>
  `.trim();

  const text = [
    `Dear ${data.name},`,
    "",
    "Thank you for getting in touch with SoulWithQuran. We’ve received your message and will reply using the contact details you provided.",
    "",
    `Enquiry type: ${data.enquiryType}`,
    "",
    "Please check your spam or junk folder if you don’t see our reply.",
    "",
    "Warm regards,",
    "SoulWithQuran",
  ].join("\n");

  return { subject: "We received your SoulWithQuran message", html, text };
}
