import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "halal-scanner-food-verification-app-case-study",
  title:
    "Halal Scanner: Building an App Where Being Confidently Wrong Is the Worst Outcome",
  seoTitle: "Halal Scanner App Case Study",
  description:
    "How we built a food scanning app for a question where a wrong answer causes real harm, and why uncertainty had to be a first-class result.",
  excerpt:
    "Most scanning apps optimise for confident answers. When the question is religious permissibility, a confident wrong answer is worse than admitting you do not know.",
  category: "Case Studies",
  primaryKeyword: "food scanning app development",
  secondaryKeywords: [
    "barcode scanner app development",
    "ai ingredient analysis app",
    "camera based mobile app",
    "trust critical app design",
  ],
  published: "2026-08-08",
  authorId: "leadership-03",
  serviceSlug: "mobile-app-development",
  keyTakeaway:
    "Halal Scanner lets someone scan a food product and understand whether it is permissible. The engineering constraint that separates it from an ordinary scanning app is the cost of error. A wrong answer causes a person to eat something they believe is forbidden, so the design has to make uncertainty a legitimate, well-presented result rather than something to be hidden behind a confident guess.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "Point the camera at a food product. Find out whether it is halal.",
        },
        {
          type: "p",
          text: "Technically this is a scanning app: camera, image capture, a lookup, a result screen. The build is not unusual. The responsibility is.",
        },
        {
          type: "callout",
          text: "In most apps a wrong answer is an annoyance. Here it causes someone to do something they believe is forbidden, and no apology fixes it afterwards.",
        },
      ],
    },
    {
      heading: "Why uncertainty had to be designed, not hidden",
      blocks: [
        {
          type: "p",
          text: "Ingredient lists are genuinely ambiguous. A single additive can be derived from a permissible or a forbidden source, and the label frequently does not say which. Manufacturers reformulate without notice. Regional variants of the same brand differ.",
        },
        {
          type: "p",
          text: "An app that always produces a clean yes or no is not being helpful in those cases. It is guessing and presenting the guess as knowledge.",
        },
        {
          type: "h3",
          text: "What that means in the interface",
        },
        {
          type: "list",
          items: [
            "Uncertain has to be a real result with its own designed screen, not a fallback that looks like an error.",
            "The reason for uncertainty belongs on screen, because a named ambiguous ingredient lets the user make their own judgement or check with someone.",
            "Confidence should not be implied by presentation. A result that is inferred must not look identical to one that is known.",
          ],
        },
        {
          type: "p",
          text: "This is the same design problem that medical, legal and financial products face. The difference between a trusted product and a liability is whether it communicates the limits of what it knows.",
        },
      ],
    },
    {
      heading: "The build itself",
      blocks: [
        {
          type: "table",
          head: ["Piece", "Choice", "Note"],
          rows: [
            ["Capture", "Native camera plus gallery import", "Not everyone scans live; many photograph a label to check later"],
            ["Backend", "Managed Postgres with row level security", "Product data and history without a bespoke server"],
            ["Analysis", "Server-side edge function", "Keeps model credentials out of the binary"],
            ["Billing", "Cross-platform subscriptions", "Per-scan analysis carries a real unit cost"],
            ["Feedback", "Haptics on result", "A physical confirmation the scan registered, useful in a noisy shop"],
          ],
        },
        {
          type: "p",
          text: "Haptic feedback is a small detail worth calling out. The app is used standing in a supermarket aisle, often one-handed, frequently in noise. A vibration confirming that the scan registered removes a moment of doubt that would otherwise turn into a second unnecessary scan.",
        },
      ],
    },
    {
      heading: "Designing for the aisle",
      blocks: [
        {
          type: "p",
          text: "The context of use is specific and unforgiving: standing up, holding a basket, poor supermarket lighting, sometimes no signal, and other shoppers wanting to get past.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "The result must be readable at a glance. Somebody deciding whether to put an item in a basket is not going to read a paragraph.",
            "Lighting varies wildly, so capture has to tolerate poor conditions and gallery import has to exist for when it does not.",
            "Signal in a large shop is often bad, so failures need to be legible and recoverable rather than a spinner that never resolves.",
          ],
        },
      ],
    },
    {
      heading: "What we would tell you if you were building this",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Work out the cost of a wrong answer before you design the result screen. If it is high, uncertainty needs its own first-class design.",
            "Never let an inferred result look like a known one. Users calibrate their trust on presentation, and once that trust breaks it does not come back.",
            "Design for the physical environment. Supermarket lighting, one hand, background noise and weak signal are the real specification.",
            "Keep analysis server-side. It protects credentials and it lets you improve accuracy without waiting on a store review.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why is a halal scanning app harder than a normal barcode scanner?",
      answer:
        "Because of the cost of being wrong. A barcode scanner that misreads a price is an annoyance. An app that wrongly declares a product permissible causes someone to do something they believe is forbidden. That raises the bar on how uncertainty is handled.",
    },
    {
      question: "How should an app handle an ambiguous ingredient?",
      answer:
        "By saying so, on a designed screen, naming the ingredient that caused the ambiguity. Many additives can come from permissible or forbidden sources and labels often do not specify. Presenting a guess as an answer is the failure mode to avoid.",
    },
    {
      question: "Why does haptic feedback matter here?",
      answer:
        "The app is used standing in a shop, one-handed, in noise. A vibration confirming the scan registered removes a moment of doubt that would otherwise cause a second unnecessary scan, and each scan carries a real analysis cost.",
    },
    {
      question: "Why run the analysis on a server rather than the device?",
      answer:
        "It keeps model credentials out of a binary anyone can inspect, and it means accuracy improvements ship immediately rather than waiting for an app store review and user updates.",
    },
    {
      question: "Does this apply outside religious dietary apps?",
      answer:
        "Directly. Any product answering medical, legal, financial or safety questions has the same shape: the difference between a trusted tool and a liability is whether it communicates the limits of what it knows.",
    },
  ],
};
