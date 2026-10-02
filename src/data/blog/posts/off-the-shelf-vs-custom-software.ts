import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "off-the-shelf-vs-custom-software",
  title: "Off-the-Shelf vs Custom Software: How to Compare Total Cost",
  seoTitle: "Off-the-Shelf vs Custom Software: Compare Total Cost",
  description:
    "Compare buying software with a custom build using your own workflow, licence, integration, support and exit costs. Get a decision-ready brief.",
  excerpt:
    "A practical buy-or-build comparison that starts with the workflow and makes every cost assumption visible.",
  category: "Automation & Internal Tools",
  primaryKeyword: "off-the-shelf vs custom software",
  secondaryKeywords: [
    "total cost of ownership custom software",
    "custom software vs saas cost",
    "when to build custom software instead of buying",
    "software build vs buy decision",
  ],
  published: "2026-08-12",
  updated: "2026-10-02",
  authorId: "leadership-01",
  serviceSlug: "custom-software-development",
  conversion: {
    heading: "How can ApexStack help you make the buy-or-build decision?",
    description:
      "Send ApexStack the workflow, the products you have evaluated, the steps they cannot support, and any licence or integration terms you already have. We can use a Product Blueprint, starting from US$1,000, to map the options, ownership, risks and acceptance checks. It is bounded planning and de-risking, not a production-ready custom system. If a tightly scoped core workflow is ready to implement, a Launch Sprint starts from US$2,500 and includes planning, UX direction, implementation, testing and deployment. Multiple integrations, data migration, advanced AI, compliance and extensive administration can increase the quote. Review the custom software service and pricing routes, then send the same brief you would use to compare other suppliers.",
    primaryLabel: "Discuss a buy-or-build brief",
  },
  keyTakeaway:
    "Buy off-the-shelf software when it supports the workflow you need and its full licence, configuration, integration and operating costs are acceptable. Consider a custom build when a specific, valuable workflow cannot be supported reliably and you can fund delivery, maintenance and ownership. There is no dependable seat-count threshold or universal five-year crossover. Compare both options over the same period with your own vendor terms, observed staff work, integration requirements and exit plan before committing.",
  sections: [
    {
      heading: "What are you actually deciding to buy or build?",
      blocks: [
        {
          type: "p",
          text: "Write down the result the system must produce, the people who use it, the decisions they make and the systems it must read or change. Then test a real example against the products on your shortlist. A feature list can say that approvals are supported while leaving out the exception, permission or audit step that matters to your team.",
        },
        {
          type: "list",
          items: [
            "Buy if the required workflow works with configuration you can maintain and the vendor's current terms are acceptable.",
            "Build if a valuable workflow remains unsupported and the business is willing to own a product after release.",
            "Combine the two when a bought system handles routine work but a specific differentiating step needs custom software or an integration.",
          ],
        },
        {
          type: "p",
          text: "These are decision paths, not claims that one option is always cheaper. A custom build still depends on third-party services, and a bought product can still require engineering.",
        },
      ],
    },
    {
      heading: "Which costs belong in the same comparison?",
      blocks: [
        {
          type: "p",
          text: "Use the same evaluation period and the same expected workload for each option. Ask vendors for the applicable licence and renewal terms rather than assuming a standard per-seat price or uplift. Microsoft, for example, documents different Power Automate licence arrangements and limits; the relevant arrangement depends on the proposed use, not on a generic headline price.",
        },
        {
          type: "table",
          caption: "Cost and ownership questions to price for both paths",
          head: ["Cost line", "Bought product", "Custom build"],
          rows: [
            [
              "Starting work",
              "Licences, configuration, migration and staff training",
              "Discovery, design, implementation, testing and migration",
            ],
            [
              "Integrations",
              "Connector or API access, mapping and failure handling",
              "Interfaces, mapping, tests and ongoing compatibility",
            ],
            [
              "Ongoing operation",
              "Renewals, usage charges, administration and remaining manual work",
              "Hosting, support, security updates and change requests",
            ],
            [
              "Leaving or changing",
              "Export rights, data format, transition work and notice terms",
              "Code and account ownership, handover and replacement work",
            ],
          ],
        },
        {
          type: "p",
          text: "Keep one-off and recurring amounts separate. A low initial quote is not a complete cost of ownership, and an annual subscription is not the whole cost of a bought workflow.",
        },
      ],
    },
    {
      heading: "How do you measure a workflow gap without guessing?",
      blocks: [
        {
          type: "p",
          text: "Observe the current process and record how often the gap occurs, who resolves it and how much time it takes. Include correction and review work, not just the happy path. AWS Prescriptive Guidance recommends establishing a baseline of current human-process costs before estimating the value of a replacement; its guidance is written for AI investments, but the baseline principle is useful for this comparison too.",
        },
        {
          type: "code",
          lang: "text",
          code: "observedAnnualGapCost = occurrencesPerYear\n  x measuredTimePerOccurrence\n  x financeApprovedHourlyCost\n\ncomparisonTotal = startingWork + recurringCosts\n  + integrationAndSupport + observedWorkflowGap + exitWork",
        },
        {
          type: "p",
          text: "Treat the calculation as an estimate, not a promised saving. Mark any unknown input as unknown. If you have not observed the workaround, measure a representative sample before converting a frustration into a precise business case.",
        },
        {
          type: "callout",
          text: "A good buy-or-build brief names the unsupported step and its consequence. If the gap cannot be described or measured, the case for custom work is not ready.",
        },
      ],
    },
    {
      heading: "What should you test in a vendor demonstration?",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Run an ordinary case from input to completed output using your own sample data.",
            "Run a missing, duplicate or disputed record and inspect who can correct it.",
            "Check the roles and permissions needed by the people who actually operate the process.",
            "Ask how data, attachments and configuration can be exported and what the contract says about access after cancellation.",
            "Confirm the proposed licence tier, integration access, usage limits, renewal terms and support boundary in writing.",
          ],
        },
        {
          type: "p",
          text: "Use the same acceptance cases for a custom proposal. The point is to compare delivered behaviour and responsibility, not a polished demonstration against a speculative build estimate.",
        },
      ],
    },
    {
      heading: "When does a hybrid approach make sense?",
      blocks: [
        {
          type: "p",
          text: "A hybrid design can leave routine records in a bought system and implement only the workflow it cannot handle. Define which system owns each record, how changes move between systems, and what happens when the connection fails. Otherwise the integration becomes another manual reconciliation task.",
        },
        {
          type: "p",
          text: "If you are weighing that split, send ApexStack the same workflow and acceptance cases you would send a software vendor. A bounded Product Blueprint can test whether the gap needs configuration, an integration or custom delivery before a larger build is quoted.",
        },
      ],
    },
    {
      heading: "What should the decision brief contain?",
      blocks: [
        {
          type: "list",
          items: [
            "The workflow boundary, users, expected volume and success condition.",
            "The bought options tested and the exact step each cannot support.",
            "Current staff effort and error work observed, with assumptions clearly labelled.",
            "Required systems, data access, security constraints and exceptions.",
            "Vendor terms, operating owner, exit plan and acceptance tests for both options.",
          ],
        },
        {
          type: "p",
          text: "Ask each supplier to respond to this same brief. It makes a bought configuration, a focused integration and a custom build comparable without assuming that any seat count, market price or maintenance percentage settles the decision for your business.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is custom software cheaper than SaaS in the long run?",
      answer:
        "There is no universal crossover. Compare a vendor's actual licence and renewal terms, configuration, integrations, staff workarounds and exit costs with a custom build's delivery, hosting, support and change costs over the same period. The result depends on your workflow and terms.",
    },
    {
      question: "How do you calculate total cost of ownership for software?",
      answer:
        "Choose one evaluation period and expected workload. For a bought product include licences, setup, integration, administration, observed workaround effort and exit work. For a custom build include discovery, delivery, testing, infrastructure, support, future changes and handover. Keep unknown inputs visible instead of assigning generic market percentages.",
    },
    {
      question: "When should you build custom software instead of buying?",
      answer:
        "Consider building when a specific valuable workflow is not supported by available products and your team can own the system after launch. Test the gap with real acceptance cases first. If configuration or a focused integration solves it, a full replacement may be unnecessary.",
    },
    {
      question: "Can you mix off-the-shelf and custom software?",
      answer:
        "Yes. A bought product can hold routine records while custom software handles a distinct workflow. Define the source of truth, permissions, failure recovery and owner of the integration before comparing that hybrid option with a complete replacement.",
    },
  ],
  sources: [
    {
      title: "Assessing human-process costs",
      url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-economics/assessing-costs.html",
      publisher: "AWS Prescriptive Guidance",
    },
    {
      title: "Power Automate licensing FAQ",
      url: "https://learn.microsoft.com/en-us/power-platform/admin/power-automate-licensing/faqs",
      publisher: "Microsoft Learn",
    },
  ],
  related: [
    "business-process-automation-cost",
    "crm-erp-accounting-integration-scope",
  ],
};
