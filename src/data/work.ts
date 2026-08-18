import { PRODUCTS, primaryLink } from "@/data/products";
import type { VideoTestimonial } from "@/types";

/**
 * The "Work in Production" rail on the homepage.
 *
 * REPLACED, not renamed. This previously carried sixteen video testimonials from
 * the source company — real, named individuals, streaming from that company's
 * Gumlet account. Presenting other people's customers as ApexStack's was
 * misleading and the media was not ours to serve, so both the identities and the
 * streams are gone.
 *
 * It then briefly carried generic system categories — "Payments Platform",
 * "Patient Portal" — which read as real projects without being any. The rail now
 * draws straight from `products.ts`, so every card is an app that exists, is
 * published under the parent company, and links to its own store listing. A
 * visitor can check any of them in one click.
 *
 * TO IMPROVE FURTHER: swap `thumbnail` for a real screenshot per product at
 * public/products/<slug>.png. The placeholders hold the exact footprint until
 * then, so nothing shifts when they land.
 */

export interface WorkItem {
  /** What was built. */
  name: string;
  /** Sector or platform. */
  role: string;
  /** Card image — product screenshot once available. */
  thumbnail: string;
  /** Store or site listing, so the card can be verified in one click. */
  href?: string;
  /** Optional case-study video on our own hosting. */
  videoUrl?: string;
}

/** Sixteen branded placeholders exist; the rail takes the first sixteen products. */
const RAIL_LENGTH = 16;

export const WORK_ITEMS: WorkItem[] = PRODUCTS.slice(0, RAIL_LENGTH).map(
  (product, index) => ({
    name: product.name,
    role: product.category,
    thumbnail: `/brand/ph/work-${String(index + 1).padStart(2, "0")}.webp`,
    href: primaryLink(product),
  }),
);

/** Kept for the existing rail's prop shape. */
export const VIDEO_TESTIMONIALS: VideoTestimonial[] = WORK_ITEMS.map((item) => ({
  name: item.name,
  role: item.role,
  videoUrl: item.videoUrl ?? "",
  thumbnail: item.thumbnail,
}));

/**
 * Culture imagery for "Inside ApexStack".
 * TODO: replace with real photographs of the team working.
 */
export const COMMUNITY_IMAGES: string[] = Array.from(
  { length: 16 },
  (_, i) => `/brand/ph/culture-${String(i + 1).padStart(2, "0")}.webp`,
);

/**
 * Showreel.
 * TODO: set IMMERSION_VIDEO_EMBED to our own hosted film and swap the poster.
 * Empty string means the section renders the poster without a play control.
 */
export const IMMERSION_VIDEO_EMBED = "";
export const SHOWREEL_POSTER = "/brand/ph/showreel.webp";
