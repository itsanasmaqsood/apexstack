import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "software-maintenance-cost",
  title: "What Software Maintenance Actually Costs After Launch",
  seoTitle: "Software Maintenance Cost After Launch",
  description:
    "Maintenance is not fixing bugs. It is the work required to stop software decaying while nothing about it changes — and it has a predictable cost.",
  excerpt:
    "The budget line most often forgotten, and the one that decides whether your software is still working in three years. Here is what it covers and what it runs to.",
  category: "Legacy Modernisation",
  primaryKeyword: "software maintenance cost",
  secondaryKeywords: [
    "software maintenance percentage of development cost",
    "application support costs",
    "ongoing software costs after launch",
    "software maintenance agreement",
  ],
  published: "2026-08-13",
  authorId: "leadership-01",
  serviceSlug: "cloud-devops",
  keyTakeaway:
    "Ongoing software maintenance typically runs at fifteen to twenty-five per cent of the original build cost per year, and most of that is not bug fixing. It is the work needed to keep software functioning while the world underneath it changes: dependency and security updates, platform and operating-system changes, third-party API deprecations, certificate renewals and infrastructure drift. Software that receives no maintenance does not stay still — it degrades, and the cost of returning it to a maintainable state after two or three untouched years is usually far higher than the maintenance would have been.",
  sections: [
    {
      heading: "Why software rots when nobody touches it",
      blocks: [
        {
          type: "p",
          text: "Software has no moving parts and does not wear out. It is reasonable to assume that an application which works today, left completely alone, will work identically in three years. It will not, and the reason is that almost nothing about a modern application is self-contained.",
        },
        {
          type: "p",
          text: "Your code sits on a runtime that receives security patches and eventually stops receiving them. It calls libraries whose maintainers move on. It talks to third-party APIs that get versioned and deprecated. It runs on operating system images that reach end of life. It serves browsers that change their behaviour. It presents certificates that expire. It complies with regulations that get amended.",
        },
        {
          type: "callout",
          text: "The application stands still. Everything it is standing on keeps moving.",
        },
        {
          type: "p",
          text: "So maintenance is not a euphemism for fixing your developer's mistakes. It is the ongoing cost of remaining compatible with an environment you do not control, and it is unavoidable in the same way that a building's roof is unavoidable.",
        },
      ],
    },
    {
      heading: "What the money is actually spent on",
      blocks: [
        {
          type: "p",
          text: "It is worth separating the categories, because they have different urgencies and are often bundled into one line that nobody can interrogate.",
        },
        {
          type: "table",
          caption: "Maintenance categories and their share",
          head: ["Category", "Rough share", "What happens if skipped"],
          rows: [
            [
              "Dependency and security updates",
              "30–40%",
              "Known vulnerabilities accumulate; eventually an update becomes a rewrite",
            ],
            [
              "Platform and API changes",
              "15–25%",
              "Features break without warning when a third party deprecates",
            ],
            [
              "Corrective work (genuine defects)",
              "15–20%",
              "Users work around problems, then stop using the software",
            ],
            [
              "Infrastructure and monitoring",
              "10–15%",
              "Cost drifts upward; outages are discovered by customers",
            ],
            [
              "Small adaptive changes",
              "10–20%",
              "The software slowly stops matching how the business works",
            ],
          ],
        },
        {
          type: "p",
          text: "Note how small the bug-fixing share is. Most of the budget goes on work that produces no visible change whatsoever — which is exactly why it is the first line cut, and why cutting it feels free for about eighteen months.",
        },
        {
          type: "h3",
          text: "The mobile exception",
        },
        {
          type: "p",
          text: "Mobile applications carry a higher floor than web software, because Apple and Google both enforce periodic requirements: minimum SDK versions, updated privacy declarations, changes to permissions and payment rules. An app receiving no maintenance will eventually stop being accepted for update, and in some cases stops being listed. Budget nearer the upper end of any range for anything on a store.",
        },
      ],
    },
    {
      heading: "What it costs",
      blocks: [
        {
          type: "p",
          text: "As an observed market range, annual maintenance runs at fifteen to twenty-five per cent of the original build cost. Where a given system sits in that band is driven by a small number of things.",
        },
        {
          type: "table",
          caption: "What moves the percentage",
          head: ["Factor", "Pushes cost down", "Pushes cost up"],
          rows: [
            [
              "Integrations",
              "Few, and with stable vendors",
              "Many, or with vendors who version aggressively",
            ],
            [
              "Platforms",
              "Web only",
              "Web plus iOS plus Android",
            ],
            [
              "Test coverage",
              "Good — updates can be verified quickly",
              "None — every update is a manual regression risk",
            ],
            [
              "Compliance scope",
              "None",
              "Regulated, with periodic re-certification",
            ],
            [
              "Usage",
              "Steady",
              "Growing — infrastructure and performance need attention",
            ],
            [
              "Age and dependency currency",
              "Kept current continuously",
              "Two or more years behind",
            ],
          ],
        },
        {
          type: "p",
          text: "A rough anchor: a build that cost USD 80,000 should carry something like USD 12,000 to 20,000 a year to keep healthy. That will feel high in year one, when nothing has broken yet, and obviously reasonable in year three when the alternative has become visible.",
        },
        {
          type: "p",
          text: "These are market ranges rather than any single firm's rate card, and they exclude your infrastructure bill, which is a separate and usually smaller line.",
        },
      ],
    },
    {
      heading: "The cost of deferring it",
      blocks: [
        {
          type: "p",
          text: "Deferred maintenance does not accumulate linearly. This is the part that surprises people, and it is worth understanding the mechanism rather than treating it as a warning.",
        },
        {
          type: "p",
          text: "Dependency updates are usually easy when done one at a time, because each new version is one step from the last and its migration notes describe that single step. Skip two years of updates and you are not making one large jump — you are making many jumps at once, with interacting breaking changes, no intermediate state that works, and no document describing the combined path because nobody planned it.",
        },
        {
          type: "p",
          text: "There is a second effect. Software left untouched loses the people who understood it. The engineer who could have done the update in a day left, and the person doing it now needs three weeks to learn the system first. The technical difficulty and the knowledge loss compound at the same time.",
        },
        {
          type: "table",
          caption: "How the cost curve behaves",
          head: ["Time without maintenance", "Typical state", "Cost to return to current"],
          rows: [
            [
              "6 months",
              "A few minor versions behind",
              "Days",
            ],
            [
              "1 year",
              "Some deprecation warnings, one or two advisories",
              "1–2 weeks",
            ],
            [
              "2 years",
              "Major versions behind; some upgrade paths interact",
              "1–2 months",
            ],
            [
              "3+ years",
              "Runtime possibly out of support; original team gone",
              "Comparable to a partial rebuild",
            ],
          ],
        },
        {
          type: "p",
          text: "The three-year row is where \"we should modernise this\" conversations start, and it is worth recognising that the modernisation was usually created rather than encountered.",
        },
      ],
    },
    {
      heading: "What a maintenance agreement should specify",
      blocks: [
        {
          type: "p",
          text: "Support contracts vary enormously in what they actually commit to. These are the terms that determine whether you have bought something real.",
        },
        {
          type: "list",
          items: [
            "Response and resolution times by severity, with severity defined by business impact rather than by the supplier's judgement of technical difficulty.",
            "What counts as maintenance versus new work, in writing, with examples. This single ambiguity generates more disputes than any other in support arrangements.",
            "A stated cadence for dependency and security updates — monthly or quarterly — rather than \"as needed\", which in practice means when something breaks.",
            "Included hours per month and what happens to unused ones. Rolling them over for a quarter is common and reasonable.",
            "Monitoring and alerting: who is watching, what triggers a response, and whether that includes out of hours.",
            "A regular written report of what was done. Maintenance is invisible by nature; without a report you cannot tell diligent work from an unused retainer.",
          ],
        },
        {
          type: "p",
          text: "The second item deserves the most attention during negotiation. \"A field was added to a form\" — maintenance or new work? Both answers are defensible. Agreeing the boundary in advance, with examples on each side, prevents a recurring argument that otherwise sours an otherwise functional relationship.",
        },
      ],
    },
    {
      heading: "Reducing what maintenance costs you",
      blocks: [
        {
          type: "p",
          text: "The largest reductions come from decisions made during the build, not from negotiating harder afterwards.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Automated tests. The single biggest lever. With a decent suite, a dependency update is an afternoon and a green build. Without one, it is a manual regression pass nobody wants to do, so it gets postponed, which is how systems fall two years behind.",
            "Fewer, better-chosen dependencies. Every library is a subscription to somebody else's decisions. Prefer widely-used, actively-maintained ones and avoid pulling in a large package for a small function.",
            "Automated dependency update proposals, reviewed on a schedule. Turning this on costs an hour and converts a large periodic task into a small routine one.",
            "Boring infrastructure. Managed services with long support windows cost slightly more per month and remove entire categories of maintenance work.",
            "Documentation written during the build, not after. It is the cheapest defence against knowledge loss, and knowledge loss is half of what makes deferred maintenance expensive.",
            "Budget for it from day one as a line item, so the first year's underspend does not become the precedent for year two.",
          ],
        },
        {
          type: "p",
          text: "If you have software that has been running untouched for a while and you would like to know where on that cost curve it sits, an audit is a short piece of work and the answer is usually less alarming than the uncertainty.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much should I budget for software maintenance per year?",
      answer:
        "As an observed market range, fifteen to twenty-five per cent of the original build cost annually. A USD 80,000 build sits around USD 12,000 to 20,000 a year. Systems with many integrations, multiple platforms, no automated tests or a compliance regime sit at the upper end; a simple web application with good test coverage and few dependencies sits at the lower end.",
    },
    {
      question: "What does software maintenance actually include?",
      answer:
        "Mostly work that produces no visible change: dependency and security updates, adapting to platform and third-party API changes, infrastructure and monitoring upkeep, and certificate renewals. Genuine bug fixing is typically only fifteen to twenty per cent of the total. This is why the line is easy to cut and why cutting it appears free for about eighteen months.",
    },
    {
      question: "What happens if I skip maintenance entirely?",
      answer:
        "Cost accumulates non-linearly. Six months behind is days of work; two years is one to two months; past three years the runtime may be out of support and the original team gone, at which point returning the system to a current, maintainable state approaches the cost of a partial rebuild. Technical difficulty and knowledge loss compound together.",
    },
    {
      question: "Do mobile apps need more maintenance than web applications?",
      answer:
        "Yes. Apple and Google enforce periodic requirements — minimum SDK versions, privacy declarations, permission and payment rule changes — and an app that stops meeting them can be refused for update and in some cases delisted. Budget nearer the top of any maintenance range for anything published on a store.",
    },
    {
      question: "What is the single best way to reduce maintenance cost?",
      answer:
        "Automated tests, decided during the build rather than retrofitted. With a reasonable suite a dependency update is an afternoon and a green build; without one it is a manual regression pass that everyone postpones, which is the mechanism by which systems end up years behind and expensive to recover.",
    },
  ],
};
