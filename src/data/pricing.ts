/**
 * ApexStack's two public entry offers.
 *
 * Prices are starting points, not promises that every product fits the same
 * scope. Keeping the copy here prevents the contact form, pricing page and
 * future service pages from drifting into different offers.
 */

export interface PricingOffer {
  id: "product-blueprint" | "launch-sprint";
  name: string;
  startingPriceUsd: number;
  priceLabel: string;
  summary: string;
  suitableFor: string;
  includes: string[];
  boundary: string;
}

export const PRICING_PAGE = {
  seoTitle: "Product Blueprint & Launch Sprint Pricing | ApexStack",
  seoDescription:
    "Start with a US$1,000 Product Blueprint or a US$2,500 Launch Sprint. See what each ApexStack engagement includes and where scope changes the quote.",
  eyebrow: "PRICING",
  title: "Two ways to start. Scope decides what comes next.",
  intro:
    "The starting price is public. The written scope still matters, because a planning decision and a production release are not the same engagement.",
  includedHeading: "What the starting scope can include",
  boundaryEyebrow: "WHAT CHANGES THE QUOTE",
  boundaryHeading: "The boundary is part of the product decision",
  boundaryIntro:
    "A price is useful only when the buyer can see the assumption behind it. We define the first release, its acceptance checks and its dependencies before implementation begins.",
  ctaEyebrow: "START WITH THE PROBLEM",
  ctaHeading: "We will tell you which starting point fits",
  ctaBody:
    "Describe the user, the workflow and what must be true after the first engagement. If the scope does not fit either starting offer, we will explain why before proposing a larger phase.",
  contactLabel: "Send project details",
  callLabel: "Book a discovery call",
} as const;

export const PRICING_OFFERS: readonly PricingOffer[] = [
  {
    id: "product-blueprint",
    name: "Product Blueprint",
    startingPriceUsd: 1000,
    priceLabel: "From US$1,000",
    summary:
      "A bounded planning engagement that turns one product or technical question into an evidence-based scope and next decision.",
    suitableFor:
      "Founders who need to test feasibility, define one workflow, review an existing prototype or prepare a build brief before committing to implementation.",
    includes: [
      "Problem and user outcome defined in writing",
      "One core workflow, prototype or technical risk reviewed",
      "Scope boundaries, assumptions and dependencies recorded",
      "Recommended next step with the important unknowns left visible",
    ],
    boundary:
      "A Product Blueprint is not a complete application build. The exact output is agreed before work begins.",
  },
  {
    id: "launch-sprint",
    name: "Launch Sprint",
    startingPriceUsd: 2500,
    priceLabel: "From US$2,500",
    summary:
      "End-to-end technical execution for one tightly scoped first release or core workflow, from planning through launch.",
    suitableFor:
      "Founders with a defined problem who need one team to own the technical path from scope and UX direction through implementation, testing and deployment.",
    includes: [
      "Scope definition and technical planning",
      "UX direction for the agreed workflow",
      "Implementation and review in a buyer-accessible repository",
      "Testing against agreed acceptance checks",
      "Deployment of the agreed release and technical handover",
    ],
    boundary:
      "Authentication, billing, mobile applications, advanced AI, multiple integrations, data migration, compliance requirements and extensive administration can increase the quote.",
  },
] as const;

export const PRICING_SHARED_BOUNDARIES = [
  "The written proposal defines the release, acceptance checks and what is outside scope.",
  "Third-party subscriptions, hosting usage, domains and app-store fees are paid directly by the client unless the proposal says otherwise.",
  "Ongoing maintenance, support and later product phases are separate from the first engagement unless they are explicitly included.",
] as const;
