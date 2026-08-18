import Link from "next/link";

import { bookingLinkProps } from "@/data/company";

import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  PRODUCT_COUNT,
  SCHEMA_CATEGORY,
  primaryLink,
  productLinks,
  productsIn,
  storeLink,
  type Product,
} from "@/data/products";
import { pageMetadata } from "@/lib/metadata";
import { ORG_ID, SITE_URL } from "@/lib/site";

// "most of them" rather than a flat "twenty-one apps on the App Store and
// Google Play": Amy has no store listing, so the unqualified claim was false.
export const metadata = pageMetadata({
  title: "Our Products — Apps We Build & Ship | ApexStack",
  description:
    "Twenty-one apps built and run by ApexStack — faith, health, parenting, focus and AI tools, most of them live on the App Store and Google Play.",
  path: "/products",
});

const PLATFORM_LABEL: Record<string, string> = {
  ios: "iOS",
  android: "Android",
};

/**
 * `MobileApplication` per product, wrapped in an `ItemList`.
 *
 * Each item carries the same `@id` as its detail page's node, so the hub is
 * describing the twenty-one existing entities rather than declaring a duplicate
 * set of them, and `url` points at the detail page. Both used to be wrong: there
 * was no `@id` at all, and `url` was the store listing, so the list conferred
 * nothing on the pages it exists to feed.
 *
 * No `aggregateRating` here either — same reason as the detail page: a
 * `ratingValue` without `ratingCount` or `reviewCount` is a validation error,
 * and no count is known. The rating still renders as visible copy on the card.
 */
function ProductSchema() {
  const graph = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/products#list`,
    name: "ApexStack products",
    numberOfItems: PRODUCT_COUNT,
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MobileApplication",
        "@id": `${SITE_URL}/products/${product.slug}#app`,
        name: product.name,
        description: product.summary,
        url: `${SITE_URL}/products/${product.slug}`,
        applicationCategory: SCHEMA_CATEGORY[product.category],
        genre: product.category,
        operatingSystem: product.platforms
          .map((platform) => PLATFORM_LABEL[platform])
          .join(", "),
        publisher: { "@id": ORG_ID },
        ...(storeLink(product) ? { installUrl: storeLink(product) } : {}),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

/**
 * Every colour here is theme-derived rather than fixed. The grid alternates dark
 * and light sections, and a card that hard-codes light-on-dark text disappears
 * entirely on the white rows.
 */
const CARD_THEME = {
  dark: {
    rule: "border-white/15",
    hoverRule: "hover:border-[#B4CC04]/60",
    name: "text-white",
    body: "text-[rgba(207,207,207,0.9)]",
    pill: "text-white/40 border-white/15",
    link: "text-white/50 group-hover:text-white",
    dot: "text-white/25",
  },
  light: {
    rule: "border-black/15",
    hoverRule: "hover:border-[#08090A]/60",
    name: "text-black",
    body: "text-black/60",
    pill: "text-black/40 border-black/15",
    link: "text-black/40 group-hover:text-black",
    dot: "text-black/25",
  },
} as const;

function ProductCard({
  product,
  theme,
}: {
  product: Product;
  theme: "dark" | "light";
}) {
  const links = productLinks(product);
  const c = CARD_THEME[theme];
  // On white the lime drops to near-4:1 contrast, so the metric switches to ink
  // and keeps its weight instead.
  const metric = theme === "light" ? "text-[#5A6600] font-medium" : "text-[#B4CC04]";

  const body = (
    <>
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="flex items-center gap-3 min-w-0">
          {product.icon && (
            <img
              src={product.icon}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className={`w-10 h-10 rounded-[22%] shrink-0 border ${theme === "light" ? "border-black/10" : "border-white/15"}`}
            />
          )}
          <Link
            href={`/products/${product.slug}`}
            className={`${c.name} text-base md:text-xl font-medium hover:underline underline-offset-4 truncate`}
          >
            {product.name}
          </Link>
        </span>
        <span className="flex gap-1.5 shrink-0 pt-1">
          {product.platforms.map((platform) => (
            <span
              key={platform}
              className={`text-[10px] uppercase tracking-[1px] border rounded-[2px] px-1.5 py-0.5 ${c.pill}`}
            >
              {PLATFORM_LABEL[platform]}
            </span>
          ))}
        </span>
      </div>

      <p className={`${c.body} text-sm md:text-base leading-snug md:leading-6 mb-4`}>
        {product.summary}
      </p>

      {(product.downloads ?? product.rating) && (
        <p className={`${metric} text-sm mb-3`}>
          {product.downloads && <span>{product.downloads} downloads</span>}
          {product.downloads && product.rating && <span className={c.dot}> · </span>}
          {product.rating && <span>{product.rating}★ rating</span>}
        </p>
      )}

      {/* Named, not "Read more". Twenty-one identical anchors sat here, each
          pointing at a different page, which told a crawler and a screen-reader
          user exactly nothing about where they led. */}
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        <Link
          href={`/products/${product.slug}`}
          className={`${c.link} text-sm underline underline-offset-4 transition-colors`}
        >
          Inside {product.name}
        </Link>
      </div>

      {links.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${c.link} text-sm underline underline-offset-4 transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );

  // Each store is its own link, so the card itself is a plain container: one
  // anchor wrapping several anchors is invalid HTML and breaks keyboard order.
  return (
    <div className={`group border-t ${c.rule} pt-6 transition-colors ${c.hoverRule}`}>
      {body}
    </div>
  );
}

export default function ProductsPage() {
  const linked = PRODUCTS.filter((product) => primaryLink(product)).length;
  const onBoth = PRODUCTS.filter(
    (product) => product.appStoreUrl && product.playStoreUrl,
  ).length;

  return (
    <>
      <ProductSchema />
      <PageLayout
        eyebrow="OUR PRODUCTS"
        title="We do not only build software for other people"
        intro={`ApexStack designs, builds and runs ${PRODUCT_COUNT} of its own apps, most of them published on the App Store and Google Play. The same team, the same standards, and the same on-call rota as the work we do for clients.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        path="/products"
        pageType="CollectionPage"
      >
        {/* ------------------------------------------------------------ why it matters */}
        <Section theme="dark" borderTop={false}>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[35%]">
              <Eyebrow>WHY THIS PAGE EXISTS</Eyebrow>
            </div>
            <div className="md:w-[65%] space-y-5">
              <p className="text-white text-base md:text-[20px] leading-relaxed">
                Every agency says it can ship. Almost none can show you something running
                in public, under its own name, that it has to keep working on a Monday
                morning.
              </p>
              <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
                These are ours. They are published under our parent company, they have real
                users, and when one of them breaks it is our phone that rings. That changes
                how we build for you — we have made the expensive mistakes on our own time,
                on our own products, and you get the result rather than the tuition fee.
              </p>
              <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
                Store review, app-store rejections, migrations, cost control, crash triage
                and the slow work of keeping a live product healthy are not theory here.
                They are what we do every week.
              </p>
            </div>
          </div>
        </Section>

        {/* ----------------------------------------------------------------- the grid */}
        {PRODUCT_CATEGORIES.map((category, index) => {
          const items = productsIn(category);
          if (items.length === 0) return null;
          const theme = index % 2 === 1 ? "light" : "dark";

          return (
            <Section key={category} theme={theme} padding="py-12 md:py-16">
              <div className="flex items-baseline gap-4 mb-10">
                <SectionHeading theme={theme}>{category}</SectionHeading>
                <span
                  className={`text-sm ${theme === "light" ? "text-black/40" : "text-white/40"}`}
                >
                  {items.length}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} theme={theme} />
                ))}
              </div>
            </Section>
          );
        })}

        {/* -------------------------------------------------------------------- CTA */}
        <Section theme="dark">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-[60%]">
              <Eyebrow className="mb-4">WHAT THIS MEANS FOR YOU</Eyebrow>
              <SectionHeading className="mb-5">
                The team that built these is the team that would build yours
              </SectionHeading>
              <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed mb-8">
                Every one of the {linked} is linked above, and {onBoth} are on both stores.
                Open any of them, use it, and judge the work directly. Then tell us what you
                are trying to build.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  {...bookingLinkProps()}
                  className="bg-[#B4CC04] hover:bg-[#D4F005] text-black font-medium px-6 py-3 rounded-[2px] text-sm transition-colors"
                >
                  Book a Discovery Call
                </Link>
                <Link
                  href="/services"
                  className="border border-white/40 hover:border-white text-white font-medium px-6 py-3 rounded-[2px] text-sm transition-colors"
                >
                  See what we build
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </PageLayout>
    </>
  );
}
