import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "what-is-a-discovery-phase",
  title: "What a Discovery Phase Is, and Why It Is Not a Delay",
  seoTitle: "Software Discovery Phase: What It Is and Costs",
  description:
    "What a discovery phase produces, what it costs, and how to tell a real one from two weeks of workshops that end in a slide deck.",
  excerpt:
    "The most common objection to discovery is that it delays the build. It usually does the opposite — and there is a straightforward test for whether the one you are being sold is real.",
  category: "Choosing a Partner",
  primaryKeyword: "software discovery phase",
  secondaryKeywords: [
    "discovery phase cost",
    "what is a discovery phase in software",
    "product discovery deliverables",
    "software project scoping phase",
  ],
  published: "2026-08-13",
  authorId: "leadership-03",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "A discovery phase is a short, fixed-price engagement — typically one to three weeks and roughly five to twelve per cent of the expected build cost — that converts an idea into a specification, an architecture, a risk list and an estimate somebody can be held to. The test of a real one is portability: you should be able to take its output to a different development firm and get a comparable quote. If the deliverable only makes sense to the firm that produced it, you bought a sales document.",
  sections: [
    {
      heading: "What discovery is for",
      blocks: [
        {
          type: "p",
          text: "Estimating software is guessing about work nobody has done yet. The size of the guess depends almost entirely on how much is unknown, and at the point you first speak to a development firm, nearly everything is unknown — to them and, more often than anyone admits, to you.",
        },
        {
          type: "p",
          text: "Discovery exists to shrink that unknown before anyone commits to a number. It is the difference between \"a customer portal, probably three to six months\" and \"these eleven screens, these four integrations, this data model, this many weeks, and here are the two things that could still move it.\"",
        },
        {
          type: "p",
          text: "The objection is always the same: this delays the build by three weeks. It rarely does. Three weeks of specification typically removes considerably more than three weeks of building the wrong thing, and it removes them from the expensive end of the project where changes cost the most.",
        },
        {
          type: "callout",
          text: "Every hour of ambiguity resolved on paper is several hours not spent resolving it in code that already exists.",
        },
      ],
    },
    {
      heading: "What actually happens during it",
      blocks: [
        {
          type: "p",
          text: "A real discovery phase is mostly interrogation, not workshops. The bulk of the value comes from a small number of uncomfortable questions being asked early enough to matter.",
        },
        {
          type: "list",
          items: [
            "Problem definition. What is broken now, who feels it, and what do they currently do instead. If nobody has a workaround, the problem may not be real enough to pay for a solution.",
            "User interviews with the people who will actually use the thing — not only the person commissioning it. These two groups want different software surprisingly often.",
            "A technical audit of what already exists: systems to integrate with, data to migrate, the quality of that data, and who still understands it.",
            "Data modelling. Sketching the core entities and their relationships surfaces more hidden complexity per hour than any other discovery activity.",
            "The edge cases: permissions, failure states, what happens when two people act at once, what the regulator requires.",
            "Prioritisation. Everything named gets sorted into the first release, the second, and the list of things that were mentioned but should not be built.",
          ],
        },
        {
          type: "p",
          text: "Interface sketching happens too, but later and lighter than most people expect. Screens are easy to redraw. A data model that turns out to be wrong after four months of development is not.",
        },
      ],
    },
    {
      heading: "What you should receive at the end",
      blocks: [
        {
          type: "p",
          text: "The deliverables are what separate discovery from a long sales process. Ask for these by name before agreeing to anything.",
        },
        {
          type: "table",
          caption: "Discovery deliverables and what each is for",
          head: ["Deliverable", "What it contains", "What it prevents"],
          rows: [
            [
              "Functional specification",
              "Every screen and behaviour, written so two people read it identically",
              "The mid-project argument about whether something was in scope",
            ],
            [
              "Data model",
              "Core entities, relationships, and the awkward ones",
              "The expensive rewrite when the model does not fit reality",
            ],
            [
              "Architecture outline",
              "Stack, hosting, integrations, and why each was chosen",
              "Decisions being made silently by whoever starts first",
            ],
            [
              "Risk register",
              "What could go wrong, likelihood, and the plan for each",
              "Surprises presented as inevitabilities",
            ],
            [
              "Phased delivery plan",
              "What ships first, second, and what is deferred",
              "Building everything at once and launching nothing",
            ],
            [
              "Estimate with ranges",
              "Cost and time per phase, with the assumptions stated",
              "A single number nobody can interrogate",
            ],
          ],
        },
        {
          type: "h3",
          text: "The portability test",
        },
        {
          type: "p",
          text: "Here is the one check worth applying to any discovery proposal. Ask: could I take these deliverables to another firm and get a comparable quote?",
        },
        {
          type: "p",
          text: "If yes, the output is real. It documents your product rather than the supplier's pitch, and it has value independent of who wrote it. If no — if the deliverable is a deck of themes, personas and a phased roadmap with no specification underneath — you have paid for a sales asset. That is the difference, and it is visible in the deliverables list before you sign.",
        },
      ],
    },
    {
      heading: "What it costs, and what that buys",
      blocks: [
        {
          type: "p",
          text: "As an observed market range, discovery runs at roughly five to twelve per cent of the expected build cost, or a fixed fee in the region of USD 3,000 to 25,000 depending on the size and messiness of the problem. Duration is typically one to three weeks; beyond four, the phase has usually stopped converging and started expanding.",
        },
        {
          type: "table",
          caption: "Typical shapes",
          head: ["Project", "Discovery length", "Range", "Driven by"],
          rows: [
            [
              "Single-platform MVP, greenfield",
              "1 week",
              "USD 3,000–8,000",
              "Few integrations, no legacy data",
            ],
            [
              "Multi-role product with integrations",
              "2 weeks",
              "USD 8,000–15,000",
              "Permission matrix, third-party APIs",
            ],
            [
              "Replacing a system in daily use",
              "2–3 weeks",
              "USD 12,000–25,000",
              "Undocumented behaviour, data quality, migration",
            ],
            [
              "Regulated domain",
              "3 weeks+",
              "USD 20,000+",
              "Compliance scope must be established before architecture",
            ],
          ],
        },
        {
          type: "p",
          text: "These are market ranges rather than any single firm's rate card, and the variable that moves them most is not project size but how much nobody currently knows.",
        },
        {
          type: "p",
          text: "The fee should be fixed. Discovery is one of the few phases where scope genuinely is knowable in advance, because the deliverables are documents. A supplier who wants to run discovery on time and materials has not defined its output.",
        },
      ],
    },
    {
      heading: "When you can skip it",
      blocks: [
        {
          type: "p",
          text: "Not every project needs one, and pretending otherwise is how discovery earned its reputation as a billing exercise.",
        },
        {
          type: "list",
          items: [
            "You already have a written specification that another party could quote from. Then you have done discovery; do not pay for it twice.",
            "The work is genuinely bounded and inspectable — one integration against a documented API, a migration between two systems you can both see.",
            "The build is small enough that discovery would be a meaningful fraction of the total. Below roughly USD 15,000 of work, a long conversation and a written scope will usually do.",
            "You are testing demand rather than building a product, and the honest next step is a landing page and some conversations rather than any software at all.",
          ],
        },
        {
          type: "p",
          text: "Conversely, the case where skipping it is most tempting and most costly: replacing a system that people currently rely on. The behaviour of that system is not documented anywhere, it lives in the habits of the people using it, and finding that out after the replacement ships is how projects acquire a second budget.",
        },
      ],
    },
    {
      heading: "Making it worth the money",
      blocks: [
        {
          type: "p",
          text: "Discovery is unusually sensitive to how the client participates. The same three weeks with the same firm produces very different documents depending on a few things you control.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Put a decision-maker in the room. Discovery generates decisions faster than most organisations make them; someone with authority has to be present or the output fills with open questions.",
            "Give access to real users, not proxies for them. An hour with someone who does the job daily beats a day of internal speculation about what they need.",
            "Hand over the messy artefacts — the spreadsheet everyone actually uses, the exported data, the process document that is out of date. These are more informative than any brief.",
            "Say the budget out loud. Discovery's job is to fit a solution to a constraint; withholding the constraint means the plan comes back unaffordable and has to be redone.",
            "Argue with the draft. The specification is meant to be contested while it is cheap to change. Silent approval is the most expensive form of agreement in this process.",
          ],
        },
        {
          type: "p",
          text: "If you are considering a build and are not sure whether you need discovery or already have what it would produce, send us what you have written down. It is usually a short conversation to establish which of the two situations you are in.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does a software discovery phase cost?",
      answer:
        "As an observed market range, roughly five to twelve per cent of the expected build cost — commonly USD 3,000 to 25,000 depending on complexity. It should be a fixed fee, because unlike a build, the deliverables of discovery are knowable in advance. The main cost driver is how much is currently undocumented rather than how large the eventual system will be.",
    },
    {
      question: "How long should discovery take?",
      answer:
        "One to three weeks for most projects. Regulated domains or replacements of systems in daily use can justify longer. Past about four weeks, discovery has usually stopped converging on answers and started generating new questions, which is a sign the scope needs narrowing rather than the phase extending.",
    },
    {
      question: "How do I know if a discovery phase is genuine?",
      answer:
        "Apply the portability test: could you take the deliverables to a different development firm and get a comparable quote? A real discovery produces a functional specification, data model, architecture outline and estimate that stand on their own. If the output is a deck of personas, themes and a roadmap with no specification underneath, it documents the supplier's pitch rather than your product.",
    },
    {
      question: "Can I skip discovery to save time?",
      answer:
        "Sometimes. If you already have a specification another firm could quote from, or the work is genuinely bounded — one documented integration, a migration between two inspectable systems — then skip it. The case where skipping is most tempting and most expensive is replacing a system people currently rely on, because that system's real behaviour is undocumented and lives in its users' habits.",
    },
    {
      question: "Should discovery be done by the firm that will build the software?",
      answer:
        "Usually yes, since the team that will build it absorbs context that is hard to transfer in a document. The risk is that discovery becomes a sales exercise for the build. Protect against it by insisting the deliverables pass the portability test, and by agreeing up front that you may take them elsewhere without penalty.",
    },
  ],
};
