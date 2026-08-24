import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "technical-due-diligence",
  title: "Technical Due Diligence: A Software Buyer’s Checklist",
  seoTitle: "Technical Due Diligence Checklist for Software Buyers",
  description:
    "Evaluate software through repository, architecture, security, SBOM, recovery, ownership and remediation evidence—not assertions.",
  excerpt:
    "A buyer-focused checklist for connecting product and growth claims to code, deployed systems, control evidence, ownership records and a costed path through the gaps.",
  category: "Choosing a Partner",
  primaryKeyword: "technical due diligence",
  secondaryKeywords: [
    "technical due diligence checklist",
    "software due diligence for investors",
    "technology due diligence acquisition",
    "technical audit startup",
  ],
  published: "2026-08-13",
  updated: "2026-08-24",
  authorId: "leadership-02",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "Technical due diligence should let a buyer trace product, growth and operating claims to inspectable evidence across the repository, deployed architecture, software supply chain, security controls, data flows, recovery tests, ownership records and team practices. Where evidence is incomplete, record the uncertainty and its effect on the buyer’s decision instead of assigning a universal deal label.",
  sections: [
    {
      heading: "What should technical due diligence answer?",
      blocks: [
        {
          type: "p",
          text: "Technical due diligence tests whether a software asset can support the assumptions under review. Those assumptions may concern product capability, growth, integration, security, operating cost, ownership or the ability of another team to run the system. The review connects each material claim to evidence and records what remains uncertain.",
        },
        {
          type: "p",
          text: "That makes the work broader than a code-quality score. Source code matters, but so do the deployed architecture, cloud and SaaS accounts, dependency chain, data flows, access controls, release process, incident history, recovery tests, contributor agreements and the people who can operate critical paths.",
        },
        {
          type: "callout",
          text: "A useful review does not ask whether the technology is good in the abstract. It asks which buyer assumption is being tested, what evidence supports it and what decision follows if the evidence is missing or contradictory.",
        },
      ],
    },
    {
      heading: "How should the buyer set the review scope?",
      blocks: [
        {
          type: "p",
          text: "Begin with the decision, not a generic checklist. An investor testing whether the current product can support a funding plan needs a different depth from an acquirer planning to merge identity, data and operations. A buyer of a small SaaS product may care most about account ownership, dependency maintenance and whether the system can be operated without its founder.",
        },
        {
          type: "list",
          items: [
            "The transaction or investment assumptions the technology must support",
            "The products, repositories, environments, entities and time period inside scope",
            "Customer, regulatory and contractual commitments relevant to the review",
            "Evidence the reviewer may access, how sensitive material will be protected and when access ends",
            "Specialist questions that belong with legal, privacy, financial or security advisers",
            "The buyer’s impact criteria and the people authorised to accept residual risk",
          ],
        },
        {
          type: "p",
          text: "Access should be proportionate and controlled. Read-only, least-privilege and time-bounded access is often enough for source, cloud, monitoring and security evidence. Record which systems could not be inspected so the report does not silently treat an access gap as a positive finding.",
        },
      ],
    },
    {
      heading: "Which claims need an evidence trail?",
      blocks: [
        {
          type: "table",
          caption: "Map business claims to technical evidence",
          head: ["Claim under review", "Evidence to inspect", "Question to resolve"],
          rows: [
            [
              "The product supports a critical user journey",
              "Deployed walkthrough, architecture and data flow, test results, known defects",
              "Does the implemented system perform the complete journey under the conditions the buyer expects?",
            ],
            [
              "The platform can support planned demand",
              "Production telemetry, limits, load evidence, bottlenecks, scaling and failure behaviour",
              "Which specific assumption is tested, and what remains extrapolation?",
            ],
            [
              "Security controls are operating",
              "Identity configuration, scan coverage, change records, alerts, incidents and remediation",
              "Is the control only documented, or is there dated evidence that it operates in scope?",
            ],
            [
              "The company controls the product",
              "Repository, cloud, domain, DNS, registry, billing and recovery-contact ownership",
              "Can authorised company personnel access and transfer every critical account?",
            ],
            [
              "The software can recover from data loss",
              "Backup scope, restore runbook, recent restore result and integrity checks",
              "Was recoverability demonstrated against the required recovery targets?",
            ],
            [
              "Another team can operate the system",
              "Role map, runbooks, review history, on-call coverage and practical demonstrations",
              "Which actions depend on one person, and has a backup operator performed them?",
            ],
          ],
        },
      ],
    },
    {
      heading: "What should a repository and architecture review cover?",
      blocks: [
        {
          type: "p",
          text: "Repository evidence should show how changes move from a contributor to a released artefact. Inspect default-branch protections, review and code-owner rules, required checks, bypass permissions, build and deployment workflows, test results, release history and rollback evidence. A written policy is weaker than the configuration that enforces it.",
        },
        {
          type: "p",
          text: "Architecture diagrams should match the deployed estate. Reconcile them with cloud resources, data stores, queues, external services, trust boundaries and manual operating steps. When a forecast assumes higher load or new integration patterns, ask for telemetry, load evidence and explicit system limits that address that assumption rather than a broad claim that the architecture scales.",
        },
        {
          type: "list",
          items: [
            "Repository inventory, active branches, archived code and ownership boundaries",
            "Traceability from reviewed commit through build, deployment and running version",
            "Architecture decisions, known constraints and unsupported or end-of-life components",
            "Critical synchronous paths, scheduled work, queues and manual interventions",
            "Environment separation, secrets handling and infrastructure configuration",
            "Tests and operational observations relevant to the buyer’s specific assumptions",
          ],
        },
      ],
    },
    {
      heading: "How do you review dependencies and open-source software?",
      blocks: [
        {
          type: "p",
          text: "Start with an inventory that reflects what is built and deployed. A software bill of materials can record components, versions, identifiers, hashes, licences and dependency relationships, but its coverage and generation context matter. Reconcile it with manifests, lockfiles, container images, hosted services and the release path, and state any known unknowns.",
        },
        {
          type: "p",
          text: "An SBOM is not proof that every vulnerability is exploitable or that every licence obligation has been met. Review component origin, actual use, maintenance state, known vulnerabilities, licence expression and distribution context. Automated licence and vulnerability results are triage inputs; qualified counsel should interpret ownership and licence obligations for the actual product and transaction.",
        },
        {
          type: "table",
          caption: "Software supply-chain evidence",
          head: ["Evidence", "What it establishes", "What it does not establish"],
          rows: [
            [
              "SBOM with generation context",
              "Recorded components and relationships for the covered build or environment",
              "Complete deployed coverage unless the generation and reconciliation support it",
            ],
            [
              "Dependency and lock files",
              "Declared and resolved package versions for that ecosystem",
              "Every runtime service, image, copied asset or hosted dependency",
            ],
            [
              "Vulnerability scan",
              "Known matches in the scanned scope at that point in time",
              "Exploitability, business impact or absence of undisclosed weaknesses",
            ],
            [
              "Licence scan",
              "Detected licence data that can be reviewed and corrected",
              "A legal conclusion about obligations, ownership or compatibility",
            ],
          ],
        },
      ],
    },
    {
      heading: "What security and data evidence should the buyer request?",
      blocks: [
        {
          type: "p",
          text: "Use the product’s data sensitivity, customer commitments and threat model to set the expected depth. A control map can organise the review, but names and certifications do not replace evidence from the systems in scope. Compare documented responsibilities with current identity, repository, cloud, logging and incident records.",
        },
        {
          type: "list",
          items: [
            "Privileged identities, MFA or SSO enforcement, access reviews and recovery ownership",
            "Code, dependency and secret-scanning coverage with triage and remediation records",
            "Change approvals, deployment logs and separation of critical duties where required",
            "Incident-response plan, incident register, post-incident actions and their current status",
            "Log sources, retention, alert ownership and a sample path from alert to resolution",
            "Data categories, purposes, storage, regions, processors, access, retention, deletion and backups",
          ],
        },
        {
          type: "p",
          text: "Reconcile the data inventory with production schemas, object stores, analytics, logs, support tools and vendor configuration. Record unverified areas instead of asserting compliance. Jurisdiction- or sector-specific conclusions for health, payment, employment, consumer or international data require the appropriate privacy, security and legal specialists.",
        },
      ],
    },
    {
      heading: "How do you test operations, recovery and cloud cost?",
      blocks: [
        {
          type: "p",
          text: "Backup existence and recoverability are different findings. Ask for the backup scope, exclusions, retention, relevant separation, restore runbook, most recent restore record, integrity checks and actual results against the required recovery objectives. If only backup configuration is visible, state that restoration was not evidenced.",
        },
        {
          type: "p",
          text: "For cloud cost, request recent invoices and exports mapped to products, environments and major services. Identify commitments, egress, licences, manual operations and resources without clear ownership. Spend alone does not establish efficiency; compare it with workload volume and the reliability, security and performance requirements the system must meet.",
        },
        {
          type: "list",
          items: [
            "Service objectives or internal targets and the telemetry used to assess them",
            "Monitoring coverage, alert ownership, incident history and unresolved follow-up",
            "Backup and restore evidence for data and dependencies that source code cannot recreate",
            "Release, rollback and emergency-access procedures with recent execution evidence",
            "Cloud account, billing, domain, DNS, registry and recovery-contact control",
            "Cost model, major drivers and trade-offs attached to proposed reductions",
          ],
        },
      ],
    },
    {
      heading: "How do you assess ownership and key-person concentration?",
      blocks: [
        {
          type: "p",
          text: "Build a provenance schedule that maps material repositories and assets to founders, employees, contractors, agencies and third-party components. Pair it with the relevant agreements and transfer records for qualified counsel to review. Missing or unclear documentation creates an ownership question; its legal effect depends on facts, jurisdiction and contract language.",
        },
        {
          type: "p",
          text: "Repository contribution graphs and code-owner files can show concentration, but they do not measure understanding. Test operational knowledge through demonstrations and interviews. Can more than one authorised person deploy, restore, rotate credentials, explain critical data flows and respond to an alert? Distinguish one primary owner from a critical action with no tested backup operator.",
        },
        {
          type: "callout",
          text: "Do not convert a missing document or concentrated contribution history into a universal transaction outcome. Describe the observed condition, the question it creates, the evidence still needed and who is qualified to resolve it.",
        },
      ],
    },
    {
      heading: "How should findings be rated and reported?",
      blocks: [
        {
          type: "p",
          text: "Rate findings against the buyer’s objectives, not a universal list of deal breakers. Each finding should connect an observed condition to the affected business assumption, systems and data, likelihood and impact rationale, existing controls, residual risk and a verification method for any proposed fix.",
        },
        {
          type: "table",
          caption: "A buyer-readable finding record",
          head: ["Field", "What to record"],
          rows: [
            ["Observation", "The exact condition and dated evidence, including scope limitations"],
            ["Decision link", "The claim, control, integration or business assumption affected"],
            ["Exposure", "Affected systems, data, users and the path by which harm or constraint could arise"],
            ["Assessment", "Likelihood and impact rationale, uncertainty, existing controls and residual risk"],
            ["Action", "Recommended response, owner, dependencies and what completion means"],
            ["Verification", "The test, document or observed result that will close or re-rate the finding"],
          ],
        },
        {
          type: "p",
          text: "Keep vulnerability severity, business risk and transaction materiality separate. A vulnerability score can describe technical characteristics; the buyer still needs environment, exposure and business context. The report should also distinguish architecture constraints, operational gaps, ownership questions and missing documentation so the right person handles each one.",
        },
      ],
    },
    {
      heading: "What should be in the final evidence package?",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "A scope statement tying the review to the buyer’s decision and assumptions",
            "An evidence index with source, date, owner, access limitation and reviewed version",
            "Current architecture, data-flow and account-ownership maps reconciled with deployed systems",
            "Repository, delivery, dependency, security, privacy, recovery and cost evidence",
            "A contributor and component-provenance schedule for specialist legal review",
            "A findings register with uncertainty, buyer-specific priority, owner and verification criteria",
            "A remediation plan that separates pre-decision questions from post-decision improvement work",
            "A list of matters not concluded and the legal, financial, privacy or security specialist required",
          ],
        },
        {
          type: "p",
          text: "ApexStack can scope a technical evidence-readiness review, test selected controls and produce a buyer-readable findings register through its technical consulting service. The engagement does not replace legal, financial or investment advice, and IP, licence or compliance conclusions may require qualified counsel and specialist assessors.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is technical due diligence?",
      answer:
        "Technical due diligence is a scoped review that tests claims about a software asset against repositories, deployed architecture, dependencies, security and data controls, operations, ownership records and team practices. It records supported conclusions, contradictory evidence and unresolved uncertainty for the buyer’s decision.",
    },
    {
      question: "Is technical due diligence the same as a code review?",
      answer:
        "No. Code and repository controls are part of the evidence, but the review also covers deployed systems, accounts, software dependencies, data handling, security operations, recovery, cost, provenance and whether authorised people can run critical processes.",
    },
    {
      question: "How long does technical due diligence take?",
      answer:
        "There is no standard duration. It depends on the buyer’s decision, product and entity scope, number of repositories and environments, data sensitivity, evidence quality, access constraints and whether specialist legal, privacy or security review is required. The scope should define the questions and evidence before setting a schedule.",
    },
    {
      question: "Does an SBOM complete the dependency review?",
      answer:
        "No. An SBOM is inventory evidence for its stated coverage and generation context. Reviewers should reconcile it with manifests, lockfiles, images, services and the deployed estate, then assess actual use, maintenance, vulnerabilities, licence data and unknown coverage.",
    },
    {
      question: "Can a technical reviewer decide who owns the source code?",
      answer:
        "A reviewer can map contributors, repositories, components and available agreements, and can flag missing or unclear provenance. Ownership and licence conclusions depend on facts, jurisdiction and contract language, so qualified counsel should make the legal assessment.",
    },
    {
      question: "What makes a technical due diligence finding useful?",
      answer:
        "It states the observed condition and evidence, links it to a buyer assumption, explains affected systems and uncertainty, assesses likelihood and impact in the buyer’s context, and names an action and verification method. A label without that trail is difficult to use or challenge.",
    },
  ],
  related: [
    "choosing-a-tech-stack-for-your-mvp",
    "de-risking-a-software-rewrite",
    "who-owns-the-code",
  ],
};
