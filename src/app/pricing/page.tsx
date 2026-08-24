import Link from "next/link";

import type { Metadata } from "next";

import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import { bookingLinkProps } from "@/data/company";
import {
  PRICING_OFFERS,
  PRICING_PAGE,
  PRICING_SHARED_BOUNDARIES,
} from "@/data/pricing";
import type { SchemaNode } from "@/data/schema";
import { pageMetadata } from "@/lib/metadata";
import { ORG_ID, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: PRICING_PAGE.seoTitle,
  description: PRICING_PAGE.seoDescription,
  path: "/pricing",
});

const offerNodes: SchemaNode[] = PRICING_OFFERS.map((offer) => ({
  "@type": "Offer",
  "@id": `${SITE_URL}/pricing#${offer.id}`,
  name: offer.name,
  description: offer.summary,
  url: `${SITE_URL}/pricing#${offer.id}`,
  seller: { "@id": ORG_ID },
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "USD",
    minPrice: offer.startingPriceUsd,
  },
  itemOffered: {
    "@type": "Service",
    name: offer.name,
    description: offer.summary,
    provider: { "@id": ORG_ID },
  },
}));

export default function PricingPage() {
  return (
    <PageLayout
      eyebrow={PRICING_PAGE.eyebrow}
      title={PRICING_PAGE.title}
      intro={PRICING_PAGE.intro}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      path="/pricing"
      mainEntity={offerNodes.map((offer) => ({ "@id": offer["@id"] }))}
      extraSchema={offerNodes}
    >
      <Section theme="dark" borderTop={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PRICING_OFFERS.map((offer) => (
            <article
              id={offer.id}
              key={offer.id}
              className="scroll-mt-28 border border-white/20 rounded-[2px] p-6 md:p-8"
            >
              <p className="text-[#B4CC04] text-sm font-medium mb-3">{offer.priceLabel}</p>
              <h2 className="text-white text-[26px] md:text-[32px] font-medium leading-[125%] mb-4">
                {offer.name}
              </h2>
              <p className="text-white text-base md:text-[18px] leading-[1.7] mb-5">
                {offer.summary}
              </p>
              <p className="text-white/55 text-sm md:text-base leading-[1.7] mb-7">
                {offer.suitableFor}
              </p>
              <h3 className="text-white text-base font-medium mb-4">
                {PRICING_PAGE.includedHeading}
              </h3>
              <ul className="space-y-3 mb-7">
                {offer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70 text-sm md:text-base">
                    <span className="text-[#B4CC04] shrink-0" aria-hidden="true">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="border-t border-white/15 pt-5 text-white/50 text-sm leading-[1.7]">
                {offer.boundary}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section theme="light">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-[35%]">
            <Eyebrow theme="light" className="mb-4">
              {PRICING_PAGE.boundaryEyebrow}
            </Eyebrow>
            <SectionHeading theme="light">{PRICING_PAGE.boundaryHeading}</SectionHeading>
          </div>
          <div className="md:w-[65%]">
            <p className="text-black/70 text-base md:text-[18px] leading-[1.75] mb-7">
              {PRICING_PAGE.boundaryIntro}
            </p>
            <ul className="space-y-4">
              {PRICING_SHARED_BOUNDARIES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-black/65 text-sm md:text-base leading-[1.7]">
                  <span className="text-black shrink-0" aria-hidden="true">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section theme="dark" borderBottom={false}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="md:w-3/4">
            <Eyebrow className="mb-4">{PRICING_PAGE.ctaEyebrow}</Eyebrow>
            <SectionHeading className="mb-4">{PRICING_PAGE.ctaHeading}</SectionHeading>
            <p className="text-white/65 text-sm md:text-base max-w-2xl leading-[1.7]">
              {PRICING_PAGE.ctaBody}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-white border border-white/30 rounded-[2px] hover:border-white/60 transition-colors"
            >
              {PRICING_PAGE.contactLabel}
            </Link>
            <a
              {...bookingLinkProps()}
              className="inline-flex items-center justify-center px-6 py-3 text-black bg-[#B4CC04] rounded-[2px] hover:bg-white transition-colors"
            >
              {PRICING_PAGE.callLabel}
            </a>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
