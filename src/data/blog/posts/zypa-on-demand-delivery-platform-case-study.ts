import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "zypa-on-demand-delivery-platform-case-study",
  title:
    "Zypa: Building an On-Demand Delivery Platform With Bidding, Live Tracking and Driver KYC",
  seoTitle: "Zypa Delivery App Case Study",
  description:
    "How we built a three-sided delivery platform: customer app, driver app and admin dashboard, with real-time bidding and live tracking.",
  excerpt:
    "Most delivery apps set the price for you. Zypa lets drivers bid against a customer's offer, which turns one screen into a live negotiation and makes almost every other part of the system harder.",
  category: "Case Studies",
  primaryKeyword: "on demand delivery app development",
  secondaryKeywords: [
    "delivery app with bidding system",
    "flutter delivery app development",
    "driver kyc verification app",
    "live order tracking app",
  ],
  published: "2026-08-18",
  authorId: "leadership-02",
  serviceSlug: "mobile-app-development",
  keyTakeaway:
    "Zypa is an on-demand package delivery platform with three surfaces: a Flutter app that serves both customers and drivers, a web admin dashboard, and a Node backend. The feature that shaped everything else was bidding. Because a customer names a price and nearby drivers can accept it or counter, an order is not a record that gets created once. It is a negotiation with several people acting on it at the same time, and the system has to keep every one of them looking at the same truth.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "A customer wants a package moved across the city today. They open the app, set a pickup and a drop-off, describe what is in the box, choose a vehicle size, and name what they are willing to pay.",
        },
        {
          type: "p",
          text: "Drivers nearby see that offer. One accepts it outright. Two others think it is underpriced and counter with their own number. The customer looks at three bids, checks the driver profiles and ratings, picks one, and the other two bids close automatically.",
        },
        {
          type: "p",
          text: "From that moment the order moves through eight states: searching for driver, driver assigned, driver arriving, package picked up, in transit, near destination, delivered, completed. Both sides watch the same map. An admin can watch all of it from a dashboard.",
        },
        {
          type: "callout",
          text: "That is the whole product in a paragraph. Everything difficult about it comes from the fact that three parties act on one order at the same time.",
        },
      ],
    },
    {
      heading: "The problem the client actually had",
      blocks: [
        {
          type: "p",
          text: "Fixed-price delivery works when you control supply. Set the rate, pay the drivers, take a margin. It breaks when your drivers are independent and free to say no, because a rate that is fair at 2pm on a Tuesday is an insult at 7pm on a Friday in the rain.",
        },
        {
          type: "p",
          text: "The client wanted the marketplace version instead: let price find its own level, let drivers compete, take a commission. That is a better business. It is a considerably harder piece of software.",
        },
        {
          type: "h3",
          text: "Why bidding changes everything downstream",
        },
        {
          type: "list",
          items: [
            "An order is not created once and then read. It is written to by several people in the same few seconds, and every one of them is looking at a stale copy the moment they blink.",
            "A driver who accepts must not be beaten by another driver who accepted a fraction later. Somebody has to lose that race cleanly rather than both being told yes.",
            "When a customer picks a bid, every other bid has to close immediately, on the losing drivers' screens, not just in the database.",
            "Commission is a percentage of a number that did not exist when the order was created, so pricing, payouts and reporting all depend on the outcome of the negotiation.",
          ],
        },
      ],
    },
    {
      heading: "What we built",
      blocks: [
        {
          type: "p",
          text: "Three surfaces, one backend.",
        },
        {
          type: "table",
          head: ["Surface", "What it is", "Who uses it"],
          rows: [
            [
              "Mobile app",
              "One Flutter codebase serving both the customer and driver roles on Android and iOS",
              "Customers and drivers",
            ],
            [
              "Admin dashboard",
              "A web dashboard for users, drivers, deliveries, disputes, commission, pricing, broadcasts, analytics and payments",
              "Super admins and admins",
            ],
            [
              "Backend API",
              "A persistent Node service handling REST, realtime delivery events, bidding, tracking and notifications",
              "Everything above",
            ],
          ],
        },
        {
          type: "p",
          text: "One app for two roles rather than two apps was a deliberate call. A driver is often also a customer, the sign-up and verification flows are nearly identical, and shipping two binaries would have doubled the store review surface for no product gain.",
        },
        {
          type: "h3",
          text: "The pieces that are easy to underestimate",
        },
        {
          type: "list",
          items: [
            "Driver KYC. Identity documents, vehicle information, a pending state that has to feel like progress rather than rejection, and an admin approval queue behind it.",
            "Earnings. Transaction history, withdrawals, and a commission model admins can change without a redeploy.",
            "Disputes. Reports, a detail panel, and suspend or block actions, because a marketplace with no way to remove a bad actor is not a marketplace.",
            "Broadcasts. Admin-triggered notifications, which sound trivial until you are sending to drivers filtered by location and availability.",
          ],
        },
      ],
    },
    {
      heading: "The hard parts",
      blocks: [
        {
          type: "h3",
          text: "Everyone has to see the same order",
        },
        {
          type: "p",
          text: "Real-time is where delivery apps quietly fail. Not because live tracking is difficult on its own, but because five separate things all have to stay in sync: driver availability, order visibility, bid updates, order status, and the admin's view of all of it.",
        },
        {
          type: "p",
          text: "Get one of those wrong and the failure is not a crash. It is a driver arriving for an order somebody else already took, which costs them fuel and costs you a driver.",
        },
        {
          type: "h3",
          text: "The client's design was the specification",
        },
        {
          type: "p",
          text: "The UI arrived as a source of truth: customer screens, driver screens, admin screens, with design documents and reference markup alongside them. No intentional redesign was permitted.",
        },
        {
          type: "p",
          text: "That is a constraint worth taking seriously rather than resenting. It removes an entire category of argument from a project. It also means layout faults are defects rather than opinions, so the standard was explicit: no overflow, no clipped text, no unreachable controls, no broken scrolling, no overlap, on any screen.",
        },
        {
          type: "h3",
          text: "Every empty state is a real state",
        },
        {
          type: "p",
          text: "A delivery app spends a lot of its life with nothing to show. No orders yet. No bids yet. No earnings yet. No driver available. Permission denied. Network gone. KYC rejected.",
        },
        {
          type: "p",
          text: "Each of those is a screen a real person meets on their first day, and a blank rectangle at that moment is how you lose them. They were treated as designed states rather than as the absence of one.",
        },
      ],
    },
    {
      heading: "What we would tell you if you were building this",
      blocks: [
        {
          type: "p",
          text: "Three things, in the order they will bite you.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Decide your pricing model before anything else. Fixed price and bidding are not two settings on one system. They are two systems. Choosing late means rebuilding the order lifecycle, the payout logic and the admin tooling at once.",
            "Budget for the admin dashboard properly. It is roughly a third of the work and it is invisible in every demo. Nobody asks about the dispute detail panel until the first dispute.",
            "Treat verification as a product surface, not a form. Driver KYC is where your supply either arrives or gives up, and a pending screen that looks like a dead end costs you drivers you already paid to acquire.",
          ],
        },
        {
          type: "callout",
          text: "The bidding feature is a week of design and a month of consequences. That ratio is normal, and it is worth knowing before you commit rather than after.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does it take to build a delivery app like Zypa?",
      answer:
        "A three-surface platform of this shape, meaning a dual-role mobile app, an admin dashboard and a realtime backend, is a months-long build rather than a weeks-long one. The mobile app alone is the smaller half. The admin dashboard, KYC approval flow, commission configuration and dispute handling account for a surprising share of the total.",
    },
    {
      question: "Is bidding harder to build than fixed pricing?",
      answer:
        "Considerably. Fixed pricing means an order is created once and read many times. Bidding means several drivers write to the same order within seconds, one has to win cleanly, the rest have to be closed on their own screens, and commission depends on a number that did not exist when the order was created.",
    },
    {
      question: "Why one app for both customers and drivers instead of two?",
      answer:
        "Sign-up, phone verification, profile and support flows are nearly identical for both roles, and drivers are frequently customers too. Two binaries would have doubled the app store review surface and the release process without giving either audience anything they did not already have.",
    },
    {
      question: "What does driver KYC actually involve?",
      answer:
        "Identity and vehicle documents uploaded to private storage, a pending state while review happens, an admin queue for approval or rejection, and a rejected state that tells the driver exactly what to fix. It is the point where a marketplace either builds a supply side or fails to.",
    },
    {
      question: "Can admins change commission without shipping a new release?",
      answer:
        "Yes, and they should be able to. Commission settings and pricing configuration are admin dashboard surfaces rather than constants compiled into the app, because a marketplace that needs a store review to change its take rate cannot respond to its own market.",
    },
  ],
};
