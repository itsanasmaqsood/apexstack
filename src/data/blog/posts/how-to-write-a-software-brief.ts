import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "how-to-write-a-software-brief",
  title: "How to Write a Software Brief That Gets Comparable Quotes",
  seoTitle: "How to Write a Software Development Brief",
  description:
    "A brief that produces quotes you can actually compare, with the eight sections that matter and the four that waste everyone's time.",
  excerpt:
    "If three firms quote you wildly different numbers for the same brief, the brief is usually the problem. Here is the structure that fixes it.",
  category: "Choosing a Partner",
  primaryKeyword: "how to write a software development brief",
  secondaryKeywords: [
    "software RFP template",
    "software requirements brief",
    "development project brief",
    "how to brief a software agency",
  ],
  published: "2026-08-13",
  authorId: "leadership-03",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "A good software brief describes the problem, the constraints and the decision process — not the solution. Include your budget range: withholding it does not get you a better price, it gets you proposals built against different assumptions that cannot be compared. The eight sections that matter are the problem, the users, the critical journey, what is explicitly out of scope, existing systems, constraints, budget and timeline, and how you will decide. Most briefs fail because they are a feature list, and a feature list tells a supplier what to build without telling them what for.",
  sections: [
    {
      heading: "Why most briefs produce quotes you cannot compare",
      blocks: [
        {
          type: "p",
          text: "Send the same brief to four firms and you will often get numbers that differ by a factor of three. The instinct is to conclude that some are overpriced. Usually they have simply read four different projects into the same document.",
        },
        {
          type: "p",
          text: "This happens because the brief describes features rather than outcomes and constraints. \"Users can upload documents\" is a sentence that supports at least six honest interpretations, ranging from two days of work to two months. One firm prices a file picker and object storage. Another prices virus scanning, optical character recognition, versioning, per-field redaction and an audit trail, because they have worked in a regulated industry and assumed you meant that.",
        },
        {
          type: "callout",
          text: "A brief's job is not to specify the software. It is to make every supplier imagine the same project.",
        },
        {
          type: "p",
          text: "You do not need to resolve every ambiguity — that is what discovery is for. You need to say enough about the problem, the users and the constraints that the ambiguities get resolved in roughly the same direction by everyone reading it.",
        },
      ],
    },
    {
      heading: "The eight sections that carry the weight",
      blocks: [
        {
          type: "h3",
          text: "1. The problem, in your own words",
        },
        {
          type: "p",
          text: "Two or three paragraphs on what is broken now. Who feels it, how often, and what it costs — in money, in hours, in customers lost, in errors made. Crucially: what do people currently do instead? Every real problem has a workaround, and the workaround is the most informative thing in the entire brief. If there is no workaround, the problem may not be painful enough to fund a solution.",
        },
        {
          type: "h3",
          text: "2. Who will use it",
        },
        {
          type: "p",
          text: "Named roles, rough numbers, and their technical comfort. \"Forty warehouse staff on shared Android tablets, wearing gloves, in a cold room\" produces different software from \"forty operations staff on laptops.\" Include the roles who will use it reluctantly, because designing for them is usually where the difficulty lives.",
        },
        {
          type: "h3",
          text: "3. The one critical journey",
        },
        {
          type: "p",
          text: "Describe, step by step, the single most important thing someone does with this system. Not all of them — one. This anchors every supplier to the same core, and it tends to surface the hardest requirement in the whole project, because the critical journey is usually where the state, the permissions and the edge cases collide.",
        },
        {
          type: "h3",
          text: "4. What is explicitly out of scope",
        },
        {
          type: "p",
          text: "The most valuable section and the one almost always missing. Saying \"no native mobile app in version one\", \"no multi-currency\", \"no offline mode\", \"no migration of the historical archive\" removes more estimate variance than any amount of detail added elsewhere. It also protects you: a supplier who quotes without these is quoting for something larger than you want.",
        },
        {
          type: "h3",
          text: "5. Systems it has to live with",
        },
        {
          type: "p",
          text: "Everything it must integrate with, plus one detail per system: does it have a documented API, is there a sandbox, and who internally owns it. \"Integrates with our ERP\" is not a requirement, it is a research project. Name the ERP, its version, and whether anyone has ever successfully connected to it.",
        },
        {
          type: "h3",
          text: "6. Constraints that are not negotiable",
        },
        {
          type: "p",
          text: "Regulatory scope, data residency, accessibility standards, existing technology you are committed to, security review requirements, procurement rules. These frequently change the architecture, so a supplier learning about them in week three prices them badly and builds them worse.",
        },
        {
          type: "h3",
          text: "7. Budget range and timeline, with reasons",
        },
        {
          type: "p",
          text: "Give a range. Say what is driving the date — a trade show, a contract expiry, a funding milestone, or nothing in particular, which is also useful to know. A deadline with a reason can be designed around; a deadline without one gets treated as decoration by suppliers and as sacred by you.",
        },
        {
          type: "h3",
          text: "8. How you will decide",
        },
        {
          type: "p",
          text: "Who is involved, what the stages are, and when you expect to choose. This is a courtesy, and it is also a filter: suppliers who are busy will prioritise a buyer with a clear process over one who might decide sometime.",
        },
      ],
    },
    {
      heading: "Say the budget. Really.",
      blocks: [
        {
          type: "p",
          text: "The most common objection to writing a brief properly is that naming a budget invites suppliers to spend all of it. It is worth addressing directly because the reasoning is intuitive and wrong.",
        },
        {
          type: "p",
          text: "Software has no fixed price. There is no single correct amount for \"a customer portal\" any more than there is for \"a building\". What exists is a set of solutions at different scopes and different levels of robustness. Without a budget, a supplier is guessing which one you want, and their guess is as likely to be four times your number as to be under it.",
        },
        {
          type: "table",
          caption: "What withholding the budget actually produces",
          head: ["What you hope", "What usually happens", "Why"],
          rows: [
            [
              "You discover the true market price",
              "You get four proposals for four different projects",
              "Each supplier guessed a different scope",
            ],
            [
              "Suppliers compete downward",
              "The serious ones deprioritise you",
              "Unbounded briefs are expensive to respond to",
            ],
            [
              "You avoid being upsold",
              "You get a proposal you cannot afford, and start again",
              "Scope was designed against no constraint",
            ],
            [
              "You keep negotiating room",
              "You lose weeks",
              "Two rounds of re-scoping instead of one",
            ],
          ],
        },
        {
          type: "p",
          text: "A range is enough. \"We have approved somewhere between 60 and 90 thousand for the first phase\" lets every supplier design against the same constraint, which is the only condition under which their proposals become comparable. If a supplier's numbers rise to meet whatever you say regardless of scope, you have learned something valuable cheaply.",
        },
      ],
    },
    {
      heading: "What to leave out",
      blocks: [
        {
          type: "p",
          text: "Briefs get worse past a certain length, and these four sections are where the wasted pages usually are.",
        },
        {
          type: "list",
          items: [
            "Technology mandates you do not actually hold. Specifying a stack you have no real reason to require narrows your supplier pool and removes an opinion you were paying for. If you do have a reason — an in-house team who must maintain it, an existing platform — say the reason rather than only the requirement.",
            "Exhaustive feature lists at equal weight. Three hundred bullet points with no priority tells a supplier nothing about what matters. Ten features with a stated order beats it comfortably.",
            "Interface designs, unless you are committed to them. Attaching mockups turns a scoping conversation into a pixel conversation, and you lose the design thinking you would otherwise have bought.",
            "Company boilerplate. Nobody prices a project differently because of your mission statement, and it dilutes the parts that carry information.",
          ],
        },
        {
          type: "p",
          text: "Length is not the goal. A sharp three-page brief that answers the eight sections above will get better proposals than a thirty-page document that answers none of them.",
        },
      ],
    },
    {
      heading: "The same requirement, written twice",
      blocks: [
        {
          type: "p",
          text: "The difference between a brief that produces comparable quotes and one that does not is usually visible at the level of individual sentences. A worked example is more useful here than a rule.",
        },
        {
          type: "h3",
          text: "Written the usual way",
        },
        {
          type: "p",
          text: "\"The system should allow users to upload and manage documents, with appropriate permissions and search functionality.\"",
        },
        {
          type: "p",
          text: "Every word of that is reasonable and it supports estimates that differ by a factor of ten. \"Appropriate permissions\" could be two roles or an organisation-scoped matrix. \"Search\" could be a filename filter or full-text search across document contents. \"Manage\" could include versioning, or not. Nobody is being careless — the sentence genuinely does not decide any of it.",
        },
        {
          type: "h3",
          text: "Written so it can be priced",
        },
        {
          type: "p",
          text: "\"Case handlers upload PDFs and Word files, typically 2–10MB, around 40 per day across the team. Each document belongs to one case. Anyone on that case can view; only the assigned handler can delete. Handlers need to find a document by case reference or by filename — searching inside document contents is out of scope for version one. We do not need version history. Files must stay in the EU.\"",
        },
        {
          type: "p",
          text: "Longer, but every clause removes a decision the supplier would otherwise have guessed at. The volume and file sizes rule out an architecture. The permission rule is stated rather than implied. Two things are explicitly excluded. The residency constraint changes the hosting choice and is now known in week zero rather than week six.",
        },
        {
          type: "table",
          caption: "What the second version adds",
          head: ["Detail", "What it decides"],
          rows: [
            ["File types and sizes", "Storage approach, upload handling, virus scanning need"],
            ["Volume per day", "Whether this needs queueing and background processing"],
            ["Ownership rule", "The data model, before anyone draws a screen"],
            ["Explicit permission rule", "Whether this is a conditional or an authorisation system"],
            ["Two named exclusions", "Removes the largest sources of estimate variance"],
            ["Data residency", "Hosting region and provider, decided up front"],
          ],
        },
        {
          type: "p",
          text: "You do not need this level of detail for every requirement. Apply it to the three or four that are central to the product, and let discovery resolve the rest.",
        },
      ],
    },
    {
      heading: "How to send it, and what to ask back",
      blocks: [
        {
          type: "p",
          text: "Send the same document to three or four firms — more than that and you cannot give any of them proper attention, which shows in what you get back.",
        },
        {
          type: "p",
          text: "Then ask each for a response in a fixed shape, so you are comparing like with like. Three questions do most of the work.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "What would you build first, and what would you deliberately leave out of the first release?",
            "What is the single biggest risk you see in this, and how would you find out early whether it is real?",
            "What assumptions did you have to make to produce this number? List them.",
          ],
        },
        {
          type: "p",
          text: "The third question is the one that makes proposals comparable. Once you can see each supplier's assumptions written down, the differences between their numbers usually become explicable, and the outlier that remains is the conversation worth having.",
        },
        {
          type: "p",
          text: "If you have a brief in draft and want a read on whether it would produce comparable quotes, send it over — that is a short review and you are welcome to take the feedback to whoever you end up hiring.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Should I include my budget in a software development brief?",
      answer:
        "Yes, as a range. Software has no fixed price — there are solutions at many scopes, and without a constraint each supplier guesses a different one, which is why quotes for the same brief can differ threefold. Naming a range means every proposal is designed against the same limit, which is the only condition under which they become comparable.",
    },
    {
      question: "How long should a software brief be?",
      answer:
        "Three to six pages is usually right. The goal is completeness across the sections that carry information — problem, users, critical journey, out of scope, existing systems, constraints, budget, decision process — rather than length. A sharp three-page brief consistently produces better proposals than a thirty-page document that never says what is out of scope.",
    },
    {
      question: "Should I specify the technology stack in my brief?",
      answer:
        "Only if you have a genuine reason, and then state the reason rather than just the requirement. An in-house team who will maintain it, or an existing platform you are committed to, are real constraints. Mandating a stack without one narrows your supplier pool and discards the technical judgement you are otherwise paying for.",
    },
    {
      question: "How many companies should I send my brief to?",
      answer:
        "Three or four. Beyond that you cannot give each one enough attention to evaluate them properly, and suppliers can tell when they are one of ten — the serious ones deprioritise those. A smaller set you engage with properly produces far better information than a wide distribution you skim.",
    },
    {
      question: "What is the difference between a brief and a specification?",
      answer:
        "A brief describes the problem, the users and the constraints so suppliers can propose a solution; it is what you write before anyone is hired. A specification describes the solution in enough detail to build it, screen by screen and behaviour by behaviour; it is normally the output of a paid discovery phase. Trying to write a specification before you have technical input usually produces a feature list rather than either.",
    },
  ],
};
