import Link from "next/link";

import { bookingLinkProps } from "@/data/company";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { SITE_URL } from "@/app/layout";
import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import { PRODUCTS } from "@/data/products";
import { SERVICE_DETAILS } from "@/data/service-details";
import { SERVICE_SEO } from "@/data/service-seo";
import { ALL_SERVICES, CORE_ENGINEERING } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

/**
 * One landing page per service, generated from the catalogue.
 *
 * A template rather than 23 hand-written files: the structure is identical
 * across services (problem → approach → deliverables → outcomes → technology →
 * process → FAQ → related), so the content lives in data and the layout lives
 * here. Adding a service is a data change.
 *
 * Every page is statically generated and carries its own metadata, canonical,
 * breadcrumbs and Service + FAQPage schema.
 */

export function generateStaticParams() {
  return ALL_SERVICES.map((service) => ({ slug: service.slug }));
}

function lookup(slug: string) {
  const service = ALL_SERVICES.find((item) => item.slug === slug);
  const detail = SERVICE_DETAILS[slug];
  if (!service || !detail) return null;
  const isEngineering = CORE_ENGINEERING.some((item) => item.slug === slug);
  return { service, detail, isEngineering };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = lookup(slug);
  if (!found) return { title: "Service not found | ApexStack" };

  // Purpose-written search metadata where it exists; the service's own name and
  // summary are the fallback so a newly added service is never left without any.
  const seo = SERVICE_SEO[slug];

  // Hand-written `openGraph` here used to replace the root object wholesale, so
  // all 23 of these URLs unfurled without an image, a site name or a type, and
  // set no `twitter` block at all. `pageMetadata` supplies the shared keys.
  return pageMetadata({
    title: seo?.title ?? `${found.service.name} | ApexStack`,
    description: seo?.description ?? found.service.summary,
    path: `/services/${slug}`,
  });
}

const PROCESS_STEPS = [
  { step: "01", name: "Discovery", body: "We map the business problem and define success in measurable terms." },
  { step: "02", name: "Architecture", body: "Technology and data decisions made against your constraints, documented with reasoning." },
  { step: "03", name: "Design", body: "Journeys and interfaces resolved on screen, including everything that goes wrong." },
  { step: "04", name: "Engineering", body: "Short cycles ending in working software, reviewed and tested before it merges." },
  { step: "05", name: "Deploy & Scale", body: "Automated release, monitoring in production, and support as usage grows." },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = lookup(slug);
  if (!found) notFound();
  const { service, detail, isEngineering } = found;

  const related = detail.related
    .map((relatedSlug) => ALL_SERVICES.find((item) => item.slug === relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  // Filtered rather than asserted, so a typo in `proofProducts` drops the card
  // instead of rendering an empty one or a link to a 404.
  const proof = (detail.proofProducts ?? [])
    .map((productSlug) => PRODUCTS.find((item) => item.slug === productSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  // The title carries the head term the page is bidding on; `service.name` is
  // the catalogue label ("Enterprise Systems") and matches no commercial query.
  // Nav, cards, breadcrumbs and the schema below keep using `service.name`.
  const heading = SERVICE_SEO[slug]?.h1 ?? service.name;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${slug}#service`,
        name: service.name,
        description: service.summary,
        serviceType: service.name,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Place", name: "Worldwide" },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/services/${slug}#faq`,
        mainEntity: detail.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageLayout
        eyebrow={isEngineering ? "ENGINEERING SERVICE" : "DESIGN & CREATIVE"}
        title={heading}
        intro={service.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        path={`/services/${slug}`}
        pageType="WebPage"
      >
        {/* ------------------------------------------------------------ problem */}
        <Section theme="dark" borderTop={false}>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[35%]">
              <Eyebrow>THE PROBLEM</Eyebrow>
            </div>
            <div className="md:w-[65%]">
              <p className="text-white text-base md:text-[20px] leading-relaxed mb-8">
                {detail.problem}
              </p>
              <span className="text-xs uppercase tracking-[1.5px] text-white/40 block mb-4">
                What we usually hear
              </span>
              <ul className="space-y-3">
                {detail.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <span className="text-[#B4CC04] mt-1 shrink-0" aria-hidden="true">
                      —
                    </span>
                    <span className="text-[rgba(207,207,207,0.9)] text-sm md:text-base">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ----------------------------------------------------------- approach */}
        <Section theme="light">
          <Eyebrow theme="light" className="mb-4">
            HOW WE APPROACH IT
          </Eyebrow>
          <SectionHeading theme="light" className="mb-8">
            {isEngineering ? "Engineering, not guesswork" : "Design with a job to do"}
          </SectionHeading>
          <div className="max-w-3xl space-y-5">
            {detail.approach.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-black/70 text-sm md:text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------- deliverables & outcomes */}
        <Section theme="dark">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Eyebrow className="mb-4">WHAT YOU RECEIVE</Eyebrow>
              <SectionHeading className="mb-8">Deliverables</SectionHeading>
              <ul className="space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#B4CC04] mt-1 shrink-0" aria-hidden="true">
                      —
                    </span>
                    <span className="text-[rgba(207,207,207,0.9)] text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow className="mb-4">WHAT CHANGES</Eyebrow>
              <SectionHeading className="mb-8">Business outcomes</SectionHeading>
              <ul className="space-y-3">
                {detail.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#B4CC04] mt-1 shrink-0" aria-hidden="true">
                      —
                    </span>
                    <span className="text-[rgba(207,207,207,0.9)] text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* -------------------------------------------------------- technology */}
        <Section theme="light">
          <Eyebrow theme="light" className="mb-4">
            TECHNOLOGY
          </Eyebrow>
          <SectionHeading theme="light" className="mb-4">
            What we typically build with
          </SectionHeading>
          <p className="text-black/60 text-sm md:text-base mb-8 max-w-2xl">
            Selected against your constraints and your team&apos;s ability to maintain it — not
            against fashion.
          </p>
          <ul className="flex flex-wrap gap-3">
            {detail.technologies.map((tech) => (
              <li
                key={tech}
                className="text-sm text-black/70 border border-[#08090A]/25 rounded-[2px] px-3 py-2"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Section>

        {/* ----------------------------------------------------------- process */}
        <Section theme="dark">
          <Eyebrow className="mb-4">HOW WE DELIVER IT</Eyebrow>
          <SectionHeading className="mb-4">The same five phases, every time</SectionHeading>
          <p className="text-white/50 text-sm md:text-base mb-12 max-w-2xl">
            See the{" "}
            <Link
              href="/process"
              className="text-white/80 underline underline-offset-4 hover:text-white transition-colors"
            >
              full twelve-stage process
            </Link>{" "}
            for what each phase produces.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="border-t pt-6"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                <span className="text-[#B4CC04] text-sm font-medium">{item.step}</span>
                <h3 className="text-white text-base font-medium mt-2 mb-2">{item.name}</h3>
                <p className="text-white/50 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* --------------------------------------------------------------- faq */}
        <Section theme="light">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[35%]">
              <Eyebrow theme="light" className="mb-4">
                QUESTIONS
              </Eyebrow>
              {/* Was `service.name.toLowerCase()`, which rendered "About ai
                  products & ai agents" and "About crm & erp systems". */}
              <SectionHeading theme="light">About {service.name}</SectionHeading>
            </div>
            <div className="md:w-[65%] space-y-4">
              {detail.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border border-[#08090A4D] bg-[#F5F5F5] rounded-[2px] p-6"
                >
                  <h3 className="text-black font-medium mb-2">{faq.q}</h3>
                  <p className="text-black/70 text-sm md:text-base">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ------------------------------------------------------------ related */}
        {related.length > 0 && (
          <Section theme="dark">
            <Eyebrow className="mb-4">RELATED SERVICES</Eyebrow>
            <SectionHeading className="mb-12">Often needed alongside this</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group border-t pt-6"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <h3 className="text-white text-base md:text-xl font-medium mb-2 group-hover:text-[#B4CC04] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-white/50 text-sm md:text-base">{item.summary}</p>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* ----------------------------------------------------------- proof */}
        {/* The page had no route to evidence at all: the only CTA left the domain
            and nothing in the body linked to /portfolio or /products. Rendered
            only where `proofProducts` is populated, so no page carries filler. */}
        {proof.length > 0 && (
          <Section theme="light">
            <Eyebrow theme="light" className="mb-4">
              PROOF
            </Eyebrow>
            <SectionHeading theme="light" className="mb-4">
              We build this for ourselves as well
            </SectionHeading>
            <p className="text-black/60 text-sm md:text-base mb-12 max-w-2xl">
              Products we designed, built and now run ourselves. See the{" "}
              <Link
                href="/portfolio"
                className="text-black underline underline-offset-4 hover:text-black/60 transition-colors"
              >
                full portfolio
              </Link>
              .
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {proof.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group border-t pt-6"
                  style={{ borderColor: "rgba(8,9,10,0.2)" }}
                >
                  <h3 className="text-black text-base md:text-xl font-medium mb-2 group-hover:text-black/60 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-black/60 text-sm md:text-base">{product.summary}</p>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* --------------------------------------------------------------- cta */}
        <Section theme="dark" borderBottom={false}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="md:w-3/4">
              <SectionHeading className="mb-4">
                Tell us the problem, not the brief
              </SectionHeading>
              {/* `service.name` reads as written rather than lowercased, and the
                  sentence takes it as an object so plurals and acronyms both
                  stay grammatical across all 23 services. */}
              <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base max-w-2xl">
                We will tell you honestly whether you need {service.name} at all, and what a
                first phase would take. See{" "}
                <Link
                  href="/services"
                  className="underline underline-offset-4 hover:text-white transition-colors"
                >
                  all services
                </Link>{" "}
                or{" "}
                <Link
                  href="/industries"
                  className="underline underline-offset-4 hover:text-white transition-colors"
                >
                  how we work by industry
                </Link>
                .
              </p>
            </div>
            {/* The booking link is external (cal.com), so on its own it made the
                only call to action a route off the domain. /contact is the
                internal alternative for buyers who will not book a call. */}
            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
              <Link
                {...bookingLinkProps()}
                className="inline-flex items-center justify-center px-6 py-3 text-black border bg-[#B4CC04] border-white/30 rounded-[2px] hover:bg-white hover:text-black transition"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-white border border-white/30 rounded-[2px] hover:bg-white hover:text-black transition"
              >
                Send us the brief instead
              </Link>
            </div>
          </div>
        </Section>
      </PageLayout>
    </>
  );
}
