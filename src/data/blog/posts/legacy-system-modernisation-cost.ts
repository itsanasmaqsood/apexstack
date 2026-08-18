import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "legacy-system-modernisation-cost",
  title: "How Much Does Legacy System Modernisation Cost?",
  seoTitle: "Legacy System Modernisation Cost: Real Market Ranges",
  description:
    "What legacy system modernisation really costs, the six strategies on the cost ladder, and why discovery and data migration decide your budget.",
  excerpt:
    "Market ranges for each modernisation strategy, the cost drivers that actually move a number, and how to build a defensible estimate for a system nobody left understands.",
  category: "Legacy Modernisation",
  primaryKeyword: "legacy system modernisation cost",
  secondaryKeywords: [
    "legacy application migration cost",
    "cost to replace a legacy system",
    "rehost vs refactor vs rebuild cost",
    "legacy modernisation budget planning",
    "data migration cost estimate",
  ],
  published: "2026-08-12",
  authorId: "leadership-01",
  serviceSlug: "enterprise-software",
  keyTakeaway:
    "Legacy system modernisation cost spans roughly US$10,000 for a straight rehost of a single application to well over US$1,000,000 for a full rebuild of a core platform, and the strategy you choose is the largest single lever on that number. The next largest are the count of live integrations, the state of the data, and how much of the system’s behaviour anyone can still explain. No credible figure exists before a discovery phase, which typically runs three to eight weeks and costs a fraction of what it saves.",
  sections: [
    {
      heading: "What does legacy system modernisation cost in practice?",
      blocks: [
        {
          type: "p",
          text: "Legacy system modernisation cost sits between US$10,000 and several million dollars, which is useless until you decompose it. The figures below are market ranges observed for this work across the US, UK and Europe — not a rate card, and any firm quoting a number before it has seen your integrations and your data is guessing. Use them to sanity-check a proposal and find which assumption is driving the total.",
        },
        {
          type: "p",
          text: "Two variables move the number more than anything technical. The first is strategy: rehosting an application onto supported infrastructure and rebuilding it as a new product differ by more than an order of magnitude, and both get called modernisation. The second is delivery location — blended market rates run roughly US$120–US$250 per hour onshore in the US and Western Europe, US$50–US$110 nearshore in Central and Eastern Europe or Latin America, and US$25–US$65 offshore in South and South-East Asia. The same scope therefore carries a three- to five-fold spread on labour alone, so comparing quotes without normalising for rate and team shape tells you little.",
        },
        {
          type: "p",
          text: "The rest of this article is about the third variable, the one that actually blows budgets: how much of the existing system is understood well enough to be reproduced.",
        },
      ],
    },
    {
      heading: "The six modernisation strategies and what each one costs",
      blocks: [
        {
          type: "p",
          text: "Modernisation is not one activity. It is a ladder, and each rung buys a different outcome at a different price. The ranges below assume a mid-sized business application — a few hundred thousand lines, a handful of integrations, a database in the tens of gigabytes — and shift upward with every integration, compliance regime and terabyte.",
        },
        {
          type: "table",
          caption: "Observed market ranges by modernisation strategy. Ranges, not quotes.",
          head: [
            "Strategy",
            "Typical market range (USD)",
            "Relative cost",
            "Risk and business disruption",
            "What you actually get",
          ],
          rows: [
            [
              "Rehost (lift and shift)",
              "$10,000 – $50,000 per application",
              "1×",
              "Low. Same binaries, new infrastructure",
              "Exit from a data centre, dying hardware or an expiring hosting contract. Maintainability unchanged.",
            ],
            [
              "Replatform",
              "$40,000 – $150,000",
              "2–3×",
              "Low to moderate. Managed database or container runtime",
              "Lower running cost, managed backups, autoscaling, patching handled. Same application.",
            ],
            [
              "Refactor",
              "$100,000 – $400,000",
              "4–8×",
              "Moderate. Internal change, behaviour preserved",
              "Supported runtime, a test suite, modular boundaries. Same features, far cheaper to change.",
            ],
            [
              "Rearchitect",
              "$250,000 – $1,000,000+",
              "10–20×",
              "High. New boundaries, new data flows, real cutover planning",
              "Independent deployability, horizontal scale, ownership per capability.",
            ],
            [
              "Rebuild",
              "$300,000 – $1,500,000+",
              "12–30×",
              "Highest. Full parity exposure plus retraining",
              "A system shaped around how the business works now, not a decade ago.",
            ],
            [
              "Replace with a package or SaaS",
              "$50,000 – $400,000 to implement, plus annual licence",
              "Licence-dominated",
              "Moderate to high. The disruption is process change",
              "Someone else maintains it. You lose whatever was genuinely differentiating.",
            ],
          ],
        },
        {
          type: "p",
          text: "The most common estimating mistake is applying one rung to the whole estate. Real programmes mix them: rehost the applications that are merely old, refactor the one that changes weekly, rebuild the capability that is a competitive advantage, and replace the commodity payroll or ticketing system off the shelf. Costing the estate as one rebuild produces a number nobody approves; costing it as one rehost produces a number that does not solve the problem.",
        },
      ],
    },
    {
      heading: "Why discovery is the line item that protects the rest of the budget",
      blocks: [
        {
          type: "p",
          text: "A discovery and assessment phase on a mid-sized system commonly runs three to eight weeks and US$15,000 to US$60,000 at market rates. It is the first thing cut when a budget looks tight, and cutting it is the most reliable way to overspend, because discovery does not create the unknowns — it decides when you find them.",
        },
        {
          type: "p",
          text: "What it hands back should be concrete: a dependency map of what calls what, an integration inventory with a named owner and a contract per entry, a data profile with measured quality figures rather than assurances, behaviour tests captured from production traffic, and a register of unknowns each carrying a cost range. That last artefact is what makes an estimate defensible, because it converts vagueness into priced risk.",
        },
        {
          type: "callout",
          text: "Discovery does not add cost to a modernisation programme. It moves the discovery of cost from month seven, where it arrives as a change request, to week three, where it is still cheap to act on.",
        },
      ],
    },
    {
      heading: "Where does the undocumented business logic actually hide?",
      blocks: [
        {
          type: "p",
          text: "After a decade, the documentation describes the system somebody intended to build. The one that exists is elsewhere, and reproducing it is most of the cost of any strategy above replatforming.",
        },
        {
          type: "list",
          items: [
            "Stored procedures and triggers, where a surprising amount of pricing, tax and eligibility logic lives because that was the quickest place to put it.",
            "Validation implemented only in the user interface, so the database contains records the new system would reject.",
            "Scheduled jobs — cron entries, Windows scheduled tasks, an SSIS package, occasionally a script on a machine under someone’s desk — performing steps nobody lists when describing the process.",
            "Reporting queries encoding a different definition of an active customer than the application uses, and finance trusts the report.",
            "Integration middleware transformations, where a field is quietly renamed, rounded or defaulted between two systems.",
            "Years of conditionals naming specific customers or contracts, each a commitment still in force.",
          ],
        },
        {
          type: "p",
          text: "The consequence for estimating is that the specification is recovered from production behaviour, not from documents or interviews. Capturing real requests and responses and replaying them against the replacement — golden-record testing — is the only reliable parity check, and it is a costed engineering activity. Budget it explicitly, because teams that leave it implicit do it anyway, under pressure, during user acceptance testing.",
        },
      ],
    },
    {
      heading: "Why data migration is usually the largest single line item",
      blocks: [
        {
          type: "p",
          text: "Volume is the easy part; moving a terabyte is an afternoon and a bandwidth bill. Quality is where the money goes. Legacy databases accumulate rows no current rule would allow: foreign keys never enforced so orphans exist, free-text fields carrying structured meaning, four spellings of the same country, dates stored as strings in two formats, and encodings that fight each other — Latin-1 masquerading as UTF-8, or packed-decimal COMP-3 fields in a mainframe extract described by a COBOL copybook that is itself out of date.",
        },
        {
          type: "p",
          text: "Then there is semantic drift. Rows written before a process changed mean something different from rows written after, and nothing in the schema records the boundary. Deciding what those become in the new model consumes business time, the scarcest resource on any modernisation programme.",
        },
        {
          type: "code",
          lang: "sql",
          code: "-- Archaeology, not reporting. How much of the data would actually\n-- survive the constraints the new system intends to enforce?\nSELECT\n  COUNT(*)                                                        AS total_active,\n  COUNT(*) FILTER (WHERE email !~ '^[^@]+@[^@]+\\.[^@]+$')          AS unusable_email,\n  COUNT(*) FILTER (WHERE country NOT IN (SELECT code FROM iso_country)) AS unmappable_country,\n  COUNT(*) FILTER (WHERE created_at > updated_at)                  AS impossible_timestamps,\n  COUNT(*) - COUNT(DISTINCT lower(btrim(email)))                   AS duplicate_identities\nFROM legacy.customer\nWHERE status = 'ACTIVE';",
        },
        {
          type: "p",
          text: "Run that class of query in week one, not week thirty. It turns migration from an unbounded worry into a countable backlog: this many records need a rule, this many need a human, this many get archived read-only with sign-off. For estimating, price one full dry run against a production copy — profiling, transformation, load, reconciliation — then multiply, because you will run it five to ten times before the business signs the numbers off.",
        },
      ],
    },
    {
      heading: "Why integration count predicts cost better than lines of code",
      blocks: [
        {
          type: "p",
          text: "If you are given one number about a legacy estate before estimating it, ask for the count of live integrations rather than the size of the codebase. Each is a contract, an owner, a credential, a test environment that may not exist, a distinct failure mode, and a change schedule controlled from outside your programme. Ten integrations do not cost twice what five cost, because the end-to-end test matrix and the coordination overhead both grow faster than linearly.",
        },
        {
          type: "p",
          text: "Their character matters as much as the count. A modern REST API with a sandbox is a day. A SOAP endpoint whose WSDL no longer matches the responses, a fixed-width file dropped nightly over SFTP, a partner allow-listing one source IP address, a payment processor requiring recertification against the new environment, or an on-premise directory reachable from a single network segment — each is weeks, and most of those weeks are waiting.",
        },
        {
          type: "p",
          text: "Price every integration as a small project with its own discovery, build, partner coordination and test window, and assume coordination exceeds build wherever a third party is involved. Any integration where the counterparty must change something on their side is the schedule risk of the whole programme, and it should start first regardless of where it sits in the plan.",
        },
      ],
    },
    {
      heading: "What do parallel running, retraining and re-certification add?",
      blocks: [
        {
          type: "p",
          text: "The build is the part everyone budgets. These are the lines that appear in month five and were not in the business case.",
        },
        {
          type: "list",
          items: [
            "Duplicate infrastructure and licences for the overlap. Per-core database licences are the painful one — six months of running both means six months of paying twice, and the overlap always outlasts the plan.",
            "Reconciliation engineering: jobs comparing both systems nightly, plus the people who read the output and chase differences. Staffing for the duration, not a one-off build.",
            "Two support rotas, two runbooks and two sets of monitoring while both systems are live.",
            "Training and the productivity dip after it. Users who were fast in a dense keyboard-driven interface get slower before they get faster. Budget the material, the floor-walking, and reduced throughput.",
            "Compliance re-certification where the regime applies — SOC 2, ISO 27001, PCI DSS, HIPAA, GxP or a financial regulator. The audit fee is visible; the remediation engineering before it is usually larger, and a change of hosting region drags data residency obligations in too.",
            "Decommissioning: contract exit, hardware disposal, and retention obligations that may force a read-only archive for years after the old system stops serving anyone.",
          ],
        },
        {
          type: "p",
          text: "None of these are avoidable in a programme run responsibly — only in a business case written optimistically, which is why the overrun arrives as a surprise rather than a decision.",
        },
      ],
    },
    {
      heading: "How do you estimate when nobody understands the existing system?",
      blocks: [
        {
          type: "p",
          text: "Start with the denominator. Before pricing the new system, put the current total cost of ownership on the table: hosting and hardware, licences and support contracts, the share of engineering time consumed by maintenance, incident cost, and the value lost to changes the business asked for and did not get. Without it there is nothing to compare a seven-figure programme against, and the conversation becomes cost rather than return.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Fund discovery as a separate, fixed-price engagement with defined artefacts. It is the only part of the work that can honestly be fixed-priced up front.",
            "Refuse a fixed price for the build before discovery, and be suspicious when one is offered — the risk is priced into that number, and you pay it whether or not it materialises.",
            "Estimate per capability slice, giving each a three-point range and a list of what must be true for the optimistic figure to hold.",
            "Size contingency from the unknowns register rather than a flat percentage. Give each unknown a cost range and a likelihood, then sum them; forty unknowns is not the risk of four.",
            "Prefer capped time and materials per slice, re-setting the cap as the picture improves. Fixed price for a whole programme transfers risk on paper and returns it as change requests.",
            "Track cost per capability retired, not cost per sprint. Modernisation is measured by what has been switched off, and reporting it that way keeps decommissioning funded.",
          ],
        },
        {
          type: "p",
          text: "The uncomfortable part is that the first honest number arrives only after you have spent money — still cheaper than a confident figure from someone who has not seen your data.",
        },
      ],
    },
    {
      heading: "Spending the budget on a modernisation you can finish",
      blocks: [
        {
          type: "p",
          text: "Programmes that land near their estimate share a shape. They spend real money on discovery before committing to a strategy, profile the data in the first fortnight, treat every integration as its own project, pick a strategy per capability rather than one for the estate, and fund the deletion of the old system as explicitly as the building of the new. The ones that overrun skipped the first two and met the rest under deadline pressure.",
        },
        {
          type: "p",
          text: "If you are putting a defensible legacy system modernisation cost in front of a board and nobody fully understands what is being replaced, a scoped discovery phase is the cheapest way to change that. ApexStack runs that kind of assessment as standalone work, before anyone commits to a strategy.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does it cost to modernise a legacy system?",
      answer:
        "Market ranges run from about US$10,000 to US$50,000 per application for a straight rehost, US$100,000 to US$400,000 for a refactor, and US$300,000 upward — often well past US$1,000,000 — for a full rebuild of a core platform. The strategy chosen is the biggest lever, followed by the number of live integrations, the state of the data, and the delivery location’s blended rate.",
    },
    {
      question: "Why do legacy modernisation projects go over budget?",
      answer:
        "Almost always because the estimate was produced before anyone profiled the data or inventoried the integrations. Undocumented business logic in stored procedures, scheduled jobs and reporting queries surfaces mid-build as change requests, data that no current rule would allow needs business decisions that take weeks, and third-party integration partners work to their own schedules. None of that is unforeseeable — it is just unforeseen when discovery is skipped.",
    },
    {
      question: "Is it cheaper to refactor or to rebuild a legacy system?",
      answer:
        "Refactoring is typically three to five times cheaper than rebuilding and carries far less risk, because behaviour is preserved rather than reproduced. Rebuilding is only better value when the system’s data model or process model no longer matches how the business operates, so a refactor would faithfully preserve the wrong thing. If the features are still right and only the code is painful, refactor.",
    },
    {
      question: "How much should I budget for a discovery phase?",
      answer:
        "For a mid-sized business system, three to eight weeks and roughly US$15,000 to US$60,000 at market rates. The output should be concrete: a dependency map, an integration inventory with named owners, a measured data-quality profile, behaviour tests captured from production traffic, and a register of unknowns with a cost range attached to each. Anything vaguer than that is not discovery.",
    },
    {
      question: "Does moving to the cloud reduce legacy system costs?",
      answer:
        "Rehosting removes data-centre and hardware costs and buys you supported infrastructure, but an inefficient application running on rented compute can cost more per month than it did on owned hardware. The savings come from replatforming onto managed services and from the reduced maintenance burden after refactoring, not from the change of venue on its own.",
    },
    {
      question: "How long does legacy system modernisation take?",
      answer:
        "A rehost can be weeks. A refactor of a mid-sized application is typically several months. A rearchitecture or rebuild of a core platform runs a year or more, and duration scales with integration count and data complexity rather than with lines of code. Incremental approaches take longer end to end but deliver working capability from the first months instead of at the end.",
    },
  ],
};
