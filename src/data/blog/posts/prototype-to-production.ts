import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "prototype-to-production",
  title: "From Prototype to Production: What Breaks First",
  seoTitle: "Taking a Prototype to Production: What Breaks First",
  description:
    "Taking a prototype to production breaks things in a predictable order. The failure modes, when each surfaces, the blast radius, and the fix.",
  excerpt:
    "Auth, indexes, rate limits, uploads, backups and race conditions fail in a reliable sequence once real users arrive. Here is the order, and what each one costs you.",
  category: "MVP & Startups",
  primaryKeyword: "taking a prototype to production",
  secondaryKeywords: [
    "how to make an MVP production ready",
    "production readiness checklist for startups",
    "prototype vs production code",
    "why prototypes fail in production",
    "MVP technical debt",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "product-engineering",
  keyTakeaway:
    "Taking a prototype to production breaks things in a predictable order: authentication and object-level authorisation fail on the first real user, missing indexes and N+1 queries fail as the data grows, and race conditions, unbounded uploads and absent rate limits fail as concurrency arrives. Sequence the work by blast radius rather than by effort — authorisation, secrets, backups and error tracking before launch; rate limits, idempotency, indexes and migrations in the first month. The two fixes that get dramatically more expensive with time are how you store money and how you store time, because both eventually require a backfill across live data.",
  sections: [
    {
      heading: "What actually changes when a prototype meets real users",
      blocks: [
        {
          type: "p",
          text: "A prototype answers one question: can this be built at all. It runs on a laptop, for one user who knows which buttons not to press, against a few dozen hand-typed rows. Taking a prototype to production invalidates all three conditions in a week.",
        },
        {
          type: "p",
          text: "The failures then arrive in a reliable order, sequenced by how much traffic and data each needs to surface. Authorisation breaks on day one: the first real user is the first person who is not you. Query performance breaks around month two, when a table passes the point at which a sequential scan stops being free. Concurrency bugs break the moment two people click the same button inside the same second. None of this indicts the prototype — one that handled it all would have cost four times as much and answered the same question.",
        },
        {
          type: "p",
          text: "Every item here has a known cause and fix. What makes them dangerous is that a prototype gives no signal any of them exist — it passes every test you thought to run, because you wrote them and you were the only user.",
        },
      ],
    },
    {
      heading: "What breaks first when taking a prototype to production: identity and access",
      blocks: [
        {
          type: "p",
          text: "Prototype auth takes one of three shapes: a hard-coded user, a JWT signed with a secret that also lives in the repository, or a token in localStorage with no expiry. When a token cannot expire or be revoked, the only way to end a session is rotating the signing secret, which logs everyone out — so nobody does it, and the offboarded employee keeps access. A token in localStorage is readable by any script on the page, turning one compromised dependency into account takeover.",
        },
        {
          type: "p",
          text: "The dangerous half is the part prototypes almost never have. A prototype checks whether someone is logged in; production must check whether this actor may touch this record. When it does not, a customer who edits an integer in a URL sees another customer’s invoice. Broken object-level authorisation sits at the top of the OWASP API Security Top 10 for good reason: it is discoverable by incrementing a number, and unlike a slow query it gives no warning first.",
        },
        {
          type: "p",
          text: "The fix is structural rather than a bigger library: every read and write passes through one check taking both actor and resource, close to the data rather than scattered across route handlers. Row-level security or a scoped query builder works; remembering to add the tenant filter to each new endpoint does not.",
        },
      ],
    },
    {
      heading: "Why the database is fine at 50 rows and dead at 500,000",
      blocks: [
        {
          type: "p",
          text: "Postgres will scan a fifty-row table faster than it would use an index on it, and the planner is right to do so, so a prototype gives you no feedback about missing indexes. Once the working set outgrows cache the application does not degrade gracefully: slow queries hold connections, the pool empties, and unrelated requests start timing out.",
        },
        {
          type: "p",
          text: "Two problems get conflated. One is missing indexes on the columns you filter, sort and join by — foreign keys are the usual omission, since Postgres indexes the primary key automatically but not the referencing side. The other is the N+1, where an ORM issues one query for a list and one more per row. Over a local socket, 201 queries at a fraction of a millisecond each are invisible; across an availability zone boundary at a few milliseconds each, the same page takes over a second to render.",
        },
        {
          type: "code",
          lang: "sql",
          code: "EXPLAIN ANALYZE\nSELECT * FROM invoices\nWHERE organisation_id = $1\nORDER BY created_at DESC\nLIMIT 50;\n--  Seq Scan on invoices  ->  Filter: (organisation_id = $1)\n--  Rows Removed by Filter: 498   -- cheap now, linear later\n\n-- CONCURRENTLY: an index build, not an outage.\nCREATE INDEX CONCURRENTLY invoices_org_created_idx\n  ON invoices (organisation_id, created_at DESC);",
        },
        {
          type: "list",
          items: [
            "Set log_min_duration_statement to a threshold you would be embarrassed by, so slow queries announce themselves rather than arriving as complaints.",
            "Enable pg_stat_statements and read it fortnightly. It ranks by total time, which is the number that matters, not worst single execution.",
            "Assert query counts in tests for busy endpoints. Almost nothing else catches an N+1 reintroduced by a refactor.",
            "Cap page size server-side, and prefer keyset pagination to OFFSET on long lists — OFFSET 10000 makes the database walk ten thousand rows to discard them.",
          ],
        },
      ],
    },
    {
      heading: "The failure order, with blast radius and fix",
      blocks: [
        {
          type: "p",
          text: "In the order they surface; blast radius decides the sequencing.",
        },
        {
          type: "table",
          caption: "Failure modes in the order they surface",
          head: [
            "Failure mode",
            "When it surfaces",
            "Blast radius",
            "The fix",
          ],
          rows: [
            [
              "No object-level authorisation",
              "First customer who edits an ID in a URL",
              "Cross-tenant data exposure; a reportable breach",
              "One check on actor plus resource, in the data layer",
            ],
            [
              "Secrets in the repository",
              "First fork, offboarded contractor, lost laptop",
              "Full compromise of every connected system",
              "Secret manager, rotate everything committed, scanning in CI",
            ],
            [
              "No error tracking",
              "Immediately — you just cannot see it",
              "Broken paths stay broken; you learn from a churned customer",
              "Exception capture with release context, alerts on new signatures",
            ],
            [
              "Backups absent or never restored",
              "First bad migration or DELETE without WHERE",
              "Total data loss; frequently terminal",
              "Snapshots, point-in-time recovery, a rehearsed and timed restore",
            ],
            [
              "Tokens that never expire",
              "First offboarding or stolen device",
              "Indefinite access; the only revocation logs everyone out",
              "Short-lived access tokens, rotating refresh tokens, revocation list",
            ],
            [
              "No rate limiting",
              "First scraper or client retry storm",
              "Metered bills, exhausted quotas, denial of service",
              "Per-IP and per-identity limits at the edge, plus idempotency keys",
            ],
            [
              "Missing indexes",
              "As the working set outgrows cache",
              "Everything slows; pool exhausts; unrelated endpoints fail",
              "pg_stat_statements; index filter, sort and foreign-key columns CONCURRENTLY",
            ],
            [
              "N+1 queries",
              "When a list page exceeds a screenful",
              "Latency scales with page size; one endpoint saturates the DB",
              "Eager loading or a batching loader; query-count assertions in tests",
            ],
            [
              "Unbounded file uploads",
              "First 4 GB video or decompression bomb",
              "Disk and memory exhaustion; malware on your domain",
              "Proxy size limits, real content-type checks, presigned uploads elsewhere",
            ],
            [
              "Race conditions on writes",
              "Two users acting in the same second",
              "Duplicate charges, double-booked slots, negative stock",
              "Unique constraints, row locks or version columns, idempotency keys",
            ],
            [
              "Naive timestamps, float money",
              "First overseas customer; first penny that will not reconcile",
              "Wrong reports and billing; corruption predating discovery",
              "timestamptz in UTC plus IANA zone; integer minor units and currency code",
            ],
            [
              "No migration path",
              "First divergence between developers or environments",
              "Environments drift; deploys become manual and unrepeatable",
              "Versioned forward-only migrations; expand-then-contract for breaks",
            ],
          ],
        },
      ],
    },
    {
      heading: "What the open internet does to an unprotected endpoint",
      blocks: [
        {
          type: "p",
          text: "Obscurity stopped being a control years ago: every publicly trusted TLS certificate is written to public, searchable Certificate Transparency logs, so a hostname is discoverable minutes after you issue its certificate. Scanners follow, and nothing needs to link to your endpoint for it to receive traffic.",
        },
        {
          type: "p",
          text: "Rate limiting pays for itself fastest, because unauthenticated traffic now converts directly into money. Any route triggering a metered call on your behalf — a model inference, an SMS, a geocoding lookup — is a route where someone else spends your budget in a loop. Limit per identity as well as per IP: an IP limit falls to a proxy pool, an identity limit to repeated signups.",
        },
        {
          type: "p",
          text: "File uploads combine three failure modes. The size limit belongs at the reverse proxy, so a 4 GB body is rejected before your process buffers it. Content-Type and extension are client-supplied, so validate the bytes and re-encode images. And serving user content from your own domain means an uploaded HTML file executes with your cookies in scope; a separate domain or a signed object-storage URL removes that.",
        },
        {
          type: "callout",
          text: "Deleting a secret from the current commit does not remove it. Treat anything ever committed as public and rotate it. Rewriting history is cleanup, not remediation.",
        },
      ],
    },
    {
      heading: "Why you hear about the outage from a customer, not a dashboard",
      blocks: [
        {
          type: "p",
          text: "A prototype’s error handling is a person watching a terminal. Production removes the person: the exception happens in a background worker at three in the morning, and the only trace is a customer who abandoned the signup form. Teams debate observability tooling for a fortnight and ship none of it, when the useful minimum is a day.",
        },
        {
          type: "list",
          items: [
            "Exception capture carrying release, tenant and request, alerting on the first occurrence of a new error signature rather than on volume — volume alerts miss the bug hitting only the twelve customers who matter.",
            "Structured logs with a request identifier propagated through every service and queued job, so one identifier reconstructs the path.",
            "Four alerts, not forty: error rate, p95 latency, queue depth or replication lag, and a synthetic check of the journey that produces revenue.",
            "An uptime check running outside your own infrastructure — a health check hosted on the thing that is down reports nothing at all.",
            "Point-in-time recovery plus one rehearsed, timed restore.",
          ],
        },
        {
          type: "callout",
          text: "A backup you have never restored is a hypothesis. The rehearsal is the deliverable: it tells you the restore works, how long it takes, and which credentials nobody can find at 2am.",
        },
      ],
    },
    {
      heading: "Concurrency, time zones and money: the quiet correctness bugs",
      blocks: [
        {
          type: "p",
          text: "Race conditions never appear in logs as errors, because nothing errored. Check-then-act is the pattern: the handler queries for an existing booking, finds none, inserts one. Two requests milliseconds apart both find nothing and both insert. Application code cannot fix this alone, since the requests may be in different processes on different machines. The invariant must live where all writers converge.",
        },
        {
          type: "code",
          lang: "sql",
          code: "-- The constraint is the control; application logic is convenience.\nALTER TABLE bookings\n  ADD CONSTRAINT bookings_slot_unique UNIQUE (resource_id, starts_at);\n\nINSERT INTO bookings (resource_id, starts_at, customer_id)\nVALUES ($1, $2, $3)\nON CONFLICT (resource_id, starts_at) DO NOTHING\nRETURNING id;\n-- Zero rows means somebody else won the race.",
        },
        {
          type: "p",
          text: "For anything reaching outside your database — charging a card, sending a message — the control is a caller-generated idempotency key, which is why Stripe accepts an Idempotency-Key header on writes. A client retrying after a timeout otherwise cannot know whether the first attempt succeeded, and a retry storm becomes a billing incident.",
        },
        {
          type: "p",
          text: "Time and money are where prototypes make the decisions that are expensive to reverse. Store timestamps as timestamptz in UTC and keep the IANA zone when the zone is part of the intent: a recurring nine o’clock meeting is a local time plus a zone, not an instant, and collapsing it to UTC moves it by an hour twice a year. Money as a float is worse, since IEEE 754 cannot represent 0.1 exactly and errors compound across sums. Store integer minor units with an ISO 4217 code, and note that not every currency has two decimals: JPY has none, KWD three.",
        },
      ],
    },
    {
      heading: "How to sequence taking a prototype to production without stalling the roadmap",
      blocks: [
        {
          type: "p",
          text: "Hardening gets deferred because it arrives as one undifferentiated block called technical debt, which competes badly against features. Split it by blast radius and most becomes schedulable.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Before the first external user: the authorisation check, secrets out of the repository and rotated, backups with one rehearsed restore, exception tracking, body size limits at the edge. Here the downside is unrecoverable rather than embarrassing.",
            "In the first fortnight: rate limiting on public and metered routes, idempotency keys on external writes, slow query logging, request identifiers in logs, migrations under version control.",
            "In the first ninety days: an index audit driven by pg_stat_statements rather than intuition, N+1 removal with query-count assertions, and the money and time representations corrected while the tables are still small enough to backfill in one maintenance window.",
          ],
        },
        {
          type: "p",
          text: "The last two get more expensive every week they wait, for a reason worth stating: money and time representation are not code changes, they are data migrations. Altering a column takes an afternoon; backfilling four million rows whose original currency was never recorded takes a project, and some of that information may no longer exist.",
        },
        {
          type: "p",
          text: "For most prototypes the first two groups are a fortnight of focused work, not a quarter. If you have something customers are about to touch and want a second pair of eyes over the list first, a hardening pass is straightforward to scope — we are happy to talk through what that looks like on your stack.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What breaks first when a prototype goes live to real users?",
      answer:
        "Authentication and authorisation, almost always. The first real user is the first person who is not the developer, which exposes missing object-level checks, tokens that never expire, and sessions that cannot be revoked. Performance problems follow weeks later as data accumulates, and concurrency bugs follow those once two people act at the same moment. Sequence fixes by blast radius: data exposure before latency.",
    },
    {
      question: "How long does it take to make a prototype production ready?",
      answer:
        "For a prototype built by a competent developer, the pre-launch essentials — authorisation, secrets rotation, backups with a rehearsed restore, error tracking and edge limits — are typically a week of focused work. Rate limiting, idempotency, query logging and migrations add roughly another week. Deeper work such as index audits and correcting money or timestamp storage is better treated as a ninety-day programme running alongside features.",
    },
    {
      question: "Should we rewrite the prototype or harden it?",
      answer:
        "Harden it, unless the data model is wrong. Rewrites are justified when the schema cannot represent what the business actually does, because that flaw propagates into every layer above it. Bad routing, missing tests, tangled components and absent monitoring are all repairable in place, and a rewrite discards the working knowledge embedded in the prototype while adding months before the next customer-visible change.",
    },
    {
      question: "What is the minimum monitoring a small team needs at launch?",
      answer:
        "Exception capture with release and user context, structured logs carrying a request identifier through every service, and four alerts: error rate, p95 latency, queue depth or replication lag, and a synthetic check of the journey that generates revenue. Add an uptime check running outside your own infrastructure. That set is about a day of configuration and covers most incidents you would otherwise hear about from a customer.",
    },
    {
      question: "Do we need load testing before launching an MVP?",
      answer:
        "Rarely a formal load test, but you do need two numbers: how many queries your busiest page issues, and how each behaves against production-sized data rather than seed data. Copy a realistic volume into a staging database and run the top endpoints. Most launch-day performance incidents are a missing index or an N+1, and that exercise finds both in an hour.",
    },
    {
      question: "How do we stop secrets ending up in the repository again?",
      answer:
        "Rotate everything ever committed, since git history should be treated as public, then remove the possibility rather than relying on discipline. Add secret scanning to continuous integration so a commit containing a key fails the build, load configuration from a secret manager at runtime, and keep an example environment file with empty values so nobody commits a working one as documentation.",
    },
  ],
};
