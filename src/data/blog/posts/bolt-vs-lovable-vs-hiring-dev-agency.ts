import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "bolt-vs-lovable-vs-hiring-dev-agency",
  title: "Can a Developer Take Over Your Bolt or Lovable App? A Handoff Checklist",
  seoTitle: "Bolt & Lovable Developer Handoff Checklist",
  description:
    "Compare Bolt, Lovable and an agency by code ownership, backend portability, deployment evidence and engineering handoff readiness.",
  excerpt:
    "The useful comparison is what your team can inspect, operate and transfer when an AI-built prototype becomes a product.",
  category: "Choosing a Partner",
  primaryKeyword: "bolt lovable developer handoff",
  secondaryKeywords: [
    "bolt vs lovable code ownership",
    "lovable github handoff",
    "bolt github export",
    "ai app builder agency handoff",
    "prototype to production audit",
  ],
  published: "2026-08-21",
  updated: "2026-08-24",
  authorId: "leadership-01",
  serviceSlug: "product-engineering",
  keyTakeaway:
    "Bolt and Lovable both document routes for moving application code into GitHub, but a repository is only one part of a usable handoff. Before another team takes responsibility, it should reproduce the build, map hosted services and external accounts, test a critical workflow, confirm data and secret ownership, deploy independently and document how the product will be operated.",
  sections: [
    {
      heading: "What is the real difference between Bolt, Lovable and an agency?",
      blocks: [
        {
          type: "p",
          text: "Bolt and Lovable can shorten the route from an idea to an interactive application. A development agency can add product scoping, engineering review and operational ownership, but the agency label proves none of those things by itself. The useful layer is the system around the generated code: context, workflow, verification, account ownership, release controls and a handoff another engineer can follow.",
        },
        {
          type: "p",
          text: "This guide focuses on handoff readiness. Our broader Lovable-versus-Bolt comparison covers initial route selection; this page asks a later question. If another engineer takes responsibility tomorrow, can they understand, test, deploy and operate what exists?",
        },
        {
          type: "callout",
          text: "Do not use a polished preview, downloadable archive or GitHub badge as proof that a product is ready to hand over. Ask a new maintainer to reproduce one critical workflow from a clean checkout and record every missing dependency or decision.",
        },
      ],
    },
    {
      heading: "What do Bolt and Lovable document about code ownership and portability?",
      blocks: [
        {
          type: "p",
          text: "Both products document ways to move application code into a standard development workflow. Their capabilities are not identical, and product behaviour can change, so verify the current documentation and the project's actual plan, framework and backend before making a procurement decision.",
        },
        {
          type: "table",
          caption: "Documented handoff routes and the evidence still required",
          head: ["Route", "Documented capability", "What a buyer should still verify"],
          rows: [
            [
              "Bolt",
              "Bolt documents downloading project files, connecting a project to GitHub and continuing work outside Bolt.",
              "Build commands, runtime services, environment variables, database ownership, authentication, storage, scheduled work and a deployment from a clean checkout.",
            ],
            [
              "Lovable",
              "Lovable documents GitHub synchronisation, local development and deployment outside Lovable. Its current documentation distinguishes newer TanStack Start projects from older React and Vite projects.",
              "The actual framework, repository constraints, backend choice, data export, storage, authentication, secrets, server functions and target-environment behaviour.",
            ],
            [
              "Development agency",
              "There is no universal agency export or ownership standard. The contract and delivery process determine what the buyer receives.",
              "Buyer-owned repositories and accounts, licences, infrastructure configuration, tests, release evidence, runbooks, access removal and knowledge transfer.",
            ],
          ],
        },
        {
          type: "p",
          text: "Code portability is not the same as workload portability. A frontend may run elsewhere while its identity, database, storage, server functions or environment configuration still depend on the original platform. Map the complete request path before describing any route as free from lock-in.",
        },
      ],
    },
    {
      heading: "Why is a GitHub repository not a complete engineering handoff?",
      blocks: [
        {
          type: "p",
          text: "A repository can show what files exist and how they changed. It does not automatically explain which accounts own production, how secrets are supplied, which database migrations ran, what a failed webhook should do or who responds when an external service is unavailable.",
        },
        {
          type: "list",
          items: [
            "A clean checkout can install dependencies, run checks and produce the same deployable artefact",
            "Environment-variable names are documented without placing secret values in source control",
            "Database schema and migration history can recreate the expected structure",
            "Authentication roles and data-access rules are testable for each important user type",
            "External APIs, webhooks, scheduled jobs, storage and email services have named owners",
            "The production account belongs to the buyer, with least-privilege access for suppliers",
            "Logs, alerts, rollback steps and known limitations are available to the next operator",
          ],
        },
        {
          type: "p",
          text: "The strongest handoff test is practical. Give an authorised engineer who did not build the prototype access to the documented assets and ask them to run, test and deploy it in a controlled environment. Record the help they need from the original builder; each undocumented intervention is part of the remaining handoff work.",
        },
      ],
    },
    {
      heading: "How should you audit a Bolt or Lovable prototype before hiring an agency?",
      blocks: [
        {
          type: "p",
          text: "Start with one business-critical workflow rather than scoring the whole codebase by file count or visual polish. Trace it from user input through identity, application logic, data changes, third-party calls and the final user-visible state. Then repeat the trace for a failure, retry or unauthorised request.",
        },
        {
          type: "table",
          caption: "Prototype handoff audit",
          head: ["Area", "Evidence to request", "Decision it supports"],
          rows: [
            ["Source and history", "Buyer-accessible repository, branches, dependency lockfile and reproducible checks", "Whether the current code is a usable base for continued engineering"],
            ["Data and identity", "Schema, migrations, ownership, backup or export route, roles and access tests", "Whether production data can be protected, recovered and moved"],
            ["External services", "Inventory of APIs, webhooks, domains, email, files, analytics and payment dependencies", "Which accounts and failure modes sit outside the repository"],
            ["Quality", "Critical-path tests, type and lint checks, dependency review and known defects", "What should be retained, repaired or replaced"],
            ["Deployment", "Repeatable build, environment configuration, release record and rollback route", "Whether a second team can release without the original workspace"],
            ["Operation", "Logs, alerts, usage and cost visibility, runbook and incident ownership", "Whether the product can be supported after launch"],
          ],
        },
        {
          type: "p",
          text: "An audit should not begin with a predetermined rebuild. Preserve working, understandable components when tests support them. Replace a part when its behaviour cannot be reproduced, its risk is unacceptable or repairing it would cost more than implementing the required behaviour cleanly. Record the evidence behind each decision.",
        },
      ],
    },
    {
      heading: "When should you stay in the builder, add an engineer or hire an agency?",
      blocks: [
        {
          type: "table",
          caption: "Choose the smallest route that fits the current risk",
          head: ["Situation", "Reasonable next route", "Gate before real users"],
          rows: [
            ["Testing a user flow with disposable or non-sensitive data", "Continue in Bolt or Lovable if the founder can own the iteration", "Label it as a prototype and avoid consequential production actions"],
            ["A technical founder can maintain the generated stack", "Connect version control, add focused engineering review and retain the builder where useful", "Reproducible checks, access review and independent deployment"],
            ["A validated prototype now needs payments, permissions or several integrations", "Add experienced product engineering before expanding the surface area", "Critical-path tests, data ownership, failure handling and operating evidence"],
            ["A non-technical team needs one supplier to own product, engineering and handoff", "Compare agencies by named artefacts and acceptance evidence, not promises", "Buyer-owned accounts, responsibility matrix, release evidence and handover rehearsal"],
          ],
        },
        {
          type: "p",
          text: "Hiring an agency is not automatically safer than continuing with a builder. An agency can create its own lock-in through private repositories, supplier-owned cloud accounts or undocumented custom systems. Apply the same ownership and handoff questions to every route.",
        },
      ],
    },
    {
      heading: "Which ApexStack starting engagement fits an existing prototype?",
      blocks: [
        {
          type: "p",
          text: "A Product Blueprint starts at US$1,000 when the first outcome is a bounded review or decision. For an existing Bolt or Lovable prototype, that could cover one critical-workflow review, a dependency and ownership inventory, a reproducible-build check or a retain-repair-replace recommendation for a small approved scope.",
        },
        {
          type: "p",
          text: "A Launch Sprint starts at US$2,500 and can cover technical execution from planning through launch for one tightly scoped release or core workflow. Authentication, billing, mobile applications, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the quote. The pricing page records the current offer boundaries.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I export code from Bolt or Lovable?",
      answer:
        "Both products document code-export routes. Bolt documents project download and GitHub integration; Lovable documents synchronising a project with GitHub. Verify current plan requirements and test a clean local build, because exported files alone do not include every hosted service, secret or operational dependency.",
    },
    {
      question: "Does GitHub export mean there is no vendor lock-in?",
      answer:
        "No. GitHub improves source ownership and collaboration, but identity, databases, storage, server functions, deployment settings and external services may still depend on the original environment. Portability should be tested across the complete workflow.",
    },
    {
      question: "Should an agency rebuild an AI-generated prototype from scratch?",
      answer:
        "Not by default. Audit one critical workflow, reproduce the build, inspect dependencies and test important risks. Retain parts that are understandable and verified; repair or replace parts when the evidence shows that doing so is safer or more economical.",
    },
    {
      question: "What should I hand to an agency with my Bolt or Lovable project?",
      answer:
        "Provide repository access, the current workspace and hosting details, environment-variable names, data schema, external-service inventory, user roles, known defects and the business-critical workflow. Share secret values through an approved secret manager, never inside a brief or repository.",
    },
    {
      question: "How do I test whether the handoff is complete?",
      answer:
        "Ask an authorised engineer who did not build the prototype to install, test and deploy it from the documented assets in a controlled environment. Track each undocumented question, missing permission and manual intervention; those are the remaining handoff gaps.",
    },
  ],
  sources: [
    { title: "Corporate and commercial: code ownership", url: "https://support.bolt.new/account-and-subscription/corporate-commercial", publisher: "Bolt" },
    { title: "GitHub for version control", url: "https://support.bolt.new/integrations/git", publisher: "Bolt" },
    { title: "Manage your projects", url: "https://support.bolt.new/building/using-bolt/projects-files", publisher: "Bolt" },
    { title: "Connect your project to GitHub", url: "https://docs.lovable.dev/integrations/github", publisher: "Lovable" },
    { title: "Deployment, hosting and ownership options", url: "https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership", publisher: "Lovable" },
    { title: "Lovable FAQ", url: "https://docs.lovable.dev/introduction/faq", publisher: "Lovable" },
    { title: "Repository roles for an organisation", url: "https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization", publisher: "GitHub" },
  ],
  related: [
    "lovable-vs-bolt-vs-agency",
    "prototype-to-production",
    "bolt-new-alternatives-for-founders-production-apps",
  ],
};
