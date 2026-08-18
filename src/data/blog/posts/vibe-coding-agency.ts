import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "vibe-coding-agency",
  title: "Vibe Coding Agency: What to Look For Before You Hire",
  seoTitle: "Vibe Coding Agency: What to Look For Before You Hire",
  description: "Looking for a vibe coding agency? Here's what separates a studio that ships from one that just vibes, and what to ask before you pay anyone a dollar.",
  excerpt: "that's the thing nobody tells you when you start searching for a vibe coding agency. the output looks identical whether someone actually built it or just prompted their way to a convincing screenshot.",
  category: "Choosing a Partner",
  primaryKeyword: "vibe coding agency",
  secondaryKeywords: [
    "the developer who added ai to their workflow",
    "the traditional agency that added vibe coding to its homepage",
    "vibe coding it isnt",
  ],
  published: "2026-06-15",
  authorId: "leadership-01",
  serviceSlug: "product-engineering",
  keyTakeaway: "vibe coding is what happens when a developer uses AI tools: cursor, claude, v0, lovable, to write large chunks of code through prompts and iteration instead of typing every line by hand. it's genuinely fast. a competent developer using these tools can compress a 10-week build into 2-3 weeks without lying about it.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "a founder sent me a loom last month. six minutes of him walking through a product a vibe coding agency had \"shipped\" for him. the ui looked fine. clean, even. but every button that mattered, the ones tied to actual user logic, was wired to nothing. placeholder functions. comments where the code should have been.",
        },
        {
          type: "p",
          text: "he'd paid $4,200 and had a demo, not a product.",
        },
        {
          type: "p",
          text: "that's the thing nobody tells you when you start searching for a vibe coding agency. the output looks identical whether someone actually built it or just prompted their way to a convincing screenshot. until a real user tries to log in, pay, or do the one thing your product exists to do.",
        },
      ],
    },
    {
      heading: "what vibe coding actually is, and what it isn't",
      blocks: [
        {
          type: "p",
          text: "vibe coding is what happens when a developer uses AI tools: cursor, claude, v0, lovable, to write large chunks of code through prompts and iteration instead of typing every line by hand. it's genuinely fast. a competent developer using these tools can compress a 10-week build into 2-3 weeks without lying about it.",
        },
        {
          type: "p",
          text: "but \"vibe coding agency\" has become a catch-all term. it now describes everything from a senior engineer using AI to move faster, to a 19-year-old with a cursor subscription and a Stripe checkout page. both will tell you they build MVPs. the gap between their outputs is not small.",
        },
        {
          type: "p",
          text: "the word \"vibe\" doesn't mean casual. it means the developer is riding the AI, guiding it, correcting it, making architectural decisions the AI can't make. when that human layer is missing, you get code that demos but doesn't hold.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "the prompter",
      answer: "takes your brief, opens bolt.new or lovable, pastes your requirements, and sends you whatever comes out. turnaround is fast because there's almost no human work happening. the code is usually brittle. It works in the exact scenario it was prompted for and breaks the moment a user does something unexpected. no error handling. no edge cases. no understanding of what the app actually needs to do at scale.",
    },
    {
      question: "the developer who added AI to their workflow",
      answer: "this is what a real vibe coding agency actually is. an engineer who knows how to build: who understands auth flows, database schemas, api design, error states, but uses AI to move 3x faster than before. they're not handing the wheel to the AI. they're using it to handle the repetitive scaffolding so they can focus on the parts that require judgment.",
    },
    {
      question: "the traditional agency that added \"vibe coding\" to its homepage",
      answer: "spotted by: a beautifully designed website, enterprise pricing ($15k+), and a sales process that takes two weeks before anyone writes a single line of code. the AI tools are real but they're wrapped in so much process that the speed advantage evaporates. you're paying agency rates for freelancer-speed output, and the account manager in the middle doesn't know what cursor is.",
    },
  ],
};
