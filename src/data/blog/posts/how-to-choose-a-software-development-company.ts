import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "how-to-choose-a-software-development-company",
  title: "How to Choose a Software Development Company",
  seoTitle: "How to Choose a Software Development Company",
  description:
    "The questions that actually separate good development firms from bad ones — and the reassuring answers you should treat as warnings.",
  excerpt:
    "Most vendor-selection advice tells you to check portfolios and read reviews. Both are close to useless. Here is what genuinely predicts whether a build goes well.",
  category: "Choosing a Partner",
  primaryKeyword: "how to choose a software development company",
  secondaryKeywords: [
    "choosing a software development partner",
    "questions to ask a development agency",
    "software vendor selection criteria",
    "how to vet a development company",
  ],
  published: "2026-08-13",
  authorId: "leadership-01",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "Choose a software development company on the quality of its questions, not the quality of its portfolio. A firm that pushes back on your scope, asks what happens when a specific assumption is wrong, and tells you which parts of your plan it would cut is demonstrating the judgement you are actually buying. Portfolios show what a team shipped, not whether they shipped it on time, on budget, or with anyone still speaking to them at the end — and every portfolio you will see has been filtered to its best six projects.",
  sections: [
    {
      heading: "Why portfolios and reviews tell you almost nothing",
      blocks: [
        {
          type: "p",
          text: "Every agency shows you six projects. Those six are the ones that went well, launched, and belong to a client who agreed to be named. You are looking at a survivorship-filtered sample with a sample size of six, chosen by the party you are evaluating. It tells you the firm has shipped software at some point, which is a low bar, and nothing about the eleven projects that are not on the page.",
        },
        {
          type: "p",
          text: "Reviews are weaker still. Buyers on review platforms are typically asked to write them within weeks of launch, which is the honeymoon. The problems with a software build — the parts nobody documented, the dependency that stopped being maintained, the architecture decision that makes the next feature cost triple — surface between six and eighteen months later. By then the review is written and the star rating is fixed.",
        },
        {
          type: "callout",
          text: "You are not buying code. You are buying a few hundred decisions made by people you will not be supervising.",
        },
        {
          type: "p",
          text: "That is why the evaluation has to be about judgement. Code can be inspected after the fact and fixed if it is bad. A decision to build a bespoke authentication system when an off-the-shelf provider would have done, or to model your data around the first customer you happened to interview, is expensive for years and is rarely visible until it is load-bearing.",
        },
      ],
    },
    {
      heading: "What to ask, and what the answers mean",
      blocks: [
        {
          type: "p",
          text: "The following questions are useful because a firm that is guessing cannot fake a good answer to them, and a firm that is telling you what you want to hear will fail them in a specific, recognisable way.",
        },
        {
          type: "table",
          caption: "Six questions and how to read the response",
          head: ["Ask this", "Good sign", "Warning sign"],
          rows: [
            [
              "What would you cut from this scope?",
              "Names two or three specific features and explains what you lose",
              "\"It all sounds important\" — they have not engaged with the problem, or they are paid by volume",
            ],
            [
              "What is most likely to go wrong here?",
              "A concrete risk tied to your project: a named integration, a data-quality unknown, a compliance question",
              "Generic risk language, or a claim that their process prevents problems",
            ],
            [
              "Who exactly writes the code, and where?",
              "Named people, their seniority, their timezone, and whether they are on other projects",
              "\"Our team\" with no names, or an answer that changes between the pitch and the contract",
            ],
            [
              "Show me a project that went badly",
              "A real one, with what they got wrong and what they changed afterwards",
              "Deflection, or a humblebrag disguised as failure (\"we cared too much\")",
            ],
            [
              "What do you need from us weekly?",
              "A specific commitment: a decision-maker for X hours, access to Y, sign-off within Z days",
              "\"Very little, we handle everything\" — the most expensive sentence in this industry",
            ],
            [
              "What happens if we stop after phase one?",
              "You keep the code, the infrastructure and the documentation; here is the handover",
              "Hesitation, or a dependency you cannot unwind",
            ],
          ],
        },
        {
          type: "p",
          text: "The last one matters more than its position suggests. A firm confident in its own value has no reason to make leaving difficult. A firm that builds on infrastructure only it can access, or that treats documentation as a paid extra, has designed your dependency deliberately.",
        },
      ],
    },
    {
      heading: "The reassuring answers you should treat as warnings",
      blocks: [
        {
          type: "p",
          text: "Some responses feel excellent in a sales meeting and predict trouble. They are worth naming because the instinct to like them is strong.",
        },
        {
          type: "list",
          items: [
            "\"We can start Monday.\" Availability at short notice on a well-run team is unusual. It means either someone else's project just ended badly, or the people starting Monday are not the people who pitched.",
            "\"We don't need much from you.\" Software fails on unavailable decisions far more often than on unavailable engineers. A partner who does not ask for your time is planning to guess, and you will pay to unwind the guesses.",
            "\"Yes\" to everything. Every scope contains at least one thing that is a bad idea, and an outsider can usually see it faster than you can. A firm that never disagrees during the sale will not start once the invoices are flowing.",
            "A fixed quote before discovery. Either they have padded it heavily to cover the unknowns, or they have not understood the unknowns and will come back for more money. Both are worse than an honest range.",
            "\"We follow agile.\" Nearly universal and nearly meaningless as stated. Ask what happens in week three when a demo shows the feature is wrong. That answer is the actual process.",
          ],
        },
      ],
    },
    {
      heading: "How to compare proposals that are not comparable",
      blocks: [
        {
          type: "p",
          text: "You will receive quotes that differ by a factor of three for what looks like the same brief. This is almost never because one firm is three times greedier. It is because they have read the brief differently, and the difference is information.",
        },
        {
          type: "p",
          text: "Put the proposals side by side and look only at what each one assumes. One has priced a design system, another has assumed you have brand assets. One includes a QA pass on three browsers, another does not mention testing. One assumes your data is clean. Once you normalise the assumptions, the spread usually collapses to something explainable, and the outlier that remains is the one worth asking about.",
        },
        {
          type: "h3",
          text: "The cheapest quote is a forecast, not a price",
        },
        {
          type: "p",
          text: "A low quote is a prediction that nothing will be harder than expected. Software has an unusually long tail of things that are harder than expected. When the prediction fails — and the failure rate is high — you are in a weak position: the work is half-built, the code is unfamiliar, and switching costs more than continuing. The low bid becomes an option the other party holds against you.",
        },
        {
          type: "p",
          text: "This is not an argument for choosing the most expensive proposal. It is an argument for choosing the one whose reasoning you can follow, and treating any quote you cannot reconstruct as a quote you have not understood.",
        },
      ],
    },
    {
      heading: "Does location matter, and how much?",
      blocks: [
        {
          type: "p",
          text: "Less than the discourse suggests, and differently. The failure mode in distributed engagements is almost never skill. It is decision latency: you ask a question at 5pm, the answer arrives at 9am tomorrow, and the engineer who needed it lost a day. Repeat that daily and a twelve-week build becomes sixteen.",
        },
        {
          type: "p",
          text: "So the question to ask is not \"where are you\" but \"how many hours of overlap will we have, and what happens in the hours we do not.\" A team four hours ahead with a guaranteed overlap window and a culture of writing decisions down will outperform a team in your own city that communicates entirely in undocumented calls. Ask specifically how a decision gets made when the person who needs it is asleep.",
        },
        {
          type: "table",
          caption: "What actually varies with distance",
          head: ["Factor", "Effect of distance", "What to ask for"],
          rows: [
            [
              "Decision latency",
              "The dominant cost — compounds daily",
              "A guaranteed overlap window, in writing",
            ],
            [
              "Written communication",
              "Becomes essential rather than optional",
              "Decisions recorded in a shared place you can read",
            ],
            [
              "Domain context",
              "Harder to absorb informally",
              "Structured discovery, and access to your actual users",
            ],
            [
              "Engineering quality",
              "Broadly unrelated to location",
              "Evidence of code review and automated testing",
            ],
            [
              "Contract enforceability",
              "Genuinely harder across jurisdictions",
              "Governing law, and IP assignment that survives",
            ],
          ],
        },
      ],
    },
    {
      heading: "A practical way to run the selection",
      blocks: [
        {
          type: "p",
          text: "If you are choosing between several firms and want a process rather than a feeling, this one is cheap and discriminates well.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Send the same written brief to three or four firms. Include your budget range. Withholding it wastes everyone's time and produces proposals you cannot compare.",
            "Have a call with each. Judge the questions they ask, not the slides they show. Write down anything that surprised you — a good firm will surprise you at least once.",
            "Ask each to write a one-page response covering what they would build first, what they would cut, and what they think the biggest risk is. Pay for this if the project is large; a paid discovery day is the cheapest insurance available.",
            "Compare the three one-pagers rather than the three proposals. Disagreement between them tells you where the real uncertainty in your project is.",
            "Talk to a reference whose project ended more than a year ago. Ask what has broken since, and how the firm responded when it did.",
            "Check the contract for the exit terms before the delivery terms. If leaving is clean, staying is a choice rather than a trap.",
          ],
        },
        {
          type: "p",
          text: "The whole process costs a couple of weeks. Against a build that will run for months and cost six figures, that is a rounding error, and it removes most of the ways this goes wrong.",
        },
        {
          type: "p",
          text: "If you are working through this and want a second opinion on a brief or a proposal you have received, we are happy to look at it — including when the conclusion is that someone else is the better fit.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much should I budget for custom software development?",
      answer:
        "It depends far more on scope than on vendor. A single-platform product with standard authentication and payments typically falls in the USD 20,000–50,000 range on the open market; add several integrations and multiple user roles and it moves to USD 50,000–120,000; multi-platform, real-time or regulated builds run higher. Share your range with firms you approach — it lets them propose something achievable rather than guess.",
    },
    {
      question: "Should I choose a specialist or a generalist agency?",
      answer:
        "Specialists win when your domain carries real regulatory or technical complexity — health data, payments, anything with a certification regime. Generalists win when the hard part is the product decision rather than the domain. If a specialist charges a large premium purely for having built something similar, ask what specifically transfers; sometimes the answer is substantial, and sometimes it is a slide.",
    },
    {
      question: "Is it a red flag if an agency will not give a fixed price?",
      answer:
        "No — usually the opposite. A firm that quotes a fixed price for a poorly defined scope is either padding heavily or planning a change-request conversation later. The reasonable pattern is a fixed price for a short discovery phase that produces a real specification, then a fixed or capped price for the build once the unknowns are actually known.",
    },
    {
      question: "How do I check a development company's technical quality before hiring them?",
      answer:
        "Ask to speak to the engineer who would lead your project, not the account manager, and ask them to walk you through a technical decision they made recently and what they rejected. If you have someone technical available, have them sit in. Where a firm has public code or published apps, look at those — anything live and inspectable beats a case study.",
    },
    {
      question: "What should be in the contract before I sign?",
      answer:
        "Assignment of intellectual property to you on payment, access to the source repository from day one rather than at the end, a defined handover including infrastructure and documentation, a named team with a notice period on substitutions, and clear termination terms. If any of those cause friction during negotiation, they will cause much more friction later.",
    },
  ],
};
