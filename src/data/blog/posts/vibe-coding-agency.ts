import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "vibe-coding-agency",
  title: "Vibe Coding Agency: How to Choose a Reliable Build Partner",
  seoTitle: "Vibe Coding Agency: A Buyer's Evaluation Guide",
  description:
    "Evaluate a vibe coding agency by its review, security, ownership, deployment and handover controls—not by how quickly it generates code.",
  excerpt:
    "A practical evaluation framework for hiring an AI-assisted product team without surrendering engineering accountability.",
  category: "Choosing a Partner",
  primaryKeyword: "vibe coding agency",
  secondaryKeywords: [
    "vibe coding development services",
    "vibe coding agency checklist",
    "AI assisted development agency",
    "vibe coding agency risks",
    "hire vibe coding agency",
  ],
  published: "2026-06-15",
  updated: "2026-08-29",
  authorId: "leadership-01",
  serviceSlug: "product-engineering",
  keyTakeaway:
    "Choose a vibe coding agency by the controls around its AI-assisted work, not by generation speed. The agency should name the human accountable for architecture and review, define testable acceptance evidence, keep the repository and deployment accounts under your control, protect sensitive data, and deliver a maintainable handover. Start with one bounded workflow and require proof that it can be reviewed, deployed, operated and changed before expanding the engagement.",
  sections: [
    {
      heading: "What is a vibe coding agency?",
      blocks: [
        {
          type: "p",
          text: "A vibe coding agency is a product team that uses generative AI coding tools as part of design and implementation. The label is informal; it does not describe a recognised delivery standard, security control or quality level. Two agencies can use the same tools and produce very different outcomes because context, technical judgement, review discipline and operational ownership remain human responsibilities.",
        },
        {
          type: "p",
          text: "GitHub's responsible-use guidance for its coding agent says generated work should be reviewed and tested before it is merged. That is the useful dividing line for a buyer: AI may accelerate drafts and routine changes, but the provider must still make its engineering decisions inspectable and assign a person to approve the result.",
        },
        {
          type: "callout",
          text: "The product is not the volume of generated code. The product is a working, reviewable system that the buyer can own and operate.",
        },
      ],
    },
    {
      heading: "Which controls matter more than coding speed?",
      blocks: [
        {
          type: "p",
          text: "Ask how the agency converts a brief into controlled changes. A dependable answer covers architecture, source context, review, testing, security, deployment and support. It should distinguish what the tool proposes from what a named engineer approves.",
        },
        {
          type: "table",
          caption: "Evaluate the delivery system, not the demo speed.",
          head: ["Control", "Evidence to request", "Risk when absent"],
          rows: [
            [
              "Technical accountability",
              "A named reviewer and a documented decision path",
              "Generated changes are merged without an accountable owner",
            ],
            [
              "Scope boundary",
              "One core workflow, explicit exclusions and acceptance checks",
              "The build expands through prompts without a stable definition of done",
            ],
            [
              "Security verification",
              "Threats, checks and remediation ownership mapped to the release",
              "Security is reduced to a late scan or an unsupported assurance",
            ],
            [
              "Change control",
              "Reviewed pull requests, protected branches and traceable decisions",
              "Important production changes bypass review and rollback planning",
            ],
            [
              "Account ownership",
              "Buyer-controlled repository, hosting, domain and vendor accounts",
              "The product cannot be operated or transferred without the supplier",
            ],
            [
              "Handover",
              "Setup, deployment, recovery and known-limit documentation",
              "The buyer receives code but not the ability to maintain it",
            ],
          ],
        },
        {
          type: "p",
          text: "NIST's Secure Software Development Framework places security practices throughout the software lifecycle rather than treating them as a final activity. OWASP ASVS provides a catalogue of verifiable application-security requirements. A proposal does not need to claim universal compliance, but it should identify which security requirements matter for this product and how the team will produce evidence for them.",
        },
      ],
    },
    {
      heading: "What should the first vibe-coded release include?",
      blocks: [
        {
          type: "p",
          text: "The first release should prove one commercially useful workflow from entry to completion. Include the permissions, data changes, integration calls, failure states and minimum administration needed to operate that workflow. Exclude secondary audiences and speculative features until the core path has evidence from real use or a validated operational need.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Name the primary user, their trigger and the outcome they need.",
            "Draw the core workflow, including empty, invalid, unavailable and recovery states.",
            "List the data and external services the workflow can access.",
            "Define acceptance checks for behaviour, permissions, security and operation.",
            "Agree which accounts the buyer creates and which access the agency receives.",
            "Specify deployment, monitoring, rollback and handover evidence before implementation begins.",
          ],
        },
        {
          type: "p",
          text: "This boundary makes AI assistance easier to govern. The model receives narrower context, reviewers can follow the intended behaviour, and the buyer can judge a complete outcome. A long screen list provides less protection because it rarely explains permissions, failure recovery or what must happen after a user clicks a button.",
        },
      ],
    },
    {
      heading: "How should code review and testing work?",
      blocks: [
        {
          type: "p",
          text: "Every material change should move through a reviewable branch or pull request. GitHub documents protected branches as a way to require approving reviews and passing status checks before merge. The specific platform can differ, but the buyer should see an equivalent control: generated code cannot approve itself or bypass the checks attached to the release.",
        },
        {
          type: "list",
          items: [
            "Unit or component checks for important rules and transformations.",
            "Integration checks at database, authentication, payment and external-service boundaries.",
            "End-to-end evidence for the core user workflow and its recovery states.",
            "A security review focused on the product's real data, permissions and attack surface.",
            "A deployment check that proves the release can be promoted and rolled back through the documented path.",
          ],
        },
        {
          type: "p",
          text: "Test count is not the goal. Each check should protect a decision the buyer cares about. Ask the agency to connect important acceptance criteria to the automated or manual evidence that demonstrates them, then keep that evidence with the change that introduced the behaviour.",
        },
      ],
    },
    {
      heading: "Who should own the repository and deployment accounts?",
      blocks: [
        {
          type: "p",
          text: "The buyer should control the organisation or workspace that holds the source repository, production deployment, domain and essential third-party services. The agency receives the least access needed for delivery, and access can be removed without losing the product. GitHub's repository roles support different permission levels, which makes ownership and implementation access separate decisions.",
        },
        {
          type: "p",
          text: "Do not rely on a future transfer as the primary ownership plan. Vercel supports project transfers but documents conditions and resources that may need separate handling. Starting in buyer-controlled accounts avoids making a successful handover depend on the transfer rules of every supplier in the stack.",
        },
        {
          type: "table",
          caption: "Record ownership before the first production deployment.",
          head: ["Asset", "Preferred owner", "Handover evidence"],
          rows: [
            ["Source repository", "Buyer organisation", "Admin access, branch rules and dependency inventory"],
            ["Hosting project", "Buyer workspace", "Environment map, deployment and rollback procedure"],
            ["Domain and DNS", "Buyer account", "Registrar access and current record inventory"],
            ["Database and storage", "Buyer account", "Access roles, backup and restore procedure"],
            ["External APIs", "Buyer account where available", "Purpose, scopes, billing owner and rotation steps"],
            ["AI model provider", "Buyer account where practical", "Model use, data boundary, limits and fallback behaviour"],
          ],
        },
      ],
    },
    {
      heading: "Which warning signs should stop the purchase?",
      blocks: [
        {
          type: "list",
          items: [
            "The sales demonstration is offered as proof of maintainability, security or production readiness.",
            "No individual is accountable for reviewing AI-generated architecture and code.",
            "The proposal fixes schedule and price while the workflow, data or integrations remain undefined.",
            "The agency keeps the only administrator account for the repository, hosting or domain.",
            "Testing is described as a final phase with no acceptance evidence attached to important behaviours.",
            "Sensitive production data or credentials may be placed into prompts without a documented boundary.",
            "Handover means a source-code archive rather than a deployable system with operating documentation.",
          ],
        },
        {
          type: "p",
          text: "One warning sign does not prove misconduct. It identifies an unanswered delivery risk. Pause the purchase until the provider changes the plan or supplies evidence that makes the control explicit.",
        },
      ],
    },
    {
      heading: "How should you compare vibe coding agency proposals?",
      blocks: [
        {
          type: "p",
          text: "Normalise each proposal around the same workflow and evidence. Compare what is included, what is excluded, who makes decisions, how changes are reviewed, who owns each account and what happens after launch. A lower quote is not directly comparable when it omits deployment, recovery, documentation or security work that another proposal includes.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Give each provider the same core workflow, constraints and required integrations.",
            "Ask each provider to state assumptions and exclusions in writing.",
            "Request the acceptance evidence and accountable owner for every critical behaviour.",
            "Map repository, production, domain, data and vendor-account ownership.",
            "Separate initial delivery from optional post-launch operation and iteration.",
            "Choose the smallest engagement that resolves the most important uncertainty.",
          ],
        },
        {
          type: "p",
          text: "ApexStack's Product Blueprint starts from US$1,000 for one bounded planning and de-risking question; it is not a production-ready MVP. A Launch Sprint starts from US$2,500 and covers planning, UX direction, implementation, testing and deployment for one tightly scoped first release or core workflow. Authentication, billing, mobile applications, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the scope. Review the current pricing and bring the workflow to a product-engineering conversation before selecting a plan.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is a vibe coding agency?",
      answer:
        "A vibe coding agency uses generative AI coding tools during product delivery. The label does not guarantee quality or speed. Buyers should evaluate the human review, security, testing, deployment, ownership and handover controls around the generated work.",
    },
    {
      question: "How do you evaluate a vibe coding agency?",
      answer:
        "Give the agency one bounded workflow and ask who owns architecture, code review, security verification, deployment and support. Require testable acceptance evidence, buyer-controlled accounts and a handover that proves another qualified engineer can operate and change the product.",
    },
    {
      question: "Should a vibe coding agency own the source repository?",
      answer:
        "The buyer should normally own the repository organisation and grant the agency the access needed to deliver the work. Apply the same principle to hosting, domains, databases and essential vendor accounts so the product remains operable if the commercial relationship ends.",
    },
    {
      question: "Can AI-generated code be used in production?",
      answer:
        "It can be part of a production system when accountable engineers review it, test it against the intended behaviour, verify relevant security requirements and deploy it through controlled release and rollback paths. Generation alone is not production evidence.",
    },
    {
      question: "What should a vibe coding agency hand over?",
      answer:
        "Handover should include buyer-controlled source and production access, setup and deployment instructions, environment and dependency inventories, security and test evidence, monitoring and recovery procedures, known limitations and clear ownership for unresolved work.",
    },
  ],
  sources: [
    {
      title: "Secure Software Development Framework (SSDF) Version 1.1",
      url: "https://csrc.nist.gov/pubs/sp/800/218/final",
      publisher: "National Institute of Standards and Technology",
    },
    {
      title: "Application Security Verification Standard",
      url: "https://owasp.org/www-project-application-security-verification-standard/",
      publisher: "OWASP Foundation",
    },
    {
      title: "Responsible use of GitHub Copilot coding agent",
      url: "https://docs.github.com/en/copilot/responsible-use/copilot-coding-agent",
      publisher: "GitHub",
    },
    {
      title: "About protected branches",
      url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
      publisher: "GitHub",
    },
    {
      title: "Repository roles for an organisation",
      url: "https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/repository-roles-for-an-organization",
      publisher: "GitHub",
    },
    {
      title: "Transferring projects",
      url: "https://vercel.com/docs/projects/transferring-projects",
      publisher: "Vercel",
    },
  ],
};
