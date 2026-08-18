/**
 * Company facts, in one place.
 *
 * Everything the site says about ApexStack as a legal and contactable entity is
 * defined here, so replacing a placeholder is a one-line change rather than a
 * search across a dozen files.
 *
 * Anything still unknown is marked `TODO:` in its value and rendered through
 * `isTodo()` so the UI can present it honestly rather than printing a fake.
 */

export const COMPANY = {
  /** Public-facing brand. Always this, never the parent entity. */
  brand: "ApexStack",
  /** Legal entity, used only where legally appropriate. */
  legalName: "APEXMART INTERNET PRIVATE LIMITED",
  entityType: "Private Limited Company",
  country: "India",
  status: "Active",

  email: "apexstack.dev@gmail.com",

  // --- Still to be supplied -------------------------------------------------
  phone: "TODO: phone number",
  addressLine1: "TODO: office address line 1",
  addressLine2: "TODO: city, state, postal code",
  registrationNumber: "TODO: CIN / company registration number",
  gstin: "TODO: GSTIN (if applicable)",
  foundedYear: "TODO: founding year",
  mapsEmbedUrl: "TODO: Google Maps embed URL",
  /**
   * Direct booking link — a Cal.com or Calendly event.
   *
   * Every "Book a Discovery Call" button on the site routes through
   * `bookingHref()` below. While this is a TODO the buttons fall back to the
   * contact form; the moment a real URL lands here, all of them switch to
   * one-click booking with no other change.
   */
  calendlyUrl: "https://cal.com/apexstack/discovery",
  whatsappUrl: "TODO: WhatsApp business link",

  businessHours: [
    { days: "Monday – Friday", hours: "TODO: e.g. 09:00 – 18:00 IST" },
    { days: "Saturday", hours: "TODO: hours or 'Closed'" },
    { days: "Sunday", hours: "Closed" },
  ],

  /** First-response commitment shown across the site. */
  responseTime: "within 24 hours",
} as const;

export const SOCIALS = [
  { label: "LinkedIn", href: "TODO: LinkedIn company URL" },
  { label: "Instagram", href: "https://www.instagram.com/apexstack.dev" },
  { label: "Facebook", href: "TODO: Facebook page URL" },
] as const;

/**
 * Where the primary call-to-action points.
 *
 * The two studios ApexStack is measured against — ignytlabs.com and
 * dreamlaunch.studio — both send every CTA straight to a Cal.com page: pick a
 * day, pick a slot, done. No form, no waiting for a reply. That is the flow
 * this function exists to switch on.
 *
 * Until a booking URL is supplied it returns the contact form, so nothing is
 * ever broken — just slower to convert.
 */
export function bookingHref(): string {
  return isTodo(COMPANY.calendlyUrl) ? "/contact" : COMPANY.calendlyUrl;
}

/** True when the CTA leaves our domain, so links can set target/rel correctly. */
export function bookingIsExternal(): boolean {
  return !isTodo(COMPANY.calendlyUrl);
}

/**
 * Spread onto any "Book a Discovery Call" link. Keeps each button's own styling
 * untouched — this only decides where it goes and, once the destination is
 * off-site, opens it in a new tab so the visitor keeps the site behind them.
 */
export function bookingLinkProps(): {
  href: string;
  target?: "_blank";
  rel?: string;
} {
  return bookingIsExternal()
    ? { href: bookingHref(), target: "_blank", rel: "noopener noreferrer" }
    : { href: bookingHref() };
}

/** True when a value is still an unfilled placeholder. */
export function isTodo(value: string): boolean {
  return value.startsWith("TODO:");
}

/**
 * Renders a value for display, or a neutral fallback when it is still a
 * placeholder — so the page never prints the literal word "TODO" to a visitor.
 */
export function orFallback(value: string, fallback = "Available on request"): string {
  return isTodo(value) ? fallback : value;
}
