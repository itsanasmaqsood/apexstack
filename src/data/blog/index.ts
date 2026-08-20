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

import { post as agencyVsUpworkForMvpDevelopment } from "@/data/blog/posts/agency-vs-upwork-for-mvp-development";
import { post as aiAgencyVsFreelancerFoundersGuide } from "@/data/blog/posts/ai-agency-vs-freelancer-founders-guide";
import { post as aiAgentArchitecturePatterns } from "@/data/blog/posts/ai-agent-architecture-patterns";
import { post as aiAgentsForBusinessOperations } from "@/data/blog/posts/ai-agents-for-business-operations";
import { post as aiDevelopmentStudioForStartups } from "@/data/blog/posts/ai-development-studio-for-startups";
import { post as aiFeaturesThatMakeStartupMvpsFail } from "@/data/blog/posts/ai-features-that-make-startup-mvps-fail";
import { post as aiFirstMvpDevelopment } from "@/data/blog/posts/ai-first-mvp-development";
import { post as aiFirstProductStudio } from "@/data/blog/posts/ai-first-product-studio";
import { post as aiGeneratedCodeMistakesPitfallsBugFree } from "@/data/blog/posts/ai-generated-code-mistakes-pitfalls-bug-free";
import { post as aiIslamReligiousQaAppCaseStudy } from "@/data/blog/posts/ai-islam-religious-qa-app-case-study";
import { post as aiMvpDevelopmentForStartups } from "@/data/blog/posts/ai-mvp-development-for-startups";
import { post as aiMvpFintechWhatToBuildWhatToSkip } from "@/data/blog/posts/ai-mvp-fintech-what-to-build-what-to-skip";
import { post as aiProductDevelopmentAgency } from "@/data/blog/posts/ai-product-development-agency";
import { post as aiProductDevelopmentCost2026 } from "@/data/blog/posts/ai-product-development-cost-2026";
import { post as aiProductDevelopmentForStartupsApexstack } from "@/data/blog/posts/ai-product-development-for-startups-apexstack";
import { post as aiProductDevelopmentFoundersGuide2025 } from "@/data/blog/posts/ai-product-development-founders-guide-2025";
import { post as aiProductDevelopmentProcess } from "@/data/blog/posts/ai-product-development-process";
import { post as aiSaasDevelopmentForStartups } from "@/data/blog/posts/ai-saas-development-for-startups";
import { post as aiStartupMvpCost } from "@/data/blog/posts/ai-startup-mvp-cost";
import { post as aiWorkflowStartupDevelopment } from "@/data/blog/posts/ai-workflow-startup-development";
import { post as alternativesToHiringCtoEarlyStageStartup } from "@/data/blog/posts/alternatives-to-hiring-cto-early-stage-startup";
import { post as amyAiPersonalFinanceAppCaseStudy } from "@/data/blog/posts/amy-ai-personal-finance-app-case-study";
import { post as apexstack46WeekMvpProcessWhatHappens } from "@/data/blog/posts/apexstack-4-6-week-mvp-process-what-happens";
import { post as babybitesMealPlannerAppCaseStudy } from "@/data/blog/posts/babybites-meal-planner-app-case-study";
import { post as bestAgencyHireVibeCodingStartupMvp } from "@/data/blog/posts/best-agency-hire-vibe-coding-startup-mvp";
import { post as bestAgencyVibeCodingStartupMvp } from "@/data/blog/posts/best-agency-vibe-coding-startup-mvp";
import { post as bestAiDevelopmentAgenciesPreSeedStartups } from "@/data/blog/posts/best-ai-development-agencies-pre-seed-startups";
import { post as bestDevelopmentAgenciesNonTechnicalFounders } from "@/data/blog/posts/best-development-agencies-non-technical-founders";
import { post as bestLogoDesignAgencyForStartups } from "@/data/blog/posts/best-logo-design-agency-for-startups";
import { post as bestMvpDevelopmentAgencyNonTechnicalFounders } from "@/data/blog/posts/best-mvp-development-agency-non-technical-founders";
import { post as bestMvpDevelopmentCompanies } from "@/data/blog/posts/best-mvp-development-companies";
import { post as bestMvpDevelopmentStudioFounders2026 } from "@/data/blog/posts/best-mvp-development-studio-founders-2026";
import { post as bestMvpDevelopmentStudiosNonTechnicalFounders } from "@/data/blog/posts/best-mvp-development-studios-non-technical-founders";
import { post as bestMvpDevelopmentStudiosNonTechnicalFounders1 } from "@/data/blog/posts/best-mvp-development-studios-non-technical-founders-1";
import { post as bestMvpDevelopmentStudiosSaasStartups2026 } from "@/data/blog/posts/best-mvp-development-studios-saas-startups-2026";
import { post as bestVibeCodingToolsFoundersUse2026 } from "@/data/blog/posts/best-vibe-coding-tools-founders-use-2026";
import { post as bestWebDesignAgencyForSaas } from "@/data/blog/posts/best-web-design-agency-for-saas";
import { post as boltNewAlternativesForFoundersProductionApps } from "@/data/blog/posts/bolt-new-alternatives-for-founders-production-apps";
import { post as buildAiMvpForStartup } from "@/data/blog/posts/build-ai-mvp-for-startup";
import { post as buildAiProductStartup } from "@/data/blog/posts/build-ai-product-startup";
import { post as buildAiProductWithoutTechnicalCoFounder } from "@/data/blog/posts/build-ai-product-without-technical-co-founder";
import { post as buildAiStartupFaster } from "@/data/blog/posts/build-ai-startup-faster";
import { post as buildBuyOrLowCodeInternalTools } from "@/data/blog/posts/build-buy-or-low-code-internal-tools";
import { post as buildMobileAppMvpWithoutTechCoFounder } from "@/data/blog/posts/build-mobile-app-mvp-without-tech-co-founder";
import { post as buildMvpWithAi } from "@/data/blog/posts/build-mvp-with-ai";
import { post as buildSaasMvpFasterWithAi } from "@/data/blog/posts/build-saas-mvp-faster-with-ai";
import { post as buildingAiChatbotForProductWithoutCto } from "@/data/blog/posts/building-ai-chatbot-for-product-without-cto";
import { post as buildingSaasMvpWhatFoundersGetWrong } from "@/data/blog/posts/building-saas-mvp-what-founders-get-wrong";
import { post as businessProcessAutomationCost } from "@/data/blog/posts/business-process-automation-cost";
import { post as choosingATechStackForYourMvp } from "@/data/blog/posts/choosing-a-tech-stack-for-your-mvp";
import { post as cloudApplicationStackManagementProvider } from "@/data/blog/posts/cloud-application-stack-management-provider";
import { post as cloudCostOptimisation } from "@/data/blog/posts/cloud-cost-optimisation";
import { post as complianceRequirementsForCustomSoftware } from "@/data/blog/posts/compliance-requirements-for-custom-software";
import { post as ctoAsAServiceAiStartup } from "@/data/blog/posts/cto-as-a-service-ai-startup";
import { post as cursorClaudeVsHiringDevAgency } from "@/data/blog/posts/cursor-claude-vs-hiring-dev-agency";
import { post as crmErpAccountingIntegrationScope } from "@/data/blog/posts/crm-erp-accounting-integration-scope";
import { post as customCrmVsSalesforceVsHubspot } from "@/data/blog/posts/custom-crm-vs-salesforce-vs-hubspot";
import { post as dailyRiseWellnessAppCaseStudy } from "@/data/blog/posts/daily-rise-wellness-app-case-study";
import { post as deRiskingASoftwareRewrite } from "@/data/blog/posts/de-risking-a-software-rewrite";
import { post as decorlyAiRoomRedesignAppCaseStudy } from "@/data/blog/posts/decorly-ai-room-redesign-app-case-study";
import { post as fastestWayToBuildStartupPrototype } from "@/data/blog/posts/fastest-way-to-build-startup-prototype";
import { post as fixedPriceVsTimeAndMaterials } from "@/data/blog/posts/fixed-price-vs-time-and-materials";
import { post as foundingEngineerForAiStartup } from "@/data/blog/posts/founding-engineer-for-ai-startup";
import { post as halalScannerFoodVerificationAppCaseStudy } from "@/data/blog/posts/halal-scanner-food-verification-app-case-study";
import { post as hireAiAgentDeveloperForStartup } from "@/data/blog/posts/hire-ai-agent-developer-for-startup";
import { post as hireAiDevelopersForYourStartup } from "@/data/blog/posts/hire-ai-developers-for-your-startup";
import { post as hireVibeCoderForStartup } from "@/data/blog/posts/hire-vibe-coder-for-startup";
import { post as hireVibeCodersForStartup } from "@/data/blog/posts/hire-vibe-coders-for-startup";
import { post as howToBriefAiStudioWithoutWastingTimeMoney } from "@/data/blog/posts/how-to-brief-ai-studio-without-wasting-time-money";
import { post as howToBuildInternalToolStartup4Weeks } from "@/data/blog/posts/how-to-build-internal-tool-startup-4-weeks";
import { post as howToBuildMarketplaceMvpThatDoesntDie } from "@/data/blog/posts/how-to-build-marketplace-mvp-that-doesnt-die";
import { post as howToBuildMvpWithAiBlueprint } from "@/data/blog/posts/how-to-build-mvp-with-ai-blueprint";
import { post as howToChooseASoftwareDevelopmentCompany } from "@/data/blog/posts/how-to-choose-a-software-development-company";
import { post as howToCreateALandingPageThatConverts } from "@/data/blog/posts/how-to-create-a-landing-page-that-converts";
import { post as howToEvaluateAnLlmFeature } from "@/data/blog/posts/how-to-evaluate-an-llm-feature";
import { post as howToScopeYourMvpBeforeTalkingToAgency } from "@/data/blog/posts/how-to-scope-your-mvp-before-talking-to-agency";
import { post as howToValidateStartupIdeaBeforeBuilding } from "@/data/blog/posts/how-to-validate-startup-idea-before-building";
import { post as howToValidateStartupIdeaWithAi } from "@/data/blog/posts/how-to-validate-startup-idea-with-ai";
import { post as howToWriteASoftwareBrief } from "@/data/blog/posts/how-to-write-a-software-brief";
import { post as howToWriteProductBriefDevelopersUnderstand } from "@/data/blog/posts/how-to-write-product-brief-developers-understand";
import { post as inHouseTeamVsAgencyVsFreelancers } from "@/data/blog/posts/in-house-team-vs-agency-vs-freelancers";
import { post as integratingLegacySystemsWithModernSaas } from "@/data/blog/posts/integrating-legacy-systems-with-modern-saas";
import { post as iqraQuranAppCaseStudy } from "@/data/blog/posts/iqra-quran-app-case-study";
import { post as launchMvpIn2Weeks } from "@/data/blog/posts/launch-mvp-in-2-weeks";
import { post as legacySystemModernisationCost } from "@/data/blog/posts/legacy-system-modernisation-cost";
import { post as llmFeatureProductionCost } from "@/data/blog/posts/llm-feature-production-cost";
import { post as lovableAlternativesForStartupsProduction } from "@/data/blog/posts/lovable-alternatives-for-startups-production";
import { post as lovableVsBoltVsAgency } from "@/data/blog/posts/lovable-vs-bolt-vs-agency";
import { post as mistakesNonTechnicalFoundersHiringDevAgency } from "@/data/blog/posts/mistakes-non-technical-founders-hiring-dev-agency";
import { post as mobileAppMvpNonTechnicalFoundersHonestGuide } from "@/data/blog/posts/mobile-app-mvp-non-technical-founders-honest-guide";
import { post as monolithToMicroservices } from "@/data/blog/posts/monolith-to-microservices";
import { post as mvpDevelopmentAgencyIndia } from "@/data/blog/posts/mvp-development-agency-india";
import { post as mvpDevelopmentCost } from "@/data/blog/posts/mvp-development-cost";
import { post as mvpDevelopmentCost2024AiCutsBudget } from "@/data/blog/posts/mvp-development-cost-2024-ai-cuts-budget";
import { post as mvpDevelopmentFixedPrice } from "@/data/blog/posts/mvp-development-fixed-price";
import { post as mvpDevelopmentForStartups } from "@/data/blog/posts/mvp-development-for-startups";
import { post as mvpDevelopmentStudioForStartups } from "@/data/blog/posts/mvp-development-studio-for-startups";
import { post as mvpDevelopmentTimeline } from "@/data/blog/posts/mvp-development-timeline";
import { post as mvpScopingChecklist } from "@/data/blog/posts/mvp-scoping-checklist";
import { post as noCodeVsVibeCodingVsDevAgency } from "@/data/blog/posts/no-code-vs-vibe-coding-vs-dev-agency";
import { post as nodrahwebWhatsappSaasCaseStudy } from "@/data/blog/posts/nodrahweb-whatsapp-saas-case-study";
import { post as nonTechnicalFounderBuildAppAiAgency } from "@/data/blog/posts/non-technical-founder-build-app-ai-agency";
import { post as nutrinudgeAiNutritionAppCaseStudy } from "@/data/blog/posts/nutrinudge-ai-nutrition-app-case-study";
import { post as offTheShelfVsCustomSoftware } from "@/data/blog/posts/off-the-shelf-vs-custom-software";
import { post as offshoreSoftwareDevelopmentWhatGoesWrong } from "@/data/blog/posts/offshore-software-development-what-goes-wrong";
import { post as pdfSuperappCaseStudy } from "@/data/blog/posts/pdf-superapp-case-study";
import { post as plantcareProAppCaseStudy } from "@/data/blog/posts/plantcare-pro-app-case-study";
import { post as postMvpDevelopmentRetainer } from "@/data/blog/posts/post-mvp-development-retainer";
import { post as postMvpRetainerHowFoundersKeepShipping } from "@/data/blog/posts/post-mvp-retainer-how-founders-keep-shipping";
import { post as prdGeneratorAiStartup } from "@/data/blog/posts/prd-generator-ai-startup";
import { post as productionReadyMvpDevelopmentService } from "@/data/blog/posts/production-ready-mvp-development-service";
import { post as prototypeToProduction } from "@/data/blog/posts/prototype-to-production";
import { post as questionsToAskBeforeSigningDevelopmentAgency } from "@/data/blog/posts/questions-to-ask-before-signing-development-agency";
import { post as ragVsFineTuningVsPromptEngineering } from "@/data/blog/posts/rag-vs-fine-tuning-vs-prompt-engineering";
import { post as regainFocusAppBlockerCaseStudy } from "@/data/blog/posts/regain-focus-app-blocker-case-study";
import { post as safechoiceConversationalFoodJournalCaseStudy } from "@/data/blog/posts/safechoice-conversational-food-journal-case-study";
import { post as safemamaPregnancySafetyAppCaseStudy } from "@/data/blog/posts/safemama-pregnancy-safety-app-case-study";
import { post as salafimatchMatrimonyPlatformCaseStudy } from "@/data/blog/posts/salafimatch-matrimony-platform-case-study";
import { post as shipMvpInWeeksAi } from "@/data/blog/posts/ship-mvp-in-weeks-ai";
import { post as shippingAiFeaturesToProduction } from "@/data/blog/posts/shipping-ai-features-to-production";
import { post as signsMvpScopeIsTooBig } from "@/data/blog/posts/signs-mvp-scope-is-too-big";
import { post as signsYouNeedARebrand } from "@/data/blog/posts/signs-you-need-a-rebrand";
import { post as sitevoiceTakingOverAnAiGeneratedCodebaseCaseStudy } from "@/data/blog/posts/sitevoice-taking-over-an-ai-generated-codebase-case-study";
import { post as softwareMaintenanceCost } from "@/data/blog/posts/software-maintenance-cost";
import { post as startupMvpBuilder } from "@/data/blog/posts/startup-mvp-builder";
import { post as stranglerFigVsBigBangRewrite } from "@/data/blog/posts/strangler-fig-vs-big-bang-rewrite";
import { post as takingOverAnExistingCodebase } from "@/data/blog/posts/taking-over-an-existing-codebase";
import { post as tallerGrowthCompanionAppCaseStudy } from "@/data/blog/posts/taller-growth-companion-app-case-study";
import { post as taqwaLockMindfulAppBlockerCaseStudy } from "@/data/blog/posts/taqwa-lock-mindful-app-blocker-case-study";
import { post as technicalDueDiligence } from "@/data/blog/posts/technical-due-diligence";
import { post as thingsToIncludeInMvpAgenciesSkip } from "@/data/blog/posts/things-to-include-in-mvp-agencies-skip";
import { post as topNoCodeMvpBuilders } from "@/data/blog/posts/top-no-code-mvp-builders";
import { post as uiUxDesignAgencyForStartups } from "@/data/blog/posts/ui-ux-design-agency-for-startups";
import { post as vibeCodingAgency } from "@/data/blog/posts/vibe-coding-agency";
import { post as vibeCodingForStartups } from "@/data/blog/posts/vibe-coding-for-startups";
import { post as vibeCodingVsTraditionalDevelopment } from "@/data/blog/posts/vibe-coding-vs-traditional-development";
import { post as whatFullStackMobileAppDevelopmentIncludes } from "@/data/blog/posts/what-full-stack-mobile-app-development-includes";
import { post as whatIsADiscoveryPhase } from "@/data/blog/posts/what-is-a-discovery-phase";
import { post as whatIsVibeCoding } from "@/data/blog/posts/what-is-vibe-coding";
import { post as whatVibeCodingStudioActuallyDoes } from "@/data/blog/posts/what-vibe-coding-studio-actually-does";
import { post as whoOwnsTheCode } from "@/data/blog/posts/who-owns-the-code";
import { post as whySoftwareProjectsFail } from "@/data/blog/posts/why-software-projects-fail";
import { post as zypaOnDemandDeliveryPlatformCaseStudy } from "@/data/blog/posts/zypa-on-demand-delivery-platform-case-study";

/** Newest first. Ties broken alphabetically so the order is stable across builds. */
export const POSTS: readonly BlogPost[] = [
  agencyVsUpworkForMvpDevelopment,
  aiAgencyVsFreelancerFoundersGuide,
  aiAgentArchitecturePatterns,
  aiAgentsForBusinessOperations,
  aiDevelopmentStudioForStartups,
  aiFeaturesThatMakeStartupMvpsFail,
  aiFirstMvpDevelopment,
  aiFirstProductStudio,
  aiGeneratedCodeMistakesPitfallsBugFree,
  aiIslamReligiousQaAppCaseStudy,
  aiMvpDevelopmentForStartups,
  aiMvpFintechWhatToBuildWhatToSkip,
  aiProductDevelopmentAgency,
  aiProductDevelopmentCost2026,
  aiProductDevelopmentForStartupsApexstack,
  aiProductDevelopmentFoundersGuide2025,
  aiProductDevelopmentProcess,
  aiSaasDevelopmentForStartups,
  aiStartupMvpCost,
  aiWorkflowStartupDevelopment,
  alternativesToHiringCtoEarlyStageStartup,
  amyAiPersonalFinanceAppCaseStudy,
  apexstack46WeekMvpProcessWhatHappens,
  babybitesMealPlannerAppCaseStudy,
  bestAgencyHireVibeCodingStartupMvp,
  bestAgencyVibeCodingStartupMvp,
  bestAiDevelopmentAgenciesPreSeedStartups,
  bestDevelopmentAgenciesNonTechnicalFounders,
  bestLogoDesignAgencyForStartups,
  bestMvpDevelopmentAgencyNonTechnicalFounders,
  bestMvpDevelopmentCompanies,
  bestMvpDevelopmentStudioFounders2026,
  bestMvpDevelopmentStudiosNonTechnicalFounders,
  bestMvpDevelopmentStudiosNonTechnicalFounders1,
  bestMvpDevelopmentStudiosSaasStartups2026,
  bestVibeCodingToolsFoundersUse2026,
  bestWebDesignAgencyForSaas,
  boltNewAlternativesForFoundersProductionApps,
  buildAiMvpForStartup,
  buildAiProductStartup,
  buildAiProductWithoutTechnicalCoFounder,
  buildAiStartupFaster,
  buildBuyOrLowCodeInternalTools,
  buildMobileAppMvpWithoutTechCoFounder,
  buildMvpWithAi,
  buildSaasMvpFasterWithAi,
  buildingAiChatbotForProductWithoutCto,
  buildingSaasMvpWhatFoundersGetWrong,
  businessProcessAutomationCost,
  choosingATechStackForYourMvp,
  cloudApplicationStackManagementProvider,
  cloudCostOptimisation,
  complianceRequirementsForCustomSoftware,
  ctoAsAServiceAiStartup,
  cursorClaudeVsHiringDevAgency,
  crmErpAccountingIntegrationScope,
  customCrmVsSalesforceVsHubspot,
  dailyRiseWellnessAppCaseStudy,
  deRiskingASoftwareRewrite,
  decorlyAiRoomRedesignAppCaseStudy,
  fastestWayToBuildStartupPrototype,
  fixedPriceVsTimeAndMaterials,
  foundingEngineerForAiStartup,
  halalScannerFoodVerificationAppCaseStudy,
  hireAiAgentDeveloperForStartup,
  hireAiDevelopersForYourStartup,
  hireVibeCoderForStartup,
  hireVibeCodersForStartup,
  howToBriefAiStudioWithoutWastingTimeMoney,
  howToBuildInternalToolStartup4Weeks,
  howToBuildMarketplaceMvpThatDoesntDie,
  howToBuildMvpWithAiBlueprint,
  howToChooseASoftwareDevelopmentCompany,
  howToCreateALandingPageThatConverts,
  howToEvaluateAnLlmFeature,
  howToScopeYourMvpBeforeTalkingToAgency,
  howToValidateStartupIdeaBeforeBuilding,
  howToValidateStartupIdeaWithAi,
  howToWriteASoftwareBrief,
  howToWriteProductBriefDevelopersUnderstand,
  inHouseTeamVsAgencyVsFreelancers,
  integratingLegacySystemsWithModernSaas,
  iqraQuranAppCaseStudy,
  launchMvpIn2Weeks,
  legacySystemModernisationCost,
  llmFeatureProductionCost,
  lovableAlternativesForStartupsProduction,
  lovableVsBoltVsAgency,
  mistakesNonTechnicalFoundersHiringDevAgency,
  mobileAppMvpNonTechnicalFoundersHonestGuide,
  monolithToMicroservices,
  mvpDevelopmentAgencyIndia,
  mvpDevelopmentCost,
  mvpDevelopmentCost2024AiCutsBudget,
  mvpDevelopmentFixedPrice,
  mvpDevelopmentForStartups,
  mvpDevelopmentStudioForStartups,
  mvpDevelopmentTimeline,
  mvpScopingChecklist,
  noCodeVsVibeCodingVsDevAgency,
  nodrahwebWhatsappSaasCaseStudy,
  nonTechnicalFounderBuildAppAiAgency,
  nutrinudgeAiNutritionAppCaseStudy,
  offTheShelfVsCustomSoftware,
  offshoreSoftwareDevelopmentWhatGoesWrong,
  pdfSuperappCaseStudy,
  plantcareProAppCaseStudy,
  postMvpDevelopmentRetainer,
  postMvpRetainerHowFoundersKeepShipping,
  prdGeneratorAiStartup,
  productionReadyMvpDevelopmentService,
  prototypeToProduction,
  questionsToAskBeforeSigningDevelopmentAgency,
  ragVsFineTuningVsPromptEngineering,
  regainFocusAppBlockerCaseStudy,
  safechoiceConversationalFoodJournalCaseStudy,
  safemamaPregnancySafetyAppCaseStudy,
  salafimatchMatrimonyPlatformCaseStudy,
  shipMvpInWeeksAi,
  shippingAiFeaturesToProduction,
  signsMvpScopeIsTooBig,
  signsYouNeedARebrand,
  sitevoiceTakingOverAnAiGeneratedCodebaseCaseStudy,
  softwareMaintenanceCost,
  startupMvpBuilder,
  stranglerFigVsBigBangRewrite,
  takingOverAnExistingCodebase,
  tallerGrowthCompanionAppCaseStudy,
  taqwaLockMindfulAppBlockerCaseStudy,
  technicalDueDiligence,
  thingsToIncludeInMvpAgenciesSkip,
  topNoCodeMvpBuilders,
  uiUxDesignAgencyForStartups,
  vibeCodingAgency,
  vibeCodingForStartups,
  vibeCodingVsTraditionalDevelopment,
  whatFullStackMobileAppDevelopmentIncludes,
  whatIsADiscoveryPhase,
  whatIsVibeCoding,
  whatVibeCodingStudioActuallyDoes,
  whoOwnsTheCode,
  whySoftwareProjectsFail,
  zypaOnDemandDeliveryPlatformCaseStudy,
].sort((a, b) =>
  a.published === b.published
    ? a.title.localeCompare(b.title)
    : b.published.localeCompare(a.published),
);

/**
 * The orientation post, shown above the clusters on the index.
 *
 * It is older than most of what it introduces, so date ordering buries it.
 * Flagging it in the data keeps that decision with the post rather than
 * hard-coding a slug into the page.
 */
export const PINNED_POST: BlogPost | undefined = POSTS.find((post) => post.pinned);

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
