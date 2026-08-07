"use client";

import { useEffect, useRef, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { useForm, useWatch } from "react-hook-form";
import { ArrowRight, CheckCircle2, ChevronLeft, CircleAlert } from "lucide-react";

import {
  ageGroupOptions,
  courseOptions,
  currentLevelOptions,
  isTrialFieldName,
  lessonFormatOptions,
  platformOptions,
  trialRequestSchema,
  type TrialFieldName,
  type TrialFormValues,
} from "@/lib/free-trial-schema";
import { cn } from "@/lib/cn";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FieldErrorText, Input, Label, Textarea } from "@/components/ui/form-controls";
import { stepDefinitions, useTrialStep, type FormStep } from "@/components/free-trial/trial-step-context";
import { TurnstileWidget } from "@/components/free-trial/turnstile-widget";
import { TURNSTILE_ACTION, TURNSTILE_TEST_SITE_KEY } from "@/lib/turnstile";

const defaultValues: TrialFormValues = {
  contactName: "",
  email: "",
  whatsapp: "",
  timezone: "",
  learnerName: "",
  ageGroup: "",
  course: "",
  currentLevel: "",
  lessonFormat: "",
  preferredDay: "",
  preferredTime: "",
  alternativeAvailability: "",
  platform: "",
  goals: "",
};

type ChoiceCardOption = { value: string; label: string; description?: string };

const ageGroupDetails: ChoiceCardOption[] = ageGroupOptions.map((option) => ({ value: option, label: option }));

const lessonFormatDetails: ChoiceCardOption[] = [
  { value: lessonFormatOptions[0], label: "One-to-one", description: "Personal attention" },
  { value: lessonFormatOptions[1], label: "Small group", description: "Matched learners" },
  { value: lessonFormatOptions[2], label: "Not sure", description: "Tutor recommendation" },
];

const fieldLabelMap: Record<TrialFieldName, string> = {
  contactName: "Parent or learner name",
  email: "Email address",
  whatsapp: "WhatsApp number",
  timezone: "Country or time zone",
  learnerName: "Learner name",
  ageGroup: "Learner age group",
  course: "Course of interest",
  currentLevel: "Current learning level",
  lessonFormat: "Preferred lesson format",
  preferredDay: "Preferred trial day",
  preferredTime: "Preferred trial time",
  alternativeAvailability: "Alternative availability",
  platform: "Preferred trial platform",
  goals: "Learning goals or anything the tutor should know",
};

type SelectFieldProps = {
  field: TrialFieldName;
  options: readonly string[];
  placeholder: string;
  optional?: boolean;
};

type TextFieldProps = {
  field: TrialFieldName;
  optional?: boolean;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  autoComplete?: string;
  placeholder?: string;
  helper?: string;
};

type ChoiceCardsFieldProps = {
  field: TrialFieldName;
  options: ChoiceCardOption[];
  columnsClassName: string;
};

type FreeTrialApiResponse =
  | { ok: true; message: string }
  | { ok: false; code: string; message: string; fieldErrors?: Record<string, string> };

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(date);
}

const stepFieldMap: Record<FormStep, TrialFieldName[]> = {
  1: ["contactName", "email", "whatsapp", "timezone"],
  2: ["learnerName", "ageGroup", "course", "currentLevel"],
  3: ["lessonFormat", "goals"],
  4: ["preferredDay", "preferredTime"],
};

const totalSteps = stepDefinitions.length;

// Cloudflare's official test key always passes and is safe to use outside
// production; the real site key is only used in production builds.
const turnstileSiteKey =
  process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY : TURNSTILE_TEST_SITE_KEY;

export function FreeTrialForm() {
  const [success, setSuccess] = useState<TrialFormValues | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileInstanceKey, setTurnstileInstanceKey] = useState(0);
  const { currentStep, goToStep: setSharedStep } = useTrialStep();
  const [turnstileTrackedStep, setTurnstileTrackedStep] = useState<FormStep>(currentStep);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const shouldFocusStepRef = useRef(false);
  const {
    clearErrors,
    control,
    formState: { errors },
    getFieldState,
    handleSubmit,
    register,
    setError,
    setFocus,
    trigger,
    formState,
  } = useForm<TrialFormValues>({ defaultValues, mode: "onBlur", shouldFocusError: true });

  const watchedValues = useWatch({ control });

  useEffect(() => {
    if (success) successHeadingRef.current?.focus();
  }, [success]);

  useEffect(() => {
    if (!shouldFocusStepRef.current || success) return;
    shouldFocusStepRef.current = false;
    window.requestAnimationFrame(() => stepHeadingRef.current?.focus());
  }, [currentStep, success]);

  // The Turnstile widget only exists on Step 4. Adjust state during render
  // (React's recommended alternative to an effect here) so any navigation
  // away from Step 4 — including jumps triggered by the progress indicator —
  // clears a stale token before the next render commits.
  if (currentStep !== turnstileTrackedStep) {
    setTurnstileTrackedStep(currentStep);
    if (currentStep !== totalSteps) setTurnstileToken(null);
  }

  const getError = (field: TrialFieldName) => {
    const message = errors[field]?.message;
    return typeof message === "string" ? message : undefined;
  };

  const getDescribedBy = (field: TrialFieldName, helper?: string) => {
    const ids = [helper ? `${field}-helper` : null, getError(field) ? `${field}-error` : null].filter(Boolean);
    return ids.length ? ids.join(" ") : undefined;
  };

  const validateField = (field: TrialFieldName, value: string) => {
    const result = trialRequestSchema.shape[field].safeParse(value);
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

  const renderSelectField = ({ field, options, placeholder, optional }: SelectFieldProps) => {
    const error = getError(field);
    return (
      <div className="space-y-2">
        <Label htmlFor={field} optional={optional}>
          {fieldLabelMap[field]}
          {!optional && <span aria-hidden="true" className="ml-1 text-sage-700">*</span>}
        </Label>
        <select
          {...register(field, { validate: (value) => validateField(field, value) })}
          id={field}
          required={!optional}
          aria-invalid={Boolean(error)}
          aria-describedby={getDescribedBy(field)}
          className={cn(
            "min-h-12 w-full rounded-medium border bg-surface px-4 py-3 text-base text-text-primary outline-none transition-colors",
            "focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-primary-200",
            error ? "border-error" : "border-border-strong",
            !formState.dirtyFields[field] && "text-text-secondary",
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        {error && <FieldErrorText id={`${field}-error`}>{error}</FieldErrorText>}
      </div>
    );
  };

  const renderChoiceCards = ({ field, options, columnsClassName }: ChoiceCardsFieldProps) => {
    const error = getError(field);
    return (
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold text-text-primary">
          {fieldLabelMap[field]}
          <span aria-hidden="true" className="ml-1 text-sage-700">*</span>
        </legend>
        <div className={cn("grid gap-3", columnsClassName)}>
          {options.map(({ value, label, description }) => (
            <label key={value} className="group relative flex cursor-pointer">
              <input
                {...register(field, { validate: (value) => validateField(field, value) })}
                className="peer sr-only"
                type="radio"
                value={value}
                aria-describedby={getDescribedBy(field)}
              />
              <span
                className={cn(
                  "flex w-full flex-col justify-center rounded-medium border p-3 transition-colors",
                  "border-border-strong bg-background peer-checked:border-primary-500 peer-checked:bg-primary-50",
                  "peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary-500",
                  error ? "border-error" : "",
                )}
              >
                <span className="text-sm font-semibold leading-5 text-primary-700">{label}</span>
                {description && <span className="mt-1 text-sm leading-5 text-text-secondary">{description}</span>}
              </span>
            </label>
          ))}
        </div>
        {error && <FieldErrorText id={`${field}-error`}>{error}</FieldErrorText>}
      </fieldset>
    );
  };

  const goToStep = (step: FormStep) => {
    shouldFocusStepRef.current = true;
    setSharedStep(step);
  };

  const validateCurrentStep = async () => {
    const fields = stepFieldMap[currentStep];
    const isValid = await trigger(fields);

    if (!isValid) {
      const firstInvalidField = fields.find((field) => getFieldState(field).error);
      if (firstInvalidField) window.requestAnimationFrame(() => setFocus(firstInvalidField));
      return false;
    }

    return true;
  };

  const handleContinue = async () => {
    if (!(await validateCurrentStep()) || currentStep === totalSteps) return;
    goToStep((currentStep + 1) as FormStep);
  };

  const handleBack = () => {
    if (currentStep > 1) goToStep((currentStep - 1) as FormStep);
  };

  const resetTurnstile = () => {
    setTurnstileToken(null);
    setTurnstileInstanceKey((key) => key + 1);
  };

  const onSubmit = async (values: TrialFormValues) => {
    clearErrors();
    setFormError(null);
    const parsed = trialRequestSchema.safeParse(values);

    if (!parsed.success) {
      let firstInvalidField: TrialFieldName | null = null;
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && isTrialFieldName(field)) {
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
      const response = await fetch("/api/free-trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, turnstileToken }),
      });

      let payload: FreeTrialApiResponse | null = null;
      try {
        payload = (await response.json()) as FreeTrialApiResponse;
      } catch {
        payload = null;
      }

      if (response.ok && payload?.ok) {
        setSuccess(parsed.data);
        return;
      }

      if (response.status === 422 && payload && !payload.ok && payload.code === "VALIDATION_ERROR" && payload.fieldErrors) {
        let firstInvalidField: TrialFieldName | null = null;
        for (const [field, message] of Object.entries(payload.fieldErrors)) {
          if (isTrialFieldName(field)) {
            if (!firstInvalidField) firstInvalidField = field;
            setError(field, { type: "server", message });
          }
        }
        if (firstInvalidField) window.requestAnimationFrame(() => setFocus(firstInvalidField));
        setFormError("Please check the highlighted fields and try again.");
        resetTurnstile();
        return;
      }

      if (payload && !payload.ok && (payload.code === "TURNSTILE_REQUIRED" || payload.code === "TURNSTILE_FAILED")) {
        setFormError("Please complete the security check and try again.");
        resetTurnstile();
        return;
      }

      setFormError("We couldn’t send your request right now. Please try again.");
      resetTurnstile();
    } catch {
      setFormError("We couldn’t send your request right now. Please try again.");
      resetTurnstile();
    }
  };

  if (success) {
    return (
      <Card className="border-primary-100 bg-surface p-6 shadow-medium sm:p-8" aria-labelledby="trial-success-heading">
        <div role="status" aria-live="polite">
          <div className="flex size-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
            <CheckCircle2 aria-hidden="true" className="size-6" strokeWidth={1.8} />
          </div>
          <p className="eyebrow mt-6 text-sage-700">REQUEST RECEIVED</p>
          <h2 ref={successHeadingRef} id="trial-success-heading" tabIndex={-1} className="mt-3 text-3xl leading-tight text-primary-700 outline-none">
            Your trial request has been received.
          </h2>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            Thank you for sharing the learner’s details. We’ll review the request and send the confirmed trial time and meeting link by email, or WhatsApp when provided, within 24 hours.
          </p>
          <dl className="mt-7 divide-y divide-border rounded-medium border border-border bg-background">
            <div className="flex items-start justify-between gap-5 p-4 text-sm"><dt className="text-text-secondary">Email</dt><dd className="text-right font-medium text-primary-700">{success.email}</dd></div>
            <div className="flex items-start justify-between gap-5 p-4 text-sm"><dt className="text-text-secondary">Course</dt><dd className="text-right font-medium text-primary-700">{success.course}</dd></div>
            <div className="flex items-start justify-between gap-5 p-4 text-sm"><dt className="text-text-secondary">Preferred day and time</dt><dd className="text-right font-medium text-primary-700">{formatDate(success.preferredDay)} · {success.preferredTime}</dd></div>
            <div className="flex items-start justify-between gap-5 p-4 text-sm"><dt className="text-text-secondary">Lesson format</dt><dd className="text-right font-medium text-primary-700">{success.lessonFormat}</dd></div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/courses" icon={<ArrowRight aria-hidden="true" className="size-4" />}>Explore our courses</ButtonLink>
            <ButtonLink href="/" variant="secondary">Return to Home</ButtonLink>
          </div>
        </div>
      </Card>
    );
  }

  const activeStep = stepDefinitions[currentStep - 1];

  return (
    <Card className="border-border bg-surface p-5 shadow-medium sm:p-6 lg:p-10" aria-labelledby="trial-form-heading">
      <h2 id="trial-form-heading" className="sr-only">Request your trial</h2>

      <div aria-live="polite">
        <p className="eyebrow text-sage-700">{activeStep.eyebrow}</p>
        <h3 ref={stepHeadingRef} tabIndex={-1} className="mt-3 text-[1.75rem] leading-tight text-primary-700 outline-none sm:text-3xl">{activeStep.heading}</h3>
        <p className="mt-3 text-base leading-7 text-text-secondary">{activeStep.copy}</p>
      </div>

      <form
        className="mt-6 space-y-6"
        noValidate
        onKeyDown={(event) => {
          if (event.key === "Enter" && currentStep < totalSteps && event.target instanceof HTMLInputElement) {
            event.preventDefault();
            void handleContinue();
          }
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {currentStep === 1 && (
          <section aria-labelledby="your-details-label" className="space-y-6">
            <p id="your-details-label" className="sr-only">Your details</p>
            <div className="grid gap-4 lg:grid-cols-2">
              {renderTextField({ field: "contactName", autoComplete: "name", placeholder: "Your name" })}
              {renderTextField({ field: "email", type: "email", autoComplete: "email", placeholder: "you@example.com" })}
              {renderTextField({ field: "whatsapp", type: "tel", autoComplete: "tel", placeholder: "+44 7000 000000", optional: true })}
              {renderTextField({ field: "timezone", placeholder: "e.g. United Kingdom or GMT+0" })}
            </div>
          </section>
        )}

        {currentStep === 2 && (
          <section aria-labelledby="about-learner-label" className="space-y-6">
            <p id="about-learner-label" className="sr-only">About the learner</p>
            {renderTextField({ field: "learnerName", placeholder: "Name of learner", optional: true })}
            {renderChoiceCards({ field: "ageGroup", options: ageGroupDetails, columnsClassName: "grid-cols-2" })}
            <div className="grid gap-4 lg:grid-cols-2">
              {renderSelectField({ field: "course", options: courseOptions, placeholder: "Select a course" })}
              {renderSelectField({ field: "currentLevel", options: currentLevelOptions, placeholder: "Select current level" })}
            </div>
          </section>
        )}

        {currentStep === 3 && (
          <section aria-labelledby="learning-preference-label" className="space-y-6">
            <p id="learning-preference-label" className="sr-only">Learning preference</p>
            {renderChoiceCards({ field: "lessonFormat", options: lessonFormatDetails, columnsClassName: "grid-cols-1 lg:grid-cols-3" })}
            <div className="space-y-2">
              <Label htmlFor="goals" optional>{fieldLabelMap.goals}</Label>
              <Textarea
                {...register("goals", { validate: (value) => validateField("goals", value) })}
                id="goals"
                className="min-h-32"
                placeholder="Tell us what the learner would like to work towards."
                aria-describedby={getDescribedBy("goals")}
              />
              {getError("goals") && <FieldErrorText id="goals-error">{getError("goals")}</FieldErrorText>}
            </div>
          </section>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <section aria-labelledby="trial-availability-label" className="space-y-6">
              <p id="trial-availability-label" className="sr-only">Trial availability</p>
              <div className="grid gap-4 lg:grid-cols-2">
                {renderTextField({ field: "preferredDay", type: "date" })}
                {renderTextField({ field: "preferredTime", type: "time" })}
                {renderTextField({ field: "alternativeAvailability", placeholder: "Other days or times", optional: true })}
                {renderSelectField({ field: "platform", options: platformOptions, placeholder: "Choose a platform", optional: true })}
              </div>
              <div className="space-y-2 rounded-medium border border-border bg-background p-4 text-sm leading-6 text-text-secondary">
                <p>You may request any suitable trial time. We’ll send the confirmed time and meeting link within 24 hours.</p>
                <p className="text-text-muted">Regular classes are held Monday to Friday.</p>
              </div>
            </section>

            <section aria-labelledby="trial-review-heading" className="rounded-medium border border-border bg-background p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <h4 id="trial-review-heading" className="text-base font-semibold text-primary-700">Your trial request</h4>
                <button type="button" onClick={() => goToStep(1)} className="shrink-0 rounded-medium px-2 py-1 text-sm font-semibold text-primary-700 underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">Edit details</button>
              </div>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div><dt className="text-text-muted">Contact email</dt><dd className="mt-1 font-medium text-text-primary">{watchedValues.email || "Not provided"}</dd></div>
                <div><dt className="text-text-muted">Course of interest</dt><dd className="mt-1 font-medium text-text-primary">{watchedValues.course || "Not selected"}</dd></div>
                <div><dt className="text-text-muted">Lesson format</dt><dd className="mt-1 font-medium text-text-primary">{lessonFormatDetails.find(({ value }) => value === watchedValues.lessonFormat)?.label || "Not selected"}</dd></div>
                <div><dt className="text-text-muted">Preferred day and time</dt><dd className="mt-1 font-medium text-text-primary">{watchedValues.preferredDay ? formatDate(watchedValues.preferredDay) : "Not selected"}{watchedValues.preferredTime ? ` · ${watchedValues.preferredTime}` : ""}</dd></div>
              </dl>
            </section>

            <div>
              <p className="mb-2 text-sm font-semibold text-text-primary">Security check</p>
              {turnstileSiteKey ? (
                <TurnstileWidget
                  key={turnstileInstanceKey}
                  siteKey={turnstileSiteKey}
                  action={TURNSTILE_ACTION}
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
          </div>
        )}

        {formError && <p className="flex gap-2 rounded-medium border border-error/30 bg-error/5 p-3 text-sm leading-6 text-error" role="alert"><CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />{formError}</p>}

        <div className="border-t border-border pt-6">
          <div className={cn("flex flex-col gap-3 sm:flex-row", currentStep === 1 ? "sm:justify-end" : "sm:justify-between")}>
            {currentStep > 1 && (
              <Button type="button" variant="secondary" icon={<ChevronLeft aria-hidden="true" className="size-4" />} iconPosition="start" onClick={handleBack}>
                Back
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button type="button" onClick={() => void handleContinue()} icon={<ArrowRight aria-hidden="true" className="size-4" />} className="w-full sm:w-auto">
                Continue
              </Button>
            ) : (
              <Button className="w-full" disabled={formState.isSubmitting || !turnstileToken} loading={formState.isSubmitting} type="submit" icon={<ArrowRight aria-hidden="true" className="size-4" />}>
                {formState.isSubmitting ? "Sending your request…" : "Request my free trial"}
              </Button>
            )}
          </div>
        </div>
        {currentStep === totalSteps && (
          <div>
            <p className="text-center text-sm leading-6 text-text-secondary">We’ll review your request and reply within 24 hours.</p>
            <p className="mt-3 text-center text-xs leading-5 text-text-muted">We’ll only use these details to arrange your requested trial.</p>
          </div>
        )}
      </form>
    </Card>
  );
}
