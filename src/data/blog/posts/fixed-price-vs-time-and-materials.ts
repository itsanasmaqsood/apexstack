import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "fixed-price-vs-time-and-materials",
  title: "Fixed Price vs Time and Materials: Which Contract to Use",
  seoTitle: "Fixed Price vs Time and Materials Contracts",
  description:
    "How each software contract model really behaves once a project gets difficult, who carries the risk, and the hybrid most good engagements settle on.",
  excerpt:
    "Both models are sold as fair. Both quietly move risk somewhere. Understanding where is the difference between a contract that survives a hard month and one that becomes a negotiation.",
  category: "Choosing a Partner",
  primaryKeyword: "fixed price vs time and materials",
  secondaryKeywords: [
    "software development contract types",
    "fixed price software contract",
    "time and materials contract",
    "capped time and materials",
  ],
  published: "2026-08-13",
  authorId: "leadership-01",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "Use fixed price when the scope is genuinely knowable in advance — a defined integration, a migration with a known shape, a redesign of screens that already exist. Use time and materials when you are discovering the product as you build it, which describes most new software. The distinction is not about trust or budget size; it is about whether the specification can be written accurately before work starts. Where it cannot, a fixed price does not remove your risk, it converts it into padding you pay for and change requests you argue about.",
  sections: [
    {
      heading: "What each model actually does with risk",
      blocks: [
        {
          type: "p",
          text: "Every contract model is a mechanism for deciding who pays when the work turns out to be harder than expected. That is the whole of it. The rest is administration.",
        },
        {
          type: "p",
          text: "Under fixed price, the supplier absorbs the overrun. Because they absorb it, they price for it — a competent firm adds a contingency of somewhere between twenty and forty per cent depending on how vague the brief is. You pay that contingency whether or not the risk materialises. If the work goes smoothly, the supplier keeps it.",
        },
        {
          type: "p",
          text: "Under time and materials, you absorb the overrun. There is no contingency in the rate, so the same project starts cheaper. If it runs long, you pay for the extra weeks. The supplier's revenue is unaffected by efficiency, which is the honest problem with the model and worth stating plainly rather than pretending otherwise.",
        },
        {
          type: "callout",
          text: "Neither model reduces risk. They decide who holds it, and the holder charges for holding it.",
        },
      ],
    },
    {
      heading: "How fixed price behaves when the project gets hard",
      blocks: [
        {
          type: "p",
          text: "The failure mode of fixed price is not that the supplier loses money quietly. It is that the incentive structure inverts the moment the estimate proves optimistic.",
        },
        {
          type: "p",
          text: "Once a fixed-price project is running behind, every hour spent is an hour of loss. The rational response is to reduce hours: interpret the specification narrowly, classify anything ambiguous as a change request, and resist scope conversations that would have been routine under a different contract. None of this requires bad faith. It is what the contract pays for.",
        },
        {
          type: "p",
          text: "You feel this as friction. A request that seems obviously within scope to you is obviously outside it to them, because the specification is a document rather than a shared understanding, and documents have edges. The relationship becomes contractual in tone at exactly the point where you need it to be collaborative.",
        },
        {
          type: "h3",
          text: "Where fixed price genuinely works",
        },
        {
          type: "p",
          text: "When the specification really can be complete. Migrating a known dataset between two systems you can both inspect. Building an integration against a documented API with a sandbox. Rebuilding thirty screens that already exist, pixel for pixel. Anything where you could write down what \"done\" means and both parties would read it identically.",
        },
        {
          type: "p",
          text: "It also works well for a discovery phase — a fixed fee for two or three weeks that produces a specification, architecture and estimate. The scope of \"produce these documents\" is knowable even when the scope of the build is not, which is why this is the shape most sensible engagements start with.",
        },
      ],
    },
    {
      heading: "How time and materials behaves when nobody is watching",
      blocks: [
        {
          type: "p",
          text: "The failure mode of time and materials is drift. Without a fixed endpoint, weeks accumulate. Features get built because they were mentioned, not because they were prioritised. Nobody is lying about hours; the project simply has no forcing function, and software expands to fill the time available with unusual enthusiasm.",
        },
        {
          type: "p",
          text: "This is manageable, but only with instruments. A T&M engagement with no budget ceiling, no sprint demos and no written priority order is not a contract model, it is an open tab.",
        },
        {
          type: "list",
          items: [
            "A not-to-exceed ceiling per phase, at which work stops for a conversation rather than continuing on assumption.",
            "Working software demonstrated at a fixed cadence — every two weeks is the common choice — on an environment you can use yourself, not a screen-share.",
            "A single written priority order that you own and can reorder, so what gets built next is your decision rather than a default.",
            "Time reporting broken down by feature rather than by person, so you can see where money is actually going.",
            "The right to stop at any phase boundary with the code and infrastructure in your hands.",
          ],
        },
        {
          type: "p",
          text: "With those five in place, T&M behaves well. Without them, the model deserves its reputation.",
        },
      ],
    },
    {
      heading: "Which model suits which situation",
      blocks: [
        {
          type: "table",
          caption: "Matching the contract to the work",
          head: ["Situation", "Model", "Why"],
          rows: [
            [
              "New product, requirements still forming",
              "Time and materials, capped per phase",
              "A fixed price here is priced against a specification that will change; you pay for certainty you do not get",
            ],
            [
              "Data migration between known systems",
              "Fixed price",
              "Both sides can inspect the inputs and agree what finished looks like",
            ],
            [
              "Integration against a documented API",
              "Fixed price",
              "Scope is bounded by someone else's documentation",
            ],
            [
              "Rebuild of an existing interface",
              "Fixed price",
              "\"Done\" is visually verifiable against a thing that already exists",
            ],
            [
              "Ongoing product development",
              "Time and materials, or a monthly retainer",
              "There is no endpoint to fix a price against",
            ],
            [
              "Discovery and specification",
              "Fixed price, short",
              "The deliverable is documents, and their scope is knowable",
            ],
            [
              "Anything touching a system nobody fully understands",
              "Time and materials, after a paid investigation",
              "A fixed price would be a guess wearing a suit",
            ],
          ],
        },
      ],
    },
    {
      heading: "The hybrid most good engagements settle on",
      blocks: [
        {
          type: "p",
          text: "In practice the argument is usually resolved by not having it. The structure that works for most builds runs in three parts.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "A fixed-price discovery phase, typically one to three weeks. Output: a written specification, an architecture, a risk list and an estimate you can hold someone to. You should be able to take this document to a different firm — that is the test of whether it is real.",
            "A capped time-and-materials build, phased. Each phase has a ceiling and ends in working software. You can stop, continue, or change direction at each boundary without penalty.",
            "A support arrangement after launch, priced monthly, with a defined response time and a defined scope of what counts as support versus new work.",
          ],
        },
        {
          type: "p",
          text: "This gives you the thing fixed price is supposed to give you — a number you can plan around — without paying a contingency on unknowns that discovery is about to resolve. It gives the supplier protection against a scope that genuinely was not knowable. And the phase boundaries give both parties regular, low-cost opportunities to leave, which is what keeps an engagement honest.",
        },
        {
          type: "h3",
          text: "What a cap should and should not mean",
        },
        {
          type: "p",
          text: "A cap is a point at which work pauses for a decision, not a fixed price with extra steps. If your supplier treats hitting the cap as their problem to absorb, you have quietly re-created fixed price and its incentives. If they treat it as a signal to raise it without discussion, you have no cap. The correct behaviour is that work stops, you are shown what remains, and you decide.",
        },
      ],
    },
    {
      heading: "Terms that matter more than the pricing model",
      blocks: [
        {
          type: "p",
          text: "It is worth noting that several contract terms have more effect on your outcome than the choice between these two models, and they get a fraction of the attention.",
        },
        {
          type: "list",
          items: [
            "Intellectual property assigned to you on payment, explicitly covering code, designs and infrastructure configuration.",
            "Repository access from day one. If you cannot see the code as it is written, you cannot verify anything you are told about progress.",
            "A named team, with notice required before substitution. The people in the pitch and the people on the keyboard should be the same people.",
            "Defined handover: documentation, credentials, deployment process, and a working local environment someone else could set up.",
            "Termination for convenience with a short notice period. The ability to leave cheaply is what makes the rest of the contract enforceable in practice.",
          ],
        },
        {
          type: "p",
          text: "Negotiate those first. A generous pricing model attached to a contract that traps you is worse than a strict one you can walk away from.",
        },
        {
          type: "p",
          text: "If you are weighing up a proposal and are not sure which structure it really implies, we are glad to read it with you — including when the honest answer is that the terms need renegotiating rather than the price.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is fixed price ever the right choice for a new product?",
      answer:
        "For the whole build, rarely. For the first phase of it, sometimes — if that phase is deliberately narrow and well specified, such as an onboarding flow or a single integration. The broader the scope of a new product, the more the fixed price becomes a bet on a specification that is still changing, and you pay a contingency for a certainty the contract cannot actually deliver.",
    },
    {
      question: "How much contingency is built into a typical fixed-price quote?",
      answer:
        "Commonly twenty to forty per cent, scaling with how vague the brief is. This is not a markup in bad faith — it is the supplier pricing the risk they have agreed to carry. It does mean that on projects which run smoothly you have paid for an outcome that did not occur, which is the trade you are making in exchange for a predictable number.",
    },
    {
      question: "What is capped time and materials?",
      answer:
        "Time and materials with a not-to-exceed ceiling, usually set per phase. You pay for hours worked, but the supplier cannot exceed the ceiling without your agreement. Hitting the cap should trigger a conversation about what remains and what it is worth, not a silent write-off by the supplier or a silent increase by them.",
    },
    {
      question: "How do I stop a time and materials project from drifting?",
      answer:
        "Four things do most of the work: a per-phase budget ceiling, working software demonstrated on a real environment every two weeks, a single written priority list that you control, and time reported by feature rather than by person. Drift is almost always an absence of a forcing function rather than a supplier acting in bad faith.",
    },
    {
      question: "Which model is cheaper overall?",
      answer:
        "Time and materials is usually cheaper in total when the project goes roughly as expected, because you are not paying a risk premium. Fixed price is cheaper when the project goes badly, because someone else absorbs it. Since you cannot know in advance which case you are in, the more useful question is which one you can manage — and a capped, phased structure gives you most of both.",
    },
  ],
};
