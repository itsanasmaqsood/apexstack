import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "regain-focus-app-blocker-case-study",
  title:
    "Regain: Shipping a Focus App That Refuses to Build Without Its Own Keys",
  seoTitle: "Regain Focus App Case Study",
  description:
    "How we built a study focus and app blocker where the release process is fail-closed, so an offline binary cannot reach the store by accident.",
  excerpt:
    "The interesting part of Regain is not the Pomodoro timer. It is a release pipeline that mechanically refuses to produce a store build when a key is missing.",
  category: "Case Studies",
  primaryKeyword: "app blocker development",
  secondaryKeywords: [
    "study focus app development",
    "flutter release pipeline",
    "fail closed build configuration",
    "supabase mobile app development",
  ],
  published: "2026-08-14",
  authorId: "leadership-02",
  serviceSlug: "mobile-app-development",
  keyTakeaway:
    "Regain is a focus and app blocking app for students on Android and iOS. Its most useful engineering decision has nothing to do with focus sessions: secrets are injected at build time, debug builds boot into a clearly labelled offline mode that names the missing keys, and release builds are mechanically blocked unless every required value is supplied. That turns the most common launch disaster, an app shipped without its backend configured, into an impossible outcome rather than a careful one.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "Block the apps that pull you away, run a focus session as a timer, stopwatch or Pomodoro, and review the focus time you actually completed. That is the product, and as products go it is well understood.",
        },
        {
          type: "p",
          text: "What makes it worth writing about is the discipline around getting it into a store without shipping something broken.",
        },
        {
          type: "callout",
          text: "The most expensive mobile bug is not a crash. It is a release that builds cleanly, installs fine, and cannot talk to its own backend.",
        },
      ],
    },
    {
      heading: "The failure this was designed to prevent",
      blocks: [
        {
          type: "p",
          text: "Secrets are injected at build time and never committed. That is standard. The interesting question is what happens when somebody forgets.",
        },
        {
          type: "p",
          text: "In most projects the answer is that the binary ships with empty strings, every backend call fails, and you find out from a one-star review. The build succeeded, the tests passed, and the app is useless.",
        },
        {
          type: "h3",
          text: "What happens here instead",
        },
        {
          type: "list",
          items: [
            "Debug and profile builds without keys boot into a clear offline or guest mode, and print exactly which keys are missing rather than failing silently.",
            "Release builds are mechanically blocked unless the backend, platform billing, a monitored support email and HTTPS legal settings are all supplied.",
            "Producing an unsigned or incomplete release requires an explicit override environment variable, so it cannot happen by habit.",
            "Those override outputs are moved to a timestamped directory named so that uploading one would take deliberate effort.",
          ],
        },
        {
          type: "p",
          text: "There is a preflight verifier in the toolchain whose entire job is to fail closed. It is a small amount of code that removes a category of launch incident permanently.",
        },
      ],
    },
    {
      heading: "The rest of the build",
      blocks: [
        {
          type: "table",
          head: ["Concern", "Choice", "Why"],
          rows: [
            [
              "State",
              "Riverpod with plain immutable models, no code generation",
              "Build reliability. Generated code is one more thing that can break a release at the worst moment",
            ],
            ["Routing", "Typed paths", "A wrong route becomes a compile error rather than a blank screen"],
            [
              "Backend",
              "Managed Postgres with row level security and storage",
              "Authorisation lives next to the data instead of being reimplemented per client",
            ],
            [
              "Loading",
              "Skeleton loaders everywhere, no bare spinners",
              "A skeleton tells the user what is about to arrive. A spinner tells them to wait",
            ],
          ],
        },
        {
          type: "h3",
          text: "Signing key custody, written down",
        },
        {
          type: "p",
          text: "The Android upload key supports gitignored password properties, environment variables, or platform keychain references. The key's public fingerprints and a non-secret custody record are documented in the repository, while the keystore and passwords never are.",
        },
        {
          type: "p",
          text: "Losing an Android upload key is one of the few genuinely unrecoverable mistakes in mobile development. Writing down who holds it, without writing down the secret itself, costs an afternoon and prevents an outcome that has no fix.",
        },
      ],
    },
    {
      heading: "What we would tell you if you were shipping to a store",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Make a misconfigured build impossible rather than unlikely. If a required key is missing, the release command should refuse, not warn.",
            "Make the offline state explicit and legible. An app that says which keys are missing saves hours that would otherwise go into guessing.",
            "Document key custody as a non-secret record. Who holds the upload key, and what its fingerprints are, belongs in the repository. The key itself does not.",
            "Prefer skeletons to spinners. It is a small change to a loading state and it is the difference between an app that feels considered and one that feels unfinished.",
          ],
        },
        {
          type: "callout",
          text: "Release engineering is invisible when it works, and it is the entire story when it does not.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What does a fail-closed release process mean?",
      answer:
        "It means the build refuses to produce a store-ready artefact when a required value is missing, instead of producing one that installs correctly and cannot reach its backend. Overriding that requires an explicit environment variable, so it is a deliberate act rather than an oversight.",
    },
    {
      question: "Why avoid code generation for state management?",
      answer:
        "Build reliability. Generated code adds a step that can break at the least convenient moment, usually while preparing a release. Plain immutable models are slightly more typing and considerably fewer surprises.",
    },
    {
      question: "Why do skeleton loaders matter?",
      answer:
        "A skeleton shows the shape of what is arriving, so the interface feels like it is filling in. A bare spinner communicates only that the user should wait. Across a whole app that difference is most of what people mean when they say something feels polished.",
    },
    {
      question: "What happens if you lose an Android upload key?",
      answer:
        "It is one of the few genuinely unrecoverable situations in mobile development. That is why the fingerprints and a non-secret custody record are documented in the repository while the keystore and its passwords never are.",
    },
    {
      question: "Does the app work without a backend connection?",
      answer:
        "In development, yes. Debug and profile builds boot into a clearly labelled offline or guest mode and report which keys are missing. Release builds are blocked entirely, because an offline store binary is a defect rather than a degraded mode.",
    },
  ],
};
