import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "building-saas-mvp-what-founders-get-wrong",
  title: "Building a SaaS MVP: What Founders Get Wrong in the First 6 Weeks",
  seoTitle: "Building a SaaS MVP: What Founders Get Wrong in the First 6",
  description: "Most SaaS MVPs fail not because the idea is wrong but because the first version is built wrong. Here's what founders get wrong in the first six weeks.",
  excerpt: "if you're building your first SaaS product, the mistakes i'm going to describe are not unique to us.",
  category: "MVP & Startups",
  primaryKeyword: "building saas mvp what founders get wrong",
  secondaryKeywords: [
    "treating billing as afterthought",
    "building happy path only",
    "delaying launch until its ready",
    "right saas mvp looks like",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "saas-development",
  keyTakeaway: "SaaS founders typically arrive at the MVP stage with a long feature list. Everything the product will eventually need. the temptation is to build as much of that list as possible before launch, so users aren't disappointed by a \"limited\" first version.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "we built 23 features in our first SaaS MVP.",
        },
        {
          type: "p",
          text: "users tried 4 of them.",
        },
        {
          type: "p",
          text: "we spent 14 weeks building something we thought covered every use case. turns out we were covering use cases nobody had. the 4 features users kept coming back to were the ones we almost cut for time.",
        },
        {
          type: "p",
          text: "if you're building your first SaaS product, the mistakes i'm going to describe are not unique to us. they're the same six or seven patterns i see in almost every first-time SaaS build, and most of them are fixable before you write a single line of code.",
        },
      ],
    },
    {
      heading: "building too many features before anyone's used it",
      blocks: [
        {
          type: "p",
          text: "the most common SaaS MVP mistake is also the most seductive: building a complete product before you've confirmed what \"complete\" means to your users.",
        },
        {
          type: "p",
          text: "SaaS founders typically arrive at the MVP stage with a long feature list. Everything the product will eventually need. the temptation is to build as much of that list as possible before launch, so users aren't disappointed by a \"limited\" first version.",
        },
        {
          type: "p",
          text: "the reality is that users aren't disappointed by fewer features. they're confused by too many. a SaaS product with one workflow that works perfectly converts better than a product with eight workflows that work adequately. the features you skip in v1 can be added in v2. the weeks you spend building them can't be recovered.",
        },
        {
          type: "p",
          text: "the right question is not \"what does the full product need?\" it's \"what is the one thing this product needs to do for the user to consider it worth paying for?\"",
        },
      ],
    },
    {
      heading: "treating billing as an afterthought",
      blocks: [
        {
          type: "p",
          text: "i've seen founders build beautiful SaaS products and then try to wire up stripe in the final two days before launch. that's when they discover that billing isn't an integration. It's a product decision.",
        },
        {
          type: "p",
          text: "how you handle trials, what happens when a card declines, whether you offer monthly and annual plans, how you handle upgrades and downgrades mid-cycle, these decisions touch the user experience at every point in the lifecycle. building them in at the end means rebuilding things you've already built.",
        },
        {
          type: "p",
          text: "billing needs to be in the architecture from day one. not a full billing platform, a basic, correct implementation of whatever model you're starting with. at ApexStack, billing is part of the default launch sprint scope because we've seen what happens when it isn't.",
        },
      ],
    },
    {
      heading: "no admin view, flying blind after launch",
      blocks: [
        {
          type: "p",
          text: "most SaaS MVPs ship without a meaningful admin view. founders think \"i'll add it later\": then spend the first month after launch emailing developers to pull database queries every time they want to know how many users signed up, which plan they're on, or why someone's account is broken.",
        },
        {
          type: "p",
          text: "an admin view doesn't need to be complex. user list, account status, plan, last active, a way to manually intervene when something breaks. four hours to build. saves twenty hours in the first month. this is the highest-leverage thing most SaaS MVPs skip.",
        },
      ],
    },
    {
      heading: "building for the happy path only",
      blocks: [
        {
          type: "p",
          text: "the happy path is: user signs up, completes onboarding, uses the core feature, comes back tomorrow.",
        },
        {
          type: "p",
          text: "the real path is: user signs up, gets confused by step 3 of onboarding, doesn't complete it, never activates, you never know why.",
        },
        {
          type: "p",
          text: "a SaaS MVP needs to handle the unhappy paths: incomplete onboarding, failed payments, users who sign up and never return, users who invite teammates who don't accept. not with full automation, but with enough visibility that you can see where things are breaking and intervene manually.",
        },
        {
          type: "p",
          text: "founders who skip this spend the first month after launch trying to do customer success with no data. founders who build it in have a fighting chance of actually retaining the users they work hard to acquire.",
        },
      ],
    },
    {
      heading: "delaying launch until it's \"ready\"",
      blocks: [
        {
          type: "p",
          text: "readiness is a feeling, not a state. SaaS products are never ready in the way founders mean when they say it. There's always one more thing to polish, one more edge case to handle, one more feature that would make it better.",
        },
        {
          type: "p",
          text: "the cost of launching too early is usually much lower than founders expect. early users are forgiving when the product is clearly early-stage and the founder is clearly responsive. the cost of launching too late, the weeks of feedback you missed, the assumptions you built on that turned out to be wrong, is usually much higher.",
        },
        {
          type: "p",
          text: "the right bar for a SaaS MVP is not \"complete.\" it's \"can this do the one job the user came for, reliably, without data loss or broken auth?\" if yes, ship it. everything else can come after you've learned something from real users.",
        },
      ],
    },
    {
      heading: "what the right SaaS MVP actually looks like",
      blocks: [
        {
          type: "p",
          text: "in practice, a SaaS MVP that's built right has four things: working auth (including password reset: users will forget their password on day one), the core product loop (one workflow, done well), billing with the right plan structure, and a basic admin view so you're not flying blind.",
        },
        {
          type: "p",
          text: "that's it. everything else is v2.",
        },
        {
          type: "p",
          text: "the founders who ship a v1 with those four things and launch it to 20 users learn more in two weeks than the founders who spend 14 weeks building a comprehensive product learn in the entire build phase. real users reveal things no amount of planning anticipates.",
        },
        {
          type: "p",
          text: "if you're about to start building your SaaS MVP and want a team that will push back on scope creep and make sure you launch with the right four things. That's a conversation worth having before you start. we've done this enough times to know where the six weeks go wrong.",
        },
        {
          type: "p",
          text: "what's the one thing your SaaS needs to do for someone to pay for it?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
