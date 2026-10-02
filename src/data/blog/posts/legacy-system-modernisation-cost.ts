import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "legacy-system-modernisation-cost",
  title: "How Much Does Legacy System Modernisation Cost?",
  seoTitle: "Legacy System Modernisation Cost: What to Budget",
  description:
    "Build a legacy modernisation budget around the application, data, dependencies, testing and cutover. Compare rehost, refactor and replacement proposals.",
  excerpt:
    "A way to scope a legacy modernisation estimate before committing to a rehost, refactor, replacement or rebuild.",
  category: "Legacy Modernisation",
  primaryKeyword: "legacy system modernisation cost",
  secondaryKeywords: [
    "legacy application migration cost",
    "cost to replace a legacy system",
    "rehost vs refactor vs rebuild cost",
    "legacy modernisation budget planning",
    "data migration cost estimate",
  ],
  published: "2026-08-12",
  updated: "2026-10-02",
  authorId: "leadership-01",
  serviceSlug: "enterprise-software",
  conversion: {
    heading: "How can ApexStack help you scope a legacy-system decision?",
    description:
      "Send ApexStack the application boundary, current hosting, live integrations, data sources, critical workflows and the reason you need to change. We can use a Product Blueprint, starting from US$1,000, to map the options, unknowns, ownership and acceptance checks. It is bounded planning and de-risking, not a promise to modernise the whole estate for that price. Where one tightly scoped first release or core workflow is ready, a Launch Sprint starts from US$2,500 and covers planning, UX direction, implementation, testing and deployment. Multiple integrations, data migration, compliance and extensive administration can increase the quote. Compare the resulting scope with the enterprise software service and pricing pages, then send the same requirements to any other supplier you are considering.",
    primaryLabel: "Discuss a modernisation brief",
  },
  keyTakeaway:
    "There is no reliable market price for modernising an unspecified legacy system. A useful estimate identifies which applications and workflows are in scope, the chosen treatment for each, the data and integrations that must move, and the testing, parallel running and cutover required. Rehosting, refactoring, replacing and rebuilding buy different outcomes. Ask suppliers to price the same acceptance cases and operating responsibilities; keep unknowns visible until an assessment resolves them.",
  sections: [
    {
      heading: "What determines the cost of a legacy modernisation?",
      blocks: [
        {
          type: "p",
          text: "Start with the business reason for changing the system: unsupported infrastructure, expensive maintenance, a workflow that no longer fits, or a dependency that prevents a new product from launching. The lowest-cost technical move may leave that problem intact. AWS Prescriptive Guidance recommends assessing applications against business and technical criteria before selecting a migration strategy, rather than assigning one treatment to an entire portfolio.",
        },
        {
          type: "list",
          items: [
            "Scope: the applications, capabilities and users that must change, and what can stay as it is.",
            "Dependencies: upstream and downstream systems, their owners, access methods and test environments.",
            "Data: quality, volume, retention, permissions and reconciliation requirements.",
            "Continuity: the acceptable interruption, parallel operation, rollback and decommissioning plan.",
            "Ownership: who will run, support and change the result after handover.",
          ],
        },
        {
          type: "p",
          text: "Microsoft's application-modernisation assessment guidance likewise starts with an inventory of applications, data and infrastructure and a cost analysis. Neither source supplies a universal project quote; their useful common point is that the estimate depends on the estate being assessed.",
        },
      ],
    },
    {
      heading: "How do rehost, refactor, replace and rebuild differ?",
      blocks: [
        {
          type: "table",
          caption: "Compare the outcome of each treatment before comparing prices",
          head: ["Treatment", "What changes", "What still needs checking"],
          rows: [
            [
              "Rehost",
              "Move the application to a different operating environment with limited application changes.",
              "Compatibility, infrastructure cost, security and the unchanged maintenance burden.",
            ],
            [
              "Replatform",
              "Change selected platform components while keeping much of the application behaviour.",
              "Runtime or database compatibility, operations, testing and data movement.",
            ],
            [
              "Refactor or rearchitect",
              "Change code or system boundaries to address a defined limitation.",
              "Behavioural parity, interfaces, deployment boundaries and regression tests.",
            ],
            [
              "Replace",
              "Adopt another product for the required capability.",
              "Workflow fit, licences, configuration, integrations, migration and exit terms.",
            ],
            [
              "Rebuild",
              "Implement the required capability anew.",
              "Feature decisions, data meaning, cutover, training and long-term product ownership.",
            ],
          ],
        },
        {
          type: "p",
          text: "These are choices about scope and outcome, not a ranked price list. AWS advises selecting a migration treatment using business drivers and application-level evidence; different components of the same application may need different treatments. Ask suppliers to state which components their proposal changes and which limitations remain.",
        },
      ],
    },
    {
      heading: "What should an assessment deliver before a full quote?",
      blocks: [
        {
          type: "p",
          text: "An assessment should reduce the unknowns that would otherwise appear as change requests. Request a current-state map, a target outcome and a list of tests that will show whether the chosen approach works. The work can be bounded without pretending that every system needs the same discovery duration or fee.",
        },
        {
          type: "list",
          items: [
            "An inventory of applications, data stores, scheduled jobs and external connections, with an owner for each.",
            "A map of the workflows and business rules that must survive or deliberately change.",
            "A data profile showing records that cannot be mapped or reconciled under the proposed target rules.",
            "Representative acceptance cases, including an ordinary transaction, an exception and a failed integration.",
            "Options with explicit assumptions, exclusions, dependencies, operating costs and a cutover approach.",
          ],
        },
        {
          type: "p",
          text: "A diagram alone is not an estimate. The buyer needs to know which gaps were tested, which remain assumptions and who must make a business decision before delivery can be priced further.",
        },
      ],
    },
    {
      heading: "Where can hidden behaviour change the estimate?",
      blocks: [
        {
          type: "p",
          text: "A replacement can fail even when its visible screens look right. Check whether scheduled jobs, database rules, reports and integration mappings change records or apply decisions that are absent from the written specification. Treat these as investigation points, not as a claim that every legacy system contains them.",
        },
        {
          type: "p",
          text: "For example, a report and the application might use different definitions of an active customer. That is an illustrative risk, not an ApexStack client story. Capture representative inputs and expected outputs, then ask the business owner which behaviour should continue. Test that decision against the proposed target before assuming parity.",
        },
        {
          type: "callout",
          text: "If a rule is not understood, record it as an open decision with an owner. Do not hide it inside a fixed-price estimate.",
        },
      ],
    },
    {
      heading: "How should data, integrations and cutover be costed?",
      blocks: [
        {
          type: "p",
          text: "Price the work that proves each transition, not just the act of copying records or connecting an API. A data migration may need profiling, mapping, trial loads, reconciliation and sign-off. An integration may need access approvals, transformation rules, failure handling and partner testing. The relevant work depends on the actual systems and data.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Identify the source of truth for each record and the owner who can approve a mapping.",
            "Test a representative data extract before estimating the full migration.",
            "List every integration's interface, account owner, test environment and failure behaviour.",
            "Define how old and new systems will be compared if they run together.",
            "Specify the cutover decision, rollback condition, support owner and decommissioning tasks.",
          ],
        },
        {
          type: "p",
          text: "The AWS portfolio-assessment guidance calls out dependencies and data-conversion scope when sequencing application work. Use that discipline to make the quote inspectable; it does not justify a generic number of rehearsal runs or a promised cutover time.",
        },
      ],
    },
    {
      heading: "How can you compare modernisation proposals?",
      blocks: [
        {
          type: "p",
          text: "Give each supplier the same application boundary, required outcomes and acceptance cases. Ask for a cost breakdown by assessment, implementation, data, integrations, testing, transition and ongoing operation. Keep buyer-provided costs and unknowns separate from supplier commitments.",
        },
        {
          type: "list",
          items: [
            "Which systems and workflows are included, excluded or left unchanged?",
            "What evidence supports the proposed rehost, refactor, replacement or rebuild?",
            "Which data exceptions and integrations are priced, and which depend on further access?",
            "Who owns the code, accounts, operating instructions and support after cutover?",
            "What tests, rollback conditions and decommissioning work are included?",
          ],
        },
        {
          type: "p",
          text: "If those answers are not available yet, commission a bounded assessment before seeking a whole-programme price. ApexStack can help turn the existing system and its unknowns into a decision brief; the contact route is the primary next step, with service scope and starting offers available on the enterprise software and pricing pages.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does it cost to modernise a legacy system?",
      answer:
        "The cost cannot be estimated reliably from the phrase legacy system alone. Define the applications and workflows in scope, select a treatment for each, and assess data, integrations, testing, cutover and ongoing ownership. Ask suppliers to price the same acceptance cases and to label unresolved assumptions.",
    },
    {
      question: "Is refactoring cheaper than rebuilding?",
      answer:
        "It depends on the current code, the required behaviour and what can be reused. Refactoring can preserve useful behaviour while changing selected code or boundaries; rebuilding requires decisions about the target capability and a way to prove it works. Compare scoped proposals rather than applying a universal ratio.",
    },
    {
      question: "What should a discovery phase include?",
      answer:
        "It should produce an inventory and dependency map, a profile of data and business rules, representative acceptance cases, treatment options, assumptions and a proposed cutover approach. Set the assessment boundary and deliverables before agreeing its fee; there is no dependable standard duration for an unspecified system.",
    },
    {
      question: "Does moving a legacy application to the cloud save money?",
      answer:
        "A move changes the cost structure but does not by itself prove a saving. Compare current and proposed infrastructure, licences, support, migration and operating work for the same workload. Rehosting may leave application limitations unchanged; further changes require their own case.",
    },
  ],
  sources: [
    {
      title: "Prioritisation and migration strategy",
      url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/prioritization-and-migration-strategy.html",
      publisher: "AWS Prescriptive Guidance",
    },
    {
      title: "Assess your application modernisation needs",
      url: "https://learn.microsoft.com/en-us/azure/app-modernization-guidance/assess/",
      publisher: "Microsoft Learn",
    },
  ],
  related: [
    "integrating-legacy-systems-with-modern-saas",
    "off-the-shelf-vs-custom-software",
  ],
};
