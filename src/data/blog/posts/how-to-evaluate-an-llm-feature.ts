import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "how-to-evaluate-an-llm-feature",
  title: "How to Evaluate an LLM Feature Before You Ship It",
  seoTitle: "How to Evaluate an LLM Feature Before Shipping",
  description:
    "Golden datasets, LLM-as-judge and regression tests: how to evaluate an LLM feature before release and catch silent model drift after it.",
  excerpt:
    "Evaluation is the discipline that separates teams shipping AI reliably from teams guessing. Here is how to build a golden dataset, choose scoring methods that catch real failures, and notice when a provider update quietly degrades your feature.",
  category: "AI Engineering",
  primaryKeyword: "how to evaluate an LLM feature",
  secondaryKeywords: [
    "LLM evaluation dataset size",
    "LLM-as-a-judge reliability",
    "prompt regression testing",
    "detecting model drift in production",
    "offline eval vs online monitoring LLM",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "ai-development",
  keyTakeaway:
    "To evaluate an LLM feature, score it against a fixed set of real user inputs with known-good expectations, and re-run that set on every prompt edit and every model change rather than reading a few outputs and deciding they look fine. Thirty to fifty inputs, stratified across the ways the feature can fail, is enough to catch the regressions that matter; hundreds are only needed to resolve differences of a few percentage points. Offline evaluation catches regressions before release, and sampled scoring of live traffic catches the failures your dataset never imagined.",
  sections: [
    {
      heading: "How to evaluate an LLM feature when “it looked good in testing” is all you have",
      blocks: [
        {
          type: "p",
          text: "The usual way an LLM feature is validated is that the person who wrote the prompt tries eight or ten inputs, likes what comes back, and ships. That process has two defects. The inputs were chosen by someone who knows what the prompt expects, so they are unrepresentative by construction. And the result is not written down anywhere, so the next prompt change has nothing to compare against — the only available answer to “did that make it better?” is a feeling.",
        },
        {
          type: "p",
          text: "Knowing how to evaluate an LLM feature is what converts that feeling into a number you can defend. It is also the cheapest quality intervention available: a spreadsheet of fifty labelled inputs and a script that scores them will catch more real regressions in a year than any amount of prompt craftsmanship. Teams that ship AI reliably are almost never the ones with better prompts. They are the ones who can tell, within ten minutes, whether a change helped.",
        },
        {
          type: "callout",
          text: "Without an evaluation set, every prompt change is a deploy to production with no test suite and no way to roll back with confidence, because nobody can describe what “working” looked like beforehand.",
        },
      ],
    },
    {
      heading: "What goes into a golden dataset, and where the inputs come from",
      blocks: [
        {
          type: "p",
          text: "A golden dataset is a fixed collection of inputs paired with what the system should do with them. The inputs must be real. Synthetic examples written by the same person who wrote the prompt inherit that person’s assumptions about how users phrase things, and users do not phrase things that way — they paste half a table, they write two sentences with no context, they attach a scanned PDF that is mostly a letterhead.",
        },
        {
          type: "p",
          text: "Pull inputs from production logs where you have a basis to use them, from support tickets, and specifically from the interactions that generated complaints. Then deliberately stratify, because a random sample of a week’s traffic is mostly the same easy case repeated. A useful set covers the happy path, the ambiguous input where two answers are defensible, the out-of-scope request the feature should decline, the adversarial input, the very long input near the context ceiling, and the degenerate input that is empty or garbage.",
        },
        {
          type: "p",
          text: "Label expected behaviour rather than expected text. For a classifier the label is the correct class. For extraction it is the field values. For open-ended generation, an exact expected string is useless, so the label becomes a set of assertions: facts that must appear, claims that must not, a maximum length, a required citation, a tone constraint. Writing those assertions forces a conversation about what the feature is actually for, which is frequently the most valuable output of the whole exercise.",
        },
        {
          type: "code",
          lang: "ts",
          code: "type GoldenCase = {\n  id: string;\n  stratum: \"happy\" | \"ambiguous\" | \"out-of-scope\" | \"adversarial\" | \"long\";\n  input: { ticketBody: string; customerTier: \"free\" | \"paid\" };\n  expect: {\n    queue: \"billing\" | \"technical\" | \"sales\" | \"decline\";\n    mustMention: string[];      // e.g. the invoice number present in the input\n    mustNotMention: string[];   // e.g. refund amounts the agent may not promise\n    maxWords: number;\n  };\n};",
        },
        {
          type: "p",
          text: "Keep the dataset in the repository next to the prompt. It is test data, it changes with the feature, and it should arrive in the same pull request as the change that made it necessary.",
        },
      ],
    },
    {
      heading: "How small can a useful evaluation set be?",
      blocks: [
        {
          type: "p",
          text: "Smaller than most teams assume, and the arithmetic is worth doing rather than guessing at. With thirty cases scored pass or fail, a single failure moves the score by 3.3 points. That resolution is plenty to see a metric fall from nearly perfect to badly broken, which is what a real regression looks like, and nowhere near enough to tell an 88 from a 91. Separating differences of a few percentage points needs hundreds of items — sampling statistics, not a property of language models.",
        },
        {
          type: "p",
          text: "So size the set to the decision you are making. Thirty to fifty well-chosen cases gives you a merge gate: did this prompt change break something obvious. A few hundred gives you the ability to choose between two prompts that both look fine. Composition matters more than volume in the first band; forty examples spread across five failure modes will tell you far more than five hundred near-duplicates from the same Tuesday.",
        },
        {
          type: "p",
          text: "Hold some of it back. If you tune the prompt against every case you own, you will eventually fit the prompt to those forty examples and learn nothing about the forty-first. Split into a development set you iterate against and a held-out set you only run before release, and resist the temptation to look at the held-out failures until you have stopped changing things.",
        },
      ],
    },
    {
      heading: "Which scoring method catches which failure?",
      blocks: [
        {
          type: "p",
          text: "There is no single scorer. Most working setups combine three or four, weighted so that the cheap deterministic checks run on everything and the expensive ones run on a sample. The table below is the shortlist worth choosing from.",
        },
        {
          type: "table",
          caption: "Evaluation methods for LLM features: coverage, cost and appropriate use",
          head: ["Method", "What it catches", "Cost per run", "When to use it"],
          rows: [
            [
              "Exact match against a label",
              "Wrong class, wrong route, changed canonical answer",
              "Negligible",
              "Classification, routing, any task with one correct answer",
            ],
            [
              "Structured assertions (schema, field values, must-contain, regex, numeric tolerance)",
              "Missing or invalid fields, format drift, banned content, hallucinated identifiers",
              "Negligible",
              "Extraction, tool arguments, anything your code parses",
            ],
            [
              "Programmatic groundedness checks",
              "Fabricated facts, citations pointing at documents that were never retrieved",
              "Negligible to low",
              "Retrieval-augmented answers and summarisation over supplied text",
            ],
            [
              "Embedding similarity to a reference answer",
              "Gross topic drift and truncation",
              "Low",
              "A coarse smoke test only; it correlates weakly with quality",
            ],
            [
              "LLM-as-judge against a written rubric",
              "Tone, completeness, instruction-following, unhelpful but well-formed answers",
              "Roughly one extra model call per case",
              "Open-ended generation where no deterministic answer exists",
            ],
            [
              "LLM-as-judge, pairwise against the current prompt",
              "Whether a change is better or worse than what is already live",
              "Two generations plus one judgement per case",
              "Prompt iteration and model upgrade decisions",
            ],
            [
              "Human review of a sample",
              "Everything the automated scorers miss, and whether the judge itself is trustworthy",
              "Person-minutes per case; the expensive one",
              "Designing the rubric, periodic audits, high-stakes outputs",
            ],
            [
              "Production feedback signals (thumbs down, edits, retries, escalation)",
              "Real dissatisfaction on inputs that were never in your dataset",
              "Free to collect, lagging and biased toward complainers",
              "Continuous monitoring after launch, and sourcing new golden cases",
            ],
          ],
        },
        {
          type: "p",
          text: "Order of preference is simple: if a failure can be detected by a deterministic assertion, never pay a model to detect it. Judges are for the residue that genuinely requires reading.",
        },
      ],
    },
    {
      heading: "LLM-as-judge: where it works and where it quietly misleads you",
      blocks: [
        {
          type: "p",
          text: "Using a model to grade another model’s output is the only affordable way to score open-ended generation at any volume, and it works well enough to be worth doing. It also has documented, reproducible biases, and a team that does not correct for them will end up optimising the feature toward the judge rather than toward the user.",
        },
        {
          type: "list",
          items: [
            "Position bias: in a pairwise comparison the judge disproportionately prefers whichever answer it sees first. Run every comparison in both orders and count a disagreement as a tie.",
            "Verbosity bias: longer answers score higher even when they add nothing. Put an explicit length expectation in the rubric and cap output length in the assertion layer.",
            "Self-preference: a judge tends to favour text produced by its own model family. Use a different family for judging than for generating where you can.",
            "Scale compression: on a one-to-ten scale a judge will use six through nine and almost nothing else. Use three or four discrete, defined levels instead of a numeric range.",
            "Rubric drift: an unanchored rubric means different things across runs. Anchor each level with a worked example of an output that earns it.",
          ],
        },
        {
          type: "p",
          text: "Two habits raise judge reliability more than any prompt tuning. First, grade against a reference answer wherever one exists — judging “is this as good as this known-good answer” is a far more stable question than judging quality in the abstract. Second, calibrate: have a human label thirty cases, run the judge over the same thirty, and measure agreement. If the judge and the human disagree on a third of them, the judge is a random number generator with good manners, and the rubric needs rewriting before the scores mean anything.",
        },
      ],
    },
    {
      heading: "Choosing metrics that map to a business outcome",
      blocks: [
        {
          type: "p",
          text: "An average helpfulness score of 4.2 is not a metric anyone can act on. It cannot be argued with, it cannot be traded off against latency or cost, and no one outside the engineering team can say whether 4.2 is acceptable. Metrics earn their place by naming a failure someone in the business cares about and counting it.",
        },
        {
          type: "p",
          text: "For a support classifier, the metric is the share of tickets routed to the wrong queue, because that converts directly into handling time. For invoice extraction it is the share of documents needing manual correction — the headcount the feature was meant to save. For a drafting assistant it is the share of drafts sent without edits, measurable in production with no judge at all. For a retrieval-backed answer it is the share containing a claim the retrieved documents do not support, because that is what produces a complaint.",
        },
        {
          type: "p",
          text: "Then separate gates from trends. Pick the single failure the feature is not allowed to have — usually a safety, correctness or compliance failure — and make it a hard threshold that blocks a release. Everything else is a trend line you watch and argue about. Teams that gate on five metrics simultaneously end up disabling the gate.",
        },
      ],
    },
    {
      heading: "Offline evaluation versus watching production",
      blocks: [
        {
          type: "p",
          text: "Offline evaluation runs your fixed dataset against a candidate prompt or model. It is fast, reproducible, comparable across versions and safe to run a hundred times a day. Its blind spot is that it only knows the inputs you gave it, so it cannot see distribution shift: a new customer segment, a new document format, a marketing campaign that brings in users who ask entirely different questions.",
        },
        {
          type: "p",
          text: "Production monitoring closes that gap by running the same assertions and a sampled judge over live traffic. The deterministic checks — schema validity, groundedness, banned content, length — are cheap enough to run on every response. The judge runs on a sample, and the rate is a budget decision. Alongside that, collect implicit signals, which are usually more honest than explicit ones: whether the user accepted the draft, how heavily they edited it, whether they immediately retried, whether the conversation escalated to a human.",
        },
        {
          type: "p",
          text: "The two halves should be joined by a single button. When a production response scores badly or a user complains, it should take one action to turn that request into a golden case with its expected behaviour filled in. That loop is what makes an evaluation set improve rather than decay, and its absence is why most datasets stop being representative within a quarter.",
        },
      ],
    },
    {
      heading: "How to evaluate an LLM feature change before it reaches main",
      blocks: [
        {
          type: "p",
          text: "Once the dataset exists, wire it into CI so that any change touching a prompt, a retrieval configuration, a chunking strategy, a tool definition or a model identifier triggers a run. Report the score against the previous commit rather than in isolation, because the number that matters is the delta. Block the merge on the hard gate, and post the per-stratum breakdown into the pull request so the reviewer can see that overall accuracy held steady while the adversarial stratum collapsed.",
        },
        {
          type: "p",
          text: "Store every run: commit, prompt version, model snapshot, dataset version, per-case results. The per-case detail is what turns a failing run into a fix, since “score fell four points” is not actionable but “these six cases flipped, and all six mention refunds” is a diagnosis. Fix the sampling seed and the judge’s temperature so that two runs of the same commit produce the same number; a scoring pipeline that is itself noisy cannot measure a small regression in anything else.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Run the development set locally while iterating on the prompt.",
            "Run the full set in CI on the pull request and diff against the base commit.",
            "Gate the merge on the one failure mode the feature is not allowed to have.",
            "Run the held-out set once before release, and treat a surprise there as a signal you overfitted.",
            "Schedule the same run weekly against the pinned production configuration to catch drift nobody deployed.",
          ],
        },
      ],
    },
    {
      heading: "Catching silent degradation when the provider updates a model",
      blocks: [
        {
          type: "p",
          text: "The failure mode with no deploy attached is the one evaluation exists for. If your code names a floating model alias rather than a dated snapshot, the provider can move that alias and your feature is running on a different model, with your prompt, with nothing in your changelog. The new model is usually better on average and worse on the specific thing your prompt depends on — a formatting quirk, a willingness to answer tersely, a particular way of handling an empty field.",
        },
        {
          type: "p",
          text: "Pin the dated snapshot in code, track the provider’s deprecation notices, and treat a model upgrade as a dependency bump: run the evaluation set against the candidate snapshot, compare it with the incumbent on the same dataset, and change the pin in a reviewed pull request with the score difference in the description. If the candidate loses on one stratum only, that is normally a prompt fix rather than a reason to stay behind.",
        },
        {
          type: "p",
          text: "Drift also arrives from your own side. A re-indexed vector store, a new document type from a large customer, or an upstream OCR change can each degrade output while every version identifier stays put. That is why the weekly run against the live configuration matters: it is the only check that notices when nothing changed on paper and the feature got worse anyway.",
        },
        {
          type: "p",
          text: "Standing up the first version of all this — dataset, scorers, CI job, production sampling — is normally a few days of work rather than a project, and it pays for itself on the first regression it catches before a customer does. If you are building an LLM feature and want a second opinion on what to measure and how hard to gate it, that is a conversation we are glad to have at ApexStack.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How many examples do I need in an LLM evaluation set?",
      answer:
        "Thirty to fifty real, stratified inputs is enough to catch the regressions worth catching. With thirty pass-or-fail cases a single failure moves the score by 3.3 points, which resolves a serious break clearly but cannot separate an 88 from a 91. If you need to choose between two prompts that both look fine, you need several hundred cases. Composition matters more than volume: forty examples across five failure modes beat five hundred near-duplicates.",
    },
    {
      question: "Can I use an LLM to grade another LLM’s output?",
      answer:
        "Yes, with correction for known biases. Judges prefer whichever answer they see first, prefer longer answers, and tend to favour output from their own model family. Run pairwise comparisons in both orders, use three or four anchored levels rather than a ten-point scale, and grade against a reference answer where one exists. Then calibrate against thirty human-labelled cases and measure agreement before trusting the scores.",
    },
    {
      question: "What is the difference between offline evaluation and production monitoring?",
      answer:
        "Offline evaluation scores a fixed dataset against a candidate prompt or model. It is fast, reproducible and runs before merge, but it only knows the inputs you gave it. Production monitoring runs the same deterministic assertions over live traffic plus a sampled judge, so it catches distribution shift — new customer types, new document formats, questions nobody anticipated. You need both, connected so a bad production case becomes a golden case in one step.",
    },
    {
      question: "How do I know if a provider model update broke my feature?",
      answer:
        "You will not, unless you measure it. Pin a dated model snapshot rather than a floating alias so updates cannot arrive without a deploy, then run your evaluation set against any candidate snapshot before changing the pin. Also schedule the same run weekly against the live configuration, because degradation can come from your own retrieval index or document mix while every version identifier stays unchanged.",
    },
    {
      question: "Do I need an evaluation set for a simple classification feature?",
      answer:
        "Classification is the easiest case to evaluate and the cheapest to get wrong silently, so yes. The labels already exist, scoring is exact match, and a run costs almost nothing. Track accuracy per class rather than overall, because an overall figure hides the rare class that has quietly stopped working, and the rare class is usually the expensive one — the escalation, the fraud flag, the cancellation request.",
    },
    {
      question: "How often should we run LLM evaluations?",
      answer:
        "On every pull request that touches a prompt, retrieval configuration, tool definition or model identifier, comparing against the base commit rather than an absolute threshold. Run the held-out set once before each release. Then schedule a weekly run against the live production configuration to catch drift that arrived without a deploy, whether from a provider change, a re-indexed vector store or a shift in the documents your users send.",
    },
  ],
};
