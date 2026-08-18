import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "safechoice-conversational-food-journal-case-study",
  title:
    "SafeChoice: A Food Journal You Talk To, Rendered With Six Custom Shaders",
  seoTitle: "SafeChoice App Case Study",
  description:
    "How we turned food logging into a conversation with an agent, and used GPU shaders to make a nutrition app feel like a magazine.",
  excerpt:
    "Scan a label and the analysis arrives in the thread as a plate: studio-lit, scored and narrated. Pinch out and the journal blooms into a catalogue of everything you have eaten.",
  category: "Case Studies",
  primaryKeyword: "ai food scanning app development",
  secondaryKeywords: [
    "conversational ai agent app",
    "flutter shader ui",
    "nutrition label scanner app",
    "agent runtime mobile app",
  ],
  published: "2026-08-15",
  authorId: "leadership-03",
  serviceSlug: "ai-development",
  keyTakeaway:
    "SafeChoice treats each day as a conversation thread with an agent that can read your history, look food up and log what you tell it. The interesting engineering is in two places: an agent runtime that carries real tools rather than a chat window bolted onto a database, and six custom GPU shaders that let a nutrition app look like a magazine instead of a spreadsheet.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "Each day is a thread. You talk to it. The agent on the other side can read your history, look a food up, and log what you tell it, so the conversation is the interface rather than a support channel attached to one.",
        },
        {
          type: "p",
          text: "Scan a product label and the analysis lands in that thread as a plate: studio-lit, scored and narrated. Pinch out and the whole journal blooms into a magazine catalogue of everything you have eaten.",
        },
        {
          type: "callout",
          text: "The product thesis is that people will log food if logging feels like telling someone about your day, and will not if it feels like data entry.",
        },
      ],
    },
    {
      heading: "An agent runtime, not a chat box",
      blocks: [
        {
          type: "p",
          text: "There is a meaningful difference between an app with a chat screen and an app built around an agent, and it shows up in the architecture.",
        },
        {
          type: "p",
          text: "A chat screen sends text somewhere and prints the reply. An agent runtime gives the model tools it can actually call: read the journal, search the nutrition table, write an entry, generate the plate image. The conversation changes the state of the app rather than describing it.",
        },
        {
          type: "table",
          head: ["Layer", "Responsibility"],
          rows: [
            ["design", "Tokens, type, motion, glass and the shader library"],
            [
              "data",
              "Journal store, nutrition table, agent runtime, plate imagery",
            ],
            ["features", "Canvas, catalogue, detail, scan, menu and shared widgets"],
            ["screens", "Onboarding funnel, personalise, paywall, splash, guides"],
            ["backend", "Supabase, billing, live activity, come-back bar"],
          ],
        },
        {
          type: "p",
          text: "Four edge functions sit behind it for product analysis, chat, the agent and food imagery. Notably, the app is complete and usable before two of them are deployed, which is a deliberate property rather than an accident of sequencing.",
        },
      ],
    },
    {
      heading: "The hard parts",
      blocks: [
        {
          type: "h3",
          text: "Six shaders, because the category looks the same everywhere",
        },
        {
          type: "p",
          text: "Every nutrition app looks like every other nutrition app: a ring, a bar chart, a list of grams. That similarity is a commercial problem, not an aesthetic one, because a product that looks generic gets compared on price.",
        },
        {
          type: "p",
          text: "SafeChoice ships six custom fragment shaders compiled to the platform graphics layer, and a design system built around glass, motion and type. The result is a nutrition app that reads as a designed object.",
        },
        {
          type: "p",
          text: "Shaders are a real cost. They have to run at frame rate on old devices, they are hard to debug, and they are easy to get subtly wrong in ways that only appear on one GPU family. They were worth it here because differentiation was the point.",
        },
        {
          type: "h3",
          text: "Testing an interface you cannot click",
        },
        {
          type: "p",
          text: "A pinch-to-zoom canvas with long-press actions and paging between days is not something a unit test can meaningfully cover. The suite boots the real canvas on a real simulator and walks the flows a finger would: opening a day, logging plates, the detail breakdown, the catalogue, paging, long-press, sending a message.",
        },
        {
          type: "p",
          text: "There is also a development affordance that saves a great deal of time. Any screen can be launched directly, and the entitlement gate can be bypassed while developing, so nobody has to click through an onboarding funnel to check a paywall change.",
        },
        {
          type: "h3",
          text: "Two altitudes, one gesture",
        },
        {
          type: "p",
          text: "The zoom between the daily thread and the full catalogue is the core interaction, and it is the kind of thing that either feels magical or feels broken. There is very little middle ground, which means it absorbs a disproportionate share of the polish budget.",
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
            "If your category all looks the same, visual differentiation is a business decision and deserves a real budget. Shaders and motion are expensive, and being indistinguishable is more expensive.",
            "Decide early whether your agent has tools. A chat window is a week. An agent runtime that can read and write your app state is a different project, and retrofitting it is worse than starting with it.",
            "Make every screen directly launchable in development. Onboarding funnels are long, and a team that has to click through one to test the paywall will test the paywall less.",
            "Design so the app is complete before every backend function is deployed. It de-risks launch and it makes your degraded state a designed experience rather than an error screen.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What makes an agent different from a chatbot in an app?",
      answer:
        "Tools. A chatbot sends text and prints a reply. An agent can call functions that change the app: read the journal, search the nutrition table, write an entry, generate an image. The conversation alters state rather than commenting on it, and that difference runs through the whole architecture.",
    },
    {
      question: "Why use custom shaders in a mobile app?",
      answer:
        "Differentiation. Nutrition apps converge on the same rings and bar charts, and a product that looks generic ends up competing on price. Six custom fragment shaders and a glass and motion design system make the app read as a designed object. The cost is real: shaders must hold frame rate on older hardware and are awkward to debug.",
    },
    {
      question: "How do you test a gesture-driven interface?",
      answer:
        "On a real simulator, driving the real canvas. The suite opens a day, logs plates, walks the detail breakdown and catalogue, pages between days, exercises long-press actions and sends a message. Unit tests cannot meaningfully cover a pinch-to-zoom canvas.",
    },
    {
      question: "Can the app work before the backend is fully deployed?",
      answer:
        "Yes. It is complete and usable before two of the four edge functions are live. That was a deliberate design property, because it de-risks launch and turns the degraded state into something designed rather than an error.",
    },
    {
      question: "How long does a build like this take?",
      answer:
        "Longer than a standard scanning app, because the shader work, the agent runtime and the zoom interaction are each substantial on their own. A conventional label scanner with a list view is a much shorter build, and a much easier product to copy.",
    },
  ],
};
