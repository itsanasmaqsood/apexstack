import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "mistakes-non-technical-founders-hiring-dev-agency",
  title: "7 Mistakes Non-Technical Founders Make When Hiring a Dev Agency",
  seoTitle: "7 Mistakes Non-Technical Founders Make When Hiring a Dev",
  description: "The mistakes founders make when hiring a development agency are almost always the same seven.",
  excerpt: "the seven mistakes below are the ones that show up most consistently in the post-mortems. knowing them before you hire doesn't guarantee a good outcome.",
  category: "Choosing a Partner",
  primaryKeyword: "mistakes non technical founders hiring dev agency",
  secondaryKeywords: [
    "choosing price alone",
    "agreeing hourly billing without scope cap",
    "skipping discovery scoping phase",
    "not asking they handle scope changes",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "product-engineering",
  keyTakeaway: "the cheapest proposal is almost never the best value. development is a domain where you pay for experience, and inexperienced teams charge less because their output requires more revision, more oversight, and more time to get right.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "i've talked to more than 200 founders who've hired development agencies.",
        },
        {
          type: "p",
          text: "the mistakes are almost always the same seven.",
        },
        {
          type: "p",
          text: "not because founders are careless, most of them thought carefully about the decision. but hiring a dev agency when you're non-technical is genuinely hard. you're evaluating expertise you can't directly assess, trusting proposals you can't fully verify, and making a decision that will shape the next six months of your company.",
        },
        {
          type: "p",
          text: "the seven mistakes below are the ones that show up most consistently in the post-mortems. knowing them before you hire doesn't guarantee a good outcome. not knowing them almost guarantees a bad one.",
        },
      ],
    },
    {
      heading: "1. choosing on price alone",
      blocks: [
        {
          type: "p",
          text: "the cheapest proposal is almost never the best value. development is a domain where you pay for experience, and inexperienced teams charge less because their output requires more revision, more oversight, and more time to get right.",
        },
        {
          type: "p",
          text: "the cost of a rewrite: which is what you often end up doing with under-priced work, is almost always higher than the difference in initial price. compare proposals on evidence of comparable work, not on the number at the bottom of the document.",
        },
      ],
    },
    {
      heading: "2. not asking to see comparable products they've shipped",
      blocks: [
        {
          type: "p",
          text: "portfolios show what agencies want you to see. asking specifically for \"the last three products you shipped at this scope and price point\" shows you something different: what they actually produce under constraints similar to yours.",
        },
        {
          type: "p",
          text: "if the agency can't point to at least two products that are live, have real users, and were built within a comparable budget and timeline. That's a meaningful signal. it doesn't mean they're bad. it means you don't have evidence they're not bad.",
        },
      ],
    },
    {
      heading: "3. agreeing to hourly billing without a scope cap",
      blocks: [
        {
          type: "p",
          text: "hourly billing is the default model for most agencies. it's also the model that creates misaligned incentives at every step: scope changes benefit the agency financially, delays extend the engagement, and your inexperience in specifying requirements becomes a revenue opportunity.",
        },
        {
          type: "p",
          text: "if you're going to work on an hourly basis, set a cap, a maximum total before the engagement needs to be re-evaluated. better still, find an agency that offers fixed-scope, fixed-price engagements. the constraint of a fixed price forces the agency to scope carefully upfront, which is actually good for the product.",
        },
        {
          type: "p",
          text: "at ApexStack, our launch sprint is fixed scope and fixed price, $6,500, 4-6 weeks. that model exists because we believe it produces better outcomes for both parties.",
        },
      ],
    },
    {
      heading: "4. not defining what \"done\" looks like before you start",
      blocks: [
        {
          type: "p",
          text: "the most common source of disappointment in agency engagements isn't bad work. It's misaligned expectations about what the work was supposed to produce.",
        },
        {
          type: "p",
          text: "before you sign anything, write down in plain language what a successful engagement looks like. what does the product do? what does it not do? what does the user experience look like at the end? what does handoff include?",
        },
        {
          type: "p",
          text: "a good agency will have opinions on this document and will push back on parts of it. that's a positive sign. an agency that accepts your definition of done without any discussion is either very experienced at managing client expectations or not experienced enough to know what questions to ask.",
        },
      ],
    },
    {
      heading: "5. hiring an agency that doesn't also do design",
      blocks: [
        {
          type: "p",
          text: "development-only agencies produce code. code without design decisions produces something that works technically but doesn't feel like a product.",
        },
        {
          type: "p",
          text: "for non-technical founders especially, design and development need to be in the same team: not because you can't manage two vendors, but because the product decisions that happen at the intersection of design and engineering are where most of the important choices get made. if those conversations happen between two separate vendors that don't talk to each other, the product pays the cost.",
        },
        {
          type: "p",
          text: "look for agencies where design and engineering work together from the start, not agencies that do development and bring in a designer when you ask.",
        },
      ],
    },
    {
      heading: "6. skipping the discovery or scoping phase",
      blocks: [
        {
          type: "p",
          text: "agencies that move straight to \"send us your specs and we'll build\" are asking you to do the hardest part of the job without the expertise to do it well.",
        },
        {
          type: "p",
          text: "a proper discovery or scoping phase, even a short one, is where the agency applies their product experience to your idea and surfaces things you hadn't thought of. what's the core loop? what should be cut from v1? what technical decisions will constrain future features if made wrong?",
        },
        {
          type: "p",
          text: "if an agency skips this, you're paying them to execute your assumptions rather than improve them. for non-technical founders, that's a high-risk model.",
        },
      ],
    },
    {
      heading: "7. not asking how they handle scope changes",
      blocks: [
        {
          type: "p",
          text: "scope will change. it always does. the question isn't whether it will happen. It's what the agency's response will be when it does.",
        },
        {
          type: "p",
          text: "ask this explicitly before you sign: \"what happens when i change my mind about a feature mid-build?\" the answer tells you everything about how the relationship will work when things get difficult.",
        },
        {
          type: "p",
          text: "reasonable answers: \"we evaluate the change and adjust scope or timeline accordingly\" or \"we have a change order process that's transparent and fair.\" unreasonable answers: silence, defensiveness, or a reference to the contract. an agency that gets rigid about scope changes hasn't built enough products to know that scope always changes.",
        },
        {
          type: "p",
          text: "if you want a direct view on how ApexStack handles these questions, ask us. we'd rather you understand our process before you sign than discover it after something unexpected happens.",
        },
        {
          type: "p",
          text: "which of these seven is the one you're most worried about getting wrong?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
