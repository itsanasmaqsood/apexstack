import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "ai-product-development-agency",
  title: "How to Choose an AI Product Development Agency",
  seoTitle: "AI Product Development Agency: Buyer Checklist",
  description:
    "Compare AI product development agencies by evaluation evidence, data controls, production ownership, operating costs and handover—not demos.",
  excerpt:
    "A buyer's checklist for testing whether an AI product partner can move from a promising model demo to an evaluated, operable product your team can own.",
  category: "Choosing a Partner",
  primaryKeyword: "ai product development agency",
  secondaryKeywords: [
    "ai product development services",
    "ai product engineering partner",
    "llm product development",
    "ai agency evaluation checklist",
  ],
  published: "2026-07-28",
  updated: "2026-08-22",
  authorId: "leadership-01",
  serviceSlug: "ai-development",
  keyTakeaway:
    "Choose an AI product development agency by the evidence it can produce for your workflow: a representative evaluation set, measured quality and failure modes, documented data handling, cost and latency observations, human review boundaries, production monitoring and a usable handover. A polished model demo or a list of framework names does not show that the resulting product will behave acceptably on your users' data.",
  sections: [
    {
      heading: "What should an AI product development agency actually own?",
      blocks: [
        {
          type: "p",
          text: "An AI product agency should connect model behaviour to a complete user and business workflow. The work normally includes defining the task, preparing representative test cases, choosing and integrating models, designing the surrounding product, connecting authorised data, measuring output, containing failure, deploying the application and making it operable after launch.",
        },
        {
          type: "p",
          text: "That does not mean one supplier must perform every activity. Your internal team may own the product, data platform, security review or cloud account. The scope should name each boundary and acceptance artefact so evaluation, application engineering and operations do not fall between separate teams.",
        },
        {
          type: "callout",
          text: "Ask the agency to demonstrate how one important user action travels from input and authorised context through model output, product response, review, logging and recovery. That thin slice reveals more than a broad feature list.",
        },
      ],
    },
    {
      heading: "What evaluation evidence should you request?",
      blocks: [
        {
          type: "p",
          text: "Model quality is specific to the task and the data it will encounter. Before comparing model names or architecture diagrams, agree what acceptable behaviour means for representative cases, important edge cases and failures that require human review or a safe fallback.",
        },
        {
          type: "table",
          caption: "AI product evaluation evidence",
          head: ["Evidence", "What it should answer", "Warning sign"],
          rows: [
            [
              "Evaluation set",
              "Does it represent real inputs, edge cases and unacceptable outcomes?",
              "Only hand-picked demonstration prompts",
            ],
            [
              "Scoring method",
              "Which outcomes are checked automatically and which require informed human judgement?",
              "One unexplained accuracy percentage",
            ],
            [
              "Baseline",
              "Is the proposed system better than the current process, a simpler rule or a smaller model?",
              "No comparison with a non-AI alternative",
            ],
            [
              "Failure analysis",
              "Which errors occur, how serious are they and what happens to the user next?",
              "Failures discussed only as hallucinations",
            ],
            [
              "Regression gate",
              "What must pass when a prompt, model, retrieval source or tool changes?",
              "Production changes made from informal spot checks",
            ],
            [
              "Traceability",
              "Can an authorised operator connect an output to the application version, model configuration and source context?",
              "Logs with no version or request correlation",
            ],
          ],
        },
        {
          type: "p",
          text: "The evaluation set is a maintained product asset, not a one-off presentation. The scope should say who owns it, who can approve a change to acceptance thresholds and how production feedback becomes a reviewed test case without silently teaching the system from every user interaction.",
        },
      ],
    },
    {
      heading: "How should the agency handle data and model-provider controls?",
      blocks: [
        {
          type: "p",
          text: "Begin with a data-flow map. It should show what enters the product, what context is retrieved, which provider or model receives it, what is stored, how long it is retained and which identities can read or change each part. Provider controls vary by product, endpoint, account configuration and region, so current terms and settings must be verified for the chosen deployment rather than copied from a generic policy summary.",
        },
        {
          type: "list",
          items: [
            "Classify personal, confidential, regulated and customer-controlled data before it reaches a prompt or retrieval index",
            "Use separate non-human identities and least-privilege access for application, retrieval and operational work",
            "Keep secrets outside prompts, source code and unrestricted traces",
            "Apply the user's existing document and record permissions when retrieving context",
            "Define retention, deletion and redaction rules for prompts, outputs, feedback and evaluation examples",
            "Test instructions embedded in retrieved or uploaded content as untrusted input rather than authority",
            "Record the human approval boundary before the system takes a consequential external action",
          ],
        },
        {
          type: "p",
          text: "Do not accept 'we anonymise the data' as a complete answer. Ask which fields are removed or transformed, where that happens, what can still be inferred, whether the original is retained and how the transformed output is tested for the product task.",
        },
      ],
    },
    {
      heading: "Does a model-agnostic architecture remove vendor lock-in?",
      blocks: [
        {
          type: "p",
          text: "A clean model interface can reduce coupling, but it does not make providers interchangeable. Models differ in instruction following, tool use, structured output, context handling, safety behaviour, latency, price and regional availability. Prompts and evaluation thresholds tuned for one model may regress when another is substituted.",
        },
        {
          type: "p",
          text: "Ask for portability at the parts that can genuinely be portable: application-owned interfaces, versioned prompts, model configuration outside business logic, provider-specific adapters and an evaluation suite that can compare candidates on the same cases. A provider change should be treated as a measured product change, not a configuration toggle assumed to be safe.",
        },
        {
          type: "list",
          items: [
            "Which provider-specific APIs, tools, file stores or safety features does the design depend on?",
            "Which application behaviours are tested independently of the model?",
            "Can the team run the same evaluation and cost sample against a second candidate?",
            "Who approves a model change, and what production fallback exists if the new version regresses?",
          ],
        },
      ],
    },
    {
      heading: "What production evidence should exist before launch?",
      blocks: [
        {
          type: "p",
          text: "A production-ready claim should be supported by inspectable evidence from the actual product boundary. The exact depth depends on the risk of the workflow, but a buyer should be able to see how the system was tested, released, observed and recovered—not merely that it returned a good answer during a demonstration.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "A versioned architecture and data-flow diagram with named ownership boundaries",
            "Evaluation results for representative, edge and unacceptable cases, including known limitations",
            "A redacted trace connecting one user request to retrieved context, model configuration, tool calls and product response",
            "Observed latency and model usage for a representative workload, with the assumptions behind any cost estimate",
            "Load, timeout, rate-limit and dependency-failure behaviour for the complete workflow",
            "Monitoring and alert ownership for product errors, quality signals, latency, usage and spend",
            "Fallback and human-review behaviour tested for high-consequence or uncertain outputs",
            "A release record with regression checks, rollback or containment steps and an operator runbook",
            "A handover pack covering repositories, prompts, evaluations, configurations, accounts, documentation and supplier-access removal",
          ],
        },
        {
          type: "p",
          text: "Cost should be measured at workflow level. Model tokens may be one component alongside retrieval, search, storage, document processing, observability, background jobs and human review. Ask for the assumptions and a way to observe actual usage rather than a fixed savings or scale claim.",
        },
      ],
    },
    {
      heading: "How do you compare AI product development agencies?",
      blocks: [
        {
          type: "table",
          caption: "AI agency comparison checklist",
          head: ["Area", "Question to ask", "Useful evidence"],
          rows: [
            [
              "Product judgement",
              "What is the smallest workflow that can test the product assumption honestly?",
              "Prioritised scope with explicit exclusions and success criteria",
            ],
            [
              "Evaluation",
              "How will we know the AI behaviour is acceptable on our data?",
              "Representative cases, scoring rubric, baseline and regression gate",
            ],
            [
              "Data controls",
              "What data reaches which system, under which identity and retention rule?",
              "Data-flow map, access matrix and current provider-control review",
            ],
            [
              "Full-stack delivery",
              "Who owns the interface, application logic, integrations, deployment and operation?",
              "Responsibility matrix and end-to-end thin slice",
            ],
            [
              "Reliability",
              "What does the product do when the model, retrieval source or tool fails?",
              "Failure tests, fallback states, alerts and recovery runbook",
            ],
            [
              "Economics",
              "Which assumptions drive cost and latency per completed workflow?",
              "Representative measurement with observable production counters",
            ],
            [
              "Handover",
              "Can our team operate and change this without the agency?",
              "Owned accounts, repository access, evaluations, runbooks and access-removal plan",
            ],
          ],
        },
        {
          type: "p",
          text: "Give shortlisted teams the same narrow workflow and ask for the same evidence. This makes exclusions and judgement visible. Comparing framework lists, model partnerships or an agency's own unverified success statistics does not answer whether it can build your product responsibly.",
        },
      ],
    },
    {
      heading: "Can an AI agency work with an in-house engineering team?",
      blocks: [
        {
          type: "p",
          text: "Yes, when the boundary is explicit. An external team might own an evaluation harness and one AI workflow while the internal team owns identity, product UI, data infrastructure or deployment. Define repositories, review authority, environments, release responsibility, incident ownership and the artefacts transferred at each stage.",
        },
        {
          type: "p",
          text: "Avoid a separate AI black box that only the supplier can change. Prompts, evaluation cases, provider configuration and tool contracts are production assets and should follow the same ownership, review and change practices as the rest of the application.",
        },
      ],
    },
    {
      heading: "What can a US$1,000 starting engagement cover?",
      blocks: [
        {
          type: "p",
          text: "At ApexStack, an engagement can start at US$1,000 when the first outcome is tightly constrained. For an AI product, that may suit one workflow definition, an evaluation-plan workshop, a feasibility test against a small approved sample or a technical review of an existing prototype. It is not a blanket price for a complete production AI MVP.",
        },
        {
          type: "p",
          text: "A useful first phase should reduce a named uncertainty and leave an inspectable artefact: test cases, measured results, a data-flow map, an architecture decision or a prioritised risk list. Authentication, billing, production interfaces, complex retrieval, several integrations, regulated data, mobile applications, administration and ongoing operation can materially expand the quote.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What makes an AI product development agency different from a regular software agency?",
      answer:
        "The relevant difference is demonstrated capability, not the label. An AI product partner should combine normal product engineering with task-specific evaluation, model and data controls, failure handling and production observation. A regular software team can be the right choice if it can produce that evidence and own the complete workflow.",
    },
    {
      question: "How should an AI agency handle data privacy and security?",
      answer:
        "It should map the data flow, classify sensitive inputs, verify current provider controls for the chosen account and endpoint, preserve source permissions during retrieval, use least-privilege identities, limit logging and retention, and document deletion and incident responsibilities. The exact controls depend on the data, jurisdiction and product risk.",
    },
    {
      question: "Should an AI product use one model provider or several?",
      answer:
        "Use the smallest arrangement that meets the measured task requirements. More providers can add resilience or specialist capability, but they also add evaluation, data-governance, operational and cost complexity. Preserve a clean boundary and evaluation suite even when one provider is the sensible starting point.",
    },
    {
      question: "How do I estimate the cost of an AI product?",
      answer:
        "Define the workflow and measure representative usage. Include model input and output, retrieval, document processing, storage, search, background work, monitoring, human review and the surrounding application. A model price table alone cannot estimate the complete product or its build cost.",
    },
    {
      question: "What should we own when the engagement ends?",
      answer:
        "The contract should name the repositories, application code, prompts, evaluation data and results, provider and cloud accounts, deployment configuration, documentation, runbooks and design assets you will receive. It should also define licence exceptions and how supplier access is removed or transferred.",
    },
  ],
  related: [
    "ai-product-development-process",
    "how-to-evaluate-an-llm-feature",
    "shipping-ai-features-to-production",
  ],
};
