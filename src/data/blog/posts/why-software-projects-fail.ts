import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "why-software-projects-fail",
  title: "Why Software Projects Fail, and the Signals That Come First",
  seoTitle: "Why Software Projects Fail: Causes and Warnings",
  description:
    "Software projects rarely fail suddenly. They fail slowly through a handful of recognisable causes, each with a warning sign weeks earlier.",
  excerpt:
    "Almost every failed build was visibly in trouble long before anyone said so out loud. These are the causes, and the specific signals that precede each one.",
  category: "MVP & Startups",
  primaryKeyword: "why software projects fail",
  secondaryKeywords: [
    "software project failure causes",
    "signs a software project is failing",
    "failed software development project",
    "how to rescue a software project",
  ],
  published: "2026-08-13",
  authorId: "leadership-03",
  serviceSlug: "product-engineering",
  keyTakeaway:
    "Software projects almost never fail for technical reasons. They fail because the problem was never properly defined, because decisions could not be made fast enough to keep the work moving, because scope grew without anything being removed, or because nobody could see the true state of progress until it was too late to act. Each of these has a warning sign that appears weeks before the failure becomes undeniable — most reliably, the absence of working software you can open and use yourself.",
  sections: [
    {
      heading: "Failure is a slow process that gets reported suddenly",
      blocks: [
        {
          type: "p",
          text: "The experience of a failing software project is unusual. For months, status is fine. Reports are green. Demos happen. Then, somewhere near the end, the date moves — and then it moves again, and the second move is when everyone realises the first was not an isolated slip.",
        },
        {
          type: "p",
          text: "This pattern is not deception, or not usually. It is a reporting artefact. Software is invisible until it runs, so progress is described rather than observed. Descriptions are optimistic by default, because the person writing them is measuring against what they have done rather than what remains. The unknown work is, by definition, not in the estimate.",
        },
        {
          type: "callout",
          text: "A project does not become late in the week it is announced as late. It became late months earlier, quietly, one unmeasured assumption at a time.",
        },
        {
          type: "p",
          text: "Which means the useful question is not \"how do I avoid failure\" but \"how do I see it while it is still cheap\". The causes below are ordered by how often they are the real reason, and each is paired with the signal that shows up first.",
        },
      ],
    },
    {
      heading: "Cause one: the problem was never actually defined",
      blocks: [
        {
          type: "p",
          text: "The most common root cause, and the least dramatic. The project was specified as a solution — \"we need a customer portal\" — without the problem underneath it being written down in a way that could be checked.",
        },
        {
          type: "p",
          text: "Everything then gets built correctly against a target nobody validated. The software works. People do not use it, or they use it and the thing that was supposed to improve does not. This is the failure mode that produces the worst outcome of all: a project that comes in on time and on budget and achieves nothing, which is much harder to learn from than one that visibly goes wrong.",
        },
        {
          type: "p",
          text: "The signal: nobody can state, in one sentence, what will be measurably different once this ships. If the answer to \"how will we know this worked\" is a description of the software rather than a change in the business, the problem has not been defined.",
        },
      ],
    },
    {
      heading: "Cause two: decisions could not be made fast enough",
      blocks: [
        {
          type: "p",
          text: "Engineers hit ambiguities constantly — dozens a week on a real project, most of them small. Each one either gets answered or gets guessed. The rate at which your organisation can answer them is a hard ceiling on delivery speed, and it is almost never in the plan.",
        },
        {
          type: "p",
          text: "When answers are slow, the team does not stop. They guess, sensibly and in good faith, and continue. Some guesses are right. The wrong ones surface weeks later, embedded in code that other code now depends on, and the cost of correcting them has multiplied.",
        },
        {
          type: "p",
          text: "The signal: a list of open questions that is growing rather than shrinking week to week. Ask for it explicitly. Any team that cannot produce one is not tracking the thing most likely to sink the schedule.",
        },
      ],
    },
    {
      heading: "Cause three: scope grew and nothing left",
      blocks: [
        {
          type: "p",
          text: "Scope creep is well known and usually misdiagnosed. The problem is not that requirements change — they always do, and a process that cannot absorb change is worse than one that can. The problem is addition without subtraction.",
        },
        {
          type: "p",
          text: "Each individual addition is small and reasonable. A field here, a report there, an extra role, a second payment method. None of them justify moving the date on their own, so the date does not move. Twenty of them arrive over four months, and the date moves by six weeks all at once, at the end, when there is no time left to trade anything away.",
        },
        {
          type: "table",
          caption: "How additions are usually handled, and how they should be",
          head: ["Situation", "Common response", "Better response"],
          rows: [
            [
              "Small feature requested mid-build",
              "Absorbed silently, date unchanged",
              "Priced in days, and something of equal size named to defer",
            ],
            [
              "Stakeholder adds a requirement",
              "Added to the backlog with no visible cost",
              "Added, and the delivery date recalculated in the same conversation",
            ],
            [
              "\"While you are in there…\"",
              "Done as a favour",
              "Logged; favours are how a schedule dies without a cause of death",
            ],
            [
              "Genuinely necessary change",
              "Team absorbs it by working harder",
              "Scope traded openly, or the date moves now rather than later",
            ],
          ],
        },
        {
          type: "p",
          text: "The signal: additions being accepted without anything being deferred. If your backlog only ever grows, the schedule is being paid for out of an account nobody is watching.",
        },
      ],
    },
    {
      heading: "Cause four: nobody could see the real state",
      blocks: [
        {
          type: "p",
          text: "This one amplifies all the others. If progress is reported rather than observed, every problem above stays hidden until it is expensive.",
        },
        {
          type: "p",
          text: "Percentage-complete figures are the main culprit. \"Eighty per cent done\" is not a measurement; it is a feeling, and it is famously durable — projects sit at eighty per cent for months, because the remaining work is the work nobody understood well enough to estimate. Demos have the same weakness: they are rehearsed, they run on someone's machine, and they show the path that works.",
        },
        {
          type: "p",
          text: "The signal, and the single most reliable indicator in this entire article: how long has it been since you opened a URL and used the software yourself, on your own device, without anyone presenting it to you? If the answer is \"I have not\" or \"weeks\", you do not know the state of your project regardless of what the reports say.",
        },
        {
          type: "h3",
          text: "What to insist on instead",
        },
        {
          type: "list",
          items: [
            "A deployed environment you can open at any time, updated continuously from the first weeks of the project.",
            "Progress measured as \"these things are finished and usable\" rather than as a percentage.",
            "Repository access, so commits are visible even if you never read them.",
            "A weekly question that cannot be answered with reassurance: what is most likely to make us miss the date, and what would make you say so earlier?",
          ],
        },
      ],
    },
    {
      heading: "The signals, in the order they appear",
      blocks: [
        {
          type: "table",
          caption: "Early warnings and what they usually mean",
          head: ["Signal", "Typical timing", "Underlying cause"],
          rows: [
            [
              "No working URL you can open yourself",
              "From week 3",
              "Progress is being reported, not demonstrated",
            ],
            [
              "Open-questions list growing weekly",
              "Weeks 3–6",
              "Decision latency; guesses accumulating",
            ],
            [
              "Status has been the same for three weeks",
              "Weeks 4–8",
              "Work is stuck and being described as ongoing",
            ],
            [
              "Additions accepted with no deferrals",
              "Throughout",
              "Scope growth is unpriced",
            ],
            [
              "The team stops disagreeing with you",
              "Weeks 6+",
              "Honesty has been made expensive",
            ],
            [
              "\"Nearly done\" for a second consecutive month",
              "Late",
              "Remaining work was never estimated",
            ],
            [
              "Testing deferred to the end as a phase",
              "Planned from the start",
              "Defect discovery pushed past the point of cheap fixing",
            ],
          ],
        },
        {
          type: "p",
          text: "The fifth row is the most easily missed. A team that argued with you in month one and agrees with everything by month three has usually not become aligned; they have learned that disagreement is unwelcome. That change is worth noticing, because it means you have stopped receiving the information you most need.",
        },
      ],
    },
    {
      heading: "What to do when you recognise this",
      blocks: [
        {
          type: "p",
          text: "The instinct on discovering a project is in trouble is to add pressure or add people. Both usually make it worse — pressure suppresses reporting, and new people consume the time of the ones who already have context. There is a more useful sequence.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Get the software running somewhere you can reach it, whatever state it is in. Everything else is speculation until you have seen it.",
            "Stop new work for a short, defined period. Not to punish anyone — to stop the pile growing while it is measured.",
            "Get the open-questions list and answer it. This is often the single highest-value day available to you, and it usually requires a decision-maker rather than a meeting.",
            "Re-plan from where you are, not from the original plan. Sunk cost has no bearing on what to do next; the only question is what the remaining budget buys.",
            "Cut to something shippable. A smaller thing that launches teaches you more than a larger thing that does not, and it changes the conversation from rescue to delivery.",
            "Change how state is reported before restarting, or the same thing happens again with the same invisibility.",
          ],
        },
        {
          type: "p",
          text: "Most troubled projects are recoverable. What is rarely recoverable is a project where the reporting problem is left in place, because the second failure arrives the same way as the first and by then there is less budget and less patience.",
        },
        {
          type: "p",
          text: "If you are in the middle of one of these and want an outside read on whether it is recoverable, we do that kind of review — and we would rather tell you to stop than sell you a rebuild you do not need.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the most common reason software projects fail?",
      answer:
        "An inadequately defined problem. The project gets specified as a solution — \"we need a portal\" — without anyone writing down what will be measurably different afterwards. The software then gets built correctly against an unvalidated target. This produces the hardest failure to learn from: a project delivered on time and on budget that changes nothing.",
    },
    {
      question: "What is the earliest sign a software project is in trouble?",
      answer:
        "Not having a deployed environment you can open and use yourself by around week three. Everything else — status reports, demos, percentage figures — is a description of progress rather than an observation of it. If you have never used the software without someone presenting it to you, you do not know its real state.",
    },
    {
      question: "Is scope creep really what kills projects?",
      answer:
        "Addition without subtraction is. Requirements always change, and a process that cannot absorb change is worse than one that can. The damage comes from twenty individually reasonable additions being accepted over four months with no corresponding deferrals, so the accumulated cost appears as a single large slip at the end when nothing can be traded away.",
    },
    {
      question: "Should I add more developers to a late project?",
      answer:
        "Usually not. New people need context, and the only source of that context is the people who are already behind, so short-term throughput typically falls. The higher-value moves are answering the accumulated open questions, getting the software deployed somewhere visible, and cutting scope to something shippable.",
    },
    {
      question: "Can a failing software project be rescued?",
      answer:
        "Most can. The sequence that works is: get it running somewhere you can see, pause new work briefly, clear the backlog of unanswered decisions, re-plan from the current state rather than the original plan, and cut to something that can actually ship. What rarely survives is leaving the reporting problem in place, because the next failure then arrives the same invisible way.",
    },
  ],
};
