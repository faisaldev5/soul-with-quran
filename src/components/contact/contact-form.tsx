"use client";

import { useEffect, useRef, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, CheckCircle2, CircleAlert } from "lucide-react";

import {
  contactRequestSchema,
  enquiryTypeOptions,
  isContactFieldName,
  type ContactFieldName,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { cn } from "@/lib/cn";
import { CONTACT_TURNSTILE_ACTION, TURNSTILE_SITE_KEY } from "@/lib/turnstile";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FieldErrorText, Input, Label, Textarea } from "@/components/ui/form-controls";
import { TurnstileWidget } from "@/components/free-trial/turnstile-widget";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  whatsapp: "",
  enquiryType: "",
  message: "",
};

const fieldLabelMap: Record<ContactFieldName, string> = {
  name: "Name",
  email: "Email address",
  whatsapp: "WhatsApp number",
  enquiryType: "Enquiry type",
  message: "Message",
};

type ContactApiResponse =
  | { ok: true; message: string }
  | { ok: false; code: string; message: string; fieldErrors?: Record<string, string> };

type TextFieldProps = {
  field: ContactFieldName;
  optional?: boolean;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  autoComplete?: string;
  placeholder?: string;
  helper?: string;
};

export function ContactForm() {
  const [success, setSuccess] = useState<ContactFormValues | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileInstanceKey, setTurnstileInstanceKey] = useState(0);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
    setFocus,
    formState,
  } = useForm<ContactFormValues>({ defaultValues, mode: "onBlur", shouldFocusError: true });

  useEffect(() => {
    if (success) successHeadingRef.current?.focus();
  }, [success]);

  const getError = (field: ContactFieldName) => {
    const message = errors[field]?.message;
    return typeof message === "string" ? message : undefined;
  };

  const getDescribedBy = (field: ContactFieldName, helper?: string) => {
    const ids = [helper ? `${field}-helper` : null, getError(field) ? `${field}-error` : null].filter(Boolean);
    return ids.length ? ids.join(" ") : undefined;
  };

  const validateField = (field: ContactFieldName, value: string) => {
    const result = contactRequestSchema.shape[field].safeParse(value);
    return result.success ? true : result.error.issues[0]?.message ?? "Check this field.";
  };

  const renderTextField = ({ field, optional, type = "text", autoComplete, placeholder, helper }: TextFieldProps) => {
    const error = getError(field);
    return (
      <div className="space-y-2">
        <Label htmlFor={field} optional={optional}>
          {fieldLabelMap[field]}
          {!optional && <span aria-hidden="true" className="ml-1 text-sage-700">*</span>}
        </Label>
        <Input
          {...register(field, { validate: (value) => validateField(field, value) })}
          id={field}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          error={Boolean(error)}
          aria-describedby={getDescribedBy(field, helper)}
          required={!optional}
        />
        {helper && !error && <p id={`${field}-helper`} className="text-sm leading-5 text-text-secondary">{helper}</p>}
        {error && <FieldErrorText id={`${field}-error`}>{error}</FieldErrorText>}
      </div>
    );
  };

  const onSubmit = async (values: ContactFormValues) => {
    setFormError(null);
    const parsed = contactRequestSchema.safeParse(values);

    if (!parsed.success) {
      let firstInvalidField: ContactFieldName | null = null;
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && isContactFieldName(field)) {
          if (!firstInvalidField) firstInvalidField = field;
          setError(field, { type: "manual", message: issue.message });
        }
      }
      if (firstInvalidField) window.requestAnimationFrame(() => setFocus(firstInvalidField));
      return;
    }

    if (!turnstileToken) {
      setFormError("Please complete the security check and try again.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, turnstileToken }),
      });

      let payload: ContactApiResponse | null = null;
      try {
        payload = (await response.json()) as ContactApiResponse;
      } catch {
        payload = null;
      }

      if (response.ok && payload?.ok) {
        setSuccess(parsed.data);
        return;
      }

      if (response.status === 422 && payload && !payload.ok && payload.code === "VALIDATION_ERROR" && payload.fieldErrors) {
        let firstInvalidField: ContactFieldName | null = null;
        for (const [field, message] of Object.entries(payload.fieldErrors)) {
          if (isContactFieldName(field)) {
            if (!firstInvalidField) firstInvalidField = field;
            setError(field, { type: "server", message });
          }
        }
        if (firstInvalidField) window.requestAnimationFrame(() => setFocus(firstInvalidField));
        setFormError("Please check the highlighted fields and try again.");
        setTurnstileToken(null);
        setTurnstileInstanceKey((key) => key + 1);
        return;
      }

      if (payload && !payload.ok && (payload.code === "TURNSTILE_REQUIRED" || payload.code === "TURNSTILE_FAILED")) {
        setFormError("Please complete the security check and try again.");
        setTurnstileToken(null);
        setTurnstileInstanceKey((key) => key + 1);
        return;
      }

      setFormError("We couldn’t send your message right now. Please check the form and try again.");
      setTurnstileToken(null);
      setTurnstileInstanceKey((key) => key + 1);
    } catch {
      setFormError("We couldn’t send your message right now. Please check the form and try again.");
      setTurnstileToken(null);
      setTurnstileInstanceKey((key) => key + 1);
    }
  };

  if (success) {
    return (
      <Card className="border-primary-100 bg-surface p-6 shadow-medium sm:p-8" aria-labelledby="contact-success-heading">
        <div role="status" aria-live="polite">
          <div className="flex size-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
            <CheckCircle2 aria-hidden="true" className="size-6" strokeWidth={1.8} />
          </div>
          <p className="eyebrow mt-6 text-sage-700">MESSAGE SENT</p>
          <h2 ref={successHeadingRef} id="contact-success-heading" tabIndex={-1} className="mt-3 text-3xl leading-tight text-primary-700 outline-none">
            Thanks for getting in touch.
          </h2>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            We’ve received your message and will reply using the contact details you provided.
          </p>
          <dl className="mt-7 divide-y divide-border rounded-medium border border-border bg-background">
            <div className="flex items-start justify-between gap-5 p-4 text-sm"><dt className="text-text-secondary">Email</dt><dd className="text-right font-medium text-primary-700">{success.email}</dd></div>
            <div className="flex items-start justify-between gap-5 p-4 text-sm"><dt className="text-text-secondary">Enquiry type</dt><dd className="text-right font-medium text-primary-700">{success.enquiryType}</dd></div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" icon={<ArrowRight aria-hidden="true" className="size-4" />}>Return to Home</ButtonLink>
            <ButtonLink href="/free-trial" variant="secondary">Request a free trial</ButtonLink>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="border-border bg-surface p-5 shadow-medium sm:p-6 lg:p-10" aria-labelledby="contact-form-heading">
      <p className="eyebrow text-sage-700">SEND A MESSAGE</p>
      <h2 id="contact-form-heading" className="mt-3 text-[1.75rem] leading-tight text-primary-700 sm:text-3xl">How can we help?</h2>
      <p className="mt-3 text-base leading-7 text-text-secondary">Share your question below and we’ll reply using the contact details you provide.</p>

      <form className="mt-6 space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 lg:grid-cols-2">
          {renderTextField({ field: "name", autoComplete: "name", placeholder: "Your name" })}
          {renderTextField({ field: "email", type: "email", autoComplete: "email", placeholder: "you@example.com" })}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {renderTextField({
            field: "whatsapp",
            type: "tel",
            autoComplete: "tel",
            placeholder: "+44 7000 000000",
            optional: true,
            helper: "Leave this blank if you prefer to communicate by email.",
          })}

          <div className="space-y-2">
            <Label htmlFor="enquiryType">
              {fieldLabelMap.enquiryType}
              <span aria-hidden="true" className="ml-1 text-sage-700">*</span>
            </Label>
            <select
              {...register("enquiryType", { validate: (value) => validateField("enquiryType", value) })}
              id="enquiryType"
              required
              aria-invalid={Boolean(getError("enquiryType"))}
              aria-describedby={getDescribedBy("enquiryType")}
              className={cn(
                "min-h-12 w-full rounded-medium border bg-surface px-4 py-3 text-base text-text-primary outline-none transition-colors",
                "focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-primary-200",
                getError("enquiryType") ? "border-error" : "border-border-strong",
                !formState.dirtyFields.enquiryType && "text-text-secondary",
              )}
            >
              <option value="">Select an enquiry type</option>
              {enquiryTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            {getError("enquiryType") && <FieldErrorText id="enquiryType-error">{getError("enquiryType")}</FieldErrorText>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{fieldLabelMap.message}</Label>
          <Textarea
            {...register("message", { validate: (value) => validateField("message", value) })}
            id="message"
            className="min-h-40"
            placeholder="Tell us how we can help."
            error={Boolean(getError("message"))}
            aria-describedby={getDescribedBy("message")}
            required
          />
          {getError("message") && <FieldErrorText id="message-error">{getError("message")}</FieldErrorText>}
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-text-primary">Security check</p>
          {TURNSTILE_SITE_KEY ? (
            <TurnstileWidget
              key={turnstileInstanceKey}
              siteKey={TURNSTILE_SITE_KEY}
              action={CONTACT_TURNSTILE_ACTION}
              onVerify={setTurnstileToken}
              onExpire={() => setTurnstileToken(null)}
              onError={() => setTurnstileToken(null)}
            />
          ) : (
            <p role="alert" className="text-sm leading-6 text-error">
              The security check is temporarily unavailable. Please try again later.
            </p>
          )}
        </div>

        {formError && <p className="flex gap-2 rounded-medium border border-error/30 bg-error/5 p-3 text-sm leading-6 text-error" role="alert"><CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />{formError}</p>}

        <div className="border-t border-border pt-6">
          <Button
            className="w-full"
            disabled={formState.isSubmitting || !turnstileToken}
            loading={formState.isSubmitting}
            type="submit"
            icon={<ArrowRight aria-hidden="true" className="size-4" />}
          >
            {formState.isSubmitting ? "Sending your message…" : "Send message"}
          </Button>
          <p className="mx-auto mt-4 w-full text-center text-xs leading-5 text-text-muted">Your information will only be used to respond to your enquiry.</p>
          <p className="mx-auto mt-2 w-full text-center text-xs leading-5 text-text-muted">
            Looking to request a trial lesson? Use the{" "}
            <a href="/free-trial" className="font-semibold text-primary-700 underline-offset-4 hover:underline">Free Trial page</a>.
          </p>
        </div>
      </form>
    </Card>
  );
}
