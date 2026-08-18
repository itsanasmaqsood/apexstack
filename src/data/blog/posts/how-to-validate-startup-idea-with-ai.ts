import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "how-to-validate-startup-idea-with-ai",
  title: "How to Validate a Startup Idea with AI (Before You Build)",
  seoTitle: "How to Validate a Startup Idea with AI (Before You Build)",
  description: "Learn how to validate your startup idea with AI the right way, before you spend months building something nobody wants. Real tactics, real traps, no fluff.",
  excerpt: "AI tools have made it incredibly easy to feel like you're doing validation when you're actually just getting reassurance. there's a difference.",
  category: "AI Engineering",
  primaryKeyword: "how to validate startup idea with ai",
  secondaryKeywords: [
    "1 is the problem real or just relatable",
    "2 who has this problem badly enough to pay",
    "3 what are they doing about it today",
    "4 would they pay what you need to charge",
  ],
  published: "2026-06-20",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "here's the trap. you paste your idea into ChatGPT. it tells you the market is large, the timing is right, the competition is manageable.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "a founder came to me last year. six months of work. $40,000 spent. 2,000 lines of code. and when he finally showed it to potential users, twelve of the first fifteen said they already had a workaround they preferred.",
        },
        {
          type: "p",
          text: "he hadn't validated anything. he'd just built.",
        },
        {
          type: "p",
          text: "AI tools have made it incredibly easy to feel like you're doing validation when you're actually just getting reassurance. there's a difference. and most founders never figure that out until the money's gone.",
        },
      ],
    },
    {
      heading: "why most AI validation is just expensive flattery",
      blocks: [
        {
          type: "p",
          text: "here's the trap. you paste your idea into ChatGPT. it tells you the market is large, the timing is right, the competition is manageable. you get a score of 78/100. you feel good. you start building.",
        },
        {
          type: "p",
          text: "i've seen this pattern more times than i can count.",
        },
        {
          type: "p",
          text: "what that AI just did wasn't validation. it was autocomplete with a confidence interval. language models are trained to be helpful, and \"helpful\" often means agreeable. there's no skin in the game. no real data. no actual users being asked if they'd pay.",
        },
        {
          type: "p",
          text: "real validation has one job: find the specific reason your idea fails before you build it.",
        },
        {
          type: "p",
          text: "that's the frame. everything else follows from it.",
        },
      ],
    },
    {
      heading: "the four questions that actually matter",
      blocks: [
        {
          type: "p",
          text: "before you open any AI tool, write down your answers to these four questions. not what you hope is true. what you know is true, right now, with evidence.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "1. is the problem real, or just relatable?",
      answer: "relatable problems feel universal. \"founders waste time on admin tasks.\" sure. but real problems have specificity. how much time, exactly? what task? what does the founder do instead? what's it cost them when it doesn't get done?",
    },
    {
      question: "2. who has this problem badly enough to pay?",
      answer: "this isn't a persona exercise. it's a targeting question. \"small business owners\" is not a customer. \"independent yoga studio owners in the US who run classes under 20 people and hate chasing payment\" is closer. the tighter the definition, the faster the validation.",
    },
    {
      question: "3. what are they doing about it today?",
      answer: "this one kills the most ideas. if people have the problem you think they have, they're already doing something about it. spreadsheets, manual workarounds, paying a VA, suffering silently. if you can't find the workaround, the problem probably isn't urgent enough.",
    },
    {
      question: "4. would they pay what you need to charge?",
      answer: "not \"would they pay something.\" would they pay $49/month, $299 one-time, $2,000/year, whatever your model requires to be a real business. the answer has to be yes and believable, or everything else is just a hobby.",
    },
    {
      question: "use it to steelman the case against your idea",
      answer: "instead of asking \"is my idea good,\" ask: \"what are the three strongest reasons this idea fails in year one?\" ask it to argue against you. ask it to roleplay as a skeptical investor who has seen 200 similar pitches and passed on all of them. ask it what the most common failure mode is for companies in this category.",
    },
    {
      question: "use it to map the competitive landscape fast",
      answer: "ask AI to help you find every direct competitor, every indirect competitor, and every manual workaround people use instead of a product. be specific. \"what tools do freelance graphic designers currently use to manage client approvals?\" is a better prompt than \"what are competitors in the design space?\"",
    },
    {
      question: "use it to write your customer interview script",
      answer: "this is one of the most underrated uses. ask AI to generate 10 non-leading interview questions for a specific customer type. then refine them. the goal is questions that reveal behavior, not questions that invite agreement. \"have you ever struggled with X?\" is a bad question. \"walk me through the last time you had to deal with X: what did you do?\" is a good one.",
    },
    {
      question: "use it to do the demand math",
      answer: "ask it to help you size the market from the bottom up. not TAM/SAM/SOM theater. actual math. \"if i charge $99/month and i need $10,000 MRR to be default alive, how many customers is that? do i believe i can reach 102 customers in 12 months in this market?\"",
    },
  ],
};
