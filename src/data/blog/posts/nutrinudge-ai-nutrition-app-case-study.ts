import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "nutrinudge-ai-nutrition-app-case-study",
  title:
    "NutriNudge: Why We Made the App Refuse to Start When It Is Misconfigured",
  seoTitle: "NutriNudge App Case Study",
  description:
    "How we built an AI nutrition assistant where server secrets never touch the app binary and a misconfigured build fails loudly instead of silently.",
  excerpt:
    "A configuration mistake in a mobile app does not throw an error. It ships, installs, and quietly fails on every backend call. We made that impossible.",
  category: "Case Studies",
  primaryKeyword: "ai nutrition app development",
  secondaryKeywords: [
    "mobile app secrets management",
    "compile time configuration flutter",
    "edge function api key security",
    "health app development",
  ],
  published: "2026-08-10",
  authorId: "leadership-02",
  serviceSlug: "ai-development",
  keyTakeaway:
    "NutriNudge is an AI nutrition and health assistant. Its most transferable engineering decision is about configuration: client-safe values are injected at compile time through a validated wrapper script, server secrets including the model API key live only in edge function secrets and never enter the binary, and an app launched without configuration shows an explicit configuration error rather than failing silently on every call.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "An AI assistant for nutrition and health. The product is understandable in a sentence, so this write-up is about the part that generalises: how the app handles its own configuration and keys.",
        },
        {
          type: "p",
          text: "That sounds like housekeeping. It is the difference between a launch and an incident.",
        },
      ],
    },
    {
      heading: "The silent failure this prevents",
      blocks: [
        {
          type: "p",
          text: "Configuration is read at compile time. That has a sharp edge: if you build without injecting the values, the binary ships with empty strings and every backend call fails at runtime with a client error.",
        },
        {
          type: "p",
          text: "Nothing about that build looks wrong. It compiles, it installs, it opens. It simply cannot talk to anything.",
        },
        {
          type: "h3",
          text: "Three defences",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Release builds go through a wrapper script that validates the configuration file first and fails loudly if a required key is missing. The raw build command is documented as something not to run directly.",
            "Development builds launched without configuration open a visible configuration error screen instead of proceeding into silent backend failures.",
            "The configuration file is excluded from version control and pulled from a password manager, so it is never one careless commit away from being public.",
          ],
        },
        {
          type: "callout",
          text: "Make the wrong build impossible to produce quietly. Loud failure at build time costs minutes. Silent failure in production costs a launch.",
        },
      ],
    },
    {
      heading: "Where the model key lives",
      blocks: [
        {
          type: "p",
          text: "The configuration file contains public, client-safe values only: the backend URL, the anonymous key, billing public keys, sign-in client identifiers, error reporting configuration.",
        },
        {
          type: "p",
          text: "The model API key, the service role key, the billing webhook secret and the messaging service account are not in that list. They live exclusively in edge function secrets, never in the file and never in the app package.",
        },
        {
          type: "h3",
          text: "Why this is not optional for an AI app",
        },
        {
          type: "p",
          text: "A mobile binary is not a secure location. Anyone can download it and inspect it. A model API key embedded in a shipped app is a key that will eventually be extracted and used, and the bill arrives against your account.",
        },
        {
          type: "p",
          text: "Routing model calls through an edge function costs a small amount of latency and one more deployment target. It replaces an unbounded financial risk with a bounded engineering cost, which is a trade worth making every time.",
        },
        {
          type: "table",
          head: ["Value", "Where it lives", "Reason"],
          rows: [
            ["Backend URL and anonymous key", "Build configuration", "Public by design, protected by row level security"],
            ["Billing platform keys", "Build configuration", "Public client keys, safe in a binary"],
            ["Model API key", "Edge function secrets", "Extractable from any binary, billed to you"],
            ["Service role key", "Edge function secrets", "Bypasses row level security entirely"],
            ["Billing webhook secret", "Edge function secrets", "Authenticates inbound webhooks"],
          ],
        },
      ],
    },
    {
      heading: "What we would tell you if you were building an AI app",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Never put a model API key in a mobile binary. Proxy every model call through a server function. The latency cost is small and the alternative has no ceiling.",
            "Write a build wrapper that validates configuration and refuses to proceed. It is an afternoon of work and it removes a whole class of launch failure.",
            "Make misconfiguration visible in development. An explicit error screen is far cheaper to diagnose than a scatter of failed network calls.",
            "Sort every value into client-safe or server-only before you write the config file. Doing that once at the start prevents a key rotation later.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why can a mobile app build succeed but fail on every backend call?",
      answer:
        "Because configuration is often read at compile time. Build without injecting the values and the binary ships with empty strings. It compiles, installs and opens normally, and every backend call fails at runtime. Nothing about the build looks wrong.",
    },
    {
      question: "Is it safe to put an API key in a mobile app?",
      answer:
        "Public client keys, such as a billing platform key or a backend anonymous key protected by row level security, are safe. A model API key is not. A binary can be downloaded and inspected by anyone, and an extracted model key is billed to you with no upper bound.",
    },
    {
      question: "Where should model API keys live instead?",
      answer:
        "In server-side function secrets. The app calls your function, the function calls the model. That costs a little latency and one more deployment target, and it converts an unbounded financial risk into a bounded engineering cost.",
    },
    {
      question: "What is the point of a build wrapper script?",
      answer:
        "It validates the configuration before building and fails loudly when a required key is missing, so an incomplete release cannot be produced by habit. The raw build command still exists but is documented as something not to run directly for a customer-facing build.",
    },
    {
      question: "Why show a configuration error screen in development?",
      answer:
        "Because the alternative is a scattering of failed network calls that look like unrelated bugs. One explicit screen naming the problem saves hours of misdirected debugging, especially for a developer new to the project.",
    },
  ],
};
