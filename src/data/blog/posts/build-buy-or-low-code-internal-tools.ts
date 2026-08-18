import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "build-buy-or-low-code-internal-tools",
  title: "Internal Tools: Build, Buy or Low-Code?",
  seoTitle: "Build vs Buy Internal Tools (or Low-Code): A Framework",
  description:
    "Build vs buy internal tools, with low-code as the third option: where each one wins, exactly where low-code hits a wall, and what migration costs.",
  excerpt:
    "A decision framework for internal tooling — where low-code genuinely wins, the specific points at which it stops working, and what it costs to move off it.",
  category: "Automation & Internal Tools",
  primaryKeyword: "build vs buy internal tools",
  secondaryKeywords: [
    "internal tool development cost",
    "low-code vs custom development",
    "when to move off a low-code platform",
    "low-code platform limitations",
    "retool vs custom internal tool",
  ],
  published: "2026-08-12",
  authorId: "leadership-03",
  keyTakeaway:
    "Buy an internal tool only when the function is a commodity someone else already sells well; use low-code for admin panels, CRUD over a database you already own, and simple approval flows; build when the tool needs complex state, large data volumes, bespoke UX, offline operation or serves more than roughly a hundred people. Low-code wins decisively on time to first version and loses on per-seat cost at scale and on exit, because SQL queries port cleanly to a rebuild while UI, workflow orchestration and the permissions model do not.",
  sections: [
    {
      heading: "What the build vs buy internal tools decision actually turns on",
      blocks: [
        {
          type: "p",
          text: "The build vs buy internal tools question is usually framed as a budget decision and is almost never one. Internal tools are cheap relative to the salaries of the people using them; a tool that saves forty operations staff ten minutes a day pays for most reasonable implementations inside a quarter. What actually decides it is the shape of the problem — how much state the interface has to hold, how much data sits behind it, how specific the interaction has to be, and how long the tool needs to live.",
        },
        {
          type: "p",
          text: "There are three options rather than two, and the third one changes the arithmetic. Retool, Appsmith, Budibase, ToolJet, Superblocks, Windmill and Microsoft Power Apps all let a competent engineer put a working interface over an existing database in an afternoon. That speed is real and worth taking seriously. So is the point at which it stops working, which is more precisely locatable than most vendor comparisons admit.",
        },
        {
          type: "p",
          text: "The framework below is ordered the way the decision should be made: eliminate buying first, because it is either obviously right or obviously wrong; then test whether the problem sits inside low-code’s envelope; then build what remains.",
        },
      ],
    },
    {
      heading: "When should you buy an internal tool outright?",
      blocks: [
        {
          type: "p",
          text: "Buy when the function is a commodity — when thousands of companies need the same thing, the process is standardised by law or convention, and a vendor has spent a decade on edge cases you have never encountered. Payroll, expense management, applicant tracking, helpdesk ticketing, error monitoring, log aggregation, identity and access management. You will not out-build Okta or Sentry, and the attempt costs more than a decade of licences.",
        },
        {
          type: "p",
          text: "The test is whether your process differs from the market default for a reason you can defend. If your approvals differ because of how your industry regulates, that is a reason. If they differ because someone configured it that way in 2019, that is not a reason — change the process and buy the product.",
        },
        {
          type: "p",
          text: "Buying stops being right the moment you are paying a per-seat fee for a product whose main job is displaying your own data back to you. That is where low-code and build compete.",
        },
      ],
    },
    {
      heading: "Where low-code genuinely wins",
      blocks: [
        {
          type: "p",
          text: "Low-code is excellent at a narrow and common class of problem: putting a safe, permissioned window over data you already hold, for a small number of people, with no bespoke interaction requirements.",
        },
        {
          type: "list",
          items: [
            "Admin panels — search, view, edit, soft-delete over existing tables, with an audit trail bolted on",
            "CRUD over a database that already exists and already has the right schema and indexes",
            "Approval flows with a small number of linear states and a notification at each transition",
            "Operations dashboards that read from three systems and render numbers in one place",
            "Support-team tools that wrap two or three API calls, such as issuing a refund or resending a webhook",
            "One-off or seasonal tooling with a known end date, where nobody should write a codebase",
          ],
        },
        {
          type: "p",
          text: "The economic case is entirely about the first version. Two days versus six weeks is not a marginal improvement; it changes which tools get built at all. The internal tools that never get built are the ones that would have taken a month for a benefit nobody could quantify in advance — and a great many of those turn out to be valuable once they exist.",
        },
        {
          type: "p",
          text: "Framework-native admin layers deserve a mention alongside the platforms. Django admin, Rails ActiveAdmin, Supabase Studio, Directus, Forest Admin, react-admin and Refine occupy similar ground while keeping the artefact inside your repository, under version control, deployable by your existing pipeline. If your stack has one, it is frequently the better first move because the exit cost is close to zero.",
        },
      ],
    },
    {
      heading: "Exactly where low-code hits a wall",
      blocks: [
        {
          type: "p",
          text: "The boundaries are specific rather than philosophical. Every one of these is a place where the platform’s abstraction stops matching the problem, and no amount of skill inside the platform recovers it.",
        },
        { type: "h3", text: "Complex client state" },
        {
          type: "p",
          text: "Low-code state models are component-bound key-value stores — adequate for a form and a table, inadequate for a multi-step wizard with cross-step validation, optimistic updates that must roll back, undo, draft autosave, or two operators editing one record and needing conflict resolution. There is no reducer, no state machine, no place to put invariants, and debugging means reading a dependency graph in a side panel rather than a stack trace.",
        },
        { type: "h3", text: "Performance at data volume" },
        {
          type: "p",
          text: "A table component over 5,000 rows is fine. Over 500,000 rows you need server-side pagination, keyset rather than offset pagination, virtualised rendering, and indexes chosen to match the exact query the screen issues. The query editor makes the wrong thing easy — fetch a wide result set and filter it client-side — and the failure appears months later as a screen that takes eleven seconds and a database with a sequential scan in its slow log.",
        },
        { type: "h3", text: "Bespoke UX and keyboard-driven work" },
        {
          type: "p",
          text: "If someone processes 400 records a shift, tab order, keyboard shortcuts, inline validation and information density are the product. Generic component libraries optimise for looking reasonable with no effort, which is the opposite requirement. The same applies to anything customer-facing, anything that must carry your brand, and anything needing genuine accessibility compliance rather than the subset the vendor’s components happen to implement.",
        },
        { type: "h3", text: "Offline and unreliable connectivity" },
        {
          type: "p",
          text: "Warehouse floors, field service, vehicles, hospital basements. Offline means local persistence, a sync engine, a conflict resolution policy and an explicit merge model. Low-code platforms assume a live connection to their runtime; this is not a gap you close with configuration.",
        },
        { type: "h3", text: "Deep integration and engineering hygiene" },
        {
          type: "p",
          text: "Long-running background jobs, streaming updates, webhook signature verification, per-record authorisation driven by business rules rather than a role name, and transactions spanning several systems. Alongside those sit the process problems: reviewing a change as a diff, running unit tests, reproducing a production bug on a laptop, rolling back a bad deploy in seconds. Platforms have improved on version control, but none makes a low-code app as inspectable as a repository.",
        },
      ],
    },
    {
      heading: "The per-seat economics of low-code internal tools at scale",
      blocks: [
        {
          type: "p",
          text: "Low-code platforms meter on at least two axes and often three: builder or developer seats at a high band, end-user seats at a lower band, and workflow runs or tasks metered separately. Observed market bands put end-user seats roughly in the $10–$50 per user per month range and builder seats several times higher, with self-hosted editions removing the infrastructure dependency while usually keeping the user meter intact.",
        },
        {
          type: "callout",
          text: "The audience for an internal tool is your own company. That is what makes low-code seat pricing behave differently from every other SaaS line — the meter is attached to headcount you are already committed to, and a tool touched once a week costs the same as one someone lives in.",
        },
        {
          type: "p",
          text: "Specialist SaaS charges you for the twelve people who need it. An internal tools platform charges for everyone who opens a screen: the warehouse, support, finance analysts, the regional managers who look at one dashboard a month. At 400 staff, mid-band pricing puts the annual bill into six figures for software whose original selling point was that it was cheap to produce.",
        },
        {
          type: "p",
          text: "Then there is concentration risk. Because the first tool is so easy, you build eleven more. Refunds, inventory adjustments, the moderation queue and customer offboarding now all live inside one vendor’s runtime, sharing one availability record and governed by one pricing decision you do not control — a materially different exposure from one bought product for one function.",
        },
      ],
    },
    {
      heading: "What migration costs when you outgrow low-code",
      blocks: [
        {
          type: "p",
          text: "The honest planning figure is that rebuilding a mature low-code application costs roughly what building it from scratch would have cost, less the discovery phase. Discovery is genuinely worth something — perhaps a fifth to a third of a project — because the low-code app is an executable specification that real users have already argued with. That is the actual return on the low-code period, and it is a good return. What does not survive is the implementation.",
        },
        {
          type: "p",
          text: "The portability line runs through the query editor, and it is easy to see once you look for it.",
        },
        {
          type: "code",
          lang: "sql",
          code:
            "-- Ports cleanly: this lives in your database, not in the platform.\nselect o.id, o.status, c.name,\n       sum(li.qty * li.unit_price) as total\nfrom   orders o\njoin   customers c  on c.id = o.customer_id\njoin   line_items li on li.order_id = o.id\nwhere  o.created_at >= {{ dateRange.value.start }}\ngroup  by o.id, o.status, c.name;\n\n-- Everything except one fragment above is portable SQL.\n-- {{ dateRange.value.start }} binds to a component in the\n-- platform runtime. Multiply that binding by every query,\n-- transformer and event handler in the app and you have\n-- the shape of the lock-in: not the data, the wiring.",
        },
        {
          type: "p",
          text: "SQL and REST calls port. The data model ports, because it was always yours. What does not port is the UI layout, every component binding, the platform’s expression language, workflow and cron orchestration, the permissions model, the audit log, the secrets and resource configuration, and any logic that ended up inside a JavaScript transformer rather than in a service. In practice that is most of the app’s behaviour.",
        },
        {
          type: "p",
          text: "Migration is best done as a strangler rather than a rewrite: put the new screens behind the same navigation, move one workflow at a time starting with whichever one triggered the decision, and leave the long tail of rarely used admin screens on the platform indefinitely. Very few organisations need to leave completely, and paying for a handful of builder seats to keep the tail alive is usually cheaper than rebuilding it.",
        },
      ],
    },
    {
      heading: "Build, buy and low-code compared on the dimensions that matter",
      blocks: [
        {
          type: "table",
          caption:
            "Internal tooling options compared. Cost figures are observed market ranges, not quoted prices, and assume a moderately complex operational tool.",
          head: ["Dimension", "Build", "Buy (SaaS)", "Low-code"],
          rows: [
            [
              "Time to first usable version",
              "4–12 weeks",
              "Days, if it fits as sold",
              "2–10 days",
            ],
            [
              "Year-one cost at 10 users",
              "$40k–$120k build plus hosting",
              "$3k–$18k in licences",
              "$2k–$12k platform plus 1–3 weeks of internal effort",
            ],
            [
              "Year-one cost at 100 users",
              "Build cost unchanged; hosting rises modestly",
              "$25k–$150k, partly offset by volume discount",
              "$25k–$90k; seats dominate every other line",
            ],
            [
              "Marginal cost of user 101",
              "Effectively hosting only",
              "Full seat price",
              "Full seat price",
            ],
            [
              "Functional ceiling",
              "None you cannot engineer past",
              "The vendor’s roadmap",
              "Complex state, data volume, bespoke UX, offline",
            ],
            [
              "Who can change it",
              "Engineers, via a reviewed pull request",
              "Nobody outside the vendor",
              "Anyone with a builder seat — the benefit and the risk",
            ],
            [
              "Testing and rollback",
              "Standard CI, full history, instant revert",
              "Not applicable",
              "Partial and platform-dependent",
            ],
            [
              "Exit cost",
              "Low — the repository is yours",
              "High — extraction plus a replacement",
              "Medium to high — queries port, wiring does not",
            ],
            [
              "Best fit",
              "Differentiating workflow, 100+ users, multi-year life",
              "Commodity function with a standardised process",
              "Admin panels, CRUD, approvals, ops dashboards",
            ],
          ],
        },
      ],
    },
    {
      heading: "A sequencing rule, and the signals that say it is time to move",
      blocks: [
        {
          type: "p",
          text: "For most operational tooling the right sequence is low-code first, deliberately treated as disposable, with the exit criteria agreed before the first screen is built. That converts an unresolved build vs buy internal tools argument into a cheap experiment with a defined end condition.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Build version one in low-code and say out loud that it is throwaway, so nobody defends it later out of sunk cost.",
            "Keep business logic in the database or a small service behind an API — views, functions, an endpoint — never in a transformer. This is the single decision that determines migration cost.",
            "Instrument usage from day one: who opens which screen, how often, how long queries take, how fast the tables grow.",
            "Write the exit triggers down as numbers before you start, not as a feeling you will have later.",
            "When a trigger fires, rebuild only the screens that fired it and leave the rest.",
          ],
        },
        {
          type: "p",
          text: "The triggers worth committing to in advance: a screen where the median load time passes two seconds; more than two documented workarounds on a single workflow; a transformer longer than a hundred lines; a production bug you cannot reproduce outside the platform; any external or customer-facing user; builder seats becoming the constraint on how fast the team can respond; or an annual platform bill that has passed the maintenance cost of an equivalent in-house application.",
        },
        {
          type: "p",
          text: "Any one is a signal, not a verdict. Two at once on the same tool means the rebuild will happen eventually, and doing it deliberately costs considerably less than doing it during an incident. If you want a second opinion on which screens genuinely need to move, this kind of migration is a large part of what we do.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Should we build or buy our internal tools?",
      answer:
        "Buy when the function is a commodity with a standardised process — payroll, ticketing, identity, error monitoring. Build when the tool encodes how your business actually operates, serves a large number of people, or needs behaviour a configurable product cannot express. Between those, low-code covers admin panels and CRUD over data you already own. Start by asking whether your process differs from the market default for a defensible reason.",
    },
    {
      question: "When is low-code not good enough for an internal tool?",
      answer:
        "Low-code stops working with complex client state such as multi-step wizards with cross-step validation or concurrent editing, with datasets large enough to need keyset pagination and virtualised rendering, with keyboard-driven high-volume data entry, with offline or unreliable connectivity, and with per-record authorisation driven by business rules. It also struggles with engineering hygiene: diff-based review, unit tests and reproducing production bugs locally.",
    },
    {
      question: "How much does a low-code platform cost at 100 users?",
      answer:
        "Observed market bands put end-user seats roughly at $10–$50 per user per month, with builder seats several times higher and workflow runs often metered separately. At a hundred users that commonly lands somewhere between $25,000 and $90,000 a year. The distinguishing factor is that internal tools are used company-wide, so the meter tracks total headcount rather than a specialist team.",
    },
    {
      question: "What does it cost to migrate off a low-code platform?",
      answer:
        "Plan for roughly the cost of building the application from scratch, less the discovery phase — the existing app is an executable specification that users have already stress-tested, which is worth perhaps a fifth to a third of a project. SQL queries and the data model port cleanly. UI layout, component bindings, workflow orchestration, the permissions model and any logic in transformers all have to be rewritten.",
    },
    {
      question: "Is Retool cheaper than building a custom internal tool?",
      answer:
        "Below about twenty users, almost always — the first version arrives in days rather than weeks and the licence cost stays small. Above about a hundred users the comparison inverts, because platform cost scales with every seat while a built application’s cost is fixed at delivery plus maintenance and hosting. The crossover moves earlier if the tool needs bespoke interaction or handles large datasets.",
    },
    {
      question: "How do you avoid low-code vendor lock-in?",
      answer:
        "Keep business logic outside the platform. Put rules in database views and functions or behind a small API your own service owns, and treat the platform strictly as a rendering and routing layer over those. Avoid long JavaScript transformers, keep workflow orchestration in something you control, and agree numeric exit triggers before the first screen is built so the decision to move is evidence-led rather than emotional.",
    },
  ],
  serviceSlug: "automation",
};
