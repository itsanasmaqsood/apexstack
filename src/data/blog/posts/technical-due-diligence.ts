import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "technical-due-diligence",
  title: "Technical Due Diligence: What Gets Examined and Why",
  seoTitle: "Technical Due Diligence Checklist for Startups",
  description:
    "What investors and acquirers actually look at in a technical review, what raises concern, and how to prepare without pretending.",
  excerpt:
    "Technical due diligence is not a code-quality inspection. It is an assessment of how much risk sits between the product today and the product the deal assumes.",
  category: "MVP & Startups",
  primaryKeyword: "technical due diligence",
  secondaryKeywords: [
    "technical due diligence checklist",
    "software due diligence for investors",
    "tech due diligence startup",
    "code audit before acquisition",
  ],
  published: "2026-08-13",
  authorId: "leadership-02",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "Technical due diligence assesses whether the technology can support the plan the deal is priced on — not whether the code is elegant. Reviewers concentrate on four things: key-person risk, whether the architecture can carry the projected growth, legal exposure through licensing and intellectual property, and security and compliance posture. Messy code rarely kills a deal. A single engineer who is the only person who understands the system, an unresolved IP assignment, or a copyleft licence in a proprietary product frequently does.",
  sections: [
    {
      heading: "What the reviewer is actually assessing",
      blocks: [
        {
          type: "p",
          text: "There is a persistent misconception that technical due diligence is a code review with higher stakes — that somebody senior reads your repository and grades it. That is a small part of it, and rarely the part that decides anything.",
        },
        {
          type: "p",
          text: "The reviewer has a narrower question: the deal is priced on a plan, and the plan assumes the technology can do certain things by certain dates. Can it? And what would have to be true for it not to?",
        },
        {
          type: "p",
          text: "That reframing explains most of what follows. Ugly code that ships reliably and is understood by four people is a smaller risk than beautiful code that only its author can modify. Technical debt with a known shape and a rough cost is a line item; technical debt nobody has measured is an unknown, and unknowns are what get priced against you.",
        },
        {
          type: "callout",
          text: "Diligence does not ask whether the technology is good. It asks what it would cost to keep the promise the deal is built on.",
        },
      ],
    },
    {
      heading: "The four areas that carry real weight",
      blocks: [
        {
          type: "h3",
          text: "Key-person risk",
        },
        {
          type: "p",
          text: "Usually the first thing a reviewer probes and the most common serious finding in a young company. If one engineer is the only person who can deploy, or who understands the billing logic, or who knows why a particular service exists, then the value of the asset is partly a function of that person's employment contract.",
        },
        {
          type: "p",
          text: "It is tested indirectly. Reviewers look at commit distribution across the team, ask who has deployed to production in the last quarter, and ask what happens if a named person is unavailable for a month. The answers are easy to give honestly and impossible to fake under follow-up.",
        },
        {
          type: "h3",
          text: "Whether the architecture supports the plan",
        },
        {
          type: "p",
          text: "Not whether it scales in the abstract — whether it scales to the specific numbers in the forecast. A system handling two hundred customers that the plan says will handle twenty thousand gets examined for the things that break at two orders of magnitude: single-tenant assumptions baked into the data model, synchronous work that should be queued, queries with no index that are fine at current row counts, and anything that requires manual intervention per customer.",
        },
        {
          type: "h3",
          text: "Legal exposure",
        },
        {
          type: "p",
          text: "This is where deals genuinely stall, and it is the area founders are least prepared for. Two issues recur.",
        },
        {
          type: "p",
          text: "The first is open-source licensing. Strong copyleft licences such as the GPL family can, depending on how the component is used and distributed, carry obligations that are incompatible with shipping proprietary software. Most companies do not know their full dependency tree, and a transitive dependency five levels deep counts.",
        },
        {
          type: "p",
          text: "The second is intellectual property assignment. Every contractor, every agency, every founder who wrote code before the company existed, every intern — did each of them sign an assignment? A gap here means the company does not fully own the thing being bought, and that is not a discount, it is a condition precedent.",
        },
        {
          type: "h3",
          text: "Security and compliance posture",
        },
        {
          type: "p",
          text: "Proportionate to what the company handles. For consumer software with no sensitive data, a light review. For anything touching health records, payments or European personal data, a serious one — covering encryption, access control, audit logging, data retention, subprocessor agreements and whether the deletion mechanism actually deletes.",
        },
      ],
    },
    {
      heading: "What gets flagged, and how badly",
      blocks: [
        {
          type: "table",
          caption: "Common findings by severity",
          head: ["Finding", "Severity", "Why it lands there"],
          rows: [
            [
              "Unassigned IP from a past contractor",
              "Deal-blocking",
              "The company may not own what is being sold; must be cured before completion",
            ],
            [
              "Strong copyleft licence in the product",
              "Deal-blocking or costly",
              "May require releasing source, or replacing the component",
            ],
            [
              "One engineer is the only deployer",
              "Serious",
              "Concentrates operational risk in a person, not an asset",
            ],
            [
              "No automated tests at all",
              "Serious",
              "Every future change carries unbounded regression risk",
            ],
            [
              "Customer data unencrypted at rest",
              "Serious",
              "Regulatory and breach exposure, often contractual too",
            ],
            [
              "No disaster recovery ever tested",
              "Moderate",
              "Backups that have never been restored are a hypothesis",
            ],
            [
              "Significant but documented technical debt",
              "Minor",
              "A known cost is a line item, not a risk",
            ],
            [
              "Inconsistent code style",
              "Cosmetic",
              "Noted, almost never material",
            ],
          ],
        },
        {
          type: "p",
          text: "The gap between the bottom two rows and the top two is the point. Founders tend to worry about the cosmetic end and arrive unprepared for the legal end, which is where the transaction risk actually is.",
        },
      ],
    },
    {
      heading: "What happens when something serious is found",
      blocks: [
        {
          type: "p",
          text: "A serious finding is rarely the end of a transaction. It changes the shape of one, and knowing the available shapes is useful because the response is usually negotiated rather than imposed.",
        },
        {
          type: "table",
          caption: "Typical outcomes",
          head: ["Outcome", "When it is used", "What it means for you"],
          rows: [
            [
              "Condition precedent",
              "The issue must be fixed before completion — usually an IP gap",
              "The deal proceeds once you cure it; timing pressure sits with you",
            ],
            [
              "Price adjustment",
              "The issue has a quantifiable remediation cost",
              "The valuation drops by roughly what the fix costs, sometimes more",
            ],
            [
              "Escrow or holdback",
              "The cost is uncertain rather than unknown",
              "Part of the consideration is held pending resolution",
            ],
            [
              "Warranty or indemnity",
              "Low likelihood, high impact — a licensing question, say",
              "You carry the risk contractually rather than in price",
            ],
            [
              "Post-completion plan",
              "Real but not urgent, such as documented technical debt",
              "Becomes a commitment in the integration plan",
            ],
            [
              "Withdrawal",
              "Rare; typically ownership that cannot be cured",
              "The asset is not what the deal assumed",
            ],
          ],
        },
        {
          type: "p",
          text: "The pattern worth noticing is that quantified problems get priced and unquantified problems get treated as worse than they probably are. A finding you can attach a number and a plan to almost always lands in one of the middle rows. The same finding with a shrug attached tends to drift towards the harsher end, because the other side has to assume the worst case.",
        },
        {
          type: "callout",
          text: "You cannot control what diligence finds. You can control whether each finding arrives with a number next to it.",
        },
      ],
    },
    {
      heading: "How to prepare, honestly",
      blocks: [
        {
          type: "p",
          text: "There is a temptation to tidy up in the weeks before a review — write a burst of documentation, add some tests, clean the repository history. Experienced reviewers read this as clearly as anyone reads a house that was painted the week before a survey, and it costs credibility precisely when credibility is doing the most work.",
        },
        {
          type: "p",
          text: "A far better position is to know your own weaknesses and be able to price them. Disclosure of a problem you have already assessed reads as competence. Discovery of the same problem by the reviewer reads as either ignorance or concealment, and neither is helpful.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Run a licence audit on your full dependency tree, including transitive dependencies. Tooling does this in an afternoon. Fix or replace anything with a copyleft obligation incompatible with your model.",
            "Collect every IP assignment — employees, contractors, agencies, advisors, founders. Any missing signature is far cheaper to obtain now than during a transaction, when the counterparty knows you need it.",
            "Write down the architecture and its known problems. Two or three pages, with the awkward parts named. This document does more for a reviewer's confidence than any amount of polish.",
            "Reduce single points of knowledge. Have someone other than the usual person deploy, and let a second engineer walk through each critical subsystem so they can answer questions about it.",
            "Restore a backup to a fresh environment and note how long it took. An untested backup is a claim, not a control.",
            "Prepare a technical debt register with rough effort estimates. Being able to say \"we know, it is about six weeks, here is the plan\" converts an unknown into a number.",
          ],
        },
        {
          type: "p",
          text: "That list is worth working through even if no transaction is planned. It is the same list that reduces your own operating risk, which is why the companies that come through diligence smoothly are usually the ones that never treated it as an event.",
        },
      ],
    },
    {
      heading: "What the process looks like from the inside",
      blocks: [
        {
          type: "p",
          text: "For an early-stage company the review typically runs one to two weeks and involves a small number of activities. Knowing the shape removes most of the anxiety.",
        },
        {
          type: "list",
          items: [
            "A document request: architecture notes, dependency list, security policies, org chart of who owns what, incident history.",
            "Read-only repository access, usually time-boxed. Reviewers look at structure, test coverage, commit distribution and dependency health rather than reading everything.",
            "Interviews with two or three engineers, deliberately not only the CTO. Junior engineers are often the most informative people in the process, because they describe how things actually work rather than how they were designed.",
            "A live walkthrough of deployment and monitoring — how a change reaches production, what alerts exist, what happened during the last outage.",
            "A findings report, usually shared with you before it goes to the investment committee, with an opportunity to respond.",
          ],
        },
        {
          type: "p",
          text: "That final step matters more than it sounds. Most findings have context that changes their severity, and reviewers generally want to be accurate. Respond substantively rather than defensively, and a serious finding often becomes a moderate one.",
        },
        {
          type: "p",
          text: "If you are heading into a raise or a sale and want a rehearsal — the same review, run by someone whose report goes only to you — that is a short engagement and it is much cheaper to hear it first from your own side.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is technical due diligence?",
      answer:
        "An assessment, usually commissioned by an investor or acquirer, of whether a company's technology can support the plan the deal is priced on. It covers key-person risk, architecture against projected growth, legal exposure through licensing and IP assignment, and security and compliance posture. It is not primarily a judgement of code quality.",
    },
    {
      question: "How long does technical due diligence take?",
      answer:
        "For an early-stage company, typically one to two weeks: a document request, time-boxed read-only repository access, interviews with two or three engineers, a walkthrough of deployment and monitoring, and a findings report. Larger or regulated businesses take longer, mostly because the compliance review expands rather than the code review.",
    },
    {
      question: "Will messy code fail technical due diligence?",
      answer:
        "Rarely on its own. Reviewers care far more about whether the system is understood by several people, whether it can reach the numbers in the forecast, and whether there is legal exposure. Documented technical debt with a rough cost is treated as a line item. What causes real problems is unassigned intellectual property, incompatible open-source licences, and knowledge concentrated in one person.",
    },
    {
      question: "What is the most common serious finding?",
      answer:
        "Key-person risk — one engineer being the only person who can deploy, or the only person who understands a critical subsystem. It is common in young companies and it is tested indirectly through commit distribution and questions about who has deployed recently, so it is not something that can be presented around.",
    },
    {
      question: "Should I tidy up the codebase before a review?",
      answer:
        "Do the substantive work — licence audit, IP assignments, reducing single points of knowledge, testing a backup restore — and skip the cosmetic work. Experienced reviewers recognise a last-minute clean-up and it costs credibility. Disclosing a problem you have already assessed and priced reads far better than having the reviewer find it.",
    },
  ],
};
