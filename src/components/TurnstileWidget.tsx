"use client";

import Script from "next/script";
import { useCallback, useEffect, useId, useRef } from "react";

interface TurnstileApi {
  render: (container: string, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface TurnstileWidgetProps {
  siteKey: string;
  resetKey: number;
  onTokenChange: (token: string) => void;
}

export function TurnstileWidget({ siteKey, resetKey, onTokenChange }: TurnstileWidgetProps) {
  const reactId = useId();
  const containerId = `turnstile-${reactId.replaceAll(":", "")}`;
  const widgetId = useRef<string | null>(null);

  const renderWidget = useCallback(() => {
    if (!window.turnstile || widgetId.current) return;
    widgetId.current = window.turnstile.render(`#${containerId}`, {
      sitekey: siteKey,
      theme: "dark",
      callback: (token: string) => onTokenChange(token),
      "expired-callback": () => onTokenChange(""),
      "error-callback": () => onTokenChange(""),
    });
  }, [containerId, onTokenChange, siteKey]);

  useEffect(() => {
    if (widgetId.current && window.turnstile) {
      window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    }
    onTokenChange("");
    renderWidget();
  }, [onTokenChange, renderWidget, resetKey]);

  useEffect(
    () => () => {
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
    },
    [],
  );

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderWidget}
      />
      <div id={containerId} className="min-h-[65px]" />
    </>
  );
}
