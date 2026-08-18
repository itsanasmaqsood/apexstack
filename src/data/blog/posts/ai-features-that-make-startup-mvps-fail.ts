import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "ai-features-that-make-startup-mvps-fail",
  title: "6 AI Features That Actually Make Startup MVPs Fail Faster",
  seoTitle: "6 AI Features That Actually Make Startup MVPs Fail Faster",
  description: "AI features don't fix a broken product. They amplify whatever's already there, including the problems.",
  excerpt: "these are the six AI features i see most often on MVPs that fail: not because the AI was bad, but because it was solving the wrong problem, or solving the right problem at the wrong stage.",
  category: "MVP & Startups",
  primaryKeyword: "ai features that make startup mvps fail",
  secondaryKeywords: [
    "recommendations before theres data",
    "ai search product no search problem",
    "ai summarisation content users arent reading",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "founders add chatbots to products that haven't yet confirmed users want the underlying product. the chatbot answers questions about features that users haven't discovered. it automates a workflow that users haven't adopted.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "AI features don't make bad products good.",
        },
        {
          type: "p",
          text: "they make bad products fail faster.",
        },
        {
          type: "p",
          text: "the acceleration works in both directions: the right AI feature on a product with real users can dramatically increase engagement and retention. the wrong AI feature on a product that hasn't found its core value yet compounds the confusion and costs more to fix than to have built right the first time.",
        },
        {
          type: "p",
          text: "these are the six AI features i see most often on MVPs that fail: not because the AI was bad, but because it was solving the wrong problem, or solving the right problem at the wrong stage.",
        },
      ],
    },
    {
      heading: "1. the AI chatbot that replaces a workflow nobody's using yet",
      blocks: [
        {
          type: "p",
          text: "founders add chatbots to products that haven't yet confirmed users want the underlying product. the chatbot answers questions about features that users haven't discovered. it automates a workflow that users haven't adopted. it provides assistance for a journey that users aren't taking.",
        },
        {
          type: "p",
          text: "AI chatbots create value when they accelerate a workflow that already has momentum. before the workflow exists, they're a sophisticated way to confirm that the product doesn't yet have one.",
        },
        {
          type: "p",
          text: "the test: can you describe the specific manual thing the chatbot replaces, in a product where users are doing that thing today? if yes, the chatbot belongs. if no, the workflow needs to come first.",
        },
      ],
    },
    {
      heading: "2. recommendations before there's data",
      blocks: [
        {
          type: "p",
          text: "recommendation systems are data products. they require user behaviour data to make recommendations that are meaningfully better than random. in the first weeks of an MVP, you have almost no data, certainly not enough to train recommendations that users will find useful.",
        },
        {
          type: "p",
          text: "founders build recommendation engines before they have users, train them on synthetic data or small datasets, and launch a feature that recommends with high confidence from almost no information. users receive recommendations that feel arbitrary (because they are), trust the product less, and the \"AI-powered\" label actively hurts rather than helps.",
        },
        {
          type: "p",
          text: "the test: do you have at least a few hundred active users with meaningful interaction data? if not, use manual curation or simple heuristics that you can reason about. AI recommendations come later.",
        },
      ],
    },
    {
      heading: "3. AI-generated content as a substitute for product-market fit",
      blocks: [
        {
          type: "p",
          text: "some founders use AI content generation: AI that writes, summarises, or produces content inside the product, as a way to make a thin product feel fuller. if users aren't engaging deeply, add AI-generated content. if the core loop feels empty, fill it with AI output.",
        },
        {
          type: "p",
          text: "this approach delays the discovery that the core product isn't working. users get more content, but it doesn't address the underlying problem: they're not coming back because the product doesn't do something valuable enough, not because there's insufficient content.",
        },
        {
          type: "p",
          text: "AI-generated content is a useful feature for products that already have engaged users who need more of something. it's not a substitute for figuring out why users aren't engaged.",
        },
      ],
    },
    {
      heading: "4. AI search on a product with no search problem",
      blocks: [
        {
          type: "p",
          text: "semantic search and AI-powered search are genuinely impressive technologies. they're also unnecessary for most MVP-stage products, where the content or data being searched is small enough that standard keyword search works fine.",
        },
        {
          type: "p",
          text: "founders add AI search because it sounds good in a demo and on a feature list. users don't experience it as AI-powered. They experience it as \"search that works\" or \"search that doesn't.\" whether it's powered by vector embeddings or a simple LIKE query doesn't affect user experience when the dataset is small.",
        },
        {
          type: "p",
          text: "the test: do users have a search problem today? are they typing queries and not finding things they expect to be there? if no, there's no search problem to solve, AI-powered or otherwise.",
        },
      ],
    },
    {
      heading: "5. autonomous AI agents before you trust simple AI responses",
      blocks: [
        {
          type: "p",
          text: "agents, AI that takes actions on behalf of users, not just responds to them, are one of the highest-risk AI features to build at MVP stage. they send emails, create records, modify data, make decisions with downstream consequences. when they go wrong, they go wrong in ways that are hard to undo and directly visible to users.",
        },
        {
          type: "p",
          text: "founders want agents because they're powerful. the problem is that getting agents right requires deep understanding of the failure modes: which requires running the simpler, read-only version first and learning from how it behaves in production before you give it the ability to take action.",
        },
        {
          type: "p",
          text: "build the read-only version first. understand how the AI behaves on your actual user data. then, incrementally, add the lowest-risk actions. never give an AI agent the ability to do something irreversible before you've seen how it handles the reversible cases.",
        },
      ],
    },
    {
      heading: "6. AI summarisation of content users aren't reading",
      blocks: [
        {
          type: "p",
          text: "if users aren't reading the full content, making the AI summarise it doesn't solve the problem. It confirms that the content isn't valuable enough to read. the summary is slightly more accessible, but the underlying issue (content that doesn't serve user needs) remains.",
        },
        {
          type: "p",
          text: "AI summarisation is a useful feature when: users have long content they need to read, they're currently reading it and finding it slow, and a shorter version would help them act on it faster. those are very specific conditions. building AI summarisation as a default \"AI feature\" without those conditions produces a feature that users ignore in a slightly more sophisticated way.",
        },
      ],
    },
    {
      heading: "the question worth asking before any AI feature",
      blocks: [
        {
          type: "p",
          text: "what is the user currently doing manually that this AI will do instead? if the answer is specific, observable, and confirmed by real user behaviour, build the feature. if the answer is vague, hypothetical, or based on what you think users should be doing, find out what users are actually doing first.",
        },
        {
          type: "p",
          text: "at ApexStack, we push back on AI features that don't meet this test. not because AI is expensive. It's not, but because building the wrong AI feature delays learning what the right one is.",
        },
        {
          type: "p",
          text: "if you want to talk through whether a specific AI feature you're planning makes sense for your stage, that conversation usually takes 30 minutes and produces a clear answer.",
        },
        {
          type: "p",
          text: "what's the manual behaviour in your product that you're hoping AI will replace?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
