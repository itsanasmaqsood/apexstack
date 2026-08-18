/**
 * The content model for the blog.
 *
 * WHY THIS IS STRUCTURED RATHER THAN MARKDOWN: every field here does a job that
 * plain prose cannot. `keyTakeaway` is the self-contained paragraph an answer
 * engine lifts when it cites us. `faqs` become a `FAQPage` graph. `table` blocks
 * are the single format AI Overviews quote most often for comparison queries.
 * `primaryKeyword` keeps the target visible at the point of writing instead of
 * living in a spreadsheet nobody opens. Markdown would let all of that drift.
 *
 * A post is a data file, not a page. `src/app/blog/[slug]/page.tsx` is the only
 * thing that decides how any of it renders.
 */

/**
 * The four clusters. Each maps to a buyer we actually want, and each post links
 * back to the service page that sells to that buyer — that internal link is the
 * reason the blog exists at all.
 */
export type BlogCategory =
  | "Choosing a Partner"
  | "MVP & Startups"
  | "Automation & Internal Tools"
  | "AI Engineering"
  | "Legacy Modernisation"
  | "Design & Brand";

/**
 * Order is the buyer's order, not ours. "Choosing a Partner" leads because it
 * is the stage a reader is at when they are closest to spending money —
 * comparing firms, arguing about contract shape, worrying about who owns the
 * code. The other four clusters answer how the work gets done, which matters to
 * the same person a week later.
 */
export const BLOG_CATEGORIES: readonly BlogCategory[] = [
  "Choosing a Partner",
  "MVP & Startups",
  "Automation & Internal Tools",
  "AI Engineering",
  "Legacy Modernisation",
  "Design & Brand",
] as const;

/** A paragraph. The workhorse block. */
export interface ParagraphBlock {
  type: "p";
  text: string;
}

/** Bulleted or numbered list. Numbered lists signal a procedure to crawlers. */
export interface ListBlock {
  type: "list";
  ordered?: boolean;
  items: string[];
}

/**
 * A comparison table. Disproportionately valuable: comparison and cost queries
 * are what convert for high-consideration purchases, and a real table is what
 * answer engines quote back.
 */
export interface TableBlock {
  type: "table";
  caption?: string;
  head: string[];
  rows: string[][];
}

/** A pulled-out statement. Used sparingly — one or two per post at most. */
export interface CalloutBlock {
  type: "callout";
  text: string;
}

/** Fenced code. `lang` is a label only; there is no syntax highlighter. */
export interface CodeBlock {
  type: "code";
  lang: string;
  code: string;
}

/** A sub-heading inside a section, rendered as an h3. */
export interface SubheadingBlock {
  type: "h3";
  text: string;
}

export type BlogBlock =
  | ParagraphBlock
  | ListBlock
  | TableBlock
  | CalloutBlock
  | CodeBlock
  | SubheadingBlock;

/** One h2 and everything under it. */
export interface BlogSection {
  /**
   * Rendered as an h2 and used to build the table of contents, so it must read
   * as a standalone phrase. Question-shaped headings are preferred: they match
   * how people actually search and how answer engines segment a page.
   */
  heading: string;
  blocks: BlogBlock[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  /** URL segment. Lowercase, hyphenated, no dates, never changes once published. */
  slug: string;

  /** The on-page h1. May run longer and read more naturally than `seoTitle`. */
  title: string;

  /**
   * The `<title>` tag. Keep at or under 60 characters or Google truncates it in
   * the results page. Front-load the keyword.
   */
  seoTitle: string;

  /**
   * Meta description. 150 characters or fewer. Not a ranking factor, entirely a
   * click-through factor — write it as ad copy, not as a summary.
   */
  description: string;

  /** One or two sentences shown on the index card. */
  excerpt: string;

  category: BlogCategory;

  /** The one query this post is built to win. */
  primaryKeyword: string;

  /** Supporting queries the post should also cover. */
  secondaryKeywords: string[];

  /** ISO date, `YYYY-MM-DD`. Drives ordering and `datePublished`. */
  published: string;

  /**
   * Pins the post to the top of the blog index, above the category clusters.
   *
   * Date ordering alone cannot express "read this one first": the orientation
   * post is older than most of what it introduces, so it sinks. Exactly one
   * post should carry this.
   */
  pinned?: boolean;

  /** ISO date. Set when the post is materially revised, never on a typo fix. */
  updated?: string;

  /** Must match an `id` in `src/data/team.ts`. Real author, real credentials. */
  authorId: string;

  /**
   * The answer to the title, in two or three sentences, standing entirely on its
   * own. This is the passage an AI Overview or a Perplexity answer will quote,
   * so it must make sense with zero surrounding context.
   */
  keyTakeaway: string;

  sections: BlogSection[];

  /** Becomes a `FAQPage` node. Three to six entries. */
  faqs: BlogFaq[];

  /**
   * Slugs of related posts. Left empty by the author and filled in by the
   * registry, so no post has to know what else exists.
   */
  related?: string[];

  /**
   * The service page this post should drive traffic to, e.g. `mvp-development`.
   * Must match a slug in `src/data/services.ts`. This is the conversion path.
   */
  serviceSlug?: string;
}
