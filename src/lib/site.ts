/**
 * The canonical origin, in one place.
 *
 * This used to live in `src/app/layout.tsx`, which meant anything needing the
 * site URL had to import the root layout — fine for a page, a cycle for a
 * library module. `layout.tsx` re-exports this so every existing
 * `import { SITE_URL } from "@/app/layout"` keeps resolving unchanged.
 */
export const SITE_URL = "https://apexstack.dev";

/** Organization node id, referenced by every graph on the site. */
export const ORG_ID = `${SITE_URL}/#organization`;

/** WebSite node id. */
export const WEBSITE_ID = `${SITE_URL}/#website`;
