/**
 * Websites in the homepage carousel.
 *
 * Every card is a screenshot captured from the live site at 1440x900 on
 * 14 Aug 2026, not a mockup. Every `summary` is taken from that site's own
 * `<title>` or hero copy — nothing here describes a site that was not read.
 *
 * RELATIONSHIP TO `portfolio.ts`: that file is the canonical record and drives
 * `PORTFOLIO_COUNT`, which the hero renders as a claim. This list overlaps it
 * but is not the same set — it adds four product marketing sites (Decorly,
 * NutriNudge, SalafiMatch, The Nikky) that are not in the portfolio data yet.
 * They are kept separate deliberately: adding them to `portfolio.ts` would move
 * a number the homepage states out loud, and that is a decision for the
 * founders rather than a side effect of adding a carousel.
 *
 * Following `portfolio.ts`'s own rule, nothing here labels an entry as our own
 * brand or a client's. The heading is accurate either way: sites we built.
 */

export interface WorkSite {
  name: string;
  /** Live URL. Every one returned 200 when captured. */
  url: string;
  /** Card image, 760x476, cropped from the top of the page. */
  image: string;
  /** One line, from the site's own title or hero. */
  summary: string;
}

export const WORK_SITES: WorkSite[] = [
  {
    name: "Decorly",
    url: "https://decorly.click",
    image: "/work-sites/decorly.webp",
    summary: "AI home, interior and garden design",
  },
  {
    name: "NutriNudge",
    url: "https://nutrinudge.app",
    image: "/work-sites/nutrinudge.webp",
    summary: "AI calorie counter and nutrition coach",
  },
  {
    name: "SalafiMatch",
    url: "https://salafimatch.app",
    image: "/work-sites/salafimatch.webp",
    summary: "Matrimonial platform for practising Muslims",
  },
  {
    name: "The Nikky",
    url: "https://thenikky.com",
    image: "/work-sites/thenikky.webp",
    summary: "Video editor and creative director portfolio",
  },
  {
    name: "TweetX",
    url: "https://tweetx.ai",
    image: "/work-sites/tweetx.webp",
    summary: "X growth tool, scheduler and auto-reply",
  },
  {
    name: "VidBook",
    url: "https://www.vidbook.co",
    image: "/work-sites/vidbook.webp",
    summary: "Turns long-form video into KDP-ready books",
  },
  {
    name: "Kengumi",
    url: "https://www.kengumi.jp",
    image: "/work-sites/kengumi.webp",
    summary: "Steel fabrication and rigging, Funabashi",
  },
];

export const WORK_SITE_COUNT = WORK_SITES.length;
