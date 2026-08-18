import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "ai-agent-architecture-patterns",
  title: "AI Agent Architecture: Patterns and Failure Modes",
  seoTitle: "AI Agent Architecture Patterns and Failure Modes",
  description:
    "The five AI agent architecture patterns, what each is actually for, how they fail in production, and the controls that keep cost and looping in check.",
  excerpt:
    "Five agent architecture patterns, the failure modes each one brings with it, and why most systems described as agents are better built as a fixed pipeline with one model call per step.",
  category: "AI Engineering",
  primaryKeyword: "AI agent architecture patterns",
  secondaryKeywords: [
    "multi-agent system design",
    "LLM agent failure modes",
    "when to use an agent instead of a pipeline",
    "agent orchestration patterns",
    "controlling AI agent costs",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "ai-development",
  keyTakeaway:
    "AI agent architecture patterns come in five practical shapes: a single agent with tools, planner-executor, a sequential pipeline, parallel fan-out with a synthesiser, and a supervisor delegating to specialists. Pick the least autonomous pattern that solves the problem, because most systems described as agents have a known sequence of steps and run cheaper, faster and more debuggably as a fixed pipeline with one model call per step. Where genuine autonomy is required, it must ship with a step limit, a spend ceiling, structured tool schemas and checkpointing, or the first unusual input will produce an unbounded run.",
  sections: [
    {
      heading: "Does the system need to be an agent at all?",
      blocks: [
        {
          type: "p",
          text: "The word agent now covers everything from a chat loop with a search tool attached to a system that writes its own plan and runs it against production infrastructure. The distinction that matters architecturally is narrow: how much of the control flow is decided by the model at runtime rather than by your code at design time. Every unit of control flow handed to the model buys flexibility and spends predictability.",
        },
        {
          type: "callout",
          text: "The useful definition of an agent is not a system that uses tools. It is a system where the model, not your code, decides what happens next.",
        },
        {
          type: "p",
          text: "Most work that arrives described as agent work has a fixed sequence. Invoice extraction, ticket triage, contract clause review, lead enrichment — the steps never vary. Read the input, classify it, extract fields, validate against a schema, look one thing up, write a record. A model asked to decide that sequence on every run will mostly rediscover the same sequence, at the cost of extra tokens, extra latency and a real chance of deciding differently on a Tuesday.",
        },
        {
          type: "p",
          text: "The strongest advice in this area is unglamorous: write the sequence down as code, put one model call in each step, and give each call a narrow job with a typed output. You keep what you are actually paying the model for — language understanding, extraction, judgement — and you keep what makes systems operable: deterministic ordering, per-step retries, per-step tests, and a stack trace that points at a line number.",
        },
      ],
    },
    {
      heading: "What are the five AI agent architecture patterns worth knowing?",
      blocks: [
        { type: "h3", text: "Single agent with tools" },
        {
          type: "p",
          text: "One model, a loop, and a set of tools it can call until it decides it is finished. The simplest genuinely agentic shape, and the right one for open-ended exploration where the next step depends on what the last step returned — investigating a bug, or working through a customer’s account until a discrepancy is explained. It degrades as the tool surface grows: the model starts calling the plausible-sounding tool rather than the correct one.",
        },
        { type: "h3", text: "Planner-executor" },
        {
          type: "p",
          text: "One call produces a plan as structured data; a cheaper execution layer runs the steps. The separation matters because the plan becomes an inspectable artefact — validate it against a schema, reject it if it names tools that do not exist, show it to a human before anything is written. Use it where the sequence varies but the valid steps are enumerable, such as data migration runbooks or multi-system provisioning.",
        },
        { type: "h3", text: "Sequential pipeline" },
        {
          type: "p",
          text: "Fixed stages, one model call per stage, each stage typed. Not an agent in the strict sense, which is precisely the point. Cost per run is known before you start, latency is knowable, and each stage can be evaluated against its own test set — the only practical way to find which stage is responsible when overall quality drops.",
        },
        { type: "h3", text: "Parallel fan-out with a synthesiser" },
        {
          type: "p",
          text: "The same input goes to several calls at once — different documents, jurisdictions or candidate answers — and a final call reconciles the results. Fan-out converts a latency problem into a cost problem, usually a good trade for user-facing work. The synthesiser is the risk: it sees a large concatenated context, and where branches disagree it will often produce a confident blend rather than surfacing the conflict. Make disagreement an explicit field in its output schema.",
        },
        { type: "h3", text: "Supervisor with specialists" },
        {
          type: "p",
          text: "A routing model dispatches to sub-agents that each own a domain and a narrow tool set. This is the pattern people reach for too early. It genuinely helps when the tool surface is too large for one context, when sub-tasks need different models or different data-access permissions, or when teams own their sub-agent independently. It hurts when used to organise a problem a switch statement would have routed, because you have paid for a model call to make a decision with one correct answer.",
        },
        {
          type: "table",
          caption:
            "The five patterns against what they are for, how they behave on cost, and how they break first.",
          head: [
            "Pattern",
            "Best used for",
            "Cost profile",
            "Primary failure mode",
            "Control that matters most",
          ],
          rows: [
            [
              "Single agent with tools",
              "Open-ended investigation where the next step depends on the last result",
              "Unbounded until capped; varies enormously per run",
              "Infinite or near-infinite looping; tool-call hallucination as the tool set grows",
              "Hard step limit plus a per-run spend ceiling",
            ],
            [
              "Planner-executor",
              "Variable sequences drawn from a known, enumerable set of steps",
              "One expensive planning call plus cheap execution; fairly predictable",
              "A plausible but invalid plan that only fails halfway through execution",
              "Schema validation of the plan before any step runs",
            ],
            [
              "Sequential pipeline",
              "Known workflows: extract, classify, validate, write",
              "Fixed and calculable before the first run",
              "Error compounding — each stage inherits the previous stage’s mistakes",
              "Per-stage evaluation sets and a validation gate between stages",
            ],
            [
              "Parallel fan-out with synthesiser",
              "Comparing many sources or candidates under a latency budget",
              "High but bounded; scales linearly with branch count",
              "The synthesiser blending contradictory branches into a confident wrong answer",
              "An explicit conflict field in the synthesiser output schema",
            ],
            [
              "Supervisor with specialists",
              "Large tool surfaces, mixed models, or separate data-access boundaries",
              "Highest per task; routing overhead on every request",
              "Losing the thread — context and intent decay across handoffs",
              "A shared, structured state object rather than passing prose between agents",
            ],
          ],
        },
      ],
    },
    {
      heading: "Which failure modes actually show up once real traffic arrives?",
      blocks: [
        {
          type: "p",
          text: "None of these are exotic. They are the ordinary behaviour of a system that decides its own control flow, and each is cheap to prevent at design time and expensive to discover in production.",
        },
        {
          type: "list",
          items: [
            "Infinite loops. The model retries a failing tool with a slightly different argument, gets the same error, and repeats until something else times out.",
            "Context window exhaustion. Long runs accumulate every tool result in the transcript. Quality falls before the hard limit is reached, because the instructions that mattered are now buried thousands of tokens back.",
            "Error compounding. Stage four is working faithfully from stage three’s incorrect extraction, so the output is internally consistent and entirely wrong.",
            "Tool-call hallucination. The model invents a tool that does not exist, or supplies arguments in the shape it expected rather than the shape you published.",
            "Cost runaway. One unusual input causes a run twenty times longer than the median, and without a per-run ceiling a single malformed document can outspend a month of normal traffic.",
            "Losing the thread. Over many turns the original constraint — the currency, the tenant, the compliance rule stated at the start — quietly stops being applied.",
          ],
        },
        {
          type: "p",
          text: "Error compounding deserves particular attention because the arithmetic is unintuitive. If every step is independently correct 95% of the time, a ten-step chain succeeds on roughly 60% of runs; at 98% per step, a twenty-step chain lands near 67%. Nothing is broken there — each component is performing to a specification that sounds excellent in isolation. Long autonomous chains are not a stretch goal you reach with a better model; they are an arithmetic problem, solved by shortening chains, adding validation gates that stop errors propagating, or putting a human at the step where a mistake becomes expensive.",
        },
      ],
    },
    {
      heading: "How do you put a ceiling on an agent’s cost and runtime?",
      blocks: [
        {
          type: "p",
          text: "Three limits, enforced in your code rather than requested in a prompt: maximum steps, maximum spend, maximum wall clock. A prompt asking the model to be efficient is a suggestion. A counter in the loop is a guarantee. All three are needed because they fail differently — a cheap model can burn a hundred steps without hitting a dollar limit, and a single call against a very long context can blow the budget in one step.",
        },
        {
          type: "code",
          lang: "typescript",
          code: `type RunBudget = {\n  maxSteps: number;\n  maxSpendUsd: number;\n  maxWallClockMs: number;\n};\n\nasync function runAgent(task: Task, budget: RunBudget): Promise<RunResult> {\n  const startedAt = Date.now();\n  let steps = 0;\n  let spentUsd = 0;\n\n  while (true) {\n    if (steps >= budget.maxSteps) return halt("step-limit", steps, spentUsd);\n    if (spentUsd >= budget.maxSpendUsd) return halt("budget", steps, spentUsd);\n    if (Date.now() - startedAt >= budget.maxWallClockMs) {\n      return halt("timeout", steps, spentUsd);\n    }\n\n    const turn = await model.step(task);\n    steps += 1;\n    spentUsd += turn.costUsd;\n\n    if (turn.done) return finish(turn.result, steps, spentUsd);\n    await executeToolCall(turn.toolCall);\n  }\n}`,
        },
        {
          type: "p",
          text: "Set the limits from observed behaviour, not intuition: record the distribution of steps and spend, then put the ceiling above the 95th percentile of successful runs. Anything exceeding it is far more likely pathological than legitimately hard. Halting cleanly, with partial state preserved and an alert raised, is the design rather than a failure of it.",
        },
      ],
    },
    {
      heading: "Why context window exhaustion is a design problem, not a model problem",
      blocks: [
        {
          type: "p",
          text: "A larger context window postpones this failure rather than removing it. Every tool result appended to the transcript competes for the model’s attention with the instructions that define correct behaviour, and the practical quality ceiling arrives well before the documented token limit. The fix is to stop treating the transcript as the system’s memory.",
        },
        {
          type: "p",
          text: "Keep a structured state object that your code owns — the task, the constraints, the findings so far, the open questions — and rebuild the model’s context from it on each step rather than replaying the whole history. Write large tool outputs to storage and pass back an identifier and a short summary. Where history matters, retrieve the relevant slice. And restate the hard constraints on every turn, because a constraint mentioned only at turn one stops being honoured by turn thirty.",
        },
      ],
    },
    {
      heading: "How do structured tool schemas prevent hallucinated calls?",
      blocks: [
        {
          type: "p",
          text: "Tool-calling APIs accept JSON Schema definitions, and the quality of those schemas does more for reliability than most prompt engineering. Prefer enums over free-text strings wherever the valid inputs are finite: a status field defined as an enum of four values cannot receive a fifth. Give every parameter a description stating the unit, the format and the failure condition — that description is the only documentation the model reads.",
        },
        {
          type: "list",
          items: [
            "Validate every tool call against its schema before execution and return validation errors to the model as structured results rather than throwing — a well-formed error message is something the model can correct on the next turn.",
            "Keep the tool surface small. Split large surfaces across specialists rather than exposing forty tools to one context.",
            "Make write operations idempotent and key them on a caller-supplied identifier, so a retried call updates rather than duplicates.",
            "Put any irreversible action — payment, deletion, outbound email, production deployment — behind an explicit confirmation step that a human or a deterministic rule owns, never the model alone.",
          ],
        },
      ],
    },
    {
      heading: "What does checkpointing buy on a long-running agent?",
      blocks: [
        {
          type: "p",
          text: "A run that takes eleven minutes and dies at minute ten because a downstream API returned a 503 has wasted every token in it. Persist the structured state after each step, key it to a run identifier, and make resumption a first-class operation. A transient failure then costs one step rather than an entire run, a mid-processing deploy is survivable, and you can replay a bad run step by step.",
        },
        {
          type: "p",
          text: "It also makes the human-in-the-loop pattern practical. A run that pauses for approval and resumes hours later is straightforward when the state is durable and close to impossible when it lives in a process’s memory. Anything a reviewer must sign off mid-flight should be designed for this on day one.",
        },
      ],
    },
    {
      heading:
        "How do you choose between AI agent architecture patterns for a real system?",
      blocks: [
        {
          type: "p",
          text: "Start from the sequence. If you can write the steps down and they do not change, build a pipeline and stop there — you will finish sooner, spend less per run, and have something you can test. If the sequence varies but the steps come from a known set, use planner-executor and validate the plan before executing a single step. If the next step genuinely cannot be known until the previous one returns, you have a real case for a single agent with tools, and it needs the full set of controls from the moment it first runs against real data. Reach for a supervisor only when the tool surface, the model mix or the permission boundaries force the split.",
        },
        {
          type: "p",
          text: "Autonomy is a cost you pay for flexibility you can prove you need, and most systems that became hard to operate paid it early. Choose the least autonomous pattern that works, measure it, and add autonomy only where the fixed sequence demonstrably fails.",
        },
        {
          type: "p",
          text: "If you are weighing up one of these patterns for a system that has to run unattended against real money or real customer data, we are happy to talk it through — ApexStack builds this kind of AI infrastructure, and an hour spent on the control-flow decision usually saves a rebuild.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "When should I use a multi-agent system instead of a single agent?",
      answer:
        "Split into multiple agents when one context cannot hold the tool surface, when different sub-tasks need different models or different data-access permissions, or when separate teams need to own their part independently. Do not split to organise a problem that routing code would handle, because each extra agent adds a model call, a handoff where context degrades, and another place for the run to fail.",
    },
    {
      question: "How do I stop an AI agent from looping forever?",
      answer:
        "Enforce three limits in your own code rather than in the prompt: a maximum step count, a maximum spend per run, and a maximum wall-clock duration. Set each above the 95th percentile of your observed successful runs. Also detect repetition directly — if the same tool is called with the same arguments twice in a row, halt and escalate rather than allowing a third attempt.",
    },
    {
      question: "What is the difference between an agent and a workflow?",
      answer:
        "In a workflow the control flow is written in your code, so the sequence of steps is fixed and known before the run starts. In an agent the model decides what happens next at runtime. Workflows give predictable cost, latency and debugging; agents give flexibility for tasks whose steps cannot be enumerated in advance. Most production systems need the workflow.",
    },
    {
      question: "Why does agent accuracy fall as the number of steps increases?",
      answer:
        "Per-step error rates multiply. A chain where each step is correct 95% of the time succeeds on roughly 60% of ten-step runs; at 98% per step, a twenty-step chain lands near 67%. No individual component is malfunctioning. The remedies are shorter chains, validation gates between steps that stop bad output propagating, and human review at the step where an error becomes expensive.",
    },
    {
      question: "How much does it cost to run an AI agent in production?",
      answer:
        "Cost is driven by tokens per step multiplied by steps per run, and the step count is what varies. Median runs are rarely the problem; the long tail is. Instrument spend per run from the first day, look at the distribution rather than the average, and set a hard per-run ceiling so a single unusual input cannot cost more than a normal day of traffic.",
    },
    {
      question: "Do I need a framework to build agent architectures?",
      answer:
        "No. The core loop is a while statement, a step counter and a tool dispatcher, and writing it yourself keeps the control flow visible where you will eventually need to debug it. Frameworks are worth it when you want their durable execution, checkpointing and tracing rather than their abstractions, since those are the parts that take real time to build well.",
    },
  ],
};
