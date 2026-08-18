import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "sitevoice-taking-over-an-ai-generated-codebase-case-study",
  title:
    "SiteVoice: What It Takes to Make an AI-Generated Codebase Safe to Ship",
  seoTitle: "SiteVoice: Fixing an AI-Built Codebase",
  description:
    "A case study in taking over a prompt-generated web app: finding the row level security hole, rotating credentials and building real end-to-end tests.",
  excerpt:
    "The app worked. It also had a row level security vulnerability, credentials that needed rotating and no tests. That gap is the whole story of AI-generated code.",
  category: "Case Studies",
  primaryKeyword: "ai generated code security audit",
  secondaryKeywords: [
    "taking over an existing codebase",
    "row level security vulnerability",
    "credential rotation process",
    "end to end testing setup",
  ],
  published: "2026-08-02",
  authorId: "leadership-02",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "SiteVoice began as a prompt-generated web application and worked as a demonstration. Making it safe to ship meant a security assessment that found a row level security vulnerability, a credential rotation process, an end-to-end test suite driving a real browser, and webhook verification. None of that is visible in a demo, and all of it is the difference between something that runs and something you can put users on.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "SiteVoice is a web application for recording and processing audio, originally generated through a prompt-based builder. It worked. Screens rendered, uploads uploaded, the flow completed.",
        },
        {
          type: "p",
          text: "That is what these tools are genuinely good at, and it is worth acknowledging clearly rather than sneering at. Getting from nothing to a working prototype in an afternoon is real value.",
        },
        {
          type: "callout",
          text: "The gap is not between broken and working. It is between working and safe to put strangers on.",
        },
      ],
    },
    {
      heading: "What the audit found",
      blocks: [
        {
          type: "h3",
          text: "Row level security",
        },
        {
          type: "p",
          text: "The most serious finding was a row level security problem. Row level security is the mechanism that stops one user reading another user's rows, and it is exactly the kind of thing a generated application gets wrong, because the generated code produces a working query and the policy behind it is invisible in every test a person is likely to run by hand.",
        },
        {
          type: "p",
          text: "You do not notice it while clicking around as one logged-in user. Everything you can see is yours, so everything looks correct. It only surfaces when a second user exists and somebody checks whether the boundary actually holds.",
        },
        {
          type: "h3",
          text: "Credentials",
        },
        {
          type: "p",
          text: "A rotation process was needed and documented. Prototypes accumulate keys quickly, in configuration, in examples, in a commit somebody made in a hurry, and once a credential has been anywhere it should not be, the only real fix is to replace it.",
        },
        {
          type: "h3",
          text: "Webhooks",
        },
        {
          type: "p",
          text: "Webhook handling needed verification and a real test pass. An unverified webhook endpoint accepts instructions from anyone who finds the URL, which for a billing or processing webhook means someone else can tell your system what happened.",
        },
      ],
    },
    {
      heading: "Tests that drive a real browser",
      blocks: [
        {
          type: "p",
          text: "An end-to-end suite was added, running against a real browser with headless and debug modes, plus a mock server so webhook behaviour could be exercised without live traffic.",
        },
        {
          type: "p",
          text: "Prompt-generated applications almost never arrive with tests, because the generation loop optimises for something that looks right rather than something that stays right. The first meaningful change to such a codebase is where that shows: nothing tells you what you broke.",
        },
        {
          type: "table",
          head: ["Area", "Before", "After"],
          rows: [
            ["Data access", "Policy assumed correct", "Assessed, fixed and documented"],
            ["Credentials", "Accumulated in place", "Rotation process written down"],
            ["Webhooks", "Accepted as received", "Verified and tested against a mock"],
            ["Regressions", "Found by users", "Found by a suite driving a real browser"],
          ],
        },
      ],
    },
    {
      heading: "What we would tell a founder holding a generated app",
      blocks: [
        {
          type: "p",
          text: "Not that it was a mistake. It probably got you to something demonstrable faster than any other route. But treat it as a prototype that reached further than most, and budget for the part it skipped.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Have the data access rules reviewed before you have real users. Row level security holes are invisible from inside a single account and obvious to anyone who looks properly.",
            "Rotate every credential once, on the assumption that something leaked into a commit or a screenshot along the way.",
            "Verify every webhook. An unverified endpoint is an open instruction channel into your system.",
            "Get one end-to-end test running before you make your first significant change, so you find out what you broke from a test rather than from a user.",
          ],
        },
        {
          type: "callout",
          text: "AI-generated code is a fast first draft. It is not a first release, and the distance between those two is mostly security and tests.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is a row level security vulnerability?",
      answer:
        "It is a failure in the policies that decide which rows a given user may read or write. When it is wrong, one user can reach another user's data. It is invisible while testing as a single logged-in account, because everything you can see legitimately belongs to you.",
    },
    {
      question: "Is AI-generated code inherently unsafe?",
      answer:
        "Not inherently, but the generation loop optimises for code that works rather than code that is correct under adversarial conditions. Data access policies, credential handling and webhook verification are the areas that reliably need review, because none of them affect whether the demo works.",
    },
    {
      question: "Why rotate credentials on a codebase you inherited?",
      answer:
        "Because you cannot prove a key has never been exposed. Prototypes accumulate credentials in configuration files, examples, screenshots and hurried commits. Rotating once establishes a known-good starting point that costs an hour.",
    },
    {
      question: "Why do webhooks need verification?",
      answer:
        "An unverified endpoint accepts instructions from anyone who discovers the URL. For a billing or processing webhook that means an outsider can tell your system that something happened, which is as serious as it sounds.",
    },
    {
      question: "Should I rebuild a prompt-generated app from scratch?",
      answer:
        "Usually not. The product decisions embedded in it have value and rebuilding discards them. The economical path is normally a security review, a credential rotation, an end-to-end test suite, and then incremental replacement of the weakest parts.",
    },
  ],
};
