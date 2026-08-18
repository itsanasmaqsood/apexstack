import type { BlogCategory } from "@/data/blog/types";

/**
 * Cluster artwork for the blog.
 *
 * WHERE THESE COME FROM: `/home/nc1-5.webp` are the five illustrations already
 * on the homepage behind the "Five phases. No surprises." rail. Nothing new was
 * generated and nothing was replaced — the blog reuses the artwork the brand
 * already owns, which is also why the two sections read as one site.
 *
 * They suit the job unusually well. Each is 2073x552, so roughly 3.75:1 — a
 * banner shape rather than a photograph. Each holds its subject and its light
 * on the right-hand third and leaves the left in near-darkness, which means a
 * heading can sit over the left without a scrim and without fighting anything.
 * Every one of them is a single small figure in a large space.
 *
 * WHY ONE PER CLUSTER RATHER THAN ONE PER POST: with 24 posts, per-post artwork
 * would repeat every few cards and read as random. Tying an image to a cluster
 * instead makes it carry information — by the second visit the staircase means
 * automation before the heading is read. The homepage renders these desaturated
 * unless active; the blog runs them in colour, because here the colour is what
 * separates one cluster from another.
 *
 * WHY ONLY THREE OF THE FIVE: the owner reviewed these in place and cut the two
 * most abstract — `nc4`, a figure ascending into golden storm cloud, and `nc5`,
 * a figure holding a light at night. Both are beautiful and neither survives
 * being sat above "What It Costs to Run an LLM Feature in Production"; the gap
 * between picture and subject reads as stock filler to the technical buyer this
 * blog is written for. The three that remain all depict effort against terrain
 * — a leap, a climb, a descent — which is close enough to the work to earn the
 * space. AI Engineering and the index run text-only rather than take a weaker
 * image, and `image` is optional here so that stays a deliberate absence.
 *
 * `alt` describes what is depicted rather than restating the heading beside it.
 * These are atmospheric, not diagrams, so keyword-stuffing the alt would be
 * both dishonest and useless — an abstract illustration is never going to rank
 * for "MVP development cost".
 */

export interface ClusterImage {
  src: string;
  alt: string;
  /** Intrinsic dimensions, so a layout shift is impossible. */
  width: number;
  height: number;
}

/**
 * Partial by design. A cluster with no entry renders no banner, and that is a
 * decision rather than an oversight — see the note above.
 */
export const CLUSTER_IMAGE: Partial<Record<BlogCategory, ClusterImage>> = {
  // The leap itself — commitment made before the far side is certain.
  "MVP & Startups": {
    src: "/home/nc1.webp",
    alt: "A lone figure mid-leap between two clifftops, lit from the far side of the gap",
    width: 2073,
    height: 552,
  },
  // A cut staircase: progress that only exists because someone built each step.
  "Automation & Internal Tools": {
    src: "/home/nc3.webp",
    alt: "A figure climbing a stone staircase carved in a spiral out of blue rock",
    width: 2073,
    height: 552,
  },
  // Descending into the dark to see what the old system is actually made of.
  "Legacy Modernisation": {
    src: "/home/nc2.webp",
    alt: "A figure descending through deep blue water towards a distant circle of light",
    width: 2073,
    height: 558,
  },

  // "AI Engineering" is intentionally absent. `nc4` sat above posts on RAG cost
  // and evaluation and read as decoration; text-only is the stronger option
  // until artwork that matches the subject exists.
};
