import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "ai-islam-religious-qa-app-case-study",
  title:
    "AI Islam: Building a Question and Answer App Where Hallucination Is Unacceptable",
  seoTitle: "AI Islam Q&A App Case Study",
  description:
    "How we approached an AI question and answer app for religious topics, where a fluent wrong answer is the primary risk to manage.",
  excerpt:
    "A language model will answer a religious question with total confidence and no source. In this category that is the failure mode, not a rough edge.",
  category: "Case Studies",
  primaryKeyword: "ai question answering app",
  secondaryKeywords: [
    "llm app development",
    "ai chat app development",
    "hallucination mitigation app",
    "conversation history mobile app",
  ],
  published: "2026-08-04",
  authorId: "leadership-02",
  serviceSlug: "ai-development",
  keyTakeaway:
    "AI Islam answers religious questions conversationally. The engineering priority in a category like this is not response quality in the usual sense, it is provenance and restraint, because a model will produce a fluent, confident and unsourced answer to a question where being wrong carries real weight for the person who asked.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "Ask a question about Islam, get an answer. Conversations are stored locally so a person can return to what they asked, and answers can be read aloud or shared.",
        },
        {
          type: "p",
          text: "The product is simple to describe. The responsibility attached to it is not.",
        },
        {
          type: "callout",
          text: "A model does not know the difference between an answer it has grounds for and an answer it has assembled. Both come out at the same confidence.",
        },
      ],
    },
    {
      heading: "The risk that defines the category",
      blocks: [
        {
          type: "p",
          text: "General assistants are wrong in low-stakes ways most of the time. A wrong restaurant recommendation costs an evening. A wrong religious ruling can change how someone conducts part of their life.",
        },
        {
          type: "p",
          text: "That difference has to be visible in the product rather than buried in terms of service, and it constrains what the app should try to do.",
        },
        {
          type: "h3",
          text: "What that means in practice",
        },
        {
          type: "list",
          items: [
            "Scope should be narrow and stated. A question and answer app on a defined subject is defensible. An oracle is not.",
            "The distinction between explanation and ruling has to be maintained, because those are different things with different authority behind them.",
            "Deferring to a qualified human is a correct output, and the interface has to present it as such rather than as a failure to answer.",
            "Server-side inference is required, both to keep credentials out of the binary and so prompting and guardrails can be corrected without waiting for a store review.",
          ],
        },
        {
          type: "p",
          text: "That last point is the practical one. When a wrong answer is discovered, you want the fix live the same day. A change compiled into the app is live in a fortnight, if users update.",
        },
      ],
    },
    {
      heading: "The build",
      blocks: [
        {
          type: "table",
          head: ["Concern", "Choice", "Why"],
          rows: [
            ["History", "On-device database", "Conversations are personal; there is no reason to hold them on a server"],
            ["Credentials", "Secure platform storage", "Keystore and keychain rather than plain preferences"],
            ["Inference", "Server-side", "Keeps keys out of the binary and prompting changeable"],
            ["Output", "Text to speech and sharing", "Answers get read aloud and passed on"],
            ["Updates", "In-app update prompt", "Corrections should not wait for a user to notice"],
          ],
        },
        {
          type: "p",
          text: "Storing conversation history locally rather than server-side is worth stating as a deliberate choice. Someone's religious questions are among the more sensitive things they might type into a phone, and the safest place for that data is the device it was typed on.",
        },
        {
          type: "h3",
          text: "Streaming is a trust feature",
        },
        {
          type: "p",
          text: "Answers appear progressively rather than arriving as a block after a silence. That is usually described as a nicety. It is really about trust: a long pause followed by a wall of text reads as a machine deciding, whereas visible progress reads as a system working.",
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
            "Narrow the scope and say so in the product. A stated boundary is a feature, and it is the difference between a useful tool and an implied authority.",
            "Keep inference server-side. It protects credentials and it means a guardrail change is live in hours rather than after a store review.",
            "Make deferral a designed output. In a high-stakes category, pointing someone to a qualified human is the right answer often enough to deserve a proper screen.",
            "Keep sensitive history on the device. If you do not need it on a server, not holding it is the strongest privacy position available.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why is hallucination worse in a religious Q&A app?",
      answer:
        "Because a wrong answer changes how someone conducts part of their life, and the model presents a guess with exactly the same fluency and confidence as a grounded answer. In most categories a wrong answer is an inconvenience. Here it is the primary risk to manage.",
    },
    {
      question: "Should AI inference run on the device or a server?",
      answer:
        "On a server for this kind of product. It keeps credentials out of a binary anyone can inspect, and it means prompting and guardrails can be corrected the same day rather than waiting for a store review and user updates.",
    },
    {
      question: "Why store conversation history locally?",
      answer:
        "Because religious questions are among the more sensitive things a person types into a phone, and there is no product reason to hold them on a server. Data you never collect is data you can never leak.",
    },
    {
      question: "Is streaming a response just a visual nicety?",
      answer:
        "It is mostly a trust mechanism. A long silence followed by a block of text reads as a machine making a pronouncement. Text appearing progressively reads as a system working, and in a category where trust is the product that difference matters.",
    },
    {
      question: "How do you keep an AI app inside its scope?",
      answer:
        "State the boundary in the product, keep prompting server-side so it can be tightened quickly, and treat deferral to a qualified human as a designed output rather than a failure. An app that declines a question it should not answer is more trustworthy, not less.",
    },
  ],
};
