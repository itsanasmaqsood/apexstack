import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "shortlist-mobile-app-development-company-pre-seed",
  title: "How to Shortlist Mobile App Development Companies for a Pre-Seed Startup",
  seoTitle: "How to Shortlist Mobile App Development Companies",
  description:
    "Shortlist mobile app partners by release scope, technical evidence, account ownership, testing, security and handover—not agency rankings.",
  excerpt:
    "A practical scorecard for pre-seed founders comparing mobile app development companies before committing to a first release.",
  category: "Choosing a Partner",
  primaryKeyword: "mobile app development company for pre-seed startup",
  secondaryKeywords: [
    "mobile app development companies for startups",
    "how to choose a mobile app development company",
    "mobile app agency for startup",
    "pre-seed mobile app development",
    "mobile app development partner checklist",
  ],
  published: "2026-09-02",
  authorId: "leadership-01",
  serviceSlug: "mobile-app-development",
  keyTakeaway:
    "Shortlist a mobile app development company by asking each candidate to price and evidence the same first release. Compare who owns product decisions, UX states, mobile and backend engineering, security checks, beta distribution, store submission and handover. Keep the repository and Apple or Google developer accounts under your control. A ranked list cannot replace verified delivery evidence for your product.",
  sections: [
    {
      heading: "How should a pre-seed startup shortlist a mobile app development company?",
      blocks: [
        {
          type: "p",
          text: "Begin with one release boundary and one scorecard. Give every candidate the same core user journey, platforms, data sensitivity, integrations, launch evidence and exclusions. Then compare named responsibility, inspectable work and account ownership before comparing price. This makes a small specialist team, a larger agency and another delivery model comparable without assuming that company size, awards or a directory position predicts the result.",
        },
        {
          type: "p",
          text: "The shortlist should contain only companies that can explain how the app moves from a product decision to a tested beta and a buyer-controlled release. Remove any candidate that cannot name the people responsible for product, design, implementation, review, deployment and handover—or cannot show what evidence will prove each responsibility was completed.",
        },
        {
          type: "callout",
          text: "A useful shortlist ranks evidence against your release, not agencies against one another.",
        },
      ],
    },
    {
      heading: "What should you define before contacting mobile app companies?",
      blocks: [
        {
          type: "p",
          text: "Define the smallest release that lets a real user complete one valuable journey. A pre-seed brief does not need to specify every future feature, but it must identify the user, starting condition, successful outcome, important failure states and the evidence required to accept the release. Otherwise, each company will price a different interpretation and the proposals will look comparable when they are not.",
        },
        {
          type: "list",
          items: [
            "One primary user and the core job the mobile app must complete",
            "Required platforms: iOS, Android or both",
            "Data collected, sensitive actions and permission boundaries",
            "External systems such as payments, identity, maps, messaging or an existing backend",
            "The beta audience and the behaviour they must be able to test",
            "Explicit exclusions for the first release",
            "Who can approve scope, design and acceptance decisions on the founder's side",
          ],
        },
        {
          type: "p",
          text: "If these decisions are not ready, buy a bounded discovery or blueprint before implementation. That separates uncertainty reduction from build promises and gives every implementation candidate the same decision record.",
        },
      ],
    },
    {
      heading: "What evidence should a mobile app company provide?",
      blocks: [
        {
          type: "p",
          text: "Ask for evidence of the delivery system, not confidential client material. A company can demonstrate how it works with a redacted decision record, an example acceptance checklist, a sample pull-request review, a test report, a release runbook or a handover inventory. Portfolio screenshots show an interface; they do not show how the team handled permissions, failure states, deployment or maintainability.",
        },
        {
          type: "table",
          caption: "Use the same evidence request for every shortlisted company.",
          head: ["Area", "Question", "Evidence to request"],
          rows: [
            ["Product", "Who resolves unclear behaviour and controls scope?", "Named decision owner, release boundary and change process"],
            ["UX", "Who defines loading, empty, error, offline and permission states?", "Reviewable flows and acceptance notes"],
            ["Engineering", "Who approves architecture and code changes?", "Decision record, reviewed changes and passing checks"],
            ["Security", "Which controls match the app's data and actions?", "Requirements, findings, remediation owner and retest evidence"],
            ["Release", "How does a build reach real test devices and the stores?", "Beta distribution, release checklist and rollback or recovery path"],
            ["Handover", "Can another qualified team continue the product?", "Buyer access, environment inventory, known limitations and operating notes"],
          ],
        },
      ],
    },
    {
      heading: "Who should own the repository and app-store accounts?",
      blocks: [
        {
          type: "p",
          text: "The startup should normally control the source repository, Apple Developer membership, App Store Connect organisation, Google Play developer account and essential production services. Apple documents that an organisation's Account Holder accepts legal agreements and manages key membership responsibilities, while Google Play provides granular user permissions. Those controls let a founder grant a delivery company the access it needs without making the company the permanent owner of the release channel.",
        },
        {
          type: "p",
          text: "Create the accounts under the startup's legal control where practical, invite the team with the least privilege required, and record who can release, change billing or manage users. GitHub organisation roles provide the same separation for source access. Test that an administrator can remove supplier access and that another qualified engineer can locate the code, environments and release instructions before the final milestone.",
        },
        {
          type: "list",
          items: [
            "Repository organisation, branch rules and deployment connection",
            "Apple Developer and App Store Connect roles",
            "Google Play Console users, permissions and signing arrangements",
            "Backend, database, storage, monitoring and backup access",
            "Domain, email, payments, analytics and other essential vendors",
            "Credential rotation and an access-removal checklist",
          ],
        },
      ],
    },
    {
      heading: "How should a company prove the mobile app is ready for feedback?",
      blocks: [
        {
          type: "p",
          text: "Make an installable beta part of acceptance. Apple describes TestFlight as the route for distributing beta builds, managing testers and collecting feedback before App Store submission. Google Play similarly provides internal, closed and open testing tracks. A video demonstration is useful context, but it is not a substitute for the founder and intended users installing the app on representative devices and exercising the agreed journey.",
        },
        {
          type: "list",
          items: [
            "A build installed through the platform's supported beta channel",
            "Named devices, operating-system versions and user roles in the test set",
            "Acceptance checks for the core journey and its important failure states",
            "A feedback route with severity, owner and retest status",
            "Evidence that analytics, crash reporting and production configuration use the intended environments",
          ],
        },
        {
          type: "p",
          text: "Agree whether the milestone means beta-ready, submitted for review or publicly available. Store review is controlled by the platform, so a supplier should not turn an external review outcome into an unconditional delivery guarantee.",
        },
      ],
    },
    {
      heading: "How do you evaluate mobile app security without accepting vague promises?",
      blocks: [
        {
          type: "p",
          text: "Ask the company to map security requirements to the app's actual data, permissions and actions. OWASP's Mobile Application Security Verification Standard groups controls across storage, cryptography, authentication, network communication, platform interaction, code quality and resilience. Not every control has the same relevance to every first release, but the shortlist should explain which groups apply, how they will be verified and who owns remediation.",
        },
        {
          type: "p",
          text: "NIST's Secure Software Development Framework treats security as practices integrated across the development lifecycle and gives purchasers a common vocabulary for supplier discussions. Use that principle in the contract: define the security work before implementation, review evidence during delivery, and keep unresolved findings visible at acceptance rather than requesting a generic security check at the end.",
        },
      ],
    },
    {
      heading: "How can you compare mobile app proposals fairly?",
      blocks: [
        {
          type: "p",
          text: "Normalise every proposal around the complete first release. One quote may include product definition, UX, backend work, testing, store preparation and handover while another covers mobile screens only. Assign every excluded responsibility to an owner and estimate its effect before comparing totals. A lower figure may represent less scope rather than better value.",
        },
        {
          type: "table",
          caption: "Turn proposal differences into explicit decisions.",
          head: ["Proposal item", "Confirm in writing", "Acceptance evidence"],
          rows: [
            ["Scope", "Included journey, platforms, integrations and exclusions", "Approved release boundary"],
            ["Team", "Named roles, allocation, review owner and continuity plan", "Responsibility matrix"],
            ["Commercials", "Milestones, change rules, vendor costs and post-launch boundary", "Like-for-like cost view"],
            ["Quality", "Device coverage, automated checks and manual review", "Test and issue register"],
            ["Ownership", "Source, designs, accounts, data and reusable components", "Buyer-controlled access inventory"],
            ["Release", "Beta, store-submission and production responsibilities", "Installable build and release record"],
          ],
        },
      ],
    },
    {
      heading: "Which ApexStack starting engagement fits this decision?",
      blocks: [
        {
          type: "p",
          text: "A Product Blueprint starts from US$1,000 when the immediate need is one bounded planning or de-risking decision, such as defining the core mobile journey, platform boundary, account model or acceptance plan. It is not a production-ready mobile app or an unlimited audit.",
        },
        {
          type: "p",
          text: "A Launch Sprint starts from US$2,500 and covers planning, UX direction, implementation, testing and deployment for one tightly scoped first release or core workflow. Mobile applications, authentication, billing, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the scope. Review the current pricing, then bring the brief and existing assets through the contact route for a scoped recommendation.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Should a pre-seed startup use a ranked list of mobile app development companies?",
      answer: "Use a list only to discover candidates. Shortlist companies against the same release scope, responsibilities, evidence, account ownership and handover requirements. A directory position or award does not establish fit for your product.",
    },
    {
      question: "How many mobile app companies should a founder shortlist?",
      answer: "Use the smallest set that gives you meaningful alternatives and enough time to verify each proposal. The important constraint is not a fixed number; it is whether every candidate answers the same brief and evidence request.",
    },
    {
      question: "Should the startup or development company own the app-store accounts?",
      answer: "The startup should normally control its Apple Developer, App Store Connect and Google Play accounts, then grant the delivery company appropriate access. This keeps legal agreements, release permissions and future handover under the buyer's control.",
    },
    {
      question: "What should count as completion of a mobile app MVP milestone?",
      answer: "Tie completion to observable behaviour: an installable build, the agreed user journey, tested failure states, documented findings, buyer-controlled accounts and the specified handover. State separately whether the milestone includes beta distribution, store submission or public release.",
    },
    {
      question: "Is cross-platform or native development better for a pre-seed mobile app?",
      answer: "Neither is automatically better. Ask candidates to connect the choice to required platform APIs, user experience, team capability, testing, release operations and expected product changes. Reject a framework recommendation that is not tied to your constraints.",
    },
  ],
  sources: [
    { title: "Apple Developer Program roles and access", url: "https://developer.apple.com/help/account/access/roles", publisher: "Apple" },
    { title: "Add developer account users and manage permissions", url: "https://support.google.com/googleplay/android-developer/answer/9844686?hl=en", publisher: "Google Play" },
    { title: "Repository roles for an organisation", url: "https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization", publisher: "GitHub" },
    { title: "TestFlight overview", url: "https://developer.apple.com/help/app-store-connect/test-a-beta-version/testflight-overview", publisher: "Apple" },
    { title: "Set up an open, closed or internal test", url: "https://support.google.com/googleplay/android-developer/answer/9845334?hl=en", publisher: "Google Play" },
    { title: "Mobile Application Security Verification Standard", url: "https://mas.owasp.org/MASVS/", publisher: "OWASP" },
    { title: "Secure Software Development Framework Version 1.1", url: "https://csrc.nist.gov/pubs/sp/800/218/final", publisher: "National Institute of Standards and Technology" },
  ],
  related: [
    "what-full-stack-mobile-app-development-includes",
    "build-mobile-app-mvp-without-tech-co-founder",
    "how-to-choose-a-software-development-company",
  ],
};
