import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "how-to-scope-your-mvp-before-talking-to-agency",
  title: "How to Scope Your MVP Before Talking to Any Agency",
  seoTitle: "How to Scope Your MVP Before Talking to Any Agency",
  description: "Most founders walk into agency calls with the wrong scope, either too much or too little. Here's how to define your MVP scope before the conversation starts.",
  excerpt: "scoping an MVP is a different skill from speccing a product. most founders conflate them, and most agencies are happy to let them, because a bigger spec means a bigger quote.",
  category: "MVP & Startups",
  primaryKeyword: "how to scope your mvp before talking to agency",
  secondaryKeywords: [
    "five questions scope needs answer",
    "features most founders overbuild",
    "one line scope test",
    "bring first agency call",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "a scope is not a list of features. a scope is a decision about what problem you're solving, for whom, and what the minimum set of functionality is that lets a real user experience that solution.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "i walked into my first agency call with a 47-page product spec.",
        },
        {
          type: "p",
          text: "they quoted me $280,000 and nine months.",
        },
        {
          type: "p",
          text: "i thought i'd been thorough. i had wireframes, user stories, edge cases, integration requirements, admin flows, notification logic. i'd spent six weeks on that document. what i hadn't done was scope the product. I'd described a version of it that was fully built, not a version that could prove the idea in the fastest possible way.",
        },
        {
          type: "p",
          text: "scoping an MVP is a different skill from speccing a product. most founders conflate them, and most agencies are happy to let them, because a bigger spec means a bigger quote.",
        },
      ],
    },
    {
      heading: "what MVP scope actually is",
      blocks: [
        {
          type: "p",
          text: "a scope is not a list of features. a scope is a decision about what problem you're solving, for whom, and what the minimum set of functionality is that lets a real user experience that solution.",
        },
        {
          type: "p",
          text: "the word \"minimum\" is doing a lot of work there. not minimum as in \"rough\" or \"incomplete\", minimum as in \"removes everything that doesn't directly prove the core value.\" a scoped MVP should be polished enough that users take it seriously. it just shouldn't have anything that users don't need in order to experience the thing you're testing.",
        },
        {
          type: "p",
          text: "the question that cuts through most scoping debates: if this feature doesn't exist, can users still experience the core value of the product? if yes, cut it from v1.",
        },
      ],
    },
    {
      heading: "five questions your scope needs to answer",
      blocks: [
        {
          type: "p",
          text: "who is the first user? not a persona, a specific type of person. the more specific, the better. \"a non-technical founder trying to ship their first SaaS product\" is more useful than \"startup founders.\" specific users have specific workflows, specific frustrations, and specific definitions of value.",
        },
        {
          type: "p",
          text: "what is the one job this product does for them? one job. not a primary job and several supporting ones, one job. the job that, if this product does it reliably, makes a user willing to pay. write it as a sentence: \"it helps [user] do [thing] without [current pain].\"",
        },
        {
          type: "p",
          text: "what does the user do in the first five minutes? walk through the product experience from landing page to first moment of value. every step that isn't necessary in those five minutes is probably out of scope for v1. the onboarding flow is where most MVPs leak scope the fastest: founders add setup steps, tutorials, and options that delay users reaching the thing they came for.",
        },
        {
          type: "p",
          text: "what does success look like after 30 days? a specific, measurable signal that the MVP is working. not \"users like it\", a number. 20 active weekly users. 5 paying customers. 60% completion rate on the core workflow. this question forces you to define what you're actually trying to prove, which in turn tells you what the MVP needs to include.",
        },
        {
          type: "p",
          text: "what are you explicitly not building in v1? this is as important as what you are building. write it down. the list of explicitly deferred things protects you in two ways: it prevents scope creep during the build, and it gives an agency a clear signal that you've thought carefully about tradeoffs. founders who have a \"not in v1\" list are easier and faster to work with.",
        },
      ],
    },
    {
      heading: "the features most founders overbuild",
      blocks: [
        {
          type: "p",
          text: "there are a few categories that appear in almost every over-scoped MVP.",
        },
        {
          type: "p",
          text: "advanced settings and customisation. users won't touch them in the first month. defaults work fine for v1. team and collaboration features. your first users are probably individuals. add team functionality when you have users asking for it, not before. notification systems. a simple email works. a full notification centre with preferences and delivery options is a month of work for something users won't configure anyway. reporting and analytics for users. build it for yourself first, your admin view. users need their own dashboard eventually, not in week one.",
        },
        {
          type: "p",
          text: "the pattern: anything that's about power users, scale, or future growth is almost certainly out of scope for an MVP. those features exist because you're imagining the product at its best. the MVP exists to find out whether \"at its best\" is worth building toward.",
        },
      ],
    },
    {
      heading: "the one-line scope test",
      blocks: [
        {
          type: "p",
          text: "before you walk into any agency call, write one sentence that captures your MVP: \"this product lets [specific user] [do the core job] so that [measurable outcome].\"",
        },
        {
          type: "p",
          text: "if you can't write that sentence, you're not ready to scope the build yet. if the sentence requires more than one \"so that,\" you're probably describing more than one product.",
        },
        {
          type: "p",
          text: "the agencies worth working with will take that sentence and help you build a scope document around it. the ones that take your 47-page spec and quote you $280,000 are building for the spec, not for the idea.",
        },
      ],
    },
    {
      heading: "what to bring to the first agency call",
      blocks: [
        {
          type: "p",
          text: "not a full spec. a scope: the one-liner, the first five minutes of user experience, the explicit not-in-v1 list, and your 30-day success metric.",
        },
        {
          type: "p",
          text: "that's enough for any good agency to have a real conversation with you. it demonstrates that you've thought clearly about what you're building, which makes the scoping process faster and the final product more likely to be what you actually needed.",
        },
        {
          type: "p",
          text: "at ApexStack, our scoping conversations typically take 30-60 minutes. we start from the one-liner and work down: what's in v1, what's explicitly out, and what the user needs to experience in the first five minutes. founders who've done the work before the call get to a clear scope faster, which means the build starts sooner and finishes closer to what they envisioned.",
        },
        {
          type: "p",
          text: "if you want to talk through your scope before you talk to anyone else. That conversation is free and usually sharpening. most founders leave with a shorter scope than they came in with, which is almost always the right outcome.",
        },
        {
          type: "p",
          text: "what's the one job your MVP needs to do for a user to consider it worth paying for?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
