import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "what-is-a-discovery-phase",
  title: "Software Discovery Phase Cost: What Should You Pay For?",
  seoTitle: "Software Discovery Phase Cost: What You Pay For",
  description:
    "Compare software discovery pricing by scope, evidence and deliverables. See what a paid discovery should answer before implementation begins.",
  excerpt:
    "There is no useful universal percentage for discovery. Compare the unknowns being investigated, the evidence you will receive and the decision it enables.",
  category: "Choosing a Partner",
  primaryKeyword: "discovery phase price",
  secondaryKeywords: [
    "software discovery phase cost",
    "product discovery pricing",
    "software discovery deliverables",
    "paid discovery phase",
  ],
  published: "2026-08-13",
  updated: "2026-08-26",
  authorId: "leadership-01",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "A software discovery phase has no reliable universal price or percentage of build cost. Compare proposals by the uncertainty they investigate, the people and systems involved, the evidence you will receive and the decision that evidence supports. ApexStack’s Product Blueprint starts from US$1,000 for one bounded product or technical question; it is a planning and de-risking engagement, not an application build.",
  sections: [
    {
      heading: "How much does a software discovery phase cost?",
      blocks: [
        {
          type: "p",
          text: "The honest answer is that discovery pricing follows the evidence gap, not a fixed percentage of the future build. Reviewing one core workflow with known users and accessible systems is a different engagement from investigating several departments, undocumented legacy software, regulated data and disputed requirements. A useful proposal names that boundary before it gives a price.",
        },
        {
          type: "p",
          text: "ApexStack’s Product Blueprint starts from US$1,000 for one bounded product or technical question. The agreed output may be a workflow definition, feasibility review, prototype assessment or technical risk decision. It does not include a complete production application. If the question is broader, the written scope and quote must broaden with it.",
        },
      ],
    },
    {
      heading: "What should the discovery price be based on?",
      blocks: [
        {
          type: "p",
          text: "Ask the supplier to show which unknowns create the work. Team size and workshop count are inputs, but they do not tell you whether the engagement will produce a decision you can use.",
        },
        {
          type: "table",
          caption: "Discovery cost drivers that can be inspected before purchase",
          head: ["Unknown to investigate", "Evidence required", "Why it changes the scope"],
          rows: [
            [
              "User problem and current workflow",
              "Research with the people doing the work, plus existing support or operational evidence",
              "More user groups and channels create more journeys to understand",
            ],
            [
              "Business rules and exceptions",
              "A map of the normal path, failure states, approvals and manual workarounds",
              "Hidden exceptions can change the product boundary",
            ],
            [
              "Existing systems and data",
              "Access to interfaces, exports, ownership records and integration documentation",
              "Undocumented dependencies require technical investigation",
            ],
            [
              "Security, privacy and compliance",
              "Named obligations, data categories and responsible reviewers",
              "Specialist review may be needed before a solution is feasible",
            ],
            [
              "Solution uncertainty",
              "Assumptions, technical options and the smallest test that could reject each option",
              "A known implementation needs less exploration than an untested mechanism",
            ],
            [
              "Decision and stakeholder access",
              "A decision owner and access to the people who hold essential context",
              "Unresolved ownership can leave the same questions open at the end",
            ],
          ],
        },
      ],
    },
    {
      heading: "What should you receive from paid discovery?",
      blocks: [
        {
          type: "p",
          text: "The deliverables should preserve the evidence and the decisions, not merely record that meetings happened. GOV.UK’s Service Manual frames discovery as understanding the problem, users, constraints, improvement opportunities and measures of success before committing to build. It also treats stopping as a valid result when the evidence does not support further investment.",
        },
        {
          type: "list",
          items: [
            "A problem statement that identifies the affected user, current behaviour and business consequence.",
            "A map of the core workflow, including offline steps, exceptions and people who operate or support it.",
            "A record of the evidence reviewed, the gaps that remain and the assumptions that still need testing.",
            "A technical context map covering current systems, data, integrations, ownership and relevant constraints.",
            "A risk and dependency list with an owner or next test for each material unknown.",
            "A recommended next decision: stop, research further, test a prototype, buy an existing product or scope implementation.",
            "If implementation is recommended, a bounded first release with exclusions and acceptance evidence.",
          ],
        },
        {
          type: "callout",
          text: "A discovery deliverable is useful when another qualified team can understand the evidence, challenge the recommendation and price the next step.",
        },
      ],
    },
    {
      heading: "Does discovery include design or development?",
      blocks: [
        {
          type: "p",
          text: "Discovery can include sketches, data checks or small technical experiments when they answer a named uncertainty. It should not quietly become the build. GOV.UK separates discovery, which investigates the problem, from alpha, where teams test possible solutions and their riskiest assumptions. That distinction helps buyers see whether they are purchasing evidence or implementation.",
        },
        {
          type: "table",
          caption: "Evidence work and implementation work compared",
          head: ["Activity", "Discovery when", "Implementation when"],
          rows: [
            [
              "Interface sketch",
              "It helps a user or stakeholder react to a workflow assumption",
              "It becomes a production design with states, accessibility and handoff detail",
            ],
            [
              "Technical prototype",
              "It tests one feasibility risk and can be discarded",
              "It must be maintained, secured, monitored and supported",
            ],
            [
              "Data sample",
              "It reveals structure, quality or migration constraints",
              "It becomes a repeatable migration with validation and rollback",
            ],
            [
              "Integration check",
              "It confirms access, documentation and a critical capability",
              "It handles production authentication, failures, limits and monitoring",
            ],
          ],
        },
      ],
    },
    {
      heading: "How should you compare discovery proposals?",
      blocks: [
        {
          type: "p",
          text: "Put the proposals side by side using the question each engagement will answer. A lower fee can be appropriate for a narrower question. It is not automatically cheaper if the supplier excludes the evidence needed for the next decision.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Write the decision you expect to make when discovery ends.",
            "List the user groups, workflows, systems and constraints included in each proposal.",
            "Ask who will gather evidence and who must be available from your organisation.",
            "Ask which artefacts you will own and whether another supplier can use them.",
            "Check whether assumptions, exclusions and unresolved questions will be visible.",
            "Separate optional implementation from the discovery fee.",
            "Confirm how the supplier will recommend stopping when further work is not justified.",
          ],
        },
      ],
    },
    {
      heading: "When can you skip a paid discovery phase?",
      blocks: [
        {
          type: "p",
          text: "Skip a separate discovery engagement when the important evidence already exists and the next unit of work is genuinely bounded. A documented change to a known system may need a technical review and written implementation scope rather than a broader product discovery.",
        },
        {
          type: "list",
          items: [
            "The primary user, workflow, exclusions and acceptance checks are already agreed in writing.",
            "The relevant repository, data, integrations and account ownership are accessible and understood.",
            "The requested change does not depend on unresolved policy, compliance or cross-team decisions.",
            "A qualified team can estimate the work without hiding major assumptions inside the quote.",
          ],
        },
        {
          type: "p",
          text: "Do not skip evidence work merely because a supplier offers a fixed implementation price. If the underlying workflow or technical boundary is unknown, the uncertainty still exists; it has only moved into contingency, change requests or delivery risk.",
        },
      ],
    },
    {
      heading: "What should you ask before paying for discovery?",
      blocks: [
        {
          type: "p",
          text: "The best questions expose the boundary and the handover. They also reveal whether the supplier is prepared to reach an answer that does not create a larger project for them.",
        },
        {
          type: "list",
          items: [
            "Which single decision is this engagement designed to support?",
            "What evidence will you collect rather than assume?",
            "Who must participate, and what access is required before the work starts?",
            "Which systems, workflows, user groups and compliance questions are excluded?",
            "What will I receive, in which format, and who owns it?",
            "How will unresolved risks and disagreements be recorded?",
            "Could the recommendation be to stop, buy or narrow the project?",
            "What would make the discovery price change after acceptance?",
          ],
        },
      ],
    },
    {
      heading: "How does ApexStack scope a Product Blueprint?",
      blocks: [
        {
          type: "p",
          text: "The Product Blueprint starts from US$1,000 and turns one product or technical question into an evidence-based scope and next decision. Before work begins, the written proposal states the problem, the agreed output, the people or systems that must be accessible, the exclusions and the decision the output should support.",
        },
        {
          type: "p",
          text: "When the evidence supports implementation, a Launch Sprint starts from US$2,500 for one tightly scoped first release or core workflow, covering planning, UX direction, implementation, testing and deployment. Authentication, billing, mobile applications, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the quote.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is a reasonable software discovery phase price?",
      answer:
        "There is no reliable universal amount or percentage. A reasonable price is tied to a written boundary: the user groups, workflows, systems and risks being investigated; the evidence and artefacts you will receive; and the decision they enable. ApexStack’s bounded Product Blueprint starts from US$1,000.",
    },
    {
      question: "Should discovery be fixed-price or time and materials?",
      answer:
        "A fixed price can work when the question, access requirements, deliverables and exclusions are genuinely bounded. Time and materials can fit open-ended research, but it should still have a decision goal, review points and a spending boundary. The contract shape matters less than whether uncertainty is visible.",
    },
    {
      question: "How long should software discovery take?",
      answer:
        "The purpose should determine the duration. Reviewing one known workflow can be smaller than researching a multi-channel service with legacy systems and regulatory constraints. Ask the supplier to connect the schedule to the evidence they need, rather than accepting a universal timeline.",
    },
    {
      question: "Is discovery part of the build cost?",
      answer:
        "Discovery and implementation purchase different things. Discovery pays for evidence and a decision; implementation pays for a working, supportable release. A supplier may credit or package fees commercially, but the proposal should keep the deliverables and boundaries visible.",
    },
    {
      question: "Can I take the discovery output to another development company?",
      answer:
        "You should confirm that before buying. Useful outputs record evidence, decisions, assumptions, exclusions and technical context in formats another qualified team can review. Provider-specific tooling may still need access or export arrangements, so ownership and handover belong in the proposal.",
    },
  ],
  sources: [
    {
      title: "How the discovery phase works",
      url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
      publisher: "GOV.UK Service Manual",
    },
    {
      title: "User research in discovery",
      url: "https://www.gov.uk/service-manual/user-research/user-research-in-discovery",
      publisher: "GOV.UK Service Manual",
    },
    {
      title: "Measuring the benefits of your service",
      url: "https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits",
      publisher: "GOV.UK Service Manual",
    },
    {
      title: "The Product Discovery handbook",
      url: "https://support.atlassian.com/jira-product-discovery/docs/the-product-management-handbook/",
      publisher: "Atlassian",
    },
  ],
};
