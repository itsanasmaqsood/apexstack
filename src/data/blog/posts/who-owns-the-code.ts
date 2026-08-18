import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "who-owns-the-code",
  title: "Who Owns the Code? IP, Handover and Getting Locked In",
  seoTitle: "Who Owns the Code in Software Development?",
  description:
    "Paying for software does not automatically make it yours. What IP assignment must say, and the four ways firms create lock-in without owning anything.",
  excerpt:
    "The contract clause most buyers skim is the one that decides whether you can ever leave. Here is what ownership actually requires, and how dependency gets built without it.",
  category: "Choosing a Partner",
  primaryKeyword: "who owns the code in software development",
  secondaryKeywords: [
    "software development IP ownership",
    "source code ownership contract",
    "software vendor lock-in",
    "code handover checklist",
  ],
  published: "2026-08-13",
  authorId: "leadership-01",
  serviceSlug: "custom-software-development",
  keyTakeaway:
    "Paying for software does not, by default, make you its owner. In most jurisdictions copyright in commissioned code belongs to whoever wrote it unless the contract assigns it to you in writing, and \"work for hire\" language alone frequently fails to achieve this outside the United States. You need an explicit present assignment of intellectual property covering code, designs, and infrastructure configuration, effective on payment. Even with perfect ownership, you can still be locked in — through infrastructure you cannot access, knowledge nobody wrote down, or licences that do not transfer.",
  sections: [
    {
      heading: "Why paying for it is not the same as owning it",
      blocks: [
        {
          type: "p",
          text: "The intuition almost every buyer arrives with is that commissioning something means owning it. You paid for the software, so it is yours, in the way that a commissioned photograph or a fitted kitchen is yours.",
        },
        {
          type: "p",
          text: "Copyright does not work that way. In most legal systems, copyright in a created work vests initially in its author. For an employee that is usually handled by employment law and the copyright sits with the employer. For a contractor or an agency, it stays with them unless it is assigned to you in a written agreement. Payment creates an implied licence to use the thing you paid for — but a licence is not ownership, and its scope is exactly as broad as a court later decides it was.",
        },
        {
          type: "p",
          text: "The practical difference matters most at the moments you care about. Under a licence you may not be able to modify the code with another firm, sell the business with the software included, or open-source any part of it. None of those come up while everyone is happy. All of them come up during an acquisition, a dispute, or a change of supplier.",
        },
        {
          type: "callout",
          text: "Ownership is not something you notice until you need it, and by then it is a negotiation rather than a clause.",
        },
      ],
    },
    {
      heading: "What the assignment clause has to actually say",
      blocks: [
        {
          type: "p",
          text: "A workable IP clause has several parts, and contracts commonly get three of them right and one wrong.",
        },
        {
          type: "list",
          items: [
            "A present assignment, not a promise. \"Supplier hereby assigns\" transfers rights on the terms stated. \"Supplier shall assign\" is a promise to do something later, which requires their cooperation at precisely the moment you may not have it.",
            "Everything, named. Source code, but also designs, wireframes, database schemas, infrastructure-as-code, build scripts, test suites and documentation. Deliverables lists that say \"the software\" leave real arguments about the rest.",
            "Effective on payment, not on project completion. Otherwise a project abandoned at eighty per cent leaves you owning nothing while having paid for most of it.",
            "Further assurance: an obligation to sign whatever paperwork is needed later to perfect the transfer, including with registries.",
            "Moral rights waived where the jurisdiction recognises them, so an individual author cannot later object to how the work is changed.",
          ],
        },
        {
          type: "p",
          text: "One term deserves particular attention. \"Work made for hire\" is a specific concept in United States copyright law that applies to a narrow set of categories and, for most software, only when there is also a signed agreement. In the UK, the EU, India and many other jurisdictions the phrase has no equivalent statutory effect at all. A contract relying on it alone, governed by law outside the US, may transfer nothing. Use an express assignment and treat any \"work for hire\" wording as belt-and-braces rather than the mechanism.",
        },
      ],
    },
    {
      heading: "What a supplier legitimately keeps",
      blocks: [
        {
          type: "p",
          text: "It is reasonable, and normal, for a development firm to retain some things. A supplier who assigns literally everything including their internal tooling is either not thinking clearly or is about to become unable to work efficiently for anyone.",
        },
        {
          type: "table",
          caption: "Where the line usually sits",
          head: ["Asset", "Who should hold it", "Note"],
          rows: [
            [
              "Your application's source code",
              "You, assigned",
              "Non-negotiable; this is the deliverable",
            ],
            [
              "Designs, schemas, infrastructure config",
              "You, assigned",
              "Frequently omitted from deliverables lists — add them explicitly",
            ],
            [
              "Supplier's pre-existing libraries and tooling",
              "Supplier, licensed to you",
              "Reasonable — but insist on a perpetual, irrevocable, transferable licence",
            ],
            [
              "Generic know-how and techniques",
              "Supplier",
              "Unavoidable and not worth fighting; you cannot un-teach people",
            ],
            [
              "Third-party open-source components",
              "Their own licences",
              "Ask for the full dependency licence list before signing",
            ],
            [
              "Accounts and infrastructure",
              "You",
              "Should be in your own cloud organisation from day one",
            ],
          ],
        },
        {
          type: "p",
          text: "The row that causes the most trouble later is the third. If a supplier's proprietary framework is woven through your application and licensed only to you, non-transferably, you own code you cannot move and cannot sell with the business. Ask directly whether any such component exists, and if it does, get the licence terms in writing before the first sprint rather than during the exit.",
        },
      ],
    },
    {
      heading: "The four ways you get locked in while owning everything",
      blocks: [
        {
          type: "p",
          text: "Ownership is necessary and not sufficient. Most lock-in in this industry has nothing to do with intellectual property.",
        },
        {
          type: "h3",
          text: "Infrastructure you do not control",
        },
        {
          type: "p",
          text: "If the application runs in the supplier's cloud account, under their domain registrar, with their certificates and their monitoring, then owning the source is close to theoretical. Insist that every account — cloud, DNS, error tracking, analytics, app store — is created under your organisation and that supplier access is granted rather than assumed. This is nearly free on day one and expensive to unwind on day four hundred.",
        },
        {
          type: "h3",
          text: "Knowledge that was never written down",
        },
        {
          type: "p",
          text: "The deployment process lives in one engineer's head. The reason a particular queue exists is undocumented. Environment variables are set by hand. You own a repository that another team would need six weeks to become productive in, and six weeks of another team's time is a real switching cost. Documentation is not paperwork here; it is the thing that makes ownership operational.",
        },
        {
          type: "h3",
          text: "Accumulated context",
        },
        {
          type: "p",
          text: "This one is legitimate and permanent. A team that has worked on your system for two years genuinely knows things a new team will take months to learn. No contract fixes it. It is the reason to choose carefully rather than to plan on switching, and the reason a good supplier does not need artificial lock-in.",
        },
        {
          type: "h3",
          text: "A codebase nobody else wants to touch",
        },
        {
          type: "p",
          text: "No tests, no consistency, dependencies years out of date. Any firm you approach quotes high because their first month is archaeology. This is lock-in by decay, and it accrues silently. Periodic review by an outside engineer — even a few days a year — surfaces it while it is still cheap.",
        },
      ],
    },
    {
      heading: "Do you need source code escrow?",
      blocks: [
        {
          type: "p",
          text: "Escrow — a third party holding a copy of the code, released to you if the supplier fails or breaches — is a standard answer to this problem and is usually the wrong tool for custom development.",
        },
        {
          type: "p",
          text: "It exists for licensed software, where the vendor genuinely will not give you their source. If you have commissioned bespoke software with a proper assignment, you should already have the code, in a repository you own, updated continuously. Escrow adds cost and a release-condition negotiation to obtain something you are entitled to hold anyway.",
        },
        {
          type: "p",
          text: "Where it earns its place: licensed platform software critical to your operations, or arrangements where a supplier retains genuine ownership of a core component. If someone proposes escrow as the answer to \"can we have repository access\", the answer you actually want is repository access.",
        },
      ],
    },
    {
      heading: "A handover you could actually act on",
      blocks: [
        {
          type: "p",
          text: "Write this into the contract as the definition of completion, not as an optional final phase. A handover that has to be requested is a handover that arrives incomplete.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Full commit history in a repository under your organisation, not a zip file of the final state. History is how the next team understands why things are as they are.",
            "A README that takes a competent engineer from a clean machine to a running local environment, and that someone has actually followed end to end.",
            "The deployment process, written down and reproducible — ideally as code rather than as instructions.",
            "All credentials and accounts transferred to your ownership, with supplier access removable by you.",
            "Architecture notes covering the decisions that would be surprising: why this database, why this queue, what the awkward part is.",
            "The dependency list with licences, so you know what you are shipping.",
            "A recorded walkthrough. An hour of someone explaining the system is worth more than most documents and costs almost nothing to produce.",
          ],
        },
        {
          type: "p",
          text: "A useful test of any supplier: ask what their handover contains before you sign anything. A firm that answers immediately and specifically has done it before. A firm that treats the question as premature is telling you something.",
        },
        {
          type: "p",
          text: "We hand over on this basis as standard, and are happy to review an agreement you have been offered elsewhere if the ownership terms are unclear.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "If I paid for the software, do I automatically own it?",
      answer:
        "No. In most jurisdictions copyright vests in the author, so a contractor or agency retains it unless your contract assigns it to you in writing. Payment typically creates an implied licence to use the software, which is narrower than ownership and whose scope is decided after the fact if it is ever disputed. An express written assignment is the only reliable route.",
    },
    {
      question: "Is \"work made for hire\" enough to give me ownership?",
      answer:
        "Not on its own, and not everywhere. It is a specific United States concept covering a narrow set of work categories, and for most software it requires a signed agreement as well. In the UK, EU, India and many other jurisdictions it has no statutory equivalent. Use an express present assignment as the mechanism and treat work-for-hire wording as a secondary belt-and-braces term.",
    },
    {
      question: "Should I insist on repository access during development?",
      answer:
        "Yes, from the first commit, in a repository owned by your organisation. It is how you verify that progress reports match reality, it means an abandoned project still leaves you with the work you paid for, and it removes the single most common accidental form of lock-in. A supplier who resists this is worth asking why.",
    },
    {
      question: "Do I need source code escrow for custom software?",
      answer:
        "Usually not. Escrow solves the problem of a vendor who will not give you their source, which should not apply to bespoke work you have commissioned and had assigned. If you already hold the code in your own repository, escrow adds cost and a release-condition dispute to obtain something you have. It remains sensible for licensed third-party platform software.",
    },
    {
      question: "What if the agency built our system using their own framework?",
      answer:
        "Ask before signing, and get the licence terms in writing. A perpetual, irrevocable, transferable licence at no ongoing cost is acceptable. A licence that is non-transferable, revocable, or carries a fee means you own code you cannot move and cannot cleanly sell with the business — which is ownership in name only.",
    },
  ],
};
