"use client";

import { useId, useState } from "react";

/**
 * Newsletter signup.
 *
 * Replaces the third-party embed inherited from the source design, which posted
 * subscribers to another company's mailing list. This form matches the embed's
 * 52px height exactly, so the footer layout is unchanged.
 *
 * TODO: point `/api/subscribe` at the real provider (beehiiv, Mailchimp,
 * ConvertKit, Resend Audiences). Until then it validates and accepts, and the
 * route logs server-side — see `src/app/api/subscribe/route.ts`.
 */

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm() {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Could not subscribe just now. Please try again shortly.");
    }
  }

  if (status === "success") {
    return (
      <p role="status" aria-live="polite" className="text-sm text-[#B4CC04] h-[52px] flex items-center">
        Thanks — you are on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex h-[52px]">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          className="flex-1 min-w-0 bg-white text-black placeholder:text-black/40 px-4 border border-white focus:outline-none focus:ring-2 focus:ring-[#B4CC04]"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="shrink-0 bg-[#B4CC04] hover:bg-[#D4F005] disabled:opacity-60 text-black font-medium px-5 transition-colors"
        >
          {status === "submitting" ? "…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-2 text-xs text-red-300">
          {message}
        </p>
      )}
    </form>
  );
}
