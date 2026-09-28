import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "ai-product-development-process",
  title: "AI Product Development: From Demo to Dependable",
  seoTitle: "AI Product Development Process: Demo to Release",
  description:
    "A practical AI product development process: choose one user task, test it on representative data, set review boundaries and release with evidence.",
  excerpt:
    "How to turn a promising AI demo into one testable product workflow, with data permissions, user controls and a clear release decision.",
  category: "AI Engineering",
  primaryKeyword: "AI product development process",
  secondaryKeywords: [
    "how to build an AI product",
    "AI feasibility study before development",
    "AI MVP development",
    "data readiness for AI projects",
    "designing UX for AI uncertainty",
  ],
  published: "2026-08-12",
  updated: "2026-09-28",
  authorId: "leadership-03",
  serviceSlug: "ai-development",
  conversion: {
    heading: "How can ApexStack plan your first AI product workflow?",
    description:
      "Send the user task, a few representative inputs, the systems involved and the action a person must approve. ApexStack can turn that into a bounded Product Blueprint with a data and evaluation plan before quoting implementation. If one release is ready to build, a Launch Sprint can cover planning, UX direction, implementation, testing and deployment. Product Blueprint engagements start from US$1,000 for planning and de-risking; Launch Sprint engagements start from US$2,500 for one tightly scoped first release or core workflow. Authentication, billing, mobile apps, advanced AI, multiple integrations, data migration, compliance and extensive administration can raise the quote.",
    primaryLabel: "Discuss your first AI workflow",
  },
  keyTakeaway:
    "Start AI product development with one user task, not a general-purpose demo. Define the current workflow, the information the feature may use, the output a user needs and the cost of a wrong result. Test representative cases against the current process before committing to a release. Then build the smallest end-to-end path with permission checks, review and recovery, and measure the complete task after launch. A fixed price or timeline cannot be inferred from the phrase ‘AI product’ alone.",
  sections: [
    {
      heading: "Which AI product task should be tested first?",
      blocks: [
        {
          type: "p",
          text: "Choose a task already performed by a named user. Write down its trigger, input, decision and finished state, then ask where assistance would change the result. A support operator reviewing a draft reply is a different product from an assistant authorised to send one. The first option lets the operator correct mistakes before they reach a customer; the second needs a stronger evidence and approval boundary.",
        },
        {
          type: "table",
          caption: "A hypothetical support-workflow scope card, not an ApexStack client result.",
          head: ["Decision", "First-release boundary", "Evidence to collect"],
          rows: [
            ["User task", "Suggest a reply inside the existing ticket screen", "Compare task completion with the current manual process"],
            ["Context", "Current ticket and permitted knowledge articles", "Test missing, stale and access-denied material"],
            ["Output", "Editable draft with inspectable source passages", "Reviewers can find and correct unsupported statements"],
            ["Authority", "Operator decides whether to send", "No model-only external message is possible"],
            ["Failure path", "Return control to the normal ticket workflow", "The operator can complete the task when AI is unavailable"],
          ],
        },
        {
          type: "p",
          text: "The scope card is useful because it makes the proposed release inspectable. A founder can use the same card to compare a hosted model, a simpler rules-based workflow and a manual improvement before deciding which technology to buy.",
        },
      ],
    },
    {
      heading: "What should a feasibility test prove before a build plan?",
      blocks: [
        {
          type: "p",
          text: "A feasibility test should answer whether a candidate approach improves this task under the buyer's actual conditions. Gather representative inputs, difficult exceptions and expected outcomes; choose the sample size from the task's variation and risk rather than a universal quota. Run the current manual or scripted process on the same cases. OpenAI's evaluation guidance recommends task-specific datasets, human expert labels where needed and repeated tests after system changes.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Write acceptance criteria for the whole task, including what counts as a useful result and what must never happen.",
            "Include routine inputs, ambiguous cases, missing information, permission failures and examples from different user groups.",
            "Record review time and correction effort as well as output quality. A draft that takes longer to check than to write may not improve the workflow.",
            "Decide whether to proceed, narrow the task, try a simpler implementation or stop. A failed feasibility test is a decision, not a production promise.",
          ],
        },
        {
          type: "callout",
          text: "Do not turn a successful curated demo into an accuracy claim about production users. Keep the test cases, criteria and limitations alongside the decision they support.",
        },
      ],
    },
    {
      heading: "Which data and permission questions come before model choice?",
      blocks: [
        {
          type: "p",
          text: "List the records, documents and tools the proposed feature needs. For each source, name its owner, update path and access rule. If one document has been superseded or a user cannot see another customer's record, the retrieval layer must respect those facts before the model drafts an answer. A prompt cannot substitute for application-side authorisation.",
        },
        {
          type: "p",
          text: "NIST's AI Risk Management Framework calls for mapping the use context and measuring performance in that context. For a product team, this means testing on data the feature is actually allowed to use and documenting how missing, conflicting or outdated sources affect the result. If the authoritative source is unclear, resolve ownership before treating model output as a business fact.",
        },
      ],
    },
    {
      heading: "How should the interface handle a wrong or unavailable result?",
      blocks: [
        {
          type: "p",
          text: "Place the suggestion where the user already completes the task. Show the source material when it matters, make the proposed action visible and provide a direct way to edit, reject or continue manually. Do not display a numerical confidence score unless it has been calibrated for the task and users can act on it. A polished answer with no inspection path is harder to trust than an editable draft with clear limits.",
        },
        {
          type: "p",
          text: "Keep consequential writes behind product controls. The application should identify who approved a change, what was changed and how to reverse it where reversal is possible. NIST's Measure playbook explicitly calls for documenting human oversight, exceptions and go/no-go decisions; those controls belong in the operating workflow, not only in a policy document.",
        },
      ],
    },
    {
      heading: "What should each release stage decide?",
      blocks: [
        {
          type: "p",
          text: "A phase is valuable when it ends with evidence and a decision. The stages below describe work, not a promised duration. Some can overlap; the order of dependencies matters more than a calendar template.",
        },
        {
          type: "table",
          caption: "AI product stages and the decision each should support.",
          head: ["Stage", "Evidence", "Decision"],
          rows: [
            ["Task and data boundary", "User journey, source owners, permissions and failure consequences", "Is this the right first task?"],
            ["Feasibility comparison", "Representative cases, baseline, candidate outputs and review effort", "Build, narrow, change approach or stop?"],
            ["End-to-end slice", "One real integration, user controls and tested recovery path", "Does the complete workflow work in its intended environment?"],
            ["Assisted release", "Observed corrections, missed cases, usage and operating cost", "Keep, revise or expand the bounded release?"],
            ["Scope expansion", "Evidence for another user, action or data source", "Does the added capability justify its risk and cost?"],
          ],
        },
        {
          type: "p",
          text: "Bring integration and permission tests into the end-to-end slice. A demo using a static export does not establish that the product can read live records under real user permissions. If access is not available yet, state that dependency in the plan instead of presenting the slice as production-ready.",
        },
      ],
    },
    {
      heading: "How should a founder budget the AI product development process?",
      blocks: [
        {
          type: "p",
          text: "Ask suppliers to separate planning, data preparation, integration, interface work, evaluation, deployment and ongoing operation. Compare quotes against the same user task and acceptance evidence. A broad market price table would hide the differences between an internal draft assistant, a customer-facing feature and a multi-system product; there is no verified universal range for this page to publish.",
        },
        {
          type: "p",
          text: "ApexStack's Product Blueprint starts from US$1,000 for one bounded planning and de-risking question, such as defining the first workflow or its evaluation plan. It is not a production-ready AI product. A Launch Sprint starts from US$2,500 and can cover planning, UX direction, implementation, testing and deployment of one tightly scoped first release or core workflow. Authentication, billing, mobile apps, advanced AI, multiple integrations, data migration, compliance and extensive administration can raise the quote. The written scope should state inclusions, exclusions and approval points before implementation begins.",
        },
      ],
    },
    {
      heading: "What should be measured after the first release?",
      blocks: [
        {
          type: "p",
          text: "Measure the complete task rather than only a model response. Keep representative test cases and rerun them when the prompt, model, retrieval source or tool permissions change. In production, inspect correction patterns, abandoned tasks, provider failures, review time and cost per completed task where those observations are available. OpenAI's evaluation guidance supports continuous evaluation; it does not supply a pass mark for every product.",
        },
        {
          type: "p",
          text: "Give one team member responsibility for reviewing failures and deciding whether the scope should change. If the first release is a draft assistant, do not silently turn it into an unattended sender because a few examples looked good. ApexStack can help turn the task brief, test cases and operating boundary into a Product Blueprint, then quote a bounded implementation only when the release decision is clear.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does it take to build an AI product?",
      answer:
        "There is no responsible universal duration. The task, state of the data, integrations, permission model, evaluation work and release obligations change the plan. Ask for a staged scope with decision points and a written quote for the first bounded release rather than adopting a generic timeline.",
    },
    {
      question: "What is a feasibility test in an AI product project?",
      answer:
        "It is a comparison of candidate approaches on representative task cases, using defined success and failure criteria. Include difficult inputs and a current-process baseline, then record output quality, review effort and limitations. The result may justify building, narrowing the task, trying a simpler workflow or stopping.",
    },
    {
      question: "Does an AI product need a dedicated machine-learning engineer?",
      answer:
        "That depends on the approach. An application using a hosted model still needs product engineering, data access, evaluation and interface work; training or serving a proprietary model can add specialist requirements. Decide the roles from the task and architecture rather than assuming every AI feature needs the same team.",
    },
    {
      question: "How accurate must an AI feature be before release?",
      answer:
        "There is no universal threshold. Set acceptance criteria around the consequence of a wrong output, who reviews it, how failures are found and whether the user can recover. Test the complete task on representative cases before release and review production corrections afterwards.",
    },
    {
      question: "Should the first AI product use a hosted or self-hosted model?",
      answer:
        "Compare the options against data rights, residency, control, expected usage, operating capacity and task quality. A hosted model can reduce infrastructure work for an early test, but it is not automatically suitable for every data boundary. Self-hosting also needs an operating and evaluation plan; neither option replaces task-specific testing.",
    },
  ],
  sources: [
    { title: "Evaluation best practices", url: "https://developers.openai.com/api/docs/guides/evaluation-best-practices", publisher: "OpenAI" },
    { title: "AI RMF Core", url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/", publisher: "NIST" },
    { title: "AI RMF Playbook: Measure", url: "https://airc.nist.gov/airmf-resources/playbook/measure/", publisher: "NIST" },
  ],
  related: [
    "how-to-evaluate-an-llm-feature",
    "llm-feature-production-cost",
    "scope-in-app-ai-copilot-saas",
  ],
};
