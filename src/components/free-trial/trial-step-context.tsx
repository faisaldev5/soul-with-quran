"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type FormStep = 1 | 2 | 3 | 4;

export const stepDefinitions = [
  {
    id: 1,
    title: "Your details",
    eyebrow: "STEP 1 OF 4",
    heading: "How should we contact you?",
    copy: "Share your name, email, and how we should reach you.",
  },
  {
    id: 2,
    title: "About the learner",
    eyebrow: "STEP 2 OF 4",
    heading: "Tell us about the learner.",
    copy: "Share the learner’s age group, course of interest, and current level.",
  },
  {
    id: 3,
    title: "Learning preference",
    eyebrow: "STEP 3 OF 4",
    heading: "How would you prefer to learn?",
    copy: "Choose a lesson format and share anything the tutor should know.",
  },
  {
    id: 4,
    title: "Trial availability",
    eyebrow: "STEP 4 OF 4",
    heading: "Choose a suitable trial time.",
    copy: "Request a preferred day and time. We’ll review the details and confirm the trial within 24 hours.",
  },
] as const;

type TrialStepContextValue = {
  currentStep: FormStep;
  goToStep: (step: FormStep) => void;
};

const TrialStepContext = createContext<TrialStepContextValue | null>(null);

export function TrialStepProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);

  return (
    <TrialStepContext.Provider value={{ currentStep, goToStep: setCurrentStep }}>
      {children}
    </TrialStepContext.Provider>
  );
}

export function useTrialStep() {
  const context = useContext(TrialStepContext);
  if (!context) throw new Error("useTrialStep must be used within a TrialStepProvider");
  return context;
}
