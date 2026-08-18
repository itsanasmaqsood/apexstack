import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "taller-growth-companion-app-case-study",
  title:
    "Taller: Replacing Every Form in a Health App With One Conversation",
  seoTitle: "Taller App Case Study: On-Device AI",
  description:
    "How we built a health tracking app with no tab bar, no logging forms and no account, where an on-device coach does the work instead.",
  excerpt:
    "Taller has no tab bar, no logging form and no account. You tell a coach what you ate in plain words, and the app does the rest on the device itself.",
  category: "Case Studies",
  primaryKeyword: "on device ai app development",
  secondaryKeywords: [
    "conversational health app",
    "ios app without account",
    "offline first mobile app",
    "vision framework form check",
  ],
  published: "2026-08-16",
  authorId: "leadership-03",
  serviceSlug: "mobile-app-development",
  keyTakeaway:
    "Taller is a health and growth companion built as a single conversation rather than a set of forms. There is no tab bar, no logging screen and no account. The coach runs on the device, parses food from natural language against a bundled database, and draws every meal image locally, which means the app is fully functional with no network, no API key and no sign-up.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "Health apps die at the logging screen. Someone downloads one in January, meets a form asking for grams of chicken breast, fills it in twice, and never opens the app again. The data model was the product, and the data model asked the user to do the work.",
        },
        {
          type: "p",
          text: "Taller inverts that. You say what you ate in plain words. The coach parses the quantity and the food, logs it with a full nutrition panel, and puts a photograph of the plate in the thread. No form appears at any point.",
        },
        {
          type: "p",
          text: "There are exactly two altitudes. Pinch changes altitude, paging changes position. The thread is one page per day. Pinch out and the whole year becomes a book with five chapters: plates, growth, movement, milestones and circle.",
        },
        {
          type: "callout",
          text: "No tab bar, no logging form, no account. Three absences that each removed a reason to quit.",
        },
      ],
    },
    {
      heading: "The decision that shaped everything",
      blocks: [
        {
          type: "p",
          text: "The coach runs on the device. Not as a fallback for poor connectivity, but as the default.",
        },
        {
          type: "p",
          text: "It parses quantities and food names out of natural language, searches a bundled database of roughly 190 foods, and calls the same tools a remote model would call. The plates are drawn on the device too, by a seeded canvas renderer that produces a stylised studio still life per food. Instant, and identical every time.",
        },
        {
          type: "h3",
          text: "Why that matters commercially",
        },
        {
          type: "list",
          items: [
            "No API key means no per-user inference cost, so the free tier does not lose money as it grows.",
            "No account means no sign-up screen, which is the single largest drop-off point in most consumer apps.",
            "No network means the app works on a plane, in a basement gym, and on the first launch before permission dialogs are answered.",
            "Deterministic image generation means the same food always looks the same, so the journal reads as a consistent object rather than a series of surprises.",
          ],
        },
        {
          type: "p",
          text: "Adding an API key in settings upgrades both halves at once: a hosted model answers instead of the on-device coach, and plates become generated studio photographs. The upgrade is real, and the product without it is not a demo.",
        },
      ],
    },
    {
      heading: "The hard parts",
      blocks: [
        {
          type: "h3",
          text: "A camera that watches fourteen joints",
        },
        {
          type: "p",
          text: "The movement chapter includes a form check that uses the device vision framework to track fourteen joints and tell the user what to correct during a hold. Nothing is recorded and nothing is uploaded.",
        },
        {
          type: "p",
          text: "That last sentence is a feature, not a footnote. A camera pointed at a young person is the most sensitive surface in the entire product, and the only defensible answer is that the frames never leave the device.",
        },
        {
          type: "h3",
          text: "Telling the truth about what the app cannot do",
        },
        {
          type: "p",
          text: "Growth plates close. When they do, height stops. An app in this category has an obvious commercial incentive to be vague about that, and Taller says it plainly instead.",
        },
        {
          type: "p",
          text: "The mid-parental height prediction is presented as the plus or minus 8.5 centimetre band it actually is, rather than as a single confident number. That is a harder screen to design and it is the only honest one.",
        },
        {
          type: "h3",
          text: "Making a chart show something real",
        },
        {
          type: "p",
          text: "A height chart on a standard axis is a flat line, because real growth is small relative to a person's total height. The chart uses a narrow axis so that actual change is visible, and reports velocity in centimetres per month rather than only absolute height.",
        },
        {
          type: "p",
          text: "That is a small decision that determines whether the feature feels alive or dead on first open.",
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
            "Count the screens between install and first value. Every account wall, permission prompt and empty dashboard is a place people leave. Taller removed all three and the product got simpler, not weaker.",
            "Try the on-device version before you assume you need a hosted model. A bundled database plus local parsing covers a surprising share of real use, costs nothing per user, and works offline.",
            "Decide where sensitive data is processed before you design the feature. Answering that after the camera feature exists is how privacy becomes a rewrite.",
            "Be honest about limits in the product itself. It costs a little conversion and it buys the trust that makes people stay.",
          ],
        },
        {
          type: "callout",
          text: "The absence of a form is a feature you have to build. It is more work than the form, and it is the reason anyone is still using the app in March.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Does Taller need an internet connection?",
      answer:
        "No. The coach runs on the device, parses natural language against a bundled food database, and draws the plate images locally. There is no API key, no network requirement and no account. Adding a key in settings upgrades the coach and the imagery, but the app is fully functional without one.",
    },
    {
      question: "Why build an app with no account at all?",
      answer:
        "The sign-up screen is usually the biggest single drop-off point in a consumer app. Removing it means every person who installs reaches the product. It also removes an entire category of data protection obligation, since there is no server-side profile to hold.",
    },
    {
      question: "How does the camera form check work?",
      answer:
        "It uses the device vision framework to track fourteen joints during an exercise hold and tells the user what to adjust. Nothing is recorded and nothing is uploaded, which is the only defensible design when the camera is pointed at a young person.",
    },
    {
      question: "How is the height prediction presented?",
      answer:
        "As a range rather than a number. The mid-parental prediction carries a plus or minus 8.5 centimetre band, and the app states it that way. Presenting a single figure would be more satisfying to read and less true.",
    },
    {
      question: "Can an on-device model really replace a hosted one?",
      answer:
        "For a bounded task, often yes. Parsing quantities and food names against a known database is narrow enough to run locally with good accuracy. It would not replace an open-ended assistant, and the app offers a hosted upgrade for people who want that.",
    },
  ],
};
