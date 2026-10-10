import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "mvp-development-for-startups",
  title: "MVP Development for Startups: Define the First Release",
  seoTitle: "MVP Development for Startups: Define the First Release",
  description: "Decide what your startup's first MVP must deliver before accepting a quote: one user outcome, explicit exclusions, acceptance checks and ownership.",
  excerpt: "Turn an MVP idea into an agreed first release, with a worked scope example and a clear distinction between planning, a prototype and a live product.",
  category: "MVP & Startups",
  primaryKeyword: "mvp development for startups",
  secondaryKeywords: [
    "startup MVP first release",
    "MVP acceptance criteria",
    "MVP scope before development",
  ],
  published: "2026-07-29",
  updated: "2026-10-10",
  authorId: "leadership-01",
  serviceSlug: "mvp-development",
  keyTakeaway: "Before accepting an MVP development quote, agree what the first release must let a specific user complete and what the startup needs to learn from that use. Define the whole workflow, including failure and recovery, then name its exclusions, acceptance checks and operating owner. A prototype that tests an assumption and a live product that handles customer data are different purchases. Price and schedule should follow that written boundary; neither is a reliable promise when the work is still undefined.",
  sections: [
    {
      heading: "What should a startup's first MVP actually deliver?",
      blocks: [
        { type: "p", text: "Start with the action a customer needs to complete, rather than the screens a founder wants to commission. For a startup preparing its first release, the useful question is: what must work so that a real user can try the service and the team can decide whether to keep investing in it? Record the evidence behind that choice and any assumptions that still need testing." },
        { type: "p", text: "Keep product learning separate from delivery acceptance. A customer completing a task may tell you something about usability. A passing acceptance check tells you that the agreed behaviour works. Neither alone proves demand, willingness to pay or a viable business." }
      ],
    },
    {
      heading: "How do you turn that outcome into an agreed scope?",
      blocks: [
        { type: "p", text: "Write down the user's trigger, the action they take and the result they need. GOV.UK's guidance on writing user stories uses the actor, need and goal to describe a service requirement, with acceptance criteria stating the outcomes that show it has been met. This is a useful way to discuss a startup workflow too; it does not prescribe the product, its price or its delivery time." },
        {
          type: "list",
          ordered: true,
          items: [
            "Name the first user group and the task it must complete, including where the task starts and ends.",
            "List the steps required for that task, including any manual work performed by your team.",
            "Identify the data, permissions and external systems those steps depend on.",
            "Define what happens when input is invalid, access is denied or a dependency is unavailable.",
            "Agree observable acceptance checks and who can approve them.",
            "Write an exclusion list and record which open decisions prevent a quote from being dependable.",
            "Make repository, hosting, domain and third-party account ownership explicit.",
          ],
        }
      ],
    },
    {
      heading: "What does a bounded MVP workflow look like?",
      blocks: [
        { type: "p", text: "Consider a hypothetical supplier-onboarding product. The startup wants to learn whether an operations coordinator can collect and review a supplier's required documents through one workflow. This is an illustrative scope, not an ApexStack project, quote or delivery promise." },
        {
          type: "table",
          caption: "Hypothetical first-release decisions for supplier onboarding",
          head: ["Decision", "Included in the example", "Acceptance evidence to agree"],
          rows: [
            ["Submit documents", "A supplier opens an invitation, uploads permitted files and sees whether submission succeeded.", "Invalid files are rejected with a useful message; an interrupted upload can be retried without creating a duplicate submission."],
            ["Review a submission", "A coordinator sees the submitted documents and records an accepted or missing-information decision.", "The correct coordinator can see the submission; another supplier cannot access it; the decision is saved and shown accurately."],
            ["Handle exceptions", "The coordinator can request a correction and the supplier can replace the relevant document.", "The revised submission is identifiable and the coordinator can complete the review without editing the database."],
            ["Learn from use", "The startup records completion and drop-off at agreed steps, subject to the data and privacy requirements of the pilot.", "The team can distinguish a completed task from an abandoned or failed attempt without treating either as proof of commercial demand."],
          ],
        },
        { type: "p", text: "In this example, billing, native mobile apps, automated document scoring and ERP integration are deferred. Identity, access control, file handling and the minimum review tools remain real work to scope and price. Calling the workflow small does not make those responsibilities free or place it within a starting offer." },
        { type: "p", text: "If your own idea still mixes the core task with later features, send ApexStack the workflow and open decisions through the contact action below. A bounded Product Blueprint can help establish what must be agreed before implementation is quoted." }
      ],
    },
    {
      heading: "Do you need a prototype or a live first release?",
      blocks: [
        { type: "p", text: "If the unresolved question is whether users understand a flow or whether a critical integration is feasible, commission a test of that assumption before committing to the whole product. GOV.UK's alpha guidance distinguishes prototypes used to test risky assumptions from production-quality code. Its government delivery process is not an MVP schedule for a startup, but the distinction between evidence work and a live service is useful." },
        { type: "p", text: "If customers will rely on the release, state the operating requirements in the brief: access, data handling, deployment, recovery and support ownership. A convincing demo does not establish those properties. Ask which parts can be reused, what must change and what evidence is still missing before the prototype becomes a live product." }
      ],
    },
    {
      heading: "When is a price and delivery plan ready to accept?",
      blocks: [
        {
          type: "list",
          items: [
            "The proposal names the workflow, users, platforms and exclusions being priced.",
            "Assumptions about access, integrations, data and buyer decisions are visible, with an owner for each unresolved item.",
            "The delivery plan includes review, testing, deployment and handover, with the dependencies that can change its dates.",
            "Acceptance checks cover important behaviour and relevant failure paths, not only whether screens exist.",
            "The agreement states account and repository ownership, change approval and what support is included after release.",
          ],
        },
        { type: "p", text: "Use these as questions to resolve with the supplier, not as a universal contract template. A fixed price can describe a bounded engagement, but a fixed total does not resolve an unknown workflow. Ask for the assumptions behind both cost and schedule and agree how a change will be assessed before work expands." }
      ],
    },
    {
      heading: "What should happen after the first release?",
      blocks: [
        { type: "p", text: "Review what users actually did against the question the release was meant to answer. Separate a defect in the agreed workflow from a request for new behaviour. Then decide whether to repair, investigate further, expand the scope or stop. A longer feature list is not evidence that the original assumption was correct." },
        { type: "p", text: "Keep the repository, deployment instructions, account access and open issues available to whoever will operate the product. Give that person a support boundary and a way to recover from failures. Agree later development separately unless the original engagement explicitly includes it." }
      ],
    },
  ],
  faqs: [
    {
      question: "What should an MVP development quote include?",
      answer: "It should identify the first user and workflow, required platforms, data and integrations, explicit exclusions, assumptions, acceptance checks, deployment and account ownership. Keep unresolved questions visible and agree how changes affect cost and schedule.",
    },
    {
      question: "Can an MVP have a standard price or timeline?",
      answer: "A provider can publish a starting offer for a bounded engagement, but that is not a quote or delivery promise for every startup idea. The workflow, access, dependencies, verification and operating requirements need to be agreed before its price and schedule can be assessed.",
    },
    {
      question: "Is a Product Blueprint a production-ready MVP?",
      answer: "No. ApexStack's Product Blueprint starts from US$1,000 for bounded planning and de-risking. It can clarify the workflow, assumptions and next decision; production implementation is a separate scope.",
    },
    {
      question: "When should the scope expand?",
      answer: "Expand only after the core workflow has produced evidence that the next feature, role or integration is necessary. A longer wish list is not evidence.",
    },
  ],
  sources: [
    {
      title: "Writing user stories",
      url: "https://www.gov.uk/service-manual/agile-delivery/writing-user-stories",
      publisher: "GOV.UK Service Manual",
    },
    {
      title: "How the alpha phase works",
      url: "https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works",
      publisher: "GOV.UK Service Manual",
    },
  ],
  conversion: {
    heading: "How can ApexStack help define your first MVP release?",
    description: "Send ApexStack the intended user, the task they need to complete, your current evidence and any existing prototype. We can help separate the first-release scope from assumptions and later features. A Product Blueprint starts from US$1,000 for bounded planning and de-risking, not a production-ready MVP. If the workflow is ready for implementation, a Launch Sprint starts from US$2,500 for planning, UX direction, implementation, testing and deployment of one tightly scoped first release or core workflow. Authentication, billing, mobile apps, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the quote. The MVP Development service and pricing pages explain the supporting scope; use the contact action to discuss which starting point fits your brief.",
    primaryLabel: "Discuss your first MVP release",
  },
  related: [
    "mvp-development-cost",
    "what-is-a-discovery-phase",
    "how-to-know-if-your-mvp-is-too-big",
  ],
};
