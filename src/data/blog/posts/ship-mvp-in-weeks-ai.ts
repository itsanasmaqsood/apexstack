import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "ship-mvp-in-weeks-ai",
  title: "Ship Your MVP in Weeks With AI (Here's What It Actually Takes)",
  seoTitle: "Ship Your MVP in Weeks With AI (Here's What It Actually",
  description: "Want to ship an MVP in weeks using AI? Here's what the timeline actually looks like, what slows founders down, and how to avoid the traps.",
  excerpt: "but here's the part nobody tells you: the five weeks wasn't the hard part. the hard part was the conversation we had before a single line of code got written.",
  category: "MVP & Startups",
  primaryKeyword: "ship mvp in weeks ai",
  secondaryKeywords: [
    "1 what is the one thing that has to work",
    "2 what model and why",
    "3 where the human stays in the loop",
    "weeks means practice",
  ],
  published: "2026-06-21",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "when founders search for this, they're usually hoping AI is the shortcut. like the technology itself compresses time. and it does, but not in the way most people think.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "A founder emailed me on a tuesday. he had a pitch deck, a waitlist of 200 people, and a developer quote for $80,000 that would take four months. he wanted to know if there was another way.",
        },
        {
          type: "p",
          text: "there was. we shipped his core product in five weeks.",
        },
        {
          type: "p",
          text: "but here's the part nobody tells you: the five weeks wasn't the hard part. the hard part was the conversation we had before a single line of code got written.",
        },
      ],
    },
    {
      heading: "why \"ship MVP in weeks with AI\" is the right instinct, wrong assumption",
      blocks: [
        {
          type: "p",
          text: "when founders search for this, they're usually hoping AI is the shortcut. like the technology itself compresses time. and it does, but not in the way most people think.",
        },
        {
          type: "p",
          text: "AI doesn't make bad decisions faster. it makes good decisions executable faster.",
        },
        {
          type: "p",
          text: "what actually compresses a timeline from six months to six weeks is ruthless scope decisions made before development starts. AI tooling, LLM integrations, modern stacks. Those are multipliers. but you can only multiply a decision that's already been made clearly.",
        },
        {
          type: "p",
          text: "i've watched founders spend three weeks in discovery arguing about a feature that wasn't even in the MVP. that's where timelines die, not in the code.",
        },
      ],
    },
    {
      heading: "what \"weeks\" actually means in practice",
      blocks: [
        {
          type: "p",
          text: "let me be specific, because vague promises are everywhere in this space.",
        },
        {
          type: "p",
          text: "at ApexStack, our standard MVP engagement runs four to six weeks. that's not a marketing number. It's what happens when the scope is locked before week one starts. the breakdown looks roughly like this:",
        },
        {
          type: "p",
          text: "week 1: finalise the one core workflow. not the roadmap. not v2. the single thing a user does that proves your product has value. this is harder than it sounds.",
        },
        {
          type: "p",
          text: "weeks 2-4: build the core loop. for AI-powered products this means the prompt architecture, the retrieval logic if you're doing RAG, the UX that makes the AI output feel trustworthy. we're not decorating a product with AI here. We're engineering the AI as the product.",
        },
        {
          type: "p",
          text: "week 5: internal testing with real, messy inputs. AI features fail in interesting ways. a user doesn't type clean, formatted queries. they ask weird questions, give partial context, and expect the product to handle it. this week is about breaking things before your users do.",
        },
        {
          type: "p",
          text: "week 6: launch to a small cohort. not the world. not Product Hunt. ten to fifty real people who have the problem you're solving.",
        },
        {
          type: "p",
          text: "that's the honest shape of it. anyone promising a production-ready AI product in 72 hours is either building something with no real logic, or setting you up for a painful month of post-launch fixes.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "1. what is the one thing that has to work",
      answer: "not three things. not a list. one thing.",
    },
    {
      question: "2. what model, and why",
      answer: "this is a decision most guides skip over, and it matters more than people realise.",
    },
    {
      question: "3. where the human stays in the loop",
      answer: "this is the one nobody wants to talk about because it feels like admitting the AI isn't good enough.",
    },
  ],
};
