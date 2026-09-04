import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "mobile-app-investor-demo-vs-customer-pilot",
  title: "Mobile App Investor Demo vs Customer Pilot: What Must Work?",
  seoTitle: "Mobile App Demo vs Customer Pilot: What Must Work?",
  description:
    "Decide whether to commission a mobile app demo or customer pilot. Compare mock data, beta distribution, safeguards and acceptance evidence.",
  excerpt:
    "A presentation and a real customer trial need different release boundaries. Define what must be real before buying the next build.",
  category: "MVP & Startups",
  primaryKeyword: "mobile app demo vs customer pilot",
  secondaryKeywords: [
    "investor demo mobile app",
    "pilot ready mobile MVP",
    "mobile app pilot checklist",
    "prototype vs customer pilot",
  ],
  published: "2026-09-03",
  authorId: "leadership-01",
  serviceSlug: "mobile-app-development",
  keyTakeaway:
    "Commission an investor demo when the next decision is whether the product idea is understandable and worth exploring; clearly label simulated behaviour. Commission a customer pilot when invited users must complete a real task with their own data or consequences. A pilot needs a working end-to-end journey, access controls, a supported distribution route, recovery and a named operator. Neither a convincing presentation nor a beta installation proves readiness for unrestricted public use.",
  sections: [
    {
      heading: "Are you buying a demonstration or an operating product?",
      blocks: [
        {
          type: "p",
          text: "Write down the decision the next build must support before asking for a price. An investor meeting may need an understandable interaction, a credible technical explanation and an honest account of what remains unbuilt. A customer pilot needs evidence that the proposed workflow is useful when someone other than the presenter operates it. Those are different purchases, even when their screens look identical.",
        },
        {
          type: "p",
          text: "Use demo, pilot and public release as explicit scope labels, not universal industry certifications. In this guide, a demo is a controlled presentation; a pilot is a bounded real-world trial with invited users and an agreed operating owner. A beta channel describes distribution and testing, not the business outcome or safety of the trial.",
        },
        {
          type: "table",
          caption: "Choose the milestone by the evidence you need, not the number of screens.",
          head: ["Milestone", "Question it answers", "Minimum evidence", "What it does not establish"],
          rows: [
            ["Investor demo", "Can we explain and demonstrate the proposed experience?", "Repeatable walkthrough with simulations labelled", "Customer demand, dependable operation or investment readiness"],
            ["Customer pilot", "Can invited users complete the real workflow under stated limits?", "Working journey, user feedback, safeguards and an operating record", "Broad market demand or suitability for unlimited users"],
            ["Public release", "Can we offer the scoped product through the intended public channel?", "Release checks, platform requirements and support arrangements", "Product-market fit or guaranteed store approval"],
          ],
        },
      ],
    },
    {
      heading: "What can be simulated in an investor demo?",
      blocks: [
        {
          type: "p",
          text: "A controlled demonstration can use seeded records, pre-recorded media, a sandbox integration or a manually prepared result if the audience is told what is simulated. Keep a visible distinction between a design prototype, a running client, a connected backend and an operational service. Do not describe a mocked banking response, generated recommendation or payment confirmation as a completed real transaction.",
        },
        {
          type: "p",
          text: "Prepare a demonstration manifest: which journey works, which devices it was checked on, what data is synthetic, which systems are connected and what fails outside the prepared path. Keep sensitive customer data and live credentials out of presentation environments. A fallback recording can preserve the explanation if connectivity fails, but it should be introduced as a recording rather than passed off as a live run.",
        },
        {
          type: "callout",
          text: "A labelled simulation can answer a useful product question. An unlabelled simulation creates false confidence about what has actually been built.",
        },
      ],
    },
    {
      heading: "What changes when a real customer joins the mobile pilot?",
      blocks: [
        {
          type: "p",
          text: "The first real customer introduces an operating obligation, not merely another test device. Decide which records can be created, who may see or change them, what happens when a request fails and who can intervene. A small invited group reduces exposure, but it does not make unauthorised access, lost records or misleading confirmations acceptable.",
        },
        {
          type: "list",
          items: [
            "Define the invited audience, supported devices, operating hours and the trial's exclusions.",
            "Use real identity and authorisation checks wherever users can access private records or sensitive actions.",
            "Complete the core journey through the backend or explicitly disclose any manual fulfilment.",
            "Test interrupted connectivity, invalid input, repeated actions and failed integrations that could change the outcome.",
            "Record failures without unnecessarily copying personal data into logs or analytics.",
            "Provide a support route and a named person who can pause the trial, repair affected records or communicate an incident.",
          ],
        },
        {
          type: "p",
          text: "OWASP's Mobile Application Security Verification Standard covers controls for storage, authentication, network communication, platform interaction and privacy, among other areas. Use the relevant controls to choose concrete tests for the pilot. Merely citing MASVS in a proposal is not evidence that the app has been assessed or that every requirement is satisfied.",
        },
      ],
    },
    {
      heading: "How do beta distribution and public store release differ?",
      blocks: [
        {
          type: "p",
          text: "Apple's App Review Guidelines distinguish beta distribution from App Store publication: demos and betas should use TestFlight, and TestFlight submissions must still comply with the applicable guidelines. Agree on the intended audience and distribution route before committing to an installation date; a build on the developer's phone is not the same as an installable build for the pilot group.",
        },
        {
          type: "p",
          text: "Google Play documents internal, closed and open testing tracks with different access conditions. It also imposes additional testing and production-access requirements on qualifying newer personal developer accounts. Check the actual account and current policy before promising a public release. Completing a test build does not bypass those account requirements.",
        },
        {
          type: "p",
          text: "For acceptance, record the build identifier, test channel, authorised audience, installation instructions, backend environment and feedback route. Separate the dates for code completion, beta availability, submission and public availability. Platform review and approval are external dependencies, not outcomes a development contract can guarantee unconditionally.",
        },
      ],
    },
    {
      heading: "Which integrations must be real for the pilot to teach you anything?",
      blocks: [
        {
          type: "p",
          text: "An integration must be real when its behaviour is part of the question you are testing. A sandbox payment can test the interface and integration logic, but it cannot establish willingness to pay with real money. A manually fulfilled request may be enough to learn whether users want the service, provided users understand the service and the operator can reliably fulfil it. Document manual work so it is not mistaken for completed automation.",
        },
        {
          type: "p",
          text: "Stripe documents that sandbox transactions simulate payments without moving funds and provides test values for success and failure scenarios. If Stripe is appropriate for the transaction, use that environment for integration testing, not real card details in live mode. Choosing a payment provider is separate from determining which mobile-platform payment rules apply to the product.",
        },
        {
          type: "table",
          caption: "Hypothetical example: a mobile equipment-request pilot, not an ApexStack case study.",
          head: ["Behaviour", "Demo treatment", "Pilot treatment"],
          rows: [
            ["Browse equipment", "Seeded catalogue labelled as sample data", "Current availability or a clearly labelled request-only catalogue"],
            ["Request an item", "Simulated confirmation", "Persisted request with an identifier and an operator who receives it"],
            ["Confirm availability", "Prepared success state", "Authoritative confirmation, or a visible pending state until staff confirm"],
            ["Pay", "Sandbox transaction labelled as a test", "Either explicitly no payment, or an approved real-payment workflow with failure handling"],
            ["Cancel", "Presentation-only interaction", "A recorded cancellation and a defined fulfilment or refund response where applicable"],
          ],
        },
        {
          type: "p",
          text: "In this example, a pilot can deliberately avoid automatic inventory allocation and payments. It cannot tell the customer that equipment is reserved when no system or operator has actually reserved it. The useful simplification removes features without misrepresenting the result.",
        },
      ],
    },
    {
      heading: "What should the demo or pilot acceptance record contain?",
      blocks: [
        {
          type: "p",
          text: "Use an acceptance record that another person can reproduce. Tie each item to the agreed release and its limits, rather than asking whether the app is generally finished. Keep product learning separate from engineering acceptance: a technically sound pilot can reveal that users do not want the workflow, while enthusiastic feedback does not excuse a broken access boundary.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Name the decision: presentation clarity, usability, real task completion or another specific hypothesis.",
            "Identify the build, repository revision, distribution channel and backend environment.",
            "List what is real, simulated, manual and deliberately unavailable.",
            "Attach results for the core journey and consequential failure cases.",
            "Name the owner for support, incident handling, data recovery and stopping the trial.",
            "Agree the evidence and review point for expanding, changing or ending the pilot.",
          ],
        },
        {
          type: "p",
          text: "For product learning, record completed tasks, where participants need help, failure reasons and relevant qualitative feedback. Use only data needed for the decision and account for manual assistance. Do not turn invitation counts, installs or a successful demonstration into claims of retention, paid demand or closed revenue.",
        },
      ],
    },
    {
      heading: "Which ApexStack engagement fits the next milestone?",
      blocks: [
        {
          type: "p",
          text: "A Product Blueprint starts from US$1,000 for one bounded planning and de-risking engagement. For this decision, that can mean defining a demo-versus-pilot release boundary, documenting simulations and dependencies, and agreeing acceptance evidence. It is not a promise of a production-ready MVP or a complete mobile application.",
        },
        {
          type: "p",
          text: "A Launch Sprint starts from US$2,500 for planning, UX direction, implementation, testing and deployment of one tightly scoped first release or core workflow. Mobile applications, authentication, billing, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the quote. Bring the intended audience, existing assets and the next decision to the contact conversation; review the current pricing before choosing an engagement.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I use mocked data in a mobile app investor demo?",
      answer: "Yes, for a controlled demonstration when the audience is clearly told what is simulated. Identify real integrations, prepared outputs and unbuilt behaviour. Do not claim that a simulated payment, booking or recommendation is a completed operational transaction.",
    },
    {
      question: "Does a TestFlight build mean the mobile app is ready for customers?",
      answer: "No. TestFlight is a beta distribution route, not a certification of product readiness. A customer pilot still needs tested behaviour, appropriate access and data controls, a support owner and a clear operating boundary. Public release is a separate decision.",
    },
    {
      question: "Can a mobile app pilot include manual operations?",
      answer: "Yes, where manual fulfilment is deliberate, disclosed where relevant and assigned to an operator. Keep customer-facing states accurate and record the manual effort. A pilot may test demand for a service before automating all delivery, but it must not pretend that unavailable automation is working.",
    },
    {
      question: "Must an investor demo be published on the App Store?",
      answer: "Not necessarily. Choose a presentation or permitted testing route that answers the meeting's question and fits the intended audience. Apple distinguishes beta distribution from public App Store publication. Do not promise public availability just because a local demonstration works.",
    },
    {
      question: "When should a pilot become a public release?",
      answer: "After the agreed learning and release criteria have been reviewed, consequential defects are resolved, account and platform requirements are satisfied, and the team can operate the product for the intended audience. A calendar deadline or a successful presentation is not sufficient evidence by itself.",
    },
  ],
  sources: [
    { title: "App Review Guidelines: completeness and beta testing", url: "https://developer.apple.com/app-store/review/guidelines/", publisher: "Apple" },
    { title: "Set up an open, closed or internal test", url: "https://support.google.com/googleplay/android-developer/answer/9845334?hl=en-GB", publisher: "Google Play" },
    { title: "App testing requirements for new personal developer accounts", url: "https://support.google.com/googleplay/android-developer/answer/14151465?hl=en-GB", publisher: "Google Play" },
    { title: "Testing payment integrations", url: "https://docs.stripe.com/testing", publisher: "Stripe" },
    { title: "Mobile Application Security Verification Standard", url: "https://mas.owasp.org/MASVS/", publisher: "OWASP" },
  ],
  related: [
    "shortlist-mobile-app-development-company-pre-seed",
    "what-full-stack-mobile-app-development-includes",
    "mvp-scoping-checklist",
  ],
};
