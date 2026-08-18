import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "babybites-meal-planner-app-case-study",
  title:
    "BabyBites: Building a Meal Generator for Parents Who Have One Hand Free",
  seoTitle: "BabyBites App Case Study",
  description:
    "How we built an AI meal generator for parents, with voice input, offline storage, printable plans and an admin panel behind it.",
  excerpt:
    "The user is holding a child. That single fact decided the input method, the offline behaviour and half the interface.",
  category: "Case Studies",
  primaryKeyword: "ai meal planner app development",
  secondaryKeywords: [
    "parenting app development",
    "voice input mobile app",
    "offline first flutter app",
    "subscription app development",
  ],
  published: "2026-08-11",
  authorId: "leadership-01",
  serviceSlug: "mobile-app-development",
  keyTakeaway:
    "BabyBites generates meals for young children from what a parent has available. The design constraint that shaped it is physical rather than technical: the person using it is usually holding a child, so the app supports speech input, stores data locally so it works in a kitchen with poor signal, and can produce a printable plan for the fridge door.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "A parent needs to feed a small person something reasonable, now, from what is in the cupboard. BabyBites generates the meal.",
        },
        {
          type: "p",
          text: "That is a straightforward premise. The difficulty is that the moment of use is one of the least convenient moments in the day, and an interface that assumes calm attention and two free hands will not be used.",
        },
        {
          type: "callout",
          text: "Design for the moment of use, not the moment of demo. The demo happens at a desk. The use happens at 5pm with a toddler attached to one leg.",
        },
      ],
    },
    {
      heading: "Three decisions that came from one observation",
      blocks: [
        {
          type: "h3",
          text: "Speech, because typing needs two hands",
        },
        {
          type: "p",
          text: "Speech to text is in the app for a practical reason rather than a novelty one. A parent can say what is in the fridge while doing something else. Typing it requires putting the child down.",
        },
        {
          type: "h3",
          text: "Local storage, because kitchens have bad signal",
        },
        {
          type: "p",
          text: "A local database keeps saved meals and plans available regardless of connectivity. Kitchens are frequently the worst-connected room in a home, and an app that spins on a loading state at the exact moment it is needed will be deleted.",
        },
        {
          type: "h3",
          text: "Printing, because the fridge door is a real interface",
        },
        {
          type: "p",
          text: "Plans can be generated as documents and printed. It is easy to dismiss this as unnecessary in a mobile app, and it is one of the most-used features in this category, because a sheet on the fridge is visible to everyone in the house without anyone unlocking a phone.",
        },
        {
          type: "p",
          text: "The general lesson: the best output format is not always another screen.",
        },
      ],
    },
    {
      heading: "The parts nobody sees",
      blocks: [
        {
          type: "table",
          head: ["Surface", "Stack", "Purpose"],
          rows: [
            [
              "Mobile app",
              "Flutter with Riverpod and typed routing",
              "Generation, saved plans, reminders, subscription",
            ],
            [
              "Admin panel",
              "Next.js with Supabase and charts",
              "Content and member oversight",
            ],
            [
              "Marketing site",
              "Web",
              "Acquisition and store links",
            ],
          ],
        },
        {
          type: "p",
          text: "Alongside the code the repository carries an audit document, a test plan, recorded test results, store listing copy and store optimisation metadata. That is the unglamorous half of shipping a consumer app, and its absence is why many good apps never rank.",
        },
        {
          type: "h3",
          text: "Sign-in, billing and updates are their own project",
        },
        {
          type: "p",
          text: "Native sign-in on both platforms, cross-platform billing, in-app update prompts, review prompts, push notifications, deep links and scheduled reminders across time zones. None of these are features a founder writes on a roadmap, and together they are a meaningful share of the build.",
        },
        {
          type: "p",
          text: "Time zones deserve a specific mention. A reminder that fires at the right hour in the wrong zone is worse than no reminder, because it wakes somebody up.",
        },
      ],
    },
    {
      heading: "What we would tell you if you were building this",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Describe the physical situation of your user before you design a screen. One hand, poor signal, background noise and no patience is a specification, and it produces different software than a persona document does.",
            "Consider outputs that leave the phone. Print, share and export are cheap to add and frequently become the feature people describe to their friends.",
            "Plan the store metadata alongside the app. Listing copy, screenshots and keyword work decide whether anyone finds it, and they are easier to do while the product is fresh in mind.",
            "Treat billing, sign-in and updates as a workstream with its own estimate. Folding them into a feature ticket is how timelines slip in the last fortnight.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why does a meal app need voice input?",
      answer:
        "Because the person using it is usually holding a child. Speaking what is in the fridge takes one hand and no attention. Typing it requires two hands and a flat surface, which is exactly what the user does not have at that moment.",
    },
    {
      question: "Why build offline support into a simple consumer app?",
      answer:
        "Kitchens are often the worst-connected room in a house, and the app is used in the kitchen. Local storage means saved meals and plans are available regardless of signal, so the app works at the moment it is actually needed.",
    },
    {
      question: "Is printing worth building into a mobile app?",
      answer:
        "In this category, yes. A plan on the fridge door is visible to everyone in the household without unlocking a phone. The best output format is not always another screen, and print is inexpensive to add.",
    },
    {
      question: "How much of the work is invisible?",
      answer:
        "A substantial share. Native sign-in on both platforms, cross-platform billing, update and review prompts, push notifications, deep links and time-zone-correct scheduled reminders together account for a meaningful part of the build and appear on no roadmap.",
    },
    {
      question: "Why does the project include an admin panel?",
      answer:
        "Because content and members need oversight, and doing that through direct database access does not scale past the first few weeks. A separate web panel with proper charts and controls is the difference between running a product and maintaining a database.",
    },
  ],
};
