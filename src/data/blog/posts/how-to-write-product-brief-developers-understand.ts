import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "how-to-write-product-brief-developers-understand",
  title: "How to Write a Product Brief That Developers Actually Understand",
  seoTitle: "How to Write a Product Brief That Developers Actually",
  description: "Most product briefs describe a solution. Developers need a problem.",
  excerpt: "without the why, a developer is guessing at intent. they'll build what you described, not what you needed.",
  category: "Choosing a Partner",
  primaryKeyword: "how to write product brief developers understand",
  secondaryKeywords: [
    "most briefs dont work",
    "five elements brief developers can act",
    "leave out brief",
    "one page test",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "technical-consulting",
  keyTakeaway: "most product briefs are solution documents. they describe what the product looks like: screens, features, interactions, without explaining the problem the product is solving or the user it's solving it for.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "i sent a developer a 12-page document.",
        },
        {
          type: "p",
          text: "he built something that didn't look anything like what i meant.",
        },
        {
          type: "p",
          text: "the document wasn't vague. It was detailed. screenshots of competitor products, descriptions of every screen, notes on the colour palette. what it didn't have was any explanation of why. why those screens? why that flow? what problem was the user having that this design was supposed to solve?",
        },
        {
          type: "p",
          text: "without the why, a developer is guessing at intent. they'll build what you described, not what you needed. the gap between those two things is where most agency relationships go wrong.",
        },
      ],
    },
    {
      heading: "why most briefs don't work",
      blocks: [
        {
          type: "p",
          text: "most product briefs are solution documents. they describe what the product looks like: screens, features, interactions, without explaining the problem the product is solving or the user it's solving it for.",
        },
        {
          type: "p",
          text: "developers can build from solution documents. the problem is that building correctly from a solution document requires the developer to understand the intent behind every decision. when they don't: and they often don't, because the intent is in your head, not on the page. They make substitutions. reasonable substitutions, from their perspective. wrong ones, from yours.",
        },
        {
          type: "p",
          text: "a brief that works starts with the problem, describes the user, and only then describes the solution. the solution section of a good brief is shorter than most founders expect, because a lot of what gets put into solution documents is actually implementation detail that should be left to the people doing the implementation.",
        },
      ],
    },
    {
      heading: "the five elements of a brief developers can act on",
      blocks: [
        {
          type: "p",
          text: "the user and their problem. one paragraph. who is this person, what are they trying to do, and what's making it hard right now? specific enough that a developer could describe the user's morning routine. not \"startup founders\", \"a non-technical founder managing two developers for the first time, trying to stay informed about progress without micromanaging.\"",
        },
        {
          type: "p",
          text: "the core job the product does. one sentence. the thing the product enables the user to do that they couldn't do (or couldn't do easily) before. not a list of features, the job. \"lets founders see what's been built today without scheduling a call.\"",
        },
        {
          type: "p",
          text: "the flows that matter most. not every screen, the two or three flows that are central to the value proposition. describe them as user journeys: \"user opens the app, sees today's update, taps to add a comment, developer is notified.\" that's more useful than a screen-by-screen wireframe because it communicates intent, not just layout.",
        },
        {
          type: "p",
          text: "what's explicitly out of scope. the list of things you've decided not to build in v1 is as important as the list of things you are building. it signals that you've made deliberate tradeoffs and helps developers resist the temptation to add things that seem obviously useful but aren't in scope.",
        },
        {
          type: "p",
          text: "how you'll know it's working. the measurable success condition. not \"users like it\", a number. 80% of users completing onboarding. average session length of more than five minutes. ten users who've used the core feature three times in a week. this tells a developer what matters and calibrates the quality bar for the build.",
        },
      ],
    },
    {
      heading: "what to leave out of the brief",
      blocks: [
        {
          type: "p",
          text: "technology choices, unless you have a strong reason for a specific constraint. colour palettes and typography, unless you have brand guidelines that must be followed. detailed UI specifications for secondary screens. anything about future versions.",
        },
        {
          type: "p",
          text: "the instinct to include everything comes from wanting to feel prepared. but a brief that specifies too much signals to a developer that you want execution, not thinking. the best agencies will push back on over-specified briefs, not because they're lazy but because a lot of what gets specified in detail turns out to be wrong once real users are involved.",
        },
      ],
    },
    {
      heading: "the one-page test",
      blocks: [
        {
          type: "p",
          text: "a good product brief fits on one page. not because brevity is virtuous, but because if you can't describe the user, the problem, the core job, and the success condition in one page, you probably haven't made the hard decisions yet.",
        },
        {
          type: "p",
          text: "the hard decisions are: who is the user, really? what is the one job this does for them? and what am I willing to leave for v2? those decisions are what scoping is. the brief is just the record of the decisions you've made.",
        },
        {
          type: "p",
          text: "at ApexStack, we go through the brief with every founder before the build starts. sometimes the brief arrives complete and we start building quickly. more often, the brief surfaces things that need to be decided, and that's exactly the right time to decide them. bring us what you have and we'll work through it together.",
        },
        {
          type: "p",
          text: "what's the one sentence that describes the job your product does?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
