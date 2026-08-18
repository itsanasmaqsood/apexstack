import { NextResponse } from "next/server";

/**
 * Newsletter subscription endpoint.
 *
 * TODO — connect to the real list provider (beehiiv, Mailchimp, ConvertKit,
 * Resend Audiences). Until then this validates and accepts, logging server-side
 * so nothing is silently lost, but no subscriber is actually stored anywhere.
 *
 * Do not promote the newsletter publicly until this is wired up.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim().slice(0, 200) : "";
  } catch {
    return NextResponse.json({ error: "Malformed request body." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 422 });
  }

  try {
    // TODO: forward to the list provider here.
    console.info("[subscribe] pending subscriber", { email, at: new Date().toISOString() });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[subscribe] failed", error);
    return NextResponse.json({ error: "Could not subscribe." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
