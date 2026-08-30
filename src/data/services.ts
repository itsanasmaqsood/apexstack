/**
 * The service catalogue.
 *
 * Single source of truth for the services hub, the footer columns and the
 * homepage's structured data. Slugs double as anchor targets on `/services`
 * (`/services#ai-development`), so footer links resolve without needing 23
 * separate thin pages — dedicated service pages come later, once each has
 * enough substance to rank on its own.
 */

export interface ServiceItem {
  slug: string;
  name: string;
  /** One sentence: the business problem, not the technology. */
  summary: string;
  /** What the client actually receives. */
  deliverables: string[];
}

export interface ServiceGroup {
  id: string;
  eyebrow: string;
  heading: string;
  intro: string;
  items: ServiceItem[];
}

export const CORE_ENGINEERING: ServiceItem[] = [
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    summary:
      "Software built around how your business actually works, rather than a product you have to reshape your operation to fit.",
    deliverables: [
      "Requirements and scope defined against measurable business outcomes",
      "Architecture documented with the reasoning behind each decision",
      "Tested, reviewed code delivered into your repositories",
      "Deployment pipeline and handover documentation",
    ],
  },
  {
    slug: "enterprise-software",
    name: "Enterprise Systems",
    summary:
      "Systems that carry real operational load — role-based access, audit trails, integrations and the reliability an organisation depends on.",
    deliverables: [
      "Role and permission model mapped to your organisational structure",
      "Integration layer for the systems you already run",
      "Audit logging and reporting built in, not bolted on",
      "Load testing against realistic peak usage",
    ],
  },
  {
    slug: "saas-development",
    name: "SaaS Platform Development",
    summary:
      "Multi-tenant products built to be sold — billing, onboarding, tenancy isolation and the operational tooling a SaaS business runs on.",
    deliverables: [
      "Multi-tenant architecture with isolation verified by test",
      "Subscription, billing and entitlement handling",
      "Self-serve onboarding and account management",
      "Usage analytics and admin tooling",
    ],
  },
  {
    slug: "ai-development",
    name: "AI Products & AI Agents",
    summary:
      "Production AI features rather than demonstrations — model integration, retrieval over your own data, and agents that complete real tasks.",
    deliverables: [
      "Use-case assessment, including an honest view on whether AI is the right answer",
      "Retrieval and data pipeline over your own content",
      "Agent design with guardrails, evaluation and fallback behaviour",
      "Cost modelling and monitoring for inference at scale",
    ],
  },
  {
    slug: "automation",
    name: "Business Process Automation",
    summary:
      "Replace the manual work your team repeats every week with systems that run themselves and report when they cannot.",
    deliverables: [
      "Process mapping to find what is worth automating and what is not",
      "Workflow implementation across the tools you already use",
      "Exception handling and human-in-the-loop review points",
      "Before-and-after measurement of time recovered",
    ],
  },
  {
    slug: "crm-erp",
    name: "CRM & ERP Systems",
    summary:
      "Custom or heavily tailored operational platforms for businesses whose processes do not fit an off-the-shelf product.",
    deliverables: [
      "Data model built around your actual operating process",
      "Migration from existing systems with a rehearsed rollback",
      "Reporting and dashboards for the metrics you manage on",
      "Training material and administrator handover",
    ],
  },
  {
    slug: "web-development",
    name: "Web Application Development",
    summary:
      "Fast, accessible, search-visible web applications — from customer-facing platforms to internal tooling.",
    deliverables: [
      "Server-rendered or static delivery chosen against your performance needs",
      "Core Web Vitals measured and met before launch",
      "Accessibility review against WCAG guidance",
      "Analytics and search infrastructure configured",
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    summary:
      "iOS and Android applications, taken through store review and released — not handed over as a build folder.",
    deliverables: [
      "Native or cross-platform decision made against your roadmap",
      "App Store and Google Play submission, review and release management",
      "Push notifications, offline behaviour and deep linking",
      "Crash reporting and release monitoring",
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud Infrastructure & DevOps",
    summary:
      "Infrastructure treated as part of the product — provisioned as code, deployed automatically, and observable in production.",
    deliverables: [
      "Infrastructure as code, version controlled alongside the application",
      "CI/CD pipeline with automated verification before merge",
      "Monitoring, logging and alerting your team can act on",
      "Cost review and right-sizing",
    ],
  },
  {
    slug: "api-development",
    name: "API Development & Integration",
    summary:
      "The interfaces between systems, where most project estimates go wrong and most production incidents begin.",
    deliverables: [
      "API design with versioning and deprecation policy agreed up front",
      "Authentication, rate limiting and abuse protection",
      "Published documentation and a working sandbox",
      "Integration testing against real third-party behaviour",
    ],
  },
  {
    slug: "product-engineering",
    name: "Product Engineering",
    summary:
      "A long-running team that owns discovery, delivery and iteration — for products that keep evolving after launch.",
    deliverables: [
      "Dedicated team with a named technical lead",
      "Roadmap maintained against evidence rather than assumption",
      "Continuous delivery with short release cycles",
      "Quarterly architecture and cost review",
    ],
  },
  {
    slug: "mvp-development",
    name: "MVP Development",
    summary:
      "The smallest build that answers a real question about your market — with the emphasis genuinely on minimum.",
    deliverables: [
      "The core hypothesis stated in writing before anything is built",
      "A scope deliberately cut to test it",
      "Working product in front of real users",
      "Instrumentation to tell you whether the answer was yes",
    ],
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    summary:
      "Modernising systems the business already depends on, incrementally, without the outage a big-bang rewrite invites.",
    deliverables: [
      "Audit of the current estate, its risk and its running cost",
      "Sequenced migration plan that keeps the business operating",
      "Capability moved across in stages, with rollback at each",
      "Team enablement so the change holds after we leave",
    ],
  },
  {
    slug: "technical-consulting",
    name: "Tech Stack Consultancy",
    summary:
      "A tech stack consultancy engagement turns an expensive technical decision into an inspectable recommendation. ApexStack reviews the product goal, current architecture, team capability, security, ownership, operating constraints and total cost before recommending what to keep, change or test next. The output is written for the decision-maker, with assumptions, trade-offs, evidence gaps and a practical action sequence made explicit.",
    deliverables: [
      "Decision brief defining the buyer question, constraints and evidence boundary",
      "Current-state architecture, dependency and account-ownership assessment",
      "Tech-stack options compared against delivery, operation and total cost",
      "Written recommendation, risks and sequenced next actions—including when to keep the current stack",
    ],
  },
];

export const CREATIVE_SERVICES: ServiceItem[] = [
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    summary:
      "Interface and interaction design grounded in how the product will actually be used, handed to engineering as a working system.",
    deliverables: [
      "User journeys mapped before any screen is designed",
      "Wireframes for the flows where complexity actually lives",
      "High-fidelity interface design including edge and error states",
      "A component library engineering can build directly from",
    ],
  },
  {
    slug: "branding",
    name: "Branding & Identity",
    summary:
      "The visual and verbal system a company is recognised by — logo, palette, typography, tone and the rules that hold them together.",
    deliverables: [
      "Logo suite with usage rules and clear-space guidance",
      "Colour and typographic system with accessibility checked",
      "Tone-of-voice guidance with worked examples",
      "Brand guidelines document",
    ],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    summary:
      "Design for everything the business publishes — documents, decks, collateral and campaign assets.",
    deliverables: [
      "Templates your team can use without a designer",
      "Print and digital collateral",
      "Source files in editable formats",
      "Asset library organised for reuse",
    ],
  },
  {
    slug: "motion-video",
    name: "Motion Graphics",
    summary:
      "Animation that explains something a static image cannot — product walkthroughs, interface motion and title systems.",
    deliverables: [
      "Storyboard and animatic before production",
      "Motion assets in the formats each platform needs",
      "Interface motion specifications engineering can implement",
      "Source project files",
    ],
  },
  {
    slug: "video-production",
    name: "Video Production & Editing",
    summary:
      "From concept to finished cut — product films, case studies, testimonials and internal communication.",
    deliverables: [
      "Script, shot list and production plan",
      "Filming or asset assembly",
      "Edit, grade, sound and captions",
      "Platform-specific exports and aspect ratios",
    ],
  },
  {
    slug: "3d-design",
    name: "3D Design & Visualisation",
    summary:
      "Product visualisation and 3D assets for cases where a photograph is impossible, impractical or not yet possible.",
    deliverables: [
      "Modelling, texturing and lighting",
      "Rendered stills and turntables",
      "Real-time assets where the web or an app needs them",
      "Source scenes and exported formats",
    ],
  },
  {
    slug: "social-media-design",
    name: "Social Media Design",
    summary:
      "A repeatable visual system for social output, so the brand stays consistent at the pace publishing demands.",
    deliverables: [
      "Templates per platform and format",
      "Campaign asset sets",
      "Motion variants for feed and story placements",
      "Handover so the team can produce without design support",
    ],
  },
  {
    slug: "marketing-assets",
    name: "Marketing Assets",
    summary:
      "The design layer around go-to-market — landing pages, ad creative, one-pagers and sales collateral.",
    deliverables: [
      "Landing page design built for conversion",
      "Ad creative sized for each channel",
      "Sales one-pagers and product sheets",
      "Editable templates for ongoing campaigns",
    ],
  },
  {
    slug: "presentation-design",
    name: "Presentation Design",
    summary:
      "Investor, sales and internal decks that carry an argument clearly instead of burying it in bullet points.",
    deliverables: [
      "Narrative structure agreed before design begins",
      "Designed deck with a reusable master template",
      "Data visualisation for the numbers that matter",
      "Editable source files",
    ],
  },
];

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "core-engineering",
    eyebrow: "CORE ENGINEERING",
    heading: "What we are here to do",
    intro:
      "Engineering is the practice this company is built on. Everything else supports it.",
    items: CORE_ENGINEERING,
  },
  {
    id: "creative-services",
    eyebrow: "DESIGN & CREATIVE",
    heading: "The layer that makes it worth using",
    intro:
      "Design and creative work strengthen what we engineer. They are a supporting capability, available standalone, but they are not what defines us.",
    items: CREATIVE_SERVICES,
  },
];

/** Every service slug, for sitemap generation and link validation. */
export const ALL_SERVICES: ServiceItem[] = [...CORE_ENGINEERING, ...CREATIVE_SERVICES];
