import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "how-to-build-marketplace-mvp-that-doesnt-die",
  title: "How to Build a Marketplace MVP That Doesn't Die at Launch",
  seoTitle: "How to Build a Marketplace MVP That Doesn't Die at Launch",
  description: "Marketplace MVPs fail for one reason more than any other.",
  excerpt: "this is the marketplace problem. it's well-documented and still claims most marketplace MVPs.",
  category: "MVP & Startups",
  primaryKeyword: "how to build marketplace mvp that doesnt die",
  secondaryKeywords: [
    "pick one side first",
    "manual matching before algorithm",
    "marketplace mvp needs",
    "mistake over engineering trust mechanisms",
    "build at apexstack marketplace mvp",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "every marketplace has two sides. the instinct is to build for both simultaneously, a full experience for suppliers and a full experience for buyers. the right move is to build deeply for one side and manually serve the other.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "marketplace MVPs fail for one reason more than any other.",
        },
        {
          type: "p",
          text: "you build for both sides before either side exists.",
        },
        {
          type: "p",
          text: "you spend three months building the supplier experience and the buyer experience, the matching algorithm, the review system, the payment flow. you launch. nobody shows up. not because the product is bad: because you don't have supply without demand, and you don't have demand without supply, and you've built a platform for a market that doesn't exist yet.",
        },
        {
          type: "p",
          text: "this is the marketplace problem. it's well-documented and still claims most marketplace MVPs. here's what to do instead.",
        },
      ],
    },
    {
      heading: "pick one side first",
      blocks: [
        {
          type: "p",
          text: "every marketplace has two sides. the instinct is to build for both simultaneously, a full experience for suppliers and a full experience for buyers. the right move is to build deeply for one side and manually serve the other.",
        },
        {
          type: "p",
          text: "the side you build for first is the constrained side, the side that's harder to acquire and without which the marketplace doesn't function. for most marketplaces, that's supply. you can run ads to acquire buyers. you can't manufacture supply that doesn't exist.",
        },
        {
          type: "p",
          text: "build the supplier-side product first: the onboarding, the listing creation, the availability or inventory management, the payout mechanism. make it genuinely good, good enough that a supplier tells another supplier. then acquire demand manually, before you've built any buyer-side product at all.",
        },
      ],
    },
    {
      heading: "manual matching before the algorithm",
      blocks: [
        {
          type: "p",
          text: "the matching algorithm is not an MVP feature. it's a v3 feature at the earliest.",
        },
        {
          type: "p",
          text: "in your first hundred transactions, you have enough context to match manually: you know your suppliers, you know what buyers are asking for, and you can make the match yourself, by hand, faster than an algorithm built on insufficient data would.",
        },
        {
          type: "p",
          text: "manual matching also teaches you things an algorithm would hide. which suppliers get re-requested? which buyer requests never get matched and why? where does the match feel right but the transaction still fails? those patterns are what eventually become the algorithm. you can't discover them by building the algorithm first.",
        },
        {
          type: "p",
          text: "the operational cost of manual matching in early days is real. it doesn't scale. it's not supposed to. it exists to generate the transactions and the data that let you build the scaled version with confidence.",
        },
      ],
    },
    {
      heading: "what your marketplace MVP actually needs",
      blocks: [
        {
          type: "p",
          text: "supplier onboarding and profile: a way for suppliers to represent themselves and what they're offering. this should be genuinely good, suppliers are your most important early users and their experience determines whether you have supply.",
        },
        {
          type: "p",
          text: "a way for buyers to request or browse: not a full search and filter system, a simple listing or a form that captures what a buyer needs. the sophistication comes later when you understand what buyers actually search for.",
        },
        {
          type: "p",
          text: "payment infrastructure: this is not optional, even in v1. the moment money moves through your platform, even manually. You need proper payment rails. stripe connect or equivalent. do not build a marketplace MVP that collects payment outside the platform. it creates trust problems that are very hard to undo.",
        },
        {
          type: "p",
          text: "communication between sides: a way for suppliers and buyers to coordinate before and after a match. not a full messaging system, email notifications work in v1. what matters is that communication happens on record, not in text messages between parties who found each other through your platform.",
        },
        {
          type: "p",
          text: "an operations view for you: not an analytics dashboard, a simple way to see every open request, every active match, every pending payment. you need this so you can do the manual matching and catch the things that fall through. this is often the thing that gets cut because founders think of it as an internal tool. it's actually how the marketplace runs in the first phase.",
        },
      ],
    },
    {
      heading: "the mistake of over-engineering trust mechanisms",
      blocks: [
        {
          type: "p",
          text: "reviews, verification badges, identity checks, dispute resolution flows, these exist to solve trust problems at scale. at the MVP stage, trust is personal. your early suppliers know you reached out to them directly. your early buyers know you're responsive and accountable.",
        },
        {
          type: "p",
          text: "the review system is a v2 feature. the dispute resolution flow is a v3 feature. build them when you have enough volume that personal trust doesn't scale. building them in v1 delays the launch by weeks for features that early users won't notice.",
        },
      ],
    },
    {
      heading: "what to build at ApexStack for a marketplace MVP",
      blocks: [
        {
          type: "p",
          text: "at ApexStack, marketplace MVPs follow this architecture: supplier onboarding, basic listing or profile display, a buyer-side request form, stripe connect for payment, email-based communication, and a simple admin view for manual matching and operations. that's a 4-6 week build at our launch sprint price.",
        },
        {
          type: "p",
          text: "the matching algorithm, the full review system, the mobile experience, those come after you've learned enough from real transactions to build them correctly. every marketplace that's scaled has a version of this story: they launched something simpler than what they imagined, and the transactions they generated taught them what to build next.",
        },
        {
          type: "p",
          text: "if you're planning a marketplace and want to talk through what your v1 scope actually needs. That's a conversation worth having before you spec anything out. the scoping decisions for a marketplace have more long-term consequences than for most other product types.",
        },
        {
          type: "p",
          text: "which side of your marketplace is harder to acquire?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
