import type { Metadata } from "next";

import TabAttention from "@/components/TabAttention";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL as ORIGIN } from "@/lib/site";
import { Figtree, Fira_Sans } from "next/font/google";
import "./globals.css";

/**
 * WEIGHTS ARE DELIBERATELY NARROW. Fira Sans was requested at all nine weights
 * in both styles, which is 18 faces — Next preloads every one, so each page
 * pulled 343 KB of woff2 before painting. A grep of `src/` finds only three
 * weights in use (`font-normal` 400, `font-medium` 500, `font-semibold` 600)
 * and italic only at 400 and 500. Six faces cover every call site.
 *
 * If a design ever needs another weight, add it here — do not re-open the range.
 */
const firaSans = Fira_Sans({
  variable: "--font-fira-sans-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree-var",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Re-exported so the ~20 modules that already do
 * `import { SITE_URL } from "@/app/layout"` keep working. The definition moved
 * to `@/lib/site` because library code needed it and importing the root layout
 * from a library module is a cycle waiting to happen.
 */
export { SITE_URL } from "@/lib/site";

const TITLE = "ApexStack — Custom Software & Product Engineering";
const DESCRIPTION =
  "We design, build and scale custom software, AI products, cloud platforms and mobile apps — from the business problem through to production. Talk to our engineers.";

export const metadata: Metadata = {
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" }),
  metadataBase: new URL(ORIGIN),
  keywords: [
    "digital product engineering",
    "product engineering services",
    "custom software development",
    "AI product development",
    "AI agent development",
    "enterprise software development",
    "SaaS platform development",
    "business process automation",
    "cloud infrastructure and DevOps",
    "mobile app development",
    "MVP development",
    "digital transformation",
  ],
  icons: {
    icon: [
      { url: "/seo/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/seo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/seo/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true },
};
// `openGraph`, `twitter` and the self-referencing canonical all come from
// `pageMetadata` above. They were defined inline here and duplicated on every
// child route, which is exactly how 53 of 56 pages lost their og:image.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaSans.variable} ${figtree.variable}`}>
      {/* No `antialiased` and no font class here: the original leaves body at the
          Figtree default and every section opts into Fira Sans explicitly. */}
      <body>
        {children}
        {/* Renders nothing. Cycles the title and favicon only while the tab is
            hidden, and restores both the moment it is visible again. Mounted
            here so it covers every route, not just the homepage. */}
        <TabAttention />
      </body>
    </html>
  );
}
