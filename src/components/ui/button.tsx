import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
type IconPosition = "start" | "end";

type ButtonStyleProps = {
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  loading?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
  secondary:
    "border border-primary-600 bg-surface text-primary-700 hover:bg-primary-50 active:bg-primary-100",
  tertiary:
    "bg-transparent text-primary-700 underline-offset-4 hover:underline active:text-primary-800",
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  className?: string,
) {
  return buttonClasses({ variant, className });
}

function buttonClasses({
  variant = "primary",
  className,
  loading,
}: ButtonStyleProps & { className?: string }) {
  return cn(
    "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-pill px-5 py-2 text-sm font-semibold leading-6 transition-[background-color,border-color,color,box-shadow,transform] duration-normal ease-swq-out motion-reduce:transition-none",
    variantClasses[variant],
    "disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-100 disabled:text-neutral-500 disabled:no-underline disabled:shadow-none disabled:transition-none disabled:hover:bg-neutral-100 disabled:active:bg-neutral-100",
    loading && "cursor-wait",
    className,
  );
}

function ButtonContent({
  children,
  icon,
  iconPosition = "end",
  loading = false,
}: Pick<ButtonStyleProps, "icon" | "iconPosition" | "loading"> & {
  children: ReactNode;
}) {
  const iconNode = loading ? (
    <LoaderCircle
      aria-hidden="true"
      className="size-4 animate-spin motion-reduce:animate-none"
    />
  ) : (
    icon
  );

  return iconPosition === "start" ? (
    <>
      {iconNode}
      <span>{children}</span>
    </>
  ) : (
    <>
      <span>{children}</span>
      {iconNode}
    </>
  );
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleProps;

export function Button({
  children,
  className,
  icon,
  iconPosition = "end",
  loading = false,
  type = "button",
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({
        variant,
        className,
        loading,
      })}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      <ButtonContent
        icon={icon}
        iconPosition={iconPosition}
        loading={loading}
      >
        {children}
      </ButtonContent>
    </button>
  );
}

export type ButtonLinkProps = Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "className" | "children" | "onClick"
> &
  ButtonStyleProps & {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
  };

export function ButtonLink({
  children,
  className,
  disabled = false,
  icon,
  iconPosition = "end",
  loading = false,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const isUnavailable = disabled || loading;

  const content = (
    <ButtonContent
      icon={icon}
      iconPosition={iconPosition}
      loading={loading}
    >
      {children}
    </ButtonContent>
  );

  if (isUnavailable) {
    return (
      <span
        className={buttonClasses({
          variant,
          className: cn(
            "cursor-not-allowed border-neutral-300 bg-neutral-100 text-neutral-500 shadow-none",
            className,
          ),
          loading,
        })}
        aria-busy={loading || undefined}
        aria-disabled="true"
      >
        {content}
      </span>
    );
  }

  return (
    <Link
      {...props}
      className={buttonClasses({ variant, className, loading })}
      aria-busy={loading || undefined}
    >
      {content}
    </Link>
  );
}
