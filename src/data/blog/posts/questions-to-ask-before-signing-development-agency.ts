import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "questions-to-ask-before-signing-development-agency",
  title: "10 Questions to Ask Before Signing with a Development Agency",
  seoTitle: "10 Questions to Ask Before Signing with a Development Agency",
  description: "The right questions reveal more than any proposal or portfolio.",
  excerpt: "the ten questions below are the ones i wish i'd asked. some of them are uncomfortable to ask.",
  category: "Choosing a Partner",
  primaryKeyword: "questions to ask before signing development agency",
  secondaryKeywords: [
    "do handle scope changes",
    "does design process look like",
    "billing structured whats total maximum",
    "does handoff include",
    "do communicate during build",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "product-engineering",
  keyTakeaway: "portfolios are curated. \"the last three\" is not. if the agency struggles to name three comparable products that shipped and are currently live.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "the contract looked fine. the calls felt good.",
        },
        {
          type: "p",
          text: "eight months and $40,000 later, i had something i couldn't use.",
        },
        {
          type: "p",
          text: "what i didn't do was ask the right questions before i signed. i asked about their process, their team, their portfolio. i didn't ask the questions that would have revealed whether this particular agency was actually the right fit for my particular situation.",
        },
        {
          type: "p",
          text: "the ten questions below are the ones i wish i'd asked. some of them are uncomfortable to ask. that discomfort is the point, an agency worth working with will answer them without getting defensive.",
        },
      ],
    },
    {
      heading: "1. can you show me the last three products you shipped at this scope and price?",
      blocks: [
        {
          type: "p",
          text: "not the portfolio. the last three. at this scope and price point, specifically.",
        },
        {
          type: "p",
          text: "portfolios are curated. \"the last three\" is not. if the agency struggles to name three comparable products that shipped and are currently live. That tells you something important about whether they're actually optimised for your type of engagement or just willing to try it.",
        },
      ],
    },
    {
      heading: "2. who specifically will be working on my product?",
      blocks: [
        {
          type: "p",
          text: "some agencies sell you on senior talent and deliver with junior contractors. asking for the names and roles of the specific people on your project, and asking to meet them before you sign, is a reasonable request that a good agency should accommodate.",
        },
        {
          type: "p",
          text: "if the answer is vague (\"our experienced team\"), push harder. you're paying for specific people's judgment, not a generic team's output.",
        },
      ],
    },
    {
      heading: "3. how do you handle scope changes?",
      blocks: [
        {
          type: "p",
          text: "this is the most revealing question on the list. scope will change. The question is how the agency responds when it does.",
        },
        {
          type: "p",
          text: "listen for: transparency about the process, a fair mechanism for evaluating changes, and an attitude that's collaborative rather than contractual. be wary of: references to penalty clauses, defensiveness, or an implication that scope changes are your fault for not speccing correctly upfront.",
        },
      ],
    },
    {
      heading: "4. what does your design process look like?",
      blocks: [
        {
          type: "p",
          text: "for agencies that include design: ask how design and development work together. do designers and developers work in the same team? do design decisions happen before engineering starts, or iteratively? what happens when a design that looks good turns out to be technically complex?",
        },
        {
          type: "p",
          text: "for agencies that don't include design: understand exactly what you're getting and what you'll need to manage separately. a development-only engagement requires you to bring decisions to the table that a full-service agency would make with you.",
        },
      ],
    },
    {
      heading: "5. how is billing structured, and what's the total maximum?",
      blocks: [
        {
          type: "p",
          text: "if it's hourly: what's the estimated total, and is there a cap? what triggers additional billing outside the estimate? if it's fixed-price: what's explicitly included and excluded? what's the process if the fixed scope turns out to be larger than estimated?",
        },
        {
          type: "p",
          text: "the goal isn't to find a loophole. It's to understand what the financial relationship looks like when things don't go exactly as planned, because they rarely do.",
        },
      ],
    },
    {
      heading: "6. what does the handoff include?",
      blocks: [
        {
          type: "p",
          text: "at the end of the engagement, what do you receive? source code, yes. but also: documentation, credentials, deployment setup, a walkthrough of the codebase for whoever maintains it next?",
        },
        {
          type: "p",
          text: "some agencies consider the code the handoff and leave everything else for you to figure out. others do a proper knowledge transfer. the difference matters significantly if you'll be onboarding another developer later or if something breaks and you need to debug it without the original team.",
        },
      ],
    },
    {
      heading: "7. how do you communicate during the build?",
      blocks: [
        {
          type: "p",
          text: "async vs sync matters more than most founders expect. an agency that works async-first, updates in writing, decisions documented, progress visible without a call, is usually easier to stay aligned with than one that relies on weekly calls to share everything.",
        },
        {
          type: "p",
          text: "ask specifically: how will i know what's been built this week? where do decisions get documented? if i have a question at 9pm, when should i expect an answer?",
        },
      ],
    },
    {
      heading: "8. what happens if the timeline slips?",
      blocks: [
        {
          type: "p",
          text: "timelines slip. what you want to know is how the agency behaves when they do, and who absorbs the cost.",
        },
        {
          type: "p",
          text: "reasonable: honest communication early, a revised timeline with a clear reason, and an offer to discuss what tradeoffs can recover time. unreasonable: silence until a deadline passes, blame on scope changes you agreed to, or a request for more budget to complete what was already quoted.",
        },
      ],
    },
    {
      heading: "9. what's the one thing that most often causes your projects to run over?",
      blocks: [
        {
          type: "p",
          text: "this question reveals two things: whether the agency is self-aware about their failure modes, and whether those failure modes are relevant to your project.",
        },
        {
          type: "p",
          text: "common honest answers: unclear specs at kickoff, scope creep from founder-side changes, third-party API dependencies that behave unexpectedly. vague or defensive answers suggest either that things don't go over (unlikely) or that the agency isn't honest about why they do (a bigger problem).",
        },
      ],
    },
    {
      heading: "10. why would you not be the right agency for my project?",
      blocks: [
        {
          type: "p",
          text: "the best agencies know what they're not good at. an agency that claims to be the right fit for every project is either inexperienced or dishonest.",
        },
        {
          type: "p",
          text: "listen for specificity: \"we're not the right fit if you need native mobile, because we don't have strong iOS/Android experience.\" \"we're not the right fit if your timeline is under three weeks. That's not enough time for us to do good work.\" specificity suggests self-awareness. vagueness suggests they'll say yes to everything and figure it out later.",
        },
        {
          type: "p",
          text: "at ApexStack, we answer all ten of these questions before any founder signs with us. if you want to run through them with our team. That conversation is easy to start. the answers will tell you quickly whether we're the right fit or not, and we'd rather you know that upfront.",
        },
        {
          type: "p",
          text: "which of these ten questions would have saved you the most trouble in a past engagement?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
