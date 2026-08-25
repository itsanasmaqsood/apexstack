/**
 * Migration ledger for posts that entered ApexStack through the former
 * DreamLaunch mirror workflow.
 *
 * This is provenance, not public copy. The automation moves a slug from
 * `PENDING_MIRROR_REWRITES` to `COMPLETED_MIRROR_REWRITES` only after the page
 * has an original ApexStack angle, current evidence, source links, claim review
 * and a verified production deployment.
 */

export const ALREADY_ORIGINALISED_DREAMLAUNCH_POSTS = [
  "ai-product-development-agency",
  "mobile-app-mvp-non-technical-founders-honest-guide",
  "ui-ux-design-agency-for-startups",
] as const;

export const COMPLETED_MIRROR_REWRITES = [
  "agency-vs-upwork-for-mvp-development",
  "ai-agency-vs-freelancer-founders-guide",
  "ai-development-studio-for-startups",
  "ai-features-that-make-startup-mvps-fail",
  "ai-first-mvp-development",
  "ai-product-studio-for-founders",
  "ai-generated-code-mistakes-pitfalls-bug-free",
  "ai-mvp-development-for-startups",
  "ai-mvp-fintech-what-to-build-what-to-skip",
  "ai-product-development-cost-2026",
  "ai-product-development-for-startups-apexstack",
  "ai-product-development-founders-guide-2025",
  "ai-saas-development-for-startups",
  "ai-startup-mvp-cost",
  "ai-workflow-startup-development",
  "alternatives-to-hiring-cto-early-stage-startup",
  "apexstack-4-6-week-mvp-process-what-happens",
  "best-agency-hire-vibe-coding-startup-mvp",
  "best-agency-vibe-coding-startup-mvp",
  "best-ai-development-agencies-pre-seed-startups",
  "best-development-agencies-non-technical-founders",
  "best-logo-design-agency-for-startups",
  "best-mvp-development-agency-non-technical-founders",
  "best-mvp-development-companies",
  "best-mvp-development-studio-founders-2026",
  "best-mvp-development-studios-non-technical-founders",
  "best-mvp-development-studios-non-technical-founders-1",
  "best-mvp-development-studios-non-technical-founders-2",
  "best-mvp-development-studios-saas-startups-2026",
  "best-vibe-coding-tools-founders-use-2026",
  "best-web-design-agency-for-saas",
  "bolt-new-alternatives-for-founders-production-apps",
  "bolt-vs-lovable-vs-hiring-dev-agency",
  "build-ai-mvp-for-startup",
  "build-ai-product-startup",
  "build-ai-product-without-technical-co-founder",
  "build-ai-startup-faster",
  "build-mobile-app-mvp-without-tech-co-founder",
  "build-mvp-with-ai",
  "build-saas-mvp-faster-with-ai",
  "building-ai-chatbot-for-product-without-cto",
  "building-saas-mvp-what-founders-get-wrong",
  "cto-as-a-service-ai-startup",
  "cursor-claude-vs-hiring-dev-agency",
  "fastest-way-to-build-startup-prototype",
  "founding-engineer-for-ai-startup",
  "hire-ai-agent-developer-for-startup",
  "hire-ai-developers-for-your-startup",
  "hire-vibe-coder-for-startup",
  "hire-vibe-coders-for-startup",
  "how-to-brief-ai-studio-without-wasting-time-money",
  "how-to-build-internal-tool-startup-4-weeks",
  "how-to-build-marketplace-mvp-that-doesnt-die",
  "how-to-build-mvp-with-ai-blueprint",
  "how-to-create-a-landing-page-that-converts",
  "how-to-scope-your-mvp-before-talking-to-agency",
  "how-to-validate-startup-idea-before-building",
  "how-to-validate-startup-idea-with-ai",
  "how-to-write-product-brief-developers-understand",
  "launch-mvp-in-2-weeks",
  "lovable-alternatives-for-startups-production",
  "lovable-vs-bolt-vs-agency",
  "mistakes-non-technical-founders-hiring-dev-agency",
  "mvp-development-agency-india",
  "mvp-development-cost-2024-ai-cuts-budget",
  "mvp-development-fixed-price",
  "mvp-development-for-startups",
  "mvp-development-studio-for-startups",
  "no-code-vs-vibe-coding-vs-dev-agency",
  "non-technical-founder-build-app-ai-agency",
  "post-mvp-development-retainer",
  "post-mvp-retainer-how-founders-keep-shipping",
  "prd-generator-ai-startup",
  "production-ready-mvp-development-service",
  "questions-to-ask-before-signing-development-agency",
  "ship-mvp-in-weeks-ai",
  "how-to-know-if-your-mvp-is-too-big",
  "signs-you-need-a-rebrand",
  "startup-mvp-builder",
  "things-to-include-in-mvp-agencies-skip",
  "top-ai-native-development-agencies-early-stage-startups-2025",
  "top-no-code-mvp-builders",
  "vibe-coding-agency",
  "vibe-coding-for-startups",
  "vibe-coding-vs-traditional-development",
  "what-is-vibe-coding",
  "what-vibe-coding-studio-actually-does",
] as const;

export const PENDING_MIRROR_REWRITES = [] as const;

const SOURCE_SLUG_OVERRIDES: Record<string, string> = {
  "ai-product-studio-for-founders": "ai-first-product-studio",
  "ai-product-development-for-startups-apexstack":
    "ai-product-development-for-startups-dreamlaunch",
  "apexstack-4-6-week-mvp-process-what-happens":
    "dreamlaunch-4-6-week-mvp-process-what-happens",
  "how-to-know-if-your-mvp-is-too-big": "signs-mvp-scope-is-too-big",
};

export function dreamLaunchSourceUrl(slug: string): string {
  return `https://www.dreamlaunch.studio/blog/${SOURCE_SLUG_OVERRIDES[slug] ?? slug}`;
}

export const MIRROR_PROVENANCE_COUNT =
  ALREADY_ORIGINALISED_DREAMLAUNCH_POSTS.length +
  COMPLETED_MIRROR_REWRITES.length +
  PENDING_MIRROR_REWRITES.length;
