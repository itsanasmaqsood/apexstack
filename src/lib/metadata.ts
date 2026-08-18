import type { Metadata } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * One builder for every page's metadata.
 *
 * WHY THIS EXISTS: Next merges `metadata` shallowly. A page that declared
 * `openGraph: { title, description, url }` replaced the root object outright,
 * silently dropping `og:image`, `og:site_name` and `og:type`. Thirteen pages did
 * exactly that, and the two dynamic routes did it for another 44 URLs — so 53 of
 * 56 pages unfurled in Slack, LinkedIn and WhatsApp as a bare text link. Worse,
 * none of them set `twitter` at all, so every inner page advertised the
 * homepage's title and description on X.
 *
 * Passing every page through this function makes that class of bug impossible:
 * the shared keys are supplied here and only the per-page ones are arguments.
 */

/**
 * JPEG rather than the WebP original. Both are 1200x630 and both are in
 * `public/brand/`; the JPEG exists because several scrapers — LinkedIn's among
 * them — still will not render a WebP card. `og.webp` is untouched.
 */
export const OG_IMAGE = {
  url: "/brand/og.jpg",
  width: 1200,
  height: 630,
  alt: "ApexStack — custom software and product engineering",
} as const;

/** The `article:*` OG properties. Supplying this makes the page an article. */
export interface ArticleMeta {
  publishedTime: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
}

export interface PageMetaInput {
  /** The `<title>`. Keep at or under 60 characters. */
  title: string;
  /** The meta description. Keep at or under 155 characters. */
  description: string;
  /** Absolute path from the site root, e.g. `/services/ai-development`. */
  path: string;
  /**
   * Article properties for a blog post. Present means `og:type` is `article`;
   * absent means `website`.
   *
   * This is a parameter rather than something a caller merges afterwards
   * because Next types `openGraph` as a discriminated union on `type` — a
   * caller spreading the returned object loses the discriminant and fails to
   * compile. Building the whole object here keeps the literal type intact.
   */
  article?: ArticleMeta;
  /** Overrides the shared brand card. Rarely needed. */
  image?: { url: string; width: number; height: number; alt: string };
  /** Extra top-level keys merged over the result — robots, authors, keywords. */
  extra?: Metadata;
}

export function pageMetadata({
  title,
  description,
  path,
  article,
  image = OG_IMAGE,
  extra,
}: PageMetaInput): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");
  const url = `${SITE_URL}${canonical === "/" ? "" : canonical}`;
  const shared = {
    siteName: "ApexStack",
    title,
    description,
    url,
    locale: "en_GB",
    images: [{ ...image }],
  };

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: article
      ? { ...shared, type: "article", ...article }
      : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
    ...extra,
  };
}
