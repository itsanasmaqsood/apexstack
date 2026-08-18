import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "in-house-team-vs-agency-vs-freelancers",
  title: "In-House Team vs Agency vs Freelancers: The Real Cost Comparison",
  seoTitle: "In-House Team vs Development Agency vs Freelancers",
  description:
    "In-house team vs development agency vs freelancers: what each really costs, how fast each starts, and when hiring an agency is the wrong call.",
  excerpt:
    "A three-way comparison of in-house hiring, agencies and freelancers on fully loaded cost, speed to start, retention risk and quality control — including the situations where each one is the wrong answer.",
  category: "MVP & Startups",
  primaryKeyword: "in-house team vs development agency",
  secondaryKeywords: [
    "cost of hiring an in-house developer",
    "software development agency cost vs employee",
    "when to hire freelancers instead of an agency",
    "fully loaded cost of employment for engineers",
    "outsourcing software development pros and cons",
  ],
  published: "2026-08-12",
  authorId: "leadership-01",
  serviceSlug: "product-engineering",
  keyTakeaway:
    "In-house team vs development agency is not a salary-versus-rate comparison: a permanent engineer costs roughly 1.25–1.4x base salary once employer taxes, benefits, equipment, licences and recruitment fees are added, and that cost continues through holidays, notice periods and gaps between projects. Agencies cost more per hour but only for the hours you use, and they arrive as a formed team, so they win on bounded work with a deadline. Freelancers are cheapest and fastest for a single well-specified task, and carry the highest quality variance and the highest risk of walking away mid-build.",
  sections: [
    {
      heading: "What does an in-house engineer actually cost beyond the salary line?",
      blocks: [
        {
          type: "p",
          text: "The figure in the offer letter is the smallest number in the calculation. Most in-house team vs development agency comparisons fail at the first step, when someone sets a $140,000 salary against a $22,000 monthly invoice and concludes the agency is expensive. One is a wage; the other is a delivered-capacity price with employment costs, management and tooling already inside it.",
        },
        {
          type: "p",
          text: "The statutory portion is not negotiable and it is knowable. A US employer pays 6.2% Social Security on wages up to the annual cap, 1.45% Medicare uncapped, federal unemployment tax at an effective 0.6% on the first $7,000 in most states, and state unemployment insurance that varies by state and by claims history. A UK employer pays National Insurance at 15% above the £5,000 secondary threshold, plus pension auto-enrolment of at least 3% of qualifying earnings.",
        },
        {
          type: "table",
          caption: "Cost lines on top of an engineering salary. Ranges are observed market practice, not a quotation.",
          head: ["Cost line", "United States", "United Kingdom"],
          rows: [
            [
              "Statutory employer contributions",
              "6.2% Social Security to the wage cap, 1.45% Medicare uncapped, ~0.6% effective FUTA, plus state unemployment insurance",
              "National Insurance at 15% above the £5,000 secondary threshold",
            ],
            [
              "Retirement",
              "401(k) match where offered, commonly 3–6% of salary",
              "Auto-enrolment pension, minimum 3% of qualifying earnings",
            ],
            [
              "Healthcare",
              "Employer-paid premiums, often the second largest line after salary",
              "Usually optional private cover; a far smaller line",
            ],
            [
              "Recruitment",
              "Contingency fees commonly 15–25% of first-year base",
              "Same range; retained search more common at lead level",
            ],
            [
              "Equipment and licences",
              "Laptop refresh, IDE, CI minutes, observability, design seats",
              "Same, at similar per-seat pricing",
            ],
            [
              "Paid time off",
              "Salary paid for weeks in which nothing ships",
              "Statutory minimum leave is higher, so the effect is larger",
            ],
          ],
        },
        {
          type: "p",
          text: "Add those together and you reach the multiplier most finance teams already use: total cost of employment runs about 1.25 to 1.4 times base salary before any management overhead. On a $140,000 salary that is roughly $175,000 to $196,000 a year, plus a one-off fee of $21,000 to $35,000 in year one if a contingency recruiter found the candidate.",
        },
      ],
    },
    {
      heading: "Why a contract rate and a salary are not comparable numbers",
      blocks: [
        {
          type: "p",
          text: "An employee is paid for 52 weeks. Subtract annual leave, public holidays, sick days, onboarding, company meetings and the hours spent interviewing other candidates, and productive engineering weeks land somewhere in the mid-forties. That is the denominator that matters, and it is the one nobody puts in the spreadsheet.",
        },
        {
          type: "p",
          text: "The second missing line is bench time. Headcount is a standing commitment: when a project ends, the developer who built your iOS app stays on payroll while you work out what they do next. Over two years those gaps are often the largest single source of waste in an in-house team, and they never appear as a cost because they look like a planning failure.",
        },
        {
          type: "p",
          text: "The third is management — one-to-ones, performance reviews, hiring loops, cover for parental leave. Real work, expensive work, and in the agency model it sits inside the rate rather than inside your calendar.",
        },
        {
          type: "p",
          text: "Contract pricing varies enormously by geography and specialism. As observed market ranges, not anyone’s rate card: independent contractors doing product engineering in the US or UK commonly sit between $60 and $150 an hour; onshore agencies in those markets between $120 and $250; nearshore firms in Latin America or Eastern Europe between $45 and $90; offshore firms in South and Southeast Asia between $25 and $60. What pushes a project to the top of a band is consistent — regulated data, a hard deadline, a team of five rather than two, deep integration with systems you do not control, and changes of direction after the architecture is set.",
        },
        {
          type: "callout",
          text: "A salary is a wage; a day rate is a price. The comparison only becomes honest when you divide fully loaded annual cost by productive engineering weeks and set that against the rate times the weeks you actually need.",
        },
      ],
    },
    {
      heading: "In-house team vs development agency vs freelancers, side by side",
      blocks: [
        {
          type: "table",
          caption: "How the three models behave on the dimensions that decide the choice.",
          head: ["Dimension", "In-house team", "Development agency", "Freelancers"],
          rows: [
            [
              "How cost behaves",
              "Fixed and continuous: ~1.25–1.4x salary, paid through leave, notice and bench time",
              "Higher per hour, but only for hours consumed; management and tooling included",
              "Lowest per hour, no employment costs, no included management, QA or cover",
            ],
            [
              "Time to first useful commit",
              "Two to four months from decision, then a ramp before net-positive output",
              "One to four weeks; the team is formed and shares a pipeline and review culture",
              "Days if you know someone; one to three weeks screening from scratch",
            ],
            [
              "Retention risk",
              "Moderate; domain knowledge leaves permanently on resignation",
              "Low during the engagement, but substitution is the agency’s call unless the contract names people",
              "Highest; a better-paying client mid-sprint leaves you a half-finished branch",
            ],
            [
              "Quality variance",
              "Narrow once your review standards are set, because you control hiring",
              "Narrow within a firm, wide between firms; the firm’s standards decide it",
              "Widest; two contractors at the same rate can differ by an order of magnitude",
            ],
            [
              "Knowledge retention",
              "Strongest if it survives the individual; documentation discipline decides that",
              "Transferable if you insist on handover, decision records and repo ownership",
              "Weakest; context usually leaves with the person",
            ],
            [
              "Best fit",
              "The capability customers pay you for, built continuously for years",
              "Bounded scope with a deadline, or a capability you do not want permanently",
              "One specified task in one discipline: an integration, a migration, an audit",
            ],
          ],
        },
      ],
    },
    {
      heading: "In-house team vs development agency: which one starts faster?",
      blocks: [
        {
          type: "p",
          text: "Speed decides this more often than cost does. Hiring runs through a job specification, sourcing, screening, two or three interview loops, an offer that may be countered, then a notice period — two weeks under US at-will employment, one to three months in the UK and much of Europe. Two to four months from decision to first commit is a realistic plan, and that is before ramp.",
        },
        {
          type: "p",
          text: "Ramp is a separate cost, and the honest measure of it is the first independent change to production, not the first pull request. In an unfamiliar domain and codebase, four to eight weeks is normal, and throughout it the new hire consumes attention from people who are already productive.",
        },
        {
          type: "p",
          text: "An agency’s advantage here is not that its people are better. The forming cost has already been paid by somebody else: the pairs have worked together, review conventions exist, CI is a template rather than a decision, and someone already knows how to wire up the observability stack. You are buying a team, not individuals who will become one on your budget.",
        },
      ],
    },
    {
      heading: "What happens when the person who knew everything leaves?",
      blocks: [
        {
          type: "p",
          text: "Every model has a bus factor problem and each one fails differently. In-house, the knowledge leaves permanently and the replacement starts from the code. With an agency, continuity is contractual, but the agency’s own attrition is invisible to you until it is not — the person who designed your event model can be rotated onto another account unless the contract names individuals. With freelancers the risk is highest: no bench, no cover, no colleague who read the code last week.",
        },
        {
          type: "p",
          text: "The mitigations are identical across all three models, cost almost nothing to insist on at the start, and are close to impossible to retrofit at the end.",
        },
        {
          type: "list",
          items: [
            "Require every non-trivial decision to land in an architecture decision record in the repository, not in a chat thread that expires with the retention policy.",
            "Own the cloud accounts, DNS, repositories, CI provider and app store listings yourself from day one — never in a vendor’s or contractor’s name.",
            "Define infrastructure in Terraform, Pulumi or CloudFormation so that no individual laptop is the deployment mechanism.",
            "Verify quarterly that CI can build, test and deploy from a clean checkout with no undocumented local steps. This single test surfaces most hidden knowledge.",
            "Contract for a paid handover window rather than relying on goodwill after the final invoice.",
            "Have two people review anything load-bearing, so that no subsystem has exactly one reader.",
          ],
        },
      ],
    },
    {
      heading: "When is hiring an agency the wrong choice?",
      blocks: [
        {
          type: "p",
          text: "There are situations where bringing in a firm — including ours — is the worse decision, and saying so is more useful than pretending otherwise. The clearest is when the software is the company. If the product is what customers pay for and will be built continuously for the next five years, the compounding value of domain knowledge held by permanent staff beats any rate arbitrage.",
        },
        {
          type: "p",
          text: "The second is when you cannot yet articulate what you want. A firm will happily run a discovery process and bill for it, but if the specification changes materially every week because the business model is still moving, the contract converts that churn into invoices.",
        },
        {
          type: "p",
          text: "The third is small, continuous work. A few hours a week of maintenance is badly matched to minimum team sizes, retainer floors and the cost of context-switching a shared team into your codebase. A part-time contractor who already knows the system is cheaper for both sides.",
        },
        {
          type: "p",
          text: "The fourth is regulatory. Some environments require named, vetted, geographically constrained personnel, or prohibit third-party access to production data outright. No commercial argument overrides that.",
        },
        {
          type: "callout",
          text: "If your only reason for hiring an agency is that hiring is difficult, you are deferring the problem at a premium. You will still have to hire eventually, and by then you will be recruiting people to maintain a codebase they did not write.",
        },
      ],
    },
    {
      heading: "Where freelancers win and where they quietly fail",
      blocks: [
        {
          type: "p",
          text: "Freelancers are the best value in the market for bounded, specified, single-discipline work. Implementing a design system in an existing component library. A Stripe integration including webhooks, proration and dunning. A one-off data migration with a verification script. An accessibility audit against WCAG with a remediation list. In each case you can describe done and evaluate the result without having to trust the process.",
        },
        {
          type: "p",
          text: "They fail on the inverse. Work spanning backend, frontend, mobile and infrastructure at once becomes an integration problem you now own, because nobody else holds the whole picture. And the review step quietly disappears: an individual merges their own work, so the second pair of eyes that catches the concurrency bug or the missing index does not exist unless you supply it.",
        },
        {
          type: "p",
          text: "That is why quality variance is widest in this model. There is no institutional standard behind the person and no colleague who will refuse to approve the pull request. Two contractors quoting the same rate can produce work that differs by a factor most buyers would not believe.",
        },
      ],
    },
    {
      heading: "A decision rule you can apply this week",
      blocks: [
        {
          type: "p",
          text: "Work through these in order and stop at the first clear answer. Most teams find they were arguing about cost when the binding constraint was calendar or accountability.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Will customers still be paying for this capability in three years? If yes, its core belongs in-house whatever else you decide.",
            "Does the work have a defined end date? If yes, permanent headcount is the wrong instrument — a fixed cost against a variable need.",
            "Can anyone internally judge the output technically? If not, an agency with a named architect accountable for quality beats individuals who each grade their own work.",
            "Is the scope one discipline or four? One is a contractor. Four is a team, and assembling one from contractors makes you the integrator.",
            "What does a month of delay cost in revenue, runway or a missed contractual date? If that number is large, the agency premium is the cheapest part of the decision.",
          ],
        },
        {
          type: "p",
          text: "Most companies do not pick one model and hold it. The arrangement that works is a small permanent core owning product decisions and the differentiating parts of the system, an agency team for surge capacity, and contractors for bounded tasks. A common sequence is an agency building version one against a fixed scope while you recruit, then a structured handover into permanent hires it helped onboard.",
        },
        {
          type: "p",
          text: "We work both ends of that arrangement, and if you are weighing the three models against a specific build, it is worth a conversation about which one your constraints actually point to.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is it cheaper to hire an in-house developer or a development agency?",
      answer:
        "Per hour, an in-house developer is cheaper. Per unit of delivered work on a project with an end date, the agency often wins. A permanent engineer costs roughly 1.25–1.4x salary once employer taxes, benefits, equipment and licences are counted, plus a recruitment fee of 15–25% of first-year salary, and you pay that through leave, notice periods and gaps between projects. An agency bills only for weeks consumed.",
    },
    {
      question: "How much more than salary does an in-house engineer really cost?",
      answer:
        "Plan on 25–40% above base salary before management overhead. That covers statutory employer contributions, retirement contributions, healthcare where the employer pays it, equipment, and per-seat licences for the IDE, CI, observability and design tools. Add a one-off recruitment fee in year one if you used a contingency recruiter, commonly 15–25% of first-year base. Bench time between projects is a further cost most models omit entirely.",
    },
    {
      question: "When should a startup use freelancers instead of an agency?",
      answer:
        "When the work is bounded, specified, and sits inside one discipline — a payments integration, a data migration, an accessibility audit, a build pipeline fix. You can define done, evaluate the output without trusting the process, and the engagement ends cleanly. Avoid freelancers for multi-discipline builds, for anything running beyond a few months, and for work where the absence of a code reviewer would let serious defects through unnoticed.",
    },
    {
      question: "What happens to my code and infrastructure if the agency relationship ends?",
      answer:
        "That depends entirely on what you set up at the start. Own the cloud accounts, DNS, source repositories, CI provider and app store listings in your own name from day one, require architecture decision records in the repository rather than in chat, keep infrastructure defined as code, and contract for a paid handover window. With those in place a transition takes weeks. Without them it can take longer than the original build.",
    },
    {
      question: "Can I start with an agency and move development in-house later?",
      answer:
        "Yes, and it is the most common successful sequence. The agency builds version one against a fixed scope while you recruit without deadline pressure, then hands over to permanent hires it helped onboard against the code it wrote. Make the handover an explicit contractual phase with a defined exit test — typically that your team can build, test and deploy from a clean checkout with no vendor involvement.",
    },
    {
      question: "How long does it take to hire an in-house engineer versus starting with an agency?",
      answer:
        "From decision to first commit, hiring realistically takes two to four months: sourcing, interview loops, an offer that may be countered, and a notice period of two weeks in the US or one to three months in the UK and Europe. Then four to eight weeks of ramp before the hire is independently productive. An agency team typically starts within one to four weeks and arrives already formed.",
    },
  ],
};
