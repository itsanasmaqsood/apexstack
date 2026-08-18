/**
 * The blog registry.
 *
 * Every post is its own module under `posts/`, imported once here. That is
 * deliberate: a post is a large object, several were written in parallel, and a
 * single shared file would have been a permanent merge conflict. It also means
 * adding a post is one import and one array entry, with the type system catching
 * anything malformed at build time rather than at render time.
 *
 * Nothing here is fetched. Every post is a compile-time constant, so all blog
 * routes prerender to static HTML — which is what makes them cheap to serve and
 * trivially readable by crawlers that do not run JavaScript.
 */

import type { BlogBlock, BlogCategory, BlogPost } from "@/data/blog/types";

import { post as aiAgentArchitecturePatterns } from "@/data/blog/posts/ai-agent-architecture-patterns";
import { post as aiAgentsForBusinessOperations } from "@/data/blog/posts/ai-agents-for-business-operations";
import { post as aiProductDevelopmentProcess } from "@/data/blog/posts/ai-product-development-process";
import { post as buildBuyOrLowCodeInternalTools } from "@/data/blog/posts/build-buy-or-low-code-internal-tools";
import { post as businessProcessAutomationCost } from "@/data/blog/posts/business-process-automation-cost";
import { post as choosingATechStackForYourMvp } from "@/data/blog/posts/choosing-a-tech-stack-for-your-mvp";
import { post as cloudCostOptimisation } from "@/data/blog/posts/cloud-cost-optimisation";
import { post as complianceRequirementsForCustomSoftware } from "@/data/blog/posts/compliance-requirements-for-custom-software";
import { post as customCrmVsSalesforceVsHubspot } from "@/data/blog/posts/custom-crm-vs-salesforce-vs-hubspot";
import { post as deRiskingASoftwareRewrite } from "@/data/blog/posts/de-risking-a-software-rewrite";
import { post as fixedPriceVsTimeAndMaterials } from "@/data/blog/posts/fixed-price-vs-time-and-materials";
import { post as howToChooseASoftwareDevelopmentCompany } from "@/data/blog/posts/how-to-choose-a-software-development-company";
import { post as howToEvaluateAnLlmFeature } from "@/data/blog/posts/how-to-evaluate-an-llm-feature";
import { post as howToWriteASoftwareBrief } from "@/data/blog/posts/how-to-write-a-software-brief";
import { post as inHouseTeamVsAgencyVsFreelancers } from "@/data/blog/posts/in-house-team-vs-agency-vs-freelancers";
import { post as integratingLegacySystemsWithModernSaas } from "@/data/blog/posts/integrating-legacy-systems-with-modern-saas";
import { post as legacySystemModernisationCost } from "@/data/blog/posts/legacy-system-modernisation-cost";
import { post as llmFeatureProductionCost } from "@/data/blog/posts/llm-feature-production-cost";
import { post as monolithToMicroservices } from "@/data/blog/posts/monolith-to-microservices";
import { post as mvpDevelopmentCost } from "@/data/blog/posts/mvp-development-cost";
import { post as mvpDevelopmentTimeline } from "@/data/blog/posts/mvp-development-timeline";
import { post as mvpScopingChecklist } from "@/data/blog/posts/mvp-scoping-checklist";
import { post as offTheShelfVsCustomSoftware } from "@/data/blog/posts/off-the-shelf-vs-custom-software";
import { post as offshoreSoftwareDevelopmentWhatGoesWrong } from "@/data/blog/posts/offshore-software-development-what-goes-wrong";
import { post as prototypeToProduction } from "@/data/blog/posts/prototype-to-production";
import { post as ragVsFineTuningVsPromptEngineering } from "@/data/blog/posts/rag-vs-fine-tuning-vs-prompt-engineering";
import { post as shippingAiFeaturesToProduction } from "@/data/blog/posts/shipping-ai-features-to-production";
import { post as softwareMaintenanceCost } from "@/data/blog/posts/software-maintenance-cost";
import { post as stranglerFigVsBigBangRewrite } from "@/data/blog/posts/strangler-fig-vs-big-bang-rewrite";
import { post as takingOverAnExistingCodebase } from "@/data/blog/posts/taking-over-an-existing-codebase";
import { post as technicalDueDiligence } from "@/data/blog/posts/technical-due-diligence";
import { post as whatIsADiscoveryPhase } from "@/data/blog/posts/what-is-a-discovery-phase";
import { post as whoOwnsTheCode } from "@/data/blog/posts/who-owns-the-code";
import { post as whySoftwareProjectsFail } from "@/data/blog/posts/why-software-projects-fail";

/** Newest first. Ties broken alphabetically so the order is stable across builds. */
export const POSTS: readonly BlogPost[] = [
  aiAgentArchitecturePatterns,
  aiAgentsForBusinessOperations,
  aiProductDevelopmentProcess,
  buildBuyOrLowCodeInternalTools,
  businessProcessAutomationCost,
  choosingATechStackForYourMvp,
  cloudCostOptimisation,
  complianceRequirementsForCustomSoftware,
  customCrmVsSalesforceVsHubspot,
  deRiskingASoftwareRewrite,
  fixedPriceVsTimeAndMaterials,
  howToChooseASoftwareDevelopmentCompany,
  howToEvaluateAnLlmFeature,
  howToWriteASoftwareBrief,
  inHouseTeamVsAgencyVsFreelancers,
  integratingLegacySystemsWithModernSaas,
  legacySystemModernisationCost,
  llmFeatureProductionCost,
  monolithToMicroservices,
  mvpDevelopmentCost,
  mvpDevelopmentTimeline,
  mvpScopingChecklist,
  offTheShelfVsCustomSoftware,
  offshoreSoftwareDevelopmentWhatGoesWrong,
  prototypeToProduction,
  ragVsFineTuningVsPromptEngineering,
  shippingAiFeaturesToProduction,
  softwareMaintenanceCost,
  stranglerFigVsBigBangRewrite,
  takingOverAnExistingCodebase,
  technicalDueDiligence,
  whatIsADiscoveryPhase,
  whoOwnsTheCode,
  whySoftwareProjectsFail,
].sort((a, b) =>
  a.published === b.published
    ? a.title.localeCompare(b.title)
    : b.published.localeCompare(a.published),
);

export const POST_COUNT = POSTS.length;

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function postsInCategory(category: BlogCategory): BlogPost[] {
  return POSTS.filter((post) => post.category === category);
}

/**
 * Related reading, chosen rather than hand-maintained.
 *
 * Same category first — those are the posts a reader on this page is most likely
 * to want, and the internal link between them is what tells a search engine the
 * two belong to one topic cluster. Backfilled from the rest of the blog so a
 * thin category never leaves a post with an empty rail.
 */
export function relatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const explicit = (post.related ?? [])
    .map((slug) => getPost(slug))
    .filter((item): item is BlogPost => Boolean(item));

  const sameCategory = POSTS.filter(
    (item) => item.slug !== post.slug && item.category === post.category,
  );

  const rest = POSTS.filter(
    (item) => item.slug !== post.slug && item.category !== post.category,
  );

  const seen = new Set<string>([post.slug]);
  const out: BlogPost[] = [];

  for (const candidate of [...explicit, ...sameCategory, ...rest]) {
    if (seen.has(candidate.slug)) continue;
    seen.add(candidate.slug);
    out.push(candidate);
    if (out.length === limit) break;
  }

  return out;
}

/** Every word in a post's body. Used for reading time and nothing else. */
function wordsIn(blocks: BlogBlock[]): number {
  let total = 0;

  for (const block of blocks) {
    switch (block.type) {
      case "p":
      case "callout":
        total += block.text.trim().split(/\s+/).length;
        break;
      case "h3":
        total += block.text.trim().split(/\s+/).length;
        break;
      case "list":
        for (const item of block.items) {
          total += item.trim().split(/\s+/).length;
        }
        break;
      case "table":
        for (const row of block.rows) {
          for (const cell of row) {
            total += cell.trim().split(/\s+/).length;
          }
        }
        break;
      case "code":
        // Code is skipped: nobody reads it at prose speed, and counting it
        // inflates the estimate on the most technical posts.
        break;
    }
  }

  return total;
}

/**
 * Reading time in whole minutes, computed rather than stored.
 *
 * 200 words per minute is the conventional figure for technical prose. Computing
 * it means the number can never drift out of sync with an edited post, which is
 * exactly what happens when it is a hand-typed field.
 */
export function readingMinutes(post: BlogPost): number {
  const words =
    post.sections.reduce((sum, section) => sum + wordsIn(section.blocks), 0) +
    post.faqs.reduce(
      (sum, faq) => sum + faq.answer.trim().split(/\s+/).length,
      0,
    );

  return Math.max(1, Math.round(words / 200));
}

/** ISO date rendered the way the rest of the site writes dates. */
export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
