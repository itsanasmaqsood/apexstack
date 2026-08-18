import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "how-to-brief-ai-studio-without-wasting-time-money",
  title: "How to Brief an AI Studio Without Wasting Time or Money",
  seoTitle: "How to Brief an AI Studio Without Wasting Time or Money",
  description: "' That's not a brief. Here's what a brief that actually works looks like, and the four questions it needs to answer.",
  excerpt: "briefing an AI studio is different from briefing a design studio or a development agency.",
  category: "Choosing a Partner",
  primaryKeyword: "how to brief ai studio without wasting time money",
  secondaryKeywords: [
    "we want ai not brief",
    "four questions ai brief needs answer",
    "include brief send",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "technical-consulting",
  keyTakeaway: "AI is not a feature. it's a category of capability that can be applied to a specific job in a specific context. \"we want AI\" is closer to \"we want software\" than it is to a brief a studio can act on.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "a founder sent me a brief that said \"we want AI.\"",
        },
        {
          type: "p",
          text: "i sent back eight questions. they answered three of them.",
        },
        {
          type: "p",
          text: "we spent the next two weeks in a loop, me asking what the AI needed to know, them describing what they wanted it to feel like. it wasn't a bad conversation. it just was the scoping conversation that should have happened before they sent the brief.",
        },
        {
          type: "p",
          text: "briefing an AI studio is different from briefing a design studio or a development agency. the technology is less constrained, AI can be applied to almost any problem in almost any way: which means the scoping decisions are more consequential, not less. a vague brief for a design agency produces a product that looks wrong. a vague brief for an AI studio produces a product that behaves unpredictably.",
        },
      ],
    },
    {
      heading: "why \"we want AI\" is not a brief",
      blocks: [
        {
          type: "p",
          text: "AI is not a feature. it's a category of capability that can be applied to a specific job in a specific context. \"we want AI\" is closer to \"we want software\" than it is to a brief a studio can act on.",
        },
        {
          type: "p",
          text: "what makes an AI feature work, or not, is precision about the job it's doing. an AI that summarises documents does a different job from an AI that extracts structured data from documents, which does a different job from an AI that answers questions about documents. each of those requires different architecture, different evaluation criteria, and different decisions about what the AI is allowed to do when it isn't confident.",
        },
        {
          type: "p",
          text: "the job description is the brief. everything else follows from it.",
        },
      ],
    },
    {
      heading: "four questions your AI brief needs to answer",
      blocks: [
        {
          type: "p",
          text: "what is the user doing manually right now that this AI will do instead? specific and concrete. not \"analysing data\", \"spending 40 minutes after each customer call writing up notes and tagging them by theme before adding them to the CRM.\" that level of specificity is what makes an AI feature buildable. it tells the studio what input the AI receives, what output it produces, and what good looks like.",
        },
        {
          type: "p",
          text: "what data does the AI have access to? AI features work from data. the quality of an AI feature is limited by the quality and quantity of the data it can access. a chatbot that can only reference a small FAQ is different from a chatbot that can reference your entire product documentation and user history. before briefing, know: what does the AI need to know to do the job? where does that information live today? who controls access to it?",
        },
        {
          type: "p",
          text: "what should the AI do when it isn't confident? the most important product decision in any AI feature. a confident wrong answer is often worse than an honest \"i'm not sure.\" for customer-facing AI, the failure mode matters as much as the success case. should the AI decline to answer and escalate to a human? say it isn't sure and offer alternatives? attempt an answer with a confidence signal? this decision shapes the entire user experience around the feature.",
        },
        {
          type: "p",
          text: "how will you know if it's working? a measurable success condition. \"users find it helpful\" is not measurable. \"handles 60% of support tickets without escalation\" is. \"reduces time spent on report generation from 40 minutes to under 5 minutes\" is. the success condition tells the studio what to optimise for and gives you a way to evaluate whether the feature is delivering value before you declare it done.",
        },
      ],
    },
    {
      heading: "what makes an AI brief different from a regular brief",
      blocks: [
        {
          type: "p",
          text: "two things. first, the failure modes are different. software either works or it doesn't, and \"doesn't work\" is usually obvious. AI features exist on a spectrum: they can be right most of the time, wrong in ways users don't notice, or confidently wrong in ways that damage trust. the brief needs to address what the acceptable failure rate is and what failure looks like.",
        },
        {
          type: "p",
          text: "second, the evaluation criteria need to be defined before the build, not after. it's very easy to build an AI feature that feels impressive in a demo and is marginally useful in production. the brief should specify how the feature will be evaluated in real conditions: what data you'll look at, what user behaviour you'll measure, what threshold constitutes success.",
        },
      ],
    },
    {
      heading: "what to include in the brief you send",
      blocks: [
        {
          type: "p",
          text: "the manual workflow the AI replaces. the data the AI has access to. the failure handling decision. the success metric. and, if you have them: examples of the input (a sample document, a sample customer message, a sample data export) and examples of the ideal output.",
        },
        {
          type: "p",
          text: "examples are the single highest-leverage thing you can include in an AI brief. they communicate intent in a way that written descriptions rarely fully capture. a studio that sees three examples of good AI output will build something closer to what you're imagining than a studio that reads three paragraphs describing it.",
        },
        {
          type: "p",
          text: "at ApexStack, AI integrations are a regular part of our work, chatbots, document processing, workflow automation, custom model integrations. the scoping conversation for AI features is the most important part of the engagement. bring us the manual workflow you're trying to replace and we'll work through the brief together.",
        },
        {
          type: "p",
          text: "what's the thing your users are doing manually today that should have an AI doing it instead?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
