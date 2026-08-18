import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "choosing-a-tech-stack-for-your-mvp",
  title: "Choosing a Tech Stack for Your MVP: A Decision Framework",
  seoTitle: "How to Choose a Tech Stack for Your MVP: A Framework",
  description:
    "How to choose a tech stack for an MVP: hiring pool, ecosystem fit, reversibility and lock-in, plus default stacks by product type.",
  excerpt:
    "A decision framework rather than a list of frameworks: how to weigh hiring pool, ecosystem maturity, reversibility and scaling headroom, plus sensible default stacks for five common product archetypes.",
  category: "MVP & Startups",
  primaryKeyword: "how to choose a tech stack for an MVP",
  secondaryKeywords: [
    "best tech stack for a startup MVP",
    "monolith vs microservices for MVP",
    "SQL vs NoSQL for a new product",
    "React Native vs Flutter vs native",
    "managed services vs self-hosting startup",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "custom-software-development",
  keyTakeaway:
    "How to choose a tech stack for an MVP comes down to four tests applied in order: can you hire for it in your market, does its ecosystem already solve your three hardest problems, how expensive is the decision to reverse, and has anyone on the team run it in production. Team familiarity beats theoretical superiority in almost every case, because an MVP is a race to learn something about the market rather than a benchmark. For most products the defensible default is a modular monolith in a language the team already writes, Postgres as the primary datastore, managed infrastructure, and cross-platform mobile only where the product does not depend on platform-specific capability.",
  sections: [
    {
      heading: "Why familiarity beats theoretical superiority almost every time",
      blocks: [
        {
          type: "p",
          text: "The question of how to choose a tech stack for an MVP is usually answered with a comparison of runtimes, which is the wrong axis. An MVP exists to answer a commercial question — will anyone pay for this — and the stack’s job is to reach that answer before the money runs out. The gap between two mainstream stacks is noise; the gap between one your team has shipped and one they have only read about is enormous.",
        },
        {
          type: "p",
          text: "A team that has run Django in production knows where a migration will lock a table, which ORM call produces the N+1, and how Celery behaves when Redis restarts. The same team writing their first Go service ships later, and ships the mistakes every first Go codebase contains: goroutine leaks, unhandled context cancellation. That is not an argument against Go, only against learning it on a runway.",
        },
        {
          type: "p",
          text: "Dan McKinley’s ‘Choose Boring Technology’ essay puts it well: you have a small budget of novelty, and every unfamiliar component spends some of it. Spend it on the part of the product that is genuinely new — the matching algorithm, the inference pipeline, the pricing engine — and buy the rest off the shelf.",
        },
      ],
    },
    {
      heading: "How to choose a tech stack for an MVP: five questions before any framework name",
      blocks: [
        {
          type: "p",
          text: "Run these in order. Most stack debates end at question one or three, long before anyone defends a runtime benchmark.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Can you hire for it in your market within 90 days? Do not argue this from opinion — search your local job board and count the candidates who have shipped it. React, TypeScript, Python and Java return a deep pool almost everywhere; some excellent alternatives return a pool you could fit in a meeting room.",
            "Does the ecosystem already solve your three hardest problems? Write down what you are least confident about — SAML sign-on, recurring billing with proration, geospatial queries — and check each has a mature, maintained library. A missing one is weeks you did not plan for.",
            "What does it cost to reverse? The web framework is reversible in months, the mobile framework in quarters, the datastore and the authentication model are close to permanent. Spend deliberation time in proportion to that.",
            "How does it behave at 100 times your launch load? Not at infinity — at 100x. If getting there means a larger instance, better indexes and a CDN, the stack is fine. If it means a rewrite, that is a real objection.",
            "Has anyone on the team run it in production, including the failure modes? Whoever has taken a 3am page for a technology knows things no documentation contains.",
          ],
        },
      ],
    },
    {
      heading: "Monolith or services at MVP stage?",
      blocks: [
        {
          type: "p",
          text: "Monolith, and not out of nostalgia. A service boundary is a guess about which parts of the system change independently, and at MVP stage you have no evidence for that guess. A network call in the wrong place is far more expensive to correct than a function call, because the wrong seam becomes a retry policy, an idempotency key, a distributed trace and an eventual-consistency bug that appears only under load.",
        },
        {
          type: "p",
          text: "The operational cost is plainer still. Five services means five deployment pipelines, five sets of dashboards, five dependency streams, and a local environment needing eight containers before anyone can run a test. Affordable at forty engineers, ruinous at four.",
        },
        {
          type: "p",
          text: "Build a modular monolith instead: one deployable, one database, hard internal boundaries. Each module exposes a small public surface and keeps everything else private, including its tables. The discipline that makes this work is refusing to let one module read another’s tables — cross-module access goes through a function, the same contract a service would expose, minus the network.",
        },
        {
          type: "code",
          lang: "python",
          code: "# billing/__init__.py — the only surface other modules may import.\n# Enforce with an import-linter contract in CI.\n\nfrom .service import create_subscription, cancel_subscription, invoice_for\n\n__all__ = [\"create_subscription\", \"cancel_subscription\", \"invoice_for\"]\n\n# orders/checkout.py\nfrom billing import create_subscription        # allowed\nfrom billing.models import Invoice             # blocked by the contract\n",
        },
        {
          type: "p",
          text: "Split something into its own process when its runtime requirements differ, not when its domain does. A GPU inference worker, a video transcoder, or a scraper that runs for forty minutes belongs outside the web process — the last because AWS Lambda caps execution at 15 minutes. A runtime constraint forcing a boundary is the only reason worth acting on this early.",
        },
      ],
    },
    {
      heading: "SQL or NoSQL when the data model is still moving?",
      blocks: [
        {
          type: "p",
          text: "Postgres, unless you can name the access pattern that defeats it. The strongest argument is the one usually made against relational databases: at MVP stage the model changes weekly. A schema plus a migration history turns those changes into a reviewed, reversible, testable record. A schemaless store turns them into five shapes of the same document in production, and code that handles all five forever.",
        },
        {
          type: "p",
          text: "Postgres also removes components you would otherwise add. JSONB with GIN indexes holds the parts of the model still unsettled, so you keep flexibility without abandoning integrity everywhere else. Full-text search with tsvector is good enough to launch on, deferring Elasticsearch by a year. The pgvector extension handles embedding similarity. Transactional DDL means a failed migration rolls back rather than leaving the schema half-applied.",
        },
        {
          type: "p",
          text: "NoSQL earns its place when the access pattern is known, singular and extreme. DynamoDB suits a high-write append workload with a designed key schema — but single-table design requires knowing your access patterns before the first item is written, which is exactly what an MVP lacks. Redis for ephemeral state, ClickHouse for analytical scans: reasonable additions, not replacements.",
        },
        {
          type: "p",
          text: "One detail worth knowing before you deploy: each Postgres connection is a separate backend process, so a serverless application opening a connection per invocation will exhaust the limit long before CPU becomes the issue. Put PgBouncer or your provider’s pooler in front of it on day one.",
        },
      ],
    },
    {
      heading: "How to choose a tech stack for an MVP by product archetype",
      blocks: [
        {
          type: "p",
          text: "These are defaults — what you pick absent a specific reason not to. Each row names what actually hurts first, which is rarely what teams prepare for.",
        },
        {
          type: "table",
          caption: "Default stacks for five product archetypes, with the first real pain point in each.",
          head: ["Product archetype", "Default application stack", "Data layer", "What hurts first"],
          rows: [
            [
              "Two-sided marketplace",
              "Rails or Django monolith, Next.js front end, Stripe Connect for payouts",
              "Postgres, using its own full-text search before any search engine",
              "Payout reconciliation and search relevance, never raw throughput. A mature framework’s admin, auth and job ecosystem removes months.",
            ],
            [
              "Data-heavy B2B SaaS",
              "TypeScript end to end (Next.js plus a Node or NestJS API), or Django",
              "Postgres with row-level tenancy and a read replica for reporting",
              "Reporting queries competing with transactional load. Route analytics to the replica early; treat tenant isolation as a tested invariant.",
            ],
            [
              "Real-time collaboration",
              "Elixir with Phoenix Channels, or Node with a managed WebSocket layer",
              "Postgres for durable state, plus Yjs or Automerge CRDTs for the document",
              "Conflict resolution and presence fan-out, not socket count. Decide whether the server or the CRDT is authoritative first.",
            ],
            [
              "Mobile-first consumer",
              "React Native with Expo, or Flutter; a small API rather than a large one",
              "Managed Postgres, or Supabase or Firebase if the team is very small",
              "Release cadence gated by app review and users who never update. Ship remote config and a forced-upgrade path in version one.",
            ],
            [
              "AI-native product",
              "Python with FastAPI for inference and orchestration, TypeScript for the app",
              "Postgres with pgvector, plus object storage for source documents",
              "Cost and latency per request, and the absence of evaluation. You need tracing and a scored eval set before a vector database.",
            ],
          ],
        },
      ],
    },
    {
      heading: "When does React Native or Flutter beat native?",
      blocks: [
        {
          type: "p",
          text: "React Native wins when you already have a React and TypeScript team and the application is mostly screens, lists, forms and network calls. The saving is not only shared UI code: shared types, shared validation, shared API clients and shared people. Since version 0.76 the New Architecture, with the Fabric renderer and TurboModules, is the default, removing the asynchronous bridge behind most historical performance complaints. Expo and EAS remove the build and signing pipeline.",
        },
        {
          type: "p",
          text: "Flutter wins when you want identical rendering across platforms and a lot of custom UI. It draws its own widgets rather than mapping to platform controls, so parity is architectural rather than something chased through bug reports. The cost is Dart: a separate hiring pool, and nothing shared with a web front end.",
        },
        {
          type: "p",
          text: "Native is right when the product’s value is the platform capability — sustained camera and video pipelines, background location, HealthKit or Google Fit, Bluetooth Low Energy with timing constraints, on-device machine learning, ARKit. In each case the cross-platform layer is a wrapper around the thing you are actually building. Native is also cheaper when you only need one platform.",
        },
        {
          type: "callout",
          text: "Cross-platform gives you one codebase, not one platform. You still need two developer accounts, two signing configurations, two review processes, two sets of privacy declarations, and someone who can read a native crash log.",
        },
      ],
    },
    {
      heading: "Managed services or self-hosting, and what lock-in actually costs",
      blocks: [
        {
          type: "p",
          text: "Pay for anything that is not your differentiator until the invoice is worth an engineer’s month. Managed Postgres does not buy you the database — you can install that in ten minutes. It buys tested backups, point-in-time recovery, automated failover and a patching schedule somebody else owns. The break-even is not the price of a virtual machine; it is the cost of whoever would otherwise carry the pager.",
        },
        {
          type: "p",
          text: "Lock-in comes in two grades that deserve entirely different treatment. Configuration-level lock-in is fine: managed Postgres, S3-compatible object storage, containers and standard queues are replaceable in days or weeks because the interface is a standard. Logic-level lock-in is the expensive kind, and it happens when application behaviour moves into the vendor — business rules written into Firestore security rules, a DynamoDB single-table design encoding access patterns into keys, a proprietary workflow engine holding your state machine.",
        },
        {
          type: "p",
          text: "The test: if you had to move, how much is configuration and how much is rewriting application logic? Configuration-level dependence is a sound MVP decision. Logic-level dependence should be deliberate, and traded for something specific — usually speed, which is fair as long as nobody pretends it was free.",
        },
        {
          type: "p",
          text: "One cost consistently surprises teams: data egress. Check the published per-gigabyte transfer-out price before deciding where large media files live.",
        },
      ],
    },
    {
      heading: "What actually breaks at 100 times your launch load?",
      blocks: [
        {
          type: "p",
          text: "You do not need to design for infinite scale. You need the first hundredfold increase to be a purchasing decision and an indexing exercise, not a rewrite. A single Postgres primary with correct indexes, a read replica, stateless application servers behind a load balancer, a CDN and a background queue will carry an ordinary business application a long way.",
        },
        {
          type: "p",
          text: "The failures arrive in a predictable order, and none concern the framework you chose. N+1 queries surface first, usually on a list endpoint built with an ORM in a hurry. Then missing indexes on the columns your filters actually use rather than the ones you expected. Then synchronous third-party calls in the request path — email, payment authorisation, model inference — each turning a partner’s slow day into your outage. Then unbounded result sets, connection exhaustion, and the job queue still inside the web process.",
        },
        {
          type: "p",
          text: "The insurance is cheap if bought early: keep application servers stateless with no in-process sessions and no local disk writes, put anything slower than a few hundred milliseconds behind a queue, add request tracing, paginate every list endpoint, and set a statement timeout so a bad query degrades one request, not the service.",
        },
        {
          type: "p",
          text: "What genuinely does not survive 100x deserves a conscious decision: a single-writer database under a write-heavy workload, schema-per-tenant once tenant counts reach the thousands, and WebSocket state held in process memory on horizontally scaled servers.",
        },
        {
          type: "p",
          text: "If you are making these calls for a product that has to be in front of users in a few months, it is worth pressure-testing them with someone who has lived with the consequences elsewhere. That is the conversation we usually have before anyone writes code.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the best tech stack for an MVP?",
      answer:
        "The one your team can ship confidently, which for most teams means a mainstream language with a deep hiring pool, a single deployable application, Postgres as the primary datastore and managed infrastructure. TypeScript with Next.js and a Node API, Python with Django or FastAPI, and Ruby on Rails are all defensible defaults. The stack matters far less than whether the team has run it in production before, including its failure modes.",
    },
    {
      question: "Should an MVP use microservices?",
      answer:
        "No. A service boundary is a guess about which parts of the system change independently, and at MVP stage there is no evidence to support that guess. Build a modular monolith instead: one deployable and one database, with hard internal boundaries where modules call each other through small public functions rather than reading each other’s tables. Split out a separate process only when the runtime genuinely differs, such as GPU inference or long-running jobs.",
    },
    {
      question: "Should I use SQL or NoSQL for a new product?",
      answer:
        "Use Postgres unless you can name the specific access pattern that defeats it. An MVP’s data model changes weekly, and a schema with a migration history makes those changes reviewable and reversible, whereas a schemaless store leaves several document shapes coexisting in production forever. Postgres also covers JSON documents, full-text search, vector similarity through pgvector and lightweight pub/sub, which defers several extra components by a year or more.",
    },
    {
      question: "Is React Native good enough for a production app?",
      answer:
        "Yes, for applications that are mostly screens, lists, forms and network calls, particularly if you already have a React and TypeScript team. Since version 0.76 the New Architecture with the Fabric renderer is the default, removing the asynchronous bridge behind most historical performance complaints. Choose native instead when the product depends on platform capability — sustained camera pipelines, background location, Bluetooth Low Energy with timing constraints, or heavy on-device machine learning.",
    },
    {
      question: "How much does the tech stack choice affect the cost of building an MVP?",
      answer:
        "Less than scope does, and less than team familiarity does. Two mainstream stacks will produce broadly similar build costs for the same specification, while the same team working in an unfamiliar stack typically takes considerably longer and ships more defects. The stack affects long-term cost mostly through hiring supply, the maturity of libraries for your hardest problems, and how much application logic ends up locked inside a vendor.",
    },
    {
      question: "When should I move off my MVP stack?",
      answer:
        "When a specific measured constraint forces it, not on a schedule. Legitimate triggers include a write-heavy workload outgrowing a single database writer, an analytical workload interfering with transactional queries, or a hiring market that no longer supplies the skill. Rewriting because the stack feels dated is the most expensive decision an early team can make, and it usually reproduces the original defects in a new language.",
    },
  ],
};
