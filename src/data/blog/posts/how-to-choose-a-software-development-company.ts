import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "how-to-choose-a-software-development-company",
  title: "How to Choose an App Development Company After a Failed Build",
  seoTitle: "Choose an App Development Company After a Failed Build",
  description:
    "Use the evidence from a failed build to vet your next app development company, protect ownership and test delivery before another large commitment.",
  excerpt:
    "A failed build changes what you should ask next. Turn the failure into testable requirements, inspect delivery controls and keep every critical asset under company ownership.",
  category: "Choosing a Partner",
  primaryKeyword: "choose app development company after failed build",
  secondaryKeywords: [
    "how to vet an app development company",
    "hire development company after failed project",
    "app development partner checklist",
    "replace failed software development agency",
  ],
  published: "2026-08-13",
  updated: "2026-08-26",
  authorId: "leadership-01",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "After a failed app build, do not begin with another shortlist. First document what failed, which assets you control, what evidence is missing and which decision allowed the problem to continue. Give every candidate the same failure brief and require a response covering scope, acceptance checks, account ownership, delivery visibility, change control and handover. Test those controls through a bounded paid assessment before making a larger commitment.",
  sections: [
    {
      heading: "How should you choose an app development company after a failed build?",
      blocks: [
        {
          type: "p",
          text: "Choose the next company against the failure you can prove, not the promises you wish the previous supplier had kept. Secure the repository, deployment, domain, data and third-party accounts first. Then write a failure brief that separates observable facts from assumptions. Ask each candidate to show how its delivery model would detect or prevent those specific conditions.",
        },
        {
          type: "callout",
          text: "The previous build is evidence. Use it to design the next evaluation.",
        },
      ],
    },
    {
      heading: "What should you recover before evaluating another company?",
      blocks: [
        {
          type: "p",
          text: "Preserve the current state before anyone cleans it up or starts a replacement. The next team needs the same artefacts to decide whether the product can be repaired, partially replaced or rebuilt. Missing ownership is a separate problem from code quality and should be resolved or clearly recorded.",
        },
        {
          type: "table",
          caption: "Evidence to collect from the failed build",
          head: ["Area", "Evidence to preserve", "Question it answers"],
          rows: [
            [
              "Source code",
              "Repository, branches, commit history, releases, issues and pull requests",
              "What exists, who changed it and whether it can be built",
            ],
            [
              "Production",
              "Deployment history, current revision, environment names and operational settings",
              "Which code is live and how changes reached it",
            ],
            [
              "Data",
              "Schema, ownership, exports, backup settings and restoration evidence",
              "What must survive any recovery or rebuild",
            ],
            [
              "Accounts",
              "Domain, DNS, cloud, payments, authentication, email and app-store owners",
              "Whether the company controls the operational assets",
            ],
            [
              "Product scope",
              "Briefs, designs, acceptance notes, change requests and unresolved decisions",
              "What was agreed, added, rejected or left ambiguous",
            ],
            [
              "Delivery history",
              "Demos, status records, test results, incidents and known defects",
              "When the plan diverged from observable progress",
            ],
          ],
        },
      ],
    },
    {
      heading: "How do you write a useful failure brief?",
      blocks: [
        {
          type: "p",
          text: "A useful brief does not diagnose motives or turn frustration into a vendor category. It records the condition, the evidence and the control that was absent. That lets a new company respond to the actual risk instead of presenting a generic process.",
        },
        {
          type: "table",
          caption: "Turn each failure into a testable requirement",
          head: ["Observed condition", "Requirement for the next engagement", "Evidence during delivery"],
          rows: [
            [
              "Progress existed only in status updates",
              "A buyer-accessible preview of the agreed workflow",
              "Working behaviour demonstrated against acceptance checks",
            ],
            [
              "Scope changed without a clear trade-off",
              "Written impact and approval before a change enters the plan",
              "Decision log showing what moved, why and what was deferred",
            ],
            [
              "The supplier controlled critical accounts",
              "Company-owned organisations with role-based supplier access",
              "The buyer can view administrators, billing and recovery contacts",
            ],
            [
              "Quality problems appeared near launch",
              "Checks attached to each important behaviour and failure state",
              "Reviewable test results, defects and release criteria",
            ],
            [
              "A key contributor became unavailable",
              "Shared context, more than one authorised owner and a documented handover path",
              "Another authorised person can access and operate the project",
            ],
            [
              "The quote hid unresolved assumptions",
              "Assumptions and exclusions listed beside the estimate",
              "The proposal shows what would change the price or schedule",
            ],
          ],
        },
      ],
    },
    {
      heading: "What evidence should the next development company show?",
      blocks: [
        {
          type: "p",
          text: "A portfolio proves that a team can present selected work. Your evaluation needs evidence about the people and controls proposed for your project. Where client confidentiality limits what can be shared, the company should still be able to demonstrate its delivery artefacts without exposing private data.",
        },
        {
          type: "list",
          items: [
            "A walkthrough of a relevant live product or representative workflow, including a failure state rather than only the ideal path.",
            "The named roles responsible for product decisions, engineering review, testing, deployment and handover.",
            "A sample scope showing assumptions, exclusions, acceptance checks and change control.",
            "An ownership map for the repository, hosting, domain, data stores and third-party providers.",
            "An example of how a defect, blocked dependency or scope change becomes visible to the buyer.",
            "A handover checklist that another qualified team could use without private supplier access.",
          ],
        },
        {
          type: "p",
          text: "NIST’s Secure Software Development Framework says organisations can express secure-development requirements to third-party suppliers using a shared set of practices. OWASP’s Application Security Verification Standard provides a vendor-neutral basis for specifying and verifying application-security controls. Neither source certifies a supplier; they help a buyer ask for inspectable requirements and evidence.",
        },
      ],
    },
    {
      heading: "Which questions reveal how the company actually operates?",
      blocks: [
        {
          type: "p",
          text: "Ask questions that force the candidate to apply its process to your failed build. General answers such as “we use agile” or “we test thoroughly” do not explain how risk becomes visible or who can act when the plan changes.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Which part of the current product would you assess first, and what evidence would change your view?",
            "What can be retained, and what would justify replacing it?",
            "Who can stop a release when an acceptance check fails?",
            "What will I be able to open, inspect or test at each review point?",
            "How does a new requirement affect scope, price and the release plan?",
            "Which accounts must belong to my company before work starts?",
            "What happens if your lead engineer becomes unavailable?",
            "What can another team operate if we stop after the first engagement?",
            "Which assumptions prevent you from giving a reliable implementation quote today?",
          ],
        },
      ],
    },
    {
      heading: "How should ownership and handover work?",
      blocks: [
        {
          type: "p",
          text: "Keep business-critical services in company-owned organisations and grant the supplier only the access its work requires. GitHub recommends at least two organisation owners so projects do not become inaccessible when one owner is unreachable. Vercel documents project transfers, but also lists resources and settings that may require separate migration. Clean ownership from the start is simpler than relying on a future recovery process.",
        },
        {
          type: "list",
          items: [
            "The company owns the repository organisation, domain, DNS, deployment team and billing relationship.",
            "Contributors use individual accounts rather than shared credentials.",
            "Source code and documentation are available throughout delivery, not released only after final payment.",
            "Secrets are stored outside the repository and can be rotated without the supplier.",
            "The deployment and restoration paths are documented and tested within the agreed scope.",
            "Exit, access removal and handover responsibilities are reviewed with qualified legal counsel where needed.",
          ],
        },
      ],
    },
    {
      heading: "Should you request a rebuild quote immediately?",
      blocks: [
        {
          type: "p",
          text: "Not when the current artefacts have not been assessed. A rebuild quote issued before repository, production, data and dependency evidence is reviewed prices an assumption. The better first decision is whether the existing product can be reproduced and operated safely enough to retain, repair or replace in parts.",
        },
        {
          type: "p",
          text: "Use a bounded assessment when ownership is unclear, the live product cannot be mapped to source, the build is not reproducible or suppliers disagree about what must be replaced. If the product and release boundary are already understood, move directly to a written implementation scope rather than paying to rediscover settled facts.",
        },
      ],
    },
    {
      heading: "How can you compare proposals without repeating the same mistake?",
      blocks: [
        {
          type: "p",
          text: "Give shortlisted companies the same failure brief and ask for the same response format. Compare the proposed boundary, evidence and operating model before comparing the headline price.",
        },
        {
          type: "table",
          caption: "A proposal comparison that exposes delivery risk",
          head: ["Compare", "What should be explicit", "Why it matters"],
          rows: [
            [
              "First decision",
              "Repair, replace or rebuild recommendation and the evidence required",
              "Prevents the solution being selected before assessment",
            ],
            [
              "First release",
              "One core workflow, exclusions and acceptance checks",
              "Makes competing scopes comparable",
            ],
            [
              "Team and availability",
              "Named roles, decision rights, overlap and substitution process",
              "Shows how responsibility survives staff changes",
            ],
            [
              "Buyer visibility",
              "Preview, tracker, decision log, test evidence and issue access",
              "Makes progress observable without a presentation",
            ],
            [
              "Ownership",
              "Repository, infrastructure, data, accounts and handover",
              "Keeps a later supplier change possible",
            ],
            [
              "Commercial boundary",
              "Assumptions, dependencies, change process and payment milestones",
              "Shows what can change the quote",
            ],
          ],
        },
      ],
    },
    {
      heading: "How can ApexStack structure the first step?",
      blocks: [
        {
          type: "p",
          text: "A Product Blueprint starts from US$1,000 and can review one bounded product or technical question: for example, whether a failed build can support the next release, which assets are missing, or what evidence is needed before an implementation quote. It is a planning and de-risking engagement, not a production rebuild promise.",
        },
        {
          type: "p",
          text: "A Launch Sprint starts from US$2,500 and covers planning, UX direction, implementation, testing and deployment for one tightly scoped first release or core workflow. Authentication, billing, mobile applications, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the quote. The written proposal states the acceptance checks, exclusions, account ownership and handover before implementation begins.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What should I do before hiring another app development company?",
      answer:
        "Secure the repository, deployment, domain, data and third-party accounts, then record what failed and the evidence available. Turn each failure into a requirement the next company can demonstrate, such as buyer-accessible previews, written change control, company-owned accounts or release checks.",
    },
    {
      question: "Should I choose a company based on its portfolio?",
      answer:
        "Use the portfolio as a starting point, not the decision. Ask the proposed team to demonstrate a relevant workflow, delivery artefacts, ownership model, quality evidence and handover process. Selected case studies do not show how your project will be governed when requirements or staff change.",
    },
    {
      question: "How do I know whether the failed app should be rebuilt?",
      answer:
        "First verify whether the source can be built, mapped to production, operated with company-controlled accounts and supported with its current dependencies. Repair bounded faults, replace isolated blockers and choose a rebuild only when the available evidence shows the current artefacts cannot support the agreed release.",
    },
    {
      question: "Who should own the app repository and hosting accounts?",
      answer:
        "The buyer’s company should control the repository organisation, deployment team, domain, DNS, billing and recovery contacts. The development company should receive role-based access for its work. This keeps operational ownership and future handover under the buyer’s control.",
    },
    {
      question: "Is a paid assessment useful after a failed build?",
      answer:
        "Yes when the code, production state, data, ownership or recovery path is uncertain. The assessment should produce evidence and a repair, replace or rebuild recommendation. Skip a separate assessment when those facts are already documented and the next implementation unit is genuinely bounded.",
    },
  ],
  sources: [
    {
      title: "Secure Software Development Framework, Version 1.1",
      url: "https://csrc.nist.gov/pubs/sp/800/218/final",
      publisher: "NIST",
    },
    {
      title: "Application Security Verification Standard",
      url: "https://owasp.org/www-project-application-security-verification-standard/",
      publisher: "OWASP",
    },
    {
      title: "Maintaining ownership continuity for your organisation",
      url: "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization",
      publisher: "GitHub Docs",
    },
    {
      title: "Transferring a repository",
      url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository",
      publisher: "GitHub Docs",
    },
    {
      title: "Transferring a project",
      url: "https://vercel.com/docs/projects/transferring-projects",
      publisher: "Vercel Docs",
    },
  ],
  related: [
    "taking-over-an-existing-codebase",
    "what-is-a-discovery-phase",
    "questions-to-ask-before-signing-development-agency",
  ],
};
