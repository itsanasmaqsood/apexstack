import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "ai-product-development-process",
  title: "AI Product Development: From Demo to Dependable",
  seoTitle: "AI Product Development Process: Demo to Dependable",
  description:
    "How the AI product development process really runs: feasibility spike first, data before models, and an interface built for being sometimes wrong.",
  excerpt:
    "The process for taking an AI product from a convincing demo to something a business can depend on — why the feasibility spike comes before the plan, and why data and interface decide the outcome more than the model does.",
  category: "AI Engineering",
  primaryKeyword: "AI product development process",
  secondaryKeywords: [
    "how to build an AI product",
    "AI feasibility study before development",
    "AI MVP development",
    "data readiness for AI projects",
    "designing UX for AI uncertainty",
  ],
  published: "2026-08-12",
  authorId: "leadership-03",
  serviceSlug: "ai-development",
  keyTakeaway:
    "A dependable AI product development process starts with a two-to-four-week feasibility spike rather than a plan, because you cannot estimate work whose success rate nobody has measured yet. Choose a first use case where a wrong answer is cheap to correct and a right answer is visibly valuable, fix the data before touching the model, and design the interface to show confidence, allow correction and support undo. Perceived quality comes far more from how gracefully the product handles being wrong than from which model sits behind it.",
  sections: [
    {
      heading: "Why does an AI product development process start with a spike, not a plan?",
      blocks: [
        {
          type: "p",
          text: "Conventional software estimation works because the uncertainty sits in scope, not in whether the thing can be done. A payments integration is a known quantity; the question is how many edge cases the merchant’s data will throw at it. An AI feature inverts that. The question is whether a model can perform the task on your actual data at a quality level your users will accept, and nobody — not the vendor, not the team, not the person who saw an impressive demo last week — knows the answer until it has been measured on your documents, your tickets, your transcripts.",
        },
        {
          type: "p",
          text: "So the AI product development process begins with a feasibility spike: a short, deliberately unpolished piece of work whose only output is a number and a recommendation. Take fifty to two hundred real examples, have a domain expert label the correct answer for each, then run candidate approaches against them and record how often each gets it right. Two to four weeks is usually enough. What you get back is not a prototype; it is the accuracy figure that everything downstream depends on, plus a much sharper sense of where the errors cluster.",
        },
        {
          type: "callout",
          text: "A spike that concludes the task is not yet achievable has saved you a project. That is a successful outcome, not a failed one, and the budget should be framed that way before it starts.",
        },
        {
          type: "p",
          text: "The spike also changes the conversation about scope. Once you know a classifier gets eight of ten cases right and the two failures cluster in one document type, you can design around it: route that type to a human and ship the rest.",
        },
      ],
    },
    {
      heading: "How do you choose a first AI use case that can survive being wrong?",
      blocks: [
        {
          type: "p",
          text: "Two properties matter, and they pull in the same direction. The cost of an error should be low and recoverable, and the value of a correct answer should be immediately visible to the person receiving it. Anything with a cheap error and an invisible benefit is not worth the build. Anything with an expensive error and a visible benefit belongs in phase three, once you have earned the organisation’s confidence.",
        },
        {
          type: "list",
          items: [
            "Errors are caught by a human who was going to look at the output anyway — drafting, summarising, pre-filling, suggesting a category.",
            "The work is currently done, badly or slowly, by someone whose time is measurable, so improvement is obvious without a research exercise.",
            "There is existing ground truth: past decisions, past classifications, past resolved tickets. Without it you cannot evaluate anything.",
            "The output is inspectable. A human can tell at a glance whether a summary is wrong; they cannot tell whether a risk score is wrong.",
            "The volume is high enough that a modest accuracy figure still saves real hours.",
          ],
        },
        {
          type: "p",
          text: "The use case to avoid first is the one with the most impressive slide. Autonomous decisioning against customer money, anything that emails a client without review, anything where being wrong is discovered by a regulator. Those may well be achievable eventually, but they demand a level of measured reliability that you have no basis for yet, and a failure there costs you the internal permission to try again.",
        },
      ],
    },
    {
      heading: "Why is data readiness the blocker that stalls most AI projects?",
      blocks: [
        {
          type: "p",
          text: "The model is rarely the constraint now. The constraint is that the knowledge the product needs is spread across a document management system nobody has curated since a migration, a shared drive with four versions of the same policy, a CRM where the field that matters is free text, and the head of operations who knows which of the four policies is current. None of that is an AI problem, and all of it has to be solved before an AI product can work.",
        },
        {
          type: "p",
          text: "Three questions surface most of the trouble early. Where does the authoritative version of each piece of knowledge live, and who decides it is authoritative? Is there a record of past correct decisions that can serve as an evaluation set? And can the system tell, at retrieval time, whether a document is current, superseded or draft? A retrieval system that confidently cites a policy withdrawn eighteen months ago is worse than no system, because it is wrong in a way that looks authoritative.",
        },
        {
          type: "p",
          text: "Budget for this properly. On document-heavy products, consolidating sources, resolving duplicates, tagging currency and permissions and building an evaluation set frequently takes longer than the feature on top. It is also durable: the cleaned corpus keeps its value whichever model you use next year, which is more than can be said for the prompt work.",
        },
      ],
    },
    {
      heading: "How do you design an interface for a system that is sometimes wrong?",
      blocks: [
        {
          type: "p",
          text: "Deterministic software either works or throws an error. An AI feature has a third state — plausible and wrong — and the interface is the only place that state can be handled. Three affordances do most of the work: showing the system’s own uncertainty, making correction faster than starting over, and making every action reversible.",
        },
        {
          type: "p",
          text: "Uncertainty should be expressed in the user’s terms, not the model’s. A percentage next to an answer means little to someone in accounts payable and is often poorly calibrated anyway. What works is behavioural: a low-confidence result presented in a different visual register, routed to a review queue, or shown with the source passage so it can be checked in two seconds rather than twenty.",
        },
        {
          type: "p",
          text: "Correction should be cheaper than doing the task manually. If fixing a wrong extraction means retyping the whole form, users will stop trusting the feature after the third mistake and go back to the old process, and no amount of accuracy improvement will bring them back. Inline editing, one-click rejection with a reason, and pre-filled fields the user can overwrite are the difference between a feature that survives contact with a real team and one that is quietly abandoned. Capture every correction: it is your best future evaluation data and the clearest signal of where the system actually fails.",
        },
        {
          type: "p",
          text: "Undo is non-negotiable anywhere the system writes. Every AI-originated write should be attributable, reversible and visible in an audit trail, and bulk actions should preview before they commit — ordinary product discipline, skipped surprisingly often because the demo did not need it.",
        },
      ],
    },
    {
      heading: "Why the interface decides perceived quality more than the model does",
      blocks: [
        {
          type: "p",
          text: "Two products can sit on identical models and be judged completely differently. The one that streams its answer, shows what it is doing, cites the paragraph it drew from and lets the user fix a mistake in one click reads as competent even when it is wrong. The one that spins for eleven seconds and returns a confident block of prose with no provenance reads as unreliable even when it is right, because the user has no way to verify it and no way to recover when it is not.",
        },
        {
          type: "p",
          text: "This has a direct budget implication. When quality feels insufficient, the instinct is to change model or spend on fine-tuning. Very often the cheaper and larger win is in the interaction: reduce time to first token so the wait feels shorter, show the retrieved sources so verification takes seconds, narrow the input so the user cannot ask a question the system was never going to answer well, and add a clear statement of what the feature does not cover. Those changes ship in days and move perceived quality more than a model upgrade usually does.",
        },
      ],
    },
    {
      heading: "How should an AI product development process be phased?",
      blocks: [
        {
          type: "p",
          text: "Phase the work so that something useful lands before you take on the hard parts, and so that every phase ends in a decision rather than a handover. The point of the structure is that stopping is available at each boundary and costs only what has been spent so far.",
        },
        {
          type: "table",
          caption:
            "Each phase of an AI product build, what it is for, roughly how long it runs, and the decision it exists to produce.",
          head: ["Phase", "Goal", "Typical duration", "Decision at the end"],
          rows: [
            [
              "Feasibility spike",
              "Measure achievable accuracy on real data against a labelled set",
              "2–4 weeks",
              "Proceed, reshape the use case, or stop",
            ],
            [
              "Data readiness",
              "Consolidate sources, resolve currency and permissions, build the evaluation set",
              "3–8 weeks, often parallel to design",
              "Is the corpus good enough to build on, or does a source need fixing first",
            ],
            [
              "Thin end-to-end slice",
              "One workflow working for real users internally, with correction and audit built in",
              "4–8 weeks",
              "Does the workflow save measurable time in practice",
            ],
            [
              "Assisted release",
              "Ship to real users with a human confirming every output",
              "4–8 weeks",
              "Is the correction rate low enough to widen the scope",
            ],
            [
              "Scope expansion",
              "Add document types, edge cases and adjacent workflows the slice deliberately excluded",
              "Ongoing, in increments",
              "Which remaining cases justify their build cost",
            ],
            [
              "Autonomy where earned",
              "Remove the human from the steps whose measured error rate is acceptable",
              "Incremental, per step",
              "Which specific steps have earned unattended operation",
            ],
          ],
        },
        {
          type: "p",
          text: "Note what is absent: a phase called integration at the end. Integration belongs in the thin slice. A demo reading from a spreadsheet export tells you nothing about whether the product can read the live system under real permissions, and that is not a discovery you want in month five.",
        },
      ],
    },
    {
      heading: "What does an AI product build cost, and what moves the range?",
      blocks: [
        {
          type: "p",
          text: "The figures below are market ranges observed across the AI product engineering market, not a quote from anyone. They are wide on purpose, because the same brief can sit at either end depending on data condition and compliance load.",
        },
        {
          type: "table",
          caption:
            "Observed market ranges in USD for AI product work, and the factors that move a project up the range.",
          head: ["Scope", "What it covers", "Observed market range (USD)", "What pushes it upward"],
          rows: [
            [
              "Feasibility spike",
              "Labelled evaluation set, candidate approaches tested, accuracy report and recommendation",
              "$10,000 – $30,000",
              "No existing ground truth, several data sources, specialist domain labelling",
            ],
            [
              "Single-workflow assistant",
              "One workflow end to end with correction, audit trail and evaluation harness",
              "$50,000 – $150,000",
              "Integration into a legacy system of record, SSO and per-tenant permissions",
            ],
            [
              "AI feature inside an existing product",
              "Feature shipped to production users with monitoring and rollback",
              "$80,000 – $300,000",
              "Multi-tenant isolation, existing scale, regulated data handling",
            ],
            [
              "Multi-workflow AI platform",
              "Several workflows, shared retrieval layer, admin tooling and evaluation infrastructure",
              "$250,000 upwards",
              "Data consolidation programme, SOC 2 or HIPAA scope, multi-region residency",
            ],
          ],
        },
        {
          type: "p",
          text: "The single largest swing factor is the state of the data. A client with one clean, well-governed source of truth and a searchable history of past decisions can reach a production feature for a fraction of what the same brief costs a client whose knowledge is spread across four systems and one very experienced person. Run the data audit early, because it changes the estimate more than any other input.",
        },
      ],
    },
    {
      heading: "What do you measure after launch, and what happens when it drifts?",
      blocks: [
        {
          type: "p",
          text: "Keep a golden set — a fixed collection of real inputs with agreed correct answers — and run it on every prompt change, every model version and every retrieval change, before deployment. Without it you are shipping on impressions, and prompt edits that improve one case while quietly breaking three others are extremely common. Track four things in production: the correction rate, the abandonment rate on AI-suggested actions, cost per completed task, and latency at the 95th percentile.",
        },
        {
          type: "p",
          text: "Drift is normal rather than exceptional. Providers deprecate model versions on published schedules, your users’ inputs change as the business changes, and your own corpus grows. Assume a periodic re-evaluation against the golden set is part of running the product, and give someone ownership of it. Products that degrade silently do so because nobody was assigned the job of noticing.",
        },
        {
          type: "p",
          text: "If you have a use case in mind and no idea yet whether it is achievable on your data, the feasibility spike is the right first conversation — that is where ApexStack usually starts an AI engagement, and it gives you a real number to plan against before anyone commits to a build.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does it take to build an AI product?",
      answer:
        "A feasibility spike runs two to four weeks. From there, a first workflow used by real internal users typically takes another two to four months, depending far more on the state of the data and the integration surface than on the AI work itself. Products that consolidate several data sources before they can start should expect several additional weeks for that alone.",
    },
    {
      question: "What is a feasibility spike in an AI project?",
      answer:
        "A short piece of work whose only deliverable is a measured accuracy figure on your own data. You collect fifty to two hundred real examples, have a domain expert label the correct answers, test candidate approaches against them, and report how often each succeeds and where the failures cluster. It replaces guesswork with a number you can plan and budget against.",
    },
    {
      question: "Do we need machine learning engineers to build an AI product?",
      answer:
        "For most products built on hosted foundation models, no. The work is product engineering — data pipelines, retrieval, evaluation harnesses, interface design and integration — with applied AI expertise for prompting, structured outputs and evaluation. Dedicated ML engineering becomes necessary when you are training or fine-tuning models on proprietary data, which is a smaller share of commercial AI projects.",
    },
    {
      question: "How accurate does an AI feature need to be before we can ship it?",
      answer:
        "There is no universal threshold; it depends entirely on the cost of an error and who catches it. A drafting assistant reviewed by a human before sending can ship at a level that would be unacceptable for an unattended decision. Decide the acceptable error rate and the review model together, then measure against that target rather than against an abstract benchmark.",
    },
    {
      question: "Why do AI demos work but production AI products fail?",
      answer:
        "Demos run on curated inputs, with no permissions model, no audit trail, no correction path and no long tail of unusual cases. Production traffic supplies all of those on the first day. The gap is almost never model capability — it is data quality, integration into the real system of record, and an interface that gives users a way to recover when the system is wrong.",
    },
    {
      question: "Should we build on a hosted model or run our own?",
      answer:
        "Start hosted. It removes infrastructure work from the riskiest phase and lets you find out whether the product is valuable before you invest in serving. Self-hosting becomes worth evaluating when data residency or contractual restrictions require it, or when volume is high and stable enough that inference cost outweighs the engineering and operational overhead of running the model yourself.",
    },
  ],
};
