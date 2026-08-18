import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "integrating-legacy-systems-with-modern-saas",
  title: "Integrating Legacy Systems With Modern SaaS",
  seoTitle: "Legacy System Integration With Modern SaaS: Patterns",
  description:
    "Legacy system integration patterns ranked by preference — API, CDC, batch, queues, scraping — plus idempotency, reconciliation and failure handling.",
  excerpt:
    "The realistic integration options when one side is a system you cannot change, ranked worst to best, with the anti-corruption layer, idempotency and reconciliation work nobody scopes for.",
  category: "Automation & Internal Tools",
  primaryKeyword: "legacy system integration",
  secondaryKeywords: [
    "connect legacy system to SaaS",
    "anti-corruption layer pattern",
    "change data capture legacy database",
    "legacy API integration patterns",
    "integration idempotency and retries",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "api-development",
  keyTakeaway:
    "Legacy system integration works best in a fixed order of preference: a documented API first, then log-based change data capture into a read layer, then scheduled file exchange, then a message queue if the legacy side already speaks one, and screen scraping only when every other route is genuinely closed. Whichever you pick, put an anti-corruption layer between the two systems so the old data model never leaks into the new one, make every write idempotent because at-least-once delivery is the only guarantee you will get, and build reconciliation before go-live rather than after the first argument about which system is right.",
  sections: [
    {
      heading: "What makes legacy system integration hard when you cannot change one side?",
      blocks: [
        {
          type: "p",
          text: "Every difficult integration project shares one shape: one side can be changed and the other cannot. The legacy system runs payroll, or holds the general ledger, or drives the warehouse, and the people who wrote it left a decade ago. All of the flexibility, translation and error handling therefore has to live on your side of the line.",
        },
        {
          type: "p",
          text: "That asymmetry makes legacy system integration a design problem rather than a plumbing exercise. The failures are rarely about protocols. They are about the old system having a different idea of what a customer is, a date stored as an eight-character string with no timezone, an order only valid once a nightly batch has run, and no way to tell anyone when something changed. Those turn a two-week connector into a six-month project.",
        },
        {
          type: "p",
          text: "Before choosing a pattern, establish four facts about the legacy side, because each eliminates options: can it be read without hurting production performance, can it be written to safely, can it emit anything on change, and how stale is the data allowed to get. That last answer is usually more generous than the first conversation suggests.",
        },
      ],
    },
    {
      heading: "Which legacy system integration pattern should you choose?",
      blocks: [
        {
          type: "p",
          text: "There is a clear order of preference, and it is worth working down it honestly rather than jumping to whatever looks quickest. Every step down adds coupling to something the legacy vendor never promised to keep stable.",
        },
        {
          type: "table",
          caption:
            "Legacy integration patterns compared on latency, reliability, build effort and fit",
          head: [
            "Pattern",
            "Typical latency",
            "Reliability",
            "Build effort",
            "Choose it when",
          ],
          rows: [
            [
              "Documented API (REST, SOAP/WSDL, RPC)",
              "Seconds",
              "High — versioned contract, explicit errors",
              "Low to medium",
              "One exists and its rate limits fit your volume",
            ],
            [
              "Log-based change data capture to a read layer",
              "Seconds to a minute",
              "High — reads the log, no load on the application",
              "Medium",
              "You need near-live reads and the DBA grants log access",
            ],
            [
              "Scheduled file exchange (SFTP, fixed-width, CSV)",
              "Hours to a day",
              "High for transfer, weak on partial failure",
              "Low",
              "The extract already exists and daily is acceptable",
            ],
            [
              "Message queue bridge (IBM MQ, JMS, Kafka)",
              "Seconds",
              "High — durable, ordered, replayable",
              "Medium to high",
              "The estate already runs a broker you can subscribe to",
            ],
            [
              "Screen scraping or UI automation",
              "Seconds to minutes, unpredictable",
              "Low — breaks on any interface change",
              "Low to build, high to maintain",
              "Every other route is closed and the volume is small",
            ],
          ],
        },
        {
          type: "callout",
          text: "Build effort and total cost of ownership rank differently. Screen scraping is the cheapest thing to build and by a wide margin the most expensive thing to own.",
        },
      ],
    },
    {
      heading: "How do you work with a documented legacy API without trusting it too much?",
      blocks: [
        {
          type: "p",
          text: "A published API is the right first choice, but documentation for a system fifteen years in production describes intent rather than behaviour. Verify a short list against the real endpoint before designing on top of it.",
        },
        {
          type: "list",
          items: [
            "Rate limits and concurrency governance — per user, per org or per integration — and what the response looks like when you exceed them. Many enterprise platforms return a generic 500 rather than a 429.",
            "Whether writes are transactional. Some older APIs accept a batch, apply half of it and return success.",
            "Pagination on a moving dataset: cursor-based is safe, offset-based silently skips records as rows are inserted.",
            "What the timestamp fields mean. A modified-date that changes on only some update paths makes incremental sync quietly lossy.",
            "Whether any concurrency control exists — an ETag, a version column, an If-Match header. If not, assume last write wins.",
          ],
        },
        {
          type: "p",
          text: "SOAP endpoints deserve a note. A WSDL gives you a generated client in minutes, but its types mirror the legacy model exactly and will spread through your codebase if you let them. Keep that client behind an adapter and never return its types from your own service layer.",
        },
      ],
    },
    {
      heading: "What are the options when there is no usable API?",
      blocks: [
        { type: "h3", text: "Replicating the database into a read layer" },
        {
          type: "p",
          text: "If reads are the requirement, log-based change data capture is the strongest option available. Tools that tail the transaction log — Debezium against MySQL, PostgreSQL, SQL Server, Oracle or Db2, or a vendor’s native CDC feature — copy changes into a read model you control, without adding queries to the production database and without changing the application.",
        },
        {
          type: "p",
          text: "Two caveats decide viability. Someone has to grant log-reading permissions, which in some organisations is a longer conversation than the engineering. And a replicated schema is an undocumented contract: nobody in the legacy team knows you read those columns, so a routine change there becomes an outage here. Alert on schema drift explicitly.",
        },
        { type: "h3", text: "File-based batch exchange" },
        {
          type: "p",
          text: "Nightly file drops are unfashionable and frequently correct. If the legacy system already produces an extract for another purpose, consuming it is the lowest-risk integration available, and formats such as EDI X12 and HL7 exist because whole industries settled on this pattern. Fixed-width mainframe extracts bring their own tax: EBCDIC encoding, packed decimal fields, no header row, and a record layout living in a COBOL copybook rather than a schema file.",
        },
        {
          type: "p",
          text: "The engineering work in batch is not parsing, it is partial failure. Decide up front what happens when row 4,000 of 10,000 is invalid, whether the same file arriving twice is safe, and how you detect a file that never arrived — the silent failure of batch is no file and no alarm.",
        },
        { type: "h3", text: "Message queues" },
        {
          type: "p",
          text: "If the legacy estate already runs a broker, subscribing to it is excellent: durable, ordered, replayable, with backpressure handled for you. Standing up a new broker purely to bridge one integration rarely pays, because someone still has to write the producer on the legacy side — the part you were avoiding.",
        },
      ],
    },
    {
      heading: "When is screen scraping actually defensible?",
      blocks: [
        {
          type: "p",
          text: "Driving the user interface — a headless browser against a web application, or terminal emulation against a 5250 or 3270 green screen — is the genuine last resort and occasionally the only one. Some systems have no API, no accessible database, no export and no vendor left to ask. Treat it as an operational liability from day one: it is the only pattern that breaks because someone changed a label.",
        },
        {
          type: "list",
          items: [
            "Isolate it in one service with a narrow interface, so the rest of the system does not know how the data arrived.",
            "Anchor selectors on the most stable attributes available and assert on page structure before acting, so a changed screen fails immediately rather than filling the wrong field.",
            "Run it under a dedicated least-privilege account, so its actions are attributable in the legacy system’s own audit log.",
            "Capture the DOM or a screenshot on every failure — without that, remote diagnosis is guesswork.",
            "Keep a manual fallback documented and tested, because there will be a week when it does not work.",
          ],
        },
      ],
    },
    {
      heading: "Why does every legacy integration need an anti-corruption layer?",
      blocks: [
        {
          type: "p",
          text: "The anti-corruption layer comes from Eric Evans’ Domain-Driven Design, and it is the most valuable idea in this whole area. It is a translation boundary: the legacy model stops at the edge of your application and everything inside works with yours. Nothing else in your codebase sees a field called CUST_STAT_CD or has to know that status 7 means dormant.",
        },
        {
          type: "p",
          text: "It matters for three reasons that all show up later rather than immediately. Without it the legacy model spreads, and six months in, forty files reference the old field names and the modernisation you were building toward is blocked by your own integration code. It gives you one tested place for the mapping rules, enumerations and encoding conversions. And it makes replacement possible: when the legacy system is retired, you write a new adapter behind the same interface and nothing upstream changes.",
        },
        {
          type: "p",
          text: "Practically it is an interface in your own domain language, one implementation per external system, translation and validation at the boundary, and a hard rule that the external client’s types never escape the adapter. The cost is a mapping layer somebody maintains. The alternative is the legacy schema spread through the codebase meant to replace it.",
        },
      ],
    },
    {
      heading: "How do you make legacy integrations idempotent and safe to retry?",
      blocks: [
        {
          type: "p",
          text: "Across an unreliable boundary, exactly-once delivery is not achievable — you get at-least-once and you make the receiver idempotent. The failure to design for catches everyone: you send a write, the legacy system applies it, and the connection drops before the response reaches you. You cannot tell that apart from a write that never landed, so you must be able to retry safely.",
        },
        {
          type: "p",
          text: "Where you control the receiving side, an idempotency key is the standard mechanism — Stripe’s documented Idempotency-Key header is the reference implementation most people have met. Where the receiver is the legacy system and has no such concept, keep the ledger yourself: record the intent before sending, the outcome after, and check it before every attempt.",
        },
        {
          type: "code",
          lang: "sql",
          code: `-- Ledger on our side, because the legacy system has no idempotency concept.
CREATE TABLE integration_attempt (
  idempotency_key  TEXT PRIMARY KEY,      -- deterministic: hash(entity_id, operation, payload_version)
  target_system    TEXT NOT NULL,
  operation        TEXT NOT NULL,
  request_payload  JSONB NOT NULL,
  status           TEXT NOT NULL,         -- pending | succeeded | failed | needs_review
  remote_reference TEXT,                  -- id returned by the legacy system, when it returns one
  attempts         INT  NOT NULL DEFAULT 0,
  first_sent_at    TIMESTAMPTZ NOT NULL,
  settled_at       TIMESTAMPTZ
);

-- On timeout: do not blind-retry. Re-read the legacy record by its natural key,
-- and only re-send when the write is provably absent. Otherwise mark needs_review.`,
        },
        {
          type: "p",
          text: "Two rules make the ledger work. Derive the idempotency key deterministically from the business fact rather than generating a fresh one per attempt, or every retry looks like a new request. And back off exponentially with jitter — a legacy system that just fell over under load will fall over again when fifty synchronised retries arrive at once.",
        },
      ],
    },
    {
      heading: "What do you do when the two systems disagree?",
      blocks: [
        {
          type: "p",
          text: "They will disagree. A write failed silently, an operator edited a record directly in the legacy interface, a batch file was reprocessed, a mapping rule changed mid-month. Reconciliation is not a sign the integration is broken; it is a standing requirement, and it should ship with version one rather than after the first uncomfortable meeting about which number is right.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Name a system of record per field, not per entity. The legacy ERP usually owns financial values and the SaaS side owns contact details; writing that down settles most disputes before they happen.",
            "Run a scheduled comparison over a stable window — yesterday’s closed records, not live ones — and compare counts and checksums before rows, so the cheap check catches the common case.",
            "Classify every discrepancy: missing on one side, value mismatch, duplicate, or ordering. Different causes, different fixes.",
            "Auto-heal only where the outcome is unambiguous, such as a record present in the source and provably absent in the target. Everything else goes to a human queue.",
            "Track the discrepancy rate as a metric. A slow upward drift is the earliest signal that something upstream changed.",
          ],
        },
        {
          type: "p",
          text: "Resist making the reconciler clever. One that resolves conflicts on its own judgement will eventually overwrite a correct value with a stale one, and because both systems then agree, nobody notices.",
        },
      ],
    },
    {
      heading: "How should the integration behave when the legacy side is down?",
      blocks: [
        {
          type: "p",
          text: "Legacy systems have maintenance windows, batch windows during which they refuse writes, and hard capacity limits. Treat unavailability as a normal operating state, because on a mainframe or an older ERP it is scheduled, not exceptional.",
        },
        {
          type: "p",
          text: "The pattern that holds up is to accept work locally and settle it asynchronously. Your application writes the intent to a durable queue or outbox and returns to the user immediately; a worker drains it against the legacy system as capacity allows. A circuit breaker stops hammering a system refusing connections and lets a probe through periodically. Anything exhausting its retries goes to a dead letter queue with the full request preserved, because a dead letter you cannot replay is just a log line.",
        },
        {
          type: "p",
          text: "Two operational details are usually missing when we review an existing integration. The interface should tell the user a change is pending rather than implying it has been applied — silent queueing is how people submit the same request four times. And queue depth needs an alarm at an agreed threshold, because the first sign of a failed integration should not be a customer asking why their order never appeared.",
        },
        {
          type: "p",
          text: "These early decisions are most of what separates an integration that quietly runs for years from one that needs a person watching it. If you are scoping work against a system you cannot change and want a second opinion on which pattern fits, the engineering team at ApexStack is glad to talk it through.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the best way to integrate a legacy system with a modern SaaS platform?",
      answer:
        "Work down a fixed order of preference. A documented API is first if one exists and its rate limits fit your volume. Log-based change data capture into a read layer is next when you need near-live reads. Then a transactional outbox, then scheduled file exchange, then a message queue if the estate already runs a broker. Screen scraping is last and only when every other route is genuinely closed.",
    },
    {
      question: "What is an anti-corruption layer and do I really need one?",
      answer:
        "An anti-corruption layer, from Eric Evans’ Domain-Driven Design, is a translation boundary that stops the legacy data model entering your application. Your code works with your own domain types, and one adapter converts to and from the legacy shape. You need it because without it the old field names and encodings spread through your codebase within months, and the modernisation you were working toward becomes blocked by your own integration code.",
    },
    {
      question: "How do you integrate with a legacy system that has no webhooks?",
      answer:
        "You poll or you capture changes at the database. Polling on a reliable modified-timestamp is simplest, but verify that the timestamp updates on every write path, because many legacy applications have update routes that bypass it. Log-based change data capture is stronger where the DBA will grant transaction log access, and a trigger-written outbox table is the middle option when you are allowed one small schema addition.",
    },
    {
      question: "How do you handle retries when a legacy system times out mid-write?",
      answer:
        "Assume the write may have landed. Record the intent in a local ledger keyed by a deterministic idempotency key derived from the business fact before sending, and record the outcome after. On a timeout, re-read the legacy record by its natural key and only resend when the write is provably absent; otherwise flag it for review. Back off exponentially with jitter so synchronised retries do not compound the outage.",
    },
    {
      question: "Is screen scraping ever an acceptable integration approach?",
      answer:
        "Occasionally, when there is no API, no database access, no export and no vendor left to ask. If you do it, isolate it behind one narrow service, run it under a dedicated least-privilege account so its actions are attributable, assert on page structure before acting, rate-limit it deliberately, and capture the DOM on every failure. It is the cheapest pattern to build and by far the most expensive to maintain.",
    },
    {
      question: "How long does a legacy system integration project take?",
      answer:
        "The connector itself is rarely the long part. Access approvals, discovering undocumented behaviour in the legacy API, and agreeing which system owns which field typically take longer than the code. A single well-understood integration with a documented API is a matter of weeks; one requiring change data capture, an anti-corruption layer, reconciliation and failure handling against an undocumented system is a matter of months.",
    },
  ],
};
