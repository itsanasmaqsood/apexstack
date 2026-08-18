import type { FaqItem } from "@/types";

/**
 * All 34 questions. The section shows 5 initially and reveals 7 more per press.
 *
 * These answer what a technical or commercial buyer actually asks before
 * committing budget. Deliberately free of numbers, durations and prices we have
 * not verified — where a real figure belongs, the answer says what determines it
 * instead of inventing one.
 */
export const FAQS: FaqItem[] = [
  {
    question: "What does ApexStack actually do?",
    answer:
      "We are a product engineering company. We design, build, deploy and support custom software — web and mobile applications, SaaS platforms, AI products, internal business systems, and the cloud infrastructure underneath them. We take responsibility for the whole system, not one slice of it.",
  },
  {
    question: "How is that different from hiring a development agency?",
    answer:
      "Most agencies build to a specification you hand them. We start earlier, at the business problem, and sometimes conclude that the thing originally requested is not the thing that should be built. We also stay after launch, because most of what determines the true cost of software happens once it is live.",
  },
  {
    question: "What kinds of companies do you work with?",
    answer:
      "Startups building a first product, scale-ups whose early system is buckling under growth, and established businesses replacing software that has outlived its architecture. The common factor is that software is core to how the business runs, not an afterthought.",
  },
  {
    question: "How does an engagement start?",
    answer:
      "With a discovery call. You describe the problem; we ask questions about your users, your constraints and your existing systems. If we are not the right fit we will say so on that call. If we are, we propose a discovery phase before any commitment to a build.",
  },
  {
    question: "What happens during discovery?",
    answer:
      "We map the business problem in full, interview the people who will use the system daily, audit the systems and data you already depend on, and define success in measurable terms. It ends in a written scope with stated assumptions you are free to challenge — and it is useful to you even if you take it elsewhere.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope, integration complexity and how many decisions are already settled on your side. We give a timeline at the end of discovery, once we understand the real constraints, rather than guessing on the first call. Anyone quoting a duration before understanding your data model is guessing.",
  },
  {
    question: "How do you price work?",
    answer:
      "Pricing follows the engagement model. Fixed-scope projects are priced once discovery has defined the scope. Dedicated teams and retainers are priced by team composition and duration. We quote after we understand the problem, never before.",
  },
  {
    question: "Do you work fixed-price or time-and-materials?",
    answer:
      "Both, and the right one depends on how well-defined the work is. Fixed-price suits well-specified scopes where change is unlikely. Ongoing product development usually suits a dedicated team, because fixed-price contracts tend to make necessary changes expensive and adversarial.",
  },
  {
    question: "Can you work alongside our in-house team?",
    answer:
      "Yes. We work as an embedded extension of an existing team, as a standalone delivery team, or as the architecture and review layer over engineers you already employ. We adapt to your workflow, source control and ceremonies rather than imposing ours.",
  },
  {
    question: "Who owns the code and the intellectual property?",
    answer:
      "You do. All code, designs, documentation and infrastructure configuration produced for your project belong to you, and are delivered into your repositories and your cloud accounts. We do not hold work hostage as a retention strategy.",
  },
  {
    question: "Will our own team be able to maintain what you build?",
    answer:
      "That is an explicit design goal. We choose technologies your team can hire for, document architecture decisions with the reasoning attached, and hand over the knowledge alongside the code. You should be able to take a project in-house whenever you decide to.",
  },
  {
    question: "What technologies do you build with?",
    answer:
      "We select the stack against your constraints — your team's existing skills, your compliance requirements, your expected load and your budget for running it. We have strong opinions but no religious attachments, and we will explain the trade-offs behind any recommendation.",
  },
  {
    question: "Will you work with our existing stack?",
    answer:
      "Yes. If your team already runs a particular language, cloud or framework competently, rebuilding around our preference would cost you money and gain you nothing. We only recommend changing a stack when the current one is the actual cause of the problem.",
  },
  {
    question: "Can you take over an existing codebase?",
    answer:
      "Yes. We start with a technical audit: what the code does, what it costs to run, where risk is concentrated and what it would take to stabilise. You get an honest assessment, including the cases where a rewrite is the wrong call.",
  },
  {
    question: "Do you handle legacy system modernisation?",
    answer:
      "Yes, and usually incrementally rather than as a single replacement. Big-bang rewrites of systems the business depends on tend to fail. We prefer to retire the old system gradually, keeping it running while capability moves across.",
  },
  {
    question: "How do you approach security?",
    answer:
      "Security is decided during architecture, not added at the end. We define the authentication and authorisation model, data handling and retention rules, and the posture of the production environment before building, then review all of it again before launch.",
  },
  {
    question: "How do you handle confidential or regulated data?",
    answer:
      "We work within your compliance requirements and design the data model around them from the start. Tell us the regime you operate under during discovery — retrofitting compliance into a finished system is significantly more expensive than designing for it.",
  },
  {
    question: "What does quality assurance look like?",
    answer:
      "Automated tests against the behaviour the business depends on, continuous integration so every change is verified before it merges, and code review on every line before it reaches your repository. Quality is a process, not a phase at the end.",
  },
  {
    question: "What does your AI work actually involve?",
    answer:
      "Production AI features rather than demonstrations: model integration, retrieval over your own data, autonomous agents that complete real tasks, and the evaluation and guardrails that make them safe to put in front of users. We are equally willing to tell you when a problem does not need AI.",
  },
  {
    question: "Can you build and publish mobile apps?",
    answer:
      "Yes. We build for iOS and Android and handle the full store submission process, including review requirements, release management and subsequent updates. We have products live in both stores.",
  },
  {
    question: "Do you provide cloud infrastructure and DevOps?",
    answer:
      "Yes. Infrastructure design, CI/CD pipelines, monitoring, logging, alerting and cost optimisation. Infrastructure is treated as part of the product, not a separate contract handed to someone else after the code is written.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes, and integration complexity is usually where estimates go wrong. We map every system, data source and third-party service the product must talk to during discovery, because those interfaces determine far more of the timeline than the feature list does.",
  },
  {
    question: "How will we track progress during the build?",
    answer:
      "Short delivery cycles, each ending in software you can use on a live environment. You get a shared channel with the engineers doing the work, an open defect list, and demonstrations of running software rather than status decks.",
  },
  {
    question: "Who will we actually be working with?",
    answer:
      "The engineers building your system, directly. We do not insert an account manager between you and the people making technical decisions, and whoever designed your architecture is still involved when it reaches production.",
  },
  {
    question: "What time zones do you cover?",
    answer:
      "We work with clients internationally and structure each engagement around a guaranteed overlap window with your team. Asynchronous communication carries the rest, with decisions written down so nothing depends on who happened to be awake for a call.",
  },
  {
    question: "What happens if our requirements change mid-project?",
    answer:
      "They usually do, and that is not a failure. We reopen scope when evidence disagrees with the plan and tell you early what the change costs in time and money. The alternative — continuing to build something you have already learned is wrong — costs more.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Monitoring, iteration and scaling as real usage arrives. Launch reveals the gap between how you expected the system to be used and how it actually is. We stay through that period, because it is where most of the real learning happens.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, on a retainer sized to what the system actually needs — monitoring, dependency and security updates, incident response and continued feature development. Alternatively we hand over entirely to your team. The choice is yours, and it is not a trap either way.",
  },
  {
    question: "What if we only have an idea, not a specification?",
    answer:
      "That is a normal starting point and often a better one. A detailed specification written before any user research frequently encodes assumptions that turn out to be wrong. Discovery exists to turn an idea into a scope worth building.",
  },
  {
    question: "Do you build MVPs for startups?",
    answer:
      "Yes, with an emphasis on the minimum being genuinely minimum. The purpose of an MVP is to answer a specific question about your market as cheaply as possible. We will push back on features that do not help answer that question.",
  },
  {
    question: "Do you also do branding and design work?",
    answer:
      "Yes. Product design, brand identity, graphic and social design, motion graphics, video production and 3D visualisation, all in-house. Engineering remains our primary discipline — creative work strengthens what we build rather than replacing it.",
  },
  {
    question: "Can we engage you for design work alone?",
    answer:
      "Yes. Design and brand work can be taken standalone, without an engineering engagement. It is simply more effective when the people designing the product and the people building it sit in the same team.",
  },
  {
    question: "Will you sign an NDA?",
    answer:
      "Yes, before any detailed discussion of your product or your data. Send yours across, or ask us for one, and we will have it in place ahead of discovery.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a discovery call. Bring the problem rather than a solution, along with any constraints you already know about — deadlines, budget, compliance, existing systems. If we can help, we will tell you what a first phase looks like. If we cannot, we will tell you that too.",
  },
];
