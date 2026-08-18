import Link from "next/link";

import { bookingLinkProps } from "@/data/company";

import type { Metadata } from "next";

import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import { LIVE_PORTFOLIO, PORTFOLIO_COUNT } from "@/data/portfolio";
import { PRODUCTS, PRODUCT_COUNT, primaryLink, productLinks } from "@/data/products";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio — Our Products & Platforms | ApexStack",
  description:
    "The apps ApexStack owns and runs, and the web platforms we have built and shipped. Live links throughout — open any of them and judge the work yourself.",
  path: "/portfolio",
});

/** Products that carry a link, newest-facing first — the shortlist for this page. */
const FEATURED = PRODUCTS.filter((product) => primaryLink(product)).slice(0, 9);

function PortfolioSchema() {
  const graph = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/portfolio#list`,
    name: "ApexStack portfolio",
    numberOfItems: PORTFOLIO_COUNT,
    itemListElement: LIVE_PORTFOLIO.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioSchema />
      <PageLayout
        eyebrow="PORTFOLIO"
        title="Work you can open in a browser right now"
        intro="Two kinds of work sit here: the products we own and run ourselves, and the platforms we have built and shipped. Both are live, and both are linked."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        path="/portfolio"
        pageType="CollectionPage"
      >
        {/* -------------------------------------------------------- our own products */}
        <Section theme="dark" borderTop={false}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-4">
            <div>
              <Eyebrow className="mb-4">OUR PRODUCTS</Eyebrow>
              <SectionHeading>Apps we own, ship and keep running</SectionHeading>
            </div>
            <span className="text-[#B4CC04] text-sm shrink-0 md:pt-2">
              {PRODUCT_COUNT} published
            </span>
          </div>
          <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
            Published on the App Store and Google Play under our parent company. Real users,
            real store reviews, and our phone number on the incident rota.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {FEATURED.map((product) => (
              // A plain container, not an anchor: the tile now carries an internal link
              // to the product page plus one anchor per store, and nesting anchors is
              // invalid HTML that also breaks keyboard order. Same shape as ProductCard
              // on /products.
              <div
                key={product.slug}
                className="group border-t border-white/15 pt-6 transition-colors hover:border-[#B4CC04]/60"
              >
                <h3 className="text-base md:text-xl font-medium mb-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-white hover:underline underline-offset-4"
                  >
                    {product.name}
                  </Link>
                </h3>
                <p className="text-[rgba(207,207,207,0.9)] text-sm leading-snug mb-3">
                  {product.summary}
                </p>
                {(product.downloads ?? product.rating) && (
                  <p className="text-[#B4CC04] text-sm mb-3">
                    {product.downloads && <span>{product.downloads} downloads</span>}
                    {product.downloads && product.rating && (
                      <span className="text-white/25"> · </span>
                    )}
                    {product.rating && <span>{product.rating}★</span>}
                  </p>
                )}
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-white/50 group-hover:text-white text-sm underline underline-offset-4 transition-colors"
                  >
                    Read more
                  </Link>
                  {productLinks(product).map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 group-hover:text-white text-sm underline underline-offset-4 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/products"
              className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors"
            >
              See all {PRODUCT_COUNT} products
            </Link>
            {/* The work above is the proof; these are the services it evidences, so the
                page passes relevance to them instead of ending at a store listing. */}
            <Link
              href="/services/mobile-app-development"
              className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors"
            >
              Mobile app development
            </Link>
            <Link
              href="/services/custom-software-development"
              className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors"
            >
              Custom software development
            </Link>
            <Link
              href="/services/saas-development"
              className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors"
            >
              SaaS platform development
            </Link>
          </div>
        </Section>

        {/* ------------------------------------------------------------- web platforms */}
        <Section theme="light">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-4">
            <div>
              <Eyebrow theme="light" className="mb-4">
                PLATFORMS WE HAVE SHIPPED
              </Eyebrow>
              <SectionHeading theme="light">Built, launched and live</SectionHeading>
            </div>
            <span className="text-black/40 text-sm shrink-0 md:pt-2">{PORTFOLIO_COUNT} sites</span>
          </div>
          <p className="text-black/60 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
            Web platforms and SaaS products we have designed, built and put into production —
            across several markets and languages.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {LIVE_PORTFOLIO.map((item) => (
              <a
                key={item.slug}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-t border-black/15 pt-5 transition-colors hover:border-[#08090A]/60"
              >
                <h3 className="text-black text-base md:text-xl font-medium mb-1">
                  {item.name}
                </h3>
                {item.summary && (
                  <p className="text-black/60 text-sm leading-snug mb-2">{item.summary}</p>
                )}
                <span className="text-black/40 group-hover:text-black text-sm underline underline-offset-4 transition-colors break-all">
                  {item.url.replace(/^https?:\/\/(www\.)?/, "")}
                </span>
              </a>
            ))}
          </div>
        </Section>

        {/* --------------------------------------------------------------------- CTA */}
        <Section theme="dark">
          <div className="md:w-[65%]">
            <Eyebrow className="mb-4">YOUR PROJECT</Eyebrow>
            <SectionHeading className="mb-5">
              Tell us what you are trying to build
            </SectionHeading>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed mb-8">
              Open anything above first. Then bring us the problem — we will tell you
              whether software is the answer, and what it would take.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                {...bookingLinkProps()}
                className="bg-[#B4CC04] hover:bg-[#D4F005] text-black font-medium px-6 py-3 rounded-[2px] text-sm transition-colors"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/process"
                className="border border-white/40 hover:border-white text-white font-medium px-6 py-3 rounded-[2px] text-sm transition-colors"
              >
                How we work
              </Link>
            </div>
          </div>
        </Section>
      </PageLayout>
    </>
  );
}
