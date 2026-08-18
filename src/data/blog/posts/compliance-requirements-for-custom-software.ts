import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "compliance-requirements-for-custom-software",
  title: "SOC 2, GDPR and HIPAA: What to Build In From Day One",
  seoTitle: "Compliance Requirements for Custom Software: SOC 2, GDPR",
  description:
    "Compliance requirements for custom software, in engineering terms: what GDPR, SOC 2 and HIPAA demand of the code, and what costs most to retrofit.",
  excerpt:
    "What each regime asks of the software itself, as distinct from the paperwork — and the four architectural decisions that are nearly free before launch and painful for years afterwards.",
  category: "Legacy Modernisation",
  primaryKeyword: "compliance requirements for custom software",
  secondaryKeywords: [
    "GDPR requirements for software development",
    "how to build SOC 2 compliant software",
    "HIPAA compliant application architecture",
    "audit logging best practices",
    "right to erasure implementation",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "enterprise-software",
  keyTakeaway:
    "GDPR, SOC 2 and HIPAA each demand different things of software. GDPR requires a recorded lawful basis, data minimisation, erasure that reaches every replica and backup, controlled data residency, and detection fast enough to report a breach within 72 hours. SOC 2 tests whether your access control, change management, encryption and monitoring processes operated as described across an observation period, so it audits your process rather than certifying your code. HIPAA requires unique user identification, audit controls over every access to protected health information, transmission security, and signed business associate agreements with every vendor that touches it. Four architectural decisions — append-only audit logging, tenant isolation, field-level encryption and deletion cascades — cost days before launch and months to retrofit. This is engineering guidance, not legal advice; confirm your actual obligations with a qualified adviser.",
  sections: [
    {
      heading: "Which compliance requirements for custom software actually reach the code",
      blocks: [
        {
          type: "p",
          text: "Most of what gets called compliance is paperwork: policies, registers, vendor reviews, signed agreements. The compliance requirements for custom software are the smaller subset the code itself has to satisfy, and they behave differently. A policy can be written in a fortnight. An audit trail that does not exist cannot be produced retrospectively, and a deletion capability that was never designed cannot be added without touching every table.",
        },
        {
          type: "p",
          text: "That asymmetry is the whole argument for reading this before the architecture is fixed. The engineering obligations under GDPR, SOC 2 and HIPAA overlap heavily — identity, access control, logging, encryption, retention, deletion — and building them once, early, costs a fraction of retrofitting any one under audit pressure.",
        },
        {
          type: "callout",
          text: "This is engineering guidance, not legal advice. Which regimes apply to your organisation, and what they require of you specifically, is a question for a qualified data protection adviser or counsel. What follows is the technical work that follows from the answer.",
        },
        {
          type: "p",
          text: "None of these regimes tells you how to build anything. GDPR names pseudonymisation and encryption as examples and otherwise asks for security appropriate to the risk. The SOC 2 criteria describe outcomes. The HIPAA Security Rule splits its specifications into required and addressable, where addressable means implement it or document why it is not reasonable and implement an equivalent. Auditors assess judgement, which has to be written down at the time.",
        },
      ],
    },
    {
      heading: "Which regime applies, what the code must do, and what it costs to retrofit",
      blocks: [
        {
          type: "table",
          caption:
            "Regimes most commonly in scope for a custom build, and the engineering work each implies.",
          head: [
            "Regime",
            "What brings you into scope",
            "Core software requirements",
            "Cost to retrofit later",
          ],
          rows: [
            [
              "GDPR / UK GDPR",
              "Processing personal data of people in the EU or UK, wherever your company sits",
              "Recorded lawful basis per purpose, data minimisation, portability exports, erasure across replicas and backups, residency control, timestamped consent records, breach detection inside 72 hours",
              "High. Erasure and residency reach into the data model, and consent records cannot be reconstructed for existing users",
            ],
            [
              "SOC 2 (Type II)",
              "An enterprise buyer asking for a report before signing — a questionnaire, not law",
              "Unique identities and role-based access control, change management through reviewed pull requests, encryption in transit and at rest, centralised logging and alerting, tested restores",
              "Moderate technically, expensive in time: a control added in March produces no evidence for January",
            ],
            [
              "HIPAA",
              "Handling protected health information as a covered entity or as a business associate",
              "Unique user identification, audit controls over every PHI access, automatic logoff, transmission security, minimum-necessary access, signed BAAs with every subprocessor",
              "High. Retrofitting per-record access logging means changing every data access path",
            ],
            [
              "PCI DSS",
              "Storing, processing or transmitting cardholder data anywhere in your systems",
              "Never store sensitive authentication data after authorisation, render the card number unreadable, segment the cardholder data environment",
              "Low if card data never touches you. Very high once card numbers are in your database",
            ],
            [
              "CCPA / CPRA",
              "Doing business in California above defined revenue or data-volume limits",
              "Access, deletion and correction requests, opt-out of sale or sharing, honouring the Global Privacy Control signal",
              "Low to moderate where GDPR machinery exists; the request pipeline is largely the same",
            ],
          ],
        },
        {
          type: "p",
          text: "The triggers above are simplified deliberately. Treat the table as a map of engineering consequences, and have scope confirmed by someone qualified.",
        },
      ],
    },
    {
      heading: "What GDPR requires of the code itself",
      blocks: [
        {
          type: "p",
          text: "Strip away the documentation and GDPR leaves a set of concrete properties the system must have. Each is a schema decision more than a feature.",
        },
        {
          type: "list",
          items: [
            "A lawful basis attached to each processing purpose, and a way to demonstrate it. Where the basis is consent, the record needs the notice version, timestamp and mechanism. A boolean column called marketing_opt_in is not a consent record.",
            "Data minimisation as an active constraint. Every signup field should have a stated purpose; date of birth collected in case it proves useful is the textbook failure.",
            "Access and portability exports produced on demand. Article 12 allows one month, extendable by two further months for complex requests; hand-assembling an export from six services does not survive real volume.",
            "Storage limitation implemented in code — a scheduled job that deletes or anonymises records past their retention period, not a document describing what someone should do.",
            "Data residency you can actually control. Committing to EU-only storage means auditing where every managed service, error tracker and AI API sends payloads, and where its subprocessors sit.",
            "Detection and escalation fast enough to notify a supervisory authority within 72 hours of becoming aware of a breach — a monitoring and on-call requirement dressed as a legal one.",
          ],
        },
        {
          type: "p",
          text: "Article 25 asks for data protection by design and by default, the clause that most directly governs architecture. In practice: the private setting is the default, the smallest useful dataset is the one collected, and the choice not to encrypt a field was recorded as a decision.",
        },
      ],
    },
    {
      heading: "Why the right to erasure breaks soft deletes and backups",
      blocks: [
        {
          type: "p",
          text: "Erasure is where most applications discover their data model is not compliant, because almost every codebase soft-deletes. A deleted_at timestamp keeps referential integrity intact and makes undo trivial — and it leaves the personal data sitting in a table, readable by anyone with database access. A soft delete satisfies a product requirement, not an erasure request.",
        },
        {
          type: "p",
          text: "A hard delete is often impossible: order history has statutory retention, financial records must be kept for tax, aggregate metrics must not silently change. The workable pattern is crypto-shredding with anonymisation — encrypt each subject's personal fields under a per-subject key, then on erasure destroy the key and overwrite the direct identifiers. The order rows survive with their amounts and dates; the person behind them does not.",
        },
        {
          type: "p",
          text: "Then there are the copies. Personal data is rarely only in the primary database. It is in read replicas, the search index, the cache, the warehouse, queue retention, application logs, the error tracker's captured request bodies, the email provider and nightly backups. An erasure implementation that touches only the primary store is not one.",
        },
        {
          type: "p",
          text: "Backups are the hard case, since rewriting an immutable backup is neither easy nor desirable. The position most organisations document is that backups are held for a defined short period, encrypted and access-controlled, and any restore replays the outstanding erasure log first. That append-only log of already-erased subjects has to be built; it cannot be reconstructed later.",
        },
        {
          type: "callout",
          text: "Deletion is a distributed systems problem, not a DELETE statement. Design the cascade across every replica, index, cache, warehouse, log and processor on day one, or spend a quarter finding them under a regulator's deadline.",
        },
      ],
    },
    {
      heading: "What SOC 2 actually audits — your process, not your code",
      blocks: [
        {
          type: "p",
          text: "SOC 2 is the one most often misunderstood, and understanding it correctly saves wasted engineering. It is not a certification and there is no compliant-product badge. It is an attestation report from a licensed CPA firm saying the controls you described were suitably designed and — in a Type II report — operated effectively across an observation period, commonly three to twelve months.",
        },
        {
          type: "p",
          text: "Nobody inspects your source code. What gets tested is whether the controls you wrote down were followed, with evidence, on the dates sampled. The engineering consequence is direct: controls must produce their evidence automatically, because a control whose evidence is somebody's memory fails on sampling.",
        },
        {
          type: "p",
          text: "The Security criteria are common to every engagement; Availability, Processing Integrity, Confidentiality and Privacy are added according to what you commit to. In build terms the recurring work is unique named identities with no shared logins, server-side role-based access control, joiner-mover-leaver provisioning that actually revokes, branch protection so every production change is reviewed and traceable, encryption in transit and at rest, centralised logs with alerting, tested restores and periodic access reviews.",
        },
        {
          type: "p",
          text: "The timing consequence is what catches teams out. Because Type II tests operation over a period, controls introduced in March generate no evidence for January. If a buyer wants a report in six months, the controls need to be running now — the strongest practical argument for building SSO, audit logs and review-gated deploys into the first release rather than the tenth.",
        },
      ],
    },
    {
      heading: "What HIPAA requires that your cloud provider's compliance does not cover",
      blocks: [
        {
          type: "p",
          text: "AWS, Google Cloud and Microsoft Azure will all sign a business associate agreement and publish which of their services are eligible to handle protected health information under it. That is necessary, and routinely mistaken for sufficient. The provider secures the infrastructure. Whether your application enforces minimum-necessary access, logs every read of a patient record and terminates idle sessions is entirely yours.",
        },
        {
          type: "p",
          text: "The Security Rule's technical safeguards translate into specific application behaviour. Unique user identification is required, which rules out shared clinical accounts however convenient the ward finds them. Audit controls are required: mechanisms that record and examine activity in systems containing PHI, which means logging reads and not only writes, because inappropriate access to a record is the classic HIPAA incident. Automatic logoff and encryption are addressable — implement them or document a reasoned alternative.",
        },
        {
          type: "p",
          text: "Two obligations propagate outward. Every vendor that stores or processes PHI on your behalf needs a signed BAA: the database host, the log aggregator, the error tracker, the email provider, the AI API. If a service will not sign one, PHI must never reach it — a routing and redaction problem in your code. And breach notification runs to a clock: affected individuals no later than 60 days from discovery, with reporting to HHS within 60 days for breaches affecting 500 or more people and annually for smaller ones.",
        },
        {
          type: "p",
          text: "The pattern that keeps this tractable is treating PHI as a separate class of data with its own storage boundary, access path and logging, rather than as ordinary columns that happen to be sensitive. Systems that mix PHI through every table apply the strictest control everywhere, which is expensive, or apply it inconsistently, which is worse.",
        },
      ],
    },
    {
      heading: "Which architectural decisions are cheap now and expensive later?",
      blocks: [
        {
          type: "p",
          text: "Four decisions account for most of the difference between a system brought into compliance in weeks and one that needs a rebuild. All four are days of work before launch.",
        },
        { type: "h3", text: "Append-only audit logging, from the first commit" },
        {
          type: "p",
          text: "Every regime wants to know who did what, to which record, when, and from where. Write it as an append-only stream the application cannot update or delete, separate from debug logs, with reads recorded as well as writes. Retrofitting means finding every data access path in a mature codebase — the most expensive compliance project a team can take on.",
        },
        {
          type: "code",
          lang: "typescript",
          code: "// One append-only row per access. No update path, no delete path.\n// Written from the data layer so no feature can bypass it.\ninterface AuditEvent {\n  id: string;              // ULID: sortable, no collisions across nodes\n  occurredAt: string;      // ISO 8601, UTC, from the server clock\n  actorId: string;         // real user, never a shared service account\n  actorIp: string;\n  action: \"read\" | \"create\" | \"update\" | \"delete\" | \"export\";\n  resourceType: string;    // \"patient_record\", \"invoice\"\n  resourceId: string;\n  tenantId: string;        // present on every row, always\n  lawfulBasis?: string;    // GDPR: why this processing was permitted\n  changed?: Record<string, { from: unknown; to: unknown }>;\n}",
        },
        { type: "h3", text: "Tenant isolation enforced below the query" },
        {
          type: "p",
          text: "Isolation must be structural rather than a WHERE clause each developer remembers. Postgres row-level security tied to a session variable, or a repository layer that refuses to build a query without a tenant scope, means a forgotten filter fails closed. A cross-tenant leak is a reportable breach in every regime here, and it is nearly always one missing predicate.",
        },
        { type: "h3", text: "Field-level encryption for the fields that matter" },
        {
          type: "p",
          text: "Full-disk encryption protects against a stolen drive and nothing else; an application-layer compromise reads everything. Encrypting specific fields with keys held in a managed KMS, one per tenant or per subject, narrows the blast radius and makes crypto-shredding possible. It costs exact-match indexing on those fields, which is why the decision belongs at design time.",
        },
        { type: "h3", text: "Deletion cascades and a maintained data map" },
        {
          type: "p",
          text: "Keep a written map of every place a personal identifier can come to rest, and an erasure routine that walks it. Update it as part of the definition of done for any feature touching personal data.",
        },
      ],
    },
    {
      heading: "How compliance requirements for custom software change the way you scope a build",
      blocks: [
        {
          type: "p",
          text: "The practical move is to establish which regimes apply before the schema is written, not before the launch date. That answer determines the data model, the tenancy strategy, the logging design and the hosting region, all four cheap to choose and expensive to change. It also shortens scope, because the fastest way to reduce compliance obligations is to hold less data: card details that never enter your systems, personal fields never collected.",
        },
        {
          type: "p",
          text: "The second move is to make the evidence automatic. Controls that depend on someone remembering fail under sampling, and they fail during incidents. Controls implemented as pipeline gates, infrastructure policy and append-only logs produce their own evidence, turning an audit into a document-gathering exercise rather than a quarter of engineering.",
        },
        {
          type: "p",
          text: "If you are scoping a build with GDPR, SOC 2 or HIPAA in view, or discovering mid-flight that an enterprise buyer has just made one of them urgent, ApexStack works through these decisions with engineering teams before they harden.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Does using AWS or Azure make my application HIPAA compliant?",
      answer:
        "No. The major cloud providers will sign a business associate agreement and publish which of their services are eligible to handle protected health information, which covers the infrastructure layer. Everything above it remains yours: unique user identification, minimum-necessary access, logging every read of a record, automatic logoff, transmission security, and signed BAAs with every other vendor that touches PHI. Provider compliance is a prerequisite, not a substitute.",
    },
    {
      question: "Is a soft delete enough to satisfy the GDPR right to erasure?",
      answer:
        "No. A deleted_at timestamp leaves the personal data present and readable in the database. Where records must be retained for tax or statutory reasons, the workable approach is crypto-shredding combined with anonymisation: encrypt personal fields under a per-subject key, destroy the key on erasure, and overwrite direct identifiers. The cascade must also reach replicas, search indexes, caches, warehouses, logs and third-party processors.",
    },
    {
      question: "How long does it take to get SOC 2 compliant?",
      answer:
        "A Type II report tests whether controls operated effectively over an observation period, commonly three to twelve months, so the calendar dominates. Controls introduced in March produce no evidence for January. Teams already running SSO, role-based access control, review-gated deployments, centralised logging and tested restores can often start an observation window quickly; teams starting from nothing should expect several months of operation before the audit begins.",
    },
    {
      question: "What does GDPR require of software rather than of policies?",
      answer:
        "A recorded lawful basis per processing purpose with real consent records where consent applies, data minimisation in the schema, on-demand access and portability exports, erasure that reaches every copy of the data, retention enforced by scheduled jobs, controlled data residency including every subprocessor, and monitoring capable of detecting a breach fast enough to notify a supervisory authority within 72 hours of becoming aware of it.",
    },
    {
      question: "What compliance work is cheapest to do before launch?",
      answer:
        "Four things: append-only audit logging written from the data layer so no feature can bypass it, tenant isolation enforced structurally through row-level security or a scoped repository, field-level encryption with keys in a managed KMS, and a maintained data map with a deletion cascade that walks it. Each is a few days before launch. Each can consume months once a mature codebase has to be retrofitted.",
    },
    {
      question: "Do I need to comply with GDPR if my company is not in the EU?",
      answer:
        "Possibly. GDPR reaches processing related to offering goods or services to people in the EU, or monitoring their behaviour, regardless of where the organisation is established, and the UK GDPR works similarly for the UK. Whether it applies to your particular activities is a legal question rather than an engineering one, so get it confirmed by a qualified adviser before deciding the answer is no.",
    },
  ],
};
