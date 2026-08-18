import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "daily-rise-wellness-app-case-study",
  title:
    "Daily Rise: Shipping a Streak App That Still Works Before the Client's Keys Arrive",
  seoTitle: "Daily Rise Wellness App Case Study",
  description:
    "How we built a daily challenge app where the AI coach and paywall degrade cleanly, so development never waits on a third-party account.",
  excerpt:
    "The client owned the AI key and the billing account. Rather than block, we built so that every feature gated on someone else's account fails quietly and the rest of the app ships.",
  category: "Case Studies",
  primaryKeyword: "habit tracking app development",
  secondaryKeywords: [
    "streak app development",
    "supabase row level security",
    "revenuecat subscription integration",
    "ai coach app development",
  ],
  published: "2026-08-19",
  authorId: "leadership-01",
  serviceSlug: "mobile-app-development",
  keyTakeaway:
    "Daily Rise gives a user one challenge a day and a streak to protect. Two decisions carry the build: the streak is a computed database view rather than a stored counter, so it cannot drift out of sync with the completions it describes, and every feature depending on a client-owned account degrades cleanly, so development never stalled waiting for a key to arrive.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "One challenge a day, one streak to protect. Pick the areas you care about, get a challenge assigned each morning, complete it, keep the streak alive. An AI coach sits alongside for conversation.",
        },
        {
          type: "p",
          text: "It is a well-understood shape of product, which makes the implementation decisions the interesting part.",
        },
        {
          type: "callout",
          text: "In a streak app, the streak is the product. If a user believes it is wrong even once, the thing holding them there is gone.",
        },
      ],
    },
    {
      heading: "The streak is computed, not stored",
      blocks: [
        {
          type: "p",
          text: "The obvious implementation is a counter on the user record: increment on completion, reset on a miss. It is simple and it is a source of permanent low-grade bugs.",
        },
        {
          type: "p",
          text: "A stored counter can disagree with the completion history behind it. A retry double-increments. A timezone edge resets a streak the user did not actually break. A failed write leaves the number and the history telling different stories, and once they diverge nothing reconciles them.",
        },
        {
          type: "h3",
          text: "The alternative",
        },
        {
          type: "p",
          text: "Current streak, longest streak and total completions are a database view computed from the completion rows. There is no counter to corrupt, because the number is derived every time it is asked for.",
        },
        {
          type: "p",
          text: "Daily assignment works on the same principle. A single database function either returns today's challenge or assigns one, so two devices opening the app at the same moment cannot produce two different challenges for the same day.",
        },
      ],
    },
    {
      heading: "Building around accounts you do not control",
      blocks: [
        {
          type: "p",
          text: "The AI coach runs on the client's own model key. Billing runs through the client's store accounts. Both are correct arrangements commercially, and both mean the team building the app does not hold the credential.",
        },
        {
          type: "p",
          text: "The usual outcome is a stall: the build waits, the invoice waits, and everyone is annoyed about something nobody can fix from a keyboard.",
        },
        {
          type: "h3",
          text: "What was done instead",
        },
        {
          type: "list",
          items: [
            "The AI coach is disabled rather than broken when no model key is present. The screen exists, the state is handled, and it switches on the moment a key lands.",
            "The paywall is likewise disabled without billing keys, so the app runs end to end in a free state.",
            "What is blocked, and who owns unblocking it, is written down in the repository rather than living in a chat thread.",
          ],
        },
        {
          type: "p",
          text: "The last point is the one most teams skip. A table naming each blocked feature and the person who owns the account converts a vague delay into a specific request, and specific requests get actioned.",
        },
      ],
    },
    {
      heading: "The data model",
      blocks: [
        {
          type: "table",
          head: ["Table", "Holds", "Note"],
          rows: [
            ["profiles", "One row per account, with premium status", "Premium mirrors billing state rather than being set by the client"],
            ["user_goals", "Chosen categories", "Drives which challenges are eligible"],
            ["challenge_templates", "The curated content pool", "Read-only to users; some entries are premium"],
            ["daily_challenges", "One row per user per day", "Written only by the assignment function"],
            ["streak_stats", "A computed view", "Derived, so it cannot drift"],
            ["subscriptions", "Mirrored billing state", "Triggers the premium flag on the profile"],
          ],
        },
        {
          type: "p",
          text: "Every user-scoped table enforces row level security tied to the authenticated user, and the template pool is read-only. That means the authorisation rule lives next to the data rather than being reimplemented in each client, which matters as soon as there is more than one client.",
        },
        {
          type: "h3",
          text: "Premium status is mirrored, never asserted",
        },
        {
          type: "p",
          text: "The app never sets its own premium flag. Billing state flows in from the payment provider and a trigger updates the profile. A client that can promote itself to premium is a client that will be made to, and the fix afterwards is considerably more expensive than the arrangement.",
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
            "Derive streaks and counts rather than storing them. A computed view cannot disagree with its own history, and the history is what users will point at when they complain.",
            "Assign daily content through a single database function. Two devices at midnight is a real scenario and it is how duplicate assignments appear.",
            "Design every third-party dependency to degrade rather than block. A disabled feature ships. A missing key stops a project.",
            "Never let the client application decide entitlement. Mirror it from the payment provider and trigger from there.",
          ],
        },
        {
          type: "callout",
          text: "Waiting on somebody else's account is not a technical problem, and it is the most common reason a finished app is not live.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why compute a streak instead of storing a counter?",
      answer:
        "A stored counter can disagree with the completions behind it. Retries double-increment, timezone edges reset streaks that were never broken, and a failed write leaves the number and the history contradicting each other with nothing to reconcile them. A computed view is derived from the rows every time, so it cannot drift.",
    },
    {
      question: "How do you stop two devices getting different daily content?",
      answer:
        "Assignment goes through a single database function that either returns today's row or creates it. Because the decision happens in one place under one transaction, two devices opening the app simultaneously cannot produce two different challenges for the same day.",
    },
    {
      question: "What happens when the client owns the AI key?",
      answer:
        "The feature is built to be disabled rather than broken. The screen exists, the empty state is handled, and it activates when the key is supplied. The alternative is a project that stalls waiting on an account nobody on the build team can create.",
    },
    {
      question: "Why should premium status be mirrored rather than set by the app?",
      answer:
        "Because an app that can grant itself premium will be made to. Entitlement flows from the payment provider into the database, and a trigger updates the profile. Fixing this after launch is far more expensive than arranging it correctly at the start.",
    },
    {
      question: "What is row level security and why use it?",
      answer:
        "It is a database rule restricting which rows a given user may read or write, enforced by the database rather than by application code. It means the authorisation rule lives in one place instead of being reimplemented in every client, which matters as soon as a mobile app and an admin panel both exist.",
    },
  ],
};
