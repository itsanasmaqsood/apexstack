import type { Metadata } from "next";

import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";

/**
 * No canonical, deliberately.
 *
 * The root layout sets `alternates: { canonical: "/" }`, which every 404
 * inherited — so a noindex page was simultaneously declaring itself to be the
 * homepage. `canonical: null` overrides the inherited value and emits no link
 * tag at all, which is the correct answer for a URL that does not exist. The
 * noindex stays; it is the only directive a 404 should carry.
 */
export const metadata: Metadata = {
  title: "Page not found | ApexStack",
  description: "The page you were looking for does not exist.",
  alternates: { canonical: null },
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  { label: "Services", href: "/services", body: "Everything we build, engineering first." },
  { label: "How We Work", href: "/process", body: "The twelve stages of an engagement." },
  { label: "Industries", href: "/industries", body: "The sectors we build for." },
  { label: "About", href: "/about", body: "Who we are and how we operate." },
  { label: "Careers", href: "/careers", body: "Open roles and how we hire." },
  { label: "Contact", href: "/contact", body: "Start a conversation." },
];

export default function NotFound() {
  return (
    <PageLayout
      eyebrow="404"
      title="That page does not exist"
      intro="The link may be out of date, or the address may have been mistyped."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Not found" }]}
    >
      <Section theme="dark" borderTop={false} borderBottom={false}>
        <Eyebrow className="mb-4">TRY ONE OF THESE</Eyebrow>
        <SectionHeading className="mb-12">Where you might have been going</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group border-t pt-6 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <h2 className="text-white text-base md:text-xl font-medium mb-2 group-hover:text-[#B4CC04] transition-colors">
                {item.label}
              </h2>
              <p className="text-white/50 text-sm md:text-base">{item.body}</p>
            </a>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
