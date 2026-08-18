import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "how-to-validate-startup-idea-before-building",
  title: "How to Validate Your Startup Idea Before You Build Anything",
  seoTitle: "How to Validate Your Startup Idea Before You Build Anything",
  description: "Building before validating is the most expensive mistake in early-stage startups.",
  excerpt: "the founders i've watched avoid this mistake all share one habit: they validate before they build. not after, not during, before.",
  category: "MVP & Startups",
  primaryKeyword: "how to validate startup idea before building",
  secondaryKeywords: [
    "validated enough build looks like",
    "thing founders resist about this",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "real validation is evidence that someone will change their behaviour because of your product. not that they like it. not that they'd use it if it were free.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "i built for eight months before i showed the product to a single real user.",
        },
        {
          type: "p",
          text: "not because i was hiding it. because i was convinced i already knew what they needed.",
        },
        {
          type: "p",
          text: "i was wrong. expensively, timelessly wrong. the thing i'd spent eight months building solved a problem that real users experienced only occasionally and worked around easily. what they actually struggled with, the thing that kept them up, was something i'd dismissed as obvious during planning.",
        },
        {
          type: "p",
          text: "the founders i've watched avoid this mistake all share one habit: they validate before they build. not after, not during, before. this is what that actually looks like in practice.",
        },
      ],
    },
    {
      heading: "what validation actually is",
      blocks: [
        {
          type: "p",
          text: "founders often confuse validation with approval. they show someone the idea, the person says \"that sounds cool,\" and they count that as signal. it isn't.",
        },
        {
          type: "p",
          text: "real validation is evidence that someone will change their behaviour because of your product. not that they like it. not that they'd use it if it were free. that they'll do something different, pay money, change their workflow, switch from something they're using now, because your product makes a real difference to a real problem they have.",
        },
        {
          type: "p",
          text: "that's a higher bar. it should be. building software is expensive, and the cost of building the wrong thing is everything you spent plus everything you could have learned instead.",
        },
      ],
    },
    {
      heading: "three validation methods that don't require building",
      blocks: [
        {
          type: "p",
          text: "the problem interview. talk to 15-20 people who match your target user description. don't pitch your idea, ask about the problem. how do they currently handle it? how often does it come up? what have they tried? what would they pay for a solution if it worked perfectly? the answers will surprise you more than any user research report.",
        },
        {
          type: "p",
          text: "the signal you're looking for: people who describe the problem in detail without prompting, who've tried multiple solutions that didn't fully work, and who can name a number when you ask what it would be worth to solve. vague interest is not signal. specific frustration is.",
        },
        {
          type: "p",
          text: "the fake door test. build a landing page that describes what you're building, includes a price, and has a \"get started\" or \"join waitlist\" button. run $200 of targeted ads to your ICP. measure what percentage of people who see the page click the button.",
        },
        {
          type: "p",
          text: "you're not selling anything yet, but measuring whether people are interested enough to click when they see the value proposition is genuinely informative. a 2% click rate tells you something different from a 12% click rate, and you've found out without writing a line of application code.",
        },
        {
          type: "p",
          text: "the manual concierge. do the thing your product will eventually do, manually. if you're building a tool that generates reports from raw data: take someone's raw data and generate a report manually, then ask them if they'd pay for it. if you're building an AI product that categorises customer feedback: do the categorisation yourself with a spreadsheet, present the output, and see if it's actually useful.",
        },
        {
          type: "p",
          text: "this method works because it tests the value proposition without testing the technology. if people love the output when it's done manually, they'll love the automated version. if they don't find the manual version valuable, automation won't save the idea.",
        },
      ],
    },
    {
      heading: "what \"validated enough to build\" actually looks like",
      blocks: [
        {
          type: "p",
          text: "not \"people thought it sounded interesting.\" not \"my co-founder agrees.\" not \"i couldn't find a direct competitor\" (the absence of competition usually means nobody's solved it yet, not that nobody's tried).",
        },
        {
          type: "p",
          text: "validated enough to build means at least one of: someone paid you for the manual version. ten or more people on a waitlist who gave you their email and said yes to a specific price point. three or more user interviews where people described the problem in detail and rated it high-priority in their work or life.",
        },
        {
          type: "p",
          text: "the threshold shifts with how much you're planning to spend on the build. a $2,000 side project needs lighter validation than a $30,000 development engagement. the more money and time at stake, the more confident you should want to be before you commit.",
        },
      ],
    },
    {
      heading: "the thing founders resist about this",
      blocks: [
        {
          type: "p",
          text: "the resistance to validation is usually one of two things: fear that showing the idea before it's built will let someone steal it (almost never a real risk: execution is what makes products, not ideas), or fear that the validation results will come back negative.",
        },
        {
          type: "p",
          text: "the second fear is the more honest one, and it's worth sitting with. a negative validation result is genuinely the best outcome at this stage. it costs almost nothing and saves you six months of building something nobody wants.",
        },
        {
          type: "p",
          text: "if you've done the validation and you're confident in what you've found. The next conversation is usually about scope. what's the smallest version of this that delivers the value your users are paying for? that's where we start.",
        },
        {
          type: "p",
          text: "what did your last user conversation tell you that your planning hadn't?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
