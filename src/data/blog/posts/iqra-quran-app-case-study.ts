import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "iqra-quran-app-case-study",
  title:
    "Iqra: Prayer Times, Background Audio and Notifications That Cannot Be Late",
  seoTitle: "Iqra Islamic App Case Study",
  description:
    "How we built an Islamic app where a notification arriving five minutes late is a defect, not a delay, and audio must survive a locked screen.",
  excerpt:
    "Most apps can be a few minutes late with a notification. An app that calls someone to prayer cannot, and that single requirement shapes the entire build.",
  category: "Case Studies",
  primaryKeyword: "islamic app development",
  secondaryKeywords: [
    "prayer times app development",
    "background audio mobile app",
    "local notification scheduling",
    "quran app development",
  ],
  published: "2026-08-05",
  authorId: "leadership-01",
  serviceSlug: "mobile-app-development",
  keyTakeaway:
    "Iqra combines Quran reading, prayer times, a qibla compass and a Hijri calendar. Its defining constraint is timing. A prayer notification is tied to a calculated moment based on the user's location, and arriving late makes it useless, so the work concentrates on reliable local scheduling, background audio that survives a locked screen, and correct behaviour across time zones and daylight saving changes.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        {
          type: "p",
          text: "Read the Quran, know when to pray, find the qibla, follow the Hijri calendar. Four things that people use every day, several times a day, for years.",
        },
        {
          type: "p",
          text: "That usage pattern is the point. This is not an app someone opens during a commute out of boredom. It is part of a daily routine, and anything unreliable in it is noticed immediately and remembered.",
        },
        {
          type: "callout",
          text: "A notification five minutes late is not a slow notification. It is a wrong one.",
        },
      ],
    },
    {
      heading: "Timing is the whole problem",
      blocks: [
        {
          type: "p",
          text: "Prayer times are calculated from the user's geographic position and change every day. That produces a chain of requirements that each look small and collectively are the hardest part of the app.",
        },
        {
          type: "list",
          items: [
            "Location has to be obtained and permission handled gracefully, including when it is refused, because the app must still be useful with a manually chosen city.",
            "Notifications have to be scheduled locally rather than pushed from a server, because they must fire on time with no network at all.",
            "Time zone handling has to be explicit. A device that crosses a boundary, or a region that shifts for daylight saving, must not produce a notification at the wrong hour.",
            "Background work has to reschedule the coming days, because local notifications are scheduled ahead and the queue has to be kept topped up.",
          ],
        },
        {
          type: "p",
          text: "Any one of these done casually produces an app that works on the developer's phone in one city and fails for a user who travels.",
        },
      ],
    },
    {
      heading: "Audio that survives a locked screen",
      blocks: [
        {
          type: "p",
          text: "Recitation audio has to keep playing when the screen locks and when the user switches apps. Someone listening while doing something else is the normal case, not an edge case.",
        },
        {
          type: "p",
          text: "Background audio is one of those capabilities that is straightforward to demonstrate and awkward to get right across both platforms, because each has its own rules about what may continue in the background and under what declared category.",
        },
        {
          type: "h3",
          text: "The compass problem",
        },
        {
          type: "p",
          text: "The qibla compass depends on the device magnetometer, which is affected by nearby metal, phone cases and calibration drift. A compass that points confidently in the wrong direction is worse than one that admits it needs calibrating, which is the same design principle that governs any feature giving an answer people act on.",
        },
      ],
    },
    {
      heading: "Shipping changes to an app people rely on",
      blocks: [
        {
          type: "p",
          text: "The project includes remote configuration and messaging, which matter more here than they would in a casual app.",
        },
        {
          type: "p",
          text: "Remote configuration means a calculation parameter or a regional adjustment can be corrected without waiting for a store review and a user update. When the thing being corrected is a prayer time, the difference between hours and weeks is the difference between a fix and a problem.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Schedule locally so correctness never depends on connectivity.",
            "Keep a remote lever for parameters you may need to correct quickly.",
            "Test across time zones and daylight saving boundaries deliberately, not incidentally.",
            "Make the app useful without location permission, because some users will always decline it.",
          ],
        },
        {
          type: "callout",
          text: "Daily-use apps are judged on reliability, not features. The second time something is wrong, the app is deleted.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why schedule prayer notifications locally instead of pushing them?",
      answer:
        "Because they must fire on time with no network connection. A push notification depends on connectivity and delivery timing you do not control. Local scheduling puts correctness in the app's hands, which is the only acceptable answer when lateness makes the notification useless.",
    },
    {
      question: "What breaks when a user travels?",
      answer:
        "Time zone handling, if it was left implicit. A device crossing a boundary or a region shifting for daylight saving can produce notifications at the wrong hour. This has to be handled explicitly and tested deliberately, because it never appears on a developer's phone in one city.",
    },
    {
      question: "Why is background audio difficult?",
      answer:
        "Both platforms have their own rules about what may keep running in the background and under which declared category. Playback that continues through a screen lock and an app switch is easy to demonstrate and awkward to get consistently right across both.",
    },
    {
      question: "How accurate is a phone qibla compass?",
      answer:
        "It depends on the magnetometer, which is affected by nearby metal, phone cases and calibration drift. The honest design is one that prompts for calibration rather than pointing confidently in a direction it is not sure about.",
    },
    {
      question: "Why does remote configuration matter in an app like this?",
      answer:
        "Because a calculation parameter may need correcting quickly. Without a remote lever, a fix waits for a store review and then for users to update. With one, it takes hours. When the value being corrected is a prayer time, that gap matters.",
    },
  ],
};
