import type { MetadataRoute } from "next";

import { SITE_URL } from "@/app/layout";
import { POSTS } from "@/data/blog";
import { PRODUCTS } from "@/data/products";
import { ALL_SERVICES } from "@/data/services";

/**
 * A real XML sitemap.
 *
 * Worth noting: the site this design came from advertised a sitemap in its
 * robots.txt that returned the SPA's HTML shell with a 200 — so it effectively
 * had none. This one is generated from the routes that actually exist.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    priority: number;
    frequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    /**
     * Only set where we genuinely know when the content last changed. A blog
     * post knows its own date; a marketing page does not, and stamping every
     * URL with the build time tells a crawler the whole site changed on every
     * deploy — a claim it learns to ignore.
     */
    lastModified?: Date;
  }> = [
    { path: "/", priority: 1.0, frequency: "weekly" },
    { path: "/services", priority: 0.9, frequency: "monthly" },
    { path: "/products", priority: 0.9, frequency: "monthly" },
    { path: "/portfolio", priority: 0.9, frequency: "monthly" },
    { path: "/contact", priority: 0.9, frequency: "monthly" },
    { path: "/blog", priority: 0.9, frequency: "weekly" },
    { path: "/process", priority: 0.8, frequency: "monthly" },
    { path: "/industries", priority: 0.8, frequency: "monthly" },
    { path: "/about", priority: 0.7, frequency: "monthly" },
    { path: "/team", priority: 0.6, frequency: "monthly" },
    { path: "/careers", priority: 0.6, frequency: "weekly" },
    ...ALL_SERVICES.map((service) => ({
      path: `/services/${service.slug}`,
      priority: 0.8,
      frequency: "monthly" as const,
    })),
    ...POSTS.map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.7,
      frequency: "monthly" as const,
      lastModified: new Date(`${post.updated ?? post.published}T00:00:00Z`),
    })),
    ...PRODUCTS.map((product) => ({
      path: `/products/${product.slug}`,
      priority: 0.7,
      frequency: "monthly" as const,
    })),
    { path: "/privacy-policy", priority: 0.3, frequency: "yearly" },
    { path: "/terms", priority: 0.3, frequency: "yearly" },
  ];

  return routes.map(({ path, priority, frequency, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    // Omitted rather than faked. Every URL previously carried the build
    // timestamp, which claims the entire site changed on every deploy — a
    // signal a crawler learns to distrust and then ignores, taking the
    // genuine blog dates down with it. An absent lastmod is valid.
    ...(lastModified ? { lastModified } : {}),
    changeFrequency: frequency,
    priority,
  }));
}
