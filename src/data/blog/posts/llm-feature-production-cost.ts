import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "llm-feature-production-cost",
  title: "What It Costs to Run an LLM Feature in Production",
  seoTitle: "LLM API Cost in Production: What Shipping Really Costs",
  description:
    "Why LLM API cost in production is driven by context length rather than request count — the hidden multipliers, the levers, and how to set a ceiling.",
  excerpt:
    "The economics of shipping a language model feature: how token pricing really works, where the naive per-request estimate goes wrong, and how to build a cost ceiling before launch.",
  category: "AI Engineering",
  primaryKeyword: "LLM API cost in production",
  secondaryKeywords: [
    "how to reduce LLM token costs",
    "prompt caching cost savings",
    "estimating OpenAI API costs at scale",
    "LLM cost per user calculation",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "ai-development",
  keyTakeaway:
    "LLM API cost in production is driven by tokens per request rather than requests per day, and input and output are billed at different rates because they take different amounts of compute to produce. Estimate a feature as (input tokens × input rate) + (output tokens × output rate) per call, then multiply by retries, evaluation runs and agent loop turns — the naive per-request estimate almost always misses the multiplier hiding in those three. The largest reduction available to most teams is prompt caching over a stable prompt prefix, followed by routing easy requests to a smaller model and capping output length.",
  sections: [
    {
      heading: "Why input and output tokens are priced differently",
      blocks: [
        {
          type: "p",
          text: "Every major provider bills language model usage per token, and every one of them charges more for output than for input — typically several times more. This is not a pricing quirk; it reflects how a transformer actually runs, and understanding the mechanism tells you which lever to pull.",
        },
        {
          type: "p",
          text: "Processing input is the prefill phase: the whole sequence goes through the model in one pass and the GPU computes across all positions in parallel. It is compute-bound and efficient per token. Generating output is the decode phase, and it is fundamentally serial — each token needs its own forward pass through every layer, because it depends on the token before it. Decode is bound by memory bandwidth rather than raw compute; the hardware spends most of its time moving weights, not multiplying them. A thousand input tokens and a thousand output tokens are not the same amount of work, and the price list says so.",
        },
        {
          type: "p",
          text: "The practical consequence is that verbose output is the most expensive thing your feature can do, and a long prompt is the most persistent. A wordy answer costs you once per call at the higher rate. A bloated system prompt costs you on every call for the life of the feature.",
        },
        {
          type: "p",
          text: "One thing to check before modelling anything: token counts are model-specific. Tokenisers differ between vendors and change between generations within a vendor, so a model refresh can shift the count for identical text by a meaningful margin. Use the provider's own token counting endpoint against the exact model you intend to ship on.",
        },
      ],
    },
    {
      heading: "Why context length, not request count, drives the bill",
      blocks: [
        {
          type: "p",
          text: "Teams estimate LLM API cost in production by counting requests, because that is how every other API they have bought was priced. It is the wrong unit. Two features with identical request volumes can differ in cost by orders of magnitude, entirely because of what sits in the context window.",
        },
        {
          type: "p",
          text: "The reason it compounds is that these APIs are stateless. The model has no memory of the last turn; your client re-sends the whole conversation every time. So a chat feature does not cost n × per-turn — it grows with the square of turn count. If your system prompt is S tokens and each turn adds roughly t tokens of user message plus response, the total input you are billed for across an n-turn conversation is:",
        },
        {
          type: "code",
          lang: "text",
          code: `total_input_tokens ≈ (n × S) + t × (n × (n + 1) / 2)\n\n# S = 1,500 token system prompt, t = 400 tokens per turn\n#  5 turns  →  7,500 +  6,000 =  13,500 input tokens\n# 20 turns  → 30,000 + 84,000 = 114,000 input tokens\n#\n# 4× the turns, 8.4× the input cost.`,
        },
        {
          type: "p",
          text: "Nothing in your per-request logs makes this visible. Each call looks reasonable; it is the twentieth in a session that costs fourteen times the first. The same arithmetic applies to agent loops, where each tool call is a fresh request carrying the whole history plus every tool schema, and to RAG, where retrieved chunks are re-sent on every question.",
        },
        {
          type: "callout",
          text: "If you only instrument one thing before launch, make it input tokens per request bucketed by conversation depth. It is the number that turns a comfortable unit economic into a surprise, and it is invisible in any average.",
        },
      ],
    },
    {
      heading: "The multipliers nobody puts in the estimate",
      blocks: [
        {
          type: "p",
          text: "The naive estimate is tokens × rate × expected requests. It is almost always wrong, and wrong in one direction. Three categories of spend sit outside the happy path and rarely reach the spreadsheet.",
        },
        {
          type: "p",
          text: "Retries come first. A timeout, a schema validation failure, a rate limit, a refusal — each one re-bills the entire input. Retry logic usually lives inside a client SDK with a default of two or three attempts, configured by nobody and costed by nobody. If a schema mismatch pushes retries to a quarter of traffic, you have a serious problem that surfaces as a bill rather than as an error rate.",
        },
        {
          type: "p",
          text: "Evaluation runs come second, and are frequently the largest single line in a pre-launch bill. A five-hundred-case regression suite run on every merge against the highest-quality model is five hundred full-price requests per commit — charged to the production API key unless somebody deliberately separated them, which means your production cost dashboard is measuring your CI pipeline.",
        },
        {
          type: "p",
          text: "Third, the tokens you cannot see. Reasoning tokens are billed as output on every provider that offers them, and depending on the setting the response body may not show the text at all — you will only find them in the usage object. Guardrail classifiers, query rewriting, reranking and summarisation are all extra model calls that a user-facing ‘one request’ quietly fans out into.",
        },
      ],
    },
    {
      heading: "Cost drivers, where they hide, and what to do about each",
      blocks: [
        {
          type: "table",
          caption:
            "The eight things that actually determine what an LLM feature costs to run",
          head: ["Cost driver", "Why it inflates the bill", "Where it hides", "Mitigation"],
          rows: [
            [
              "System prompt length",
              "Billed on every request forever, so a 2,000-token prompt is 2,000 tokens × every call you will ever make",
              "Looks like a one-off authoring decision and never appears in a per-request estimate",
              "Prompt caching over the stable prefix; move rarely-triggered instructions into tool descriptions or retrieved context",
            ],
            [
              "Conversation history",
              "Stateless APIs re-send the whole transcript each turn, so cost grows with the square of turn count",
              "Per-request logs look healthy; only the session total shows it",
              "Sliding window, summarising compaction, or the provider's server-side compaction where offered",
            ],
            [
              "Retrieved context",
              "Top-k chunks are input tokens on every call; raising k from 5 to 20 quadruples that portion of the prompt",
              "Tuned once during a quality push and never revisited afterwards",
              "Retrieve wide, rerank, pass narrow. Measure answer quality against k rather than assuming more is better",
            ],
            [
              "Output length",
              "Output is priced several times above input on every major provider",
              "An unbounded max_tokens combined with a model that likes to explain itself",
              "Cap max_tokens per route; instruct for concision; return structured fields instead of prose",
            ],
            [
              "Reasoning tokens",
              "Billed as output, and often not rendered in the response body at all",
              "Usage totals far exceeding the visible answer length",
              "Set the provider's effort or thinking control per route rather than globally; measure whether the hard setting actually improves your evals",
            ],
            [
              "Retries",
              "Every retry re-bills the full input, and the input is the large part",
              "Default retry counts inside a client library that nobody configured",
              "Count retries as first-class requests in the model; fix schema and timeout root causes rather than retrying blind",
            ],
            [
              "Evaluation runs",
              "A full regression suite per commit is hundreds of full-price requests, usually on the most expensive model",
              "Charged to the production API key, so it pollutes the production cost figure",
              "Separate keys per environment; run evals through the batch endpoint; sample on commit and run the full suite nightly",
            ],
            [
              "Agent loop turns",
              "Each tool call is another complete request carrying the whole history plus every tool schema",
              "One user action fans out into many model calls that the product analytics count as one",
              "Cap loop iterations; prune resolved tool results from history; use a token budget where the provider supports one",
            ],
          ],
        },
      ],
    },
    {
      heading: "The levers, in the order worth pulling",
      blocks: [
        {
          type: "p",
          text: "These are ordered by return on effort. The first two typically account for most of the achievable reduction on a well-built feature.",
        },
        {
          type: "h3",
          text: "1. Prompt caching",
        },
        {
          type: "p",
          text: "This is the single largest lever for anything with a stable prefix — a long system prompt, a fixed tool list, a shared few-shot block, a document being asked repeated questions. On Anthropic's Messages API, cached reads are priced at roughly a tenth of the base input rate, while writing to the cache costs 1.25× for the five-minute TTL or 2× for the one-hour TTL. That arithmetic gives you a hard break-even: with the short TTL you are ahead from the second request onward; with the long TTL you need at least three. Other providers apply their own discount and their own hit rules, so read the specific page rather than assuming.",
        },
        {
          type: "p",
          text: "Caching is a prefix match, and this is where implementations fail silently. Any byte that changes anywhere in the prefix invalidates everything after it. A timestamp in the system prompt header, a UUID, a JSON blob serialised without sorted keys, or a per-user tool list will each drop your hit rate to zero while the code looks perfectly correct. Order the prompt by stability — never-changing content first, per-request content last — then verify against the API's reported cache-read token count rather than trusting the design.",
        },
        {
          type: "h3",
          text: "2. Model routing by task difficulty",
        },
        {
          type: "p",
          text: "Most features send every request to the strongest model because that is what the prototype did. Traffic is not uniform: classification, routing, extraction and formatting all run acceptably on the smallest tier, where published per-token rates are commonly several times lower than the flagship. Route on a cheap upfront signal — intent class, input length, whether tools are needed — and reserve the expensive model for what needs it. Measure quality per route, or a regression on a minority of traffic hides inside a healthy average.",
        },
        {
          type: "h3",
          text: "3. Output caps, context truncation and batching",
        },
        {
          type: "list",
          items: [
            "Cap max_tokens per route rather than globally. It bounds the most expensive token class and turns a runaway generation into a handled error instead of an invoice.",
            "Truncate retrieved context after reranking. Recall and prompt length are separate decisions — fetch fifty candidates, rerank, pass five.",
            "Use the batch endpoint for anything not latency-sensitive. Both Anthropic and OpenAI price batch processing at half the standard rate with a 24-hour window; evaluation suites, backfills and nightly summarisation all qualify.",
            "Cache deterministic results in your own store. If the same input maps to the same output, a hash lookup costs nothing and the model call costs full price.",
            "Fire one request before a fan-out. A cache entry only becomes readable once the first response starts streaming, so N parallel calls sharing a prefix all pay full price.",
          ],
        },
      ],
    },
    {
      heading: "How to build a cost ceiling per user before you launch",
      blocks: [
        {
          type: "p",
          text: "Do this before the feature ships; the alternative is discovering your unit economics from an invoice. The goal is not a precise forecast but a defensible worst case you can compare against what the feature earns.",
        },
        {
          type: "code",
          lang: "text",
          code: `# Per-call cost, from measured token counts and current published rates\ncall_cost =\n    (cached_input_tokens × input_rate × cache_read_discount)\n  + (fresh_input_tokens  × input_rate)\n  + (output_tokens       × output_rate)\n\n# Per-user monthly ceiling — use the 95th percentile, not the mean\nuser_ceiling =\n    call_cost\n  × calls_per_session_p95\n  × sessions_per_month_p95\n  × retry_multiplier          # e.g. 1.05\n  × fanout_multiplier         # guardrails, rerank, agent turns\n\n# Then compare against revenue per user, and set the hard limits:\n#   - max_tokens per route\n#   - max agent loop iterations\n#   - monthly token quota per account, enforced in your own gateway`,
        },
        {
          type: "p",
          text: "Three rules make this useful rather than decorative. Use percentiles, not averages — usage distributions have long tails, and the tail is where the loss sits. Populate the token counts from closed-beta traffic rather than your own test prompts, which are always shorter and better behaved than what users send. And leave the rates as variables you look up when you compute, because published pricing changes in both directions.",
        },
        {
          type: "p",
          text: "Then enforce the ceiling in code. A per-account token quota checked in your own gateway before the request goes out is the only thing that reliably stops a single pathological user, a runaway agent loop or a leaked key from producing a five-figure month. Provider-side spend limits are a backstop for the organisation; they cannot protect a per-user margin.",
        },
      ],
    },
    {
      heading: "What to instrument on day one",
      blocks: [
        {
          type: "p",
          text: "Cost visibility has to be built with the feature, not retrofitted after the first bad month. Every response carries a usage object; logging it is a few lines of work that pays for itself immediately.",
        },
        {
          type: "list",
          items: [
            "Log input, output, cached-read and cache-write token counts on every call, tagged by route, model and tenant. On providers that separate these, the plain input count is only the uncached remainder — true prompt size is the sum of all three.",
            "Track cache hit rate as a first-class metric. A prefix change during a routine deploy can silently take it to zero, and the only symptom is a cost step-change a week later.",
            "Attribute cost per tenant and per feature, not per API key, so you can tell a growth story from a regression.",
            "Alert on cost per session rather than total spend. Total spend rising with user growth is the plan working; cost per session rising is a bug.",
            "Keep evaluation and development traffic on separate keys so your production figure means something.",
          ],
        },
        {
          type: "p",
          text: "The pattern across most of the LLM cost reviews we run is the same: the model choice was rarely the problem, and the prompt architecture usually was. If you are scoping a feature and want a second opinion on the numbers before they are committed to a roadmap, that is a conversation we are happy to have.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How do I estimate LLM API costs before building the feature?",
      answer:
        "Write the actual prompt you intend to ship, run it through the provider's token counting endpoint against the exact model, and record input and output counts separately. Multiply each by its published rate, then apply multipliers for retries, guardrail calls and agent loop turns. Use 95th-percentile session length rather than the average, because usage distributions have long tails and the tail is where the cost lives.",
    },
    {
      question: "Why is my LLM bill higher than my per-request estimate?",
      answer:
        "Almost always one of four things: conversation history being re-sent on every turn so cost grows with the square of turn count; retries inside a client library that nobody configured; evaluation runs charged to the production API key; or reasoning tokens billed as output but not visible in the response body. Log the usage object on every call, tagged by route, and the culprit usually becomes obvious within a day.",
    },
    {
      question: "How much can prompt caching actually save?",
      answer:
        "It depends entirely on what fraction of your prompt is stable across requests. With a long system prompt or a fixed document, cached reads are typically priced around a tenth of the base input rate, so a prompt that is mostly stable prefix can see the input portion of the bill fall dramatically. Cache writes cost a premium, which means the break-even is usually the second or third request against the same prefix.",
    },
    {
      question: "Is a cheaper model always the right way to cut LLM costs?",
      answer:
        "Not by itself. Downgrading globally trades cost for quality across all traffic, including the requests that needed the stronger model. Routing by task difficulty is better: send classification, extraction and short factual answers to the small tier and reserve the flagship for genuinely hard requests. Measure quality per route rather than in aggregate, or a regression on a minority of traffic will hide inside a healthy overall score.",
    },
    {
      question: "When should I use the batch API instead of normal requests?",
      answer:
        "Whenever the work is not latency-sensitive. Both Anthropic and OpenAI price batch processing at half the standard rate with a 24-hour completion window, which fits evaluation suites, data backfills, content enrichment, nightly summarisation and bulk classification. It is the cheapest cost reduction available because it requires no prompt changes at all — only moving the job onto a different endpoint.",
    },
    {
      question: "How do I stop one user from running up an enormous bill?",
      answer:
        "Enforce a per-account token quota in your own gateway, checked before the request leaves your infrastructure. Combine it with a per-route max_tokens cap and a hard limit on agent loop iterations. Provider-side spend limits protect the organisation but cannot protect per-user margin, and they typically trigger long after a single runaway loop or leaked key has done the damage.",
    },
  ],
};
