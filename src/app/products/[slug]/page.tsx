import Link from "next/link";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import { bookingLinkProps } from "@/data/company";
import { PRODUCT_STORY } from "@/data/product-story";
import {
  PRODUCTS,
  SCHEMA_CATEGORY,
  productLinks,
  productSameAs,
  productsIn,
  storeLink,
  type Product,
} from "@/data/products";
import { pageMetadata } from "@/lib/metadata";
import { ORG_ID, SITE_URL } from "@/lib/site";

/**
 * One page per product, generated from the catalogue.
 *
 * Everything factual here — name, category, platforms, store links, icon and
 * the long description — comes from the app's own published listing. Where a
 * listing could not be read (Google Play blocks it), the page shows the short
 * summary and simply omits the section rather than filling it with invention.
 */

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

function lookup(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

const PLATFORM_LABEL: Record<string, string> = { ios: "iOS", android: "Android" };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = lookup(slug);
  if (!product) return { title: "Product not found | ApexStack" };

  const platforms = product.platforms.map((p) => PLATFORM_LABEL[p]).join(" and ");
  const title = `${product.name} — ${product.category} App for ${platforms}`;
  // Front-loads the app name, then what it does, then where you can get it.
  // Answer-engines quote the first clause, so the summary leads and the
  // provenance follows rather than the other way round.
  const description = `${product.summary} ${product.name} is available on ${platforms}, built and maintained by ApexStack.`;

  return pageMetadata({
    title: title.length > 60 ? `${product.name} | ApexStack` : title,
    description,
    path: `/products/${slug}`,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = lookup(slug);
  if (!product) notFound();

  const links = productLinks(product);
  const store = storeLink(product);
  const story = PRODUCT_STORY[slug];
  const related = productsIn(product.category)
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  /**
   * `url` is the entity's own canonical location — this page. It used to be
   * `links[0].href`, so every app declared Apple's listing as its home on the
   * very page built to rank for its name. The listings are other locations of
   * the same thing (`sameAs`) and one of them is where you install it
   * (`installUrl`).
   *
   * No `aggregateRating`: Google requires `ratingCount` or `reviewCount`
   * alongside `ratingValue`, and neither count is known. The block was emitting
   * a rating with no count, which is a validation error that invalidates the
   * whole item rather than just the rating — the 4.9 still renders as visible
   * copy below. Restore this only with a real count from the store listing.
   */
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${SITE_URL}/products/${slug}#app`,
    name: product.name,
    description: product.summary,
    url: `${SITE_URL}/products/${slug}`,
    applicationCategory: SCHEMA_CATEGORY[product.category],
    genre: product.category,
    operatingSystem: product.platforms.map((p) => PLATFORM_LABEL[p]).join(", "),
    publisher: { "@id": ORG_ID },
    ...(product.icon ? { image: `${SITE_URL}${product.icon}` } : {}),
    ...(store ? { installUrl: store } : {}),
    sameAs: productSameAs(product),
  };

  /**
   * Questions a person actually types, answered in one self-contained sentence
   * each. Both things matter for answer engines: a passage is only quotable if
   * it makes sense lifted away from the page around it, so every answer repeats
   * the product name instead of saying "it".
   *
   * Built purely from catalogue fields. Nothing is asked that the data cannot
   * answer, which is why price and release date do not appear here.
   */
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: `What is ${product.name}?`,
      a: `${product.name} is a ${product.category.toLowerCase()} app built by ApexStack. ${product.summary}`,
    },
    {
      q: `What devices does ${product.name} work on?`,
      // The final branch used to be the Google Play sentence with no guard, so a
      // product with neither store URL — Amy — answered "It is published on
      // Google Play", and the claim was serialised into the FAQPage markup
      // below. Where there is no listing, the availability clause is omitted
      // rather than guessed.
      a: `${product.name} runs on ${product.platforms.map((p) => PLATFORM_LABEL[p]).join(" and ")}.${
        product.appStoreUrl && product.playStoreUrl
          ? " It is published on both the App Store and Google Play."
          : product.appStoreUrl
            ? " It is published on the App Store."
            : product.playStoreUrl
              ? " It is published on Google Play."
              : ""
      }`,
    },
    {
      q: `Who made ${product.name}?`,
      a: `${product.name} was designed, built and is maintained by ApexStack, a product engineering company. It is our own product, not client work, and the same team is available to build software for other businesses.`,
    },
    ...(product.downloads
      ? [
          {
            q: `How many people use ${product.name}?`,
            a: `${product.name} has ${product.downloads} downloads across its app store listings.`,
          },
        ]
      : []),
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/products/${slug}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageLayout
        eyebrow="OUR PRODUCT"
        title={product.name}
        intro={product.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        path={`/products/${slug}`}
        pageType="WebPage"
      >
        {/* ------------------------------------------------------------ at a glance */}
        <Section theme="dark" borderTop={false}>
          <div className="flex flex-col md:flex-row gap-10 md:gap-14">
            {product.icon && (
              <img
                src={product.icon}
                alt={`${product.name} app icon`}
                width={128}
                height={128}
                className="w-24 h-24 md:w-32 md:h-32 rounded-[22%] shrink-0 border border-white/15"
              />
            )}
            <div className="flex-1">
              <Eyebrow className="mb-4">AT A GLANCE</Eyebrow>
              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                <div>
                  <dt className="text-white/40 text-xs uppercase tracking-[1.5px] mb-1">
                    Category
                  </dt>
                  <dd className="text-white text-base">{product.category}</dd>
                </div>
                <div>
                  <dt className="text-white/40 text-xs uppercase tracking-[1.5px] mb-1">
                    Platforms
                  </dt>
                  <dd className="text-white text-base">
                    {product.platforms.map((p) => PLATFORM_LABEL[p]).join(" · ")}
                  </dd>
                </div>
                {product.downloads && (
                  <div>
                    <dt className="text-white/40 text-xs uppercase tracking-[1.5px] mb-1">
                      Downloads
                    </dt>
                    <dd className="text-[#B4CC04] text-base">{product.downloads}</dd>
                  </div>
                )}
                {product.rating && (
                  <div>
                    <dt className="text-white/40 text-xs uppercase tracking-[1.5px] mb-1">
                      Store rating
                    </dt>
                    <dd className="text-[#B4CC04] text-base">{product.rating}★</dd>
                  </div>
                )}
              </dl>
              {links.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/40 hover:border-white text-white font-medium px-5 py-2.5 rounded-[2px] text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Section>

        {/* ------------------------------------------------------------ the product */}
        {story && (
          <Section theme="light">
            <Eyebrow theme="light" className="mb-4">
              WHAT IT DOES
            </Eyebrow>
            <SectionHeading theme="light" className="mb-8">
              {product.name} in full
            </SectionHeading>
            <div className="max-w-3xl space-y-5">
              {story
                .split(/(?<=[.!?])\s+(?=[A-Z])/)
                .reduce<string[]>((paras, sentence, i) => {
                  // Store listings arrive as one long run of text. Grouping into
                  // threes gives readable paragraphs without rewriting a word.
                  const index = Math.floor(i / 3);
                  paras[index] = `${paras[index] ?? ""} ${sentence}`.trim();
                  return paras;
                }, [])
                .filter(Boolean)
                .map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-black/70 text-sm md:text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </Section>
        )}

        {/* --------------------------------------------------- what building it means */}
        <Section theme="dark">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[35%]">
              <Eyebrow>WHY THIS MATTERS TO YOU</Eyebrow>
            </div>
            <div className="md:w-[65%] space-y-5">
              <p className="text-white text-base md:text-[20px] leading-relaxed">
                {product.name} is ours. We designed it, built it, shipped it through
                store review, and we keep it running.
              </p>
              <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
                That means the work behind it was not theoretical: onboarding that had
                to convert, data that had to stay correct, releases that had to pass
                review, crashes that had to be found before users did, and running
                costs that had to stay sensible. Those are the same problems your
                product will have.
              </p>
              <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
                We have made the expensive mistakes on our own products, on our own
                time. You get the result rather than the tuition fee.
              </p>
            </div>
          </div>
        </Section>

        {/* -------------------------------------------------------------------- FAQ */}
        <Section theme="light">
          <Eyebrow theme="light" className="mb-4">
            COMMON QUESTIONS
          </Eyebrow>
          <SectionHeading theme="light" className="mb-8">
            {product.name}, answered
          </SectionHeading>
          <div className="max-w-3xl divide-y divide-black/10 border-t border-black/10">
            {faqs.map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="text-black text-base md:text-[19px] font-medium mb-2">
                  {item.q}
                </h3>
                <p className="text-black/70 text-sm md:text-base leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- related */}
        {related.length > 0 && (
          <Section theme="light">
            <Eyebrow theme="light" className="mb-4">
              MORE IN {product.category.toUpperCase()}
            </Eyebrow>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group flex items-start gap-4 border-t border-black/15 pt-5"
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-[22%] shrink-0 border border-black/10"
                    />
                  )}
                  <span>
                    <span className="block text-black text-base font-medium group-hover:underline underline-offset-4">
                      {item.name}
                    </span>
                    <span className="block text-black/60 text-sm leading-snug mt-1">
                      {item.summary}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* -------------------------------------------------------------------- CTA */}
        <Section theme="dark">
          <div className="md:w-[65%]">
            <Eyebrow className="mb-4">BUILD SOMETHING LIKE THIS</Eyebrow>
            <SectionHeading className="mb-5">
              The team that shipped {product.name} can ship yours
            </SectionHeading>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed mb-8">
              Download it, use it, judge the work. Then tell us what you are trying to
              build.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                {...bookingLinkProps()}
                className="bg-[#B4CC04] hover:bg-[#D4F005] text-black font-medium px-6 py-3 rounded-[2px] text-sm transition-colors inline-flex items-center justify-center"
              >
                Book a Discovery Call
              </a>
              <Link
                href="/products"
                className="border border-white/40 hover:border-white text-white font-medium px-6 py-3 rounded-[2px] text-sm transition-colors inline-flex items-center justify-center"
              >
                All our products
              </Link>
            </div>
          </div>
        </Section>
      </PageLayout>
    </>
  );
}
