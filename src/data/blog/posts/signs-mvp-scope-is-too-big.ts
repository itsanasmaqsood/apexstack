import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "how-to-know-if-your-mvp-is-too-big",
  title: "How to Know If Your MVP Scope Is Too Big",
  seoTitle: "Is Your MVP Scope Too Big? 5 Warning Signs",
  description: "Use five warning signs to identify an oversized MVP scope, cut secondary workflows and define evidence for a focused first release.",
  excerpt: "Five practical warning signs that an MVP is trying to serve too many users, workflows or assumptions before the first release.",
  category: "MVP & Startups",
  primaryKeyword: "how to know if your MVP is too big",
  secondaryKeywords: [
    "MVP scope too big",
    "MVP scope warning signs",
    "how to reduce MVP scope",
  ],
  published: "2026-06-27",
  updated: "2026-08-25",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "Your MVP scope is probably too big when it serves several primary users, combines competing workflows, leaves exclusions undefined, postpones failure states or cannot be accepted with specific evidence. Reduce it to one core user journey, write down what version one will not include, keep repository and account ownership clear, and agree how the team will decide whether the release is useful before implementation begins.",
  sections: [
    {
      heading: "How can you tell if your MVP scope is too big?",
      blocks: [
        { type: "p", text: "An MVP is too big when the first release is expected to prove several products at once. Warning signs include multiple primary users, competing core workflows, undefined exclusions, acceptance criteria that cannot be tested and infrastructure needed only for hypothetical future scale." },
        { type: "p", text: "The first useful artefact is a decision record, not a longer feature list. It should identify the user, the core journey, the release boundary and the evidence that will be reviewed before more scope is approved." }
      ],
    },
    {
      heading: "Which decisions should be made before work begins?",
      blocks: [
        { type: "p", text: "A written decision record keeps reducing avoidable delivery risk from becoming a chain of assumptions. It should be short enough to review and specific enough that design, engineering and the buyer are discussing the same outcome." },
        {
          type: "list",
          ordered: true,
          items: [
            "Write down the primary user, their trigger and the outcome the product must support.",
            "Define what is deliberately excluded from the first release.",
            "Agree how access, data, failures and exceptions will be handled.",
            "Make repository, hosting, domain and third-party account ownership explicit.",
            "Choose acceptance evidence before implementation begins.",
            "Review buyer evidence, scope boundaries, ownership, acceptance criteria and a maintainable handover before approving the delivery plan.",
          ],
        }
      ],
    },
    {
      heading: "What evidence should a buyer request?",
      blocks: [
        { type: "p", text: "Confidence is not evidence. Look for a traceable connection between the buyer problem, planned behaviour, quality checks, deployment ownership and the final handover." },
        { type: "p", text: "Where a tool or platform is central, verify export, account access and operating responsibilities in the actual setup. A demonstration is useful only when it exercises the important path and its failure states; it should also show how the plan addresses buyer evidence, scope boundaries, ownership, acceptance criteria and a maintainable handover." }
      ],
    },
    {
      heading: "How should the first release be scoped?",
      blocks: [
        { type: "p", text: "Use a single core workflow as the boundary. Include the states required to complete that workflow, the minimum administration needed to operate it and the checks needed to release it safely. Move secondary audiences, speculative automation and convenience features into a later decision queue." },
        { type: "p", text: "The scope should also say what happens when the ideal path fails. Empty states, invalid input, permission errors, unavailable integrations and manual recovery are part of the product. Leaving them unnamed does not remove the work; it only postpones the decision." }
      ],
    },
    {
      heading: "Which five warning signs show the MVP is too big?",
      blocks: [
        {
          type: "list",
          items: [
            "The proposal promises an outcome without defining acceptance evidence.",
            "The schedule is fixed while the workflow, roles or integrations remain unclear.",
            "The buyer will not control the repository, deployment accounts or essential third-party services.",
            "Quality is described as a final testing phase instead of checks attached to each important behaviour.",
            "The handover depends on one person's memory rather than accessible documentation and accounts.",
          ],
        },
        { type: "p", text: "None of these signals automatically makes a provider or tool unsuitable. They mean the buyer needs a clearer answer before treating the plan as dependable." }
      ],
    },
    {
      heading: "How should a founder choose the next step?",
      blocks: [
        { type: "p", text: "Choose the next step that produces decision-quality evidence. That may be a product blueprint, a technical review, a prototype or a tightly scoped launch sprint. The right choice depends on what is still unknown, not on how many features can be placed in a proposal." },
        { type: "p", text: "Bring the current brief, constraints, existing assets and non-negotiable integrations to the first conversation. A useful partner should be able to separate confirmed requirements from assumptions and explain what must be learned before a larger commitment." }
      ],
    },
  ],
  faqs: [
    {
      question: "What should be decided first?",
      answer: "Decide who the primary user is, which single workflow matters most, what is excluded and what evidence will show that the release is acceptable.",
    },
    {
      question: "How can a buyer reduce delivery risk?",
      answer: "Use a written scope, verify account and code ownership, attach acceptance checks to important behaviour and include failure states and handover in the delivery plan.",
    },
    {
      question: "When should the scope expand?",
      answer: "Expand only after the core workflow has produced evidence that the next feature, role or integration is necessary. A longer wish list is not evidence.",
    },
  ],
};
