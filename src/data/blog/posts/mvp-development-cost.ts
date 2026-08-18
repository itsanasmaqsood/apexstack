import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "mvp-development-cost",
  title: "How Much Does It Cost to Build an MVP?",
  seoTitle: "MVP Development Cost: Real Market Ranges & Drivers",
  description:
    "MVP development cost, broken down: observed market ranges by complexity, what really drives them, and the line items founders forget to budget for.",
  excerpt:
    "A cost breakdown for founders scoping their first build: what moves the number, what simple, moderate and complex MVPs go for on the open market, and why the lowest quote usually ends up the dearest.",
  category: "MVP & Startups",
  primaryKeyword: "MVP development cost",
  secondaryKeywords: [
    "how much does an MVP cost",
    "cost to build an MVP app",
    "MVP development pricing",
    "minimum viable product budget",
    "startup app development cost",
  ],
  published: "2026-08-12",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway:
    "On the open market, MVP development cost usually falls between USD 20,000 and USD 300,000: roughly USD 20,000–50,000 for a single-platform product with off-the-shelf auth and payments, USD 50,000–120,000 once you add several integrations and multiple user roles, and USD 120,000–300,000 or more for multi-platform, real-time or regulated builds. The figure is driven far more by platform count, integration count, compliance scope and how much of the product is genuinely custom than by the hourly rate on the proposal. A quote that omits QA, infrastructure, third-party fees and post-launch iteration is not cheaper — it is incomplete.",
  sections: [
    {
      heading: "What actually drives MVP development cost?",
      blocks: [
        {
          type: "p",
          text: "Two competent teams can quote the same idea and land USD 60,000 apart without either being dishonest. MVP development cost is not a price tag attached to a concept; it is the sum of a small set of variables, and the ones that move it hardest are rarely the ones discussed on the first call. Founders argue about feature lists. Estimators count platforms, integrations and permission rules.",
        },
        {
          type: "p",
          text: "Feature count matters far less than feature depth. “User can upload a document” is a two-day story if it means putting a file in object storage and rendering a link, and a six-week epic if it means virus scanning, OCR, versioning, per-field redaction and an audit trail. Scope written in user-facing language hides that difference. The variables that move a number, roughly in order of impact:",
        },
        {
          type: "list",
          items: [
            "Platform count. Responsive web is one codebase; web plus native iOS and Android is three builds, three release processes and three QA passes. React Native collapses part of that, never all of it.",
            "Integrations, weighted by counterparty. Stripe has documentation, a sandbox and predictable webhooks, so the work is measurable. A regional bank’s SOAP endpoint with a PDF specification and no test environment is unbounded. Estimate the API, not the logo.",
            "User roles. Two roles is a conditional; five with organisation-level scoping is an authorisation system with its own tests, and each role multiplies the QA surface.",
            "Compliance. HIPAA, SOC 2 readiness, PCI scope or GDPR data-subject rights add encryption, audit logging, retention jobs, export and deletion, plus process work no code review catches. The largest single step change in any budget.",
            "Design fidelity and live state. Theming a component library costs a fraction of bespoke interaction design; CRUD costs a fraction of collaboration, presence and conflict resolution. The second of each pair changes architecture, not screens.",
            "Data you already have. Migrating from spreadsheets, a legacy database or another SaaS product is its own project, and cleaning the data takes longer than moving it.",
          ],
        },
        {
          type: "p",
          text: "Team composition sits underneath all of it. Every build pays for product definition, design, engineering, QA and deployment — the question is only whether that is five people or two generalists wearing five hats. At MVP scale, two experienced generalists are frequently faster and cheaper than six specialists, because coordination overhead is real and it is billed.",
        },
      ],
    },
    {
      heading: "What do simple, moderate and complex MVPs cost?",
      blocks: [
        {
          type: "p",
          text: "The figures below are observed market ranges for engaging an outside product team, in USD — not a rate card, and not what any single firm charges. They cover discovery, design, engineering, QA and launch, and exclude your own salary, marketing and ongoing third-party fees.",
        },
        {
          type: "table",
          caption: "Observed market ranges for outsourced MVP builds, by complexity tier",
          head: [
            "Tier",
            "Market range (USD)",
            "Realistically in scope",
            "Team and duration",
            "Not included",
          ],
          rows: [
            [
              "Clickable prototype",
              "5,000 – 15,000",
              "Information architecture, high-fidelity screens, a linked prototype for user testing or a raise. No working software.",
              "One designer, part-time product, 2–4 weeks",
              "Any code, backend or data",
            ],
            [
              "Simple MVP",
              "20,000 – 50,000",
              "One platform, one or two roles, off-the-shelf auth and payments, a themed component library, one or two integrations, one core workflow done properly.",
              "Two engineers, part-time design and product, 6–10 weeks",
              "Native mobile, offline mode, real admin tooling",
            ],
            [
              "Moderate MVP",
              "50,000 – 120,000",
              "Web plus one mobile platform, or a multi-role web product: three to six integrations, background jobs, notifications, reporting, admin tooling, a real test suite.",
              "Three to four engineers, dedicated design, part-time QA, 10–16 weeks",
              "Certification, ML pipelines, multi-region infrastructure",
            ],
            [
              "Complex or regulated MVP",
              "120,000 – 300,000+",
              "Multi-platform, real-time or collaborative features, a model-serving or data pipeline component, SSO, audit logging, field-level encryption, HIPAA or SOC 2 evidence.",
              "Five to eight people including infrastructure and QA, 16–28 weeks",
              "The audit itself, penetration testing, compliance tooling",
            ],
          ],
        },
        {
          type: "p",
          text: "What moves a project from the floor of a band to its ceiling is almost always one of four things: an extra platform, an integration with a counterparty you do not control, a compliance requirement discovered halfway through, or a design process that never converges. The first three are foreseeable at scoping. The fourth is a discipline problem, and it quietly eats the contingency.",
        },
      ],
    },
    {
      heading: "Why comparing hourly rates across regions is misleading",
      blocks: [
        {
          type: "p",
          text: "Blended agency rates cluster by geography: broadly USD 120–250 per hour in North America and Western Europe, USD 50–100 in Central and Eastern Europe, USD 45–90 in Latin America, USD 25–60 across South and Southeast Asia. Those bands are real, they are the first thing procurement compares, and they are the least predictive number in the exercise.",
        },
        {
          type: "p",
          text: "Rate varies by roughly five times across those markets. Hours to deliver the same scope vary by more, because hours depend on how well the problem was understood before anyone opened an editor, how much gets rebuilt after review, and how much time goes into clarifying a specification across a twelve-hour gap.",
        },
        {
          type: "code",
          lang: "text",
          code: "effective_cost =\n      blended_rate x build_hours          # the only term on the proposal\n    + blended_rate x rework_hours         # scope misread, review rejected, defects\n    + blended_rate x coordination_hours   # clarification, handover, timezone lag\n    + weekly_burn  x weeks_late           # your carrying cost while you wait\n\n# Rate spread across regions:      ~5x\n# Hours spread for the same scope: unbounded",
        },
        {
          type: "p",
          text: "The useful comparison is cost per shipped, working feature across the whole engagement. Before signing, the closest approximation is what a team has delivered before, how they scoped it, and whether their estimate acknowledges the rework term at all. A proposal with a named contingency is more honest than one without, not more expensive.",
        },
      ],
    },
    {
      heading: "Which costs do founders forget to budget for?",
      blocks: [
        {
          type: "p",
          text: "The build quote is typically 70–85% of what leaves your account in year one. The rest is unglamorous, largely fixed and almost never in the proposal. Vendor figures below are published prices at the time of writing.",
        },
        {
          type: "list",
          items: [
            "Store and platform licences. The Apple Developer Program is USD 99 per year; Google Play charges a one-off USD 25. Both are trivial; review is not. Apple’s rules on account deletion, sign-in options and data disclosure cause rejections that cost a week each.",
            "Payment processing. Stripe’s published standard rate for online domestic card payments in the US is 2.9% plus USD 0.30 per transaction. Revenue-linked rather than a build cost, and it belongs in your model from day one.",
            "Metered third-party APIs. Email, SMS, mapping, identity verification and model inference are per-unit. Amazon SES publishes USD 0.10 per 1,000 outbound emails; LLM inference is billed per million tokens and is the line most likely to surprise you once a feature that felt free in testing meets real usage.",
            "Infrastructure. Managed Postgres, an application host, object storage, a CDN, logging and error tracking commonly run USD 200–800 a month before traffic is meaningful, and staging adds to it. Backups and alerting are not optional.",
            "Quality assurance. Cutting QA defers the cost into support and rework at a worse exchange rate. Budget it, including one accessibility and one cross-browser pass.",
            "Post-launch iteration. The eight weeks after launch generate more change than the eight before it, because that is when real users first touch the product. Reserve 20–30% of the build budget for it; a team that disappears at launch leaves you the least valuable version of the product.",
          ],
        },
        {
          type: "callout",
          text: "Budget the build at 100 and the first year at 130. The extra 30 is not overrun — it is infrastructure, licences, metered APIs and the iteration that turns a launched product into a used one.",
        },
      ],
    },
    {
      heading: "Why is the cheapest quote usually the most expensive outcome?",
      blocks: [
        {
          type: "p",
          text: "This is a mechanism, not a moral claim about cheap suppliers. A fixed-price bid is a bet on scope, and the lowest bidder has usually made the most optimistic reading of an ambiguous specification — not out of malice, but because pessimistic readings lose bids. That reading meets reality in week four. The supplier can then absorb the loss, staff the work with whoever is cheapest and available, or raise change orders. The first is rare.",
        },
        {
          type: "p",
          text: "The compounding damage is technical. Under margin pressure the first things to go are the ones with no visible output that week: tests, error handling, database indexes, input validation, structured logging, deployment automation. The product demos correctly and is expensive to change from that day on. Six months later a feature that should take a week takes a month, because nothing can be modified with confidence and no test suite will tell you what broke.",
        },
      ],
    },
    {
      heading: "How do you reduce MVP development cost without gutting the product?",
      blocks: [
        {
          type: "p",
          text: "There are two ways to spend less. One is to cut quality, a loan at a punishing rate of interest. The other is to stop rebuilding commodities: almost every MVP contains half a dozen components that already exist as products, and building any of them should require an explicit argument.",
        },
        {
          type: "table",
          caption: "Commodity components: what to buy, and the narrow cases for building",
          head: [
            "Capability",
            "Typical build effort",
            "Off-the-shelf options",
            "What buying costs",
            "Build it yourself only when",
          ],
          rows: [
            [
              "Authentication and sessions",
              "2–4 weeks: login, password reset, MFA, sessions",
              "Auth0, Clerk, Supabase Auth, AWS Cognito, WorkOS",
              "Per monthly active user; free or near-free at MVP volumes",
              "You have an unusual identity model, or a regulator forbids third-party custody of credentials",
            ],
            [
              "Payments and subscriptions",
              "4–8 weeks: cards, subscriptions, dunning, invoices, tax",
              "Stripe, Adyen, Paddle, Lemon Squeezy",
              "A percentage of revenue plus a per-transaction fee",
              "Essentially never at MVP stage",
            ],
            [
              "Admin and support tooling",
              "2–5 weeks for a usable back office",
              "Retool, Forest Admin, Django Admin, Metabase",
              "A seat licence, usually low double digits per user monthly",
              "Your operations workflow is the product you sell",
            ],
            [
              "Transactional email",
              "1–2 weeks including deliverability",
              "Resend, Postmark, Amazon SES",
              "Per message; SES publishes USD 0.10 per 1,000 emails",
              "Never",
            ],
            [
              "Search",
              "2–6 weeks depending on relevance needs",
              "Postgres full-text, Typesense, Meilisearch",
              "Free with Postgres, otherwise per record",
              "Ranking quality is your differentiator",
            ],
          ],
        },
        {
          type: "p",
          text: "Four other decisions move the total more than anything else. Ship one platform and let usage tell you whether the second is warranted — responsive web reaches every device and skips both app stores. Cut user roles before you cut features. Spend the design budget on the two or three screens users live in rather than on all forty. And write the specification as workflows a named user completes end to end, because feature lists are what estimators pad and workflows are what they can size.",
        },
        {
          type: "p",
          text: "One thing not to cut: the deployment pipeline. A day on automated deploys, environment parity and a rollback path pays for itself before launch, because every later change is cheaper and every failed release recoverable in minutes.",
        },
      ],
    },
    {
      heading: "How to pressure-test the quote in front of you",
      blocks: [
        {
          type: "p",
          text: "You can assess an estimate long before you can assess a team. A number on its own is a guess with a currency symbol in front of it; anything credible also contains:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Scope broken into workflows, each with its own range. Ranges are honest; single figures are marketing.",
            "The assumptions it rests on — which APIs have sandboxes, who supplies content, which browsers are supported, who signs off and how quickly.",
            "An exclusions list. What is deliberately not in the price is more informative than what is.",
            "Team composition by role and allocation, so you can see whether QA and infrastructure are real line items or someone’s spare afternoon.",
            "A change-control process: how a mid-build change is priced, who approves it, what it does to the date.",
            "What you own at the end — repositories, cloud accounts, design sources, domain and store listings — in your name from day one.",
          ],
        },
        {
          type: "p",
          text: "Then do three things with the number. Add the year-one costs above and check the total still works. Ask the supplier to name the riskiest item in the scope and how they would reduce that risk in the first fortnight — the answer says more about their judgement than any portfolio. Then ask what they would remove if your budget were 30% lower: a team that can sequence a product answers immediately, and a team that cannot offers a discount.",
        },
        {
          type: "p",
          text: "The right MVP budget puts a real workflow in front of real users while you still have runway to act on what they tell you. If you are scoping a first build and want a second opinion on the figure you have been given, we are happy to walk through the scope and say where we think it sits in these ranges and why.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does it cost to build an MVP in 2026?",
      answer:
        "Working with an outside product team, most MVPs land between USD 20,000 and USD 300,000. A single-platform product with off-the-shelf auth and payments typically sits at USD 20,000–50,000, a multi-role product with several integrations at USD 50,000–120,000, and anything multi-platform, real-time or subject to HIPAA or SOC 2 at USD 120,000 upwards. These are market ranges, not any one firm’s prices.",
    },
    {
      question: "Can you build an MVP for $10,000?",
      answer:
        "Sometimes, but only for a genuinely narrow product: one platform, one user role, no custom backend logic beyond CRUD, off-the-shelf authentication and payments, and a component library instead of bespoke design. At that budget you are buying a few weeks of one or two people. If the scope includes native mobile, several integrations or any compliance requirement, USD 10,000 buys a prototype rather than a product.",
    },
    {
      question: "Why do MVP quotes vary so much between agencies?",
      answer:
        "Mostly because they are pricing different products. Vague specifications let each team choose its own reading of depth, and the optimistic reading always quotes lower. Team composition matters too — whether QA, infrastructure and design are real allocations or absorbed by developers. Hourly rate explains less of the spread than founders expect; assumed hours explain most of it. Compare the assumptions and exclusions, not the totals.",
    },
    {
      question: "What hidden costs should I budget for after the MVP is built?",
      answer:
        "Infrastructure of roughly USD 200–800 a month for a small production footprint, store licences (USD 99 a year for Apple, USD 25 once for Google Play), metered third-party APIs for email, SMS and model inference, payment processing as a percentage of revenue, and post-launch iteration. Reserve 20–30% of the build budget for the first three months after launch, when real usage generates the most change.",
    },
    {
      question: "Is it cheaper to hire freelancers or an agency for an MVP?",
      answer:
        "Freelancers have a lower rate and no overhead, which works well when the scope is small, well-defined and needs one skill set. An agency costs more per hour but supplies design, engineering, QA and deployment as a coordinated unit, and absorbs the risk of someone leaving mid-build. The deciding factor is usually who owns integration between the parts — with freelancers, that is you.",
    },
    {
      question: "How long does an MVP take to build?",
      answer:
        "A simple single-platform MVP typically takes 6–10 weeks, a moderate one 10–16 weeks, and a complex or regulated build 16–28 weeks. Timeline and cost move together because the dominant cost is people multiplied by weeks, so compressing a schedule by adding people rarely reduces the total and often increases it through coordination overhead.",
    },
  ],
};
