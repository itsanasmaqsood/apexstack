import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "monolith-to-microservices",
  title: "Monolith to Microservices Migration: When Is It Worth It?",
  seoTitle: "Monolith to Microservices Migration Guide",
  description:
    "Decide whether to migrate a monolith, what to measure first, and how to extract services without creating a distributed monolith.",
  excerpt:
    "A practical decision and migration guide for teams weighing microservices against a modular monolith.",
  category: "Legacy Modernisation",
  primaryKeyword: "monolith to microservices",
  secondaryKeywords: [
    "monolith to microservices migration",
    "modular monolith vs microservices",
    "when to split a monolith",
    "microservices migration services",
    "how to break up a monolith",
  ],
  published: "2026-08-12",
  updated: "2026-08-28",
  authorId: "leadership-01",
  serviceSlug: "cloud-devops",
  keyTakeaway:
    "Move from a monolith to microservices only when a measured constraint requires independent deployment, scaling, failure isolation or data ownership. Messy code alone is not enough: distributing unclear boundaries usually adds network failures and operational work without creating autonomy. First enforce module boundaries inside the monolith, then extract one low-risk capability through a facade using the strangler fig pattern. Keep the migration incremental, measurable and reversible.",
  sections: [
    {
      heading: "What should trigger a monolith to microservices migration?",
      blocks: [
        {
          type: "p",
          text: "A migration needs a constraint that a separate deployable can remove. Useful evidence includes changes waiting behind unrelated releases, one workload needing a distinct scaling model, incidents spreading across unrelated capabilities, or ownership that cannot be enforced inside the current application. Record the baseline before changing architecture: deployment lead time, rollback causes, resource use by workload, incident scope and the teams involved.",
        },
        {
          type: "p",
          text: "Microsoft's microservices architecture guidance describes services as independently deployable and responsible for their own domain logic and data. Those properties are valuable only when the organisation can use them. If every service must still release together, share the same tables and wait for the same approval chain, the system has gained network boundaries without gaining independence.",
        },
        {
          type: "callout",
          text: "Write the constraint and its success measure in one sentence. If the team cannot do that, improve the monolith before funding a migration.",
        },
      ],
    },
    {
      heading: "When should you keep the monolith?",
      blocks: [
        {
          type: "p",
          text: "Keep one deployable when the product is still changing quickly, the domain boundaries are uncertain, releases are not blocked by unrelated work and the application can meet its reliability and scaling requirements as one system. A modular monolith can still give each capability a clear interface, owner and test boundary while retaining one deployment pipeline and straightforward transactions.",
        },
        {
          type: "p",
          text: "Do not split because the code is difficult to understand. First make dependencies visible, define modules around business capabilities and prevent code from importing another module's internals. If the team cannot maintain those boundaries in one repository, a network will not create the missing discipline. It will make each violation slower to diagnose and harder to change.",
        },
        {
          type: "list",
          items: [
            "One slow endpoint: profile the request, inspect database access and move long-running work to a queue before creating a service.",
            "A large codebase: improve ownership, module boundaries, test isolation and build performance before changing the runtime architecture.",
            "A desire to use another language: count the additional build, patching, observability and operational work before treating runtime choice as a migration driver.",
            "General scaling concerns: identify the constrained workload and its resource pattern instead of distributing the whole application pre-emptively.",
          ],
        },
      ],
    },
    {
      heading: "How do a monolith, modular monolith and microservices differ?",
      blocks: [
        {
          type: "table",
          caption: "Choose the simplest architecture that satisfies the measured constraint.",
          head: ["Decision area", "Monolith", "Modular monolith", "Microservices"],
          rows: [
            ["Deployment", "One application release", "One release with enforced internal boundaries", "Independent releases when contracts remain compatible"],
            ["Data changes", "Local transactions are straightforward", "Modules can own schemas inside one database", "Cross-service workflows need explicit consistency and recovery rules"],
            ["Failure handling", "Most failures stay inside one process", "Module faults can be isolated in code but share the runtime", "Timeouts, retries, duplicate messages and partial failure are normal design concerns"],
            ["Observability", "Application logs, metrics and traces", "The same signals tagged by module", "Correlation across service and queue boundaries is essential"],
            ["Boundary changes", "Code refactor", "Code and schema refactor", "Contract, data and deployment migration across owners"],
            ["Best fit", "One product that benefits from simple operation", "A growing product with identifiable capabilities", "Capabilities that genuinely need independent ownership or operation"],
          ],
        },
        {
          type: "p",
          text: "The modular monolith is not a temporary failure state. It is a deliberate option when domain separation matters but independent operation does not. It also creates a safer proving ground: a boundary that survives real feature work inside one application is a stronger extraction candidate than a boundary drawn only in an architecture workshop.",
        },
      ],
    },
    {
      heading: "What must be ready before the first service is extracted?",
      blocks: [
        {
          type: "p",
          text: "A service needs more than an API. Before extraction, decide who owns it, how it deploys, what data it controls, how callers behave when it is unavailable and how the team will observe a request across the boundary. Microsoft advises modelling services around business capabilities and avoiding boundaries that produce chatty calls or require two services to remain consistent with each other.",
        },
        {
          type: "list",
          items: [
            "A named capability owner with authority over the service contract and production operation.",
            "An automated deployment path, health checks, rollback procedure, secret handling and dependency patching process.",
            "A documented API or event contract with compatibility rules for consumers.",
            "A data-ownership plan that prevents the new service from reading and writing another module's tables directly.",
            "Timeout, retry and idempotency behaviour for every remote call or message handler.",
            "Logs, metrics and distributed traces that preserve context across HTTP and messaging boundaries.",
          ],
        },
        {
          type: "p",
          text: "OpenTelemetry documents context propagation as the mechanism that correlates traces across service boundaries, while the W3C Trace Context standard defines interoperable trace headers. If the team cannot follow one request through the proposed boundary before launch, production troubleshooting will depend on guesswork.",
        },
      ],
    },
    {
      heading: "How should you break up a monolith safely?",
      blocks: [
        {
          type: "p",
          text: "Use an incremental replacement rather than a rewrite. AWS describes the strangler fig pattern as placing a proxy or facade in front of the existing system, routing selected functionality to a new service and gradually replacing the old implementation. That creates a controlled traffic switch and a practical rollback path while the monolith continues to serve the remaining capabilities.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Baseline the constraint. Measure the delay, resource bottleneck, incident scope or ownership conflict the extraction is meant to remove.",
            "Create and enforce the capability boundary inside the monolith. Give it a published interface and prevent direct access to its internal code.",
            "Select a low-coupling capability with clear data ownership. Avoid the most central domain workflow as the first experiment.",
            "Prepare the operational path: deployment, rollback, dashboards, alerts, trace propagation, contract checks and an accountable owner.",
            "Put a facade in front of the old capability and move traffic gradually. Keep the old route available until production evidence supports removal.",
            "Move data ownership deliberately. Use an explicit transition process rather than leaving both systems to update shared tables indefinitely.",
            "Compare the result with the baseline. Continue only if the extraction removes the stated constraint without unacceptable reliability or operating cost.",
          ],
        },
      ],
    },
    {
      heading: "How do you avoid creating a distributed monolith?",
      blocks: [
        {
          type: "p",
          text: "A distributed monolith consists of separate processes that still need to change, deploy or recover together. The usual warning signs are shared database writes, long synchronous call chains, release checklists that coordinate every service and interfaces organised by technical layers instead of business capabilities.",
        },
        {
          type: "table",
          caption: "Test whether the extracted service is genuinely independent.",
          head: ["Test", "Healthy evidence", "Warning sign"],
          rows: [
            ["Can it deploy alone?", "A compatible change reaches production without coordinated releases", "Every release needs several repositories and teams"],
            ["Does it own its data?", "Other capabilities use its contract", "Other services update its tables directly"],
            ["Can callers tolerate failure?", "Timeouts and degraded behaviour are defined", "One unavailable dependency breaks the whole request path"],
            ["Can the team diagnose it?", "Logs, metrics and traces identify the failing boundary", "Incidents require searching unrelated systems by timestamp"],
            ["Can it be merged back?", "The contract and data transition are understood", "Architecture momentum is the only reason it remains separate"],
          ],
        },
        {
          type: "p",
          text: "Treat consolidation as a valid result. If two services always change and fail together, merging them may remove a network boundary without reducing useful autonomy. A reversible programme can stop after one extraction, keep a modular monolith for the rest, or reverse a boundary that production evidence disproves.",
        },
      ],
    },
    {
      heading: "What should a migration proposal include?",
      blocks: [
        {
          type: "p",
          text: "A credible proposal should be priced and reviewed around evidence, not a target number of services. Ask for the current constraint, baseline measures, candidate boundary, data transition, operational prerequisites, rollback route and stopping rule. Estimates should separate platform work from each extraction so the buyer can see which capabilities remain useful even if the programme stops early.",
        },
        {
          type: "list",
          items: [
            "The buyer outcome and metric that justify the architectural change.",
            "A dependency and data-flow map for the candidate capability.",
            "The interface, compatibility and data-ownership decisions.",
            "Deployment, security, observability, support and incident ownership.",
            "A staged traffic plan with acceptance criteria and rollback conditions.",
            "Explicit exclusions, unresolved risks and the evidence required for the next extraction.",
          ],
        },
        {
          type: "p",
          text: "ApexStack's Product Blueprint starts from US$1,000 for one bounded planning and de-risking question; it is not a production migration. A Launch Sprint starts from US$2,500 for one tightly scoped first release or core workflow covering planning, UX direction, implementation, testing and deployment. A legacy migration involving several services, data movement, compliance or extensive platform work requires a separately evidenced scope. Review the current pricing and discuss the existing system before selecting an engagement.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "When should you migrate from a monolith to microservices?",
      answer: "Migrate when a measured constraint requires independent deployment, scaling, failure isolation or data ownership. Record the baseline and define what one extraction must improve. If the problem is mainly unclear code boundaries, strengthen a modular monolith first.",
    },
    {
      question: "Is a modular monolith better than microservices?",
      answer: "A modular monolith is often the better fit when business capabilities need clear ownership but do not need independent operation. It preserves one deployment and straightforward transactions while letting the team enforce interfaces and data boundaries. Microservices become useful when independent operation solves a real constraint.",
    },
    {
      question: "How long does a monolith to microservices migration take?",
      answer: "There is no responsible universal duration. It depends on dependency clarity, data ownership, deployment automation, observability, compliance and the number of capabilities that genuinely need extraction. Estimate the platform prerequisites and first service separately, then approve later work from production evidence.",
    },
    {
      question: "What is the strangler fig pattern?",
      answer: "The strangler fig pattern incrementally replaces part of an existing application. A facade routes selected functionality to a new implementation while the rest remains in the monolith. Traffic moves gradually, which makes verification and rollback safer than a single cutover.",
    },
    {
      question: "What is a distributed monolith?",
      answer: "A distributed monolith is a group of services that still need to change, deploy or recover together. Shared database writes, long synchronous call chains and coordinated releases are common signs. It carries distributed-system failure modes without achieving independent ownership.",
    },
    {
      question: "Can microservices be merged back into a monolith?",
      answer: "Yes. If two services consistently change and fail together, consolidation can remove operational complexity without sacrificing useful autonomy. Keep contracts and data transitions understandable so a boundary remains reversible when production evidence does not support it.",
    },
  ],
  sources: [
    { title: "Microservices architecture style", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices", publisher: "Microsoft Azure" },
    { title: "Identify microservice boundaries", url: "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/microservice-boundaries", publisher: "Microsoft Azure" },
    { title: "Strangler fig pattern", url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/strangler-fig.html", publisher: "Amazon Web Services" },
    { title: "Context propagation", url: "https://opentelemetry.io/docs/concepts/context-propagation/", publisher: "OpenTelemetry" },
    { title: "Trace Context", url: "https://www.w3.org/TR/trace-context/", publisher: "W3C" },
  ],
};
