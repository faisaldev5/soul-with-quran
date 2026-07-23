import {
  forwardRef,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

type FieldMessageProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  optional?: boolean;
};

export function Label({
  children,
  className,
  optional = false,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        "inline-flex min-h-6 items-center gap-2 text-sm font-semibold leading-6 text-text-primary",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {optional ? (
        <span className="font-normal text-text-muted">(optional)</span>
      ) : null}
    </label>
  );
}

export function FieldHelperText({
  children,
  className,
  id,
}: FieldMessageProps) {
  return (
    <p id={id} className={cn("text-sm leading-5 text-text-muted", className)}>
      {children}
    </p>
  );
}

export function FieldErrorText({ children, className, id }: FieldMessageProps) {
  return (
    <p
      id={id}
      className={cn("text-sm leading-5 text-error", className)}
      role="alert"
    >
      {children}
    </p>
  );
}

type FieldControlState = {
  error?: boolean;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  FieldControlState;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error = false, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "min-h-12 w-full rounded-medium border bg-surface px-4 py-3 text-base leading-6 text-text-primary transition-[border-color,box-shadow,background-color] duration-normal ease-swq-out placeholder:text-text-muted disabled:cursor-not-allowed disabled:border-border disabled:bg-neutral-100 disabled:text-neutral-500 motion-reduce:transition-none",
        error
          ? "border-error"
          : "border-border-strong hover:border-primary-400",
        className,
      )}
      {...props}
      aria-invalid={error || props["aria-invalid"] || undefined}
    />
  ),
);

Input.displayName = "Input";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  FieldControlState;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error = false, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-32 w-full resize-y rounded-medium border bg-surface px-4 py-3 text-base leading-6 text-text-primary transition-[border-color,box-shadow,background-color] duration-normal ease-swq-out placeholder:text-text-muted disabled:cursor-not-allowed disabled:border-border disabled:bg-neutral-100 disabled:text-neutral-500 motion-reduce:transition-none",
        error
          ? "border-error"
          : "border-border-strong hover:border-primary-400",
        className,
      )}
      {...props}
      aria-invalid={error || props["aria-invalid"] || undefined}
    />
  ),
);

Textarea.displayName = "Textarea";
