"use client";

import { Check } from "lucide-react";

import { cn } from "@/lib/cn";
import { stepDefinitions, useTrialStep, type FormStep } from "@/components/free-trial/trial-step-context";

const totalSteps = stepDefinitions.length;

export function TrialProgressHorizontal({ className }: { className?: string }) {
  const { currentStep, goToStep } = useTrialStep();
  const completedFraction = (currentStep - 1) / (totalSteps - 1);

  return (
    <div className={cn("relative", className)}>
      <div aria-hidden="true" className="absolute inset-x-4 top-4 h-px -translate-y-1/2 bg-border" />
      <div
        aria-hidden="true"
        className="absolute left-4 top-4 h-px -translate-y-1/2 bg-sage-700 transition-[width] duration-normal ease-swq-out motion-reduce:transition-none"
        style={{ width: `calc((100% - 2rem) * ${completedFraction})` }}
      />

      <ol aria-label="Free trial progress" className="relative flex items-center justify-between">
        {stepDefinitions.map((step) => {
          const isCurrent = currentStep === step.id;
          const isComplete = currentStep > step.id;
          const accessibleName = `Step ${step.id}: ${step.title}${isComplete ? " (completed)" : isCurrent ? " (current step)" : ""}`;

          const circle = (
            <span
              className={cn(
                "relative z-10 flex size-8 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-normal ease-swq-out motion-reduce:transition-none",
                isComplete && "border-sage-700 bg-sage-700 text-white",
                isCurrent && "border-primary-700 bg-primary-700 text-white",
                !isComplete && !isCurrent && "border-border-strong bg-background text-text-muted",
              )}
            >
              {isComplete ? <Check aria-hidden="true" className="size-4" strokeWidth={2.5} /> : step.id}
            </span>
          );

          return (
            <li
              key={step.id}
              aria-current={isCurrent ? "step" : undefined}
              aria-label={accessibleName}
              className="relative"
            >
              {isComplete ? (
                <button
                  type="button"
                  onClick={() => goToStep(step.id as FormStep)}
                  className="flex rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  {circle}
                </button>
              ) : (
                <div className="flex">{circle}</div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
