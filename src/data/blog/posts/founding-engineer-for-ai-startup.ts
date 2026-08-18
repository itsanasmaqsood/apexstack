import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "founding-engineer-for-ai-startup",
  title: "Founding Engineer for AI Startup: What to Do When You Can't Find One",
  seoTitle: "Founding Engineer for AI Startup",
  description: "Can't find a founding engineer for your AI startup? Here's what actually works for non-technical founders who need to ship fast without burning equity.",
  excerpt: "not because she wasn't trying. she'd posted on YC co-founder matching, messaged people on LinkedIn, offered 8% equity.",
  category: "AI Engineering",
  primaryKeyword: "founding engineer for ai startup",
  secondaryKeywords: [
    "1 build the mvp first then hire",
    "2 use a fractional technical lead while you search",
    "3 hire for a specific ai layer not a generalist",
  ],
  published: "2026-06-25",
  authorId: "leadership-01",
  serviceSlug: "ai-development",
  keyTakeaway: "Can't find a founding engineer for your AI startup? Here's what actually works for non-technical founders who need to ship fast without burning equity. the title \"founding engineer\" sounds like a job posting. it isn't. it's a relationship ask.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "a founder i spoke to last month had been searching for a founding engineer for 11 weeks. good idea, real traction signals, some early users who wanted the product. no engineer.",
        },
        {
          type: "p",
          text: "not because she wasn't trying. she'd posted on YC co-founder matching, messaged people on LinkedIn, offered 8% equity. three conversations that went nowhere. one person who ghosted mid-negotiation. the product sat still while her competitors kept moving.",
        },
        {
          type: "p",
          text: "this isn't an unusual story. it's the most common one i hear.",
        },
      ],
    },
    {
      heading: "why finding a founding engineer for an AI startup is harder than it looks",
      blocks: [
        {
          type: "p",
          text: "the title \"founding engineer\" sounds like a job posting. it isn't. it's a relationship ask. you're not hiring someone to complete tasks: you're asking them to co-own risk, build in uncertainty, make architecture decisions that haven't been asked yet, and stay when it gets hard.",
        },
        {
          type: "p",
          text: "that's a different thing from an employment offer. most candidates know it.",
        },
        {
          type: "p",
          text: "in AI specifically, the gap got worse in 2023 and hasn't closed. engineers who can actually work with LLMs in production, not just demo GPT-4 in a notebook, but build real product around it, are not sitting around waiting for an equity arrangement. they're employed, they're building their own thing, or they're consulting at $200/hour.",
        },
        {
          type: "p",
          text: "the ones who say yes to a founding role are usually early-career, which is fine, or they want control over the technical direction, which you have to be willing to give. the ones who ghost you after two calls just ran the math on their risk-adjusted return and said no. that's not personal. it's rational.",
        },
      ],
    },
    {
      heading: "what most non-technical founders get wrong about this search",
      blocks: [
        {
          type: "p",
          text: "i thought the problem was the offer. it usually isn't.",
        },
        {
          type: "p",
          text: "most non-technical founders spend their energy trying to sweeten the deal, more equity, faster vesting, co-founder title. and sometimes that's the right lever. but more often, the real issue is that the founder can't show the engineer what they're actually joining.",
        },
        {
          type: "p",
          text: "if you walk into a call with a deck and a dream but no deployed code, no user feedback, no working prototype. You're asking an engineer to bet months of their life on your clarity. engineers are pattern-matchers. they're looking for: does this person know what they want to build? is there any evidence the market wants it? can i trust their judgment when we disagree?",
        },
        {
          type: "p",
          text: "the best thing you can do before your next founding engineer conversation is have something working. even if it's rough. even if it cost you $6,500 and someone else built it. a live product that's getting real usage makes you a completely different candidate in that conversation.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "1. build the MVP first, then hire",
      answer: "this is the path i'd take, and the one i've watched work repeatedly.",
    },
    {
      question: "2. use a fractional technical lead while you search",
      answer: "a fractional CTO or a studio relationship isn't a permanent answer. but it can hold the technical function, architecture decisions, vendor choices, build-vs-buy calls, while you keep looking for the right person.",
    },
    {
      question: "3. hire for a specific AI layer, not a generalist",
      answer: "founding engineer is a broad term. in an AI startup, the technical surface area is actually quite narrow at first. you probably need:",
    },
  ],
};
