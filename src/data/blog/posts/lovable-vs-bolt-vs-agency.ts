import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "lovable-vs-bolt-vs-agency",
  title: "Bolt vs Lovable vs Cursor vs Agency: Which Fits Your MVP?",
  seoTitle: "Bolt vs Lovable vs Cursor vs Agency",
  description:
    "Compare Bolt, Lovable, Cursor and a development agency by the work each option owns, the skills required and the evidence needed before launch.",
  excerpt:
    "Choose between AI app builders, a coding agent and a delivery team by deciding who will own the engineering work after the first preview.",
  category: "Choosing a Partner",
  primaryKeyword: "bolt vs lovable vs cursor vs agency",
  secondaryKeywords: [
    "Bolt vs Lovable vs hiring an agency",
    "Cursor vs development agency",
    "AI app builder vs agency",
    "best way to build an MVP",
    "AI builder or development team",
  ],
  published: "2026-08-20",
  updated: "2026-08-31",
  authorId: "leadership-01",
  serviceSlug: "product-engineering",
  keyTakeaway:
    "Choose Bolt or Lovable when a founder wants to create and iterate on a bounded web product directly. Choose Cursor when a capable engineer will own an existing repository and can review every change. Choose an agency when the buyer needs one accountable team to cover product decisions, design, engineering, testing, deployment and handover. None is automatically production-ready: compare them using the same workflow, ownership, security and acceptance evidence.",
  sections: [
    {
      heading: "What is the practical difference between Bolt, Lovable, Cursor and an agency?",
      blocks: [
        {
          type: "p",
          text: "Bolt and Lovable are app-building environments: a founder can describe a product, generate an interface and application code, connect services and publish. Cursor is a coding agent built around a software repository and developer workflow. An agency is a commercial delivery team rather than a software tool; its contract and process determine which product, design, engineering and operational responsibilities it accepts.",
        },
        {
          type: "p",
          text: "That distinction matters more than a feature checklist. Bolt or Lovable can give a non-technical founder direct control over early iteration. Cursor can make a qualified developer more effective inside an established codebase. An agency can supply missing roles and accountability, but the agency label does not prove quality. The correct option depends on who will make and verify technical decisions after the first useful preview.",
        },
        {
          type: "callout",
          text: "Compare ownership of the work, not just access to code generation. Someone must still define behaviour, review changes, protect data, deploy the system and operate it after launch.",
        },
      ],
    },
    {
      heading: "How do the four options compare for an MVP?",
      blocks: [
        {
          type: "table",
          caption: "Use the same release boundary when comparing every route.",
          head: ["Option", "What it provides", "What the buyer still owns", "Best fit"],
          rows: [
            [
              "Bolt",
              "A browser-based environment for generating and publishing JavaScript applications, with documented GitHub integration",
              "Prompt context, product decisions, review, testing, service configuration and ongoing operation unless another person is assigned",
              "Founder-led exploration or a bounded web workflow that fits Bolt's supported stack",
            ],
            [
              "Lovable",
              "An application-building environment with Git sync and documented managed, hybrid and self-managed deployment routes",
              "Product decisions, verification, account choices and the operational work not covered by the selected hosting route",
              "Founder-led web products that benefit from an integrated build and hosting path",
            ],
            [
              "Cursor",
              "A coding agent that can understand a repository, plan changes, implement features, fix bugs and review diffs",
              "Architecture, review approval, tests, security, deployment and production ownership",
              "A technical founder or engineering team working in a repository they can maintain",
            ],
            [
              "Development agency",
              "People and a delivery process whose responsibilities are set by the proposal and contract",
              "Business decisions, timely access and acceptance; any technical responsibility not explicitly included",
              "A buyer who needs accountable delivery roles rather than another tool to operate",
            ],
          ],
        },
        {
          type: "p",
          text: "The options can be combined. An agency may use Cursor and may inherit a prototype from Bolt or Lovable. A technical founder may begin in a builder and later move the repository into a conventional workflow. The decision is therefore not 'AI or humans'. It is which party owns each decision, check and production responsibility at the current stage.",
        },
      ],
    },
    {
      heading: "When should a founder choose Bolt?",
      blocks: [
        {
          type: "p",
          text: "Choose Bolt when direct browser-based iteration is valuable and the required application fits its documented technical boundary. Bolt currently documents Node.js for backend work and browser-native JavaScript frameworks for the frontend, along with connections for GitHub, databases, hosting, payments and other services. Confirm the current product documentation and the actual integrations before committing to a release plan.",
        },
        {
          type: "list",
          items: [
            "The founder can describe and test one core workflow without delegating every iteration.",
            "The product fits the supported web stack and does not depend on an unverified runtime or infrastructure requirement.",
            "A buyer-owned GitHub repository and production accounts can be connected early.",
            "A qualified reviewer is available before the product handles sensitive data or consequential actions.",
          ],
        },
        {
          type: "p",
          text: "Do not select Bolt solely because it produces a quick preview. Test whether the generated project can be built from its repository, whether its external services are documented, and whether another authorised person can deploy it without relying on undocumented workspace state.",
        },
      ],
    },
    {
      heading: "When should a founder choose Lovable?",
      blocks: [
        {
          type: "p",
          text: "Choose Lovable when an integrated app-building and hosting route suits the product and the founder wants a visual, prompt-led workflow. Lovable's current ownership documentation says projects can sync to Git, code can run outside Lovable and data can be moved, while also explaining that self-managed operation transfers responsibility for deployment, databases, authentication, backups, access controls, secrets and monitoring to the product owner.",
        },
        {
          type: "list",
          items: [
            "The team wants managed development and hosting now but a documented route to external collaboration.",
            "The generated framework, backend arrangement and integration choices fit the organisation's constraints.",
            "The buyer understands which operational duties Lovable covers and which return to the team when components move elsewhere.",
            "Git sync, data access and account ownership are configured before the prototype becomes business-critical.",
          ],
        },
        {
          type: "p",
          text: "Portability is a property to test, not a phrase to accept. Clone the repository, inventory the hosted services and reproduce one important workflow in the intended target environment. This reveals whether the handoff includes the full application path rather than only frontend files.",
        },
      ],
    },
    {
      heading: "When should a founder choose Cursor?",
      blocks: [
        {
          type: "p",
          text: "Choose Cursor when a technical founder or engineering team already works with a source repository and can own the resulting changes. Cursor describes itself as a coding agent that can understand code, plan and build features, fix bugs and review changes. Those capabilities sit inside an engineering workflow; they do not replace the person accountable for architecture, merge approval, release and operation.",
        },
        {
          type: "list",
          items: [
            "A qualified engineer can inspect diffs, run checks and reject unsuitable changes.",
            "The repository already has build, test and deployment paths that make changes verifiable.",
            "The team can configure data and privacy controls for the code and context exposed to the tool.",
            "Product scope and acceptance decisions are owned outside the prompt history.",
          ],
        },
        {
          type: "p",
          text: "Cursor's security page documents Privacy Mode and states that, when enabled, data is not used for training. A buyer should still review the current data-use terms, model routes, extensions, connected tools and organisational settings against its own security requirements. A product-level control must be configured and verified in the actual workspace.",
        },
      ],
    },
    {
      heading: "When should a founder hire an agency?",
      blocks: [
        {
          type: "p",
          text: "Hire an agency when the organisation needs accountable roles and delivery capacity rather than another product-building interface. A useful agency scope can connect product decisions, user experience, architecture, implementation, security checks, deployment and handover. Whether it actually does so depends on the written scope and evidence, not the word 'agency'.",
        },
        {
          type: "list",
          items: [
            "No internal person can responsibly own architecture and review for the proposed release.",
            "The first workflow includes permissions, integrations, production data or operational failure modes that require coordinated expertise.",
            "The buyer needs a named person to manage dependencies, demonstrate acceptance evidence and organise handover.",
            "A working prototype exists, but a retain-repair-replace decision must be made before adding more features.",
          ],
        },
        {
          type: "p",
          text: "An agency can also create lock-in. Require buyer-owned source, hosting, domain and essential vendor accounts; reviewed changes; documented environments; repeatable deployment; known limitations; and a handover that another qualified engineer can follow. Our Bolt and Lovable developer-handoff checklist explains that later-stage audit in detail.",
        },
      ],
    },
    {
      heading: "How should cost and speed be compared?",
      blocks: [
        {
          type: "p",
          text: "Do not compare a tool subscription with a delivery proposal as though they buy the same work. For Bolt, Lovable or Cursor, include the founder or engineer time needed for scoping, prompting, review, testing, integration, deployment, incident response and future changes. For an agency, identify which of those responsibilities are included, excluded or billed separately.",
        },
        {
          type: "table",
          caption: "Build a like-for-like comparison around one core workflow.",
          head: ["Cost area", "Builder or coding-agent route", "Agency route"],
          rows: [
            ["Product definition", "Founder's time or a separate adviser", "Included only if discovery and decision ownership are explicit"],
            ["Implementation", "Tool usage plus the operator's time", "Team effort within the agreed scope"],
            ["Review and testing", "Internal engineer or separately hired reviewer", "Included only where checks and acceptance evidence are named"],
            ["Hosting and services", "Platform and third-party accounts", "Usually buyer costs; account ownership must be explicit"],
            ["Operation and support", "Internal capability or another supplier", "Separate unless post-launch responsibility is written into the engagement"],
            ["Handover or transition", "Repository, service and environment documentation", "Concrete artefacts and access transfer defined before acceptance"],
          ],
        },
        {
          type: "p",
          text: "Measure speed to the same acceptance point. A browser preview, a mergeable repository change and a deployed workflow with recovery evidence are different outcomes. Define the finish line first, then compare how each route reaches it and who carries the remaining work.",
        },
      ],
    },
    {
      heading: "What evidence should you require before launch?",
      blocks: [
        {
          type: "p",
          text: "NIST's Secure Software Development Framework treats secure development as a set of practices across the lifecycle, not a claim attached after implementation. Apply that principle to every route: generated or human-written code should pass the checks appropriate to the product's data, permissions, dependencies and operating environment.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "The buyer controls the repository, production deployment, domain, database and essential third-party accounts.",
            "A clean checkout can install dependencies, run the required checks and produce the deployable artefact.",
            "The core workflow is tested through success, invalid input, permission failure and unavailable-dependency states.",
            "Secrets, personal data and tool context follow an approved access and data-use boundary.",
            "Database changes, external services, monitoring, rollback and recovery steps are documented.",
            "A named person accepts the technical evidence and unresolved risks before real users depend on the release.",
          ],
        },
      ],
    },
    {
      heading: "Which ApexStack starting point fits this decision?",
      blocks: [
        {
          type: "p",
          text: "A Product Blueprint starts from US$1,000 when the immediate need is one bounded planning or de-risking decision—for example, choosing a route for one workflow or reviewing whether an existing prototype is a usable base. It is not a production-ready MVP or an open-ended codebase audit.",
        },
        {
          type: "p",
          text: "A Launch Sprint starts from US$2,500 and covers planning, UX direction, implementation, testing and deployment for one tightly scoped first release or core workflow. Authentication, billing, mobile applications, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the scope. Use the pricing page and a product-engineering conversation to define which evidence the first engagement must produce.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Bolt or Lovable better for a non-technical founder?",
      answer:
        "Both provide prompt-led application-building workflows. Choose from the product's required stack, integrations, hosting and ownership route rather than a universal winner. Test Git access, service ownership and one complete workflow in the intended environment before committing.",
    },
    {
      question: "Is Cursor the same type of product as Bolt or Lovable?",
      answer:
        "No. Cursor is a coding agent centred on a software repository and developer workflow. Bolt and Lovable provide broader app-building environments. Cursor is a stronger fit when a qualified engineer can own architecture, review, testing, deployment and operation.",
    },
    {
      question: "When should a founder hire an agency instead of using an AI builder?",
      answer:
        "Hire an agency when the buyer needs accountable product, design, engineering, testing, deployment or handover roles that are not available internally. Verify those responsibilities in the scope; an agency label alone does not make a release safe or maintainable.",
    },
    {
      question: "Can an agency take over a Bolt or Lovable prototype?",
      answer:
        "Yes, but the agency should first reproduce the build, inventory hosted services and accounts, trace one critical workflow and assess data, security, deployment and operational evidence. It should retain verified parts and repair or replace only where the evidence supports that decision.",
    },
    {
      question: "Which option is cheapest for building an MVP?",
      answer:
        "There is no responsible universal winner because the routes purchase different work. Compare one defined workflow and include product definition, operator time, review, testing, integrations, hosting, deployment, support and handover. A subscription fee is not comparable to an accountable delivery scope on its own.",
    },
  ],
  sources: [
    {
      title: "Supported technologies",
      url: "https://support.bolt.new/building/supported-technologies",
      publisher: "Bolt",
    },
    {
      title: "GitHub for version control",
      url: "https://support.bolt.new/integrations/git",
      publisher: "Bolt",
    },
    {
      title: "Connect your project to GitHub",
      url: "https://docs.lovable.dev/integrations/github",
      publisher: "Lovable",
    },
    {
      title: "Deployment, hosting and ownership options",
      url: "https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership",
      publisher: "Lovable",
    },
    {
      title: "Cursor documentation",
      url: "https://cursor.com/docs",
      publisher: "Cursor",
    },
    {
      title: "Cursor security",
      url: "https://cursor.com/security",
      publisher: "Cursor",
    },
    {
      title: "Secure Software Development Framework (SSDF) Version 1.1",
      url: "https://csrc.nist.gov/pubs/sp/800/218/final",
      publisher: "National Institute of Standards and Technology",
    },
  ],
  related: [
    "bolt-vs-lovable-vs-hiring-dev-agency",
    "cursor-claude-vs-hiring-dev-agency",
    "no-code-vs-vibe-coding-vs-dev-agency",
  ],
};
