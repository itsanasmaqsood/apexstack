import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "signs-mvp-scope-is-too-big",
  title: "5 Signs Your MVP Scope Is Too Big Before You Pay Anyone",
  seoTitle: "5 Signs Your MVP Scope Is Too Big Before You Pay Anyone",
  description: "A bloated MVP scope is the most expensive mistake in early-stage development.",
  excerpt: "over-scoped MVPs are the most common and most expensive mistake in early-stage product development. the signs are almost always visible before you pay anyone.",
  category: "MVP & Startups",
  primaryKeyword: "signs mvp scope is too big",
  secondaryKeywords: [
    "v1 includes reporting analytics dashboard",
    "v1 includes team collaboration features",
    "youve described edge cases brief",
    "do spot these signs",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "a product that does two things well is not an MVP. It's two MVPs combined. the discipline of a single sentence forces the question: which of the two jobs is more important to validate first?",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "the scope doc was 34 pages.",
        },
        {
          type: "p",
          text: "the agency quote was $180,000. the timeline was eight months.",
        },
        {
          type: "p",
          text: "both were signs. i didn't read them correctly. i thought the comprehensiveness of the document reflected the quality of the thinking behind it. it reflected the opposite. It was a way of avoiding the hard decision of what to cut.",
        },
        {
          type: "p",
          text: "over-scoped MVPs are the most common and most expensive mistake in early-stage product development. the signs are almost always visible before you pay anyone. here's what to look for.",
        },
      ],
    },
    {
      heading: "1. you need more than one sentence to describe what the product does",
      blocks: [
        {
          type: "p",
          text: "\"it helps [user] do [job]\" should be the complete description of your MVP. if you need two sentences to cover the core functionality, or if the description requires qualifiers and special cases, the scope is almost certainly too broad.",
        },
        {
          type: "p",
          text: "a product that does two things well is not an MVP. It's two MVPs combined. the discipline of a single sentence forces the question: which of the two jobs is more important to validate first? the answer to that question is your MVP. everything else is v2.",
        },
        {
          type: "p",
          text: "this sign is the earliest and most reliable. if you can't write the sentence, the scope conversation hasn't happened yet.",
        },
      ],
    },
    {
      heading: "2. your agency quote is more than $40,000 for a v1",
      blocks: [
        {
          type: "p",
          text: "not a rule, but a signal. most well-scoped MVPs, products designed to validate a single core hypothesis with real users, can be built by a capable team for under $40,000 in 4-8 weeks.",
        },
        {
          type: "p",
          text: "when quotes come in significantly above that for a v1, one of three things is usually true: the scope includes features that belong in v2 or v3, the agency is over-engineering for your stage, or both.",
        },
        {
          type: "p",
          text: "a $150,000 quote for a v1 almost always means either the scope has grown to include the full product vision rather than the minimum test of it, or you're working with an agency whose model isn't optimised for early-stage. a launch sprint at ApexStack starts at $6,500. That's what a genuinely scoped MVP costs.",
        },
      ],
    },
    {
      heading: "3. your v1 includes a reporting or analytics dashboard",
      blocks: [
        {
          type: "p",
          text: "analytics dashboards are features for users who already have data to analyse. in v1, you have no data. your first users have no data. a dashboard that shows empty charts is a week of engineering time producing a feature nobody will use for months.",
        },
        {
          type: "p",
          text: "this pattern appears in almost every over-scoped MVP. founders imagine the product at scale: where users have weeks or months of data to look back on, and build for that version rather than the version where users are experiencing the product for the first time.",
        },
        {
          type: "p",
          text: "build the admin view for yourself (so you can see what's happening without querying the database). defer the user-facing analytics until users have data worth analysing, and until they're asking for it.",
        },
      ],
    },
    {
      heading: "4. your v1 includes team and collaboration features",
      blocks: [
        {
          type: "p",
          text: "the first five to ten customers of an early-stage product are almost always individuals. team features: shared workspaces, permission levels, inviting colleagues, team-level billing, are features for customers who've already committed to the product and want to expand it across their organisation.",
        },
        {
          type: "p",
          text: "at the MVP stage, no one has committed yet. the team features are a bet that users will love the product and want to share it. make the bet after you've confirmed users love the individual experience, not as a prerequisite to finding out.",
        },
        {
          type: "p",
          text: "team features are also architecturally complex: they touch auth, billing, data access, and notifications simultaneously. they take disproportionately long to build relative to their v1 value.",
        },
      ],
    },
    {
      heading: "5. you've described edge cases in your brief",
      blocks: [
        {
          type: "p",
          text: "edge cases in a brief are a sign that the scope conversation has shifted from \"what does this product need to do?\" to \"what could go wrong with what this product does?\" those are different conversations for different stages.",
        },
        {
          type: "p",
          text: "a v1 brief should describe the happy path: the user who shows up with the right intent, takes the expected actions, and gets value. edge cases: users who do unexpected things, data that doesn't fit the expected format, failures in third-party services: get handled in v2 and beyond, informed by what actually breaks in real use.",
        },
        {
          type: "p",
          text: "when a brief has edge case handling specified before any users have used the product, the scope has drifted from validation to production-hardening. those are different work items at different stages.",
        },
      ],
    },
    {
      heading: "what to do when you spot these signs",
      blocks: [
        {
          type: "p",
          text: "cut. not \"deprioritise\", actually remove from v1 scope with a note that goes into the v2 list.",
        },
        {
          type: "p",
          text: "the hard version of this is: decide which one thing the MVP exists to validate and remove everything that doesn't directly serve that validation. the features that survive are the ones a user must experience to understand the core value. everything else waits.",
        },
        {
          type: "p",
          text: "the founders who do this well tend to ship faster, learn more from their first users, and end up building a better v2 because they're working from real data rather than assumptions.",
        },
        {
          type: "p",
          text: "if you want a second opinion on your current scope, bring us what you have. we'll tell you honestly what belongs in v1 and what doesn't. that conversation is usually clarifying even when the answer is uncomfortable.",
        },
        {
          type: "p",
          text: "how many features are in your current v1 scope?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
