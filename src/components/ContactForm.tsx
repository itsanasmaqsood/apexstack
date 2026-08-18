"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { CORE_ENGINEERING, CREATIVE_SERVICES } from "@/data/services";

/**
 * Enterprise enquiry form.
 *
 * Production-ready in the sense that matters: validated, accessible, with real
 * success and error states and a single well-defined submission seam. It posts
 * to `/api/contact`, which is where email, CRM and spam checks get wired in —
 * deliberately no provider is hardcoded here.
 */

type Status = "idle" | "submitting" | "success" | "error";

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
  consent: boolean;
  /** Honeypot — bots fill it, humans never see it. */
  website: string;
}

const EMPTY: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  service: "",
  budget: "",
  timeline: "",
  details: "",
  consent: false,
  website: "",
};

const BUDGETS = [
  "Not sure yet",
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "Over $100,000",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "Still planning",
];

const MIN_DETAIL_LENGTH = 20;

function validate(values: FormValues): Partial<Record<keyof FormValues, string>> {
  const errors: Partial<Record<keyof FormValues, string>> = {};

  if (!values.name.trim()) {
    errors.name = "Please tell us your name.";
  }
  if (!values.email.trim()) {
    errors.email = "We need an email address to reply to.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "That email address does not look right.";
  }
  if (!values.service) {
    errors.service = "Choose the closest service so we route this correctly.";
  }
  if (!values.details.trim()) {
    errors.details = "Tell us a little about the problem you are solving.";
  } else if (values.details.trim().length < MIN_DETAIL_LENGTH) {
    errors.details = `A sentence or two helps — ${MIN_DETAIL_LENGTH} characters minimum.`;
  }
  if (!values.consent) {
    errors.consent = "Please confirm you are happy for us to reply.";
  }

  return errors;
}

const FIELD_CLASS =
  "w-full bg-white/5 border border-white/20 rounded-[2px] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#B4CC04] focus:ring-1 focus:ring-[#B4CC04] transition-colors";
const LABEL_CLASS = "block text-sm text-white/70 mb-2";
const ERROR_CLASS = "mt-2 text-sm text-red-300";

export default function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => {
      if (!previous[key]) return previous;
      const next = { ...previous };
      delete next[key];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(`${formId}-${Object.keys(found)[0]}`);
      first?.focus();
      return;
    }

    setStatus("submitting");
    setServerMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Request failed with ${response.status}`);
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
      setServerMessage(
        "We could not send that just now. Please email us directly and we will pick it up.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-[#B4CC04]/40 bg-[#B4CC04]/5 rounded-[2px] p-8 md:p-10"
      >
        <h3 className="text-white text-[24px] md:text-[30px] font-medium leading-[120%] mb-3">
          Thanks — that has reached us.
        </h3>
        <p className="text-white/70 text-sm md:text-base mb-6 max-w-xl">
          We read every enquiry ourselves. Expect a reply {"within 24 hours"}, usually from
          the engineer who would work on your project. If it is urgent, email us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm text-[#B4CC04] hover:text-[#D4F005] underline underline-offset-4 transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot: visually and programmatically hidden from people. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Leave this field empty</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={LABEL_CLASS} htmlFor={`${formId}-name`}>
            Name <span className="text-[#B4CC04]">*</span>
          </label>
          <input
            id={`${formId}-name`}
            className={FIELD_CLASS}
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          />
          {errors.name && (
            <p id={`${formId}-name-error`} className={ERROR_CLASS}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor={`${formId}-company`}>
            Company
          </label>
          <input
            id={`${formId}-company`}
            className={FIELD_CLASS}
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor={`${formId}-email`}>
            Email <span className="text-[#B4CC04]">*</span>
          </label>
          <input
            id={`${formId}-email`}
            className={FIELD_CLASS}
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          />
          {errors.email && (
            <p id={`${formId}-email-error`} className={ERROR_CLASS}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor={`${formId}-phone`}>
            Phone <span className="text-white/30">(optional)</span>
          </label>
          <input
            id={`${formId}-phone`}
            className={FIELD_CLASS}
            type="tel"
            autoComplete="tel"
            placeholder="Include country code"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor={`${formId}-country`}>
            Country
          </label>
          <input
            id={`${formId}-country`}
            className={FIELD_CLASS}
            type="text"
            autoComplete="country-name"
            placeholder="Where you are based"
            value={values.country}
            onChange={(e) => update("country", e.target.value)}
          />
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor={`${formId}-service`}>
            Service required <span className="text-[#B4CC04]">*</span>
          </label>
          <select
            id={`${formId}-service`}
            className={FIELD_CLASS}
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? `${formId}-service-error` : undefined}
          >
            <option value="">Select the closest match</option>
            <optgroup label="Engineering">
              {CORE_ENGINEERING.map((service) => (
                <option key={service.slug} value={service.name}>
                  {service.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Design & Creative">
              {CREATIVE_SERVICES.map((service) => (
                <option key={service.slug} value={service.name}>
                  {service.name}
                </option>
              ))}
            </optgroup>
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {errors.service && (
            <p id={`${formId}-service-error`} className={ERROR_CLASS}>
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor={`${formId}-budget`}>
            Budget <span className="text-white/30">(optional)</span>
          </label>
          <select
            id={`${formId}-budget`}
            className={FIELD_CLASS}
            value={values.budget}
            onChange={(e) => update("budget", e.target.value)}
          >
            <option value="">Prefer not to say</option>
            {BUDGETS.map((band) => (
              <option key={band} value={band}>
                {band}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor={`${formId}-timeline`}>
            Timeline <span className="text-white/30">(optional)</span>
          </label>
          <select
            id={`${formId}-timeline`}
            className={FIELD_CLASS}
            value={values.timeline}
            onChange={(e) => update("timeline", e.target.value)}
          >
            <option value="">Not decided</option>
            {TIMELINES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor={`${formId}-details`}>
          Project details <span className="text-[#B4CC04]">*</span>
        </label>
        <textarea
          id={`${formId}-details`}
          className={`${FIELD_CLASS} min-h-[160px] resize-y`}
          placeholder="What problem are you solving? Tell us about the business need, any systems it has to work with, and what you have already tried."
          value={values.details}
          onChange={(e) => update("details", e.target.value)}
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? `${formId}-details-error` : undefined}
        />
        {errors.details && (
          <p id={`${formId}-details-error`} className={ERROR_CLASS}>
            {errors.details}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            id={`${formId}-consent`}
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-[#B4CC04]"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
          />
          <span className="text-sm text-white/60 leading-relaxed">
            I am happy for ApexStack to use these details to respond to my enquiry. We do not
            sell or share your information — see our{" "}
            <Link href="/privacy-policy" className="text-white/80 underline underline-offset-4 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id={`${formId}-consent-error`} className={ERROR_CLASS}>
            {errors.consent}
          </p>
        )}
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="border border-red-400/40 bg-red-400/5 rounded-[2px] px-4 py-3 text-sm text-red-200"
        >
          {serverMessage}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-[#B4CC04] hover:bg-[#D4F005] disabled:opacity-60 disabled:cursor-not-allowed text-black font-medium px-8 py-3 rounded-[2px] transition-all duration-300 ease-in-out shadow-lg text-base whitespace-nowrap"
        >
          {status === "submitting" ? "Sending…" : "Send Enquiry"}
        </button>
        <p className="text-sm text-white/40">
          We reply {"within 24 hours"}, usually from an engineer.
        </p>
      </div>
    </form>
  );
}
