import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "taking-over-an-existing-codebase",
  title: "Taking Over a Codebase From Another Developer",
  seoTitle: "Taking Over a Codebase From Another Developer",
  description:
    "How to hand a system to a new team without losing months — what to collect before the old team leaves, and what a proper takeover looks like.",
  excerpt:
    "Most of the pain in changing development partners is created in the two weeks before the old one leaves. Here is what to secure while you still have their attention.",
  category: "Legacy Modernisation",
  primaryKeyword: "taking over an existing codebase",
  secondaryKeywords: [
    "changing software development company",
    "code handover checklist",
    "inheriting a legacy codebase",
    "switching development agency",
  ],
  published: "2026-08-13",
  authorId: "leadership-02",
  serviceSlug: "custom-software-development",
  keyTakeaway:
    "The cost of moving a system to a new development team is decided almost entirely by what you secure before the old team disengages: repository access with full history, credentials to every account, a reproducible local environment, and a recorded walkthrough of the parts that would surprise someone. With those, a competent team is productive in two to four weeks. Without them, the same handover routinely takes two to three months, and most of that time is spent rediscovering things somebody already knew.",
  sections: [
    {
      heading: "Where the cost really comes from",
      blocks: [
        {
          type: "p",
          text: "When a takeover goes badly, the explanation offered is usually that the code was bad. Sometimes it is. But bad code is a known quantity — you can read it, measure it, and plan around it. It is rarely what makes a handover expensive.",
        },
        {
          type: "p",
          text: "What makes it expensive is undocumented context. Why does this service exist? What is the reason for the nightly job that appears to do nothing? Which of these three configuration files is the one that is actually loaded? Why is this customer's account special-cased? None of that is in the repository. It was in somebody's head, and that somebody has moved on.",
        },
        {
          type: "callout",
          text: "A new team can read every line you own and still not know which line matters.",
        },
        {
          type: "p",
          text: "The practical consequence is that the window in which you can cheaply extract that context is short — it is the notice period of the outgoing team, while they still have a contractual reason to answer questions. What you get during those weeks determines the following six months.",
        },
      ],
    },
    {
      heading: "What to secure before the old team disengages",
      blocks: [
        {
          type: "p",
          text: "Work through this while the relationship is still functional. Every item is significantly harder to obtain after the final invoice is settled, and several become impossible.",
        },
        {
          type: "table",
          caption: "Handover checklist, in order of how much it hurts to miss",
          head: ["Item", "Why it matters", "If you miss it"],
          rows: [
            [
              "Repository with full commit history",
              "History explains why the code is shaped the way it is",
              "A zip of the final state; every decision is now unexplained",
            ],
            [
              "Every credential and account",
              "Cloud, DNS, registrar, certificates, app stores, third-party APIs",
              "Recovery processes, vendor support tickets, sometimes lost domains",
            ],
            [
              "A local environment someone has actually run",
              "The new team cannot start until this works",
              "Days to weeks of reconstruction from guesswork",
            ],
            [
              "The deployment process",
              "How a change safely reaches production",
              "Nobody can ship, including for urgent fixes",
            ],
            [
              "Environment variables and secrets, with meanings",
              "Values alone are not enough — what each one does matters",
              "Configuration becomes trial and error against production",
            ],
            [
              "A recorded walkthrough",
              "One hour of narration beats most documents",
              "The single cheapest artefact, and the one most often skipped",
            ],
            [
              "Known-issues list",
              "What is broken, what is deliberate, what is feared",
              "The new team rediscovers each one by breaking something",
            ],
            [
              "Third-party contracts and renewal dates",
              "Services silently expire",
              "An outage on a renewal date nobody knew existed",
            ],
          ],
        },
        {
          type: "p",
          text: "If you can only get two things, take the repository with full history and the recorded walkthrough. An hour of the outgoing lead engineer talking through the system, screen shared, unscripted, is worth more than a week of documentation written to a template — and it is far easier to ask for, because it costs them almost nothing.",
        },
      ],
    },
    {
      heading: "How a competent takeover actually runs",
      blocks: [
        {
          type: "p",
          text: "A new team that starts by rewriting is not doing a takeover, they are doing a rebuild with extra steps. The sequence below is what a disciplined handover looks like, and it is worth knowing so you can tell the difference.",
        },
        {
          type: "h3",
          text: "Week one: get it running and observable",
        },
        {
          type: "p",
          text: "Nothing else can start until the system runs locally and the team can deploy a trivial change to production safely. The first commit should be something inconsequential — a typo fix — deployed end to end, purely to prove the pipeline works and to find out what is missing.",
        },
        {
          type: "p",
          text: "In parallel: error tracking and uptime monitoring, if they are not already there. You cannot assess a system you cannot see failing.",
        },
        {
          type: "h3",
          text: "Weeks two and three: map it, do not judge it",
        },
        {
          type: "p",
          text: "Trace the critical user journeys through the code. Produce an architecture note — components, data stores, external dependencies, what talks to what. Build the known-issues list. Resist the urge to fix anything not actively on fire; changes made before the system is understood are how takeovers introduce new problems while fixing old ones.",
        },
        {
          type: "h3",
          text: "Week four onward: stabilise, then change",
        },
        {
          type: "p",
          text: "Add tests around whatever you are about to touch first — not comprehensive coverage, which is a project of its own, but a safety net around the specific area. Bring the most urgent security updates current. Then start delivering the changes you actually hired them for.",
        },
        {
          type: "p",
          text: "A new team asking for two to four weeks before delivering features is behaving correctly. A team promising new features in week one is planning to skip the mapping, and you will pay for that in month three.",
        },
      ],
    },
    {
      heading: "The rewrite question, early",
      blocks: [
        {
          type: "p",
          text: "Any incoming team will be tempted to recommend a rewrite. It is genuinely more pleasant to write new code than to understand old code, and the recommendation is not always self-serving — sometimes it is right. But it arrives before anyone knows enough to make it.",
        },
        {
          type: "p",
          text: "A useful rule: no rewrite recommendation should be accepted in the first month. If the system is still recommended for replacement after the team has mapped it, the recommendation now rests on evidence and is worth taking seriously.",
        },
        {
          type: "table",
          caption: "Reasons given for a rewrite, and how much weight to give them",
          head: ["Stated reason", "Weight", "Better first step"],
          rows: [
            [
              "The code is messy and hard to read",
              "Low",
              "Refactor the area you are about to change, not the whole system",
            ],
            [
              "It uses an unfashionable framework",
              "Very low",
              "Nothing — fashion is not a cost",
            ],
            [
              "The runtime is out of security support",
              "High",
              "Upgrade the runtime; this is usually far smaller than a rewrite",
            ],
            [
              "The data model cannot represent what the business now does",
              "High",
              "Model the new domain and plan a migration path",
            ],
            [
              "There are no tests",
              "Medium",
              "Add tests around active areas; this is incremental and cheap",
            ],
            [
              "Nobody understands it",
              "Medium",
              "Map it first — this is a knowledge problem before it is a code problem",
            ],
          ],
        },
        {
          type: "p",
          text: "The two rows marked high are the ones that genuinely justify major work, and neither necessarily means starting from zero. A runtime upgrade and a data-model migration are both large, but both preserve the years of accumulated business logic that a rewrite throws away and then reimplements imperfectly.",
        },
      ],
    },
    {
      heading: "What a takeover costs",
      blocks: [
        {
          type: "p",
          text: "The onboarding period is billable work that produces no new features, which makes it the part buyers most want to skip and the part that most determines what the following months cost. It is worth budgeting explicitly rather than hoping it is absorbed.",
        },
        {
          type: "table",
          caption: "Onboarding effort by handover quality — observed market ranges",
          head: ["Handover quality", "Time to productive", "Typical cost", "What is missing"],
          rows: [
            [
              "Complete",
              "1–2 weeks",
              "USD 3,000–8,000",
              "Nothing — repo, credentials, environment, walkthrough all present",
            ],
            [
              "Partial",
              "3–5 weeks",
              "USD 8,000–20,000",
              "Usually the environment and the deployment process",
            ],
            [
              "Code only",
              "6–10 weeks",
              "USD 20,000–45,000",
              "Credentials, context, and any record of why things are as they are",
            ],
            [
              "Team unreachable",
              "8–14 weeks",
              "USD 30,000–70,000",
              "Account recovery runs in parallel with reverse-engineering",
            ],
          ],
        },
        {
          type: "p",
          text: "These are market ranges for the onboarding phase alone, before any new work, and they scale with system size. The gap between the first and third rows is the entire argument for spending an afternoon on a handover checklist while the outgoing team is still under contract.",
        },
        {
          type: "callout",
          text: "A day of handover during the notice period routinely saves a month of archaeology afterwards.",
        },
        {
          type: "p",
          text: "One further variable worth pricing: whether anyone from the previous team is available for paid questions afterwards. Even a few hours a month for the first quarter, agreed in advance, is disproportionately valuable — and much easier to arrange before the relationship ends than after.",
        },
      ],
    },
    {
      heading: "If the old team has already gone",
      blocks: [
        {
          type: "p",
          text: "Often the handover checklist arrives too late — the relationship ended badly, or the developer simply stopped responding. This is recoverable more often than it feels, and there is a sensible order to the recovery.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Establish what you can access right now: hosting, domain registrar, repository, app store accounts, payment provider. Make a list of what you hold and what you do not.",
            "Prioritise the domain and DNS above everything. Losing control of a domain is one of the few genuinely unrecoverable outcomes, and registrars have account-recovery processes that reward evidence of ownership — company documents, original payment records.",
            "Recover accounts through vendor support where access is missing. Cloud providers and app stores have processes for this; they are slow and they work, and they are much easier while the business relationship is only dormant rather than disputed.",
            "If you have no code, check whether the running system can be extracted from the server, and whether any former engineer retains a fork they can legitimately return to you.",
            "Have someone independent assess the system for a few days before deciding anything. Panic decisions after a bad separation are how a recoverable situation becomes a rebuild.",
          ],
        },
        {
          type: "p",
          text: "Worth saying plainly: this is the situation where an IP assignment clause proves its value. If ownership is documented, you are asking vendors to restore access to your property. If it is not, you are asking them to adjudicate a dispute, which they will decline to do.",
        },
        {
          type: "p",
          text: "We take over existing systems regularly, including ones where the previous team is unreachable. If you want an assessment before committing to anything, that is a few days of work and it will tell you whether you are looking at a takeover or a rebuild.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does it take a new team to become productive on an existing codebase?",
      answer:
        "Two to four weeks with a proper handover — repository with full history, working local environment, credentials, and a recorded walkthrough. Without those, two to three months is common, and most of that time is spent rediscovering context somebody already had. The variable is almost never code quality; it is how much undocumented knowledge left with the previous team.",
    },
    {
      question: "What should I get from my current developer before switching?",
      answer:
        "Repository access with full commit history, every credential and account, a local environment someone has actually run, the deployment process, environment variables with explanations, a known-issues list, and third-party contracts with renewal dates. If you can only get two, take the full repository history and a recorded walkthrough — an unscripted hour of narration is worth more than a week of templated documentation.",
    },
    {
      question: "Should I let a new team rewrite the system?",
      answer:
        "Not in the first month. Any incoming team will be tempted, because writing new code is more pleasant than understanding old code, and the recommendation arrives before anyone knows enough to justify it. If the recommendation survives after they have mapped the system, it now rests on evidence. An out-of-support runtime or a data model that cannot represent the business are the reasons that genuinely carry weight.",
    },
    {
      question: "What if my previous developer has disappeared?",
      answer:
        "Recoverable more often than it feels. Establish what you can currently access, prioritise the domain and DNS above everything else since losing a domain is one of the few unrecoverable outcomes, and use vendor account-recovery processes for the rest — they are slow but they work. A documented IP assignment makes this dramatically easier, because you are asking vendors to restore access to your property rather than to settle a dispute.",
    },
    {
      question: "Is it normal for a new team to spend weeks before delivering features?",
      answer:
        "Yes, and it is a good sign. A disciplined takeover spends the first week getting the system running and deployable, the next two mapping the critical paths and cataloguing known issues, and only then starts changing things. A team promising new features in week one is skipping the mapping, and that shows up as new problems around month three.",
    },
  ],
};
