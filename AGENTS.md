<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ApexStack

## What This Is
The marketing site for ApexStack, a digital product engineering company.
Live at https://apexstack.dev.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** Tailwind CSS v4, Radix primitives, `cn()` utility
- **Deployment:** Vercel, auto-deployed from `main`

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - ESLint check
- `npm run typecheck` - TypeScript check
- `npm run check` - Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first
- British English in user-facing copy

## Content Rules
- **Never invent a fact.** No statistics, client names, ratings or credentials
  that cannot be verified. Where a fact is missing the site omits it rather
  than guessing - see `isTodo()` in `src/data/company.ts`.
- **Content lives in `src/data/`,** not in JSX. Counts derive from array
  length so they cannot go stale.
- **All metadata goes through `pageMetadata`** in `src/lib/metadata.ts`.
  Hand-written `openGraph` objects silently drop `og:image`.

## Project Structure
```
src/
  app/              Next.js routes
  components/       React components
  data/             typed content
  lib/              shared helpers
public/             static assets
scripts/            maintenance scripts
```
