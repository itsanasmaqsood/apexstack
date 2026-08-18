import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "de-risking-a-software-rewrite",
  title: "De-risking a Software Rewrite: A Pre-Migration Checklist",
  seoTitle: "How to De-risk a Software Rewrite: A Checklist",
  description:
    "How to de-risk a software rewrite: the nine things to settle before the first line of replacement code is written. A checklist worth bookmarking.",
  excerpt:
    "Nine artefacts to produce before the replacement project starts — captured behaviour, replayable traffic, an audited dataset, a tested rollback and an agreed kill date. Each one, and what skipping it costs you later.",
  category: "Legacy Modernisation",
  primaryKeyword: "how to de-risk a software rewrite",
  secondaryKeywords: [
    "pre-migration checklist",
    "legacy system rewrite risks",
    "how to plan a legacy migration",
    "production traffic replay testing",
    "feature parity definition",
  ],
  published: "2026-08-12",
  authorId: "leadership-03",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "De-risk a software rewrite by producing nine artefacts before any replacement code exists: documented current behaviour including the bugs downstream teams now depend on, a captured sample of real production traffic to replay against the new system, a named list of the people who understand the old system, a data quality audit, a written definition of feature parity with success criteria baselined on the old system, a rollback plan that has actually been rehearsed, a parallel-running period covering at least one full business cycle, and an agreed decommission trigger with a named owner. Discovery costs a few weeks; every item skipped surfaces later as an incident, a reconciliation project, or a legacy system that never gets switched off.",
  sections: [
    {
      heading: "How do you de-risk a software rewrite before writing any replacement code?",
      blocks: [
        {
          type: "p",
          text: "Most of the answer to how to de-risk a software rewrite is settled before the build starts. Once a team is in delivery the pressure is to ship, and nobody stops mid-sprint to work out what the old settlement job did on a leap day. That investigation happens up front, or during an incident.",
        },
        {
          type: "p",
          text: "Discovery is the cheapest part of the programme: two or three people for a few weeks against a build measured in quarters. What follows is nine items, each producing an artefact rather than a meeting. If it does not end in something committed to a repository, it is not done.",
        },
        {
          type: "table",
          caption: "Each checklist item, the artefact it produces, and the cost of skipping it.",
          head: ["Checklist item", "Artefact it produces", "What skipping it costs"],
          rows: [
            [
              "Document current behaviour",
              "Characterisation tests and a behaviour inventory, including the bugs in active use",
              "The new system is correct, the business says it is broken, nobody can adjudicate",
            ],
            [
              "Capture production traffic",
              "A replayable corpus of real requests and payloads",
              "Your tests cover what you imagined; production covers what arrives",
            ],
            [
              "Map who understands the old system",
              "A named list per subsystem, knowledge extracted into tests and runbooks",
              "The one person who knew the reconciliation logic leaves in month four",
            ],
            [
              "Audit data quality",
              "A profiling report: orphaned keys, duplicates, encoding damage, sentinel dates",
              "Cutover weekend becomes an unplanned data-cleaning project",
            ],
            [
              "Define feature parity in writing",
              "A signed contract listing what carries over and what deliberately does not",
              "Parity becomes whatever the loudest stakeholder remembers",
            ],
            [
              "Set measurable success criteria",
              "Baselines measured on the old system before anything changes",
              "No way to prove the new system is better, or to notice it is worse",
            ],
            [
              "Write and rehearse the rollback",
              "A tested procedure with a measured duration and a named decision-maker",
              "You learn mid-incident that rollback was a paragraph, not a capability",
            ],
            [
              "Plan the parallel-running period",
              "A schedule covering one full business cycle, reconciliation throughout",
              "Month-end and payroll behaviour is first exercised on real customers",
            ],
            [
              "Agree the decommission trigger",
              "A written condition, a date, and an owner who cancels the licence",
              "Two systems, two on-call rotations and two invoices, indefinitely",
            ],
          ],
        },
      ],
    },
    {
      heading: "How do you document behaviour that nobody ever wrote down?",
      blocks: [
        {
          type: "p",
          text: "Reading the code tells you what happens. It does not tell you which of those things anyone depends on, and that distinction is what the rewrite lives or dies by. Any system of age contains behaviour that was never specified, or that emerged from three modules whose authors never met.",
        },
        {
          type: "p",
          text: "The productive sources are rarely the codebase. Support tickets show which behaviours users notice. The runbook lists the manual steps that exist because the software does not do them. The spreadsheets maintained beside the system specify the features it lacks. The cron table is the most complete inventory anyone has.",
        },
        { type: "h3", text: "The bugs are part of the specification" },
        {
          type: "p",
          text: "Somewhere in the old system is a defect a downstream team has built a process around: a status transition the state machine should not permit but the warehouse uses daily, or a report that double-counts one category on which every historic finance figure rests.",
        },
        {
          type: "p",
          text: "Fix those silently and the year-on-year comparison breaks, the warehouse process stops, and the rewrite takes the blame. Each needs a recorded decision before the build: reproduce it, fix it and tell the affected team, or fix it and migrate the historic data. Go-live day is not when to decide.",
        },
        {
          type: "p",
          text: "The mechanism is what Michael Feathers called characterisation tests: tests asserting what the system currently does rather than what it ought to. Written against the old system, they become the acceptance suite for the new one.",
        },
      ],
    },
    {
      heading: "Why capture real production traffic before you build anything?",
      blocks: [
        {
          type: "p",
          text: "A test suite written from a specification covers the inputs the team imagined. Production covers the inputs that exist: the customer with 4,000 line items on one order, the client integration still posting a field deprecated in 2019, the retry storm that arrives every hour at seven minutes past.",
        },
        {
          type: "p",
          text: "Capture a corpus of real requests early, while the old system is still the only system. Nginx has mirrored requests to a second upstream since version 1.13.4 and Envoy offers request mirror policies; GoReplay records and replays traffic from a network interface. For message-driven systems, tee the queue into an archive topic.",
        },
        {
          type: "code",
          lang: "nginx",
          code: "location /api/ {\n  # Live traffic still goes to the legacy system, unchanged.\n  mirror              /shadow;\n  mirror_request_body on;\n  proxy_pass          http://legacy;\n}\n\nlocation = /shadow {\n  internal;\n  # The candidate sees the same request; nginx discards its response,\n  # so compare by logging both sides and diffing offline.\n  proxy_pass                http://candidate$request_uri;\n  proxy_set_header          X-Shadow 1;\n  proxy_ignore_client_abort on;\n}",
        },
        {
          type: "p",
          text: "Two cautions. Mirrored requests genuinely reach the candidate, so anything with a side effect — charging a card, sending an email, calling a partner API — must be stubbed before you mirror a single write. And the corpus is real personal data: pseudonymise it, restrict access, give it a deletion date.",
        },
        {
          type: "p",
          text: "Skip this and the first honest test of the new system is the cutover.",
        },
      ],
    },
    {
      heading: "Who actually understands the old system, and what happens when they leave?",
      blocks: [
        {
          type: "p",
          text: "Write down, per subsystem, the name of the person who could explain it under questioning. The list is always shorter than the organisation assumes, and it often includes someone who left and now consults occasionally.",
        },
        {
          type: "p",
          text: "That list is a risk register. One name against four subsystems is a single point of failure no architecture work addresses. Rewrites routinely lose that person around month four, partly because a rewrite tells the old maintainers that their expertise has an expiry date.",
        },
        {
          type: "list",
          items: [
            "Extract knowledge into artefacts, not recordings. A characterisation test still runs in two years; a two-hour video walkthrough is watched once.",
            "Have them narrate the batch cycle end to end while someone writes the runbook, including which failures are safe to ignore.",
            "Pair them with the rewrite team on the first slice rather than interviewing them. Questions surface in code that never surface in a meeting.",
            "Make them the reviewer of the parity contract for their area — the cheapest correctness check available.",
            "Discuss retention explicitly, and what their role is once the old system is gone.",
          ],
        },
        {
          type: "p",
          text: "Where the knowledge has already gone, say so in the plan. A subsystem with no living expert is a candidate for behaviour capture and replay rather than reimplementation, scheduled late enough that the team has learned the domain first.",
        },
      ],
    },
    {
      heading: "What does a data quality audit find that a schema diagram does not?",
      blocks: [
        {
          type: "p",
          text: "The replacement will have constraints. The old system, after fifteen years of change, very likely does not enforce the ones it declares. Profiling before the migration is designed is the difference between planned remediation and a cleanup script written at two in the morning.",
        },
        {
          type: "p",
          text: "The findings are consistent across almost every legacy estate: rows referencing parents that no longer exist because foreign keys were disabled during an import and never re-enabled; duplicates in a unique column differing only by case or trailing whitespace; sentinel values such as 1900-01-01 standing in for null; latin1 columns holding UTF-8 bytes; money in floating-point columns; timestamps with no timezone.",
        },
        {
          type: "p",
          text: "None of it is exotic and all of it is cheap to find. A day of SQL profiling — counts, distinct values, orphan checks against every declared relationship, regex validation on the fields the business cares about — produces the report. Codify the checks as dbt tests or Great Expectations suites so they run on every rehearsal.",
        },
        {
          type: "p",
          text: "The output is a decision per defect: clean before migration, quarantine, or exclude and tell the owner. Volume decides which. Three hundred orphaned rows is an afternoon; three hundred thousand is a workstream, and auditing early is how you learn which.",
        },
      ],
    },
    {
      heading: "What does feature parity mean, in writing, and how will you know you have it?",
      blocks: [
        {
          type: "p",
          text: "Parity is the word that ends projects. Without a written definition it means whatever the most senior person in the room remembers, which expands every time they use it. A parity contract agreed before the build converts an argument into a checklist.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Every screen, endpoint, report, export and scheduled job in scope, enumerated. The route list and cron table make this mechanical.",
            "What is explicitly not carried forward, with the name of whoever agreed it. This list is where the saved effort comes from.",
            "The bug-compatibility register: which defects are reproduced deliberately, which are fixed, and who is told before each fix ships.",
            "Outputs that must match the old system exactly — invoices, statutory reports, anything the business reconciles to the penny.",
            "Integration contracts and versions, including the partner systems that will not change and therefore constrain the new design.",
            "The permissions matrix. Access rules are most often reimplemented from assumption, and carry the worst failure mode.",
          ],
        },
        {
          type: "p",
          text: "Then attach numbers, measured on the old system before anything changes; a baseline captured after the migration has begun is worthless. Useful ones are concrete: p95 on the ten busiest endpoints, nightly batch completion against its window, monthly support tickets by category, error rate, cost per transaction. Each needs a tolerance — that p95 must not exceed the current 340 milliseconds by more than 20 per cent is a criterion; that the new system must be fast is a sentiment, and nobody fails a cutover on a sentiment.",
        },
      ],
    },
    {
      heading: "Have you tested the rollback, or only written it down?",
      blocks: [
        {
          type: "p",
          text: "Nearly every migration plan contains a rollback section. A small minority have executed one. That gap is where cutover weekends go wrong, because rollback is not a document — it is a procedure with a duration, preconditions, and a person authorised to trigger it.",
        },
        {
          type: "p",
          text: "The technical work is mostly about avoiding irreversible steps. Use expand-and-contract for schema changes so the old code still runs against the new schema: add columns, backfill, dual-read, and drop the old ones only once the new system is established. Run no destructive migrations during cutover. Lower DNS TTLs days ahead. Keep the legacy environment warm and deployable.",
        },
        {
          type: "p",
          text: "The organisational work is a rehearsal. Restore the production backup into staging, run the migration, then run the rollback and time it. That reliably produces findings: the restore takes four hours rather than forty minutes, the rollback script assumes a table the migration renamed, nobody has out-of-hours DNS credentials.",
        },
        {
          type: "p",
          text: "Then agree the trigger before the day — the conditions under which you roll back, who decides, and the point after which rolling back is no longer possible because writes have accumulated in the new system. A 3 a.m. decision taken by consensus with no pre-agreed threshold is how a two-hour degradation becomes a fourteen-hour outage.",
        },
      ],
    },
    {
      heading: "How long do both systems run in parallel, and what turns the old one off?",
      blocks: [
        {
          type: "p",
          text: "Parallel running is the last chance to find divergence before a customer does. The sequence is shadow, canary, cohort, full: mirror and compare offline, then serve a small share of real users from the new path, then whole segments, then everyone. Each stage gets an entry and an exit condition, and reconciliation runs throughout, comparing counts and checksums across both stores.",
        },
        {
          type: "p",
          text: "Duration is set by the business cycle, not the calendar. The system must complete at least one full cycle in parallel, and the cycle is whatever exercises the behaviour that happens rarely: month-end close, quarterly VAT, payroll, annual renewals, the seasonal peak. A migration validated across three quiet weeks in July has not been validated against November.",
        },
        {
          type: "callout",
          text: "The old system is not decommissioned when the new one goes live. It is decommissioned when someone cancels the licence and destroys the infrastructure, and if nobody is accountable for that, nobody ever does it.",
        },
        {
          type: "p",
          text: "So write the trigger before the build starts: condition, date, owner. Something like — when the new system has served all production traffic through one full month-end with no unexplained reconciliation differences, the legacy application goes read-only, and thirty days later its infrastructure is destroyed and its licences cancelled. Budget the deletion as scope, and plan the archive retention obligations require, which is the usual reason a decommission stalls.",
        },
      ],
    },
    {
      heading: "De-risking a software rewrite before the budget is committed",
      blocks: [
        {
          type: "p",
          text: "None of this needs a large team. Two or three people, three to six weeks depending on the estate, and the output is a behaviour inventory, a traffic corpus, a data quality report, a parity contract, a baseline, a rehearsed rollback and a written kill date. Against a rewrite measured in quarters that is rounding error, and it decides whether every estimate after it means anything.",
        },
        {
          type: "p",
          text: "It is also where some rewrites should stop. If the behaviour is unknowable, the data is worse than expected and the only expert is leaving, the right answer may be an incremental migration behind a facade, or nothing this year. Week five is a good time to learn that; month fourteen is the expensive version.",
        },
        {
          type: "p",
          text: "If you are weighing a replacement for a system older than most of the team's tenure, ApexStack runs this discovery as a fixed engagement before anyone commits to a build.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long should discovery take before starting a software rewrite?",
      answer:
        "For most business systems, three to six weeks with two or three people, running alongside normal delivery. Larger estates with many integrations take longer. The test is not elapsed time but whether the artefacts exist: a behaviour inventory, a captured traffic corpus, a data quality report, a written parity contract, measured baselines and a rehearsed rollback. If those are done in two weeks, discovery is finished.",
    },
    {
      question: "What is bug compatibility and do you really have to keep the bugs?",
      answer:
        "Bug compatibility means deliberately reproducing defects in the replacement because downstream processes depend on them. You do not have to keep them, but you do have to decide about each one explicitly and tell whoever is affected. The failure mode is fixing a defect silently, then breaking a finance report or a warehouse process built around the old behaviour and having the rewrite blamed for it.",
    },
    {
      question: "How do you capture production traffic to test a new system?",
      answer:
        "Mirror live requests to the new implementation without serving its responses. Nginx supports this with the mirror directive, Envoy with request mirror policies, and GoReplay records and replays traffic from a network interface. Stub every side effect first — payments, emails, partner APIs — because mirrored requests genuinely reach the candidate. Treat the captured corpus as production data: pseudonymise it, restrict access, and set a deletion date.",
    },
    {
      question: "What should a feature parity document contain?",
      answer:
        "An enumerated list of every screen, endpoint, report, export and scheduled job in scope; an explicit list of what is not being carried forward with the name of whoever agreed it; the register of bugs being reproduced versus fixed; outputs that must match the old system exactly; integration contracts and versions; and the permissions matrix. Without it, parity means whatever the most senior stakeholder currently remembers.",
    },
    {
      question: "How long should the old and new systems run in parallel?",
      answer:
        "At least one complete business cycle, defined by whatever period exercises the rare behaviour: month-end close, quarterly filings, the payroll run, annual renewals or the seasonal peak. A quiet three weeks proves very little. Run reconciliation throughout, comparing record counts and checksums across both stores, and set the exit condition in advance so parallel running ends rather than becoming permanent dual operation.",
    },
    {
      question: "Why do legacy systems never get switched off after a migration?",
      answer:
        "Because decommissioning is nobody's deliverable. The new system ships, the team moves on, and the old one keeps running because one report still uses it and no one owns turning it off. The fix is structural: agree the decommission condition, date and owner before the build starts, budget the deletion work as project scope, and plan the read-only archive that retention obligations require.",
    },
  ],
};
