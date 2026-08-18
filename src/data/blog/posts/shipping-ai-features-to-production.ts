import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "shipping-ai-features-to-production",
  title: "Shipping AI Features That Survive Production",
  seoTitle: "Shipping AI Features to Production: A Checklist",
  description:
    "Shipping AI features to production: the engineering checklist for non-determinism, provider outages, prompt injection and malformed model output.",
  excerpt:
    "The gap between a demo that impresses and a feature that holds up is not model quality. It is retry policy, schema validation, timeout budgets and knowing what the screen shows when the provider returns an error.",
  category: "AI Engineering",
  primaryKeyword: "shipping AI features to production",
  secondaryKeywords: [
    "LLM production checklist",
    "LLM error handling and fallbacks",
    "prompt injection mitigation",
    "structured output validation LLM",
    "LLM cost monitoring in production",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "ai-development",
  keyTakeaway:
    "Shipping AI features to production means engineering around three properties a normal dependency does not have: the same input can produce different output, the provider can be down or rate-limiting you, and the response can be malformed even when the call succeeds. Validate every structured response against a schema at the parse boundary, define and build the degraded path the feature falls back to when the model is unavailable, and version the prompt as a deployable artefact pinned to a dated model snapshot. A defined degraded path is the difference between an AI feature that survives production and one that takes the product down with it.",
  sections: [
    {
      heading: "Shipping AI features to production: what breaks after the demo",
      blocks: [
        {
          type: "p",
          text: "A demo runs one prompt, on one input the author chose, once, with the author watching. Production runs that prompt on inputs nobody anticipated, thousands of times a day, against a service you do not control, cannot roll back, and cannot debug from the inside. Nearly every failure in shipping AI features to production traces back to that difference. Almost none of them trace back to the model being insufficiently clever.",
        },
        {
          type: "p",
          text: "The work that closes the gap is unglamorous. It is retry policy, schema validation at the parse boundary, timeout budgets, per-tenant quotas, and deciding what the interface shows when the provider returns an overloaded error at 09:00 on a Monday. None of it improves the output that impressed everyone in the demo. All of it determines whether the feature is still switched on in three months.",
        },
        {
          type: "p",
          text: "What follows is the checklist we work through before an LLM-backed feature meets real users. It assumes a hosted model called over HTTP, which is the shape of most of these builds.",
        },
      ],
    },
    {
      heading: "How do you test a feature whose output changes every run?",
      blocks: [
        {
          type: "p",
          text: "Conventional tests assert equality. Setting temperature to zero narrows the distribution but does not guarantee identical bytes: batching on the provider’s side, floating-point non-associativity across hardware, expert routing in mixture-of-experts models, and silent serving changes all move the output. A test suite that asserts on exact prose is a flaky-test factory, and a flaky suite is an ignored suite.",
        },
        {
          type: "p",
          text: "Assert properties instead of strings. The useful assertions are the ones that describe the contract between the model and the code that consumes it, and they are all deterministic even though the thing they inspect is not.",
        },
        {
          type: "list",
          items: [
            "Schema conformance: the response parses, every required field is present, every enum value is inside the allowed set.",
            "Groundedness: every entity, figure or document ID that appears in the output also appears in the source text you supplied.",
            "Bounds: the classification is one of your six labels, the extracted date falls in a plausible range, the generated SQL touches only tables the requesting user is permitted to read.",
            "Refusal behaviour: a known adversarial input still takes the refusal path rather than producing a compliant answer.",
            "Envelope: the call stays inside the token and latency budget the feature was sized around.",
          ],
        },
        {
          type: "p",
          text: "Those run in CI alongside everything else. Anything genuinely about quality — is this summary good, is this reply the right tone — is scored rather than passed, and belongs in an evaluation suite, not the unit test job.",
        },
        {
          type: "callout",
          text: "If a test can fail because the model chose a synonym, it is not a test. It is a scheduled interruption for whoever is on call.",
        },
      ],
    },
    {
      heading: "What happens when the provider is down, slow, or rate-limiting you?",
      blocks: [
        {
          type: "p",
          text: "You have taken a hard dependency on an external service with published quotas and its own incident history. Rate limits are usually enforced on at least two axes simultaneously — requests per minute and tokens per minute — so a handful of long-context calls can exhaust the token budget while your request count still looks comfortable. HTTP 429 is not an exception in this design, it is expected control flow, and code that treats it as a crash will crash regularly.",
        },
        {
          type: "p",
          text: "Retry with exponential backoff and full jitter, honour any Retry-After header, and cap the total retry wall clock below the caller’s timeout so you never spend the user’s patience on attempts nobody will see. Equally important is refusing to retry what cannot succeed: a malformed request, an authentication failure, a content-filter refusal and a context-length overflow all fail identically the second time, and retrying the last is an expensive route to the same error.",
        },
        {
          type: "p",
          text: "Put your own token bucket in front of the provider rather than discovering their limit under load, and make it per-tenant. Without that, one customer’s bulk import consumes the whole minute’s quota and every interactive user in the product sees a spinner that never resolves — an availability incident caused entirely by fairness, not capacity.",
        },
        {
          type: "p",
          text: "Then decide the fallback ladder before launch, not during the incident. A smaller and faster model from the same provider, a second provider behind an adapter interface, a cached or precomputed answer, a deterministic non-AI path, and finally an honest error state that tells the user what to do next. You do not need all five. You need to have chosen, and the switch between them should be configuration that an on-call engineer can flip without a deploy.",
        },
      ],
    },
    {
      heading: "Timeouts, streaming, and requests that never return",
      blocks: [
        {
          type: "p",
          text: "Generation latency scales with output tokens, so the distribution has a long tail rather than a tight cluster. A short classification returns quickly and predictably; a multi-page summary with a large context window can occupy tens of seconds. Default HTTP client timeouts are usually too aggressive for the second case, and many managed hosting platforms cap a synchronous request well below the time a long generation needs, which produces a gateway timeout in front of a model call that was going to succeed.",
        },
        {
          type: "p",
          text: "Streaming fixes the perception, not the duration. Server-sent events put the first token in front of the user quickly, but they change the failure model: you have already returned HTTP 200 and half an answer before anything goes wrong, so errors must travel in-band as a frame the client understands, and the client must handle a stream that simply stops. Streaming also fights structured output, since a JSON payload cannot be validated against a schema until the object is complete.",
        },
        {
          type: "p",
          text: "For anything genuinely long, stop pretending it is a request. Persist the job, return an identifier, run the generation on a worker, and deliver the result by poll or webhook. Attach an idempotency key so that a retried submission does not produce two charges, two emails or two rows, and write the request record before the provider call rather than after, so a crash mid-call leaves evidence rather than silence.",
        },
      ],
    },
    {
      heading: "When user input reaches the prompt: injection, PII, and what you can actually do",
      blocks: [
        {
          type: "p",
          text: "Any text a user controls that ends up concatenated into a prompt is an instruction channel. The model has no reliable way to distinguish the instructions you wrote from instructions embedded in the data you supplied, and the list of things that count as user-controlled is longer than most teams assume: retrieved documents, email bodies, PDF contents, scraped web pages, file names, calendar invitations, and another user’s profile text all qualify.",
        },
        {
          type: "p",
          text: "There is no filter that reliably detects prompt injection, and any vendor claiming otherwise is selling a heuristic. The defence is architectural — constrain what the model is able to do rather than what it is able to read.",
        },
        {
          type: "list",
          items: [
            "Give tools the narrowest possible scope: a parameterised read against a specific view, not a general query interface with database credentials behind it.",
            "Authorise every tool call server-side against the end user’s own permissions at the moment of the call. A rule stated in the system prompt is a suggestion, not an access control.",
            "Require explicit human confirmation for anything irreversible — sending the email, issuing the refund, deleting the record, transferring the file.",
            "Escape model output before it reaches HTML. A model instructed by a poisoned document to emit an image tag pointing at an attacker’s host will happily emit it, and that request carries whatever is in the URL.",
            "Delimit untrusted content clearly and label it as data in the prompt, while accepting that delimiters reduce the success rate of an attack rather than eliminating it.",
          ],
        },
        {
          type: "p",
          text: "The privacy question gets decided earlier than teams expect. Everything in the prompt leaves your boundary, so enumerate the fields going out and redact what the task does not need — a support classifier rarely needs a customer’s full address to pick a queue. Confirm retention terms and training exclusions in the contract rather than the marketing page. Where health, payment or children’s data is involved, whether a data processing agreement and the residency of inference cover your obligations is a legal review, not a configuration flag.",
        },
      ],
    },
    {
      heading: "Validating structured output before it reaches your domain logic",
      blocks: [
        {
          type: "p",
          text: "Constrained decoding, JSON schema modes and tool-call schemas have made malformed output rare rather than impossible. A generation that hits the max-token limit truncates mid-object, and a content filter can return prose where you expected an object. Syntactically perfect JSON can still be semantically wrong: an empty string where a name was required, an enum value that reads plausibly but is not one of yours, a date of 0000-00-00.",
        },
        {
          type: "p",
          text: "Treat the model boundary the way you would treat an untrusted HTTP body. Parse once, validate against a schema, and hand the rest of the system a typed value. A raw dictionary from a completion should never reach business logic, because the exception it eventually throws will surface three layers away from the cause.",
        },
        {
          type: "code",
          lang: "ts",
          code: "const Extraction = z.object({\n  invoiceNumber: z.string().min(1),\n  currency: z.enum([\"GBP\", \"USD\", \"EUR\"]),\n  totalMinor: z.number().int().nonnegative(),\n  issuedOn: z.string().regex(/^\\d{4}-\\d{2}-\\d{2}$/),\n});\n\ntype Extraction = z.infer<typeof Extraction>;\n\nasync function extract(doc: string): Promise<Extraction | null> {\n  const first = await callModel(doc);\n  const parsed = Extraction.safeParse(tryJson(first.text));\n  if (parsed.success) return parsed.data;\n\n  // One repair attempt, with the validation error fed back in.\n  const repaired = await callModel(doc, {\n    priorAttempt: first.text,\n    validationError: parsed.error.message,\n  });\n  const second = Extraction.safeParse(tryJson(repaired.text));\n  if (second.success) return second.data;\n\n  logParseFailure({ promptVersion: first.promptVersion, raw: repaired.text });\n  return null; // caller routes to manual review, not to a crash\n}",
        },
        {
          type: "p",
          text: "One repair attempt, not a loop. A model that fails the same schema twice will usually fail it five times, and the loop only multiplies latency and spend. The null return matters more than the retry: the caller needs a defined path for “no valid answer”, normally a queue for human handling rather than an error page.",
        },
      ],
    },
    {
      heading: "Logging enough to debug without logging what you must not keep",
      blocks: [
        {
          type: "p",
          text: "When a customer reports a bad answer three days later, you need to reconstruct what happened. That means the prompt version, the rendered prompt or its inputs, the model identifier including the dated snapshot, the sampling parameters, the raw completion, token counts, latency, and the trace ID tying it to the originating request. Missing any one of those turns a fifteen-minute investigation into a shrug.",
        },
        {
          type: "p",
          text: "What must not land in that log is equally specific: API keys, whole uploaded documents, payment details, and personal data that has no business being retained. Redact at the logging boundary rather than trusting every call site, and keep prompt logs in their own store with their own short retention, because a prompt log is a copy of user content and inherits every deletion obligation attached to the original. An erasure request has to be able to reach it.",
        },
        {
          type: "p",
          text: "Cost belongs on the same dashboard as latency and error rate, because it fails in the same way — suddenly. Alert on spend per hour and per tenant rather than per month, since a monthly threshold notices a runaway retry loop several thousand pounds after the fact. Set an explicit max-token ceiling on every call, enforce a per-user quota server-side, and record tokens per request as a metric so a prompt change that quietly doubles context length shows up as a graph rather than an invoice.",
        },
      ],
    },
    {
      heading: "Prompts are deployable artefacts, not configuration",
      blocks: [
        {
          type: "p",
          text: "A prompt determines the behaviour of a feature as completely as the code around it, so it deserves the same handling: in version control, reviewed, tied to a release, reversible. Editing a prompt in a vendor dashboard at midnight is production write access with no audit trail and no rollback.",
        },
        {
          type: "p",
          text: "Pin the model to a dated snapshot rather than a floating alias. Aliases move by design, and when one moves your carefully tuned prompt has been reassigned to a different model without a deploy, a changelog entry or a test run. Upgrading should be a deliberate act: run the new snapshot against your evaluation set, compare it with the incumbent, then change the pinned identifier in a reviewed pull request like any other dependency bump.",
        },
        {
          type: "p",
          text: "Stamp the prompt version onto every completion you log. It costs a string and it is what makes the difference between “the summaries got worse sometime last month” and “the summaries got worse at 14:20 when we shipped v11”.",
        },
      ],
    },
    {
      heading: "A pre-flight checklist for shipping AI features to production",
      blocks: [
        {
          type: "p",
          text: "Every row below is a failure we have either fixed or watched someone else fix under pressure. The right time to work through it is the week before launch, when the mitigation is a day of engineering rather than an incident review.",
        },
        {
          type: "table",
          caption: "Production concerns for LLM-backed features, and what to do about each",
          head: ["Production concern", "What goes wrong", "Mitigation", "Signal to watch"],
          rows: [
            [
              "Non-deterministic output",
              "Exact-match tests flake, the suite gets ignored, real regressions ship",
              "Assert schema, invariants and bounds; move quality judgements into an evaluation set",
              "Flake rate on the AI test job",
            ],
            [
              "Rate limits",
              "429s under bursts; one tenant consumes the whole token-per-minute quota",
              "Backoff with jitter, honour Retry-After, per-tenant token bucket in front of the provider",
              "429 rate, queue depth per tenant",
            ],
            [
              "Provider outage or degradation",
              "The feature errors, and if it is on a critical path the page errors with it",
              "Fallback ladder behind a config switch; a defined degraded state rather than a stack trace",
              "Upstream error rate, fallback hit rate",
            ],
            [
              "Long generations",
              "Client or platform timeout cuts a call that was going to succeed",
              "Stream interactive responses; move long work to a worker with an idempotency key",
              "p99 total latency, time to first token",
            ],
            [
              "Prompt injection",
              "The model follows instructions hidden in user content and calls a tool it should not",
              "Narrow tool scopes, server-side authorisation per call, human confirmation for irreversible actions",
              "Tool calls rejected by authorisation",
            ],
            [
              "Personal data sent to a third party",
              "Data leaves the boundary with no basis, and retention terms are discovered during an audit",
              "Field-level redaction before the call, a signed data processing agreement, short prompt-log retention",
              "Redaction failures on outbound payloads",
            ],
            [
              "Malformed or semantically wrong output",
              "An exception deep in domain logic, or a corrupt row written confidently",
              "Validate at the parse boundary, one repair attempt, typed fallback to manual review",
              "Parse and validation failure rate",
            ],
            [
              "Silent quality regression",
              "The provider updates the model behind an alias and output degrades with no deploy",
              "Pin a dated snapshot; run the evaluation set before changing the pin",
              "Evaluation score per model and prompt version",
            ],
            [
              "Cost blowout",
              "A retry loop over a large context turns a normal day into an unusual invoice",
              "Max-token ceiling per call, per-user quota, hourly spend alerting",
              "Spend per hour, tokens per request",
            ],
            [
              "Untracked prompt edits",
              "A bad answer cannot be reproduced because nobody knows which prompt produced it",
              "Prompts in version control, reviewed and released; version ID logged with every completion",
              "Share of completions with a known prompt version",
            ],
          ],
        },
        {
          type: "p",
          text: "None of this is exotic — it is ordinary reliability engineering applied to an unusually unpredictable dependency. The mistake is assuming the AI is the hard part; the model is the easiest component to replace and the least likely reason the feature fails.",
        },
        {
          type: "p",
          text: "If you have a prototype that works and you are now weighing what it takes to put it in front of paying customers, that transition is a large part of what we do at ApexStack. We are happy to walk through the checklist against your specific architecture and tell you which rows actually apply.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How do you test an AI feature when the output is different every time?",
      answer:
        "Stop asserting on text and start asserting on properties. Check that the response validates against a schema, that every field is present and within range, that any entity named in the output also appears in the source you supplied, and that adversarial inputs still take the refusal path. Those assertions are deterministic even though the output is not. Subjective quality is scored separately in an evaluation suite rather than passed or failed in CI.",
    },
    {
      question: "What should happen when the LLM provider goes down?",
      answer:
        "Something you decided in advance. The usual ladder is a smaller model from the same provider, then a second provider behind an adapter interface, then a cached or precomputed result, then a deterministic non-AI path, then an honest error explaining what to do next. Most products need two of those, not five. What matters is that the choice is configuration an on-call engineer can change without a deploy.",
    },
    {
      question: "Is prompt injection a real risk for an ordinary business application?",
      answer:
        "It is real wherever untrusted text reaches a prompt and the model can take an action. If the model only summarises text back to the person who supplied it, the blast radius is small. If it can query a database, send an email or call an internal API, an instruction hidden in a retrieved document becomes a way to make those calls. Authorise every tool call server-side against the end user’s permissions rather than relying on prompt instructions.",
    },
    {
      question: "Should I stream LLM responses or wait for the full completion?",
      answer:
        "Stream when a person is watching and the answer is prose, because time to first token is what the user perceives. Do not stream when the response is structured data your code must validate, since you cannot check a schema until the object is complete. Streaming also complicates errors: you have already sent a 200 and part of the answer, so failures must be delivered in-band and the client has to handle a truncated stream.",
    },
    {
      question: "How do I stop LLM costs from spiralling in production?",
      answer:
        "Set an explicit max-token ceiling on every call, enforce a per-user or per-tenant quota server-side, and cap retry attempts with a total wall-clock budget. Then alert on spend per hour rather than per month, because a monthly threshold notices a runaway loop long after it has run. Track tokens per request as a metric so that a prompt change which quietly doubles context length shows up on a graph before it shows up on an invoice.",
    },
    {
      question: "Do I need to worry about sending customer data to an AI provider?",
      answer:
        "Yes, and the work is mostly enumeration. List every field that will appear in the prompt, remove what the task does not need, and redact the rest before the call. Confirm in the contract, not the marketing page, whether your tier is excluded from training and how long requests are retained. For health, payment or children’s data, whether a data processing agreement and the residency of inference cover your obligations is a legal question, not a configuration setting.",
    },
  ],
};
