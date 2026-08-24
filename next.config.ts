import type { NextConfig } from "next";

/**
 * `output: "standalone"` bundles a self-contained server into `.next/standalone`,
 * which is what this repo's Dockerfile copies out. Vercel runs its own
 * output-file tracing, and the two collide — the build dies with
 * `ENOENT: no such file or directory, open '.next/next-server.js.nft.json'`.
 *
 * So standalone is enabled everywhere except Vercel, which sets `VERCEL=1`
 * during its builds. Docker keeps working; Vercel builds clean.
 */

/** Every top-level directory under `public/` that holds static media. */
const ASSET_ROOTS = [
  "brand",
  "cdn",
  "home",
  "homepage",
  "images",
  "products",
  "seo",
  "team",
  "videos",
] as const;

/**
 * A day in the browser cache, a week of serving stale while revalidating.
 *
 * Not `immutable`: these filenames are not content-hashed, so a replaced image
 * keeps its path and an immutable directive would strand visitors on the old
 * bytes for a year. Everything under `public/` was being served
 * `max-age=0, must-revalidate`, which put a network round-trip in front of all
 * 96 assets on the homepage for every repeat visitor.
 */
const ASSET_CACHE = "public, max-age=86400, stale-while-revalidate=604800";

/**
 * Conservative security headers. Deliberately no Content-Security-Policy: this
 * site inlines JSON-LD and Next injects its own inline bootstrap, so a CSP
 * needs nonce plumbing and real testing rather than a blind default.
 */
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),

  /**
   * Lets `next/image` negotiate AVIF and WebP. Note the site still uses raw
   * `<img>` almost everywhere, so this only takes effect as components are
   * migrated — it is the prerequisite, not the win.
   */
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      {
        source: "/blog/daily-rise-wellness-app-case-study",
        destination: "/blog/build-mobile-app-mvp-without-tech-co-founder",
        permanent: true,
      },
      {
        source: "/blog/zypa-on-demand-delivery-platform-case-study",
        destination: "/blog/how-to-build-marketplace-mvp-that-doesnt-die",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // Plain `:path*` wildcards only. path-to-regexp v8, which Next 16 uses,
      // rejects the older custom-group syntax like `:path(brand|images)`.
      { source: "/:path*", headers: SECURITY_HEADERS },
      ...ASSET_ROOTS.map((root) => ({
        source: `/${root}/:path*`,
        headers: [{ key: "Cache-Control", value: ASSET_CACHE }],
      })),
    ];
  },
};

export default nextConfig;
