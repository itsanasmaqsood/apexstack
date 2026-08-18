import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "apexstack-4-6-week-mvp-process-what-happens",
  title: "ApexStack's 4-6 Week MVP Process: What Actually Happens",
  seoTitle: "ApexStack's 4-6 Week MVP Process: What Actually Happens",
  description: "Most agencies say they build in 4-6 weeks. Here's exactly what happens in ApexStack's sprint: week by week, who does what, and what you get at the end.",
  excerpt: "this is exactly how our process works at ApexStack. every week, what we're building, what we need from you, and why the sequence is the way it is.",
  category: "MVP & Startups",
  primaryKeyword: "apexstack 4 6 week mvp process what happens",
  secondaryKeywords: [
    "before week one scoping call",
    "week one design architecture",
    "weeks two three core build",
    "week four integration internal qa",
    "happens after launch",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "before anything is built, we spend 45-90 minutes understanding what you're building and why. not a requirements gathering exercise, a product conversation. we're trying to understand the user, the core job the product does, what's explicitly not in v1, and what success looks like after 30 days.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "most agencies say they build MVPs in 4-6 weeks.",
        },
        {
          type: "p",
          text: "very few explain what that actually means week by week: what they're doing, what you're responsible for, and what \"done\" looks like at the end.",
        },
        {
          type: "p",
          text: "that ambiguity is where most agency relationships start to go wrong. founders don't know what to expect, so they either over-interfere or under-communicate. agencies don't set expectations clearly enough, so timelines slip quietly until someone is unhappy.",
        },
        {
          type: "p",
          text: "this is exactly how our process works at ApexStack. every week, what we're building, what we need from you, and why the sequence is the way it is.",
        },
      ],
    },
    {
      heading: "before week one: the scoping call",
      blocks: [
        {
          type: "p",
          text: "before anything is built, we spend 45-90 minutes understanding what you're building and why. not a requirements gathering exercise, a product conversation. we're trying to understand the user, the core job the product does, what's explicitly not in v1, and what success looks like after 30 days.",
        },
        {
          type: "p",
          text: "from this conversation we produce a scope document: the features in v1, the features explicitly deferred, the tech stack, and a build timeline. you review it, we align on it, and we don't start building until we're both confident it reflects what you actually need.",
        },
        {
          type: "p",
          text: "this call is the most important part of the process. everything that goes wrong in a development engagement can usually be traced back to something that wasn't clarified here.",
        },
      ],
    },
    {
      heading: "week one: design and architecture",
      blocks: [
        {
          type: "p",
          text: "the first week is design and technical planning, happening simultaneously, not sequentially.",
        },
        {
          type: "p",
          text: "design: wireframes for the core flows, followed by high-fidelity screens for the components that matter most (onboarding, the core product loop, billing, and the main dashboard if there is one). we share these with you daily, not in one large review at the end of the week. small feedback loops throughout are faster than one big revision at the end.",
        },
        {
          type: "p",
          text: "architecture: the engineering lead is making technical decisions alongside design, database schema, authentication approach, third-party integrations, deployment setup. these decisions get made in week one because changing them in week three is significantly more expensive.",
        },
        {
          type: "p",
          text: "what we need from you this week: fast feedback on design. \"this looks right\" or \"this doesn't feel like the product\" within a few hours, not a few days. the faster the design feedback loop, the faster everything that depends on it moves.",
        },
      ],
    },
    {
      heading: "weeks two and three: the core build",
      blocks: [
        {
          type: "p",
          text: "this is where the product gets built. auth, the database, the core product loop, billing integration, and any AI features in scope. we push to a staging environment at the end of each day so you can see real working software, not just screenshots.",
        },
        {
          type: "p",
          text: "the build follows the design. changes to design at this stage create rework. We manage this by flagging early if something we're building doesn't match what was designed, rather than discovering it at review.",
        },
        {
          type: "p",
          text: "what we need from you this week: access to any third-party accounts we're integrating with (stripe, openai, whatever's in scope), prompt responses when something doesn't look right on staging, and restraint on scope additions. week two is when the \"what if we also added..\" conversations happen most often. we document those requests for v2 rather than incorporating them mid-build.",
        },
      ],
    },
    {
      heading: "week four: integration and internal QA",
      blocks: [
        {
          type: "p",
          text: "the features are built. week four is about making the product work as a system rather than as a collection of features.",
        },
        {
          type: "p",
          text: "end-to-end user flows get tested, sign up, onboard, use the core feature, hit a billing event, come back the next day. edge cases get handled. the admin view gets built so you can see what's happening in the product after launch. the staging environment gets production-equivalent configuration so we're not surprised by environment differences at launch.",
        },
        {
          type: "p",
          text: "what we need from you this week: your time on staging. walk through the product as a real user would. tell us what feels wrong: not just bugs, but things that feel confusing or incomplete. your product instinct at this stage is more useful than ours because you know your users better than we do.",
        },
      ],
    },
    {
      heading: "weeks five and six: polish, launch prep, and handoff",
      blocks: [
        {
          type: "p",
          text: "not every sprint needs six weeks. if weeks one through four go smoothly, we can launch at the end of week four. weeks five and six are used when there's meaningful polish left, integrations that took longer than expected, or a founder who needs more time on the staging environment before they're comfortable launching.",
        },
        {
          type: "p",
          text: "the final week includes: production deployment, domain setup, performance checks, and the handoff package: source code, credentials documentation, a walkthrough of the codebase for whoever maintains it next, and a recorded walkthrough of the admin features.",
        },
        {
          type: "p",
          text: "what you receive at the end: a production-ready application with a codebase you own, running on infrastructure you control. we don't lock you into our hosting or our tooling. the product is yours from day one; we just build it.",
        },
      ],
    },
    {
      heading: "what happens after launch",
      blocks: [
        {
          type: "p",
          text: "the two weeks after launch are usually the most active for a founder: user feedback starts coming in, bugs surface that didn't appear in QA, and the feature requests that seemed abstract during scoping become concrete when real people are using the product.",
        },
        {
          type: "p",
          text: "we stay available for two weeks post-launch for bug fixes included in the sprint scope. after that, ongoing work runs as a monthly retainer or on a project basis, whatever makes sense for where you are.",
        },
        {
          type: "p",
          text: "the founders who get the most out of the launch sprint are the ones who treat it as a launch, not a finish line. the sprint gets you something real in market. what you learn from real users in the first 30 days is what shapes what gets built next.",
        },
        {
          type: "p",
          text: "if you want to see how this process applies to your specific product. The scoping conversation is where we start. it's free, it's usually clarifying even if you don't end up working with us, and it'll tell you quickly whether the timeline and scope are a fit for what you're building.",
        },
        {
          type: "p",
          text: "what does the product you're trying to build need to do by week six?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
