import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "safemama-pregnancy-safety-app-case-study",
  title:
    "SafeMama: Building for a User Who Is Anxious, Tired and Asking at 3am",
  seoTitle: "SafeMama Pregnancy App Case Study",
  description:
    "How we built a pregnancy safety app across a Flutter client, a Node backend and an admin panel, for questions that cannot wait until morning.",
  excerpt:
    "The person asking whether something is safe in pregnancy is rarely calm and rarely browsing. They want one answer, quickly, and they will not read a paragraph to find it.",
  category: "Case Studies",
  primaryKeyword: "pregnancy app development",
  secondaryKeywords: [
    "health app development",
    "otp verification app",
    "multi language mobile app",
    "flutter node backend app",
  ],
  published: "2026-08-03",
  authorId: "leadership-01",
  serviceSlug: "product-engineering",
  keyTakeaway:
    "SafeMama answers whether something is safe during pregnancy, built as a Flutter app with a Node backend and an admin panel. The design constraint is the user's state rather than the feature list: someone anxious, frequently tired, often awake at an unreasonable hour, who needs one clear answer immediately and will not tolerate an interface that makes them work for it.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "Can I eat this. Is this medicine safe. Is this product fine to use. The app answers those questions.",
        },
        {
          type: "p",
          text: "The functionality is a lookup with an interpretation layer. The difficulty is entirely in who is asking and when.",
        },
        {
          type: "callout",
          text: "Design for the 3am version of your user, not the demo-day version. If it works then, it works at every other hour too.",
        },
      ],
    },
    {
      heading: "What the user's state changes",
      blocks: [
        {
          type: "h3",
          text: "The answer comes first",
        },
        {
          type: "p",
          text: "A worried person reads the first line and stops. Any structure that puts context, disclaimers or preamble before the answer is a structure that fails them, because they will scan for the verdict and possibly find the wrong thing.",
        },
        {
          type: "p",
          text: "Answer first, explanation after, caveats visible but not blocking. That ordering is unusual for health content and it is the correct one here.",
        },
        {
          type: "h3",
          text: "Uncertainty is common and must be usable",
        },
        {
          type: "p",
          text: "Plenty of substances genuinely have no clear consensus. An app that forces every case into safe or unsafe is manufacturing confidence it does not have, in a category where being wrong has consequences for two people.",
        },
        {
          type: "p",
          text: "So the uncertain result needs to be designed as carefully as the definite ones, and it needs to tell the user what to do next rather than leaving them where they started.",
        },
        {
          type: "h3",
          text: "Language is not a nice-to-have",
        },
        {
          type: "p",
          text: "The app carries localisation from the outset. A person under stress reverts to their first language, and health information in a second language is read more slowly and understood less reliably.",
        },
      ],
    },
    {
      heading: "The system behind it",
      blocks: [
        {
          type: "table",
          head: ["Piece", "Stack", "Handles"],
          rows: [
            [
              "Mobile app",
              "Flutter with Riverpod and typed routing, localised",
              "Search, results, saved items, account",
            ],
            [
              "Backend",
              "Node and Express with MongoDB",
              "Content, accounts, verification, billing, model calls",
            ],
            ["Admin panel", "Web", "Content management and oversight"],
            ["Verification", "SMS and voice providers", "Phone verification at sign-up"],
          ],
        },
        {
          type: "p",
          text: "Two independent SMS providers are integrated. That looks like duplication and it is deliberate: verification delivery rates vary considerably by country and carrier, and a single provider that performs poorly in one market blocks every new user there at the first screen.",
        },
        {
          type: "h3",
          text: "Rate limiting on a health lookup",
        },
        {
          type: "p",
          text: "The backend applies rate limiting, which matters more than usual when each query may trigger a paid model call. An unmetered endpoint in front of a per-request cost is a bill waiting to happen, and it is also the obvious target for anyone wanting to scrape the content.",
        },
      ],
    },
    {
      heading: "What we would tell you if you were building health content",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Put the answer above the explanation. An anxious reader takes the first line and acts on it, so the first line must be the verdict.",
            "Design the uncertain result properly. Forcing a binary answer in a category with genuine ambiguity is how a health product becomes a liability.",
            "Localise early. Under stress people revert to their first language, and retrofitting localisation touches every screen you have built.",
            "Use two verification providers if you serve multiple countries. Delivery rates vary by carrier, and a failed code is a user who never sees your product.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why put the answer before the explanation?",
      answer:
        "Because an anxious user reads the first line and acts on it. Any preamble, context or disclaimer above the verdict means they scan for the answer and may land on the wrong thing. Answer first, explanation after, caveats visible but not blocking.",
    },
    {
      question: "How should a health app handle genuine uncertainty?",
      answer:
        "As a designed result with its own screen, which names why the case is unclear and says what to do next. Forcing every substance into safe or unsafe manufactures confidence the evidence does not support, in a category where the consequences are serious.",
    },
    {
      question: "Why integrate two SMS providers?",
      answer:
        "Verification delivery rates vary substantially by country and carrier. A single provider that performs badly in one market blocks every new user there at the very first screen, and you often will not notice because those users simply never appear.",
    },
    {
      question: "Why does localisation matter so much in a health app?",
      answer:
        "People under stress revert to their first language, and health information read in a second language is processed more slowly and less reliably. It is also far cheaper to build in from the start than to retrofit across every screen later.",
    },
    {
      question: "Why rate limit a lookup endpoint?",
      answer:
        "Because each query may trigger a paid model call, so an unmetered endpoint is an unbounded bill. It is also the obvious route for anyone wanting to scrape the content the product is built on.",
    },
  ],
};
