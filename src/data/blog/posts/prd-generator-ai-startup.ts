import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "prd-generator-ai-startup",
  title: "PRD Generator AI for Startups: What It Gets Right (and Where It Stops)",
  seoTitle: "PRD Generator AI for Startups",
  description: "A PRD generator AI can give your startup a head start. Here's what it actually produces, where it falls short, and what to do next if you want to ship.",
  excerpt: "then he asked me when we could start building. i read through the doc and counted 11 assumptions that would have collapsed the product if we'd built to them literally.",
  category: "AI Engineering",
  primaryKeyword: "prd generator ai startup",
  secondaryKeywords: [
    "whats the one thing this product needs to do",
    "which features belong in week one and which belong in week twelve",
    "what are the technical constraints the ai doesnt know about",
    "prd generator ai does well",
    "needs happen before developer sees prd",
  ],
  published: "2026-06-18",
  authorId: "leadership-01",
  serviceSlug: "ai-development",
  keyTakeaway: "most founders have a clear product in their head and a completely empty document in front of them. they don't know what a user story looks like. they've never written acceptance criteria.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "a founder sent me a PRD last month. clean structure, user stories, acceptance criteria, edge cases. The works. took him 20 minutes using an AI PRD generator. he was proud of it.",
        },
        {
          type: "p",
          text: "then he asked me when we could start building. i read through the doc and counted 11 assumptions that would have collapsed the product if we'd built to them literally.",
        },
        {
          type: "p",
          text: "the PRD wasn't the problem. the problem was thinking the PRD was the finish line.",
        },
      ],
    },
    {
      heading: "what a PRD generator AI actually does well",
      blocks: [
        {
          type: "p",
          text: "i want to be fair here before i get critical. these tools, MakePRD, PRDKit, THIG, GenPRD, the whole category, solve a real problem for non-technical founders.",
        },
        {
          type: "p",
          text: "the blank page problem is brutal.",
        },
        {
          type: "p",
          text: "most founders have a clear product in their head and a completely empty document in front of them. they don't know what a user story looks like. they've never written acceptance criteria. they've never heard the phrase \"edge case\" used in a product context. so they either skip the spec entirely and brief a developer with a Figma screenshot and a voice note, or they spend two weeks writing something that still doesn't answer the right questions.",
        },
        {
          type: "p",
          text: "a good AI PRD generator collapses that gap fast. you describe your idea in plain language, and within minutes you have something that looks like a real product spec. features list, user flows, success metrics. a document you can hand to a developer without feeling embarrassed.",
        },
        {
          type: "p",
          text: "for that specific job, going from nothing to structured, they work.",
        },
      ],
    },
    {
      heading: "where it breaks down for startup founders specifically",
      blocks: [
        {
          type: "p",
          text: "here's the thing about AI-generated PRDs: they're optimised for completeness, not correctness.",
        },
        {
          type: "p",
          text: "the model doesn't know your market. it doesn't know that your target users are 52-year-old logistics managers in the midwest who've never used a SaaS product. it doesn't know that one of your \"nice to have\" features is actually the only reason anyone would pay for this. it fills in those gaps confidently anyway, because confident and complete is what a PRD is supposed to look like.",
        },
        {
          type: "p",
          text: "i've seen AI-generated PRDs recommend a full notification system for an MVP. suggest a three-tier user role structure for a product with twenty beta users. specify real-time sync functionality because that's what similar products have, not because this product needed it.",
        },
        {
          type: "p",
          text: "each of those decisions adds weeks to a build and thousands to a budget.",
        },
        {
          type: "p",
          text: "the document looks right. the priorities are wrong.",
        },
      ],
    },
    {
      heading: "what actually needs to happen before a developer sees a PRD",
      blocks: [
        {
          type: "p",
          text: "the PRD isn't the first step. it's closer to the third or fourth.",
        },
        {
          type: "p",
          text: "before a spec is useful, someone with product judgment needs to ask a few uncomfortable questions. not the AI, someone who's built things before and knows where founders tend to deceive themselves.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "what's the one thing this product needs to do?",
      answer: "not five things. not a platform. one thing, for one user, in one specific situation. if you can't answer that in a sentence, the PRD will sprawl. the AI will help you sprawl very efficiently.",
    },
    {
      question: "which features belong in week one and which belong in week twelve?",
      answer: "this is where a PRD generator AI consistently struggles. it treats everything you describe as equally valid and equally urgent. in reality, most startup MVPs have two or three features that define the product and another eight to twelve that are noise until you have traction.",
    },
    {
      question: "what are the technical constraints the AI doesn't know about?",
      answer: "a PRD generator doesn't know your budget. it doesn't know whether you need to integrate with a legacy system. it doesn't know that a particular feature you described is technically trivial in one stack and a month of work in another.",
    },
  ],
};
