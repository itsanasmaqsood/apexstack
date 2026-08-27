import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "software-maintenance-cost",
  title: "Software Maintenance Cost: How to Set an Annual Budget",
  seoTitle: "Software Maintenance Cost: Set an Annual Budget",
  description:
    "Estimate annual software maintenance cost from support coverage, system condition, dependencies and planned work—not a generic percentage.",
  excerpt:
    "A practical way to price maintenance from the system you operate, the service you expect and the evidence a supplier must provide.",
  category: "Legacy Modernisation",
  primaryKeyword: "software maintenance cost",
  secondaryKeywords: [
    "annual software maintenance cost",
    "cost of software maintenance",
    "software maintenance pricing",
    "application support cost",
  ],
  published: "2026-08-13",
  updated: "2026-08-27",
  authorId: "leadership-01",
  serviceSlug: "cloud-devops",
  keyTakeaway:
    "There is no defensible universal percentage for annual software maintenance. Build the budget from the service you need, the current condition of the system and a named work inventory: monitoring, incident cover, security and dependency updates, platform changes, defect correction and small operational improvements. Keep cloud usage and new product features separate so competing proposals cover the same responsibilities.",
  sections: [
    {
      heading: "How much should you budget for software maintenance?",
      blocks: [
        {
          type: "p",
          text: "Do not start with a percentage of the original build price. That number says little about the software now in production. A small application handling regulated data can need more operational care than a larger internal tool, while an expensive build with few users and strong automated tests may need less routine engineering time.",
        },
        {
          type: "p",
          text: "A useful annual budget has three visible parts: the fixed work required to operate the service, planned capacity for known maintenance, and a separately approved allowance for unpredictable corrective work. Infrastructure consumption and new feature development should sit on their own lines. This makes the quote testable and prevents a low maintenance fee from hiding important exclusions.",
        },
      ],
    },
    {
      heading: "What does software maintenance pay for?",
      blocks: [
        {
          type: "p",
          text: "Maintenance keeps a released system supportable while its dependencies, platforms, risks and business rules change. NIST’s Secure Software Development Framework includes responding to vulnerabilities in released software. AWS’s Operational Excellence guidance similarly treats patch management, telemetry, tested deployments, runbooks and support plans as continuing operating practices rather than one-off launch tasks.",
        },
        {
          type: "table",
          caption: "Maintenance work and the evidence a buyer can request",
          head: ["Workstream", "Typical work", "Evidence of completion"],
          rows: [
            ["Operational ownership", "Monitoring, alert review, backups, certificate and scheduled-job checks", "Named owner, dashboard, alert routes and restore-test record"],
            ["Security and dependencies", "Vulnerability triage, dependency updates, runtime and image patching", "Dependency inventory, reviewed update history and unresolved-risk log"],
            ["Platform compatibility", "Hosting, browser, operating-system, app-store and third-party API changes", "Lifecycle calendar, compatibility tests and migration decisions"],
            ["Corrective maintenance", "Diagnosing and fixing defects in production behaviour", "Prioritised issue, reproducible test, reviewed change and release record"],
            ["Small adaptive changes", "Adjustments needed to keep an existing workflow useful", "Agreed boundary separating maintenance from new product scope"],
          ],
        },
        {
          type: "p",
          text: "For mobile products, platform policy is a real maintenance input. Google Play requires applications to keep pace with target API requirements for new submissions, updates and continued discovery by users on newer Android versions. The relevant work is not a generic mobile surcharge; it is the specific compatibility and release work shown by the application’s current state.",
        },
      ],
    },
    {
      heading: "How do you estimate annual maintenance cost?",
      blocks: [
        {
          type: "p",
          text: "Estimate the work before pricing the contract. The first pass can be compact, but it needs access to the repository, deployment environment, dependency inventory, monitoring, issue history and third-party services. Without that evidence, a supplier is pricing assumptions rather than the system.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Inventory the production surfaces: web applications, mobile applications, APIs, workers, scheduled jobs, data stores and external integrations.",
            "Define the service expected from each surface: operating hours, important user journeys, acceptable interruption and who must respond when something fails.",
            "Assess current condition: supported runtime versions, dependency status, test coverage, deployment repeatability, observability, documentation and unresolved incidents.",
            "List time-bound obligations such as certificates, platform lifecycle events, API deprecations, data-retention jobs and app-store requirements.",
            "Separate the known backlog from recurring work. Price overdue upgrades explicitly instead of burying recovery work inside a future retainer.",
            "Choose the support boundary: scheduled maintenance only, business-hours incident cover, or another clearly defined arrangement.",
            "Estimate each included activity, record the assumptions and state how work outside the boundary will be approved.",
          ],
        },
        {
          type: "callout",
          text: "A maintenance quote is comparable only when the systems, coverage hours, included work, exclusions and evidence are comparable.",
        },
      ],
    },
    {
      heading: "Which pricing model fits the work?",
      blocks: [
        {
          type: "table",
          caption: "Common maintenance contract shapes",
          head: ["Model", "Fits when", "Buyer risk to control"],
          rows: [
            ["Fixed recurring scope", "Monitoring, reviews and update cadence are predictable", "Important activities may be excluded while the headline fee stays low"],
            ["Reserved engineering capacity", "The backlog changes but a team needs regular access to the codebase", "Unused capacity, rollover rules and priority must be explicit"],
            ["Time and materials", "Condition is uncertain or recovery work cannot yet be bounded", "Use a spending limit, review points and a visible work queue"],
            ["Incident support plus planned maintenance", "Response coverage and routine engineering are both required", "Define severity, coverage hours and the difference between response and resolution"],
          ],
        },
        {
          type: "p",
          text: "A contract can combine these models. Recurring responsibility is different from an unlimited promise to change the product. New roles, workflows, integrations and platform migrations should pass through a separate scope decision unless the agreement deliberately reserves capacity for them.",
        },
      ],
    },
    {
      heading: "What makes maintenance more expensive?",
      blocks: [
        {
          type: "p",
          text: "Cost rises when the team must watch more surfaces, work inside a narrower response window, or make changes with weak evidence. These drivers can be inspected before a contract is signed.",
        },
        {
          type: "table",
          caption: "Inputs that change maintenance effort",
          head: ["Cost driver", "Lower-effort condition", "Higher-effort condition"],
          rows: [
            ["Production surfaces", "One web application with a small operating boundary", "Web, mobile, workers and several deployment environments"],
            ["External dependencies", "Few documented integrations with stable ownership", "Many APIs, payment paths or vendors with separate lifecycle rules"],
            ["Change safety", "Automated tests and repeatable deployment with rollback", "Manual release steps and no dependable regression evidence"],
            ["Operational visibility", "Useful metrics, logs, traces and actionable alerts", "Failures are reported by users before the team can diagnose them"],
            ["Current condition", "Supported runtimes and routine dependency updates", "Overdue major upgrades, unknown ownership or unresolved incidents"],
            ["Service expectation", "Scheduled work with agreed review windows", "Short incident-response coverage across several time zones"],
            ["Assurance obligations", "Ordinary product controls with named owners", "Additional privacy, security, audit or regulated-review work"],
          ],
        },
      ],
    },
    {
      heading: "What should a maintenance proposal specify?",
      blocks: [
        {
          type: "p",
          text: "The proposal should let an operator tell what will happen without relying on a salesperson’s interpretation. Google’s SRE guidance starts service management with indicators and objectives tied to behaviour users care about. Apply the same discipline to the contract: name the service, how it is observed and what action follows when the evidence crosses an agreed boundary.",
        },
        {
          type: "list",
          items: [
            "The repositories, environments, applications and integrations included in the agreement.",
            "Coverage hours, escalation path and severity definitions based on business impact.",
            "The difference between acknowledgement, investigation, workaround and resolution.",
            "Update cadence for dependencies, runtimes, images and platform requirements.",
            "Monitoring, backup and restore responsibilities, including who owns each account.",
            "Included engineering capacity and how unused or additional work is handled.",
            "The boundary between corrective maintenance, operational adaptation and a new feature.",
            "A regular report showing work completed, open risks, lifecycle events and recommended decisions.",
            "Handover terms covering repository access, deployment knowledge, documentation and outstanding work.",
          ],
        },
      ],
    },
    {
      heading: "How can you reduce maintenance cost safely?",
      blocks: [
        {
          type: "p",
          text: "Reduce investigation and change risk rather than removing necessary work. GitHub’s Dependabot can open version-update changes from repository configuration, but automation still needs review and tests. AWS recommends tested, reversible deployment and patch-management practices. Together, those controls turn maintenance into smaller reviewable changes instead of an occasional recovery project.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Keep a current inventory of runtimes, packages, services, owners and lifecycle dates.",
            "Automate tests around the journeys whose failure would matter to users or operations.",
            "Make deployment repeatable and preserve a tested rollback route.",
            "Use monitoring that leads to an action; remove alerts nobody owns or can interpret.",
            "Review small dependency updates regularly instead of combining unrelated major upgrades.",
            "Keep the repository, hosting, domains and essential third-party accounts under company control.",
            "Record operational decisions and recovery procedures where the next qualified engineer can find them.",
          ],
        },
      ],
    },
    {
      heading: "How does ApexStack scope maintenance work?",
      blocks: [
        {
          type: "p",
          text: "When the condition or ownership of a system is unclear, ApexStack can begin with a Product Blueprint from US$1,000 for one bounded planning and de-risking question. That may cover a maintenance inventory, dependency review, operational boundary or recovery decision. It is an assessment, not a promise to remediate an unknown backlog for the same price.",
        },
        {
          type: "p",
          text: "If the evidence identifies a tightly scoped release or core workflow that needs implementation, a Launch Sprint starts from US$2,500 and covers planning, UX direction, implementation, testing and deployment. Authentication, billing, mobile applications, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the quote. Ongoing maintenance is priced separately from the verified operating scope.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What percentage of development cost should software maintenance be?",
      answer: "There is no reliable universal percentage. Original build price is a weak proxy for current operating work. Estimate maintenance from the production surfaces, support coverage, dependency and platform obligations, current system condition, change safety and known backlog. Ask suppliers to show those assumptions instead of applying an unexplained percentage.",
    },
    {
      question: "What is included in annual software maintenance cost?",
      answer: "A clear annual scope may include monitoring and alert review, security and dependency updates, runtime and platform compatibility, backup and restore checks, corrective defects, release work, documentation and a bounded amount of small adaptive change. Infrastructure usage and new product features should be identified separately.",
    },
    {
      question: "Is cloud hosting included in software maintenance?",
      answer: "Usually it should be a separate line because hosting consumption changes with traffic, storage, architecture and vendor pricing, while maintenance pays for engineering responsibility. A supplier may manage both, but the proposal should separate the infrastructure bill from the work used to monitor, patch and change the system.",
    },
    {
      question: "Is a monthly retainer better than pay-as-you-go maintenance?",
      answer: "A retainer fits recurring ownership, planned reviews and reserved capacity. Pay as you go can fit a low-criticality system with a clear owner and no response commitment. Compare the coverage, queue, spending limit and evidence—not only the payment frequency.",
    },
    {
      question: "How do you estimate maintenance for an old application?",
      answer: "Audit the repository, environments, dependencies, integrations, deployment process, tests, monitoring, issue history and account ownership first. Price overdue recovery work separately from the future maintenance cadence. Otherwise the recurring quote either hides a large contingency or excludes the work most likely to be needed.",
    },
  ],
  sources: [
    { title: "Secure Software Development Framework", url: "https://csrc.nist.gov/projects/ssdf", publisher: "National Institute of Standards and Technology" },
    { title: "Operate — Operational Excellence Pillar", url: "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/operate.html", publisher: "Amazon Web Services" },
    { title: "Service Level Objectives", url: "https://sre.google/sre-book/service-level-objectives/", publisher: "Google Site Reliability Engineering" },
    { title: "Dependabot version updates", url: "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates", publisher: "GitHub Docs" },
    { title: "Google Play's Target API Level Policy", url: "https://support.google.com/googleplay/android-developer/answer/16561298?hl=en", publisher: "Google Play Console Help" },
  ],
};
