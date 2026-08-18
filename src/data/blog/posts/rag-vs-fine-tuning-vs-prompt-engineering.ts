import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "rag-vs-fine-tuning-vs-prompt-engineering",
  title: "RAG vs Fine-Tuning vs Prompt Engineering: How to Choose",
  seoTitle: "RAG vs Fine-Tuning vs Prompt Engineering: How to Pick",
  description:
    "RAG vs fine-tuning vs prompting — what each one actually changes, what each costs, and how to pick the right one without burning a build cycle.",
  excerpt:
    "A decision framework for the three ways to change what a language model does. Most teams reach for fine-tuning when the real problem is missing context.",
  category: "AI Engineering",
  primaryKeyword: "RAG vs fine-tuning",
  secondaryKeywords: [
    "when to use RAG instead of fine-tuning",
    "does fine-tuning add knowledge to an LLM",
    "retrieval augmented generation architecture",
    "cost of fine-tuning an LLM",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "ai-development",
  keyTakeaway:
    "Use prompt engineering when the model already has the knowledge and only needs clearer instructions, RAG when it is missing facts it could never have been trained on, and fine-tuning when it has the knowledge but will not reliably produce the format, tone or behaviour you need. In the RAG vs fine-tuning decision specifically, RAG wins whenever the underlying information changes, is private, or has to be cited; fine-tuning wins when you need consistent structured output, a particular house voice, or a smaller and cheaper model on a narrow task. Most production systems end up running all three, because each acts on a different part of the same pipeline.",
  sections: [
    {
      heading: "What each of the three techniques actually changes",
      blocks: [
        {
          type: "p",
          text: "A language model answers from three things: the weights it was trained with, the text in its context window, and the decoding settings. Prompt engineering, RAG and fine-tuning each touch exactly one of those. Keeping that straight is most of the work — the RAG vs fine-tuning argument is usually two people describing different failure modes and reaching for the same hammer.",
        },
        {
          type: "h3",
          text: "Prompting changes the instructions",
        },
        {
          type: "p",
          text: "A prompt sets the task, the constraints, the output shape and the worked examples. It changes nothing about what the model knows and nothing about its underlying tendencies. It is the fastest thing to change, the cheapest to test, and the only one of the three you can iterate on inside a single afternoon. It is also the only one where a mistake costs you nothing but the tokens you already spent.",
        },
        {
          type: "h3",
          text: "RAG changes the knowledge available",
        },
        {
          type: "p",
          text: "Retrieval-augmented generation puts relevant source text into the context window at inference time. The model is not smarter afterwards; it simply has the right page open in front of it. The engineering effort sits almost entirely outside the model — chunking, embedding, indexing, hybrid search, reranking, permission filtering — and the model itself is unchanged. Swap the base model tomorrow and your retrieval layer still works.",
        },
        {
          type: "h3",
          text: "Fine-tuning changes behaviour and format",
        },
        {
          type: "p",
          text: "Fine-tuning updates weights — either all of them, or, far more commonly, a small set of low-rank adapter matrices via LoRA. It shifts the distribution of what the model tends to produce. That makes it excellent at teaching a model how to respond and poor at teaching it what is true. A fine-tune has no index and no citation trail; it nudges probabilities. Ask it for a fact it half-learned during training and it will produce something fact-shaped with total confidence.",
        },
        {
          type: "callout",
          text: "Fine-tuning teaches a model how to answer. Retrieval tells it what to answer about. Reaching for the first when the problem was the second is the most expensive mistake in applied AI work — you spend six weeks and end up with a model that is wrong in a more consistent house style.",
        },
      ],
    },
    {
      heading: "When is a better prompt the entire answer?",
      blocks: [
        {
          type: "p",
          text: "More often than anyone wants to admit. Before either heavier option is on the table, the prompt should be doing real work: an explicit role, the exact output contract, two or three examples covering the awkward cases rather than the easy ones, and an instruction for what to do when the answer is not available. Most teams write one paragraph, watch it fail, and conclude the model is not capable.",
        },
        {
          type: "p",
          text: "These are the signals that prompting is still the right lever:",
        },
        {
          type: "list",
          items: [
            "The model gets the answer right some of the time — meaning the capability exists and the instruction is under-specified.",
            "Failures cluster around output shape, verbosity or missing steps rather than around missing facts.",
            "You have not yet tried few-shot examples drawn from real failures instead of hand-written ideal cases.",
            "You have not tried the provider's structured output or JSON schema mode, which constrains decoding directly rather than asking politely.",
            "The task decomposes — a single prompt doing extraction, judgement and formatting at once will usually beat itself once split into two calls.",
          ],
        },
        {
          type: "p",
          text: "Prompting has a real ceiling: it cannot make the model know something it was never trained on, and past a certain length more instruction degrades adherence rather than improving it. When you hit that ceiling, the next question is which one you hit — knowledge, or behaviour.",
        },
      ],
    },
    {
      heading: "What does RAG solve that a bigger context window does not?",
      blocks: [
        {
          type: "p",
          text: "Context windows now run to hundreds of thousands or millions of tokens, which prompts a fair question: why not paste in the whole corpus? Four reasons, none of which shrink as windows grow.",
        },
        {
          type: "p",
          text: "First, cost. Input tokens are billed on every request, so a 200,000-token document in the prompt is 200,000 tokens billed per question, not per document. Second, accuracy. The well-documented ‘lost in the middle’ effect means material buried in the centre of a very long context is used less reliably than the same material near the start or the end. Third, freshness and permissions. An index updates the moment a document changes and can filter by tenant, role or region before anything reaches the model. Fourth, citation. Retrieval hands you the source of every claim, which is usually the difference between a demo and something legal will approve.",
        },
        {
          type: "p",
          text: "The parts of a retrieval layer that decide whether it works are unglamorous and mostly not about the model. Chunk on semantic boundaries, not fixed character counts. Run hybrid search — BM25 lexical matching alongside dense vector similarity, fused with reciprocal rank fusion — because dense embeddings handle exact identifiers, part numbers and rare proper nouns badly, and that is precisely what business users search for. Then rerank with a cross-encoder before anything reaches the generation model. Most RAG systems described as ‘hallucinating’ are retrieving the wrong chunks, and no amount of prompt tuning on the generation step fixes a bad candidate set.",
        },
      ],
    },
    {
      heading: "When does fine-tuning genuinely earn its keep?",
      blocks: [
        {
          type: "p",
          text: "There are four cases where fine-tuning is clearly right, and it is worth being precise because none of them is ‘the model does not know enough about our business’.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Consistent structured output at scale, where constrained decoding is not enough on its own. If the schema is deeply nested, has conditional fields, or encodes domain rules a JSON schema cannot express, a tuned model produces valid output at a materially higher rate.",
            "Domain tone and register. Regulatory language, clinical summaries, a specific claims-handling voice — behaviours that take three hundred words of prompt to approximate and still drift. A few hundred reviewed examples encode this far more reliably than instruction will.",
            "Latency and cost reduction on a narrow task. Fine-tune a small model on a large one's outputs and you can move classification, routing or extraction off a frontier model onto something an order of magnitude cheaper and faster. On a high-volume path this is often the strongest case of the four.",
            "Behaviour that resists instruction. Classification boundaries the model keeps getting wrong in the same direction, or a preamble habit you cannot prompt away. If five prompt variants produce an identical failure, you have a weights problem.",
          ],
        },
        {
          type: "p",
          text: "Two costs get left out of fine-tuning business cases. The first is the eval suite: the moment you tune, you own a regression test set forever, because you can no longer reason about behaviour from the base model's documented characteristics. The second is version lock — a fine-tune is bound to a specific base checkpoint, and when the provider deprecates it, on a published schedule, you retrain, re-evaluate and re-qualify. Budget that as recurring, not as a project.",
        },
      ],
    },
    {
      heading: "RAG vs fine-tuning vs prompting, compared directly",
      blocks: [
        {
          type: "table",
          caption:
            "How the three techniques differ across the dimensions that decide a build",
          head: ["Dimension", "Prompt engineering", "RAG", "Fine-tuning"],
          rows: [
            [
              "What it changes",
              "The instructions and examples in the context window",
              "The knowledge available at inference time",
              "The weights, and therefore default behaviour and format",
            ],
            [
              "Setup cost",
              "Hours to days; no new infrastructure",
              "Days to weeks; embedding pipeline, index, chunking strategy, retrieval eval",
              "Weeks; dataset curation, training runs, and an eval suite you own permanently",
            ],
            [
              "Ongoing cost",
              "Input tokens for the prompt on every call",
              "Input tokens for retrieved chunks, plus embedding and index hosting",
              "Retraining on every base model change; often a higher per-token serving rate",
            ],
            [
              "Latency impact",
              "Adds prefill time proportional to prompt length",
              "Adds an embedding call, a vector lookup and optionally a reranker before generation",
              "Neutral or better — a small tuned model can beat a large general one on both",
            ],
            [
              "Data needed",
              "A handful of worked examples, ideally taken from real failures",
              "Your documents, in whatever form they already exist",
              "Hundreds to thousands of reviewed input/output pairs in the exact target format",
            ],
            [
              "Best fit",
              "The model can do the task but formats or sequences it badly",
              "The model cannot know the answer — private, recent or user-specific facts",
              "The model knows the answer but will not express it the way you need",
            ],
            [
              "Worst fit",
              "Behaviour that stays identical across five prompt rewrites",
              "Questions requiring reasoning across the whole corpus rather than a lookup",
              "Knowledge that changes — every update becomes another training run",
            ],
          ],
        },
      ],
    },
    {
      heading: "Why RAG plus a strong prompt covers most business cases",
      blocks: [
        {
          type: "p",
          text: "The overwhelming majority of enterprise AI requirements reduce to: answer questions about our information, in our format, without making things up. That is a retrieval problem wearing a generation problem's clothes. The model's general reasoning is already sufficient; what it lacks is your contract terms, your product catalogue, your support history. Retrieval supplies exactly that, at the speed the business changes rather than the speed of a training run.",
        },
        {
          type: "p",
          text: "The prompt then does the rest of the work, and the instruction that matters most is the grounding contract — telling the model explicitly that the retrieved passages are the only permitted source, and what to do when they do not contain the answer. Combined with a structured output schema, this handles the format requirement that teams most often try to solve with fine-tuning:",
        },
        {
          type: "code",
          lang: "json",
          code: `{\n  "type": "object",\n  "properties": {\n    "answer": { "type": "string" },\n    "grounded": { "type": "boolean" },\n    "citations": {\n      "type": "array",\n      "items": { "type": "string" }\n    }\n  },\n  "required": ["answer", "grounded", "citations"],\n  "additionalProperties": false\n}`,
        },
        {
          type: "p",
          text: "A schema enforced at decoding time cannot produce a malformed response, because invalid tokens are never sampled. That is a stronger guarantee than a fine-tune gives you, it costs nothing to change, and it works on any model supporting structured outputs. If your fine-tuning proposal exists to make the JSON parse reliably, this replaces it.",
        },
      ],
    },
    {
      heading: "How the three combine in a real production system",
      blocks: [
        {
          type: "p",
          text: "They are not competing options; they occupy different layers. A mature system usually looks like this: a small fine-tuned model classifies and routes the request cheaply; a retrieval layer assembles context with hybrid search and a reranker; a strong prompt on a capable general model does the reasoning and returns schema-constrained output; and a second small tuned model evaluates a sample of traffic.",
        },
        {
          type: "p",
          text: "Fine-tuning on top of RAG is a legitimate and underused pattern. Once retrieval is working, you can tune a model specifically on the skill of using retrieved context well — synthesising across passages, respecting the grounding contract, and saying plainly that the sources do not contain the answer. That is behaviour, which is what fine-tuning is for. It is a very different proposition from tuning a model on your documents and hoping it memorises them, which is the version that fails.",
        },
      ],
    },
    {
      heading: "A decision sequence you can run this week",
      blocks: [
        {
          type: "p",
          text: "Work through these in order and stop at the first one that resolves the failure. Each step is cheaper and faster to reverse than the one after it.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Build a failure set. Twenty to fifty real cases where the current behaviour is wrong, each labelled with what the correct output would have been. Without this you cannot tell whether any change helped.",
            "Classify each failure as missing knowledge, wrong format, or wrong judgement. This single categorisation resolves most of the RAG vs fine-tuning question before you write any code.",
            "For format failures, apply structured outputs and two examples drawn from the failure set. Re-measure.",
            "For knowledge failures, build the retrieval layer — hybrid search, reranking, and a grounding contract in the prompt. Measure retrieval precision separately from answer quality, or you will not know which half is broken.",
            "For judgement failures that survive several prompt rewrites, and only then, scope a fine-tune. Start with LoRA on the smallest model that could plausibly work, not the largest.",
            "For cost and latency problems on a stable, narrow task, consider distilling a large model's outputs into a small tuned one. This is a cost programme, not a quality programme — treat it as such and hold quality flat.",
          ],
        },
        {
          type: "p",
          text: "If the diagnosis stays unclear — failures that do not cluster, or retrieval that looks fine while the answers do not — the evaluation set is usually what needs fixing first. We scope this kind of work regularly, and it is a short conversation to establish which of the three levers your problem sits under before anyone commits a quarter to it.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is RAG better than fine-tuning?",
      answer:
        "For most business applications, yes — but they solve different problems. RAG is better whenever the model needs access to information it was never trained on, particularly if that information changes, is private to a customer, or has to be cited. Fine-tuning is better when the model already has the capability but will not reliably produce the format, tone or judgement you need. If your requirement involves company documents or current data, start with RAG.",
    },
    {
      question: "Can you use RAG and fine-tuning together?",
      answer:
        "Yes, and it is often the strongest combination. The pattern that works is retrieval for knowledge and fine-tuning for the skill of using that knowledge well — synthesising across retrieved passages, holding to a house format, and stating clearly when the sources do not contain the answer. Build and measure retrieval quality first, because tuning a generation model against a weak candidate set only teaches it to sound confident about poor evidence.",
    },
    {
      question: "Does a million-token context window make RAG unnecessary?",
      answer:
        "No. Input tokens are billed on every request, so pasting a large corpus into the prompt multiplies your cost by the number of questions asked. Long contexts also suffer measurable accuracy degradation for material buried in the middle. Retrieval additionally gives you per-request permission filtering, instant updates when a document changes, and a citation trail. Larger windows make retrieval easier to tune, not redundant.",
    },
    {
      question: "How much data do you need to fine-tune a model?",
      answer:
        "The number that matters is not the provider's minimum but how many examples cover the edges of the behaviour you are teaching. Several hundred carefully reviewed input/output pairs in the exact target format will usually outperform tens of thousands of scraped ones, because fine-tuning amplifies whatever is consistent in your data — including its mistakes. Budget more effort for curation and review than for the training run itself.",
    },
    {
      question: "What is the cheapest way to get reliable JSON out of a model?",
      answer:
        "Structured outputs with a JSON schema, enforced at decoding time. Because invalid tokens are never sampled, malformed output is impossible rather than merely unlikely, and it costs nothing beyond the tokens you were already spending. Fine-tuning for output format is only justified when the schema encodes conditional or domain logic that a JSON schema genuinely cannot express — which is rarer than most proposals assume.",
    },
  ],
};
