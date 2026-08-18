import type { MetadataRoute } from "next";

import { SITE_URL } from "@/app/layout";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The enquiry endpoint has nothing to index and should not be crawled.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
