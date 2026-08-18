/**
 * ApexStack's own products.
 *
 * Consumer applications published on the App Store and Google Play under the
 * parent entity, APEXMART INTERNET PRIVATE LIMITED. This is the only part of
 * the site backed by something a visitor can go and check for themselves,
 * which makes it the most valuable page here.
 *
 * The count is not written down anywhere in prose: `PRODUCT_COUNT` is
 * `PRODUCTS.length`, and every figure on the site reads from it. Adding an
 * entry here updates the homepage, the portfolio and the products hub with no
 * other edit — which is why a hardcoded "twenty-one" used to sit in this
 * comment and went stale the first time an app shipped.
 *
 * WHERE THE DATA COMES FROM
 * Names and summaries come from the store listings supplied by the founders.
 * Every `appStoreUrl` and `playStoreUrl` was then verified against the stores
 * themselves — the Apple catalogue and the "Apexmart Internet" developer page —
 * rather than guessed from a name, so every store link here resolves to a real
 * listing. Twenty of the twenty-one carry one: Amy is reachable only through its
 * own site, so nothing on the site may assert a store listing for it.
 *
 * The two figures here (`downloads`, `rating`) were reported by the founders and
 * are the only numbers anywhere on this website. Store ratings are deliberately
 * not pulled in: they drift, and a stale rating is a wrong one.
 */

export type Platform = "ios" | "android";

export interface Product {
  slug: string;
  name: string;
  /** The app's own store subtitle, restated. */
  summary: string;
  category: ProductCategory;
  platforms: Platform[];
  /** App Store listing. Verified against the iTunes catalogue. */
  appStoreUrl?: string;
  /** Google Play listing. Verified against the Apexmart Internet developer page. */
  playStoreUrl?: string;
  /** Product's own marketing site, where one exists. */
  siteUrl?: string;
  /** Reported by the founders. Only present where supplied. */
  downloads?: string;
  /** Reported by the founders. Only present where supplied. */
  rating?: string;
  /** TODO: 512x512 icon at public/products/<slug>.png. */
  icon?: string;
}

export type ProductCategory =
  | "Faith & Learning"
  | "Health & Nutrition"
  | "Family & Parenting"
  | "Focus & Wellbeing"
  | "AI Tools & Utilities";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Faith & Learning",
  "Health & Nutrition",
  "Family & Parenting",
  "Focus & Wellbeing",
  "AI Tools & Utilities",
];

/**
 * schema.org's `applicationCategory` wants a software taxonomy term. The pages
 * were emitting the section headings above, which classify nothing to a machine
 * — "Faith & Learning" is not a category any consumer of the markup knows. The
 * human label still ships, as `genre`, which is where free text belongs.
 *
 * A `Record` over the union rather than a lookup with a fallback, so adding a
 * category without deciding its schema term is a type error.
 */
export const SCHEMA_CATEGORY: Record<ProductCategory, string> = {
  "Faith & Learning": "EducationalApplication",
  "Health & Nutrition": "HealthApplication",
  "Family & Parenting": "LifestyleApplication",
  "Focus & Wellbeing": "HealthApplication",
  "AI Tools & Utilities": "UtilitiesApplication",
};

export const PRODUCTS: Product[] = [
  // ------------------------------------------------------------- faith & learning
  {
    slug: "iqra",
    icon: "/products/iqra.png",
    appStoreUrl: "https://apps.apple.com/us/app/iqra-quran-hadith-duas-adhan/id6749045940",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.quran.iqra",
    name: "Iqra",
    summary: "Quran, Hadith, duas and adhan, with Qibla direction and the Hijri calendar.",
    category: "Faith & Learning",
    platforms: ["ios", "android"],
    downloads: "150,000+",
    rating: "4.9",
  },
  {
    slug: "ai-islam",
    icon: "/products/ai-islam.png",
    appStoreUrl: "https://apps.apple.com/us/app/ai-islam-islamic-q-a/id6751853782",
    playStoreUrl: "https://play.google.com/store/apps/details?id=net.aiislam.app",
    name: "AI Islam",
    summary: "An Islamic question-and-answer assistant for everyday religious questions.",
    category: "Faith & Learning",
    platforms: ["ios", "android"],
  },
  {
    slug: "manhaj",
    icon: "/products/manhaj.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.manhaj.manhaj",
    name: "MANHAJ",
    summary: "A searchable library of Islamic books.",
    category: "Faith & Learning",
    platforms: ["android"],
  },

  // ---------------------------------------------------------- health & nutrition
  {
    slug: "nutrinudge",
    icon: "/products/nutrinudge.png",
    appStoreUrl: "https://apps.apple.com/us/app/nutrinudge-ai-calorie-tracker/id6768645131",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nutrinudge.nutrinudge",
    name: "NutriNudge",
    summary: "Calorie tracking and diet planning, with a scanner that reads what is in your food.",
    category: "Health & Nutrition",
    platforms: ["ios", "android"],
  },
  {
    slug: "safechoice",
    icon: "/products/safechoice.png",
    // iOS listing removed, not lost: id6781004977 returns a hard 404 and
    // Apple's lookup API resolves it in no storefront, so the app is either
    // withdrawn or the id was wrong. Linking to a 404 from a page whose whole
    // job is "you can go and check this yourself" costs more than the missing
    // link does. Restore `appStoreUrl` and `"ios"` together once there is a
    // live listing to point at.
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.safechoice.safechoice",
    name: "SafeChoice",
    summary: "Scans packaged food and returns a health score and an additive breakdown.",
    category: "Health & Nutrition",
    platforms: ["android"],
  },
  {
    slug: "halal-scanner",
    icon: "/products/halal-scanner.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.halalcheck.halalcheck",
    name: "Halal Scanner",
    summary: "Checks packaged food against halal requirements from the label.",
    category: "Health & Nutrition",
    platforms: ["android"],
  },
  {
    slug: "taller",
    icon: "/products/taller.png",
    appStoreUrl: "https://apps.apple.com/us/app/taller-height-growth-tracker/id6759278676",
    name: "Taller",
    summary: "Height growth tracking with posture guidance and a structured plan.",
    category: "Health & Nutrition",
    platforms: ["ios"],
  },

  // ----------------------------------------------------------- family & parenting
  {
    slug: "safemama",
    icon: "/products/safemama.png",
    appStoreUrl: "https://apps.apple.com/us/app/safemama-pregnancy-scanner/id6748413103",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.safemama.app",
    name: "SafeMama",
    summary: "Scans products for pregnancy safety and tracks the baby week by week.",
    category: "Family & Parenting",
    platforms: ["ios", "android"],
    siteUrl: "https://safemama.co",
  },
  {
    slug: "babybites",
    icon: "/products/babybites.png",
    appStoreUrl: "https://apps.apple.com/us/app/babybites-blw-meal-start-solid/id6762548193",
    playStoreUrl: "https://play.google.com/store/apps/details?id=food.mybabybites.app",
    name: "BabyBites",
    summary: "Baby-led weaning: first foods, meal plans and recipes for starting solids.",
    category: "Family & Parenting",
    platforms: ["ios", "android"],
    siteUrl: "https://mybabybites.app",
  },
  {
    slug: "salafimatch",
    icon: "/products/salafimatch.png",
    appStoreUrl: "https://apps.apple.com/us/app/salafimatch-salafi-matrimony/id6749549212",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nikah.salafimatch",
    name: "SalafiMatch",
    summary: "A matrimony platform built around Sunnah-based matching.",
    category: "Family & Parenting",
    platforms: ["ios", "android"],
    siteUrl: "https://salafimatch.app",
    downloads: "10,000+",
  },
  {
    slug: "petvet-ai-scanner",
    icon: "/products/petvet-ai-scanner.png",
    appStoreUrl: "https://apps.apple.com/us/app/petvet-ai-scanner/id6752514289",
    name: "PetVet AI Scanner",
    summary: "Pet health scanning with care guidance for owners.",
    category: "Family & Parenting",
    platforms: ["ios"],
  },

  // ----------------------------------------------------------- focus & wellbeing
  {
    slug: "taqwa-lock",
    icon: "/products/taqwa-lock.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.taqwalock",
    name: "Taqwa Lock",
    summary: "An app blocker that asks you to read Quran before unlocking.",
    category: "Focus & Wellbeing",
    platforms: ["android"],
  },
  {
    slug: "opaline",
    icon: "/products/opaline.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.withopal.opal_flutter",
    name: "Opaline",
    summary: "Focus sessions and app blocking for people trying to reclaim their attention.",
    category: "Focus & Wellbeing",
    platforms: ["android"],
  },
  {
    slug: "regain",
    icon: "/products/regain.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=ai.regainapp.focus",
    name: "Regain",
    summary: "Habit recovery built around focus and self-control.",
    category: "Focus & Wellbeing",
    platforms: ["android"],
  },

  // ------------------------------------------------------- AI tools & utilities
  {
    slug: "captionlab",
    icon: "/products/captionlab.png",
    appStoreUrl: "https://apps.apple.com/us/app/captionlab-ai-subtitles/id6792738982",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.captionlab.mobile",
    name: "CaptionLab",
    summary: "Generates video subtitles, styles them and exports them ready to publish.",
    category: "AI Tools & Utilities",
    platforms: ["ios", "android"],
  },
  {
    slug: "alfaaz",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.alfaaz.alfaaz",
    name: "Alfaaz",
    summary:
      "Burns word-timed captions into video across Hinglish, Roman Urdu, Hindi, Urdu, Arabic and English, including right-to-left scripts.",
    category: "AI Tools & Utilities",
    platforms: ["android"],
  },
  {
    slug: "snapchef",
    icon: "/products/snapchef.png",
    appStoreUrl: "https://apps.apple.com/us/app/snapchef-ai-fridge-scanner/id6783267721",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.aariz.snapchef",
    name: "SnapChef",
    summary: "Photograph what is in your fridge and get recipes from the ingredients.",
    category: "AI Tools & Utilities",
    platforms: ["ios", "android"],
  },
  {
    slug: "sitevoice",
    icon: "/products/sitevoice.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=ai.sitevoice.sitereports",
    name: "SiteVoice",
    summary: "Voice-driven site reporting for people working away from a desk.",
    category: "AI Tools & Utilities",
    platforms: ["android"],
    siteUrl: "https://sitevoice.ai",
  },
  // The one product with no store listing of any kind. Anything that phrases a
  // sentence or a schema property around "where you can get it" has to handle
  // that absence rather than assume a store — see `storeLink` below.
  {
    slug: "amy",
    name: "Amy",
    summary: "A personal finance companion that turns saving into a habit through AI insights and gamification.",
    category: "AI Tools & Utilities",
    // No platform claimed. This carried `platforms: ["android"]` with no
    // `playStoreUrl`, and the product page turned that into the sentence "It is
    // published on Google Play" — an assertion the site could not support with
    // a link. The site link below is the only verifiable thing we have for Amy.
    // Add `platforms: ["android"]` back the moment a real Play URL exists.
    platforms: [],
    siteUrl: "https://amyapp.ai",
  },
  {
    slug: "decorly",
    icon: "/products/decorly.png",
    appStoreUrl: "https://apps.apple.com/us/app/decorly-ai-home-designer/id6790838607",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.decorly.app",
    name: "Decorly",
    summary: "Interior design concepts generated from a photograph of the room.",
    category: "AI Tools & Utilities",
    platforms: ["ios", "android"],
    siteUrl: "https://decorly.click",
  },
  {
    slug: "plantcare-pro",
    icon: "/products/plantcare-pro.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.plantcare.pro",
    name: "PlantCare Pro",
    summary: "Identifies plants from a photograph and returns the care they need.",
    category: "AI Tools & Utilities",
    platforms: ["android"],
    siteUrl: "https://www.plantcarepro.app",
  },
  {
    slug: "pdf-superapp",
    icon: "/products/pdf-superapp.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.pdfsuperapp.reader.editor",
    name: "PDF SuperApp",
    summary: "Scan, read, edit and listen to PDFs from one place.",
    category: "AI Tools & Utilities",
    platforms: ["android"],
    siteUrl: "https://www.pdfsuperapp.com",
  },
];

export const PRODUCT_COUNT = PRODUCTS.length;

export function productsIn(category: ProductCategory): Product[] {
  return PRODUCTS.filter((product) => product.category === category);
}

/** The single outbound link for a card: App Store, then Play, then the site. */
export function primaryLink(product: Product): string | undefined {
  return product.appStoreUrl ?? product.playStoreUrl ?? product.siteUrl;
}

/**
 * The listing a visitor can actually install from, or `undefined` where there is
 * none. Distinct from `primaryLink`, which falls through to the marketing site:
 * a marketing site is somewhere to read about the app, not somewhere to get it,
 * and conflating the two is what made /products/amy claim a Play listing.
 */
export function storeLink(product: Product): string | undefined {
  return product.appStoreUrl ?? product.playStoreUrl;
}

/**
 * Every off-site location of the same product, for schema.org `sameAs`. Store
 * listings are other pages *about* this entity, not the entity's own URL, so
 * they belong here and in `installUrl` rather than in `url`.
 */
export function productSameAs(product: Product): string[] {
  return [product.appStoreUrl, product.playStoreUrl, product.siteUrl].filter(
    (href): href is string => Boolean(href),
  );
}

/** Every store or site link a product has, labelled for display. */
export function productLinks(
  product: Product,
): Array<{ label: string; href: string }> {
  const links: Array<{ label: string; href: string }> = [];
  if (product.appStoreUrl) links.push({ label: "App Store", href: product.appStoreUrl });
  if (product.playStoreUrl) links.push({ label: "Google Play", href: product.playStoreUrl });
  if (product.siteUrl) links.push({ label: "Website", href: product.siteUrl });
  return links;
}
