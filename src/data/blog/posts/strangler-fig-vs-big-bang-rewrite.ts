import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "strangler-fig-vs-big-bang-rewrite",
  title: "Strangler Fig vs Big-Bang Rewrite: Choosing a Migration Path",
  seoTitle: "Strangler Fig Pattern vs Rewrite: How to Choose",
  description:
    "Why big-bang rewrites fail, when they are still the right call, and how to run a strangler fig migration that does not strand you halfway.",
  excerpt:
    "The first architectural decision in any modernisation programme, made before a line of the new system exists. What each path commits you to, and how to run the incremental one properly.",
  category: "Legacy Modernisation",
  primaryKeyword: "strangler fig pattern vs rewrite",
  secondaryKeywords: [
    "legacy system migration strategy",
    "big bang rewrite risks",
    "how to implement the strangler fig pattern",
    "incremental legacy migration",
    "when to rewrite legacy software",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "digital-transformation",
  keyTakeaway:
    "Choose the strangler fig pattern by default: it routes traffic capability by capability from the old system to the new one behind a facade, so every release delivers value and every step can be rolled back on its own. A big-bang rewrite is only defensible when the system is small enough for one team to hold in their heads, the feature set can genuinely be frozen for the duration, and a hard platform deadline or technical constraint makes incremental cutover impossible. The deciding question is not which path is faster — it is which failure you can survive.",
  sections: [
    {
      heading: "What each migration path commits you to",
      blocks: [
        {
          type: "p",
          text: "The strangler fig pattern vs rewrite decision is the first architectural choice in a modernisation programme, made before anyone writes a line of the replacement. Martin Fowler named the pattern after the strangler fig, which grows around a host tree, takes over its structure and leaves the original hollow. In software: put a facade in front of the legacy system, move one capability at a time behind it, and delete the old code path once traffic has moved. The legacy system shrinks release by release until nothing routes to it.",
        },
        {
          type: "p",
          text: "A big-bang rewrite commits to the opposite shape. You build a replacement in parallel, hold it back until it covers what the old system does, and move every user across on one date. Both exist throughout the build, but only one ever serves production traffic.",
        },
        {
          type: "p",
          text: "The difference is where the risk sits. A strangler fig migration spreads it across dozens of small, reversible releases and gives a continuous read on progress. A rewrite concentrates it into one irreversible cutover and a long stretch during which nobody, including the team, can honestly say how close to done they are.",
        },
      ],
    },
    {
      heading: "Why do big-bang rewrites fail so consistently?",
      blocks: [
        {
          type: "p",
          text: "Three structural forces work against a rewrite, and none is fixed by hiring better people or planning harder.",
        },
        { type: "h3", text: "The target keeps moving" },
        {
          type: "p",
          text: "The old system does not stop while you rebuild it. Regulation changes, a defect gets patched, a payment provider deprecates an API version. Each lands in the legacy codebase and then has to be re-implemented in the new one. You run two teams whose output diverges, and the parity line moves away at roughly the rate the business changes — on a busy system, faster than the rewrite team closes the gap.",
        },
        { type: "h3", text: "Value arrives as a step function" },
        {
          type: "p",
          text: "Nothing ships until parity, so the whole budget is spent before the first user sees a benefit. That is a political problem more than an accounting one: eighteen months in, when a CFO asks what the programme has produced, the honest answer is a staging environment. Rewrites are rarely killed by technical failure — they are killed in a budget review, with nothing delivered.",
        },
        { type: "h3", text: "Every assumption is tested on the same day" },
        {
          type: "p",
          text: "Cutover weekend is when the data migration, the load assumptions, the integration contracts and the undocumented edge behaviour all meet production at once. If something breaks, rollback means restoring the legacy database and reconciling or discarding everything written since the switch. Teams routinely find that rollback was theoretical.",
        },
        {
          type: "p",
          text: "Underneath all three sits the knowledge problem, which Joel Spolsky’s essay “Things You Should Never Do” put well in 2000: old code is ugly because it is full of bug fixes, and each ugly branch is a defect somebody found in the field. Every strange conditional is a Chesterton’s fence.",
        },
        {
          type: "callout",
          text: "A rewrite is a bet that you understand the old system well enough to replace it. Organisations reach for one precisely because nobody does.",
        },
      ],
    },
    {
      heading: "When is a big-bang rewrite genuinely the right call?",
      blocks: [
        {
          type: "p",
          text: "There are real cases, and pretending otherwise is dogma. The conditions are narrow, and they should hold together rather than one at a time.",
        },
        {
          type: "list",
          items: [
            "One team can hold the system’s entire behaviour set in their heads — weeks or a few months of work, not years. Internal tools with a tolerant user base are the friendliest case.",
            "The feature set can be frozen, in writing, with the business accepting a moratorium for the duration. If that conversation fails, the rewrite has already failed.",
            "A hard platform deadline exists that incremental migration cannot meet: a runtime out of support, a hosting platform being sunset, a licence that will not be renewed, hardware nobody sells any more.",
            "The two systems physically cannot coexist — firmware on a device, or anything with no network boundary where a facade could sit. You cannot route half the traffic through nothing.",
            "The new data model is deliberately incompatible, and the translation layer needed to run both would cost more than the replacement.",
          ],
        },
        {
          type: "p",
          text: "Notice what is not on that list: unpleasant code, an unfashionable framework, a team that wants something newer. Those are real costs, but they argue for modernising, not for concentrating all the risk into one date.",
        },
      ],
    },
    {
      heading: "How do the two paths compare on risk, cost and rollback?",
      blocks: [
        {
          type: "table",
          caption: "Big-bang rewrite versus strangler fig migration.",
          head: ["Dimension", "Big-bang rewrite", "Strangler fig migration"],
          rows: [
            [
              "Risk profile",
              "Concentrated in one cutover; every assumption meets production at once",
              "Spread across many releases; each slice proven separately in production",
            ],
            [
              "Time to first value",
              "Nothing until parity — frequently the whole budget",
              "First slice live in weeks; value accrues continuously",
            ],
            [
              "Total cost",
              "Lower on paper; inflated by parity work, parallel maintenance and overrun",
              "Higher visible cost (facade, dual-running, reconciliation), far tighter variance",
            ],
            [
              "Rollback",
              "Restore the database and reconcile writes; hours to days, sometimes impossible",
              "Flip a route back; seconds, and the legacy path is still warm",
            ],
            [
              "Team shape",
              "Two teams diverging: one maintaining, one rebuilding the same thing",
              "One team and one backlog, moving a boundary",
            ],
            [
              "Progress signal",
              "Reported as 80% done for a year",
              "Share of production traffic on the new path, per capability",
            ],
            [
              "When to choose it",
              "Small frozen system, hard platform deadline, or the two cannot coexist",
              "Nearly everything else, and anything carrying revenue or regulated data",
            ],
          ],
        },
      ],
    },
    {
      heading: "How do you build the routing facade?",
      blocks: [
        {
          type: "p",
          text: "The facade is the whole mechanism, and it is deliberately boring. For an HTTP system it is a reverse proxy — nginx, Envoy or HAProxy — or a managed layer-7 load balancer with path and header rules, such as an AWS Application Load Balancer; where routing needs real logic, an edge worker such as Cloudflare Workers gives a programmable seam. An existing API gateway is already your facade.",
        },
        {
          type: "p",
          text: "Sequencing matters more than the technology. The first change you ship is a no-op: the facade routes one hundred per cent of traffic straight through to the legacy system. That release exists to prove it handles sessions, cookies, authentication headers, redirects, streaming responses, upload limits and timeouts under production load while doing nothing interesting. If the facade is going to break something, break it on a day when it is the only change.",
        },
        {
          type: "code",
          lang: "nginx",
          code: "upstream legacy  { server legacy-app.internal:8080; }\nupstream billing { server billing-svc.internal:3000; }\n\nserver {\n  listen 443 ssl;\n\n  # Slice 1 has moved. Everything under this path is the new service.\n  location /api/invoices/ {\n    proxy_pass       http://billing;\n    proxy_set_header X-Forwarded-Identity $http_x_identity;\n  }\n\n  # Everything else still belongs to the monolith. This block shrinks\n  # slice by slice until it is the last thing left to delete.\n  location / {\n    proxy_pass http://legacy;\n  }\n}",
        },
        {
          type: "p",
          text: "Keep routing declarative and in version control rather than clicked into a console — the route table is the live record of how far the migration has got. Route on path first, then add header matching to canary a slice to internal users.",
        },
        {
          type: "p",
          text: "Authentication is the part that reliably bites. Decide early whether the facade terminates it and passes a signed identity to both systems, or both keep validating the legacy session. A shared session store is the usual transitional compromise; give it an expiry date the day you introduce it.",
        },
      ],
    },
    {
      heading: "Which capability should you strangle first?",
      blocks: [
        {
          type: "p",
          text: "The first slice is chosen for what it proves, not for how much of the system it removes: large enough that finishing it convinces the people funding the work, small enough that finishing it is not in doubt.",
        },
        {
          type: "list",
          items: [
            "High change rate, low coupling. Go where the maintenance pain is and where the blast radius is smallest — usually the same place.",
            "Owns its own data, or reads far more than it writes. A capability entangled with six other tables is a second slice.",
            "Has a business owner who will notice the improvement and say so at the funding review.",
            "Is not the payment path, not the month-end batch, and not the integration whose vendor is mid contract renewal.",
            "Is representative. A trivial leaf endpoint proves nothing and invites the conclusion that the approach will not scale.",
          ],
        },
        {
          type: "p",
          text: "Read-only reporting and search views make good first slices because you can shadow them: send the request to both systems, serve the legacy response, and compare the new one offline until every difference is explained. That is a correctness signal with no production risk. The second slice should be a real write path, or you have proved nothing about consistency, which is the hard problem.",
        },
      ],
    },
    {
      heading: "How do you keep both systems consistent during the transition?",
      blocks: [
        {
          type: "p",
          text: "For every entity, at every moment of the migration, exactly one component is the system of record. Write that down per entity before routing anything. Ambiguity here is what turns a strangler fig migration into a data reconciliation project.",
        },
        {
          type: "list",
          items: [
            "Single writer, remote read. The new service owns writes for its entity and the legacy system reads it over an API. The cleanest option, and it requires changing legacy code — the work people avoid, and the work that pays off.",
            "Shared database, explicitly transitional. Both systems read and write the same schema. Fast to start, and it will outlive its welcome, so raise the decommission ticket the day you open the connection.",
            "Change data capture. Debezium reading the write-ahead log into a stream, with the new store as a downstream projection. No legacy code changes, but eventually consistent — wrong where read-your-writes matters, right for read models.",
            "Dual writes from application code. Two stores and no shared transaction, so a crash between the writes leaves them divergent. Use the transactional outbox pattern instead: commit the business change and the outbound event in one local transaction, publish asynchronously.",
          ],
        },
        {
          type: "p",
          text: "Run reconciliation from the first slice. A scheduled job comparing row counts and per-entity checksums across both stores, alerting on drift above a threshold, costs a few days and decides whether you find divergence on a dashboard or in a customer complaint. Key every consumer on a business identifier so replays are idempotent — during a migration you will replay a lot.",
        },
      ],
    },
    {
      heading: "How do you avoid being stranded halfway forever?",
      blocks: [
        {
          type: "p",
          text: "This is the genuine failure mode of the pattern, and it is worse than either endpoint. A permanently half-migrated estate means two deployment pipelines, two runbooks, two authorisation models, and every feature costed twice because nobody is sure which side it belongs on. The migration stops when the political energy runs out.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Write the decommission criterion before starting a slice: which routes disappear, which tables are dropped, which scheduled jobs are deleted.",
            "Budget the deletion. A slice is finished when the old code is gone from the repository and its infrastructure is torn down, not when the new service ships.",
            "Freeze the legacy path for any slice in flight. If the business will not accept that, either the slice is wrong or the priority is.",
            "Report one number upward: the share of production traffic served by the new path, per capability. It is unfakeable, and it either moves every fortnight or it does not.",
            "Put an expiry date and a named owner on every facade route, shim and shared-database connection. A transitional component with no owner is a permanent one.",
            "Never leave a slice at ninety per cent. The remaining ten is the legacy edge cases, and those are the entire reason the modernisation was needed.",
          ],
        },
        {
          type: "callout",
          text: "A strangler fig migration is finished when the legacy repository is archived. Any other definition of done leaves you paying for two systems indefinitely.",
        },
      ],
    },
    {
      heading: "Choosing the migration path for your system",
      blocks: [
        {
          type: "p",
          text: "If revenue or regulated data flows through the system, the strangler fig pattern wins on rollback alone — undoing a bad release in seconds is worth the facade and the reconciliation work several times over. If the system is small, frozen and up against a platform deadline, a rewrite is the honest answer, and the effort belongs in behaviour tests captured from production traffic.",
        },
        {
          type: "p",
          text: "If you cannot describe a first slice, that is the finding: the system has no visible seams yet, and the next work is discovery — call paths, data ownership, integration contracts — not construction. The approaches also compose, since rewriting one bounded capability inside a single slice stays contained by a route you can flip back.",
        },
        {
          type: "p",
          text: "Weighing a strangler fig migration against a rewrite on a system nobody fully understands any more is the conversation we have most often with engineering leaders. If that is where you are, ApexStack can work through the seams, integration contracts and cutover risks before anyone commits a budget.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is the strangler fig pattern always better than a rewrite?",
      answer:
        "No, but it is the correct default. The strangler fig pattern is better whenever the system carries revenue or regulated data, cannot pause feature delivery, or is too large for one team to fully understand. A rewrite wins when the system is small, the feature set can genuinely be frozen, a hard platform deadline exists, or the old and new systems cannot run side by side at all.",
    },
    {
      question: "What is the routing facade in a strangler fig migration?",
      answer:
        "It is the proxy layer that sits in front of the legacy system and decides, per request, whether the old or new implementation handles it. In practice that is nginx, Envoy, HAProxy, a managed layer-7 load balancer with path and header rules, an edge worker, or an existing API gateway. Ship it first routing everything to the legacy system, so its own risks surface before any migration work depends on it.",
    },
    {
      question: "How long does a strangler fig migration take?",
      answer:
        "Longer end to end than a rewrite would take on paper, and that comparison misleads because the rewrite estimate is the one that slips. What matters is that the first slice reaches production in weeks rather than at the end. Duration then scales with the number of capabilities and integrations, not with lines of code, and progress stays measurable as the share of traffic on the new path.",
    },
    {
      question: "How do you keep data consistent while both systems are running?",
      answer:
        "Assign exactly one system of record per entity and write it down before routing anything. Then pick a mechanism: single writer with the other system reading over an API, change data capture into a downstream projection, or a transactional outbox where events must be published. Avoid unguarded dual writes, and run a reconciliation job comparing counts and checksums from the very first slice.",
    },
    {
      question: "Can you use the strangler fig pattern on a desktop or embedded application?",
      answer:
        "Only where you can insert a boundary. A desktop client talking to a server can be strangled at the API layer, and a modular application can be strangled plugin by plugin. Firmware on a shipped device, or a single-process application with no network seam, generally cannot — there is nowhere to put a facade, which is one of the few situations that genuinely argues for a rewrite.",
    },
    {
      question: "What is the biggest risk of a strangler fig migration?",
      answer:
        "Stalling halfway and running two systems permanently. That costs more than either endpoint because every feature is costed twice and every operational process exists in duplicate. The countermeasures are structural: define the decommission criterion for each slice up front, budget the deletion work, freeze the legacy path for slices in flight, and report the percentage of traffic on the new path to whoever funds the programme.",
    },
  ],
};
