import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "build-ai-mvp-for-startup",
  title: "How to Build an AI MVP for Your Startup (The Real Process)",
  seoTitle: "How to Build an AI MVP for Your Startup (The Real Process)",
  description: "Want to build an AI MVP for your startup? Here's the honest process: what to decide first, what to skip, and how to ship in 4-6 weeks without wasting runway.",
  excerpt: "this is what those decisions look like, and what the build actually involves after you've made them.",
  category: "MVP & Startups",
  primaryKeyword: "build ai mvp for startup",
  secondaryKeywords: [
    "1 a prompted llm call",
    "2 retrieval augmented generation rag",
    "3 fine tuned or custom models",
    "week 1 scope lock and architecture",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "ai-development",
  keyTakeaway: "\" not the roadmap. not the vision. the one thing a real user will do on day one that tells you whether you've solved anything at all.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "a founder came to us six months after paying another agency $22,000. she had a demo. no users. no data. and a codebase so over-engineered it would take another $15,000 just to add a feature.",
        },
        {
          type: "p",
          text: "that's not a horror story. that's the default outcome when nobody stops you from building too much.",
        },
        {
          type: "p",
          text: "if you're a non-technical founder trying to build an AI MVP for your startup, the most expensive mistake you can make isn't hiring the wrong developer. it's starting to build before you've made the three decisions that actually determine whether your MVP will survive contact with real users.",
        },
        {
          type: "p",
          text: "this is what those decisions look like, and what the build actually involves after you've made them.",
        },
      ],
    },
    {
      heading: "the decision you can't outsource",
      blocks: [
        {
          type: "p",
          text: "i thought the hard part was building. it's not.",
        },
        {
          type: "p",
          text: "the hard part is saying, out loud, with your name attached to it: \"this one workflow is the product.\" not the roadmap. not the vision. the one thing a real user will do on day one that tells you whether you've solved anything at all.",
        },
        {
          type: "p",
          text: "for AI products specifically, this is brutal to nail down because the surface area of what AI could do is enormous. founders walk in wanting an AI that drafts contracts, summarises meetings, replies to emails, scores leads, and predicts churn. that's not an MVP. that's a product suite that would take 18 months and $400,000 to build properly.",
        },
        {
          type: "p",
          text: "an AI MVP is the one-sentence version: \"for [specific person], our product does [specific AI-powered thing] that saves them [specific cost or time].\"",
        },
        {
          type: "p",
          text: "if you can't write that sentence before you talk to a developer, you're not ready to build yet. you're ready to do two more customer interviews.",
        },
      ],
    },
    {
      heading: "what \"AI\" actually means in your MVP",
      blocks: [
        {
          type: "p",
          text: "i used to assume every founder knew this. most don't, and it's not their fault.",
        },
        {
          type: "p",
          text: "when most founders say \"i want AI in my product,\" they mean one of three very different things: and each one has a completely different cost, timeline, and risk profile.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "1. a prompted LLM call",
      answer: "you send user input to GPT-4o or Claude, with a carefully crafted system prompt, and return the output. this is the right starting point for 80% of AI MVPs. it's fast to build, cheap to run at early scale, and good enough to validate whether users will actually pay for the outcome.",
    },
    {
      question: "2. retrieval-augmented generation (RAG)",
      answer: "you have proprietary data: your client's documents, a knowledge base, historical records, and the LLM needs to answer questions or take actions based on that data. RAG pulls relevant chunks, feeds them to the model as context, and grounds the output in something real instead of the model's general training.",
    },
    {
      question: "3. fine-tuned or custom models",
      answer: "you need a model that behaves differently from any existing frontier model because your use case is genuinely domain-specific and you have thousands of validated training examples.",
    },
    {
      question: "week 1: scope lock and architecture",
      answer: "this is the week most people undervalue. it's not coding. it's decision-making.",
    },
    {
      question: "weeks 2-3: the core loop",
      answer: "this is where the actual AI plumbing gets built. the prompt engineering, the retrieval layer if you need it, the API that connects user input to model output and back to the UI. this is also where you learn what the model actually does with edge cases, the messy, real-world inputs that no demo ever includes.",
    },
    {
      question: "weeks 4-5: the product around the AI",
      answer: "the AI working is table stakes. the product that makes it usable is what most agencies underinvest in.",
    },
    {
      question: "week 6: testing, hardening, launch",
      answer: "real user scenarios. not happy path. not the use case you designed for. the weird inputs. the edge cases. the user who tries to break it in the first five minutes because that's what real users do.",
    },
  ],
};
