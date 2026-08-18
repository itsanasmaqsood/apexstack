/**
 * Industry catalogue.
 *
 * Sectors only — no client names, no project claims. Each entry states the
 * problems that recur in that sector and what we build against them, which is
 * defensible without naming anyone.
 */

export interface Industry {
  slug: string;
  name: string;
  /** The recurring problems buyers in this sector actually describe. */
  problems: string[];
  /** What we build in response. */
  weBuild: string[];
  /**
   * Slugs from ALL_SERVICES in `./services`, resolved to names at render time so
   * a renamed service cannot drift out of sync here. They exist because
   * /industries used to emit no contextual link at all: twelve sectors sharing
   * one URL and passing no relevance to the 23 service pages that describe the
   * work each sector is actually buying.
   */
  relatedServices: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "fintech",
    name: "FinTech & Financial Services",
    problems: [
      "Compliance requirements that shape architecture rather than sit on top of it",
      "Transaction volumes where latency and correctness are non-negotiable",
      "Legacy core systems that cannot be switched off during modernisation",
    ],
    weBuild: [
      "Payment and lending platforms with auditable transaction trails",
      "Risk, reporting and reconciliation tooling",
      "Secure customer portals and mobile banking applications",
    ],
    relatedServices: [
      "custom-software-development",
      "enterprise-software",
      "api-development",
      "mobile-app-development",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    problems: [
      "Patient data handling governed by regulation from day one",
      "Clinical workflows that cannot tolerate additional administrative load",
      "Systems that must interoperate with equipment and records they do not own",
    ],
    weBuild: [
      "Patient portals and appointment platforms",
      "Clinical workflow and records systems",
      "Telehealth applications and device integrations",
    ],
    relatedServices: [
      "custom-software-development",
      "mobile-app-development",
      "api-development",
      "ui-ux-design",
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    problems: [
      "Traffic that arrives in unpredictable spikes",
      "Inventory truth split across channels, warehouses and marketplaces",
      "Checkout performance directly determining revenue",
    ],
    weBuild: [
      "Storefronts and headless commerce platforms",
      "Order management and fulfilment systems",
      "Inventory synchronisation across channels",
    ],
    relatedServices: [
      "web-development",
      "custom-software-development",
      "api-development",
      "cloud-devops",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    problems: [
      "Real-time visibility across assets that move and connectivity that drops",
      "Route and capacity planning at a scale humans cannot optimise manually",
      "Field teams working on devices, not desks",
    ],
    weBuild: [
      "Fleet and shipment tracking platforms",
      "Warehouse and last-mile operations tooling",
      "Driver and field applications built for intermittent connectivity",
    ],
    relatedServices: [
      "custom-software-development",
      "mobile-app-development",
      "api-development",
      "automation",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    problems: [
      "Production data trapped in equipment that predates the internet",
      "Downtime measured in cost per minute",
      "Planning systems disconnected from what the floor is actually doing",
    ],
    weBuild: [
      "Production monitoring and OEE dashboards",
      "ERP and planning integrations",
      "Predictive maintenance and quality tooling",
    ],
    relatedServices: [
      "enterprise-software",
      "automation",
      "api-development",
      "crm-erp",
    ],
  },
  {
    slug: "edtech",
    name: "EdTech & Education",
    problems: [
      "Usage that concentrates into narrow, unforgiving windows",
      "Assessment integrity and accessibility as hard requirements",
      "Multiple audiences — learners, educators, administrators — in one product",
    ],
    weBuild: [
      "Learning platforms and content delivery",
      "Assessment engines and proctoring integrations",
      "Student information and administration systems",
    ],
    relatedServices: [
      "saas-development",
      "web-development",
      "mobile-app-development",
      "ui-ux-design",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate & PropTech",
    problems: [
      "Listing data fragmented across portals and agencies",
      "Long transaction cycles involving many parties and documents",
      "Media-heavy experiences that still have to load quickly",
    ],
    weBuild: [
      "Listing and search platforms",
      "Transaction, document and workflow management",
      "Virtual tour and visualisation experiences",
    ],
    relatedServices: [
      "web-development",
      "custom-software-development",
      "3d-design",
      "api-development",
    ],
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    problems: [
      "Availability and pricing that change by the second",
      "Dependence on third-party inventory systems you do not control",
      "Seasonal demand swings that make static capacity wasteful",
    ],
    weBuild: [
      "Booking and reservation platforms",
      "Channel manager and inventory integrations",
      "Guest applications and loyalty systems",
    ],
    relatedServices: [
      "web-development",
      "mobile-app-development",
      "api-development",
      "custom-software-development",
    ],
  },
  {
    slug: "saas",
    name: "SaaS & Technology",
    problems: [
      "Multi-tenancy and isolation decided early and expensive to revisit",
      "Billing complexity that grows faster than the product",
      "Infrastructure cost scaling faster than revenue",
    ],
    weBuild: [
      "Multi-tenant platforms with verified isolation",
      "Subscription, entitlement and usage-based billing",
      "Admin tooling, analytics and customer-facing APIs",
    ],
    relatedServices: [
      "saas-development",
      "product-engineering",
      "mvp-development",
      "cloud-devops",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    problems: [
      "Utilisation and margin invisible until the month closes",
      "Client work tracked across spreadsheets and disconnected tools",
      "Knowledge held by individuals rather than the organisation",
    ],
    weBuild: [
      "Custom CRM and resource planning systems",
      "Client portals and delivery tracking",
      "Time, billing and profitability reporting",
    ],
    relatedServices: [
      "crm-erp",
      "custom-software-development",
      "automation",
      "web-development",
    ],
  },
  {
    slug: "enterprise",
    name: "Enterprise & Internal Systems",
    problems: [
      "Processes spread across tools that were never designed to talk",
      "Procurement and security review shaping the delivery timeline",
      "Internal software judged against the consumer products staff use daily",
    ],
    weBuild: [
      "Internal platforms and operational tooling",
      "Systems integration and data consolidation",
      "Workflow automation across existing software",
    ],
    relatedServices: [
      "enterprise-software",
      "digital-transformation",
      "api-development",
      "automation",
    ],
  },
  {
    slug: "public-sector",
    name: "Public Sector",
    problems: [
      "Accessibility and transparency as statutory obligations",
      "Procurement cycles that require documented process and auditability",
      "Services that must work for every citizen, on any device",
    ],
    weBuild: [
      "Citizen-facing service platforms built to accessibility standards",
      "Case management and internal administration systems",
      "Open data and reporting interfaces",
    ],
    relatedServices: [
      "custom-software-development",
      "web-development",
      "ui-ux-design",
      "digital-transformation",
    ],
  },
];
