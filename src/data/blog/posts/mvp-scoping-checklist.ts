import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "mvp-scoping-checklist",
  title: "MVP Scoping Checklist: What to Prepare Before You Brief an Agency",
  seoTitle: "MVP Scoping Checklist for Founders: 11 Things to Prepare",
  description:
    "An MVP scoping checklist for founders: the 11 answers to prepare before your first agency call, what each tests, and why hiding budget costs you.",
  excerpt:
    "Eleven things to have written down before your first agency call, and what a good agency actually does with each answer. Prepared briefs get narrower estimates and shorter builds.",
  category: "MVP & Startups",
  primaryKeyword: "MVP scoping checklist",
  secondaryKeywords: [
    "what to prepare before hiring a development agency",
    "how to brief a software development agency",
    "MVP requirements document",
    "should I tell an agency my budget",
    "MVP discovery questions",
  ],
  published: "2026-08-12",
  authorId: "leadership-03",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "An MVP scoping checklist should cover eleven things before your first agency call: a one-sentence problem statement, the primary user and the workaround they use today, the single critical user journey, an explicit out-of-scope list for v1, success metrics, systems you must integrate with, data you already hold, compliance constraints, a budget range, the approval path, and the launch deadline with the reason behind it. Agencies price uncertainty rather than effort, so every question answered in advance narrows the estimate and shortens the build. The two answers founders most often withhold — budget and the reason behind the deadline — are the two that most change what gets proposed.",
  sections: [
    {
      heading: "What actually goes wrong on the first agency call",
      blocks: [
        {
          type: "p",
          text: "Most first calls fail the same way. The founder describes a product, the agency asks questions nobody has considered, both sides improvise, and the call ends with a promise of a proposal built on guesses. It arrives wide, then either frightens the founder off or gets renegotiated in month two.",
        },
        {
          type: "p",
          text: "Working through an MVP scoping checklist first converts those guesses into constraints. The eleven items below change what gets built or what it costs. They are deliberately not a feature list, the easiest document to write and the least useful to send. None require a technical background: an agency can design the system, but not invent your constraints.",
        },
      ],
    },
    {
      heading: "What an MVP scoping checklist is really testing",
      blocks: [
        {
          type: "p",
          text: "An estimate is not a measurement of effort. It is a range reflecting how much the estimator does not know, widened in proportion to that uncertainty. Two identical feature lists can be quoted a factor of three apart because one has a named user, a documented integration and a fixed date, and the other has none.",
        },
        {
          type: "p",
          text: "Each item removes a source of variance: answering them in advance buys a narrower number and a shorter discovery. It is also how you tell firms apart — one that takes your feature list at face value and prices it line by line has told you how the project will run.",
        },
        {
          type: "callout",
          text: "If a prospective partner does not push back on something in your brief within the hour, treat that as a signal rather than politeness. Scoping is an argument worth having before a contract exists.",
        },
      ],
    },
    {
      heading: "The problem statement, the user, and the workaround they use today",
      blocks: [
        { type: "h3", text: "1. One sentence describing the problem, with no solution in it" },
        {
          type: "p",
          text: "Name who has the problem and what it costs them, with no mention of an app or a platform: clinic managers spend two hours every Monday rebuilding a rota because availability arrives by text. That is testable. We are building an AI-powered scheduling platform is not, because it asserts the answer. A good agency uses the sentence as the tie-breaker for later scope arguments — does this reduce the two hours. Otherwise disputes are settled by seniority, which is how scope grows.",
        },
        { type: "h3", text: "2. The primary user, singular, and what they do instead today" },
        {
          type: "p",
          text: "Name one user type, not three segments. Then describe what that person does today to cope: the spreadsheet, the group chat, the paper form. The workaround is the most informative line in the brief: it proves the problem is real, because somebody already pays for it in time, and it sets the bar you must clear, since a product slower than the spreadsheet will not be adopted. It usually contains the data model too — those columns are your entities, and the messy ones hide the logic.",
        },
      ],
    },
    {
      heading: "One critical journey in, everything else explicitly out",
      blocks: [
        { type: "h3", text: "3. The single journey that has to work" },
        {
          type: "p",
          text: "Write one end-to-end path, step by step, from trigger to the outcome with value. A clinic manager opens the rota on Monday, sees who has declared availability, drags three shifts, publishes, and affected staff are notified. Eight to twelve steps is usually right; fewer means you skipped the hard part. This is what an agency estimates against and demos back, and it exposes hidden work at once: publishes implies notifications, delivery preferences and knowing who a change affects.",
        },
        { type: "h3", text: "4. A written out-of-scope list for v1" },
        {
          type: "p",
          text: "List what is not in the first version, and mark each item deferred or abandoned. No mobile apps. No single sign-on. No multi-currency. Reporting limited to one export. The distinction matters: deferred items shape the design, since storing money with a currency code from day one costs nothing now and a painful migration later, while abandoned items simplify it.",
        },
        {
          type: "callout",
          text: "If you cannot name the one journey that must work, v1 does not exist yet — you have a feature list waiting on a decision somebody must make eventually. Making it in a document is far cheaper than in month three.",
        },
      ],
    },
    {
      heading: "How you will know v1 worked",
      blocks: [
        { type: "h3", text: "5. Success metrics, with a number and a date" },
        {
          type: "p",
          text: "One primary measure and at most two supporting ones, each with a threshold and a date: twenty of thirty managers publish a rota in month one; Monday preparation drops below thirty minutes by quarter end. Improved efficiency cannot be designed for, so it cannot be traded against cost. A measurable target also implies instrumentation, a line item. Stated on day one, events are emitted as features are built, nearly free; retrofitted after launch it means reopening signed-off code, and the first month of usage data does not exist.",
        },
      ],
    },
    {
      heading: "Integrations, data and compliance: where estimates move",
      blocks: [
        { type: "h3", text: "6. Every system this must talk to, and who owns the credentials" },
        {
          type: "p",
          text: "List each system by name, what flows in which direction, and who inside your organisation controls access. The spread is enormous and unrelated to how important an integration seems: a service with public REST documentation and a free sandbox is often two days, while one with no sandbox, credentials gated behind an account manager and a nightly CSV over SFTP is a fortnight plus a schedule risk you do not control. Many delays are not engineering but waiting on credentials from a third party whose relationship is with you.",
        },
        { type: "h3", text: "7. The data you already hold" },
        {
          type: "p",
          text: "Describe format, rough volume and quality. Four hundred spreadsheet rows with inconsistent country spellings is a different project from a four-million-row MySQL export with no foreign keys and three columns called status. Say whether it must migrate at launch, and who may see it. Migration is the classic underestimate: transformation is straightforward, reconciliation is not, because someone who trusts the old system must be shown nothing was lost.",
        },
        { type: "h3", text: "8. Compliance and data-residency constraints" },
        {
          type: "p",
          text: "State the regimes that apply, even if unsure. GDPR covers EU and UK personal data wherever your company sits, with extra conditions on special-category data under Article 9. US health data brings HIPAA, which requires business associate agreements with every subprocessor touching protected health information, constraining which hosting and analytics tools may be used at all. Card details bring PCI DSS, where never letting card data reach your servers is the difference between a short self-assessment questionnaire and a long one. Mention any enterprise buyer asking about SOC 2: a Type II report covers an observation window, commonly three to twelve months, so controls must predate the audit.",
        },
      ],
    },
    {
      heading: "Budget, approval path and deadline: the three answers founders withhold",
      blocks: [
        { type: "h3", text: "9. A budget range, and why hiding it wastes your own time" },
        {
          type: "p",
          text: "Withholding the budget is an attempt to avoid being quoted up to it. What it does is force the agency to propose the median of everything it has built before — too large for a founder testing a hypothesis, too small for one who needed the integration and the audit trail. You then spend two more calls converging on a number you already knew.",
        },
        {
          type: "p",
          text: "A range with a reason works best — sixty thousand approved, eighty if the case is made — because it tells an agency which version to design. The bands below are ranges observed across the market for outsourced MVP builds, not anybody’s rate card; they move with the team’s location, seniority mix and how much design is included.",
        },
        {
          type: "table",
          caption: "Observed market ranges for outsourced MVP builds, USD",
          head: ["Budget band", "What that scope usually buys", "What it does not include"],
          rows: [
            [
              "Under $25,000",
              "One journey, one role, no integrations, a template",
              "Custom design, migration, compliance evidence, later support",
            ],
            [
              "$25,000 to $60,000",
              "One or two journeys, bespoke design, one simple integration, basic analytics",
              "Complex permissions, legacy migration, regulated hosting",
            ],
            [
              "$60,000 to $150,000",
              "Several journeys, two or three integrations, role-based access, a real migration, a lasting pipeline",
              "Audit readiness, high availability, multi-region residency",
            ],
            [
              "Above $150,000",
              "Regulated data, enterprise SSO, awkward legacy integrations, native plus web",
              "Rarely an MVP — check whether v1 has quietly become v2",
            ],
          ],
        },
        { type: "h3", text: "10. Who decides, and who can overturn it later" },
        {
          type: "p",
          text: "Name who signs, who is consulted, and any review that happens afterwards — a board, an investor, an IT security questionnaire, procurement. The failure this prevents is common: a project agreed by a founder and stopped in week six by a security review nobody mentioned. Decide too who is available week to week, since MVPs are blocked by unanswered questions more often than by hard problems.",
        },
        { type: "h3", text: "11. The deadline, and the reason behind it" },
        {
          type: "p",
          text: "Dates without reasons are treated as preferences and slip accordingly. Dates with reasons are constraints to design around, and the reason decides what may be cut. A trade show means the demo path must be flawless and the admin screens can stay a database client for a fortnight. An expiring licence on the system you are replacing makes the migration the deadline. If the date is arbitrary, say so — that turns a fixed-date negotiation into a fixed-scope one.",
        },
      ],
    },
    {
      heading: "The MVP scoping checklist in one table",
      blocks: [
        {
          type: "p",
          text: "Work down the first column, two or three sentences each. It should fit on two pages; at ten you have written a specification, and specifications drafted this early encode solutions, not constraints.",
        },
        {
          type: "table",
          caption: "The eleven items, weak versus strong answers, and their use",
          head: ["What to prepare", "A weak answer", "A strong answer", "What the agency does with it"],
          rows: [
            [
              "Problem statement",
              "We are building a scheduling platform",
              "Managers lose two hours each Monday rebuilding a rota from texts",
              "Settles later scope arguments objectively",
            ],
            [
              "Primary user",
              "Clinics, staff and head office",
              "The clinic manager, one per site, about thirty",
              "Designs one workflow, not an average of three",
            ],
            [
              "Current workaround",
              "They do it manually",
              "A shared spreadsheet and group chat, rebuilt weekly",
              "Reads the data model out of it; sets the bar",
            ],
            [
              "The critical journey",
              "Managers manage rotas",
              "Eight to twelve numbered steps, opening to notification",
              "Estimates, sequences and demos against it",
            ],
            [
              "Out of scope for v1",
              "We will see how it goes",
              "No apps, SSO or multi-currency; multi-site deferred",
              "Designs for deferred items, not abandoned ones",
            ],
            [
              "Success metric",
              "Improve efficiency",
              "Twenty of thirty publish in month one; prep under thirty minutes",
              "Instruments events during the build",
            ],
            [
              "Integrations",
              "It should connect to our systems",
              "Named systems, flow direction, sandbox, credential owner",
              "Prices each separately; starts credential requests early",
            ],
            [
              "Existing data",
              "We have some data",
              "Four hundred rows, inconsistent names, migrate at launch",
              "Scopes transformation and reconciliation",
            ],
            [
              "Compliance",
              "Nothing special",
              "EU personal data, no health data, one buyer asked about SOC 2",
              "Constrains hosting, logging and vendors upfront",
            ],
            [
              "Budget range",
              "What would you charge",
              "Sixty thousand approved, eighty if the case is made",
              "Proposes the version that fits, or says none does",
            ],
            [
              "Decision path",
              "I decide",
              "I sign, co-founder consults, IT security reviews before go-live",
              "Front-loads the security questionnaire",
            ],
            [
              "Deadline and reason",
              "As soon as possible",
              "March 12th, because that is the trade show",
              "Polishes the demo path, defers admin screens",
            ],
          ],
        },
      ],
    },
    {
      heading: "What to send ahead of the call, and what to expect back",
      blocks: [
        {
          type: "p",
          text: "Send the two pages a day or two ahead, not during the call. Reading it in advance lets the hour be spent on disagreement rather than transcription, and disagreement is the only part carrying information.",
        },
        {
          type: "list",
          items: [
            "The two-page brief, with anything you cannot answer marked unknown rather than filled with something plausible.",
            "One screenshot of the current workaround — the actual spreadsheet, form or thread. Worth more than a page of description.",
            "Anything already written that acts as a constraint: a design system, a mandated hosting arrangement, a security questionnaire already sent to you.",
          ],
        },
        {
          type: "p",
          text: "What comes back should be a range, the assumptions it depends on, an explicit list of exclusions, and at least one place the agency disagrees with your scope. A proposal with one precise number and no assumptions is not more confident — it has moved the uncertainty into the change-request process.",
        },
        {
          type: "p",
          text: "If you have worked through this MVP scoping checklist and want a second read before going to market, we are happy to look at a brief and say where the estimate will be widest and why, whether or not the build ends up with us.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What should I send an agency before the first call?",
      answer:
        "A two-page brief covering the problem in one sentence, the primary user and their current workaround, the single critical journey, what is out of scope for v1, your success metric, integrations, existing data, compliance constraints, budget range, approval path and deadline. Add a screenshot of the workaround. Send it a day or two ahead so the call is spent on disagreement rather than on you reading it aloud.",
    },
    {
      question: "Should I tell a development agency my budget?",
      answer:
        "Yes, as a range with a reason. Withholding it does not prevent being quoted to the maximum; it forces the agency to propose the median of everything it has built before, which is wrong in both directions and costs two extra calls to correct. A range lets a good agency design the version of the project that fits, and tell you honestly if your scope does not fit inside it.",
    },
    {
      question: "How detailed should an MVP spec be before getting quotes?",
      answer:
        "Two pages of constraints rather than ten pages of features. Agencies price uncertainty, so what narrows an estimate is knowing the user, the one journey, the integrations, the data, the compliance regime and the deadline. A long feature list encodes solution decisions you have not earned yet and often has to be unpicked during discovery, which costs time you are paying for.",
    },
    {
      question: "How long should MVP scoping take before a build starts?",
      answer:
        "Preparing the brief is a few hours of your own time. A paid discovery phase with an agency typically runs one to three weeks depending on integrations and compliance, and produces the journey definition, a technical approach, a milestone plan and a firmer range. If an agency proposes months of discovery for a single-journey MVP, ask what specifically is uncertain enough to justify it.",
    },
    {
      question: "What if I do not know my success metric yet?",
      answer:
        "Say that explicitly rather than inventing one. Testing whether anyone will use the product at all is a legitimate goal, and it changes the design — faster instrumentation, a shorter build, less durability that a discarded product would never need. What matters is that the uncertainty is stated, because an unstated metric becomes an assumed one, and the assumption will not be yours.",
    },
    {
      question: "Do I need wireframes or designs before briefing an agency?",
      answer:
        "No, and rough ones can hurt. Wireframes tend to be read as decisions, so an agency prices what you drew rather than proposing something better. A written journey with numbered steps conveys the same intent without fixing the interface. If your organisation already requires a design system or brand guidelines, send those, because they are a genuine constraint on the work.",
    },
  ],
};
