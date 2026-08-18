import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "decorly-ai-room-redesign-app-case-study",
  title:
    "Decorly: Shipping an AI Room Redesign App Where Every Tap Costs Real Money",
  seoTitle: "Decorly AI Room Redesign Case Study",
  description:
    "How we built an AI interior design app where each generation has a hard cost, so the paywall and the waiting state are core engineering.",
  excerpt:
    "In most apps a button press costs nothing. In an image generation app it costs cents, every time, whether or not the user liked the result.",
  category: "Case Studies",
  primaryKeyword: "ai interior design app development",
  secondaryKeywords: [
    "ai image generation app",
    "subscription paywall development",
    "flutter ai app development",
    "generative ai product economics",
  ],
  published: "2026-08-09",
  authorId: "leadership-03",
  serviceSlug: "ai-development",
  keyTakeaway:
    "Decorly redesigns a room from a photograph. The engineering that decides whether it survives is economic rather than visual: every generation has a hard unit cost, so entitlement checks, the paywall, and the design of the waiting state carry more commercial weight than the model choice does.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "Photograph a room. Pick a style. Get the room back, redesigned.",
        },
        {
          type: "p",
          text: "The demo is immediate and the appeal is obvious, which is exactly why this category fills with apps that launch and quietly disappear a few months later.",
        },
        {
          type: "callout",
          text: "They do not fail on quality. They fail on arithmetic.",
        },
      ],
    },
    {
      heading: "The economics decide the architecture",
      blocks: [
        {
          type: "p",
          text: "In a conventional app, a user tapping a button costs you effectively nothing. Serving a screen is a rounding error. You can be generous with a free tier because generosity is close to free.",
        },
        {
          type: "p",
          text: "Image generation inverts that. Every attempt costs money whether the user keeps the result or discards it, and users discard a lot. The person who generates forty variations and subscribes to nothing is not an edge case, they are a predictable and expensive segment.",
        },
        {
          type: "h3",
          text: "What that forces you to build early",
        },
        {
          type: "list",
          items: [
            "A real entitlement check before generation, not a cosmetic paywall that a determined user can walk past.",
            "Cross-platform billing wired in from the start, because retrofitting subscriptions into a shipped app is materially harder than including them.",
            "Server-side generation, so the model key is never in the binary and usage is attributable to an account.",
            "A free tier sized by unit economics rather than by optimism.",
          ],
        },
        {
          type: "p",
          text: "This is why generative apps ship with billing integrated on day one while conventional apps often defer it. It is not commercial eagerness. It is that the free path has a per-use cost and an unbounded free path is a business that ends.",
        },
      ],
    },
    {
      heading: "The waiting state is the product",
      blocks: [
        {
          type: "p",
          text: "Generation takes seconds, sometimes many of them. That wait is the single most fragile moment in the app.",
        },
        {
          type: "p",
          text: "It is where users decide the app is broken and leave, and it is where you have already spent the money. A user who abandons during generation costs you the full unit price and returns nothing.",
        },
        {
          type: "p",
          text: "So the waiting state gets real design attention: shimmer placeholders, motion, staged animation, and progressive image loading with cached network images so a returning result appears instantly rather than being fetched again.",
        },
        {
          type: "h3",
          text: "Getting the photograph right first",
        },
        {
          type: "p",
          text: "Before generation there is capture and cropping. A badly framed input produces a poor result, and the user attributes that to the model rather than to their photograph.",
        },
        {
          type: "p",
          text: "Cropping is therefore not a convenience feature. It is quality control on the input, and it directly reduces how many expensive generations get thrown away.",
        },
      ],
    },
    {
      heading: "The shape of the build",
      blocks: [
        {
          type: "table",
          head: ["Concern", "Choice"],
          rows: [
            ["App", "Flutter with Riverpod state and typed routing"],
            ["Backend", "Managed Postgres with authentication and storage"],
            ["Sign-in", "Native Google and Apple with nonce-secured token flow"],
            ["Billing", "Cross-platform subscriptions with a hosted paywall"],
            ["Presentation", "Staggered grid, shimmer, motion, cached images"],
          ],
        },
        {
          type: "p",
          text: "The repository also carries an admin dashboard, a marketing site, legal pages and store screenshots. A consumer AI app is never only the app.",
        },
      ],
    },
    {
      heading: "What we would tell you if you were building generative AI",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Work out your cost per generation before you design the free tier. Every free generation is a real payment you are making on behalf of someone who may never subscribe.",
            "Integrate billing from the first sprint. In a per-use-cost product, the paywall is infrastructure, not a growth experiment to run later.",
            "Design the wait deliberately. Abandonment during generation is the most expensive failure mode you have, because you paid and got nothing.",
            "Improve the input before you improve the model. Cropping and framing raise perceived quality more cheaply than a larger model does.",
          ],
        },
        {
          type: "callout",
          text: "In generative products the model is the easy decision. The unit economics are the product decision.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why do AI image apps need a paywall so early?",
      answer:
        "Because every generation has a hard unit cost regardless of whether the user keeps the result. In a conventional app a free user is nearly free. In a generative app a free user is a running bill, so entitlement and billing are infrastructure rather than a later growth experiment.",
    },
    {
      question: "How do you stop users abandoning during generation?",
      answer:
        "By designing the wait rather than leaving a spinner. Shimmer placeholders, staged motion and progressive image loading make the delay legible. This matters commercially because you have already paid for the generation by the time someone leaves.",
    },
    {
      question: "Why is image cropping important in an AI app?",
      answer:
        "Because input quality drives output quality, and users blame the model for a poor result rather than their photograph. Cropping is quality control on the input, and it reduces the number of expensive generations that get discarded.",
    },
    {
      question: "Should image generation run on the device or the server?",
      answer:
        "On the server, for this class of product. It keeps the model key out of a binary that anyone can inspect, ties usage to an account so entitlements can be enforced, and lets you change model or provider without shipping an app update.",
    },
    {
      question: "What is the most common way these apps fail?",
      answer:
        "Arithmetic, not quality. A free tier sized by optimism rather than by cost per generation produces a product that is popular and unprofitable, and the shutdown looks sudden from the outside while being entirely predictable from the inside.",
    },
  ],
};
