import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "plantcare-pro-app-case-study",
  title:
    "PlantCare Pro: Shipping in Three Phases Without Rewriting the First One",
  seoTitle: "PlantCare Pro App Case Study",
  description:
    "How we phased an AI plant care app across three releases, and what has to be decided in phase one so phases two and three are additions.",
  excerpt:
    "Most apps that ship in phases end up rebuilding phase one during phase two. Avoiding that is a set of decisions made before any code is written.",
  category: "Case Studies",
  primaryKeyword: "phased mvp development",
  secondaryKeywords: [
    "ai plant identification app",
    "mvp roadmap planning",
    "ios app development phases",
    "image compression mobile app",
  ],
  published: "2026-08-07",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway:
    "PlantCare Pro shipped in three deliberate phases: identification and diagnosis first, then billing, sharing and notifications, then location-aware features. The reason later phases were additions rather than rewrites is that the foundational choices, meaning authentication, data model, storage and image pipeline, were made in phase one with all three phases already in view.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "Photograph a plant. Find out what it is and what is wrong with it. Get told when to water it.",
        },
        {
          type: "p",
          text: "It reached that state across three phases, and the phases are visible in the codebase because the dependencies are annotated with the phase that introduced them. That is unusually honest record-keeping and it makes the project worth writing about.",
        },
      ],
    },
    {
      heading: "The three phases",
      blocks: [
        {
          type: "table",
          head: ["Phase", "What shipped", "Why in that order"],
          rows: [
            [
              "One",
              "Camera, image handling, identification and diagnosis, accounts, storage",
              "The core value. If this is not good, nothing after it matters",
            ],
            [
              "Two",
              "Subscriptions, result sharing, local and push notifications",
              "Monetise and retain only once there is something worth paying for",
            ],
            [
              "Three",
              "Location and geocoding for a weather-aware garden",
              "A differentiator that only makes sense on top of a working core",
            ],
          ],
        },
        {
          type: "p",
          text: "The ordering follows one rule: prove the core, then monetise it, then differentiate. Reversing any two of those is the standard way a small team runs out of money with a half-built product.",
        },
      ],
    },
    {
      heading: "What phase one has to get right",
      blocks: [
        {
          type: "p",
          text: "Phased delivery only saves money if later phases add to the first rather than replacing it. Four decisions determine that, and all four are cheap in phase one and expensive afterwards.",
        },
        {
          type: "h3",
          text: "Authentication and identity",
        },
        {
          type: "p",
          text: "Phase two introduced subscriptions, and a subscription must attach to a durable identity. If phase one had shipped with anonymous local-only usage, phase two would have meant migrating existing users into accounts, which is both engineering work and a moment where you lose people.",
        },
        {
          type: "h3",
          text: "The image pipeline",
        },
        {
          type: "p",
          text: "Compression and resizing were in place from the start. Uploading full-resolution photographs from a modern phone is slow on poor connections and expensive in storage, and every stored original is a cost that compounds quietly.",
        },
        {
          type: "p",
          text: "Adding compression later does not fix the images you already stored, so somebody ends up writing a backfill.",
        },
        {
          type: "h3",
          text: "The data model",
        },
        {
          type: "p",
          text: "A plant record that assumed a single scan would have needed restructuring for phase three, where a plant has a location, a weather context and a history. Modelling a plant as an entity with events rather than as a scan result kept that a straightforward addition.",
        },
        {
          type: "h3",
          text: "Structured logging",
        },
        {
          type: "p",
          text: "A logger was present from phase one. This sounds trivial and it is the reason phase two and three defects were diagnosable from real usage rather than reproducible only on a developer's desk.",
        },
      ],
    },
    {
      heading: "What we would tell a founder planning phases",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Write down all three phases before you build phase one. You do not have to build them, but the foundational choices should be made with them in view.",
            "Put identity in phase one even if billing is in phase two. Retrofitting accounts onto anonymous users costs engineering time and costs you users at the migration.",
            "Decide the media pipeline early. Compression, resizing and storage strategy are close to free at the start and require a backfill later.",
            "Model entities rather than events at the boundary. A plant with a history extends naturally. A scan result does not.",
          ],
        },
        {
          type: "callout",
          text: "Phasing is not about building less. It is about ordering the work so that nothing you ship has to be taken apart to make room for what comes next.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the right order for MVP phases?",
      answer:
        "Prove the core value first, monetise second, differentiate third. Building billing before there is something worth paying for wastes the effort, and building differentiators before the core works means polishing something nobody has validated.",
    },
    {
      question: "Why include authentication before you need subscriptions?",
      answer:
        "Because a subscription must attach to a durable identity. Shipping anonymous local-only usage first means the phase that introduces billing also has to migrate every existing user into an account, which costs engineering time and loses people at the migration.",
    },
    {
      question: "Why does image compression need to be in phase one?",
      answer:
        "Full-resolution photographs from modern phones are slow to upload on poor connections and expensive to store. Adding compression later does not fix images already stored, so somebody has to write and run a backfill against real user data.",
    },
    {
      question: "How do you stop later phases from becoming rewrites?",
      answer:
        "By deciding authentication, the data model, storage and the media pipeline in phase one with all phases in view. Those four are what later work either builds on or has to tear out, and they are cheap to get right at the start.",
    },
    {
      question: "Is phased delivery cheaper than building everything at once?",
      answer:
        "Usually, provided the phases are additive. It gets you to market sooner and lets real usage inform later scope. It becomes more expensive than a single build if phase one was designed without the later phases in mind.",
    },
  ],
};
