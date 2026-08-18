import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "launch-mvp-in-2-weeks",
  title: "Can You Really Launch an MVP in 2 Weeks?",
  seoTitle: "Can You Really Launch an MVP in 2 Weeks?",
  description: "Want to launch an MVP in 2 weeks? Here's what's actually possible, what gets cut, and how to ship something real without wasting months.",
  excerpt: "the question everyone asks when they're in that position is: can you actually launch an MVP in 2 weeks in 2025? and the real answer is: it depends entirely on what you mean by \"MVP\" and how much of your ego is attached to the feature list.",
  category: "MVP & Startups",
  primaryKeyword: "launch mvp in 2 weeks",
  secondaryKeywords: [
    "decision that makes breaks week build",
  ],
  published: "2026-06-11",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "but here's what i've learned building products for founders since i was 21, the things that get built in 48 hours are usually shells. auth, a landing page, stripe wired in. \" not actually testable with real users who have real problems.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "a founder slid into my dms on a wednesday. investor meeting locked for 14 days out. a notion doc, a loom walkthrough, and a cold sweat.",
        },
        {
          type: "p",
          text: "i read it twice and didn't reply until morning.",
        },
        {
          type: "p",
          text: "not because i wasn't interested, because i wanted to be honest before i was encouraging.",
        },
        {
          type: "p",
          text: "the question everyone asks when they're in that position is: can you actually launch an MVP in 2 weeks in 2025? and the real answer is: it depends entirely on what you mean by \"MVP\" and how much of your ego is attached to the feature list.",
        },
      ],
    },
    {
      heading: "the promise everyone's selling and the reality nobody talks about",
      blocks: [
        {
          type: "p",
          text: "there are services out there promising a working SaaS in 24 hours. an MVP in 48. a full product over a weekend.",
        },
        {
          type: "p",
          text: "some of them are real.",
        },
        {
          type: "p",
          text: "but here's what i've learned building products for founders since i was 21, the things that get built in 48 hours are usually shells. auth, a landing page, stripe wired in. technically \"working.\" not actually testable with real users who have real problems.",
        },
        {
          type: "p",
          text: "i'm not saying that's worthless. for some founders, a shell is exactly what they need to show momentum to an investor or collect emails before they build anything.",
        },
        {
          type: "p",
          text: "but if you're asking whether you can launch an MVP in 2 weeks that actually validates your core hypothesis with real users, yes, that's possible. i've done it. we've done it at ApexStack. but the path to getting there requires making one decision before anything else.",
        },
      ],
    },
    {
      heading: "the decision that makes or breaks a 2-week build",
      blocks: [
        {
          type: "p",
          text: "scope isn't a planning exercise. it's a values test.",
        },
        {
          type: "p",
          text: "every founder i've worked with says they've already cut the scope. then we get on a call and there are still seven features on the list. a dashboard. an admin panel. three user roles. an onboarding flow with email sequences.",
        },
        {
          type: "p",
          text: "i thought founders were just bad at scoping. i was wrong. the real issue is that most founders haven't decided what question they're actually trying to answer.",
        },
        {
          type: "p",
          text: "an MVP isn't a small product. it's a specific answer to a specific question.",
        },
        {
          type: "p",
          text: "\"will people pay for this?\" is a different question than \"can users complete this workflow without help?\" those require different builds. and until you know which question you're testing, you'll keep adding features that feel necessary but aren't.",
        },
        {
          type: "p",
          text: "before any build starts, write one sentence: this MVP exists to find out if [specific person] will [specific action].",
        },
        {
          type: "p",
          text: "if you can't write that sentence, you're not ready to build yet. and that's fine. But you should know it before you pay anyone.",
        },
      ],
    },
    {
      heading: "what actually fits in 2 weeks",
      blocks: [
        {
          type: "p",
          text: "i'll be direct about what's buildable in 14 days by a focused team using modern tooling.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "what fits",
      answer: "a single core workflow, end to end. one user type. one primary action. real data, not dummy content. basic auth. a deployable link you can put in front of real people.",
    },
    {
      question: "what doesn't fit",
      answer: "multi-role permission systems. billing with multiple plans and upgrade flows. mobile apps alongside a web app. integrations with more than one external service. anything that requires a compliance review.",
    },
  ],
};
