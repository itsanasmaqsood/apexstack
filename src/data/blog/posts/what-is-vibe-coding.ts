import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "what-is-vibe-coding",
  title: "What Is Vibe Coding? A Founder's Honest Guide",
  seoTitle: "What Is Vibe Coding? A Founder's Honest Guide",
  description: "What is vibe coding, really? A founder-focused breakdown of how it works, where it breaks, and what it actually means for building your startup's MVP.",
  excerpt: "a founder messaged me last month. he'd spent three weekends \"vibe coding\" his MVP using cursor and claude.",
  category: "AI Engineering",
  primaryKeyword: "what is vibe coding",
  secondaryKeywords: [
    "so vibe coding",
    "vibe coding works practice",
    "vibe coding genuinely good",
    "where vibe coding breaks down",
    "founders need understand",
  ],
  published: "2026-06-13",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "vibe coding is the practice of building software by describing what you want in plain english, to an AI, and accepting the code it generates without necessarily reading or understanding every line.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "a founder messaged me last month. he'd spent three weekends \"vibe coding\" his MVP using cursor and claude. the app looked decent. then he tried to add a payment flow and the whole thing collapsed, bugs referencing functions that didn't exist, database calls that returned nothing, errors he couldn't read because he'd never actually read the code.",
        },
        {
          type: "p",
          text: "he wasn't stupid. he'd just misunderstood what vibe coding is for.",
        },
      ],
    },
    {
      heading: "so what is vibe coding, actually?",
      blocks: [
        {
          type: "p",
          text: "vibe coding is the practice of building software by describing what you want in plain english, to an AI, and accepting the code it generates without necessarily reading or understanding every line.",
        },
        {
          type: "p",
          text: "andrej karpathy coined the term in february 2025. he described it as a mode where you \"fully give in to the vibes, embrace exponentials, and forget that the code even exists.\" merriam-webster flagged it as slang the following month. collins named it word of the year for 2025. it moved fast.",
        },
        {
          type: "p",
          text: "the underlying idea isn't entirely new. developers had been using AI coding assistants, copilot, codeium, chatgpt, since 2022. what karpathy named was the mindset shift: you stop thinking like an engineer and start thinking like a director. you describe. the AI builds. you react to the output and redirect.",
        },
        {
          type: "p",
          text: "the hottest new programming language is english. karpathy said that in 2023, before he even had a name for the practice. he was right.",
        },
      ],
    },
    {
      heading: "how vibe coding actually works in practice",
      blocks: [
        {
          type: "p",
          text: "there's a tight loop at the center of it. you open a tool: cursor, bolt.new, replit, claude code, v0, and you start talking.",
        },
        {
          type: "p",
          text: "\"build me a landing page with a waitlist form that connects to supabase.\"",
        },
        {
          type: "p",
          text: "the AI generates the code. you run it. it either works or it doesn't. if it doesn't, you paste the error back in and say \"fix this.\" you don't debug it manually. you don't read the stack trace carefully. you describe the symptom and let the model figure it out.",
        },
        {
          type: "p",
          text: "that's the loop: describe → generate → test → redirect.",
        },
        {
          type: "p",
          text: "for simple, self-contained features, this is genuinely fast. a landing page, a data display component, a basic crud interface. You can have something running in an afternoon with zero formal coding background. that's not hype, that's what's happening right now across thousands of early-stage projects.",
        },
        {
          type: "p",
          text: "the tools worth knowing about in 2025: cursor (IDE with deep AI integration), bolt.new (full-stack browser-based), replit (collaborative, good for beginners), v0 by vercel (UI component generation), and claude code (terminal-based, preferred by developers who want more control).",
        },
      ],
    },
    {
      heading: "the difference between vibe coding and AI-assisted development",
      blocks: [
        {
          type: "p",
          text: "this is where most founders get confused, and where the founder in my earlier story went wrong.",
        },
        {
          type: "p",
          text: "simon willison, a well-regarded programmer, put it clearly: \"if an LLM wrote every line of your code, but you've reviewed, tested, and understood it all, that's not vibe coding. That's using an LLM as a typing assistant.\"",
        },
        {
          type: "p",
          text: "vibe coding, in the strict sense, involves not fully understanding the output. you're steering by results, not by comprehension. that works until it doesn't.",
        },
        {
          type: "p",
          text: "AI-assisted development is different. a developer uses AI to generate boilerplate, suggest functions, speed up the boring parts: but they review the output, test edge cases, and take ownership of what ships.",
        },
        {
          type: "p",
          text: "one is a vibe. the other is a process.",
        },
        {
          type: "p",
          text: "neither is wrong. but they're suited for very different things, and conflating them is how founders end up with a fragile MVP they can't hand to anyone else.",
        },
      ],
    },
    {
      heading: "what vibe coding is genuinely good for",
      blocks: [
        {
          type: "p",
          text: "karpathy himself called it best suited for \"throwaway weekend projects.\" he wasn't being dismissive. He was being precise.",
        },
        {
          type: "p",
          text: "vibe coding is good for:",
        },
        {
          type: "list",
          items: [
            "proof-of-concept prototypes: something you can click through and show an investor or early user, before you've committed to a stack",
            "personal tools and internal scripts: things only you or your small team will use, where security and maintenance aren't urgent",
            "rapid UI mockups, turning a figma sketch into a working, interactive demo in hours",
            "exploring ideas fast, building five versions of a feature in a day to see which one feels right",
          ],
        },
        {
          type: "p",
          text: "the Y Combinator batch of spring 2025 reportedly had a significant portion of founders who'd built their initial demos using pure vibe coding. they used those demos to get accepted. then they rewrote the product properly.",
        },
        {
          type: "p",
          text: "that's the right use of the tool.",
        },
      ],
    },
    {
      heading: "where vibe coding breaks down",
      blocks: [
        {
          type: "p",
          text: "i'm going to be honest here because i've seen the damage firsthand.",
        },
        {
          type: "p",
          text: "when we took on a client at ApexStack who'd already spent two months vibe coding their MVP, we spent the first week just reading the codebase to understand what was actually there. there were three different authentication implementations, none of them complete. there were API calls to a service that no longer existed. there were database schema changes that half the codebase knew about and half didn't.",
        },
        {
          type: "p",
          text: "it wasn't anyone's fault. it's just what happens when you build without comprehension at scale.",
        },
        {
          type: "p",
          text: "vibe coding struggles with:",
        },
        {
          type: "list",
          items: [
            "security, AI-generated code regularly introduces vulnerabilities. SQL injection risks, exposed API keys, missing input validation. the model doesn't know your threat model; it's pattern-matching from training data.",
            "maintainability: when every feature is added conversationally without a coherent architecture underneath, the codebase becomes impossible to reason about after a certain size",
            "debugging complex problems, karpathy described \"asking for random changes until the error goes away.\" that works on simple bugs. on a production issue at 2am affecting real users, it doesn't.",
            "onboarding other developers: if you want to hand the project to a contractor, a CTO hire, or a development studio, they need to understand what exists. vibe-coded codebases are often opaque.",
            "scaling, the architecture that works for 10 users often doesn't work for 10,000. AI doesn't optimize for scale unless you specifically ask it to, and you need to know the right questions to ask.",
          ],
        },
        {
          type: "p",
          text: "none of this means don't vibe code. it means know the ceiling.",
        },
      ],
    },
    {
      heading: "what founders actually need to understand",
      blocks: [
        {
          type: "p",
          text: "here's the reframe i give every non-technical founder who comes to me excited about vibe coding.",
        },
        {
          type: "p",
          text: "it's not a free pass to skip the hard parts of building software. it's a compression tool. it compresses the distance between an idea and a working prototype. that compression is real and it's valuable.",
        },
        {
          type: "p",
          text: "but compression isn't the same as quality. a compressed image looks fine at small size and falls apart at full resolution.",
        },
        {
          type: "p",
          text: "i thought vibe coding meant non-technical founders could just build their own MVPs end to end. they can, up to a point. that point is usually around the time they need user authentication, payment processing, third-party API integrations, or anything that involves user data security.",
        },
        {
          type: "p",
          text: "what vibe coding actually does is raise the floor for what's possible before you need technical help. and that's genuinely important. the gap between \"idea\" and \"something someone can click on\" used to take weeks. now it takes a weekend. that changes fundraising conversations, user validation timelines, and co-founder dynamics.",
        },
      ],
    },
    {
      heading: "vibe coding as a founder superpower, with limits",
      blocks: [
        {
          type: "p",
          text: "the founders i've seen use vibe coding well treat it as a thinking tool, not a shipping tool.",
        },
        {
          type: "p",
          text: "they build a rough version to understand the problem better. they find the friction in the UX by using it themselves. they show it to five potential users and collect feedback before a single line of production code gets written. they use the prototype to have a much more informed conversation with the developers they eventually hire.",
        },
        {
          type: "p",
          text: "that's the right arc. explore with AI, then build with intention.",
        },
        {
          type: "p",
          text: "if you want to see what production-quality AI-powered product development looks like, as opposed to vibe coding a prototype. Our showcase has a few examples worth looking at. the mosaic AI app went from concept to app store in 7 weeks. bounce daily's KYC conversion went from 45% to 65% after we rebuilt the onboarding flow. neither of those started as vibe-coded MVPs.",
        },
      ],
    },
    {
      heading: "the honest summary",
      blocks: [
        {
          type: "p",
          text: "vibe coding is real, it's useful, and it's here to stay. the collins dictionary doesn't name things word of the year for no reason.",
        },
        {
          type: "p",
          text: "it means: describe software in plain english, let an AI generate the code, steer by results rather than by reading the output line by line.",
        },
        {
          type: "p",
          text: "it's fast. it's accessible. it genuinely lets non-technical founders build things they couldn't have built two years ago.",
        },
        {
          type: "p",
          text: "and it has a ceiling. that ceiling is somewhere around \"works as a demo.\" past that, you need architecture, security thinking, someone who actually reads the code.",
        },
        {
          type: "p",
          text: "the question isn't whether to use vibe coding. it's knowing when to stop.",
        },
        {
          type: "p",
          text: "if you've hit that ceiling, if you've got a vibe-coded prototype and you need to turn it into something real, take a look at what production MVP development actually costs and what you get for it. or just tell me what you're building and i'll give you an honest read on where you are and what the next step should be.",
        },
      ],
    },
  ],
  faqs: [

  ],
};
