import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "salafimatch-matrimony-platform-case-study",
  title:
    "SalafiMatch: What a Matrimony Platform Costs You in Moderation, Privacy and Bandwidth",
  seoTitle: "SalafiMatch Matrimony App Case Study",
  description:
    "How we built a matrimony platform where photo privacy, verification documents and moderation backlog are core engineering, not afterthoughts.",
  excerpt:
    "A matrimony app is a social network where every user has uploaded identity documents and expects their photographs never to reach the wrong person. That changes what the engineering is about.",
  category: "Case Studies",
  primaryKeyword: "matrimony app development",
  secondaryKeywords: [
    "dating app development cost",
    "content moderation system development",
    "user verification document privacy",
    "flutter app with node backend",
  ],
  published: "2026-08-12",
  authorId: "leadership-01",
  serviceSlug: "product-engineering",
  keyTakeaway:
    "SalafiMatch is a matrimony platform with a Flutter app, a Node and MongoDB backend and an administration panel. The engineering that dominates a product like this is not matching. It is photo privacy, verification document handling, moderation tooling and image bandwidth, because every one of those is a place where a mistake harms a real person rather than degrading a metric.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "People create a profile, are verified, browse matches, and talk. Described that way it sounds like a directory with a chat feature.",
        },
        {
          type: "p",
          text: "What it actually is: a system holding identity documents and personal photographs for people who care intensely about who can see them, in a context where a privacy failure is not an inconvenience but a serious harm to someone's family life.",
        },
        {
          type: "callout",
          text: "In this category, the moderation queue and the photo pipeline are the product. Matching is the easy part.",
        },
      ],
    },
    {
      heading: "Four problems that shaped the build",
      blocks: [
        {
          type: "h3",
          text: "1. Photographs cost money every time they load",
        },
        {
          type: "p",
          text: "Profile photos are disk-cached on the device. Without that, every image is fetched again on every scroll and every app open, which costs members their mobile data and costs the business object storage egress for the same bytes repeatedly.",
        },
        {
          type: "p",
          text: "On a browsing-heavy product this is one of the highest-leverage decisions available, and it is invisible in a demo. It shows up in the storage bill and in reviews from people on limited data plans.",
        },
        {
          type: "h3",
          text: "2. Login tokens were sitting in plain text",
        },
        {
          type: "p",
          text: "The authentication token originally lived in standard preferences storage as plain text. It was moved into the platform secure store, backed by the Android keystore and the iOS keychain.",
        },
        {
          type: "p",
          text: "Worth stating plainly because it is a common shape of defect: something reasonable early on that becomes indefensible once the account it protects holds verification documents.",
        },
        {
          type: "h3",
          text: "3. Photo privacy has to be enforced server-side",
        },
        {
          type: "p",
          text: "The backend carries a maintenance script for backfilling blurred profile pictures, and another for migrating legacy verification documents into their correct handling.",
        },
        {
          type: "p",
          text: "The presence of those scripts is the real lesson. Privacy rules introduced after launch do not apply themselves to data that already exists. Somebody has to write the migration, run it carefully, and verify it, and that work is invisible in every feature list.",
        },
        {
          type: "h3",
          text: "4. Moderation accumulates whether you tooled for it or not",
        },
        {
          type: "p",
          text: "There is a script for ensuring moderation indexes exist and another for clearing a report backlog, with a dry-run mode.",
        },
        {
          type: "p",
          text: "A report backlog is what happens when reporting shipped before the tooling to action reports. Every user-generated content product reaches that point. The ones that planned for it have a queue and an index. The ones that did not have a database query someone runs by hand at midnight.",
        },
      ],
    },
    {
      heading: "The shape of the system",
      blocks: [
        {
          type: "table",
          head: ["Piece", "Stack", "Handles"],
          rows: [
            [
              "Mobile app",
              "Flutter, Android and iOS",
              "Profiles, browsing, chat over sockets, local cache",
            ],
            [
              "Backend",
              "Node and Express with MongoDB",
              "Auth, profiles, matching, payments, moderation, notifications",
            ],
            [
              "Admin panel",
              "Web",
              "Verification review, reports, member management",
            ],
            [
              "Storage",
              "S3-compatible with presigned URLs",
              "Photographs and verification documents",
            ],
          ],
        },
        {
          type: "p",
          text: "Error monitoring, rate limiting, security headers and validation are present rather than deferred, and there is an observability document in the backend repository. On a product handling identity documents, those are not optional extras.",
        },
        {
          type: "h3",
          text: "When the ecosystem does not fit, vendor the package",
        },
        {
          type: "p",
          text: "One dependency was vendored into the repository to fix a layout fault the package could not express: a field typed too narrowly to accept a flexible child, placed in a row where nothing was allowed to give way. The vendored copy differs from upstream in exactly one file, and the change is marked in the source.",
        },
        {
          type: "p",
          text: "That is the correct way to do an unpleasant thing. Fork narrowly, mark the change, and leave the next person a trail rather than a mystery.",
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
            "Budget for moderation before you launch reporting. A report button with no queue behind it creates a backlog and a liability at the same time.",
            "Decide photo privacy rules before the first upload. Retrofitting blurring or access control means writing migrations against real user data, which is slower and riskier than getting it right once.",
            "Cache images on device from day one. It is a small change that reduces both your storage costs and your users' data usage, and it is painful to add later.",
            "Put credentials in the platform secure store immediately. It is a few hours of work and it is the difference between an incident and a non-event.",
          ],
        },
        {
          type: "callout",
          text: "Any product holding identity documents is a trust product first and a matching product second. Build in that order.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the hardest part of building a matrimony or dating app?",
      answer:
        "Not matching. It is moderation tooling, photo privacy, verification document handling and image bandwidth. Those four determine whether the product is trustworthy and whether it is affordable to run, and all four are invisible in a demo.",
    },
    {
      question: "Why does image caching matter so much?",
      answer:
        "Because browsing is the main activity. Without an on-device cache, every scroll refetches images the user has already seen, which consumes their mobile data and generates storage egress charges for identical bytes. It is one of the highest-leverage decisions in the whole build.",
    },
    {
      question: "Where should authentication tokens be stored?",
      answer:
        "In the platform secure store, meaning the Android keystore or the iOS keychain, never in ordinary preferences storage as plain text. On an account holding verification documents this stops being a best practice and becomes a requirement.",
    },
    {
      question: "What happens if you add privacy rules after launch?",
      answer:
        "You write migrations. Existing photographs and documents do not retroactively obey a new rule, so somebody has to backfill them carefully and verify the result. Planning the rule before the first upload avoids that entirely.",
    },
    {
      question: "Is it ever acceptable to fork a third-party package?",
      answer:
        "Yes, when the fault cannot be expressed through the package's API. The right approach is to vendor it, change as little as possible, mark the change clearly in the source, and record why. One marked file is maintainable. A silently modified dependency is not.",
    },
  ],
};
