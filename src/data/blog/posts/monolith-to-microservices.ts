import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "monolith-to-microservices",
  title: "Monolith to Microservices: When It Is Worth It",
  seoTitle: "Monolith to Microservices Migration: Worth It?",
  description:
    "Most monolith to microservices migrations solve an org problem, not a technical one. The real drivers, the costs nobody budgets, and when to stop.",
  excerpt:
    "The unfashionable position, argued properly: most teams splitting a monolith should not, and the ones who should are usually fixing an organisational constraint rather than a technical one.",
  category: "Legacy Modernisation",
  primaryKeyword: "monolith to microservices migration",
  secondaryKeywords: [
    "modular monolith vs microservices",
    "when to split a monolith",
    "microservices migration costs",
    "microservices prerequisites",
    "how to break up a monolith",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "cloud-devops",
  keyTakeaway:
    "A monolith to microservices migration is worth it when several teams are blocked by a shared deploy pipeline, when components have genuinely different scaling profiles, or when a compliance boundary needs to be physically isolated — in other words, when the constraint is organisational or operational rather than aesthetic. It is not worth it because the codebase is messy: distributing a tangled dependency graph turns compile-time errors into production incidents. For most organisations under roughly three or four product teams, a modular monolith with enforced internal boundaries delivers the structural benefit without the operational bill.",
  sections: [
    {
      heading: "What a monolith to microservices migration actually changes",
      blocks: [
        {
          type: "p",
          text: "Strip away the vocabulary and a monolith to microservices migration does one thing: it replaces in-process function calls with network calls. A function call returns or throws, takes nanoseconds, and is checked by the compiler. A network call can return, throw, time out, return twice, or succeed on the server while failing on the client — and no compiler will tell you the payload shape changed last Tuesday.",
        },
        {
          type: "p",
          text: "In exchange you buy four properties that are hard to get any other way: each service deploys on its own schedule, scales on its own axis, fails inside its own blast radius, and can use whatever runtime suits its job. The question is whether those are worth more than database transactions, a debugger that steps through a whole request, and a test suite that runs on one machine.",
        },
        {
          type: "p",
          text: "Most teams price the first list and not the second. Two years after they start extracting, they hold the operational surface of a distributed system with the release coupling of a monolith.",
        },
      ],
    },
    {
      heading: "Which drivers genuinely justify splitting a monolith?",
      blocks: [
        {
          type: "p",
          text: "Four reasons hold up under scrutiny. Each comes with a test, and the test matters, because each reason is also available as a slogan.",
        },
        { type: "h3", text: "Independent deploy cadence across teams" },
        {
          type: "p",
          text: "When five teams share one pipeline, one team’s failing integration test holds everyone’s release, and coordination cost grows with the number of pairs of teams, not the number of teams. The test: how long does a merged change wait before reaching production, and how often is a release reverted for a reason unrelated to the change that triggered it? Hours and rarely means the pipeline is not your constraint.",
        },
        { type: "h3", text: "Genuinely divergent scaling profiles" },
        {
          type: "p",
          text: "A media transcoder wants many CPU-bound workers that idle overnight. An LLM inference path wants GPUs and a queue. An admin panel wants two small containers. One deployable means every replica carries the footprint and dependency tree of the heaviest component. The test: is one component’s load curve a different shape from the rest, or merely a different height? Different heights are a right-sizing problem; different shapes are an architecture problem.",
        },
        { type: "h3", text: "Isolating a regulated boundary" },
        {
          type: "p",
          text: "PCI DSS scope covers every system component that stores, processes or transmits cardholder data, plus anything connected to it. Moving payment handling into a narrow, audited service shrinks what an assessor must examine, and every engineer who never touches it leaves scope. The same logic covers health records or data that must stay in one jurisdiction. The boundary comes from outside, so the technical argument is secondary.",
        },
        { type: "h3", text: "Team autonomy at a size where it matters" },
        {
          type: "p",
          text: "Conway’s law says a system’s structure mirrors the communication structure of the organisation that built it, and Amazon’s two-pizza team convention applies that deliberately. Give a team an interface, a deployable and an on-call rota and you get autonomy. Below three or four product teams there is no coordination problem large enough to justify the cost; above ten, coordination is the dominant cost in the engineering budget.",
        },
        {
          type: "callout",
          text: "Every durable reason to split a monolith is a statement about teams, deployment or a boundary imposed from outside. None of them are statements about the elegance of the code.",
        },
      ],
    },
    {
      heading: "The reasons that will not survive the second year",
      blocks: [
        {
          type: "p",
          text: "The most common justification is that the monolith is messy. It usually is. But mess lives in the dependency graph, and moving that graph onto a network removes the tooling that kept it manageable. A cycle between two modules is a build error you fix in an afternoon; the same cycle between two services is a deploy-ordering problem, an API version negotiation, and an incident where each service waits on the other.",
        },
        {
          type: "p",
          text: "The honest test is uncomfortable. If you cannot draw clean boundaries inside one codebase, where a build tool enforces them and one refactor moves a boundary in an hour, you will not draw better ones across a network where nothing is enforced. Distribution does not create discipline. It punishes its absence.",
        },
        {
          type: "list",
          items: [
            "“It is the modern architecture.” Prime Video’s engineering team published in 2023 that consolidating a distributed monitoring pipeline back into one process cut its running cost substantially. The direction of travel is not always outward.",
            "“We need to scale.” To what, measured where? A vertical resize and a read replica solve a surprising share of the load problems presented as architecture problems.",
            "“One endpoint is slow.” Extracting it does not make it faster. Profiling it, adding an index or moving the work to a queue does, and none need a new deployable.",
            "“We want to rewrite that part in Go.” Runtime heterogeneity is real, and it also multiplies base images, build tooling, dependency scanning and the runtimes your team must keep current.",
            "“Engineers want microservices experience.” A genuine hiring consideration and a terrible architectural one. Say it out loud in the decision meeting and hear how it sounds.",
          ],
        },
      ],
    },
    {
      heading: "What does distribution cost that a monolith does not?",
      blocks: [
        { type: "h3", text: "Transactions stop being free" },
        {
          type: "p",
          text: "Writing to three tables and rolling all three back on failure is one database transaction inside a monolith. Across three services it is a saga: local transactions with a compensating action for each step, plus a state machine tracking where each workflow got to. Two-phase commit rarely survives contact with HTTP services, because it holds locks over a network you do not control. Every message bus worth using delivers at least once, so consumers must be idempotent and every write path needs a deduplication key.",
        },
        { type: "h3", text: "Partial failure becomes the permanent condition" },
        {
          type: "p",
          text: "Availability multiplies along a synchronous call chain. A request touching five services each up 99.9% of the time sits at 0.999 to the fifth — a little over 99.5%, roughly five times the downtime of any single component. That is arithmetic, not pessimism. Living with it means timeouts on every call, bounded retries with jitter so a recovering service is not flattened by a synchronised retry storm, circuit breakers, and a decided answer for what each caller shows when a dependency is down.",
        },
        { type: "h3", text: "Observability moves from nice to mandatory" },
        {
          type: "p",
          text: "A stack trace tells the whole story in a monolith. The distributed equivalent means instrumenting every service with OpenTelemetry, propagating W3C traceparent headers through every HTTP client and queue message, and running a backend that stores and queries the result. Trace and log volume grows with hops rather than user requests, so observability spend rises faster than traffic — often the largest surprise in the post-migration bill.",
        },
        { type: "h3", text: "Local development and testing get expensive" },
        {
          type: "p",
          text: "Once a feature touches six services, no laptop runs the system comfortably, so teams move to shared development clusters, per-developer namespaces or tools that proxy a local process into a remote environment — each a platform investment with its own maintenance. End-to-end tests turn slow and flaky, and the discipline that replaces them is consumer-driven contract testing: the consumer publishes the shape it depends on, the provider verifies it in CI. Skip it and you find your contracts in production.",
        },
        { type: "h3", text: "Somebody has to run all of it" },
        {
          type: "p",
          text: "Every service needs a pipeline, a base image, secret management, health checks, dashboards, alert routing, an owner and an on-call rota. Doing that thirty times by hand is not viable, so you build or buy a platform — a standing team, not a project. Without one, each service ends up maintained slightly differently, which is its own failure mode.",
        },
      ],
    },
    {
      heading: "Monolith, modular monolith and microservices compared",
      blocks: [
        {
          type: "table",
          caption: "The dimensions that actually differ in practice.",
          head: ["Dimension", "Monolith", "Modular monolith", "Microservices"],
          rows: [
            [
              "Complexity of one change",
              "Low — one codebase, one deploy, compiler checks everything",
              "Low to moderate — same, plus a boundary rule to satisfy",
              "High — API versioning, deploy ordering, backward compatibility",
            ],
            [
              "Deploy independence",
              "None — every change ships the whole system",
              "None by design, but modules are independently testable and ownable",
              "Full, provided contracts stay backward compatible",
            ],
            [
              "Operational cost",
              "One pipeline, one runtime, one set of dashboards",
              "Same, plus boundary enforcement in CI",
              "Per-service pipelines, gateway or mesh, tracing backend, platform team",
            ],
            [
              "Team size it fits",
              "1–2 teams",
              "2–6 teams sharing a codebase with clear module ownership",
              "6+ teams owning services end to end with their own on-call",
            ],
            [
              "Debugging a production issue",
              "Stack trace and a debugger",
              "Stack trace, plus module tags in logs",
              "Distributed trace, correlated logs, per-service metrics",
            ],
            [
              "Data consistency",
              "Transactions",
              "Transactions, schema per module",
              "Sagas and idempotent consumers",
            ],
            [
              "Cost of a wrong boundary",
              "A refactor",
              "A refactor plus a config change",
              "A cross-team migration, a data move, a deprecation window",
            ],
          ],
        },
        {
          type: "p",
          text: "The last row decides most cases: early boundaries are usually wrong, because you learn where the seams are by changing a system rather than by modelling it.",
        },
      ],
    },
    {
      heading: "How a modular monolith gets you most of the benefit",
      blocks: [
        {
          type: "p",
          text: "A modular monolith is one deployable containing modules that may only talk through published interfaces, with the rule enforced by tooling rather than code review. Internally it looks like a set of services; operationally it is one process, one pipeline, one database connection. Shopify has written publicly about componentising its Rails codebase this way rather than splitting it.",
        },
        {
          type: "p",
          text: "The mechanism differs by stack, the idea does not: make an illegal import fail the build. Ruby has Packwerk, TypeScript has project references with dependency-cruiser or eslint boundary rules, Java has the module system and ArchUnit, .NET has assembly-scoped visibility.",
        },
        {
          type: "code",
          lang: "javascript",
          code: "// .dependency-cruiser.js — billing may only be reached through its public API\nmodule.exports = {\n  forbidden: [\n    {\n      name: \"no-deep-import-into-billing\",\n      severity: \"error\",\n      from: { pathNot: \"^src/modules/billing\" },\n      to: {\n        path: \"^src/modules/billing/\",\n        pathNot: \"^src/modules/billing/index\\\\.ts$\",\n      },\n    },\n  ],\n};",
        },
        {
          type: "p",
          text: "Pair that with a schema per module in the same database and no foreign key crossing a module boundary — cross-module reads go through the owning module’s interface, not a join. That constraint is the one people skip, and it decides whether extracting a service later takes a fortnight or a year. Emit domain events through an outbox table written in the same transaction as the state change, dispatched in-process for now. On the day a module must become a service, the interface exists, the data is separable, and the event stream has a durable source.",
        },
      ],
    },
    {
      heading: "If you do split, what is the right sequence?",
      blocks: [
        {
          type: "p",
          text: "Assume a real driver and a modular monolith already in place. Order of work matters more than destination.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Name the constraint you are removing and the measurement that proves it is gone — deploy queue length, cost per request for one workload, audit scope. No measurement, no migration.",
            "Build the platform before the second service, not after the tenth: service template, pipeline, tracing, log correlation, secrets, alert routing. The first extraction pays for it, so make it reusable.",
            "Extract a leaf first — few inbound dependencies, an obvious owner. Notifications, document generation, scheduled reporting. Never the core domain model.",
            "Move the data with the service. A service reading another service’s tables is a distributed monolith with added latency, and harder to unwind than the original.",
            "Route through a facade so traffic shifts incrementally and reverts with a config change rather than a redeploy.",
            "Set a stopping rule in advance. Most organisations need a handful of services, not fifty, and a number decided after momentum builds will be whatever the momentum wants.",
          ],
        },
        {
          type: "p",
          text: "Splitting is reversible: two services that always deploy, change and fail together are one service paying a network tax.",
        },
      ],
    },
    {
      heading: "How to make the call",
      blocks: [
        {
          type: "p",
          text: "Two questions settle most cases. Is today’s pain caused by teams waiting on each other, by components that must scale in different shapes, or by a boundary an auditor imposed? If not, a monolith to microservices migration adds operational cost without removing what hurts. And could you operate the services tomorrow — tracing, contract tests, on-call rotas, deployment automation, platform ownership — if someone handed them to you fully built? If not, this is a capability project before it is an architecture project.",
        },
        {
          type: "p",
          text: "The defensible default is a modular monolith with enforced boundaries, a schema per module, and one or two services extracted where a genuine driver exists. If you are weighing that against a real codebase and a real team, we are happy to look at it with you — an architecture review that ends in a written recommendation, including the recommendation not to split. Talk to ApexStack before you commit to the shape of the answer.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "When should you migrate from a monolith to microservices?",
      answer:
        "When multiple teams are blocked by a shared deployment pipeline, when components have genuinely different scaling shapes rather than different sizes, or when a compliance boundary such as PCI DSS scope needs physical isolation. Below roughly three or four product teams, none of those constraints usually bind, and the operational cost of distribution outweighs the benefit. Code quality on its own is never sufficient justification.",
    },
    {
      question: "Is a modular monolith better than microservices?",
      answer:
        "For most organisations, yes — it gives you module boundaries, clear ownership and separable data without per-service pipelines, distributed tracing, sagas or a platform team. It also keeps the cost of a wrong boundary at roughly one refactor. Microservices win once team count makes coordination the dominant cost, or when workloads genuinely need to scale and fail independently of each other.",
    },
    {
      question: "How long does a monolith to microservices migration take?",
      answer:
        "There is no single answer, but the useful framing is that the first extraction takes disproportionately long because it includes building the platform: service template, pipeline, tracing, contract testing and on-call structure. Later extractions are far quicker. Any plan showing the first and second services taking similar effort has not accounted for the platform work and should be re-estimated before it is approved.",
    },
    {
      question: "What is a distributed monolith and how do you avoid it?",
      answer:
        "A distributed monolith is a set of services that must be deployed together, change together and fail together — all the operational cost of distribution with none of the independence. The usual causes are shared database tables, synchronous call chains through the core domain, and boundaries drawn along technical layers rather than business capabilities. Avoid it by moving data with each service and treating deploy independence as the acceptance criterion.",
    },
    {
      question: "Can you go back from microservices to a monolith?",
      answer:
        "Yes, and consolidation is a legitimate outcome rather than an admission of failure. If two services always ship together and always fail together, merging them removes a network hop, a failure mode and a pipeline. Prime Video’s engineering team published an account of consolidating a distributed pipeline back into one process for cost and performance reasons. Treat the split as reversible and the decision stays honest.",
    },
    {
      question: "Do microservices need a dedicated platform team?",
      answer:
        "Beyond a handful of services, effectively yes. Someone must own service templates, deployment automation, the tracing backend, secret management, alert routing and the service catalogue. Without that ownership each team solves the same problems slightly differently, and the inconsistency becomes its own class of incident. Budget platform engineering as a standing cost rather than as part of the migration project.",
    },
  ],
};
