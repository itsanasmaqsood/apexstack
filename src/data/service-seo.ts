/**
 * Search metadata for the 23 service pages.
 *
 * Kept apart from `services.ts` (which holds what a service *is*) and
 * `service-details.ts` (which holds the page body) because these strings answer
 * a different question: what a buyer types into Google, and what makes them
 * click the result rather than the four above it.
 *
 * Rules applied to every entry below:
 *   - Title 50-60 characters. Under 50 wastes the slot; over 60 is truncated
 *     with an ellipsis, and the brand at the end is the first thing to go.
 *   - Description 140-160 characters. Google rewrites descriptions freely, but
 *     a well-formed one is used often enough to matter and it sets the promise.
 *   - The head term leads. "Custom Software Development Services" ranks for the
 *     query; "Software That Fits" does not.
 *   - No superlatives and no invented proof. Every claim here is a description
 *     of how we work, which is verifiable on the page itself.
 */

export interface ServiceSeo {
  title: string;
  description: string;
  /**
   * The visible `<h1>`.
   *
   * WHY THIS EXISTS: the pages used to render `service.name` as their H1, so
   * `<title>Enterprise Software Development Company</title>` sat above an H1 of
   * "Enterprise Systems", and "Marketing Design & Campaign Asset Services"
   * above "Marketing Assets". Title and H1 disagreed on exactly the commercial
   * modifier — "development", "services" — that turns a topic into a query, so
   * the strongest in-body signal reinforced nothing the title was bidding on.
   *
   * It is the title minus the " | ApexStack" brand slot, with two exceptions
   * where the tail belongs to the SERP and not to a heading: "Company"
   * (enterprise-software) and "& Partners" (product-engineering) both read as a
   * claim about who we are rather than a page heading, so they are dropped.
   *
   * Optional so a newly added service is never blocked on writing one; the
   * renderer falls back to `service.name`. `service.name` itself is deliberately
   * unchanged — it feeds nav, cards, breadcrumbs and the Service schema.
   */
  h1?: string;
}

export const SERVICE_SEO: Record<string, ServiceSeo> = {
  "custom-software-development": {
    title: "Custom Software Development Services | ApexStack",
    h1: "Custom Software Development Services",
    description:
      "Custom software built around how your business actually works. We scope the problem, design the architecture, ship to production — then support it.",
  },
  "enterprise-software": {
    title: "Enterprise Software Development Company | ApexStack",
    h1: "Enterprise Software Development",
    description:
      "Enterprise systems that hold up under real load, real users and real compliance rules. Integration with what you already run, documented and handed over.",
  },
  "saas-development": {
    title: "SaaS Platform Development Services | ApexStack",
    h1: "SaaS Platform Development Services",
    description:
      "Multi-tenant SaaS platforms engineered for billing, onboarding, roles and scale from the first release. We build the product and the infrastructure it runs on.",
  },
  "ai-development": {
    title: "AI Product & AI Agent Development Services | ApexStack",
    h1: "AI Product & AI Agent Development Services",
    description:
      "AI features and autonomous agents that survive production: retrieval that returns the right context, evaluation you can trust, guardrails before launch.",
  },
  automation: {
    title: "Business Process Automation Services | ApexStack",
    h1: "Business Process Automation Services",
    description:
      "Replace the manual steps your team repeats every day with systems that run themselves. We map the workflow, automate it and prove the result against your numbers.",
  },
  "crm-erp": {
    title: "Custom CRM & ERP Development Services | ApexStack",
    h1: "Custom CRM & ERP Development Services",
    description:
      "Custom CRM and ERP integration and development with explicit data ownership, supported interfaces, reconciliation and a practical handover path.",
  },
  "web-development": {
    title: "Web Application Development Services | ApexStack",
    h1: "Web Application Development Services",
    description:
      "Fast, accessible web applications engineered for the browser your customers actually use. Modern stack, measured performance, and a codebase your team can maintain.",
  },
  "mobile-app-development": {
    title: "Mobile App Development Services | ApexStack",
    h1: "Mobile App Development Services",
    description:
      "Native and cross-platform iOS and Android apps taken through design, build, store review and release. Built for offline states and slow networks.",
  },
  "cloud-devops": {
    title: "Cloud Infrastructure & DevOps Services | ApexStack",
    h1: "Cloud Infrastructure & DevOps Services",
    description:
      "Cloud application stack management, infrastructure as code, CI/CD, monitoring and cost control with explicit operating boundaries and reviewable changes.",
  },
  "api-development": {
    title: "API Development & Systems Integration | ApexStack",
    h1: "API Development & Systems Integration",
    description:
      "APIs and integration layers that let your systems talk to each other reliably. Versioned, documented, rate-limited and monitored — built to be depended on.",
  },
  "product-engineering": {
    title: "Product Engineering Services & Partners | ApexStack",
    h1: "Product Engineering Services",
    description:
      "A product engineering team that owns discovery through to production. We take responsibility for outcomes, not for a ticket queue someone else wrote.",
  },
  "mvp-development": {
    title: "MVP Development Services for Startups | ApexStack",
    h1: "MVP Development Services for Startups",
    description:
      "An MVP built to answer one question fast, on foundations worth keeping. Scoped so you learn what you need without paying for what you do not yet.",
  },
  "digital-transformation": {
    title: "Digital Transformation Consulting Services | ApexStack",
    h1: "Digital Transformation Consulting Services",
    description:
      "Modernise the systems your operation depends on without stopping it. Staged migrations, measurable checkpoints and a plan for the legacy you cannot switch off.",
  },
  "technical-consulting": {
    title: "Technical Consulting & Software Architecture | ApexStack",
    h1: "Technical Consulting & Software Architecture",
    description:
      "Independent technical review, architecture and due diligence. We tell you what will break, what it costs to fix, and what you can safely leave alone.",
  },
  "ui-ux-design": {
    title: "UI/UX Design Services for Software Products | ApexStack",
    h1: "UI/UX Design Services for Software Products",
    description:
      "Interface and experience design grounded in research and delivered as a system engineering can build from — including every state that goes wrong.",
  },
  branding: {
    title: "Branding & Brand Identity Design Services | ApexStack",
    h1: "Branding & Brand Identity Design Services",
    description:
      "Brand identity built as a working system: logo, type, colour and the rules that keep it consistent everywhere it appears, from product UI to print.",
  },
  "graphic-design": {
    title: "Graphic Design Services for Businesses | ApexStack",
    h1: "Graphic Design Services for Businesses",
    description:
      "Graphic design produced to brief and to brand, from campaign artwork to the everyday assets your teams need. Source files handed over, always.",
  },
  "motion-video": {
    title: "Motion Graphics & Animation Services | ApexStack",
    h1: "Motion Graphics & Animation Services",
    description:
      "Motion graphics that explain a product rather than decorate it. Storyboard, animation and delivery in every format and ratio your channels require.",
  },
  "video-production": {
    title: "Video Production & Editing Services | ApexStack",
    h1: "Video Production & Editing Services",
    description:
      "Video from script through to final cut — product films, customer stories and internal communication. Delivered edited, graded and ready to publish.",
  },
  "3d-design": {
    title: "3D Design & Product Visualisation Services | ApexStack",
    h1: "3D Design & Product Visualisation Services",
    description:
      "3D modelling, rendering and product visualisation for teams that need to show something before it exists. Stills, turntables and real-time assets.",
  },
  "social-media-design": {
    title: "Social Media Design & Content Services | ApexStack",
    h1: "Social Media Design & Content Services",
    description:
      "Social creative built as a repeatable system rather than one-off posts: templates, sizes and a visual language that stays recognisably yours.",
  },
  "marketing-assets": {
    title: "Marketing Design & Campaign Asset Services | ApexStack",
    h1: "Marketing Design & Campaign Asset Services",
    description:
      "Landing pages, decks, ads and collateral produced to one brand standard, so every touchpoint a prospect sees looks like it came from the same company.",
  },
  "presentation-design": {
    title: "Presentation & Pitch Deck Design Services | ApexStack",
    h1: "Presentation & Pitch Deck Design Services",
    description:
      "Investor decks, sales presentations and internal reporting designed to be understood at a glance — structured, styled and built to stay editable.",
  },
};
