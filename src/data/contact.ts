/** Public contact-page copy. Keep process claims conditional until measured. */
export const CONTACT_PAGE = {
  seoTitle: "Contact ApexStack — Discuss Your Product or Workflow",
  seoDescription:
    "Tell ApexStack about the product or workflow you need help with. Share the goal, constraints and current stage so we can assess a useful next step.",
  title: "Tell us what you need to build or improve.",
  intro:
    "Share the problem, who it affects and what you need to decide next. We will review your enquiry and discuss a sensible starting point if the fit is right.",
  nextHeading: "From enquiry to a possible next step",
  nextIntro: "An enquiry starts a conversation; it does not commit you to an engagement.",
  successTitle: "Your enquiry was sent.",
  successBody: "We will review the details you shared. If you need to add anything, email us at",
} as const;

export const CONTACT_ENQUIRY_TYPES = [
  {
    title: "New project",
    body: "You have a product or workflow to build and want to understand the scope, risks and likely starting point.",
    routing: "Share the user, desired outcome and any systems it must work with.",
  },
  {
    title: "Business & partnerships",
    body: "For procurement, an ongoing engineering need or a partnership proposal.",
    routing: "Tell us what kind of collaboration you have in mind.",
  },
  {
    title: "General enquiry",
    body: "For careers, press, supplier questions or anything outside a project brief.",
    routing: "Use this category and include enough context for a useful reply.",
  },
] as const;

export const CONTACT_NEXT_STEPS = [
  {
    step: "01",
    title: "Send the context",
    body: "Describe the problem, the intended users and any constraints you already know. A full specification is not required.",
  },
  {
    step: "02",
    title: "We assess the fit",
    body: "We review the enquiry and may ask for missing details before suggesting a call or a scoped starting point.",
  },
  {
    step: "03",
    title: "Agree on a next step",
    body: "If the work is a fit, we can discuss whether a Product Blueprint, a tightly scoped Launch Sprint or another approach makes sense.",
  },
] as const;

export const CONTACT_FAQS = [
  {
    q: "What should I include in my enquiry?",
    a: "Tell us what problem you want to solve, who uses the product or process, and what you have already tried. A budget range, relevant systems and constraints are helpful if you know them.",
  },
  {
    q: "Do I need a specification?",
    a: "No. A short description of the problem is enough to begin. If the scope is unclear, a Product Blueprint can help define one workflow and the decision needed before a build.",
  },
  {
    q: "Can I ask about the technical approach?",
    a: "Yes. Mention the technical decision in your enquiry and the context needed to discuss it. We can decide who should join a follow-up conversation once we understand the scope.",
  },
  {
    q: "What if the project is not a fit?",
    a: "We may say that the proposed work is outside our scope or needs a different starting point. We will not promise to take on a project before reviewing its requirements.",
  },
  {
    q: "Can we discuss confidentiality first?",
    a: "Yes. If you need confidentiality terms, mention that before sending sensitive product, customer or business information so those terms can be discussed first.",
  },
] as const;
