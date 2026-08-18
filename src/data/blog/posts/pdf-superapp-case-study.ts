import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "pdf-superapp-case-study",
  title:
    "PDF SuperApp: Competing in a Category Where Everything Is Already Free",
  seoTitle: "PDF SuperApp Case Study",
  description:
    "How we built a PDF reader that earns a subscription in a market where the operating system already does the job for nothing.",
  excerpt:
    "Every phone already opens PDFs. Building a PDF app means answering a hard question first: what would make someone pay for something they already have?",
  category: "Case Studies",
  primaryKeyword: "pdf app development",
  secondaryKeywords: [
    "document reader app development",
    "text to speech app development",
    "utility app monetisation",
    "flutter pdf rendering",
  ],
  published: "2026-08-06",
  authorId: "leadership-03",
  serviceSlug: "mobile-app-development",
  keyTakeaway:
    "PDF SuperApp reads, listens to, edits and shares PDFs. The commercial problem is that every phone already opens PDFs for free, so the product cannot win on the core function. It wins on the combination: text to speech turning a document into something you can listen to while driving, plus editing and sharing in one place, which is a job the built-in viewer does not do.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "Read, listen, edit and share PDFs. That is the whole pitch, and the second verb is the one that matters.",
        },
        {
          type: "p",
          text: "Reading a PDF is a solved problem that both mobile platforms give away. Any app charging for that alone is competing with the operating system, which is not a competition anyone wins.",
        },
        {
          type: "callout",
          text: "When your core function is free by default, the product is not the function. It is the combination nobody has assembled.",
        },
      ],
    },
    {
      heading: "Where the value actually is",
      blocks: [
        {
          type: "h3",
          text: "Listening turns dead time into reading time",
        },
        {
          type: "p",
          text: "Text to speech over a PDF changes what the document is for. A contract, a research paper or a long report becomes something you consume while driving, walking or cooking.",
        },
        {
          type: "p",
          text: "That is not a feature on a comparison table, it is a different occasion of use. The built-in viewer cannot do it, and a person who has once listened to a fifty-page document instead of reading it understands the value immediately.",
        },
        {
          type: "h3",
          text: "Text extraction is the hard prerequisite",
        },
        {
          type: "p",
          text: "Speech requires text, and PDF is a page description format rather than a text format. It describes glyphs at coordinates. Recovering sensible reading order from that is genuinely difficult, especially across columns, headers, footers and tables.",
        },
        {
          type: "p",
          text: "Get it wrong and the app reads a footer in the middle of a sentence, which is worse than not offering the feature. That extraction quality is most of the engineering behind an apparently simple button.",
        },
      ],
    },
    {
      heading: "The build",
      blocks: [
        {
          type: "table",
          head: ["Concern", "Choice"],
          rows: [
            ["Rendering and extraction", "A dedicated PDF engine, not a generic web view"],
            ["Speech", "Platform text to speech"],
            ["Files", "Native file picker, share sheet and open-in integration"],
            ["Backend", "Managed Postgres for accounts and sync"],
            ["Billing", "Cross-platform subscriptions"],
            ["Generation", "Native PDF creation and printing"],
          ],
        },
        {
          type: "p",
          text: "Using a real PDF engine rather than a web view is the decision that makes text extraction and reliable rendering possible. A web view renders acceptably and gives you very little to work with underneath.",
        },
        {
          type: "h3",
          text: "Everything else is integration",
        },
        {
          type: "p",
          text: "A document app lives in the middle of the platform's file handling. It has to appear in share sheets, accept documents opened from mail and messaging, request storage permissions gracefully, and hand files back out again.",
        },
        {
          type: "p",
          text: "None of this is difficult in isolation. All of it is fiddly, platform-specific, and the reason a document utility takes longer than its feature list suggests.",
        },
      ],
    },
    {
      heading: "What we would tell you if you were building a utility app",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Name the free alternative explicitly, then write down what you offer that it does not. If you cannot finish that sentence, the product is not ready to build.",
            "Find the feature that changes the occasion of use rather than the feature list. Listening instead of reading is a different moment in someone's day, and different moments are what people pay for.",
            "Check the hard prerequisite before you promise the feature. Speech depends entirely on extraction quality, and poor extraction makes the headline feature actively unpleasant.",
            "Budget for platform integration properly. Share sheets, file pickers, permissions and open-in handling are individually small and collectively a significant portion of the work.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why build a PDF app when phones open PDFs for free?",
      answer:
        "Because reading is not the only job. Listening to a document, editing it and sharing it from one place is a combination the built-in viewer does not offer. Competing on the free core function alone means competing with the operating system, which nobody wins.",
    },
    {
      question: "Why is text extraction from PDFs difficult?",
      answer:
        "PDF is a page description format. It positions glyphs at coordinates rather than storing a readable text stream. Recovering sensible reading order across columns, headers, footers and tables is genuinely hard, and errors are obvious the moment speech reads a footer mid-sentence.",
    },
    {
      question: "Why use a dedicated PDF engine instead of a web view?",
      answer:
        "A web view renders a document acceptably and gives you almost nothing underneath it. A dedicated engine provides the text access that features like speech, search and editing depend on.",
    },
    {
      question: "How do you monetise a utility app?",
      answer:
        "By charging for the capability the free default lacks, not for the default itself. Here that is listening, editing and generation. The subscription has to map to something a user cannot get from the software already on their phone.",
    },
    {
      question: "What takes the most time in a document app?",
      answer:
        "Platform integration. Appearing in share sheets, accepting files opened from other apps, handling storage permissions gracefully and passing documents back out are each small tasks that together account for a large part of the schedule.",
    },
  ],
};
