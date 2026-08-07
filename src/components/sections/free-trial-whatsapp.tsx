import { MessageCircle } from "lucide-react";

import { buttonClassName } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";

export function FreeTrialWhatsapp() {
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;
  const isDevPreview = process.env.NODE_ENV === "development" && !whatsappUrl;

  // Hidden in production until a real WhatsApp URL is configured; visible in
  // local development (with a non-interactive button) purely for design review.
  if (!whatsappUrl && !isDevPreview) return null;

  return (
    <Section
      aria-labelledby="free-trial-whatsapp-heading"
      surface="sage"
      className="border-t border-border/70 py-[64px] lg:py-[80px]"
    >
      <Container>
        <div className="mx-auto max-w-[38rem] text-center">
          <h2 id="free-trial-whatsapp-heading" className="text-2xl leading-tight text-primary-700 sm:text-3xl">
            Prefer to continue on WhatsApp?
          </h2>
          <p className="mt-4 text-base leading-7 text-text-primary">
            Add your WhatsApp number in the form, or contact us directly if WhatsApp is more convenient.
          </p>
          <p className="mx-auto mt-2 w-full text-center text-sm leading-6 text-text-secondary">
            We’ll respond as soon as possible and help arrange the trial.
          </p>

          <div className="mt-7">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName("primary")}
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                <span>Continue on WhatsApp</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className={cn(buttonClassName("primary"), "cursor-not-allowed opacity-50")}
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                <span>Continue on WhatsApp</span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
