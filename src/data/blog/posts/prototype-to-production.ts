import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "prototype-to-production",
  title: "How to Take a Software Prototype to Production",
  seoTitle: "Prototype to Production: A Readiness Framework",
  description:
    "Turn a software prototype into a production release by defining risks, controls, acceptance evidence, ownership and handover.",
  excerpt:
    "A practical framework for deciding what to harden, what to rebuild and what evidence a prototype needs before real users depend on it.",
  category: "MVP & Startups",
  primaryKeyword: "prototype to production",
  secondaryKeywords: [
    "how to make a prototype production ready",
    "production readiness checklist for startups",
    "prototype vs production code",
    "harden or rebuild a prototype",
    "MVP production readiness",
  ],
  published: "2026-08-12",
  updated: "2026-09-17",
  authorId: "leadership-02",
  serviceSlug: "product-engineering",
  keyTakeaway:
    "Take a prototype to production by replacing demo assumptions with explicit operating controls. Define the real users and permissions, move secrets into managed configuration, protect data with tested recovery, bound expensive inputs and external actions, enforce concurrency rules, add observable release checks and document ownership. Do not choose a rewrite merely because the code is untidy. First test whether the current data model, security boundary and core workflow can support the intended release.",
  sections: [
    {
      heading: "What changes when a prototype becomes a production product?",
      blocks: [
        {
          type: "p",
          text: "A prototype demonstrates a workflow under controlled conditions. A production product must keep that workflow dependable when users have different permissions, inputs are incomplete or hostile, data grows, requests overlap, external services fail and the original developer is unavailable. Production readiness is therefore an evidence and ownership problem, not a cosmetic code-cleanup exercise.",
        },
        {
          type: "p",
          text: "The transition is complete only when the team can explain who may perform each action, how failures are detected, what happens to partial work, how data is recovered, who owns the accounts and how another qualified person can operate the release. A successful demonstration proves the happy path. It does not establish those controls.",
        },
        {
          type: "callout",
          text: "Define the intended production boundary before hardening the code. A private pilot, a public self-service product and an internal tool require different controls and acceptance evidence.",
        },
      ],
    },
    {
      heading: "Should you harden the prototype or rebuild it?",
      blocks: [
        {
          type: "p",
          text: "Harden the prototype when its data model can represent the business, its core workflow behaves correctly and its architecture allows important controls to be added without bypasses. Consider rebuilding a bounded part only when evidence shows that the current foundation cannot enforce the required behaviour or would make every future change depend on fragile workarounds.",
        },
        {
          type: "table",
          caption: "Evidence for choosing targeted hardening or a bounded rebuild.",
          head: ["Decision area", "Evidence that supports hardening", "Evidence that may justify rebuilding a boundary"],
          rows: [
            [
              "Core workflow",
              "Representative users can complete it and failures are localised",
              "The workflow cannot be made correct without changing its underlying state model",
            ],
            [
              "Data model",
              "Required entities, relationships and invariants can be expressed and migrated",
              "The schema loses information the business must preserve or cannot enforce essential invariants",
            ],
            [
              "Permissions",
              "One consistent authorisation layer can cover every protected read and write",
              "Access decisions are inseparable from duplicated or contradictory application paths",
            ],
            [
              "Dependencies",
              "Supported versions and replacements can be introduced incrementally",
              "A critical abandoned dependency blocks security updates or the required platform",
            ],
            [
              "Verification",
              "Important behaviour can be placed behind acceptance and regression checks",
              "The current boundary cannot be exercised or observed without replacing it",
            ],
          ],
        },
        {
          type: "p",
          text: "Avoid a full rewrite by default. Preserve working product knowledge and replace only the boundary that fails an explicit requirement. Record the decision, migration path and rollback plan so the new implementation does not become a second unverified prototype.",
        },
      ],
    },
    {
      heading: "Which production-readiness controls should be reviewed first?",
      blocks: [
        {
          type: "p",
          text: "Review controls by consequence, not by which task is easiest. Protect access, credentials and recoverable data before optimising performance. Then bound resources and external actions, verify concurrent behaviour and add the operating evidence needed to release and recover safely.",
        },
        {
          type: "table",
          caption: "A consequence-led production-readiness review.",
          head: ["Control area", "Question to answer", "Acceptance evidence"],
          rows: [
            [
              "Identity and authorisation",
              "Can every protected action verify both the actor and the specific resource?",
              "Role and object-level tests include permitted and denied cases",
            ],
            [
              "Secrets and configuration",
              "Are credentials outside source history, scoped to the environment and replaceable?",
              "Secret scan, rotated exposed keys and documented configuration ownership",
            ],
            [
              "Data and recovery",
              "Can the team restore required data within the business's recovery boundary?",
              "A completed restore rehearsal with recorded result and owner",
            ],
            [
              "Inputs and resource limits",
              "Can one request exhaust storage, compute, a vendor quota or the budget?",
              "Server-enforced size, rate, spend and retry limits with failure tests",
            ],
            [
              "Concurrency and external actions",
              "Can retries or overlapping requests create duplicate or contradictory outcomes?",
              "Database constraints, transaction tests and idempotency for consequential writes",
            ],
            [
              "Observability and release",
              "Can the team detect, diagnose and reverse a failed release?",
              "Structured logs, monitored critical journey, release record and tested rollback path",
            ],
            [
              "Ownership and handover",
              "Can another qualified person deploy, operate and change the product?",
              "Buyer-controlled accounts, current environment inventory and handover rehearsal",
            ],
          ],
        },
        {
          type: "p",
          text: "NIST's Secure Software Development Framework treats secure practices as work integrated throughout the software lifecycle rather than a final audit. Use the same approach here: connect each production risk to a requirement, an owner and evidence that can be reviewed before release.",
        },
      ],
    },
    {
      heading: "How should authorisation and secrets change before launch?",
      blocks: [
        {
          type: "p",
          text: "Authentication proves an identity; authorisation decides whether that identity may perform a specific action on a specific resource. OWASP's API Security guidance says every endpoint using a client-supplied object identifier should check whether the logged-in user may act on that record. Apply the rule server-side to reads and writes rather than trusting a hidden button, route name or unpredictable identifier.",
        },
        {
          type: "list",
          items: [
            "List user and service roles, then default protected actions to denied unless explicitly granted.",
            "Test cross-account and cross-tenant access with identifiers belonging to another authorised user.",
            "Make sessions expire and provide a controlled way to revoke access when a device, credential or role changes.",
            "Remove working credentials from source, logs and client bundles; rotate any credential that may have been exposed.",
            "Scope production credentials to the minimum actions and environments required by the workload.",
          ],
        },
        {
          type: "p",
          text: "GitHub documents push protection as a way to block detected secrets before they enter a repository. It is a preventive layer, not remediation for an exposed key. If a credential reached source history or another untrusted location, revoke or rotate it and inspect its use; deleting the current line alone does not make the old value safe.",
        },
      ],
    },
    {
      heading: "How do data, concurrency and performance become testable?",
      blocks: [
        {
          type: "p",
          text: "Use production-shaped data and simultaneous requests to test assumptions that a small single-user demo cannot expose. The goal is not to predict one universal traffic threshold. It is to identify the product's important invariants, observe the expensive paths and prove how the system behaves when work overlaps or a dependency responds slowly.",
        },
        {
          type: "list",
          items: [
            "Restore a backup into a controlled environment and verify the application against the restored data.",
            "Exercise the busiest reads with representative row counts, filters and permission rules.",
            "Run overlapping requests against bookings, balances, stock, subscriptions or other shared state.",
            "Place invariants in database constraints or transactions where all writers converge.",
            "Use idempotency keys or an equivalent deduplication record when a retry could repeat a payment, message or vendor action.",
            "Set bounded timeouts and retry policies; record partial failure rather than silently repeating forever.",
          ],
        },
        {
          type: "p",
          text: "PostgreSQL's EXPLAIN command exposes the execution plan selected for a statement, while pg_stat_statements can aggregate planning and execution statistics when the extension is enabled. Those tools can support an evidence-led query review. They do not replace application-level measurement, realistic data or a platform-specific operating plan.",
        },
      ],
    },
    {
      heading: "What evidence should a production release include?",
      blocks: [
        {
          type: "p",
          text: "A release should produce evidence that the intended workflow works, important denials and failures behave correctly, the team can observe the system and the buyer retains control. Passing a build is necessary but insufficient when it does not exercise permissions, data recovery or production configuration.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "A written release boundary naming users, workflow, exclusions and production dependencies.",
            "Acceptance cases for success, denied access, invalid input, dependency failure and interrupted work.",
            "Passing automated checks plus a recorded demonstration of the critical user journey.",
            "A current environment and account inventory with production access under buyer control.",
            "A completed backup restore or other recovery rehearsal appropriate to the product's data.",
            "A deployment record, monitored health signal, escalation owner and rollback decision path.",
            "Known limitations and follow-up work prioritised by consequence rather than hidden as generic technical debt.",
          ],
        },
        {
          type: "p",
          text: "If you already have a working prototype, send ApexStack the same release boundary and acceptance cases you would give an internal engineering lead. That makes the first discussion a concrete assessment of what can be preserved, what requires evidence and which production risks need a named owner.",
        },
      ],
    },
    {
      heading: "How should prototype hardening be scoped with ApexStack?",
      blocks: [
        {
          type: "p",
          text: "A Product Blueprint starts from US$1,000 for one bounded planning and de-risking question. For an existing prototype, that can mean mapping the release boundary, reviewing one critical workflow and producing a prioritised readiness plan with explicit assumptions. It is not a production-readiness certification, unlimited audit or production-ready MVP.",
        },
        {
          type: "p",
          text: "A Launch Sprint starts from US$2,500 and covers planning, UX direction, implementation, testing and deployment for one tightly scoped first release or core workflow. Authentication, billing, mobile applications, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the quote. ApexStack can assess the current prototype first so implementation is limited to the production boundary the release actually needs.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the difference between a prototype and production software?",
      answer:
        "A prototype demonstrates a workflow under controlled conditions. Production software must enforce permissions, handle invalid and overlapping work, protect and recover data, bound resource use, expose failures, support repeatable releases and remain operable by someone other than the original developer.",
    },
    {
      question: "Should a startup rewrite its prototype before launch?",
      answer:
        "Not by default. Harden it when the core workflow and data model are sound and important controls can be added consistently. Rebuild only the boundary that cannot meet an explicit production requirement, and require a migration and rollback plan for that replacement.",
    },
    {
      question: "What should be checked before real users access a prototype?",
      answer:
        "Check object-level authorisation, credential handling, data recovery, input and resource limits, concurrent writes, consequential external actions, observability, deployment rollback and buyer-controlled ownership. Connect each risk to an owner and inspectable acceptance evidence.",
    },
    {
      question: "How long does it take to make a prototype production ready?",
      answer:
        "There is no responsible universal duration. It depends on the intended release boundary, current data model, permissions, dependencies, migration needs, verification and operating requirements. Begin with a bounded assessment, then estimate only the controls and changes required for that specific release.",
    },
    {
      question: "Does a passing test suite prove production readiness?",
      answer:
        "No. The suite must cover the important workflow, denied access, invalid input, concurrent behaviour and failure handling, while separate evidence verifies production configuration, recovery, monitoring, account ownership, deployment and rollback. A green build cannot prove controls it does not exercise.",
    },
  ],
  sources: [
    {
      title: "Secure Software Development Framework Version 1.1",
      url: "https://csrc.nist.gov/pubs/sp/800/218/final",
      publisher: "National Institute of Standards and Technology",
    },
    {
      title: "API1:2023 Broken Object Level Authorization",
      url: "https://api-security.owasp.org/editions/2023/en/0xa1-broken-object-level-authorization/",
      publisher: "OWASP",
    },
    {
      title: "Push protection",
      url: "https://docs.github.com/en/code-security/concepts/secret-security/push-protection",
      publisher: "GitHub Docs",
    },
    {
      title: "EXPLAIN",
      url: "https://www.postgresql.org/docs/current/sql-explain.html",
      publisher: "PostgreSQL Documentation",
    },
    {
      title: "pg_stat_statements",
      url: "https://www.postgresql.org/docs/current/pgstatstatements.html",
      publisher: "PostgreSQL Documentation",
    },
  ],
  conversion: {
    heading: "How can ApexStack assess your prototype before production?",
    description:
      "Share the intended users, core workflow, current stack and release constraints. ApexStack can map what should be preserved, which controls need evidence and whether the next step is a bounded readiness plan or implementation sprint.",
    primaryLabel: "Assess your production boundary",
  },
  related: [
    "production-ready-mvp-development-service",
    "ai-generated-code-mistakes-pitfalls-bug-free",
    "what-is-a-discovery-phase",
  ],
};
