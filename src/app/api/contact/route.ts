import { randomUUID } from "node:crypto";

import { NextResponse } from "next/server";

import { COMPANY } from "@/data/company";

export const runtime = "nodejs";

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
  website?: string;
  turnstileToken?: string;
}

interface TurnstileResponse {
  success: boolean;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_DETAIL_LENGTH = 20;

function clean(value: unknown, max = 5000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function verifyTurnstile(token: string, request: Request): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const forwardedFor = request.headers.get("x-forwarded-for");
  const remoteIp = forwardedFor?.split(",")[0]?.trim();
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret,
      response: token,
      remoteip: remoteIp || undefined,
      idempotency_key: randomUUID(),
    }),
    cache: "no-store",
  });

  if (!response.ok) return false;
  const result = (await response.json()) as TurnstileResponse;
  return result.success;
}

async function sendEmail(message: {
  from: string;
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Contact email is not configured.");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: message.from,
      to: message.to,
      subject: message.subject,
      html: message.html,
      reply_to: message.replyTo,
    }),
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`Email provider returned ${response.status}.`);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Malformed request body." }, { status: 400 });
  }

  if (clean(payload.website)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (
    !process.env.RESEND_API_KEY ||
    !process.env.CONTACT_FROM_EMAIL ||
    !process.env.TURNSTILE_SECRET_KEY
  ) {
    return NextResponse.json(
      { error: `Online enquiries are temporarily unavailable. Please email ${COMPANY.email}.` },
      { status: 503 },
    );
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

  const token = clean(payload.turnstileToken, 2048);
  if (!token || !(await verifyTurnstile(token, request))) {
    return NextResponse.json(
      { error: "The security check expired or could not be verified. Please try again." },
      { status: 422 },
    );
  }

  const safe = Object.fromEntries(
    Object.entries(enquiry).map(([key, value]) => [key, escapeHtml(String(value || "Not provided"))]),
  );
  const from = process.env.CONTACT_FROM_EMAIL;

  try {
    await sendEmail({
      from,
      to: [COMPANY.email],
      replyTo: enquiry.email,
      subject: `New ${enquiry.service} enquiry from ${enquiry.name}`,
      html: `
        <h1>New ApexStack enquiry</h1>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Company:</strong> ${safe.company}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Country:</strong> ${safe.country}</p>
        <p><strong>Service:</strong> ${safe.service}</p>
        <p><strong>Budget:</strong> ${safe.budget}</p>
        <p><strong>Timeline:</strong> ${safe.timeline}</p>
        <p><strong>Received:</strong> ${safe.receivedAt}</p>
        <h2>Project details</h2>
        <p>${safe.details.replaceAll("\n", "<br>")}</p>
      `,
    });
  } catch (error) {
    console.error("[contact] notification delivery failed", error);
    return NextResponse.json(
      { error: `We could not send that enquiry. Please email ${COMPANY.email}.` },
      { status: 502 },
    );
  }

  try {
    await sendEmail({
      from,
      to: [enquiry.email],
      subject: "We received your ApexStack enquiry",
      html: `
        <p>Hello ${safe.name},</p>
        <p>Thank you for contacting ApexStack. We received your enquiry about ${safe.service} and will review the details you shared.</p>
        <p>If you need to add anything, reply to this email or contact ${COMPANY.email}.</p>
        <p>ApexStack</p>
      `,
      replyTo: COMPANY.email,
    });
  } catch (error) {
    console.error("[contact] confirmation delivery failed", error);
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
