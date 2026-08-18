import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "nodrahweb-whatsapp-saas-case-study",
  title:
    "NodrahWeb: A WhatsApp SaaS for Arabic Merchants, and the Audit That Found the Missing Reply Box",
  seoTitle: "NodrahWeb WhatsApp SaaS Case Study",
  description:
    "How we built a multi-tenant WhatsApp automation platform for the Gulf market, with RTL Arabic, two payment gateways and an honest UX audit.",
  excerpt:
    "The AI answered every customer automatically. What the conversation screen did not have was a way for the merchant to take over and type something themselves.",
  category: "Case Studies",
  primaryKeyword: "whatsapp saas development",
  secondaryKeywords: [
    "multi tenant saas development",
    "arabic rtl web application",
    "whatsapp business api integration",
    "ux audit web application",
  ],
  published: "2026-08-19",
  authorId: "leadership-02",
  serviceSlug: "saas-development",
  keyTakeaway:
    "NodrahWeb is a multi-tenant SaaS that lets merchants automate WhatsApp conversations with an AI that replies on their behalf. Two things define the build: it is engineered for the Gulf market from the ground up, meaning right-to-left Arabic and a regional payment gateway alongside the international one, and a full UX audit against the live code found that the conversation screen had no way for a merchant to take over from the AI and reply themselves.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "A merchant connects their WhatsApp. Customers message as they always did. An AI answers on the merchant's behalf, following instructions the merchant configures, and the merchant watches the conversations from a dashboard.",
        },
        {
          type: "p",
          text: "Around that sit the things any real SaaS needs: organisations, an admin surface, campaigns, billing, withdrawals, health monitoring and telemetry.",
        },
        {
          type: "callout",
          text: "Automating a conversation is the easy half. Handing control back to a human at the right moment is the half that decides whether merchants trust it.",
        },
      ],
    },
    {
      heading: "Built for the Gulf, not translated into it",
      blocks: [
        {
          type: "p",
          text: "Two choices in the dependency list say more about the market than any positioning document would.",
        },
        {
          type: "h3",
          text: "Right to left is a layout problem, not a text problem",
        },
        {
          type: "p",
          text: "Arabic support is not a matter of swapping strings. The entire layout mirrors: navigation, icon direction, table column order, form alignment, the side a drawer opens from, the direction progress moves in.",
        },
        {
          type: "p",
          text: "Building that in from the beginning with a proper internationalisation layer and RTL-aware styling is ordinary work. Retrofitting it into a finished left-to-right product means revisiting every screen, and it is one of the most reliably underestimated pieces of work in web development.",
        },
        {
          type: "h3",
          text: "Two payment gateways, because one does not cover the market",
        },
        {
          type: "p",
          text: "The platform integrates an international card processor and a regional Gulf gateway. That is not redundancy. Local payment methods dominate in the region, and a checkout offering only international cards will lose a large share of otherwise willing customers at the final step.",
        },
        {
          type: "p",
          text: "The engineering cost is real: two webhook formats, two reconciliation paths, two sets of failure modes, one subscription state to keep coherent. It is worth it when the alternative is a checkout most of your market cannot complete.",
        },
      ],
    },
    {
      heading: "The audit, and what it found",
      blocks: [
        {
          type: "p",
          text: "The project includes a UI and UX consistency audit produced by reading the live codebase rather than by opinion, with each finding carrying a file and line reference and a concrete fix.",
        },
        {
          type: "p",
          text: "The most instructive finding was the first one.",
        },
        {
          type: "h3",
          text: "The conversation screen had no reply box",
        },
        {
          type: "p",
          text: "The thread rendered messages and displayed a badge saying the AI was replying automatically. There was no input, no send button, nothing. A merchant whose AI had just answered a customer badly, or a customer explicitly asking for a human, could only watch.",
        },
        {
          type: "p",
          text: "That is a coherent product decision taken to its logical end, and the moment you picture a real merchant reading a bad automated reply it is obviously wrong. It is the kind of gap that survives many demos, because a demo shows the AI succeeding.",
        },
        {
          type: "h3",
          text: "Two smaller findings with the same shape",
        },
        {
          type: "list",
          items: [
            "A button labelled Reset actually refetched from the server, so a merchant who had typed a long prompt and wanted to clear it instead lost their unsaved edits and got the server state back.",
            "A prominent New Campaign button did nothing at all, which is worse than not having one, because it advertises a capability and then fails silently.",
          ],
        },
        {
          type: "p",
          text: "None of these are difficult to fix. All of them are difficult to notice from inside the team that built the feature, which is exactly why an audit read against the code is worth the time.",
        },
      ],
    },
    {
      heading: "The platform underneath",
      blocks: [
        {
          type: "table",
          head: ["Area", "What it covers"],
          rows: [
            ["Tenancy", "Organisations, membership, an admin surface across them"],
            ["Messaging", "WhatsApp integration and automatic AI replies"],
            ["Money", "International and regional gateways, checkout, withdrawals"],
            ["Operations", "Health endpoints, telemetry, email"],
            ["Quality", "Browser-driven end-to-end tests"],
            ["Marketing", "Localised content and blog in the same application"],
          ],
        },
        {
          type: "p",
          text: "Withdrawals deserve a mention. The moment a platform holds money on behalf of merchants and pays it out, it acquires an approval flow, an audit trail and a category of support request that has nothing to do with messaging. It is easy to scope as a line item and it is a feature in its own right.",
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
            "Decide your languages before you write layout. Right to left mirrors the entire interface, and retrofitting it means revisiting every screen you have already built.",
            "Check which payment methods your market actually uses. An international card processor alone will quietly lose customers at checkout in many regions, and you will read it as poor conversion rather than as a missing gateway.",
            "Always leave a human override on an automated conversation. The automation will be wrong sometimes, and a merchant who cannot intervene will stop trusting it entirely.",
            "Audit against the code, not against the design. Buttons that do nothing and labels that mean the wrong thing survive design review and are obvious in the source.",
          ],
        },
        {
          type: "callout",
          text: "A dead button is worse than a missing one. It promises something and then quietly fails.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What makes right-to-left support harder than translation?",
      answer:
        "Translation swaps strings. Right to left mirrors the layout: navigation, icon direction, table column order, form alignment, which side drawers open from, and the direction progress moves in. Built in from the start it is ordinary work. Retrofitted, it means revisiting every screen in the product.",
    },
    {
      question: "Why integrate two payment gateways?",
      answer:
        "Because local payment methods dominate in many regions, and a checkout offering only international cards loses a large share of willing customers at the final step. The cost is two webhook formats and two reconciliation paths against one coherent subscription state, which is cheaper than a checkout most of your market cannot complete.",
    },
    {
      question: "Why does an AI messaging tool need a manual reply option?",
      answer:
        "Because the automation will sometimes be wrong, and some customers will ask for a person directly. Without a way to take over, a merchant can only watch a bad reply go out. That single gap undermines trust in the whole product.",
    },
    {
      question: "What is the value of a code-level UX audit?",
      answer:
        "It finds things a design review cannot: buttons wired to nothing, labels that describe the wrong action, flows missing a control entirely. Each finding carries a file and line reference and a specific fix, so it becomes a work list rather than a set of opinions.",
    },
    {
      question: "What do people underestimate in a multi-tenant SaaS?",
      answer:
        "The surrounding platform. Organisations, an admin surface, health monitoring, telemetry, email and a withdrawals flow with its own approvals and audit trail are all required before the product is operable, and none of them are the feature customers came for.",
    },
  ],
};
