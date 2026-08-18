import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "off-the-shelf-vs-custom-software",
  title: "Off-the-Shelf vs Custom Software: A Total Cost Comparison",
  seoTitle: "Off-the-Shelf vs Custom Software: 5-Year Cost Compared",
  description:
    "Off-the-shelf vs custom software priced over five years: seat compounding, renewal rises, integration tax, exit cost — modelled at three team sizes.",
  excerpt:
    "A five-year total cost of ownership model for the off-the-shelf vs custom software decision, with every assumption written out so you can substitute your own numbers.",
  category: "Automation & Internal Tools",
  primaryKeyword: "off-the-shelf vs custom software",
  secondaryKeywords: [
    "total cost of ownership custom software",
    "custom software vs saas cost",
    "when to build custom software instead of buying",
    "cost of custom software over 5 years",
    "per-seat licensing cost at scale",
  ],
  published: "2026-08-12",
  authorId: "leadership-01",
  keyTakeaway:
    "Over five years, off-the-shelf software is usually cheaper below roughly 20–30 seats and custom is usually cheaper above roughly 50, because licence cost compounds with both headcount and annual price rises while build cost does not. The line that decides it is rarely the licence fee — it is the labour cost of the workflow the product cannot support, which scales with every person you hire. If you cannot name a specific workflow that mainstream products break, buy; the arithmetic will not save a build you could not justify in a sentence.",
  sections: [
    {
      heading:
        "What the sticker price hides in an off-the-shelf vs custom software decision",
      blocks: [
        {
          type: "p",
          text: "Most teams settle the off-the-shelf vs custom software question by putting a per-seat price next to a build quote and choosing the smaller number. The comparison is invalid on both sides. The licence figure compounds along two axes at once — more people, higher price — and excludes nearly everything required to make the product fit your business. The build figure is a one-off that excludes everything required to keep the software alive after launch.",
        },
        {
          type: "p",
          text: "Five years is the honest window: roughly how long an internal system survives before replacement, and long enough for compounding to show. Over twelve months buying wins almost every time; over ten years the assumptions have decayed so far the model is fiction.",
        },
        {
          type: "p",
          text: "What follows is every cost line on both sides, then a model across three team sizes with the assumptions stated explicitly. Disagree with one and re-run the sum: the structure matters more than our inputs.",
        },
      ],
    },
    {
      heading: "How does per-seat licensing compound as headcount grows?",
      blocks: [
        {
          type: "p",
          text: "Two multipliers run at once: seat count grows with hiring, unit price grows with each renewal. People model the first and forget the second, which is how a tool budgeted at $48,000 a year becomes an $82,000 line.",
        },
        {
          type: "code",
          lang: "text",
          code:
            "five_year_licence_cost = SUM over y in 1..5 of ( seats_y x price_y x 12 )\n\n  seats_y = seats_0 x (1 + headcount_growth) ^ (y - 1)\n  price_y = price_0 x (1 + renewal_uplift) ^ (y - 1)\n\n  # The two exponents multiply. That is the entire point.\n  # 8% growth and 6% uplift is a 1.72x annual bill by year five,\n  # with no change in what the software does for you.",
        },
        {
          type: "p",
          text: "Seat counts also ratchet in one direction. Most agreements true up upward at each anniversary with no downward adjustment mid-term, so a hiring surge followed by a restructure leaves you paying for people who left. A multi-year deal fixes the discount, not the seat count.",
        },
        {
          type: "p",
          text: "Then there is edition gating. Single sign-on, audit logs, API access, granular permissions and a sandbox are routinely placed one tier above whichever you priced — the SSO tax is established enough to have its own name. It matters because the features that move you up a tier are exactly the ones you need once you have enough people for the seat count to hurt.",
        },
      ],
    },
    {
      heading: "What actually happens at renewal",
      blocks: [
        {
          type: "p",
          text: "At signature you have a competitive process, three vendors and a deadline. At the first renewal you have two years of operational history inside the product, staff who know its quirks, four integrations wired into it and a reporting layer built on its schema. Your negotiating position has collapsed and the pricing reflects it. This is not vendor bad faith; it is the correct commercial response to a customer who cannot credibly leave.",
        },
        {
          type: "p",
          text: "Auto-renewal notice windows compound it. Miss a 60- or 90-day cancellation window and you have bought another full term at whatever the uplift clause allows. Put that date in a calendar owned by a named person on the day you sign.",
        },
        {
          type: "list",
          items: [
            "A capped annual uplift, in writing, for the full term — not year one only",
            "Downward seat adjustment at each anniversary, not just upward true-up",
            "A named export format and an export window measured in months, not days",
            "Edition price protection, so a feature you depend on cannot move up a tier mid-term",
            "API access included in the tier you bought, not sold as an add-on",
            "A non-production environment, so integration testing avoids live data",
          ],
        },
        {
          type: "p",
          text: "Each is cheap at signature and close to impossible at renewal, and together they decide whether your five-year model resembles your five-year invoices.",
        },
      ],
    },
    {
      heading: "What does workflow compromise cost?",
      blocks: [
        {
          type: "p",
          text: "This line decides most of these decisions and never appears on an invoice. A mainstream product supports perhaps eighty per cent of your process. The rest becomes a spreadsheet shadowing the system, a Slack channel where approvals actually happen, a weekly export-and-reconcile ritual, or a person whose job is the gap between two tools.",
        },
        {
          type: "p",
          text: "It is quantifiable: people whose core work the product does not fit, times minutes per day on the workaround, times roughly 220 working days, times their fully loaded hourly cost. Do it honestly — sit with three of those people for an hour rather than estimating from a management view.",
        },
        {
          type: "callout",
          text: "If that annual number is near zero, buy, and stop reading cost models. If it is larger than a fifth of a build estimate, the licence fee is no longer the deciding term and never was.",
        },
        {
          type: "p",
          text: "It dominates at scale because it grows with headcount at full rate while build cost does not grow at all. Licences at least attract volume discounts. Wasted human minutes do not.",
        },
      ],
    },
    {
      heading: "The integration tax nobody budgets for",
      blocks: [
        {
          type: "p",
          text: "Connecting a bought product to the rest of your estate costs more than connecting two systems you control, for structural reasons. The API is designed for the vendor’s median customer, not your data volumes. Rate limits are per minute and there is often no bulk endpoint, so a nightly sync of 200,000 records becomes a paginated crawl with backoff logic. Webhooks arrive at least once with no ordering guarantee, so you write idempotency keys and a deduplication table before any business logic.",
        },
        {
          type: "p",
          text: "Version deprecation adds a recurring cost. A breaking API change with twelve months’ notice is a well-run vendor behaving responsibly, and it is still an unplanned sprint on your side. Budget integration as an annual maintenance line, not a one-off. Integration platforms — Workato, Tray, Zapier, Mulesoft — move the work rather than removing it, and they meter on tasks rather than seats, so the bill tracks transaction volume: the right trade for low-volume glue, the wrong one for a sync that runs on every order.",
        },
        {
          type: "p",
          text: "The genuine cost is rarely the connector. It is the reconciliation job you write because two systems disagree about the same customer, and the on-call rota for the mornings they disagree loudly.",
        },
      ],
    },
    {
      heading: "What does it cost to get your data back out?",
      blocks: [
        {
          type: "p",
          text: "Every vendor offers an export. Few offer one that reconstitutes your business. CSV per object is the norm, and it discards exactly the things that made the data useful.",
        },
        {
          type: "list",
          items: [
            "Attachments, which usually come out one at a time through a rate-limited API",
            "Audit and change history, frequently unavailable through any customer-facing route",
            "Comment threads, and the identity mapping that makes them readable",
            "Custom field definitions and picklist metadata, as distinct from the values",
            "Permission and sharing rules, which encode years of accumulated policy",
            "Computed and rollup fields, which arrive as frozen values with the formula lost",
          ],
        },
        {
          type: "p",
          text: "Post-cancellation retention windows are typically short — often weeks, occasionally a single billing cycle — so extraction has to be engineered before you give notice. Two to six weeks of engineering time on a mature system is a realistic planning figure, and it buys the negotiating position you lacked at the last renewal.",
        },
        {
          type: "p",
          text: "European buyers have a genuine lever. The EU Data Act, applicable from 12 September 2025, obliges providers of data processing services to support customer switching, and switching charges must fall to zero from 12 January 2027. How firmly it bites on application-layer SaaS rather than infrastructure is still being tested, but it is worth citing in a negotiation, and the major cloud providers already waive egress fees for customers leaving entirely.",
        },
      ],
    },
    {
      heading: "What custom software actually costs across five years",
      blocks: [
        {
          type: "p",
          text: "A build has four cost lines: initial delivery, ongoing maintenance, running infrastructure, and the probability-weighted cost of the project going wrong. Omitting any of the last three is how build quotes come to look artificially attractive.",
        },
        { type: "h3", text: "Initial delivery" },
        {
          type: "p",
          text: "Observed market ranges are wide, because blended day rates differ by close to an order of magnitude across delivery geographies. A focused internal tool with one integration and a handful of roles: roughly $40,000 to $120,000. A departmental system with several integrations, a real permissions model and reporting: roughly $150,000 to $400,000. An organisation-wide platform with SSO, audit trails, a regulated data class and legacy migration: $500,000 upward, frequently past $1m. Market observations, not a rate card.",
        },
        { type: "h3", text: "Maintenance, hosting and risk" },
        {
          type: "p",
          text: "The long-standing convention is annual maintenance at 15–25% of initial build cost, covering dependency upgrades, security patching, third-party API changes you did not choose, small feature work and the bugs only production traffic finds. Hosting for a system of this shape — managed Postgres, a container runtime, object storage, observability, transactional email — commonly runs $200 to $3,000 a month by data volume and availability target. Contingency of 20–30% is not pessimism; it is the price of what nobody knew at kickoff.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Scope found late, because the process was documented as it should work rather than as it does",
            "No product owner with authority to decide, so every ambiguity becomes a two-week committee",
            "Integration with an undocumented legacy system whose only expert has retired",
            "Data migration from a source dirtier than anyone admitted before profiling ran",
            "A compliance requirement — SOC 2, HIPAA, GDPR data residency — added after the architecture was set",
          ],
        },
        {
          type: "p",
          text: "Those five move a project from the bottom of its range to the top, and four of them surface in a two-week discovery phase — which is why a fixed price issued without one is a price for a different project.",
        },
      ],
    },
    {
      heading: "Five-year TCO modelled at three team sizes",
      blocks: [
        {
          type: "p",
          text: "Every figure derives from the assumptions listed underneath. Nothing here is a price we charge or any vendor charges; it is a model to rebuild with your own inputs.",
        },
        {
          type: "table",
          caption:
            "Five-year total cost of ownership, modelled. Assumptions below — substitute your own.",
          head: ["Cost line (5-year total)", "10 seats", "50 seats", "200 seats"],
          rows: [
            ["Licences, compounded", "$66,000", "$320,000", "$960,000"],
            ["Implementation and configuration", "$5,000", "$25,000", "$80,000"],
            ["Integration build and upkeep", "$12,000", "$45,000", "$150,000"],
            ["Workflow compromise (labour)", "$59,000", "$299,000", "$1,161,000"],
            ["Exit and data extraction", "$3,000", "$15,000", "$60,000"],
            ["Off-the-shelf 5-year total", "$145,000", "$704,000", "$2,411,000"],
            ["Custom build, initial", "$80,000", "$250,000", "$700,000"],
            ["Maintenance at 18%/yr", "$72,000", "$225,000", "$630,000"],
            ["Hosting and third-party services", "$18,000", "$54,000", "$180,000"],
            ["Build risk contingency at 25%", "$20,000", "$63,000", "$175,000"],
            ["Custom 5-year total", "$190,000", "$592,000", "$1,685,000"],
            ["Cheaper option", "Off-the-shelf", "Custom", "Custom"],
          ],
        },
        {
          type: "list",
          items: [
            "Licence starts at $80 per user per month at 10 and 50 seats, $60 at 200 seats for volume discounting",
            "Renewal uplift of 6% per year, applied at each anniversary",
            "Headcount growth of 8% per year, compounding, seats rounded up",
            "Workflow compromise: 40% of seats lose 15 minutes per working day, at 220 days and a $45 fully loaded hourly cost",
            "Custom is assumed to have a near-zero workflow compromise line — the only reason to build it",
            "Maintenance at 18% of build per year, the midpoint of the 15–25% convention",
            "Exit cost assumes a one-off extraction scaled to data volume and integration count",
          ],
        },
        {
          type: "p",
          text: "The crossover sits between 20 and 50 seats on these inputs, and it moves almost entirely on one line. Set workflow compromise to zero and off-the-shelf wins at every size, including 200 seats. Double it and custom wins at 25. That sensitivity is why a generic answer to the off-the-shelf vs custom software question is worthless: the deciding variable is your process, not the software market.",
        },
      ],
    },
    {
      heading: "A decision rule you can apply this afternoon",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Write down the three workflows the software must support, in your vocabulary, not the vendor’s.",
            "If a mainstream product supports all three with no workaround, buy it and stop.",
            "If one is unsupported, price the workaround: people affected x minutes per day x 220 x loaded hourly cost.",
            "If that annual figure is under 20% of a credible build estimate, buy and accept the workaround deliberately.",
            "If the unsupported workflow is the thing customers pay you for, build regardless of the arithmetic — that process is the business, and outsourcing it to a vendor’s roadmap caps what you can become.",
            "Otherwise split the estate: buy the commodity, build the differentiator, budget the integration properly.",
          ],
        },
        {
          type: "p",
          text: "The split is the answer far more often than either pure position. Nobody should build payroll, accounting, email, identity or a helpdesk — Auth0, WorkOS or Clerk will do identity better than a bespoke implementation for a fraction of the five-year cost. Equally, nobody should run their pricing engine, underwriting rules or fulfilment logic inside a configurable product built for a median customer who is not them.",
        },
        {
          type: "p",
          text: "If you are partway through this arithmetic and stuck on which category a system falls into, that is a conversation we have most weeks — and one where we say buy more often than not.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is custom software cheaper than SaaS in the long run?",
      answer:
        "It depends almost entirely on seat count and workflow fit. Modelled over five years with typical assumptions, off-the-shelf is cheaper below roughly 20–30 seats and custom is cheaper above roughly 50, because licence cost compounds with both headcount and annual price rises while build cost is fixed. If a mainstream product fits your process without workarounds, buying stays cheaper at almost any size.",
    },
    {
      question: "How do you calculate total cost of ownership for software?",
      answer:
        "For a bought product, add compounded licence fees, implementation, integration build and upkeep, the labour cost of workflow workarounds, and eventual data extraction. For a built one, add initial delivery, annual maintenance at 15–25% of build cost, hosting and third-party services, and a 20–30% risk contingency. Use a five-year horizon and write every assumption down so others can challenge the inputs rather than the conclusion.",
    },
    {
      question: "What is the hidden cost of off-the-shelf software?",
      answer:
        "The largest is workflow compromise — the labour spent on spreadsheets, shared inboxes and reconciliation rituals that fill the gap between the product and your actual process. Behind that sit the integration tax, edition gating that pushes SSO and API access into a higher tier, renewal uplifts you cannot refuse once you are embedded, and the engineering cost of extracting your data cleanly if you ever leave.",
    },
    {
      question: "How much does it cost to maintain custom software each year?",
      answer:
        "The long-standing market convention is 15–25% of the initial build cost per year. That covers dependency and framework upgrades, security patching, changes forced by third-party API deprecations, small feature work and production bug fixes. Systems with many external integrations or a regulated data class sit at the top of that band; a self-contained internal tool with few dependencies sits near the bottom.",
    },
    {
      question: "When should you build custom software instead of buying?",
      answer:
        "Build when a specific workflow is both unsupported by mainstream products and central to how you make money, when the labour cost of working around that gap exceeds roughly a fifth of a credible build estimate annually, or when seat counts have grown far enough that licence compounding outruns a fixed build cost. If you cannot state the unsupported workflow in one sentence, buy.",
    },
    {
      question: "Can you mix off-the-shelf and custom software?",
      answer:
        "That is usually the correct answer. Buy the commoditised layers — payroll, accounting, identity, helpdesk, email — where no differentiation is available and vendors have enormous economies of scale. Build the parts that encode how your business actually competes. Then budget the integration between them as a real engineering line with ongoing maintenance, because it is the piece most hybrid estates underfund.",
    },
  ],
  serviceSlug: "custom-software-development",
};
