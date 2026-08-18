# ApexStack

The marketing site for **ApexStack** — a digital product engineering company
building custom software, AI products, cloud platforms and mobile apps.

Live at **[apexstack.dev](https://apexstack.dev)**.

## Stack

- **Framework** — Next.js 16 (App Router, React 19, TypeScript strict)
- **Styling** — Tailwind CSS v4
- **Hosting** — Vercel

## Commands

```bash
npm run dev        # start the dev server
npm run build      # production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run check      # lint + typecheck + build
```

`npm run check` is the gate. Nothing ships that does not pass it.

## Layout

```
src/
  app/          routes (App Router)
  components/   React components
  data/         typed content — products, services, blog, company facts
  lib/          shared helpers (metadata builder, site constants)
public/         static assets
scripts/        maintenance scripts (image optimisation)
```

## Content lives in data, not in JSX

Products, services, industries, FAQs, team and blog posts are all typed data
files under `src/data/`. Pages read from them. Adding a product or a post is a
data change, and counts rendered on the site (`PRODUCT_COUNT`, `POST_COUNT`)
derive from array length rather than being written out — so they cannot go
stale.

## Deployment

Pushes to `main` deploy to production via Vercel's GitHub integration.
