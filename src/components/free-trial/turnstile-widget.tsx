"use client";

import { useEffect, useRef, useState } from "react";

const TURNSTILE_SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileRenderOptions = {
  sitekey: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "flexible" | "compact";
  action?: string;
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
  "timeout-callback"?: () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

let scriptLoadPromise: Promise<void> | null = null;

function loadTurnstileScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (scriptLoadPromise) return scriptLoadPromise;

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Failed to load the security check script.")));
      return;
    }

    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject(new Error("Failed to load the security check script.")));
    document.head.appendChild(script);
  });

  return scriptLoadPromise;
}

type TurnstileWidgetProps = {
  siteKey: string;
  action: string;
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
  onTimeout?: () => void;
};

// Mount a fresh instance (via a changing `key` prop from the parent) to force
// a new challenge — simpler and safer than exposing an imperative reset ref.
export function TurnstileWidget({ siteKey, action, onVerify, onExpire, onError, onTimeout }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  // Keep the latest callbacks available to the widget without re-rendering it.
  const callbacksRef = useRef({ onVerify, onExpire, onError, onTimeout });
  useEffect(() => {
    callbacksRef.current = { onVerify, onExpire, onError, onTimeout };
  });

  useEffect(() => {
    let cancelled = false;

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: "light",
          size: "flexible",
          action,
          callback: (token) => callbacksRef.current.onVerify(token),
          "expired-callback": () => callbacksRef.current.onExpire(),
          "error-callback": () => callbacksRef.current.onError(),
          "timeout-callback": () => callbacksRef.current.onTimeout?.(),
        });
      })
      .catch(() => {
        if (!cancelled) setLoadFailed(true);
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, action]);

  if (loadFailed) {
    return (
      <p role="alert" className="text-sm leading-6 text-error">
        We couldn’t load the security check. Please refresh the page and try again.
      </p>
    );
  }

  return <div ref={containerRef} className="w-full" />;
}
