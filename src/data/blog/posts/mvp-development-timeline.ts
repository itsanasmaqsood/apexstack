import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "mvp-development-timeline",
  title: "MVP Timeline: What 8, 12 and 16 Weeks Actually Buy You",
  seoTitle: "MVP Development Timeline: 8, 12 and 16 Weeks",
  description:
    "What an 8, 12 or 16-week MVP development timeline genuinely delivers — week by week, what ships, what gets cut first, and what to sequence.",
  excerpt:
    "Three common timeboxes, and what each one honestly produces once you subtract the fixed overhead every build pays. Includes what gets cut first, and why adding people in week nine makes you later.",
  category: "MVP & Startups",
  primaryKeyword: "MVP development timeline",
  secondaryKeywords: [
    "how long does it take to build an MVP",
    "12 week MVP",
    "MVP development process week by week",
    "minimum viable product schedule",
    "8 week app build",
  ],
  published: "2026-08-12",
  authorId: "leadership-03",
  serviceSlug: "mvp-development",
  keyTakeaway:
    "An 8-week MVP development timeline buys one core workflow on one platform, done properly, with almost everything else deferred. Twelve weeks adds a second workflow, real admin tooling, several integrations and enough test coverage to change the product safely. Sixteen weeks is the first point at which a second platform, real-time behaviour or compliance groundwork becomes realistic. Every timebox pays the same one to two weeks of fixed overhead first — environments, CI, authentication, deployment and error tracking — which is why short builds lose proportionally more of their calendar to work the user never sees.",
  sections: [
    {
      heading: "What does an MVP development timeline actually include?",
      blocks: [
        {
          type: "p",
          text: "Before a single feature exists, every build pays the same entry fee. An MVP development timeline is not scope divided by team size; it is fixed overhead plus scope divided by team size, and the overhead does not shrink because your product is small. That overhead is the scaffolding a product needs before the first user story can be shipped rather than merely written:",
        },
        {
          type: "list",
          items: [
            "Repository, branch protection, review conventions and a formatter everyone agrees on before the first argument about it.",
            "Three environments — local, staging, production — with parity where it matters, plus secrets management that is not a shared document.",
            "A CI pipeline that runs tests and blocks a broken merge, and a deploy that is one command or a merge to main.",
            "Authentication, sessions, password reset and the permission model. Even bought from Clerk, Auth0 or Supabase, wiring it into your routes takes days.",
            "Database schema, migrations, seed data, and a restore from backup someone has actually performed rather than assumed.",
            "Error tracking, structured logging and one alert that reaches a human. Without them, week 7 debugging costs three times what it should.",
            "Design foundations: tokens, type scale, component set, responsive rules. Chosen once, or relitigated on every screen.",
            "Domain, TLS, transactional email with SPF and DKIM, and — for mobile — Apple and Google developer accounts, which have their own enrolment lead time.",
          ],
        },
        {
          type: "p",
          text: "For a competent team that is roughly one to two weeks of effort: a tenth of a 16-week calendar, a quarter of an 8-week one. Which explains most of the disappointment with short timeboxes. The founder counts eight weeks of features and the team has six, and only six if discovery finished before the clock started.",
        },
        {
          type: "callout",
          text: "Halving the timeline does not halve the output. It removes a fixed cost from nothing and takes the whole reduction out of the feature budget.",
        },
      ],
    },
    {
      heading: "What fits in 8 weeks?",
      blocks: [
        {
          type: "p",
          text: "Eight weeks buys one workflow, on one platform, done well enough that real users can complete it unaided. Not one screen — one end-to-end path: a user signs up, does the thing your product exists to do, and gets a result they would pay for. Everything adjacent to that path is deferred. A realistic shape for two engineers plus part-time design and product:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Week 1 — Workflow definition and wireframes for the core path only, while one engineer stands up repositories, environments, CI and authentication.",
            "Week 2 — A walking skeleton deployed to production behind a login: a real request travelling from interface to API to database and back, on real infrastructure. Core screen designs land.",
            "Weeks 3–5 — The core workflow, built as vertical slices. Each slice is deployable, and there is a demo every Friday whether or not anyone asks.",
            "Week 6 — Supporting behaviour: notifications, the minimum admin view your team needs to unblock a stuck user, and the one integration the workflow genuinely requires.",
            "Week 7 — Hardening. Error states, empty states, validation messages, server-side permission checks, analytics, cross-browser and device passes, accessibility basics.",
            "Week 8 — Launch mechanics and buffer: store submission if mobile, legal pages, monitoring, and whatever week 7 uncovered.",
          ],
        },
        {
          type: "p",
          text: "What eight weeks does not buy: a second platform, a bespoke design language, more than about two user roles, offline support, an integration with a counterparty that has no sandbox, or a test suite deep enough that a stranger can change the code confidently. Those are not failures of the team. They are what the arithmetic leaves out.",
        },
      ],
    },
    {
      heading: "What does 12 weeks add?",
      blocks: [
        {
          type: "p",
          text: "The extra four weeks are worth disproportionately more than 50% additional output, because the fixed overhead is already paid and the team is past the phase where every decision is a first decision.",
        },
        {
          type: "p",
          text: "Twelve weeks typically adds a second substantial workflow, three to six integrations rather than one, real internal tooling instead of a database client, background jobs and scheduled work, reporting a customer would accept, and a permission model with three or four roles that has been tested rather than assumed. It is also the first timebox where automated tests around core domain logic are affordable, and that is the difference between a product you can change in month four and one you can only add to. Twelve weeks is where most pre-seed and seed products should aim: long enough to produce something users rely on, short enough that the market has not moved under the assumptions you started with.",
        },
      ],
    },
    {
      heading: "What does 16 weeks buy that 12 does not?",
      blocks: [
        {
          type: "p",
          text: "Sixteen weeks is the first honest timebox for anything with a second dimension of complexity. Native iOS and Android alongside web. Real-time or collaborative behaviour, which changes your architecture rather than your feature list. A model-serving or data pipeline component with evaluation rather than vibes. Single sign-on, audit logging, field-level encryption and the retention and deletion jobs a HIPAA or SOC 2 conversation will require.",
        },
        {
          type: "p",
          text: "It also buys the thing nobody puts on a plan: the second iteration. At sixteen weeks you can put the product in front of users around week ten, learn something uncomfortable, and still have six weeks to act on it. Below that, feedback arrives after the budget is spent and becomes a phase-two ticket instead of a change. What sixteen weeks still does not buy is a finished platform — multi-region infrastructure, a versioned public API, a full design system and the certification audit itself all sit outside it. Compliance is worth naming precisely: you can build the controls in sixteen weeks, but you cannot compress the observation window an auditor requires.",
        },
      ],
    },
    {
      heading: "8, 12 and 16 weeks side by side",
      blocks: [
        {
          type: "table",
          caption: "What each timebox realistically delivers, assuming discovery is complete before week 1",
          head: ["Dimension", "8 weeks", "12 weeks", "16 weeks"],
          rows: [
            [
              "Realistic scope",
              "One core workflow end to end, plus signup and a minimal account area",
              "Two to three workflows, reporting, background jobs, notifications",
              "Three to five workflows plus one structural capability: real time, mobile, ML or compliance controls",
            ],
            [
              "Platforms",
              "One — responsive web, or a single mobile platform",
              "One, done well, with the second scaffolded if cross-platform",
              "Two, with separate release processes and device testing",
            ],
            [
              "Team shape",
              "2 engineers, part-time design, part-time product",
              "3–4 engineers, dedicated design, part-time QA",
              "4–6 including QA and infrastructure specialists",
            ],
            [
              "Integrations",
              "One, and only with a sandbox and current documentation",
              "Three to six, including at least one that will misbehave",
              "Six or more, including enterprise identity providers",
            ],
            [
              "Testing depth",
              "Smoke tests on the critical path, manual QA elsewhere",
              "Unit tests on domain logic, end-to-end tests on core journeys",
              "The above plus load testing, a permission test matrix and an accessibility pass",
            ],
            [
              "State at the end",
              "Usable by supervised early users; the team is the support desk",
              "Usable by self-serve users with a support process behind it",
              "Sellable, including to a customer who runs a security questionnaire",
            ],
            [
              "Explicitly excluded",
              "Second platform, offline mode, admin tooling, custom design, roles beyond two",
              "Second native platform, real-time collaboration, compliance evidence, public API",
              "Multi-region infrastructure, versioned public API, the audit itself, full design system",
            ],
          ],
        },
      ],
    },
    {
      heading: "What gets cut first when the date will not move?",
      blocks: [
        {
          type: "p",
          text: "Dates slip or scope does; there is no third option, and pretending otherwise is how teams arrive at week 11 with eleven things at 80%. Decide the cut order at the start, while it is still a strategy rather than a panic. A defensible order, first cut to last:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Breadth of user roles. Ship for the role that generates value and give everyone else read access or an export.",
            "Self-serve configuration. Anything a customer could configure can start as a value your team sets in the database.",
            "Bespoke interface work on secondary screens. Use the component library; spend the design budget where users live.",
            "Reporting screens. A scheduled CSV or a Metabase dashboard covers the first cohort.",
            "The second platform. A large cut, and one to make deliberately rather than discover.",
            "Nothing below this line. Authentication correctness, server-side permission enforcement, error handling, backups, deployment automation and tests around core domain logic are not scope — they are the difference between an asset and a liability.",
          ],
        },
        {
          type: "p",
          text: "The cut that looks tempting and is always wrong is the deployment pipeline. Teams under pressure deploy manually to save two days, then repay it every week in failed releases, unrepeatable environments and evenings spent restoring a state nobody recorded.",
        },
      ],
    },
    {
      heading: "Why adding engineers in week nine makes you later",
      blocks: [
        {
          type: "p",
          text: "Fred Brooks made the argument in The Mythical Man-Month in 1975 and nothing since has overturned it: adding people to a late software project makes it later. The reason is arithmetic rather than attitude.",
        },
        {
          type: "code",
          lang: "text",
          code: "communication paths = n(n - 1) / 2\n\n 2 engineers ->  1 path\n 4 engineers ->  6 paths\n 6 engineers -> 15 paths\n 8 engineers -> 28 paths\n\nDoubling a team from 4 to 8 multiplies coordination surface by ~4.7x.",
        },
        {
          type: "p",
          text: "A new engineer is also unproductive on arrival. They need the domain, the architecture and the decisions already made explained to them, and every hour of that comes out of the people who were delivering. For the first fortnight a new joiner is a net negative on throughput, which is precisely the window a late project cannot afford.",
        },
        {
          type: "p",
          text: "Two exceptions are worth knowing. Adding a person to a genuinely separable workstream — a distinct mobile client, an isolated integration, a data pipeline behind a defined contract — costs little coordination because it costs little conversation. And adding QA capacity late usually helps, because that work runs parallel to development rather than through it. Everything else: change the scope or change the date.",
        },
      ],
    },
    {
      heading: "Demo-ready and user-ready are different products",
      blocks: [
        {
          type: "p",
          text: "A demo-ready build performs correctly on the happy path with prepared data in front of a friendly audience. A user-ready build survives a stranger doing something unanticipated at 11pm on a poor connection. The gap is usually two to three weeks and it is the most under-scheduled part of any plan, because none of it shows up in a demo.",
        },
        {
          type: "p",
          text: "It is made of specific, unremarkable work: password reset and session expiry that behave sensibly; email that reaches inboxes rather than spam folders; empty states on every list and error states on every request that can fail; validation messages that say what to do; permissions enforced on the server rather than hidden in the interface; rate limits on anything a script can hit; a tested restore from backup; alerting that reaches a person; a way for support to look up a user; data export and deletion; and the legal pages a store or enterprise buyer will ask for.",
        },
        {
          type: "p",
          text: "Put that list in the plan by name. If it sits inside a line called hardening, it is what gets compressed when week 7 runs long, and your first fifty users will find every item on it for you.",
        },
      ],
    },
    {
      heading: "How do you sequence an MVP development timeline so something is usable at every checkpoint?",
      blocks: [
        {
          type: "p",
          text: "Build in vertical slices, never in layers. A team that spends four weeks on a data model and API before any interface exists has nothing demonstrable in week four and no way to discover that the model is wrong. A team that ships a thin, ugly, complete path in week two — one screen, one endpoint, one table, deployed — has a product from that day and spends the rest of the build widening it.",
        },
        {
          type: "p",
          text: "Three practices make that work inside a fixed timebox. Deploy to production weekly from week two, with unfinished work behind feature flags rather than long-lived branches, so integration pain is paid in daily instalments instead of a lump sum in week 11. Define a demoable increment for every Friday, because the discipline of showing something forces the vertical slice. And put the product in front of users at the halfway point — week 4 of 8, week 6 of 12, week 8 of 16 — while there is still time to respond.",
        },
        {
          type: "p",
          text: "Sequenced this way a timebox stops being a gamble on a launch date and becomes a series of decisions with real information behind each one. If you are working out which of these three shapes fits what you are building, we are glad to look at the scope and say honestly which weeks it needs and which parts we would leave out.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does it take to build an MVP?",
      answer:
        "Most MVPs take 8 to 16 weeks with a dedicated team, assuming discovery and scope definition are finished before week 1. Eight weeks delivers one core workflow on one platform. Twelve weeks adds a second workflow, several integrations and admin tooling. Sixteen weeks is the realistic minimum for a second platform, real-time features or compliance groundwork such as SSO and audit logging.",
    },
    {
      question: "Can an MVP be built in 4 weeks?",
      answer:
        "Rarely, and only if the fixed overhead is already paid — existing environments, an existing design system, and authentication already in place. Four weeks from a standing start is consumed almost entirely by scaffolding: repositories, CI, environments, auth, deployment and error tracking. If you need something in four weeks, a clickable prototype or a no-code assembly will teach you more than a rushed codebase you will discard.",
    },
    {
      question: "What should be finished before the MVP timeline starts?",
      answer:
        "The workflows the product must support, written as tasks a named user completes end to end; the decision on platform count; the list of integrations with confirmation that each has a sandbox and current documentation; brand assets or a decision to use a component library; and whoever signs off, available weekly. Every one of these left open becomes a mid-build stoppage that costs more than the decision would have.",
    },
    {
      question: "Does adding more developers make an MVP ship faster?",
      answer:
        "Usually not after the first few weeks. Communication paths grow as n(n-1)/2, so going from four to eight people multiplies coordination surface roughly fivefold, and every new joiner consumes the time of the people already delivering. The exceptions are genuinely separable workstreams — a distinct mobile client, an isolated integration — and adding QA capacity, which runs parallel to development rather than through it.",
    },
    {
      question: "What is the difference between a demo-ready and a user-ready MVP?",
      answer:
        "A demo-ready build works on the happy path with prepared data. A user-ready build handles password resets, session expiry, empty and error states, server-side permission enforcement, rate limits, email deliverability, backups with a tested restore, alerting and support tooling. The gap is typically two to three weeks of unglamorous work, and it is the first thing compressed when a schedule slips.",
    },
    {
      question: "Should I fix the scope or fix the date for an MVP?",
      answer:
        "Fix the date and vary the scope, but decide the cut order before week 1 rather than during week 10. Cut user roles, self-serve configuration, bespoke design on secondary screens and reporting first. Never cut authentication correctness, permission enforcement, backups, deployment automation or tests on core domain logic — those are what make the product changeable after launch.",
    },
  ],
};
