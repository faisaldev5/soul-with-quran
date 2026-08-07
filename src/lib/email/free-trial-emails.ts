import { courseOptions, type TrialFormValues } from "@/lib/free-trial-schema";

const courseRecommendationValue = courseOptions[courseOptions.length - 1];

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

function formatTrialDay(value: string): string {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(date);
}

type SummaryRow = { label: string; value: string };

function buildSummaryRows(data: TrialFormValues, submittedAt: string): SummaryRow[] {
  const rows: SummaryRow[] = [
    { label: "Parent or learner name", value: data.contactName },
    { label: "Contact email", value: data.email },
  ];

  if (data.whatsapp) rows.push({ label: "WhatsApp number", value: data.whatsapp });

  rows.push({ label: "Country or time zone", value: data.timezone });

  if (data.learnerName) rows.push({ label: "Learner name", value: data.learnerName });

  rows.push(
    { label: "Learner age group", value: data.ageGroup },
    { label: "Course of interest", value: data.course },
    { label: "Current learning level", value: data.currentLevel },
    { label: "Preferred lesson format", value: data.lessonFormat },
    { label: "Preferred trial day", value: formatTrialDay(data.preferredDay) },
    { label: "Preferred trial time", value: data.preferredTime },
  );

  if (data.alternativeAvailability) {
    rows.push({ label: "Alternative availability", value: data.alternativeAvailability });
  }
  if (data.platform) rows.push({ label: "Preferred platform", value: data.platform });
  if (data.goals) rows.push({ label: "Learning goals / additional information", value: data.goals });

  rows.push({ label: "Submitted", value: submittedAt });

  return rows;
}

export function buildAdminNotificationEmail(data: TrialFormValues): EmailContent {
  const submittedAt = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const rows = buildSummaryRows(data, submittedAt);

  const subject =
    data.course === courseRecommendationValue
      ? "New free trial request — Course recommendation"
      : `New free trial request — ${data.course}`;

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #2b2b2b;">
      <h2 style="color: #17324d;">New free trial request</h2>
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
    </div>
  `.trim();

  const text = rows.map((row) => `${row.label}: ${row.value}`).join("\n");

  return { subject, html, text };
}

export function buildVisitorAcknowledgementEmail(data: TrialFormValues): EmailContent {
  const contactWay = data.whatsapp ? "email, or WhatsApp" : "email";

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #2b2b2b; line-height: 1.6;">
      <p>Dear ${escapeHtml(data.contactName)},</p>
      <p>Thank you for requesting a free trial with SoulWithQuran. We’ve received your details and will review the learner’s current stage, goals, and preferred availability. We’ll send the confirmed trial time and meeting link within 24 hours.</p>
      <p>The trial is completely free, lasts 20–30 minutes, and no payment is required.</p>
      <table style="border-collapse: collapse; margin: 16px 0;">
        <tr><td style="padding: 4px 12px 4px 0; color: #5b6673;">Requested course</td><td style="font-weight: 600;">${escapeHtml(data.course)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #5b6673;">Preferred trial day</td><td style="font-weight: 600;">${escapeHtml(formatTrialDay(data.preferredDay))}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #5b6673;">Preferred trial time</td><td style="font-weight: 600;">${escapeHtml(data.preferredTime)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #5b6673;">Preferred lesson format</td><td style="font-weight: 600;">${escapeHtml(data.lessonFormat)}</td></tr>
      </table>
      <p>We’ll be in touch by ${contactWay} to confirm your trial.</p>
      <p style="color: #5b6673; font-size: 14px;">Please check your spam or junk folder if you don’t see our reply.</p>
      <p>Warm regards,<br />SoulWithQuran</p>
    </div>
  `.trim();

  const text = [
    `Dear ${data.contactName},`,
    "",
    "Thank you for requesting a free trial with SoulWithQuran. We’ve received your details and will review the learner’s current stage, goals, and preferred availability. We’ll send the confirmed trial time and meeting link within 24 hours.",
    "",
    "The trial is completely free, lasts 20–30 minutes, and no payment is required.",
    "",
    `Requested course: ${data.course}`,
    `Preferred trial day: ${formatTrialDay(data.preferredDay)}`,
    `Preferred trial time: ${data.preferredTime}`,
    `Preferred lesson format: ${data.lessonFormat}`,
    "",
    `We’ll be in touch by ${contactWay} to confirm your trial.`,
    "",
    "Please check your spam or junk folder if you don’t see our reply.",
    "",
    "Warm regards,",
    "SoulWithQuran",
  ].join("\n");

  return { subject: "We received your SoulWithQuran trial request", html, text };
}
