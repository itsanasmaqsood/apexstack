/**
 * Per-service page content.
 *
 * `services.ts` holds the catalogue (name, summary, deliverables) used by the
 * hub and the footer. This file adds what a dedicated landing page needs:
 * the business problem, the challenges buyers actually describe, the outcome,
 * the technology, and questions specific to that service.
 *
 * Keyed by the same slug, so the two stay in step.
 */

export interface ServiceDetail {
  /** The business problem, stated before any technology. */
  problem: string;
  /** What buyers describe when they come to us with this. */
  challenges: string[];
  /** How we approach it. Two or three paragraphs. */
  approach: string[];
  /** Business outcomes, not features. */
  outcomes: string[];
  /** Technologies we typically reach for. Also the long-tail SEO surface. */
  technologies: string[];
  faqs: { q: string; a: string }[];
  /**
   * Slugs of services that naturally pair with this one.
   *
   * Also the only editorial control over the internal link graph, so the list is
   * chosen for both. The original arrays sent seven inbound links to cloud-devops
   * and six to marketing-assets while custom-software-development, ai-development,
   * mobile-app-development and saas-development had one each, and 3d-design had
   * none at all — the four services the business sells against sat at the bottom
   * of the graph. Each array is still exactly three so the grid stays full, but
   * the flagships now carry five to seven inbound links and no service has fewer
   * than two.
   */
  related: string[];
  /**
   * Product slugs from `products.ts` that genuinely demonstrate this capability.
   *
   * Optional and deliberately sparse: it is populated only where one of our own
   * shipped apps is real evidence for the service, so a page with nothing to
   * show renders no proof band rather than filler.
   */
  proofProducts?: string[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "custom-software-development": {
    problem:
      "Your business does something specific, and the off-the-shelf product forces you to change how you work in order to use it. The workaround becomes the process, and the process becomes the constraint.",
    challenges: [
      "Spreadsheets and manual steps holding together what the software cannot do",
      "Licence costs rising while the fit gets worse as you grow",
      "Data spread across tools that were never designed to talk to each other",
      "Nobody able to say confidently what the system actually does any more",
    ],
    approach: [
      "We start by mapping how the work is done today — not how a process document says it is done. The gap between those two is usually where the real requirement lives.",
      "Then we design the smallest system that removes the constraint, choosing technology your team can hire for and maintain. Custom does not mean exotic; it means shaped around you.",
      "Delivery runs in short cycles so you use working software early and can change direction while it is still cheap.",
    ],
    outcomes: [
      "Software that matches your operating process instead of fighting it",
      "Manual steps and reconciliation work removed from the day",
      "One source of truth instead of several partial ones",
      "A system your own engineers can extend",
    ],
    technologies: ["TypeScript", "Node.js", "Python", "React", "Next.js", "PostgreSQL", "Docker", "AWS"],
    faqs: [
      {
        q: "Is custom always more expensive than buying?",
        a: "Not over the lifetime, and not always up front. Licence fees for a poor fit compound, and so does the cost of the manual work filling the gaps. We will tell you honestly when buying is the better answer.",
      },
      {
        q: "How long before we see something working?",
        a: "You see working software at the end of every delivery cycle, not at the end of the project. The first usable version typically arrives well before full scope is complete.",
      },
      {
        q: "What if our requirements change during the build?",
        a: "They usually do. We reopen scope when evidence disagrees with the plan and tell you early what the change costs. Continuing to build something you have learned is wrong costs more.",
      },
    ],
    related: ["ai-development", "saas-development", "enterprise-software"],
  },

  "enterprise-software": {
    problem:
      "The system carries real operational load. Downtime is measured in cost per hour, access has to be provably controlled, and it must integrate with software you cannot replace.",
    challenges: [
      "Role and permission requirements that cut across the whole data model",
      "Audit and reporting obligations that cannot be added later",
      "Integration with systems owned by other departments or vendors",
      "Procurement and security review shaping the delivery timeline",
    ],
    approach: [
      "Enterprise systems are decided at the architecture stage. The permission model, the audit trail and the integration boundaries all shape the data model, so we settle them before building rather than retrofitting.",
      "We design for the load you expect and the load you are hoping for, then verify it with load testing rather than assumption.",
      "We work within your security review and procurement process, and document what those reviews will ask for.",
    ],
    outcomes: [
      "Access provably controlled and auditable",
      "Capacity verified against realistic peaks before launch",
      "Integrations that degrade gracefully rather than cascade",
      "Documentation your internal teams can operate from",
    ],
    technologies: ["TypeScript", "Node.js", "Python", "PostgreSQL", "Kubernetes", "Docker", "AWS", "Azure"],
    faqs: [
      {
        q: "Can you work within our security and procurement process?",
        a: "Yes. Tell us the requirements during discovery — compliance regime, review gates, vendor onboarding — and we plan delivery around them rather than discovering them late.",
      },
      {
        q: "Do you replace systems or extend them?",
        a: "Usually extend, then migrate incrementally. Big-bang replacement of systems the business depends on tends to fail.",
      },
      {
        q: "Who owns the code?",
        a: "You do. It is delivered into your repositories and your cloud accounts.",
      },
    ],
    related: ["custom-software-development", "digital-transformation", "ai-development"],
  },

  "saas-development": {
    problem:
      "You are not building a system for one organisation — you are building a product to sell. Tenancy, billing and onboarding decisions made in week two determine what the business can charge for in year two.",
    challenges: [
      "Multi-tenancy chosen early and expensive to revisit",
      "Billing complexity growing faster than the product itself",
      "Self-serve onboarding that has to work without a human",
      "Infrastructure cost scaling faster than revenue",
    ],
    approach: [
      "We settle the tenancy model first and verify isolation by test, because getting it wrong later means a migration under load with customer data.",
      "Billing, entitlements and usage metering are designed together, so pricing can change without an engineering project each time.",
      "We instrument the product from day one — you cannot improve activation or retention you cannot see.",
    ],
    outcomes: [
      "Tenant isolation verified rather than assumed",
      "Pricing and packaging changeable without a rebuild",
      "Onboarding that converts without human intervention",
      "Unit economics visible per tenant",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Docker", "AWS", "Supabase"],
    faqs: [
      {
        q: "Single-tenant or multi-tenant?",
        a: "It depends on your customers' isolation and compliance requirements and on your cost model. We make the decision explicit during architecture, with the trade-offs written down.",
      },
      {
        q: "Can you add billing to an existing product?",
        a: "Yes, though it is more involved than building it in. We start with an audit of the current data model to see what entitlement logic it can support.",
      },
      {
        q: "Do you help with the go-to-market side?",
        a: "We build the product surfaces that go-to-market depends on — onboarding, trials, plans, analytics. Marketing strategy itself is not our discipline.",
      },
    ],
    related: ["custom-software-development", "mobile-app-development", "product-engineering"],
  },

  "ai-development": {
    problem:
      "There is pressure to use AI, and no shortage of demonstrations. Far fewer of them survive contact with real users, real data and a real cost model.",
    challenges: [
      "Impressive prototypes that fail on the edge cases the business actually cares about",
      "No way to tell whether output quality is improving or regressing",
      "Inference costs that scale in a way nobody modelled",
      "Data scattered across systems the model cannot reach",
    ],
    approach: [
      "We start by asking whether the problem needs AI at all. Retrieval, rules or a well-designed form often solve it more reliably and more cheaply, and we will say so.",
      "Where AI is right, we build the unglamorous parts properly: the data pipeline, the retrieval layer, the evaluation harness and the guardrails. Those decide whether it works in production.",
      "Agents get explicit boundaries, fallback behaviour and human review points, so failure is contained rather than silent.",
    ],
    outcomes: [
      "AI behaviour tested against representative cases rather than curated demos alone",
      "Output quality measurable, so changes can be judged",
      "Inference cost modelled and monitored",
      "Clear boundaries on what the system is allowed to do unattended",
    ],
    technologies: ["OpenAI", "Anthropic", "Gemini", "LangChain", "Python", "TypeScript", "PostgreSQL", "pgvector"],
    faqs: [
      {
        q: "Will you tell us if AI is the wrong answer?",
        a: "Yes. We begin by comparing the proposed AI workflow with simpler retrieval, rules or conventional software approaches and document the trade-offs before selecting one.",
      },
      {
        q: "Can the model use our internal data?",
        a: "It may, when the data source, permissions and provider controls fit the use case. We map access and retrieval so the application does not grant a user broader access than the source system allows.",
      },
      {
        q: "How do you reduce harmful or incorrect outputs?",
        a: "No team can guarantee that a generative model will never be wrong. We test against agreed cases, constrain data and actions, provide fallback behaviour, and add human review where the consequence of an error is high.",
      },
    ],
    related: ["custom-software-development", "automation", "api-development"],
    proofProducts: ["ai-islam", "captionlab"],
  },

  automation: {
    problem:
      "Your team repeats the same work every week — moving data between systems, chasing approvals, producing the same report. It is expensive, it is error-prone, and it does not scale with headcount.",
    challenges: [
      "Work spread across tools that do not talk to each other",
      "Processes held together by one person who knows the steps",
      "Errors discovered downstream, long after they were introduced",
      "No measurement of what the manual work actually costs",
    ],
    approach: [
      "We map the process first and identify what is genuinely worth automating. Some steps exist because of a judgement call, and automating those makes things worse.",
      "Then we build the workflow across the tools you already use, with exception handling and human review at the points where judgement matters.",
      "We measure before and after, so the time recovered is a number rather than a claim.",
    ],
    outcomes: [
      "Repetitive work removed from the week",
      "Errors caught at the point of entry rather than downstream",
      "Process knowledge in a system rather than in one person's head",
      "Measured time recovered",
    ],
    technologies: ["n8n", "Python", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Webhooks", "AWS"],
    faqs: [
      {
        q: "Do we have to replace our current tools?",
        a: "No. Most automation work connects what you already run. Replacing tools is a separate decision with its own business case.",
      },
      {
        q: "What happens when an automated step fails?",
        a: "It surfaces to a human with the context needed to resolve it, rather than failing silently. Exception handling is part of the design, not an afterthought.",
      },
      {
        q: "How do you decide what to automate first?",
        a: "Frequency multiplied by time taken multiplied by error cost. The highest number goes first.",
      },
    ],
    related: ["ai-development", "crm-erp", "api-development"],
  },

  "crm-erp": {
    problem:
      "Your operating process does not fit the product you bought, so the team works around it. Reporting is assembled by hand and nobody fully trusts the numbers.",
    challenges: [
      "Standard products that need heavy customisation to fit the actual process",
      "Data entered twice because two systems disagree about what is true",
      "Reporting assembled manually at month end",
      "Migration risk from a system the business runs on today",
    ],
    approach: [
      "We model the process as it really works, then build the smallest system that supports it — or heavily tailor an existing platform where that is genuinely cheaper.",
      "Migration is rehearsed with a tested rollback before anything happens to live data.",
      "For integrations, we name the system of record for each business fact and build reconciliation and exception handling into the workflow.",
    ],
    outcomes: [
      "A named system of record for each core business fact",
      "Reconciliation and exception handling built into connected workflows",
      "Duplicate entry reduced where supported interfaces permit it",
      "A migration with a rehearsed path back",
    ],
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "React", "Next.js", "REST APIs", "Docker", "AWS"],
    faqs: [
      {
        q: "Should we customise an existing platform or build our own?",
        a: "It depends on how far your process diverges from the product's assumptions. We assess both and give you the total cost of ownership for each.",
      },
      {
        q: "How risky is migrating off our current system?",
        a: "Risk depends on the data, integrations and how much the business relies on the current system. We rehearse against a representative copy, verify agreed records and define a rollback or containment path before cutover.",
      },
      {
        q: "Can it integrate with our accounting or payroll software?",
        a: "It may be possible when the product provides a supported API, connector or export for the required workflow. We verify the available interface, permissions, limits and failure behaviour before including the integration in scope.",
      },
    ],
    related: ["enterprise-software", "automation", "custom-software-development"],
  },

  "web-development": {
    problem:
      "The site or application is slow, hard to change, or invisible to search — and each of those costs revenue in a way that is measurable.",
    challenges: [
      "Pages that fail Core Web Vitals and lose ranking and conversions",
      "Content changes that require a developer and a deploy",
      "Accessibility gaps that exclude users and create legal exposure",
      "A codebase where every change risks breaking something else",
    ],
    approach: [
      "We choose the rendering strategy against your actual needs — static, server-rendered or client — rather than applying one pattern everywhere.",
      "Performance and accessibility are verified before launch, not audited afterwards when fixing them is expensive.",
      "Where content changes frequently, we make it editable without a deploy.",
    ],
    outcomes: [
      "Core Web Vitals measured and met",
      "Content editable by the people who own it",
      "Accessible to users on any device or assistive technology",
      "A codebase that is safe to change",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Vercel", "AWS"],
    faqs: [
      {
        q: "Can you improve an existing site rather than rebuild it?",
        a: "Often, yes. We start with an audit of what is actually causing the problem. Rebuilds are sometimes the answer but rarely the first one.",
      },
      {
        q: "Will it be accessible?",
        a: "Yes. Semantic markup, keyboard navigation, contrast and screen reader support are part of the build, and reviewed before launch.",
      },
      {
        q: "Do you handle hosting?",
        a: "We set up hosting, deployment and monitoring in your accounts, and hand over the ability to run it.",
      },
    ],
    related: ["custom-software-development", "mobile-app-development", "ui-ux-design"],
  },

  "mobile-app-development": {
    problem:
      "A mobile product is not a website in an app shell. Store review, offline behaviour, device fragmentation and release cycles all shape what you can build and how fast you can change it.",
    challenges: [
      "Store review rejections discovered late in the timeline",
      "Behaviour that breaks on poor connectivity",
      "Release cycles slower than the pace the business wants to move at",
      "Native versus cross-platform decided by preference rather than roadmap",
    ],
    approach: [
      "We decide native or cross-platform against your roadmap, team and performance needs, and explain the trade-off rather than defaulting.",
      "We design for intermittent connectivity, background behaviour and permissions from the start, because retrofitting them is expensive.",
      "We take the product through store submission and release, and set up crash reporting so problems surface before reviews do.",
    ],
    outcomes: [
      "Apps live in the App Store and Google Play",
      "Predictable release process rather than an event each time",
      "Sensible behaviour on poor connections",
      "Crashes and regressions visible immediately",
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Swift", "Kotlin", "Firebase", "Node.js", "PostgreSQL"],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "Cross-platform suits most business applications and roughly halves the surface area to maintain. Native is right where you depend heavily on platform-specific capability or performance.",
      },
      {
        q: "Do you handle App Store and Play Store submission?",
        a: "Yes, including review requirements, release management and subsequent updates. We have products live in both stores.",
      },
      {
        q: "Can you take over an existing app?",
        a: "Yes, starting with a technical audit of the codebase, its dependencies and its release setup.",
      },
    ],
    related: ["web-development", "saas-development", "cloud-devops"],
    proofProducts: ["iqra", "safemama"],
  },

  "cloud-devops": {
    problem:
      "Deployments are manual and stressful, nobody is confident about what is running in production, and ownership across the cloud application stack is unclear.",
    challenges: [
      "Releases that require a person and a runbook",
      "Infrastructure configured by hand and impossible to reproduce",
      "Incidents discovered by customers rather than monitoring",
      "Cloud spend growing faster than usage",
    ],
    approach: [
      "We map ownership across the application stack first, then bring customer-controlled infrastructure into versioned configuration so environments are reproducible and changes are reviewable.",
      "Delivery is automated end to end, with verification before merge, so releasing becomes routine.",
      "We instrument for the questions you will actually ask at 2am, then right-size against real usage data.",
    ],
    outcomes: [
      "Releases that are routine rather than events",
      "Environments reproducible from source",
      "Monitoring designed to surface incidents without waiting for customer reports",
      "Cloud spend understood and controlled",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Grafana"],
    faqs: [
      {
        q: "Which cloud should we use?",
        a: "Usually the one your team already knows. Migration between providers rarely pays for itself unless a specific service or a commercial arrangement justifies it.",
      },
      {
        q: "Can you reduce our cloud bill?",
        a: "Sometimes, but the answer depends on measured usage and the existing estate. We begin with an audit of workload costs, resource lifecycle and capacity before recommending changes.",
      },
      {
        q: "Do we need Kubernetes?",
        a: "Probably not. It solves real problems at real scale and adds substantial operational cost below that. We will tell you which side of the line you are on.",
      },
    ],
    related: ["saas-development", "enterprise-software", "mobile-app-development"],
  },

  "api-development": {
    problem:
      "The interfaces between systems are where estimates go wrong and where production incidents start. They are also what partners and internal teams judge you on.",
    challenges: [
      "Undocumented interfaces that only one person understands",
      "Breaking changes discovered by consumers in production",
      "No rate limiting or abuse protection on public endpoints",
      "Integrations that fail in ways nobody planned for",
    ],
    approach: [
      "We design the contract first, with versioning and a deprecation policy agreed before anything is built, so consumers are never surprised.",
      "Authentication, rate limiting and abuse protection are part of the design rather than added after an incident.",
      "We test against real third-party behaviour, including their failure modes, not just the happy path in their documentation.",
    ],
    outcomes: [
      "Interfaces documented well enough to integrate without a call",
      "Changes shipped without breaking consumers",
      "Public endpoints protected against abuse",
      "Integrations that degrade predictably",
    ],
    technologies: ["Node.js", "TypeScript", "Python", "REST", "GraphQL", "OpenAPI", "PostgreSQL", "AWS"],
    faqs: [
      {
        q: "REST or GraphQL?",
        a: "REST for most cases; GraphQL where clients genuinely need to shape their own queries across a complex graph. The wrong choice adds cost on both sides.",
      },
      {
        q: "Can you document an API we already have?",
        a: "Yes. We map actual behaviour rather than intended behaviour — the two frequently differ — and publish documentation plus a working sandbox.",
      },
      {
        q: "How do you handle versioning?",
        a: "Explicit versions with an agreed deprecation window, so consumers have time to migrate.",
      },
    ],
    related: ["ai-development", "cloud-devops", "saas-development"],
  },

  "product-engineering": {
    problem:
      "The product needs to keep evolving, and project-shaped engagements keep stopping at the point where the real learning starts.",
    challenges: [
      "A roadmap driven by opinion rather than evidence",
      "Technical debt accumulating with no deliberate decision behind it",
      "Delivery slowing as the codebase grows",
      "No continuity of context between engagements",
    ],
    approach: [
      "A dedicated team with a named technical lead who holds context across quarters rather than restarting each time.",
      "The roadmap is maintained against evidence — usage data, support load, business goals — instead of whoever asked most recently.",
      "Architecture and cost are reviewed on a cadence, so debt is taken deliberately and repaid deliberately.",
    ],
    outcomes: [
      "Continuous delivery rather than start-stop projects",
      "Decisions grounded in usage data",
      "Technical debt managed rather than accumulated",
      "Institutional knowledge that persists",
    ],
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker", "AWS"],
    faqs: [
      {
        q: "How is this different from a fixed-scope project?",
        a: "Fixed scope suits well-defined work unlikely to change. Product development changes constantly, and fixed-price contracts make the necessary changes expensive and adversarial.",
      },
      {
        q: "Can we scale the team up and down?",
        a: "Yes, with notice, so we can plan continuity of context rather than losing it.",
      },
      {
        q: "Do you work with our in-house engineers?",
        a: "Frequently. We embed alongside them, or provide the architecture and review layer over their work.",
      },
    ],
    related: ["ai-development", "technical-consulting", "mvp-development"],
    proofProducts: ["nutrinudge", "iqra"],
  },

  "mvp-development": {
    problem:
      "You need to find out whether the market wants this before spending a year and a budget finding out that it does not.",
    challenges: [
      "Scope expanding until the MVP is no longer minimum",
      "Building for scale nobody has yet needed",
      "No instrumentation, so launch answers nothing",
      "Investor pressure to show features rather than evidence",
    ],
    approach: [
      "We write down the hypothesis before anything is built. If a feature does not help test it, it is out of scope — and we will push back on that.",
      "We build the smallest thing that puts the question in front of real users, on an architecture that will not have to be thrown away if the answer is yes.",
      "Instrumentation is built in, so launch produces an answer rather than an opinion.",
    ],
    outcomes: [
      "A specific market question answered with evidence",
      "Money spent on learning rather than on features",
      "A foundation that survives if the answer is yes",
      "Data you can take to investors",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Firebase", "Vercel"],
    faqs: [
      {
        q: "How minimum is minimum?",
        a: "Enough to answer the question honestly and nothing more. We will argue for cutting features, and we will explain why each time.",
      },
      {
        q: "Will we have to rebuild it later?",
        a: "Not if it works. We keep the architecture simple but sound, so success means extending rather than starting again.",
      },
      {
        q: "Can you help decide what to test first?",
        a: "Yes. That conversation is usually the most valuable part of discovery.",
      },
    ],
    related: ["saas-development", "mobile-app-development", "product-engineering"],
  },

  "digital-transformation": {
    problem:
      "Systems the business depends on have outlived their architecture. Everyone knows they need replacing, and nobody can afford the outage that replacing them seems to require.",
    challenges: [
      "A system nobody fully understands but everybody relies on",
      "Knowledge held by a small number of people",
      "Every change carrying disproportionate risk",
      "Rising running costs with no clear route off",
    ],
    approach: [
      "We audit the estate first: what it does, what it costs, where the risk concentrates, and what would actually break.",
      "Then we sequence the migration so capability moves across in stages while the business keeps operating, with a rollback at each step.",
      "We enable your team as we go, so the change holds after we leave rather than creating a new dependency.",
    ],
    outcomes: [
      "Modernisation without an outage the business cannot absorb",
      "Risk reduced in stages rather than all at once",
      "Running costs brought down",
      "Knowledge distributed across the team",
    ],
    technologies: ["TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Azure"],
    faqs: [
      {
        q: "Do we have to replace everything at once?",
        a: "No, and you should not. Big-bang rewrites of business-critical systems have a poor record. We retire the old system gradually.",
      },
      {
        q: "What if nobody understands the current system?",
        a: "That is common and it is where we start. The audit reconstructs actual behaviour from the code, the data and the people who use it.",
      },
      {
        q: "How do you avoid disrupting operations?",
        a: "Incremental migration, rehearsed cutovers, rollback paths, and running old and new in parallel until confidence is earned.",
      },
    ],
    related: ["custom-software-development", "crm-erp", "technical-consulting"],
  },

  "technical-consulting": {
    problem:
      "A decision is about to be made that is expensive to reverse, and the people making it are the same people who proposed it.",
    challenges: [
      "Technology chosen for reasons that were never written down",
      "Due diligence needed on a system before an acquisition or investment",
      "Internal disagreement with no neutral party to resolve it",
      "Architecture decisions with no clear owner",
    ],
    approach: [
      "We assess against your stated goals and constraints, not against fashion, and we write down the reasoning so it can be challenged.",
      "Where we review code or architecture, we quantify risk rather than listing preferences.",
      "We give a recommendation, including when the recommendation is to change nothing.",
    ],
    outcomes: [
      "Decisions documented with their trade-offs",
      "Risk identified before it becomes expensive",
      "A neutral view when internal opinion is split",
      "Total cost of ownership modelled, not guessed",
    ],
    technologies: ["Architecture review", "Technical due diligence", "Cost modelling", "Security review", "Team assessment"],
    faqs: [
      {
        q: "Will you recommend we hire you to do the work?",
        a: "Only if we are genuinely the right team. A consulting engagement that exists to sell a build is worth nothing to you, and we would rather keep the relationship.",
      },
      {
        q: "Can you do technical due diligence for an acquisition?",
        a: "Yes — codebase quality, architecture risk, key-person dependency, security posture and the real cost of ownership.",
      },
      {
        q: "How long does a review take?",
        a: "It depends on the size of the estate. We scope it after an initial conversation and give you a fixed price.",
      },
    ],
    related: ["digital-transformation", "cloud-devops", "mvp-development"],
  },

  // ---------------------------------------------------------------- creative
  "ui-ux-design": {
    problem:
      "People are not using the thing you built, or they are using it wrongly, and nobody can say precisely why.",
    challenges: [
      "Interfaces designed around the data model rather than the task",
      "Complexity concentrated exactly where users are least expert",
      "Edge cases — empty, error, loading, permissions — designed last or not at all",
      "Design handed over as images engineering has to interpret",
    ],
    approach: [
      "We map the journeys before designing screens, because the hard part is usually the sequence rather than the layout.",
      "We prototype the interactions that cannot be judged from a static mockup, and we design the states that go wrong.",
      "Engineering receives a component system, not a folder of files.",
    ],
    outcomes: [
      "Fewer support requests about how the product works",
      "Faster completion of the tasks that matter",
      "A consistent product as it grows",
      "A shared design language between design and engineering",
    ],
    technologies: ["Figma", "Design systems", "Prototyping", "User research", "WCAG accessibility"],
    faqs: [
      {
        q: "Can you design without building?",
        a: "Yes. Design and research are available standalone — they are simply more effective when the people designing and building sit in the same team.",
      },
      {
        q: "Do you do user research?",
        a: "Yes, and we would rather do a little of it early than a lot of redesign later.",
      },
      {
        q: "Will the design survive engineering?",
        a: "We hand over a component library with states and behaviour specified, which is what usually gets lost in translation.",
      },
    ],
    related: ["web-development", "mobile-app-development", "branding"],
    proofProducts: ["opaline", "safemama"],
  },

  branding: {
    problem:
      "The company looks different in every place a customer meets it, and none of those places look like the business you are actually building.",
    challenges: [
      "A logo but no system, so every new asset is a fresh decision",
      "Inconsistency across product, marketing and sales material",
      "Visual language that does not match the market being sold to",
      "No rules, so quality depends on who made the file",
    ],
    approach: [
      "We build a system rather than an artefact: marks, palette, type and the rules that keep them coherent.",
      "Accessibility is checked as part of colour and type selection, not audited afterwards.",
      "Guidelines are written so people who were not in the room can apply them correctly.",
    ],
    outcomes: [
      "One coherent identity across every surface",
      "Assets producible without a designer for routine work",
      "Accessible colour and type by default",
      "A system that scales with the company",
    ],
    technologies: ["Brand strategy", "Identity design", "Design systems", "Typography", "Guidelines"],
    faqs: [
      {
        q: "Do we need a full rebrand?",
        a: "Often not. Frequently the mark is fine and what is missing is the system around it. We will tell you which situation you are in.",
      },
      {
        q: "Do we get source files?",
        a: "Yes, in editable formats, along with the guidelines.",
      },
      {
        q: "Can you apply the brand to our product?",
        a: "Yes — that is the advantage of the design and engineering teams being the same team.",
      },
    ],
    related: ["ui-ux-design", "graphic-design", "3d-design"],
  },

  "graphic-design": {
    problem:
      "Every document, deck and campaign asset is made from scratch, so quality varies and production is slow.",
    challenges: [
      "No templates, so each asset restarts from nothing",
      "Inconsistent output across teams",
      "Design becoming a bottleneck for routine work",
      "Source files scattered and unversioned",
    ],
    approach: [
      "We build templates for the things you produce repeatedly, so routine work stops needing a designer.",
      "Everything is derived from the brand system, so consistency is structural rather than policed.",
      "Assets are organised and handed over in editable formats.",
    ],
    outcomes: [
      "Routine assets produced without design involvement",
      "Consistent output across teams",
      "Faster campaign turnaround",
      "An organised, reusable asset library",
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Template systems", "Print production"],
    faqs: [
      {
        q: "Can your templates be used by non-designers?",
        a: "That is the point of them. We constrain what can change so the result stays on-brand.",
      },
      {
        q: "Do you handle print production?",
        a: "Yes, including the specifications printers require.",
      },
      {
        q: "Can you work to our existing brand?",
        a: "Yes. If guidelines exist we follow them; if they do not, we can build them.",
      },
    ],
    related: ["branding", "marketing-assets", "presentation-design"],
  },

  "motion-video": {
    problem:
      "Something about the product is hard to explain in a static image, and explaining it in text loses people before the point lands.",
    challenges: [
      "Product value that only becomes obvious in motion",
      "Interface animation specified vaguely and implemented inconsistently",
      "Assets needed in different formats for every platform",
      "Motion added as decoration rather than to aid comprehension",
    ],
    approach: [
      "We storyboard before producing, because the expensive mistakes happen in animation rather than in planning.",
      "Interface motion is specified so engineering can implement it exactly rather than approximate it.",
      "Assets are exported per platform, sized correctly for each placement.",
    ],
    outcomes: [
      "Complex ideas understood quickly",
      "Interface motion that is consistent and implementable",
      "Correctly formatted assets for each channel",
      "Editable source files retained",
    ],
    technologies: ["After Effects", "Lottie", "Figma", "Rive", "Motion specification"],
    faqs: [
      {
        q: "Can you animate our existing interface?",
        a: "Yes, and we deliver the specification engineering needs rather than a video they have to guess from.",
      },
      {
        q: "Do you provide Lottie files?",
        a: "Yes, where web or app implementation calls for them.",
      },
      {
        q: "How long does a product animation take?",
        a: "It depends on length and complexity. We scope after seeing the product and agreeing the story.",
      },
    ],
    related: ["video-production", "3d-design", "ui-ux-design"],
  },

  "video-production": {
    problem:
      "The most persuasive thing about your business is hard to convey in writing, and nobody reads far enough to reach it anyway.",
    challenges: [
      "No footage of the work actually being done",
      "Video produced without a clear argument",
      "Content that cannot be reused across channels",
      "Long-form output when the audience watches thirty seconds",
    ],
    approach: [
      "We agree the argument before filming. A video without a point is expensive noise.",
      "We plan for reuse, so one production yields assets for several channels and lengths.",
      "Edit, grade, sound and captions are all part of delivery — captions especially, since most feed viewing is muted.",
    ],
    outcomes: [
      "A clear argument delivered in the medium people actually watch",
      "Multiple assets from one production",
      "Accessible, captioned output",
      "Source material retained for future edits",
    ],
    technologies: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Audio post", "Captioning"],
    faqs: [
      {
        q: "Do you film, or only edit?",
        a: "Both. We can also work entirely from screen recordings and existing assets where filming is not practical.",
      },
      {
        q: "Can you produce case study videos?",
        a: "Yes — they are among the highest-converting assets a services business can have.",
      },
      {
        q: "What formats do we receive?",
        a: "Exports sized for each platform and placement, plus the source project.",
      },
    ],
    related: ["motion-video", "3d-design", "social-media-design"],
  },

  "3d-design": {
    problem:
      "You need to show a product that cannot be photographed — because it does not exist yet, cannot be shot practically, or needs to be seen from angles reality will not allow.",
    challenges: [
      "Products still in development but needing marketing material",
      "Photography that cannot show internal or cutaway views",
      "Configurations too numerous to photograph individually",
      "Real-time 3D needed on the web without destroying performance",
    ],
    approach: [
      "We model, texture and light to the level the output actually requires, rather than over-building detail nobody will see.",
      "Where the web or an app is the destination, assets are optimised for real-time rendering and a performance budget.",
      "Source scenes are handed over so variants can be produced later.",
    ],
    outcomes: [
      "Product imagery before the product physically exists",
      "Views photography cannot achieve",
      "Configurations rendered without a photoshoot each time",
      "Real-time assets that respect a performance budget",
    ],
    technologies: ["Blender", "Cinema 4D", "Three.js", "WebGL", "Substance"],
    faqs: [
      {
        q: "Can 3D go on our website?",
        a: "Yes, with an explicit performance budget. Real-time 3D is easy to do badly and expensive in load time when it is.",
      },
      {
        q: "What do you need from us?",
        a: "CAD files if they exist; otherwise dimensioned drawings, reference photography and material specifications.",
      },
      {
        q: "Do we get the source files?",
        a: "Yes, along with the exported formats.",
      },
    ],
    related: ["motion-video", "graphic-design", "web-development"],
  },

  "social-media-design": {
    problem:
      "Social output has to be constant, and consistency collapses under that pace unless the system does the work.",
    challenges: [
      "Every post designed from scratch",
      "Formats and safe areas differing per platform",
      "Brand drifting as volume increases",
      "Design becoming the bottleneck for publishing",
    ],
    approach: [
      "We build a template system per platform and format, constrained so the brand holds no matter who produces the post.",
      "Motion variants are included where placements reward them.",
      "The system is handed over so the team can publish without design support.",
    ],
    outcomes: [
      "Consistent output at publishing pace",
      "Correct sizing and safe areas per platform",
      "Design removed from the critical path",
      "Brand integrity maintained at volume",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Template systems", "Motion templates"],
    faqs: [
      {
        q: "Do you manage our social accounts?",
        a: "No. We build the design system; publishing and strategy stay with you or your agency.",
      },
      {
        q: "Can non-designers use the templates?",
        a: "Yes, that is what they are for.",
      },
      {
        q: "Do you include video formats?",
        a: "Yes, where the placements you use call for them.",
      },
    ],
    related: ["motion-video", "marketing-assets", "video-production"],
  },

  "marketing-assets": {
    problem:
      "Traffic arrives and does not convert, and the design of what it lands on is a large part of why.",
    challenges: [
      "Landing pages designed to look good rather than to convert",
      "Ad creative resized rather than designed per placement",
      "Sales collateral that does not match the product",
      "No templates, so every campaign restarts",
    ],
    approach: [
      "Landing pages are designed around a single action, with everything that does not support it removed.",
      "Ad creative is designed per placement rather than scaled from one master.",
      "Templates are handed over so campaigns can run without design becoming the constraint.",
    ],
    outcomes: [
      "Landing pages built around one clear action",
      "Creative appropriate to each channel",
      "Sales material consistent with the product",
      "Campaigns that can run without design support",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Landing page design", "Conversion design"],
    faqs: [
      {
        q: "Do you build the landing pages as well as design them?",
        a: "Yes — engineering and design are the same team, so there is no handover gap.",
      },
      {
        q: "Can you work with our media agency?",
        a: "Yes. We produce to their specifications and placements.",
      },
      {
        q: "Do you run A/B tests?",
        a: "We build pages so variants can be tested, and instrument them. Running the programme is usually better owned by your marketing team.",
      },
    ],
    related: ["graphic-design", "social-media-design", "presentation-design"],
  },

  "presentation-design": {
    problem:
      "The argument is sound and the deck is burying it. Investors and buyers are deciding on clarity as much as on substance.",
    challenges: [
      "Slides carrying paragraphs instead of a point",
      "Data presented in a way that hides the conclusion",
      "Inconsistent decks across the company",
      "Every new deck rebuilt from the last one",
    ],
    approach: [
      "We agree the narrative before designing a slide. Most deck problems are structural, not visual.",
      "Data is visualised so the conclusion is visible rather than derivable.",
      "A master template is handed over so future decks start from a system.",
    ],
    outcomes: [
      "An argument that lands in the room",
      "Data that shows its conclusion",
      "Consistent decks across the company",
      "A reusable template",
    ],
    technologies: ["Figma", "Keynote", "PowerPoint", "Google Slides", "Data visualisation"],
    faqs: [
      {
        q: "Can you help with the narrative, not just the design?",
        a: "Yes, and it is usually where the value is. A beautifully designed weak argument is still a weak argument.",
      },
      {
        q: "Which format do we receive?",
        a: "Whichever you present in — Keynote, PowerPoint or Google Slides — as an editable master.",
      },
      {
        q: "Do you do investor decks?",
        a: "Yes. We will not invent numbers, so bring your real figures.",
      },
    ],
    related: ["branding", "motion-video", "video-production"],
  },
};
