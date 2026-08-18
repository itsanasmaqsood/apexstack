import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "offshore-software-development-what-goes-wrong",
  title: "Offshore Software Development: What Actually Goes Wrong",
  seoTitle: "Offshore Software Development: What Goes Wrong",
  description:
    "Distributed builds rarely fail on engineering skill. They fail on decision latency and context nobody wrote down — both of which are fixable.",
  excerpt:
    "Written by a team that delivers this way. The problems are real, they are specific, and almost none of them are about how well anyone codes.",
  category: "Choosing a Partner",
  primaryKeyword: "offshore software development",
  secondaryKeywords: [
    "offshore development risks",
    "managing a remote development team",
    "nearshore vs offshore development",
    "timezone overlap software team",
  ],
  published: "2026-08-13",
  authorId: "leadership-02",
  serviceSlug: "product-engineering",
  keyTakeaway:
    "Offshore software projects almost never fail because the engineers are less capable. They fail on decision latency — the hours a question waits before it can be answered — and on context that was never written down because, in a co-located team, nobody has to write it down. Both are structural and both are fixable: a guaranteed daily overlap window, decisions recorded in writing rather than in calls, and direct access between your decision-maker and the people writing code. Where those three exist, distance costs very little. Where they do not, it compounds every single day.",
  sections: [
    {
      heading: "The problem is latency, not skill",
      blocks: [
        {
          type: "p",
          text: "It is worth being direct about our own position here: we are an Indian company and most of our clients are not in India. We have a commercial interest in this question, so the useful thing we can offer is not reassurance but specifics about what genuinely goes wrong, including when it is our side's fault.",
        },
        {
          type: "p",
          text: "The engineering-skill argument is largely dead and was never very good. Talent is distributed; opportunity historically was not. What is real, and what gets underestimated by nearly everyone in their first distributed engagement, is the cost of waiting.",
        },
        {
          type: "p",
          text: "Consider a single ordinary event. An engineer hits an ambiguity — the specification does not say what happens when a user belongs to two organisations. In a co-located team this costs four minutes: turn around, ask, continue. With a nine-hour offset and no overlap, it costs most of a day. They either wait, or they guess.",
        },
        {
          type: "callout",
          text: "The guess is the expensive part. Waiting costs a day; a wrong guess discovered three weeks later costs a fortnight.",
        },
        {
          type: "p",
          text: "Multiply by the number of ambiguities in a real project — dozens per week, most of them small — and you have the actual mechanism by which distributed builds run late. Not idleness. Not ability. A queue.",
        },
      ],
    },
    {
      heading: "Overlap is the number that matters",
      blocks: [
        {
          type: "p",
          text: "Because latency is the problem, overlap is the lever. It is also the thing most easily checked before you sign anything, and most easily fudged in a sales conversation.",
        },
        {
          type: "table",
          caption: "Overlap between India (IST) and common client timezones",
          head: ["Client location", "Offset from IST", "Natural overlap", "What it takes"],
          rows: [
            [
              "London (GMT/BST)",
              "4.5–5.5 hours behind",
              "Comfortable — most of the UK morning",
              "Almost nothing; it works by default",
            ],
            [
              "Berlin, Paris, Amsterdam",
              "3.5–4.5 hours behind",
              "Comfortable",
              "Almost nothing",
            ],
            [
              "New York (ET)",
              "9.5–10.5 hours behind",
              "None by default",
              "A deliberate shift on one side, typically 2–3 hours",
            ],
            [
              "San Francisco (PT)",
              "12.5–13.5 hours behind",
              "None by default",
              "A real early or late shift, and heavier written handover",
            ],
            [
              "Dubai, Riyadh",
              "1.5–2.5 hours behind",
              "Nearly the full day",
              "Nothing",
            ],
            [
              "Sydney",
              "4.5–5.5 hours ahead",
              "Comfortable in the IST morning",
              "Almost nothing",
            ],
          ],
        },
        {
          type: "p",
          text: "The practical rule is that three to four hours of genuine overlap is enough for a project to feel normal. Below two, everything has to be compensated for in writing, and the writing has to be good. Zero overlap is workable only for well-specified, low-ambiguity work, and it is worth pricing that honestly rather than pretending otherwise.",
        },
        {
          type: "h3",
          text: "Ask for it in writing",
        },
        {
          type: "p",
          text: "\"We have flexible hours\" means nothing. \"Our team is online 2pm–6pm your time, Monday to Friday, and your questions get answered inside that window\" is a commitment you can hold someone to. Put it in the contract. A supplier unwilling to commit to specific hours is telling you their availability is best-effort.",
        },
      ],
    },
    {
      heading: "The failures that are genuinely about culture",
      blocks: [
        {
          type: "p",
          text: "Some problems are real and get discussed badly, usually in generalisations that are neither accurate nor useful. Two are worth naming precisely.",
        },
        {
          type: "h3",
          text: "The reluctance to deliver bad news early",
        },
        {
          type: "p",
          text: "In a number of business cultures, including parts of ours, telling a client that their plan is flawed or that a deadline will slip is treated as a failure of service rather than an act of it. The result is a status report that says green until the week it says red.",
        },
        {
          type: "p",
          text: "This is a management problem with a management fix. Ask, every week, a question that cannot be answered with reassurance: not \"are we on track\" but \"what is the single most likely reason we miss the date, and what would make you say so sooner?\" Then respond well the first time somebody tells you something you did not want to hear, because that response sets the price of honesty for the rest of the engagement.",
        },
        {
          type: "h3",
          text: "Yes as acknowledgement rather than agreement",
        },
        {
          type: "p",
          text: "\"Yes\" can mean \"I have understood you\" rather than \"I agree and will do that\". This is not evasiveness, it is a different conversational default, and it produces genuine misalignment that neither party notices for weeks.",
        },
        {
          type: "p",
          text: "The fix is mechanical: end important conversations with the other person restating what they are going to do, in their own words, in writing. If the restatement does not match your intent, you have found the gap while it is still free to close.",
        },
      ],
    },
    {
      heading: "Structures that make distance stop mattering",
      blocks: [
        {
          type: "p",
          text: "These are unglamorous and they do most of the work. Insist on them regardless of who you hire.",
        },
        {
          type: "list",
          items: [
            "Direct access between your decision-maker and the engineers. Every layer of account management between the question and the person who needs the answer adds a full cycle of latency and strips detail.",
            "One shared channel rather than email. Email is asynchronous and private; a channel is asynchronous and public, which means the answer to a question is visible to the next person who has it.",
            "Decisions written where they can be found later. A decision made on a call and not recorded will be re-made, differently, in about six weeks.",
            "A deployed environment you can open yourself, updated continuously. A demo is a performance; a URL is evidence. This single item removes most of the ways a distributed project hides its true state.",
            "Written handover at the end of each working day when overlap is thin — what moved, what is blocked, what needs a decision before tomorrow. Fifteen minutes of writing buys back hours of waiting.",
            "Repository access from the first commit, so progress is verifiable rather than reported.",
          ],
        },
        {
          type: "p",
          text: "Notice that all six are things a well-run co-located team would also benefit from. Distance does not create new requirements so much as it removes your ability to get away with skipping the old ones.",
        },
      ],
    },
    {
      heading: "Nearshore, offshore, and what you actually pay for",
      blocks: [
        {
          type: "p",
          text: "The nearshore pitch is that a smaller time offset removes the latency problem. It does reduce it, and for teams that will not invest in written process, that reduction is worth paying for.",
        },
        {
          type: "table",
          caption: "Comparing the models honestly",
          head: ["Model", "Strength", "Weakness", "Best fit"],
          rows: [
            [
              "Local",
              "Zero latency, shared context by default",
              "Highest cost; small hiring pool in most cities",
              "Short, ambiguous, high-touch work",
            ],
            [
              "Nearshore",
              "Meaningful overlap with modest cost difference",
              "Smaller talent pools in some specialisms",
              "Teams unwilling to change how they communicate",
            ],
            [
              "Offshore, good overlap",
              "Cost difference with workable communication",
              "Requires deliberate written practice",
              "Most product work, if the process exists",
            ],
            [
              "Offshore, no overlap",
              "Lowest cost; genuine follow-the-sun on the right work",
              "Every ambiguity costs a day",
              "Well-specified, low-ambiguity work only",
            ],
          ],
        },
        {
          type: "p",
          text: "The honest summary is that the cost difference is real and so is the overhead, and the overhead is a function of how well the work is specified and how well both sides write. On a well-run engagement it is small. On a badly run one it consumes the entire saving, which is why the cheapest arrangement frequently is not.",
        },
      ],
    },
    {
      heading: "Questions worth asking before you commit",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "What hours will the team be online in my timezone, and will that go in the contract?",
            "Who exactly will write the code — names, seniority, and how many other projects are they on this quarter?",
            "Can I talk to those engineers directly, or does everything route through an account manager?",
            "Where will decisions be recorded, and can I read that place without asking someone?",
            "When will I first be able to open a working URL myself, rather than watch a demo?",
            "What happens if the lead engineer leaves mid-project? Who else can already read this code?",
            "Tell me about a project where the timezone gap caused a real problem, and what you changed afterwards.",
          ],
        },
        {
          type: "p",
          text: "The last one is the most informative. Every firm that has done this at any volume has a story. A firm that claims distance has never caused them a problem is either new to it or is managing the conversation rather than answering it.",
        },
        {
          type: "p",
          text: "We work this way daily and are happy to talk through the specifics of your timezone and how we would structure the overlap — including the cases where a nearer team would genuinely serve you better.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How many hours of timezone overlap do you actually need?",
      answer:
        "Three to four hours of genuine overlap is enough for a project to feel normal — long enough for a daily conversation plus room for ad-hoc questions. Below two hours, every ambiguity has to be resolved in writing and the writing has to be good. Zero overlap works only for well-specified, low-ambiguity work, and should be priced with that limitation acknowledged.",
    },
    {
      question: "Is offshore development actually cheaper once you account for overhead?",
      answer:
        "Usually yes, but by less than the headline rate difference suggests, and only when the engagement is well run. The overhead is a function of specification quality and written communication. On a project with clear scope, a guaranteed overlap window and decisions recorded in writing, the overhead is small. Without those, it can consume the entire saving.",
    },
    {
      question: "What is the biggest risk with an offshore development team?",
      answer:
        "Decision latency. Every ambiguity an engineer hits either waits for an answer or gets guessed at, and a wrong guess discovered weeks later is far more expensive than the delay would have been. This is why guaranteed overlap hours and direct access between your decision-maker and the engineers matter more than any other single factor.",
    },
    {
      question: "Should I insist on talking directly to the engineers?",
      answer:
        "Yes. Every layer between the question and the person who needs the answer adds a full communication cycle and strips detail from both directions. Account managers have a legitimate role in commercial matters, but routing technical questions through one is the most common self-inflicted cause of delay in distributed engagements.",
    },
    {
      question: "How do I tell whether an offshore team is really on track?",
      answer:
        "Stop relying on status reports and get a deployed environment you can open yourself, updated continuously from the first weeks. A demo is a performance; a URL is evidence. Combine that with repository access from the first commit and you can verify progress independently rather than taking it on trust.",
    },
  ],
};
