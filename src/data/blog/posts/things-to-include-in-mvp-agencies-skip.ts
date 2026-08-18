import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "things-to-include-in-mvp-agencies-skip",
  title: "8 Things to Include in Your MVP That Most Agencies Skip",
  seoTitle: "8 Things to Include in Your MVP That Most Agencies Skip",
  description: "Your agency built what you asked for. These 8 things weren't in the brief. And their absence is why the first month after launch is harder than it should be.",
  excerpt: "if you're about to start a build, or if you're reviewing a proposal, here's what to make sure is included.",
  category: "Choosing a Partner",
  primaryKeyword: "things to include in mvp agencies skip",
  secondaryKeywords: [
    "working password reset flow",
    "transactional email deliverability",
    "basic analytics event tracking",
    "environment variable secret management",
  ],
  published: "2026-06-27",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "users forget their password within hours of signing up. it will happen on the day you launch. a password reset flow that doesn't work: or worse, one that sends an email that goes to spam, with a link that expires before the user clicks it, means losing that user permanently.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "your agency built what you asked for.",
        },
        {
          type: "p",
          text: "these eight things weren't in the brief.",
        },
        {
          type: "p",
          text: "they rarely are. not because agencies don't know about them, but because founders don't ask for them, and most agencies operate on the principle of building exactly what's specified rather than what's actually needed. the result: a technically complete product that's harder to operate, harder to grow, and harder to maintain than it should be.",
        },
        {
          type: "p",
          text: "if you're about to start a build, or if you're reviewing a proposal, here's what to make sure is included.",
        },
      ],
    },
    {
      heading: "1. a working password reset flow",
      blocks: [
        {
          type: "p",
          text: "users forget their password within hours of signing up. it will happen on the day you launch. a password reset flow that doesn't work: or worse, one that sends an email that goes to spam, with a link that expires before the user clicks it, means losing that user permanently.",
        },
        {
          type: "p",
          text: "this seems obvious. it's skipped more often than you'd believe, usually because it's not in the brief and adding it mid-build requires email infrastructure that the developer wasn't planning to set up. specify it explicitly. test it yourself before you launch.",
        },
      ],
    },
    {
      heading: "2. an admin panel",
      blocks: [
        {
          type: "p",
          text: "not for users, for you. a simple view of who has signed up, what they've done, what plan they're on, and whether anything looks broken. without this, the first month after launch involves emailing developers to query the database every time you want to understand what's happening in your product.",
        },
        {
          type: "p",
          text: "a basic admin panel is half a day of engineering time. the operational value in the first 90 days is enormous. You'll use it every day. it's almost always left out of briefs because founders think of it as a \"nice to have.\" it's actually the thing that makes post-launch operations possible.",
        },
      ],
    },
    {
      heading: "3. proper error handling and user-facing error messages",
      blocks: [
        {
          type: "p",
          text: "when something goes wrong: a failed payment, a broken API response, a validation error, users need to know what happened and what to do next. a blank screen or a raw error code tells users the product is broken. a clear, friendly error message tells them what to do differently.",
        },
        {
          type: "p",
          text: "error handling isn't glamorous. it doesn't appear in portfolio screenshots. it's the difference between a product that feels professional and one that feels unfinished, and users make that judgement call in the first minute of something going wrong.",
        },
      ],
    },
    {
      heading: "4. transactional email with real deliverability",
      blocks: [
        {
          type: "p",
          text: "welcome emails, password resets, billing receipts, important notifications, these go to spam if the email infrastructure isn't set up correctly. setting up email deliverability means configuring SPF, DKIM, and DMARC records, using a reputable email sending service (resend, postmark, sendgrid), and warming up the domain if necessary.",
        },
        {
          type: "p",
          text: "founders discover this problem when users report that they're not receiving emails. by that point, the trust damage is already done. specify that email deliverability setup is in scope and ask the agency to demonstrate it before handoff.",
        },
      ],
    },
    {
      heading: "5. basic analytics and event tracking",
      blocks: [
        {
          type: "p",
          text: "not a full analytics dashboard, a simple event tracking setup that tells you which core actions users are taking. how many users completed onboarding? how many reached the core feature? where are they dropping off?",
        },
        {
          type: "p",
          text: "without event tracking from day one, the first month's user behaviour is invisible. you're making product decisions based on gut feeling when you could be making them based on data. adding analytics after launch means the data from the most informative period, the first 30 days, is already gone.",
        },
        {
          type: "p",
          text: "mixpanel, posthog, or simple custom event logging in your database all work. the important thing is that it's set up before launch, not after.",
        },
      ],
    },
    {
      heading: "6. a staging environment",
      blocks: [
        {
          type: "p",
          text: "a staging environment is a version of your product that's identical to production but isn't the live product. it's where you test changes before they go live, so you're not debugging new features in front of real users.",
        },
        {
          type: "p",
          text: "without staging, every update goes directly to production. every bug that slips through affects every user. the risk is low when the user count is low and grows as the product grows: which means the cost of not having staging compounds over time rather than being a fixed cost.",
        },
        {
          type: "p",
          text: "specify staging environment setup in the brief. confirm it exists and works before handoff. it should be the default, not a premium feature.",
        },
      ],
    },
    {
      heading: "7. environment variable and secret management",
      blocks: [
        {
          type: "p",
          text: "API keys, database credentials, and payment processor secrets should never be hard-coded in source code. they should be managed through environment variables that are different between development, staging, and production environments.",
        },
        {
          type: "p",
          text: "this is a security baseline, not a nice-to-have. a codebase with credentials in the code is a breach waiting to happen, and it's surprisingly common in agency-built products where the developer was optimising for speed rather than security.",
        },
        {
          type: "p",
          text: "ask explicitly: are credentials managed through environment variables? is there documentation of what each environment variable is for and where to find the correct values?",
        },
      ],
    },
    {
      heading: "8. a documented handoff",
      blocks: [
        {
          type: "p",
          text: "when the build ends, you should receive: the source code in a repository you own, documentation of the architecture and any non-obvious decisions, credentials for all services in a secure format, and a walkthrough of how to deploy changes and what to do if something breaks.",
        },
        {
          type: "p",
          text: "most agencies deliver the code. the documentation and the walkthrough are frequently absent, which means that when something breaks at 2am six months after launch, you're starting from scratch rather than from a documented system.",
        },
        {
          type: "p",
          text: "specify the handoff requirements in the brief before the build starts. what documentation do you expect? what walkthrough? what credentials management? an agency that resists these questions is telling you something important about what the relationship will look like after launch.",
        },
        {
          type: "p",
          text: "at ApexStack, all eight of these are in scope by default, not because we're different, but because we've shipped enough products to know which things matter in the first 90 days. if you want to review your current brief against this list, we're happy to do that before you sign with anyone.",
        },
        {
          type: "p",
          text: "which of these eight is most likely missing from your current brief?",
        },
      ],
    },
  ],
  faqs: [

  ],
};
