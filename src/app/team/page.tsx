import Link from "next/link";

import { bookingLinkProps } from "@/data/company";

import type { Metadata } from "next";

import LeadershipCard from "@/components/LeadershipCard";
import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import { FOUNDER_REFS, FOUNDERS } from "@/data/schema";
import { DISCIPLINES, LEADERSHIP } from "@/data/team";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Our Team & Leadership — Meet the Founders | ApexStack",
  description:
    "Meet the three co-founders leading ApexStack across company strategy, technical architecture and product — and the engineers who own your build end to end.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <PageLayout
      eyebrow="TEAM"
      title="The people accountable for your build"
      intro="You work with the engineers making the technical decisions. There is no account manager between you and them."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
      path="/team"
      // The founders' `Person` nodes belong on the page that shows them. They
      // used to be emitted on the homepage, which has no team section at all,
      // and their `@id` fragments pointed at anchors this page never defined.
      pageType="ProfilePage"
      mainEntity={FOUNDER_REFS}
      extraSchema={FOUNDERS}
    >
      <Section theme="dark" borderTop={false}>
        <Eyebrow className="mb-4">LEADERSHIP</Eyebrow>
        <SectionHeading className="mb-4">Three co-founders, one accountable team</SectionHeading>
        <p className="text-white/50 text-sm md:text-base mb-12 max-w-2xl">
          ApexStack is led by its three co-founders across company direction, technical architecture
          and product. Each is a working role rather than a title on an org chart.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/*
            The `id` makes `/team#leadership-01` a real anchor, so the `@id` on
            each Person node resolves to the element that shows that person.
            It sits on a wrapper rather than the card because `LeadershipCard`
            is shared, and the wrapper becomes the grid item unchanged.
          */}
          {LEADERSHIP.map((member) => (
            <div key={member.id} id={member.id} className="scroll-mt-24">
              <LeadershipCard member={member} />
            </div>
          ))}
        </div>
      </Section>

      <Section theme="light">
        <Eyebrow theme="light" className="mb-4">
          HOW THE TEAM IS ORGANISED
        </Eyebrow>
        <SectionHeading theme="light" className="mb-4">
          Six disciplines, not six silos
        </SectionHeading>
        <p className="text-black/60 text-sm md:text-base mb-12 max-w-2xl">
          People work across these rather than being handed a project and passing it on. It is
          the reason nobody hands your problem to somebody else halfway through.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DISCIPLINES.map((discipline) => (
            <div key={discipline.name} className="border-t border-[#08090A]/20 pt-6">
              <h3 className="text-black text-base md:text-xl font-medium mb-2">
                {discipline.name}
              </h3>
              <p className="text-black/70 text-sm md:text-base">{discipline.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section theme="dark" borderBottom={false}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="md:w-3/4">
            <SectionHeading className="mb-4">We are hiring</SectionHeading>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base max-w-2xl">
              Engineers, designers and product people who want ownership from architecture
              through to production. See{" "}
              <Link
                href="/careers"
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                open roles and how we hire
              </Link>
              .
            </p>
          </div>
          <div className="shrink-0">
            <Link
              {...bookingLinkProps()}
              className="inline-flex items-center justify-center px-6 py-3 text-black border bg-[#B4CC04] border-white/30 rounded-[2px] hover:bg-white hover:text-black transition"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
