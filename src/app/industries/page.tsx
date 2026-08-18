import Link from "next/link";

import { bookingLinkProps } from "@/data/company";

import type { Metadata } from "next";

import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import { INDUSTRIES } from "@/data/industries";
import { ALL_SERVICES } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Build Software For | ApexStack",
  description:
    "The recurring problems in finance, healthcare, retail, logistics, manufacturing, education and more — and the systems we build against them. Find your sector.",
  path: "/industries",
});

/**
 * Slug → display name, built once. The industry data stores slugs rather than
 * names so a service renamed in one place cannot leave a stale label here.
 */
const SERVICE_NAMES = new Map(ALL_SERVICES.map((service) => [service.slug, service.name]));

export default function IndustriesPage() {
  return (
    <PageLayout
      eyebrow="INDUSTRIES"
      title="Every sector has its own constraints. We learn yours before we write code."
      intro="We sell by capability rather than vertical, but the context changes what good architecture looks like — so we start by understanding yours."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      path="/industries"
      pageType="CollectionPage"
    >
      <Section theme="dark" borderTop={false}>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-[35%]">
            <Eyebrow>HOW TO READ THIS</Eyebrow>
          </div>
          <div className="md:w-[65%] space-y-5">
            <p className="text-white text-base md:text-[20px] leading-relaxed">
              Domain knowledge is not the same as domain expertise, and we will not pretend
              otherwise.
            </p>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
              What follows is the set of problems that recur in each sector and the kinds of
              system we build against them. You will know your industry far better than we do.
              Our job is to translate that knowledge into architecture that holds — and to ask
              the questions that surface the constraints you have stopped noticing because they
              have always been there.
            </p>
          </div>
        </div>
      </Section>

      {INDUSTRIES.map((industry, index) => {
        const isLight = index % 2 === 1;
        const theme = isLight ? "light" : "dark";
        return (
          <Section key={industry.slug} theme={theme} id={industry.slug} padding="py-12 md:py-16">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-[35%]">
                <span className="text-[#B4CC04] text-sm font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <SectionHeading theme={theme} className="mt-2">
                  {industry.name}
                </SectionHeading>
              </div>
              <div className="md:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <span
                    className={`text-xs uppercase tracking-[1.5px] block mb-4 ${
                      isLight ? "text-black/40" : "text-white/40"
                    }`}
                  >
                    What we hear
                  </span>
                  <ul className="space-y-3">
                    {industry.problems.map((problem) => (
                      <li
                        key={problem}
                        className={`text-sm md:text-base ${
                          isLight ? "text-black/70" : "text-white/60"
                        }`}
                      >
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span
                    className={`text-xs uppercase tracking-[1.5px] block mb-4 ${
                      isLight ? "text-black/40" : "text-white/40"
                    }`}
                  >
                    What we build
                  </span>
                  <ul className="space-y-3">
                    {industry.weBuild.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[#B4CC04] mt-1 shrink-0" aria-hidden="true">
                          —
                        </span>
                        <span
                          className={`text-sm md:text-base ${
                            isLight ? "text-black/70" : "text-white/60"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The page's only contextual outbound links: each sector points at the
                    service pages that describe the work it is actually buying. Spans the
                    grid rather than sitting outside it so it stays aligned with the two
                    columns above at every breakpoint. */}
                <div
                  className={`sm:col-span-2 border-t pt-5 ${
                    isLight ? "border-black/10" : "border-white/10"
                  }`}
                >
                  <span
                    className={`text-xs uppercase tracking-[1.5px] block mb-3 ${
                      isLight ? "text-black/40" : "text-white/40"
                    }`}
                  >
                    Services for this sector
                  </span>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2">
                    {industry.relatedServices.map((serviceSlug) => {
                      const name = SERVICE_NAMES.get(serviceSlug);
                      if (!name) return null;
                      return (
                        <li key={serviceSlug}>
                          <Link
                            href={`/services/${serviceSlug}`}
                            className={`text-sm underline underline-offset-4 transition-colors ${
                              isLight
                                ? "text-black/60 hover:text-black"
                                : "text-white/60 hover:text-white"
                            }`}
                          >
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      <Section theme="dark" borderBottom={false}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="md:w-3/4">
            <SectionHeading className="mb-4">Not listed here?</SectionHeading>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base max-w-2xl">
              The engineering problems — data integrity, integration, scale, compliance,
              usability — recur across every sector. Tell us the constraints you work under and
              we will tell you honestly whether we are the right team. See{" "}
              <Link href="/services" className="underline underline-offset-4 hover:text-white transition-colors">
                what we build
              </Link>{" "}
              or{" "}
              <Link href="/process" className="underline underline-offset-4 hover:text-white transition-colors">
                how we work
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
  );
}
