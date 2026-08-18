import { NextResponse } from "next/server";

/**
 * Contact form submission endpoint.
 *
 * This is the single integration seam for enquiries. It validates and normalises
 * the payload, then hands off. No provider is hardcoded — the three hand-offs
 * below are deliberately left as clearly marked placeholders so whichever stack
 * ApexStack chooses can be dropped in without touching the form.
 *
 * TODO — wire up, in this order of importance:
 *   1. Email notification  (Resend / SendGrid / AWS SES / Postmark)
 *   2. CRM record          (HubSpot / Pipedrive / Zoho / Salesforce)
 *   3. Spam verification   (Cloudflare Turnstile / hCaptcha / reCAPTCHA)
 *
 * Until (1) is connected, submissions are logged server-side only. Do not launch
 * without it — the form will appear to work while enquiries go nowhere.
 */

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  details?: string;
  consent?: boolean;
  /** Honeypot: any value means a bot filled it. */
  website?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_DETAIL_LENGTH = 20;

function clean(value: unknown, max = 5000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Malformed request body." }, { status: 400 });
  }

  // Honeypot. Return success so bots do not learn they were caught.
  if (clean(payload.website)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const enquiry = {
    name: clean(payload.name, 200),
    company: clean(payload.company, 200),
    email: clean(payload.email, 200),
    phone: clean(payload.phone, 50),
    country: clean(payload.country, 100),
    service: clean(payload.service, 200),
    budget: clean(payload.budget, 100),
    timeline: clean(payload.timeline, 100),
    details: clean(payload.details),
    consent: payload.consent === true,
    receivedAt: new Date().toISOString(),
  };

  // Server-side validation. The client validates too, but never trust that.
  const errors: string[] = [];
  if (!enquiry.name) errors.push("name");
  if (!enquiry.email || !EMAIL_PATTERN.test(enquiry.email)) errors.push("email");
  if (!enquiry.service) errors.push("service");
  if (enquiry.details.length < MIN_DETAIL_LENGTH) errors.push("details");
  if (!enquiry.consent) errors.push("consent");

  if (errors.length > 0) {
    return NextResponse.json(
      { error: "Some required fields are missing or invalid.", fields: errors },
      { status: 422 },
    );
  }

  // TODO(3): verify a spam token here before doing any work.

  try {
    // TODO(1): send the notification email to COMPANY.email, and a confirmation
    // to the enquirer. Until this exists, nothing leaves the server.
    // TODO(2): create the CRM record / deal.
    console.info("[contact] enquiry received", {
      ...enquiry,
      details: `${enquiry.details.slice(0, 120)}…`,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[contact] failed to process enquiry", error);
    return NextResponse.json(
      { error: "We could not process that enquiry. Please email us directly." },
      { status: 500 },
    );
  }
}

/** Anything other than POST is not meaningful on this route. */
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
