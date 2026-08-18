import Link from "next/link";

import { bookingLinkProps } from "@/data/company";

import type { Metadata } from "next";

import { SITE_URL } from "@/app/layout";
import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import {
  ALL_SERVICES,
  CORE_ENGINEERING,
  CREATIVE_SERVICES,
  type ServiceItem,
} from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

// The hand-written `openGraph` here replaced the root object outright, dropping
// og:image, og:site_name and og:type, and set no `twitter` block at all.
export const metadata: Metadata = pageMetadata({
  title: "Software Development & Design Services | ApexStack",
  description:
    "Custom software, enterprise systems, SaaS, AI products, cloud, DevOps and mobile apps — plus the design and brand work that supports them. 23 services in one team.",
  path: "/services",
});

/**
 * The 23 services as one `ItemList`, matching what /products and /portfolio
 * already emit.
 *
 * Without it the hub shipped a `CollectionPage` that declared it collected
 * something and never said what, so the 23 `Service` nodes on the child pages
 * had no parent tying them together. Each `@id` is the same string the detail
 * page uses at `/services/<slug>#service`, so hub and detail resolve to one
 * entity rather than two descriptions of the same service.
 */
function ServicesSchema() {
  const graph = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/services#list`,
    name: "ApexStack services",
    numberOfItems: ALL_SERVICES.length,
    itemListElement: ALL_SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${service.slug}#service`,
        name: service.name,
        description: service.summary,
        url: `${SITE_URL}/services/${service.slug}`,
        provider: { "@id": `${SITE_URL}/#organization` },
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

function ServiceCard({ service, theme }: { service: ServiceItem; theme: "dark" | "light" }) {
  const isLight = theme === "light";
  return (
    <div
      id={service.slug}
      className="scroll-mt-28 border-t pt-6"
      style={{ borderColor: isLight ? "rgba(8,9,10,0.2)" : "rgba(255,255,255,0.2)" }}
    >
      <h3 className="text-base md:text-xl font-medium mb-3">
        <Link
          href={`/services/${service.slug}`}
          className={`${isLight ? "text-black hover:text-black/60" : "text-white hover:text-[#B4CC04]"} transition-colors`}
        >
          {service.name}
        </Link>
      </h3>
      <p className={`text-sm md:text-base mb-5 ${isLight ? "text-black/70" : "text-white/50"}`}>
        {service.summary}
      </p>
      <ul className="space-y-2">
        {service.deliverables.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="text-[#B4CC04] mt-1 shrink-0" aria-hidden="true">
              —
            </span>
            <span
              className={`text-sm ${isLight ? "text-black/60" : "text-white/45"}`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServicesSchema />
      <PageLayout
        eyebrow="SERVICES"
        title="Engineering first. Everything else supports it."
        intro="Twenty-three capabilities under one team — so nobody hands your problem to somebody else halfway through."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        path="/services"
        pageType="CollectionPage"
      >
        {/* ------------------------------------------------------ core engineering */}
        <Section theme="dark" borderTop={false} id="core-engineering">
          <Eyebrow className="mb-4">CORE ENGINEERING</Eyebrow>
          <SectionHeading className="mb-4">What we are here to do</SectionHeading>
          <p className="text-white/50 text-sm md:text-base mb-12 max-w-2xl">
            Fourteen engineering capabilities, delivered by one team through the same{" "}
            <Link href="/process" className="text-white/80 underline underline-offset-4 hover:text-white transition-colors">
              five-phase process
            </Link>{" "}
            on every engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {CORE_ENGINEERING.map((service) => (
              <ServiceCard key={service.slug} service={service} theme="dark" />
            ))}
          </div>
        </Section>

        {/* ----------------------------------------------------- creative services */}
        <Section theme="light" id="creative-services">
          <Eyebrow theme="light" className="mb-4">
            DESIGN &amp; CREATIVE
          </Eyebrow>
          <SectionHeading theme="light" className="mb-4">
            The layer that makes it worth using
          </SectionHeading>
          <p className="text-black/60 text-sm md:text-base mb-12 max-w-2xl">
            Available standalone, but more effective when the people designing the product and
            the people building it sit in the same team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {CREATIVE_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} theme="light" />
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------------ cta */}
        <Section theme="dark" borderBottom={false}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="md:w-3/4">
              <Eyebrow className="mb-4">NOT SURE WHICH YOU NEED</Eyebrow>
              <SectionHeading className="mb-4">
                Start with the problem, not the service
              </SectionHeading>
              <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base max-w-2xl">
                Most engagements begin with a business problem rather than a shopping list. Tell
                us what is not working and we will tell you whether software is the answer — and
                which of these it actually needs. You can also read{" "}
                <Link href="/industries" className="underline underline-offset-4 hover:text-white transition-colors">
                  how we work by industry
                </Link>
                .
              </p>
            </div>
            <div className="shrink-0">
              <Link {...bookingLinkProps()} className="inline-flex items-center justify-center px-6 py-3 text-black border bg-[#B4CC04] border-white/30 rounded-[2px] hover:bg-white hover:text-black transition">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </Section>
      </PageLayout>
    </>
  );
}
