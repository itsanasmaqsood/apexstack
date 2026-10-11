import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "ai-automation-recovery-acceptance-checklist",
  title: "AI Automation Acceptance: Can Your Team Recover a Failed Run?",
  seoTitle: "AI Automation Recovery: An Acceptance Checklist",
  description:
    "Before accepting an AI automation, test lost responses, duplicate events and stale approvals. Ask for recovery evidence your team can repeat.",
  excerpt:
    "A supplier demonstration should include interrupted work, not just a successful run. Use a recovery drill to decide what is ready to accept.",
  category: "AI Engineering",
  primaryKeyword: "AI automation acceptance checklist",
  secondaryKeywords: [
    "AI automation recovery testing",
    "workflow safe replay",
    "automation supplier acceptance evidence",
  ],
  published: "2026-10-11",
  authorId: "leadership-02",
  serviceSlug: "automation",
  keyTakeaway:
    "Before accepting an AI automation, ask the supplier to interrupt a representative workflow and show how your team can recover it without repeating completed actions. Test a lost response, a duplicate event, invalid model output and an approval that no longer matches the record. Keep the source identifier, destination evidence and operator decision together. Accept the agreed workflow only when the results match the brief; a successful demonstration or an automatic retry setting does not establish safe recovery.",
  sections: [
    {
      heading: "What should a recovery drill prove before you accept the workflow?",
      blocks: [
        {
          type: "p",
          text: "For a SaaS product lead commissioning onboarding or support automation, the question is what happens to an interrupted task. Can an operator determine whether it completed, resume the remaining work or deliberately stop it? Make those outcomes part of acceptance before implementation starts. This guide concerns recovery of an agreed workflow, not choosing an agent architecture or comparing automation suppliers by reputation.",
        },
        {
          type: "p",
          text: "Use an approved test environment and synthetic records for the drill. Do not deliberately break customer workflows or replay live messages to demonstrate resilience. Record which release and configuration were tested, the expected business result and the actual records produced. Passing this set of cases does not establish universal reliability or compliance.",
        },
      ],
    },
    {
      heading: "Why can retrying a failed run create a second problem?",
      blocks: [
        {
          type: "p",
          text: "AWS's Making retries safe with idempotent APIs explains that a missing response can leave the caller uncertain whether a resource was created. Repeating a write may create another resource. Idempotency means repeating the same operation has no additional side effects; it is a property to establish for the action, not a synonym for enabling retries.",
        },
        {
          type: "p",
          text: "Ask which actions have that protection and under what conditions. AWS describes caller-provided request identifiers, retained request history and rejection when the same identifier is reused with different parameters. Check the actual destination API's contract and retention boundary. A local record saying 'sent' cannot, by itself, prove that an external service committed the intended change.",
        },
        {
          type: "p",
          text: "Where the destination cannot make a repeated write safe, require an explicit uncertain state and an investigation path. Do not replace uncertainty with a new request identifier just to make a retry succeed. The supplier should explain which evidence lets an operator continue, which actions need review and which cases remain unresolved.",
        },
      ],
    },
    {
      heading: "Which failure cases should an onboarding automation demonstrate?",
      blocks: [
        {
          type: "p",
          text: "Consider a hypothetical SaaS onboarding workflow: an intake record is validated, a model proposes a support category, a reviewer approves it and the workflow creates a helpdesk ticket. This is a test example, not an ApexStack delivery story. Give the source record a stable identifier and keep the destination ticket reference when available. The table defines proposed acceptance cases; it does not prescribe a particular platform.",
        },
        {
          type: "table",
          caption: "Recovery drill for the same onboarding record, with expected outcomes agreed in advance",
          head: ["Interruption or exception", "Expected recovery decision", "Evidence to inspect"],
          rows: [
            ["The ticket is created but its response is lost", "Resolve the uncertain outcome before any further ticket creation", "Destination lookup or supported idempotent response tied to the source operation"],
            ["The same intake event arrives again", "Recognise the same logical work; do not create a second ticket", "Both delivery attempts and the resulting destination records"],
            ["The model returns an invalid category", "Stop before the write and expose the invalid result for correction", "Validation result, exception record and absence of an unintended ticket"],
            ["The intake changes after reviewer approval", "Detect that the approved input differs; follow the agreed revalidation policy", "Approved version, current version and renewed decision where required"],
            ["Access to the helpdesk is revoked", "Stop within the agreed attempt limit and notify the responsible operator", "Failed request, bounded retry history and received alert"],
            ["An operator resumes an interrupted run", "Continue only the authorised remaining work", "Completed-step evidence, selected resume point and final ticket state"],
          ],
        },
        {
          type: "p",
          text: "Have the implementer demonstrate the ambiguous-response case separately from a request rejected before processing. The recovery decisions differ. For a batch, inspect individual records as well as the overall run status: some items may have completed before a later item failed. Compare expected tickets with actual tickets rather than counting successful executions.",
        },
        {
          type: "callout",
          text: "Send ApexStack the workflow diagram and the actions that must not happen twice. A bounded Product Blueprint can identify unresolved recovery decisions and turn them into an acceptance brief before you commission the integration.",
        },
      ],
    },
    {
      heading: "What should happen to model output and approval during replay?",
      blocks: [
        {
          type: "p",
          text: "Separate generating a suggestion from applying an approved action. For the onboarding example, decide whether recovery reuses the validated category or generates a new one. If it generates a different suggestion, do not silently treat the old approval as approval of the new result. Keep the reviewed input, proposed action and decision linked in the evidence record.",
        },
        {
          type: "p",
          text: "OWASP's excessive-agency guidance recommends limiting tools and permissions and requiring human approval for high-impact actions. Apply those boundaries during recovery too. A resume button should not grant authority that the original run lacked. If a record has changed, require the documented checks before applying a previously approved write.",
        },
        {
          type: "p",
          text: "Agree what the operator can edit, who can approve the correction and when to stop rather than resume. Keep secrets and unnecessary personal information out of the evidence pack. Retention and access rules should be set for the data involved, not copied from this example.",
        },
      ],
    },
    {
      heading: "Does an error workflow or alert prove recovery works?",
      blocks: [
        {
          type: "p",
          text: "An alert tells someone to investigate; it does not establish the business result. n8n's Handle errors gracefully documentation describes error workflows triggered by failed executions and a Stop And Error node for deliberate failures. It also notes that execution identifiers and URLs depend on execution storage and can be absent for trigger failures. Check what your deployed configuration actually retains.",
        },
        {
          type: "p",
          text: "In the drill, confirm that the intended operator receives an actionable alert and can find the affected record without the supplier's private account. Then have that operator follow the recovery instructions. Keep failed cases visible even when the alerting step itself succeeds. If the trigger never receives an expected item, agree a separate check for missing work: there may be no failed execution to alert on.",
        },
      ],
    },
    {
      heading: "What recovery evidence belongs in the handover?",
      blocks: [
        {
          type: "list",
          items: [
            "The agreed case set, test data and instructions for repeating each interruption safely",
            "The tested release and configuration, with expected and actual source and destination states",
            "Operation identifiers, completed-step records and documented limits on replay protection",
            "The exception queue, alert destination and named person responsible for each unresolved case",
            "A runbook describing pause, investigation, correction, resume and escalation permissions",
            "Buyer-controlled access to the workflow, connected accounts and evidence needed to operate it",
            "Known gaps, their consequences and the decision to fix, narrow or defer the affected scope",
          ],
        },
        {
          type: "p",
          text: "Reject a critical case that creates a duplicate action or cannot establish the final state. Do not average it away against successful demonstrations. You can accept a narrower release that excludes an unsafe write if the scope and user journey are explicitly changed and retested. Handover is incomplete if only the original builder knows which steps are safe to repeat.",
        },
      ],
    },
    {
      heading: "How can ApexStack help define or implement the recovery boundary?",
      blocks: [
        {
          type: "p",
          text: "Send ApexStack the current workflow, systems involved, a sample exception and the actions that require approval. We can assess the integration boundary, define failure and recovery cases, and scope an operator interface and handover. If the uncertainties come first, the Product Blueprint starts from US$1,000 for bounded planning and de-risking, not a production-ready MVP.",
        },
        {
          type: "p",
          text: "When one workflow and its acceptance conditions are ready to assess, the Launch Sprint starts from US$2,500 for planning, UX direction, implementation, testing and deployment of one tightly scoped first release or core workflow. Authentication, billing, mobile apps, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the quote. Recovery work must be scoped against the actual systems; this checklist is not a promise that every integration fits the starting offer.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is enabling automatic retries enough for safe recovery?",
      answer: "No. First establish whether repeating each action can produce an additional side effect. A lost response may leave a completed write looking unsuccessful. Require destination evidence or a supported idempotency contract, bounded attempts and a review path for uncertain outcomes.",
    },
    {
      question: "Should we rerun the entire workflow after fixing an error?",
      answer: "Only when its completed actions are safe to repeat under the actual configuration. Otherwise identify completed work, investigate uncertain writes and resume from an authorised point. A changed model suggestion or source record may also need a new validation or approval decision.",
    },
  ],
  sources: [
    {
      title: "Making retries safe with idempotent APIs",
      url: "https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/",
      publisher: "Amazon Builders' Library",
    },
    {
      title: "Handle errors gracefully",
      url: "https://docs.n8n.io/build/flow-logic/handle-errors-gracefully",
      publisher: "n8n documentation",
    },
    {
      title: "LLM06:2025 Excessive Agency",
      url: "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/",
      publisher: "OWASP Gen AI Security Project",
    },
  ],
  conversion: {
    heading: "Ask ApexStack to assess your automation's recovery cases",
    description:
      "Share the same workflow and acceptance cases you give other suppliers, including any uncertain write or action that must not be repeated. ApexStack can map the failure paths, approval decisions and operating handover in a bounded Product Blueprint, or assess a defined workflow for implementation and testing through a Launch Sprint. Use the automation service and pricing pages to check the offer boundaries, then send the brief for a scope discussion.",
    primaryLabel: "Discuss your recovery acceptance brief",
  },
  related: [
    "ai-agents-for-business-operations",
    "business-process-automation-cost",
    "crm-erp-accounting-integration-scope",
  ],
};
