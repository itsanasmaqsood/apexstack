/**
 * Web platforms ApexStack has built and shipped.
 *
 * Every `summary` below is taken from the live site itself, not written from
 * imagination — each one was read before it was described here.
 *
 * TWO ENTRIES ARE HIDDEN. `live: false` keeps a record without publishing a
 * broken link. Checked in a real browser on 10 Aug 2026:
 *   - muslimmvp.com — DNS does not resolve; the domain appears to have lapsed.
 *   - raqmyat.store — serves 403 Forbidden.
 * Both reappear on the page automatically the moment they respond again; set
 * `live: true` once the domain is back.
 *
 * A note on `kind`. The founders' position is that most of these are their own
 * brands and that permissions will be settled separately. Three of them are
 * plainly somebody else's business — a steel fabricator, a farmland clearance
 * firm and a renovation company — so calling the whole list "our own brands"
 * would be untrue. The page therefore never labels an entry own-vs-client. It
 * renders them all under one heading that is accurate either way: platforms we
 * built and shipped. `kind` is recorded here for the founders' own use and is
 * not published anywhere.
 *
 * No third-party metric is repeated. Karveda's site advertises its own filing
 * count and guarantee, for instance; that is Karveda's claim to make, not
 * ApexStack's.
 */

export type PortfolioKind = "own" | "client" | "unconfirmed";

export interface PortfolioItem {
  slug: string;
  name: string;
  url: string;
  /** Internal only — never rendered. */
  kind: PortfolioKind;
  /** False hides the entry: a dead outbound link is worse than no link. */
  live?: boolean;
  /** One sentence, sourced from the live site. */
  summary?: string;
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "tweetx",
    name: "TweetX",
    url: "https://tweetx.ai",
    kind: "own",
    summary:
      "An AI growth platform for X: scheduling, on-brand auto-replies, multi-account management and analytics.",
  },
  {
    slug: "vidbook",
    name: "VidBook",
    url: "https://www.vidbook.co",
    kind: "own",
    summary:
      "An AI publishing studio that turns long-form video into Amazon KDP-ready books and digital products.",
  },
  {
    slug: "karveda",
    name: "Karveda",
    url: "https://www.karveda.com",
    kind: "own",
    summary:
      "Income tax filing, GST compliance, company law services and audits for Indian startups and SMEs.",
  },
  {
    slug: "nodrah-web",
    name: "NodrahWeb",
    url: "http://nodrahweb.com",
    kind: "own",
    summary:
      "WhatsApp automation on the Meta Cloud API that answers inbound leads in English, Hindi and eighteen regional languages.",
  },
  {
    slug: "snk-system",
    name: "SNK System",
    url: "http://snk-system.jp",
    kind: "own",
    summary:
      "MVP, web, mobile and internal-system development for Japanese startups and SMEs, on React, Next.js, TypeScript, AWS and Flutter.",
  },
  {
    slug: "muslimmvp",
    name: "MuslimMVP",
    url: "https://muslimmvp.com",
    kind: "own",
    live: false,
  },
  {
    slug: "raqmyat",
    name: "Raqmyat",
    url: "http://raqmyat.store",
    kind: "own",
    live: false,
  },
  {
    slug: "kengumi",
    name: "Kengumi",
    url: "https://www.kengumi.jp",
    kind: "client",
    summary:
      "Site for a steel fabrication, ironwork, heavy rigging and scaffolding contractor in Funabashi, Chiba.",
  },
  {
    slug: "one-everymeeting",
    name: "ONE",
    url: "https://one-everymeeting.jp",
    kind: "client",
    summary:
      "Site for a full-service renovation company in Chiba covering exterior painting, roofing and interior work.",
  },
  {
    slug: "ftf-nougyo",
    name: "FTF",
    url: "https://ftf-nougyo.jp",
    kind: "client",
    summary:
      "Site for an agricultural contractor in Ibaraki clearing farmland and abandoned cropland.",
  },
];

/** What the page renders: everything currently responding. */
export const LIVE_PORTFOLIO = PORTFOLIO.filter((item) => item.live !== false);

export const PORTFOLIO_COUNT = LIVE_PORTFOLIO.length;

/** Recorded but hidden until their domains respond again. */
export const PORTFOLIO_OFFLINE = PORTFOLIO.filter((item) => item.live === false);
