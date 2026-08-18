import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "cloud-application-stack-management-provider",
  title: "What Should a Cloud Application Stack Provider Actually Manage?",
  seoTitle: "Cloud Application Stack Provider: Scope Checklist",
  description:
    "Compare cloud application stack providers by ownership, operating evidence, recovery planning and handover—not a vague managed-service label.",
  excerpt:
    "A buyer's checklist for defining who operates each cloud application layer, what evidence they provide and where responsibility stays with your team.",
  category: "Choosing a Partner",
  primaryKeyword: "cloud app stack provider",
  secondaryKeywords: [
    "cloud app stack services",
    "cloud application stack management",
    "cloud app stack solution",
    "managed cloud application stack",
  ],
  published: "2026-08-18",
  authorId: "leadership-02",
  serviceSlug: "cloud-devops",
  keyTakeaway:
    "A cloud application stack provider should operate the customer-controlled layers named in the agreement, not simply provision a cloud account. The scope should map ownership for identity, networking, runtime, data, delivery, observability, recovery, incidents and cost, with evidence for each layer and a clear boundary with both your team and the cloud platform.",
  sections: [
    {
      heading: "What is cloud application stack management?",
      blocks: [
        {
          type: "p",
          text: "Cloud application stack management is the ongoing operation, security, change, observation and recovery of the customer-controlled layers that make a cloud application work. It is broader than creating cloud resources and narrower than an assumption that one supplier owns everything in production.",
        },
        {
          type: "p",
          text: "The boundary depends on the services you use. With virtual machines, your side usually retains more responsibility for operating systems and runtimes. A managed database or serverless platform transfers some lower-level work to the cloud provider, but your application code, configuration, identities, data choices, monitoring and recovery decisions still need owners. A mixed stack can have a different boundary for every service.",
        },
        {
          type: "callout",
          text: "Do not buy the word 'managed'. Buy a written responsibility map that names the owner, approver, evidence and handover path for every production layer.",
        },
      ],
    },
    {
      heading: "Which cloud application layers need a named owner?",
      blocks: [
        {
          type: "table",
          caption: "Cloud application stack management scope checklist",
          head: ["Layer", "Ownership to define", "Evidence to request"],
          rows: [
            [
              "Architecture and governance",
              "Services, environments, dependencies, risks and decision authority",
              "Current architecture diagram, inventory and responsibility matrix",
            ],
            [
              "Cloud resources",
              "Accounts, regions, quotas, provisioning, policies, tagging and retirement",
              "Controlled configuration or infrastructure-as-code history and drift findings",
            ],
            [
              "Identity and secrets",
              "Human and workload access, privileged roles, keys and access removal",
              "Redacted permission matrix, access reviews and rotation records",
            ],
            [
              "Network and edge",
              "DNS, certificates, ingress, egress, firewalls and public endpoints",
              "Network diagram, endpoint inventory and certificate or rule review",
            ],
            [
              "Compute and runtime",
              "Images, patches, containers, orchestration, upgrades and capacity",
              "Supported-version inventory, maintenance records and upgrade plan",
            ],
            [
              "Data and recovery",
              "Storage, encryption choices, retention, backups, restores and deletion",
              "Data-store inventory, approved recovery objectives and dated restore test",
            ],
            [
              "Application delivery",
              "Builds, tests, configuration, migrations, releases and rollback",
              "Pipeline results, artefact identity, deployment log and rollback route",
            ],
            [
              "Observability",
              "Metrics, logs, traces, dashboards, alerts and alert ownership",
              "Telemetry map, dashboard, alert catalogue and recent alert history",
            ],
            [
              "Incidents and continuity",
              "Triage, escalation, communication, recovery and corrective work",
              "Runbooks, escalation matrix and recovery-exercise or incident evidence",
            ],
            [
              "Cost and capacity",
              "Allocation, budgets, anomalies, forecasts, lifecycle and rightsizing",
              "Workload-level cost report, budget alerts and optimisation decisions",
            ],
          ],
        },
        {
          type: "p",
          text: "Not every engagement needs the provider to operate all ten layers. The important point is that no layer is left between teams. If your internal engineer owns data migrations while the provider owns deployments, the release process should say exactly where the hand-off occurs and who stops or reverses a failed change.",
        },
      ],
    },
    {
      heading: "How should responsibility change with the hosting model?",
      blocks: [
        {
          type: "p",
          text: "Cloud platforms use a shared-responsibility model. The platform operates parts of the underlying cloud; the customer and any contracted operator retain responsibility for the workload-specific layers. Moving from infrastructure as a service to a more managed platform changes that division, but it does not remove the customer's side of it.",
        },
        {
          type: "list",
          items: [
            "Infrastructure as a service: define guest operating-system patching, runtime support, application deployment, data configuration and customer-controlled network rules.",
            "Platform or serverless services: the platform covers more of the host and runtime, while your side still needs owners for code, configuration, identities, data, telemetry and recovery choices.",
            "Managed Kubernetes: specify control-plane, worker-node, add-on, policy, workload, upgrade, telemetry and backup ownership separately.",
            "Software as a service: the vendor operates the product, but your organisation still controls users, access decisions, data use and tenant configuration.",
            "Mixed stacks: assess every service on its own boundary instead of applying one label to the entire system.",
          ],
        },
        {
          type: "p",
          text: "This is why a provider's technology list is not enough. Two teams can both advertise AWS, Azure or Google Cloud while offering materially different operational coverage. The useful comparison is the work and evidence inside the boundary, not the logos outside it.",
        },
      ],
    },
    {
      heading: "What evidence should a provider supply before you sign?",
      blocks: [
        {
          type: "p",
          text: "Ask for representative, redacted evidence rather than confidential access to another customer's environment. The goal is to see whether the operating process produces verifiable records, not to collect screenshots that disclose somebody else's systems.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "A responsibility matrix covering routine work, approvals, incidents and handover",
            "An example architecture and data-flow diagram with a resource inventory",
            "A redacted access model and privileged-access review",
            "A controlled configuration or infrastructure-as-code sample with change history",
            "A monitoring view, alert catalogue and escalation path",
            "Defined recovery objectives with a dated restore or recovery-test result",
            "A release record showing tests, artefact identity, deployment result and rollback route",
            "An incident runbook and a redacted example of tracked corrective work",
            "A workload-attributed cost view with budget or anomaly alerts",
            "An exit pack covering repositories, diagrams, runbooks, access transfer and supplier-access removal",
          ],
        },
        {
          type: "p",
          text: "Scale the evidence to the risk. A small internal prototype does not need the control pack of a regulated production system, but it still needs an owner for access, changes, data and recovery. The provider should be able to explain what is deliberately omitted and why.",
        },
      ],
    },
    {
      heading: "Which questions expose an unclear managed-cloud offer?",
      blocks: [
        {
          type: "list",
          items: [
            "Show us the ownership boundary for every layer, including what stays with our team and the cloud platform.",
            "Which production actions can you take directly, and which require our approval?",
            "What operating evidence will we receive, and how often?",
            "Who owns alerts outside our normal working hours?",
            "When was the recovery process last exercised, and what did the exercise cover?",
            "How are emergency changes recorded, reviewed and reversed?",
            "How will we see cost by workload and be warned of unusual spend?",
            "What do we receive, and which supplier access is removed, when the engagement ends?",
          ],
        },
        {
          type: "p",
          text: "The answers should become part of the scope. A polished sales explanation does not resolve an ownership gap during an incident. A named role, a decision path and an artefact do.",
        },
      ],
    },
    {
      heading: "What can a US$1,000 starting engagement cover?",
      blocks: [
        {
          type: "p",
          text: "At ApexStack, an engagement can start at US$1,000 when the first outcome is tightly constrained. For a cloud application stack, that might be an architecture and ownership review, a deployment audit, a recovery-readiness assessment or one focused pipeline or observability improvement. It is not a blanket price for operating or rebuilding a complete production estate.",
        },
        {
          type: "p",
          text: "A useful first phase should end with something your team can inspect: a responsibility map, prioritised risk register, tested change, working dashboard or recovery finding. Wider implementation is scoped only after the application, hosting model, access boundary and operational risks are understood.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is cloud application stack management the same as DevOps?",
      answer:
        "They overlap, but the phrases are not interchangeable. DevOps describes ways of organising software delivery and operations. Cloud application stack management is the concrete operating scope across the customer-controlled application and cloud layers. A contract should define the work rather than rely on either label.",
    },
    {
      question: "Does a cloud provider manage application security?",
      answer:
        "Only within its documented service boundary. Your organisation still needs ownership for customer-controlled identities, data, application code, configuration and other workload-specific controls. A contracted operator can take on some of that work, but the agreement must say which parts.",
    },
    {
      question: "Should a managed-cloud service include backups?",
      answer:
        "Only if backups and recovery are explicitly in scope. Define which data is protected, retention, recovery objectives, who responds to a failure and how restores are tested. A successful backup job alone does not demonstrate that the application can be recovered.",
    },
    {
      question: "How do I compare cloud app stack providers?",
      answer:
        "Give each provider the same architecture outline and ask for a layer-by-layer responsibility matrix, exclusions, approval path, evidence pack and exit process. Compare those boundaries alongside price and technology fit.",
    },
  ],
  related: [
    "cloud-cost-optimisation",
    "technical-due-diligence",
    "taking-over-an-existing-codebase",
  ],
};
