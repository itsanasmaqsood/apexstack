import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "amy-ai-personal-finance-app-case-study",
  title:
    "Amy: Scoring Financial Discipline and Intervening Before the Money Is Gone",
  seoTitle: "Amy AI Finance App Case Study",
  description:
    "How we built a behavioural finance app that scores spending discipline, watches transactions in real time, and learns which nudges a person ignores.",
  excerpt:
    "Budgeting apps tell you what you spent after you spent it. Amy watches the transaction land and decides, within a minute, whether it is worth saying something.",
  category: "Case Studies",
  primaryKeyword: "ai personal finance app development",
  secondaryKeywords: [
    "behavioural finance app",
    "fintech mvp development",
    "sms transaction parsing app",
    "financial discipline score",
  ],
  published: "2026-08-17",
  authorId: "leadership-02",
  serviceSlug: "ai-development",
  keyTakeaway:
    "Amy scores every user from 0 to 100 on financial discipline, watches each transaction as it arrives, and decides within about sixty seconds whether to intervene. The engineering problem is not the score. It is that a nudge sent at the wrong moment trains the user to ignore every nudge that follows, so the system has to learn which interventions were acted on and which were dismissed, then recalibrate itself.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "Almost every personal finance app is a rear-view mirror. It reads your transactions, sorts them into categories, and shows you a chart at the end of the month. The chart is accurate and it is useless, because the money is already gone.",
        },
        {
          type: "p",
          text: "Amy was built on the opposite premise: the only moment a spending app can change an outcome is the moment the spending happens. So the product question stops being how do we categorise this, and becomes should we say something right now, and if so, what.",
        },
        {
          type: "callout",
          text: "A finance app that reports is a spreadsheet with a logo. A finance app that intervenes is a product.",
        },
      ],
    },
    {
      heading: "The four pieces",
      blocks: [
        {
          type: "p",
          text: "The architecture has four moving parts, and each one exists because the one before it is not enough on its own.",
        },
        {
          type: "table",
          head: ["Layer", "What it does"],
          rows: [
            [
              "Financial Discipline Score",
              "Scores a user from 0 to 100 using five weighted components and two multipliers",
            ],
            [
              "Behavioural Intelligence Engine",
              "Watches each transaction as it lands and decides whether this one is worth an intervention",
            ],
            [
              "Matching Engine",
              "Dispatches the decision: which message, what tone, through which channel",
            ],
            [
              "Recalibration loop",
              "Learns from whether the user acted or ignored, and adjusts weekly",
            ],
          ],
        },
        {
          type: "p",
          text: "Users are also grouped into spending personalities by clustering, so the tone adapts. The same overspend warning that lands well for a careful saver having an unusual week reads as nagging to someone whose baseline is chaos.",
        },
      ],
    },
    {
      heading: "The hard parts",
      blocks: [
        {
          type: "h3",
          text: "Getting the transaction at all",
        },
        {
          type: "p",
          text: "Before any of the intelligence matters, you need to know a transaction happened. Amy reads bank SMS on the device and parses it, which is the practical route in markets where open banking either does not exist or does not cover the banks people actually use.",
        },
        {
          type: "p",
          text: "Parsing bank SMS is unglamorous work and it is where the accuracy of everything downstream is decided. Every bank writes its messages differently, formats change without warning, and a parser that quietly misreads an amount produces a score that is confidently wrong.",
        },
        {
          type: "h3",
          text: "The sixty-second budget",
        },
        {
          type: "p",
          text: "An intervention is only useful while the decision is still live. Ten minutes later the person has left the shop and the moment has passed, so the pipeline from transaction landing to notification arriving has a hard time budget rather than a best-effort one.",
        },
        {
          type: "p",
          text: "That constraint rules out a whole class of comfortable architecture. You cannot batch. You cannot wait for a nightly job. The decision has to be made on the transaction as it arrives.",
        },
        {
          type: "h3",
          text: "The nudge that costs you every future nudge",
        },
        {
          type: "p",
          text: "This is the part most people underestimate. Notification permission is not the scarce resource. Attention is. A user who receives three interventions that felt wrong will mute the app, and after that the best-timed nudge in the world arrives nowhere.",
        },
        {
          type: "p",
          text: "So the system has to treat silence as a decision it can make. Not intervening is the correct answer most of the time, and the engine has to be measured on whether users acted rather than on how many messages it managed to send.",
        },
        {
          type: "h3",
          text: "Building on plumbing that already existed",
        },
        {
          type: "p",
          text: "Roughly half the foundation was already in place when the behavioural layers were specified: SMS sync, transaction parsing, chat, push notifications, goals and a leaderboard. The new work sat on top rather than replacing it.",
        },
        {
          type: "p",
          text: "That is the normal condition of real product work and it is worth saying plainly, because it is nothing like a greenfield build. The constraint is not what would be ideal, it is what can be added without breaking what already ships.",
        },
      ],
    },
    {
      heading: "What we would tell a founder building fintech",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Solve data capture before you design intelligence. A behavioural engine on top of a parser that misreads one transaction in twenty is a confident liar, and users detect that faster than you would like.",
            "Write down your latency budget as a product requirement. A recommendation that is right and late is wrong. If the number matters, it belongs in the specification, not in a performance ticket later.",
            "Measure restraint. Count interventions that were acted on, not interventions sent. Any system rewarded for volume will find a way to produce volume.",
            "Assume the tone has to vary. One voice across all users is a decision to be wrong for most of them, and personality clustering exists precisely to avoid that.",
          ],
        },
        {
          type: "callout",
          text: "In behavioural products, the hard engineering is rarely the model. It is knowing when to say nothing.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How does Amy know a transaction happened?",
      answer:
        "It reads and parses bank SMS on the device. In markets where open banking coverage is partial or absent, SMS is the route that actually reaches the banks people use. The trade-off is that parsing accuracy becomes the foundation everything else stands on.",
    },
    {
      question: "What is a Financial Discipline Score?",
      answer:
        "A single 0 to 100 measure built from five weighted components and two multipliers. Its purpose is not to grade the user. It is to give the rest of the system one number to reason about, so an intervention decision can account for whether this person is generally disciplined or generally not.",
    },
    {
      question: "Why does the timing of a notification matter so much?",
      answer:
        "Because an intervention only changes behaviour while the decision is still open. The pipeline is built to decide within about sixty seconds of a transaction landing, since a warning that arrives after the person has left the shop is a report rather than an intervention.",
    },
    {
      question: "How does the system avoid annoying people?",
      answer:
        "It learns from response. Nudges that were acted on and nudges that were ignored both feed a weekly recalibration, and users are clustered into spending personalities so the tone adapts. Choosing not to intervene is treated as a valid and frequently correct outcome.",
    },
    {
      question: "Can you build this kind of behavioural layer onto an existing app?",
      answer:
        "Yes, and that is what happened here. About half the plumbing already existed, including SMS sync, transaction parsing, chat, push and goals. The behavioural engine was added on top of shipping foundations rather than built from scratch, which is the ordinary condition of real product work.",
    },
  ],
};
