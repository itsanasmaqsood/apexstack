import Link from "next/link";

import type { Metadata } from "next";

import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import { bookingLinkProps, COMPANY } from "@/data/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About ApexStack — Engineering Partners, Not Just Developers",
  description:
    "We start with the business problem, keep architecture through to production in one team, and build software designed to be handed over — then support it.",
  path: "/about",
});

const PRINCIPLES = [
  {
    title: "The problem comes before the solution",
    body: "Plenty of software gets built exactly to specification and still fails, because the specification was wrong. We spend real time on the problem before proposing anything technical.",
  },
  {
    title: "One team, end to end",
    body: "Architecture, design, engineering and infrastructure sit together. The people who designed the system are the people who run it on launch day.",
  },
  {
    title: "Technology should reduce complexity",
    body: "Every added service, framework and dependency is a cost someone pays later. We choose the boring option unless there is a reason not to.",
  },
  {
    title: "Built to be handed over",
    body: "Documented architecture, tested code, infrastructure as code. You should be able to take any project in-house whenever you decide to.",
  },
  {
    title: "Say the difficult thing early",
    body: "If scope is wrong, if a deadline will not hold, if the answer is that you should not build this at all — you hear it from us while it is still cheap.",
  },
  {
    title: "Launch is the middle, not the end",
    body: "Most of what determines the true cost of software happens after it ships. We stay through that period.",
  },
];

const WHAT_WE_DO = [
  {
    heading: "Engineering",
    body: "Custom software, enterprise systems, SaaS platforms, AI products and agents, web and mobile applications, cloud infrastructure, DevOps, APIs and automation.",
    href: "/services#core-engineering",
    linkLabel: "See engineering services",
  },
  {
    heading: "Design & Brand",
    body: "Product design, brand identity, graphic and social design, motion, video and 3D — supporting the engineering rather than competing with it.",
    href: "/services#creative-services",
    linkLabel: "See design services",
  },
  {
    heading: "Consulting",
    body: "Architecture review, technology selection, technical due diligence and a second opinion when a decision is expensive to reverse.",
    // The dedicated service page rather than the anchor on /services: it exists,
    // it is one of the pages with no footer link, and this is its best inbound anchor.
    href: "/services/technical-consulting",
    linkLabel: "See consulting",
  },
];

export default function AboutPage() {
  return (
    <PageLayout
      eyebrow="ABOUT"
      title="We are engineering partners, not a development vendor"
      intro="Companies work with us because we solve business problems. Building the software is how we do it, not what we sell."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      path="/about"
      pageType="AboutPage"
    >
      {/* ----------------------------------------------------------- who we are */}
      <Section theme="dark" borderTop={false}>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-[35%]">
            <Eyebrow>WHO WE ARE</Eyebrow>
          </div>
          <div className="md:w-[65%] space-y-5">
            <p className="text-white text-base md:text-[20px] leading-relaxed">
              ApexStack is a digital product engineering company. We design, build, deploy and
              support the software businesses run on — and we take responsibility for the whole
              system rather than one slice of it.
            </p>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
              Most companies assembling a product end up managing seams: an agency for the
              build, a studio for the design, a contractor for infrastructure, and an internal
              team trying to hold the three together. Every seam is a place where
              accountability gets lost. We removed the seams by keeping architecture, design,
              engineering and operations inside one team.
            </p>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
              We work with startups building a first product, scale-ups whose early system is
              buckling under growth, and established businesses replacing software that has
              outlived its architecture. What they have in common is that software is core to
              how the business operates — not a side project.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------- mission &amp; vision */}
      <Section theme="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Eyebrow theme="light" className="mb-4">
              MISSION
            </Eyebrow>
            <SectionHeading theme="light" className="mb-4">
              Turn business problems into systems that hold
            </SectionHeading>
            <p className="text-black/70 text-sm md:text-base">
              To give businesses software that solves the actual problem, scales with them, and
              can be maintained by their own people. Not a delivery, but a capability they keep.
            </p>
          </div>
          <div>
            <Eyebrow theme="light" className="mb-4">
              VISION
            </Eyebrow>
            <SectionHeading theme="light" className="mb-4">
              Make serious engineering accessible to more than the largest companies
            </SectionHeading>
            <p className="text-black/70 text-sm md:text-base">
              Rigorous architecture, real testing, proper infrastructure and honest advice
              should not be reserved for organisations with hundreds of engineers on staff.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------- principles */}
      <Section theme="dark">
        <Eyebrow className="mb-4">OUR PHILOSOPHY</Eyebrow>
        <SectionHeading className="mb-4">Six things we hold to</SectionHeading>
        <p className="text-white/50 text-sm md:text-base mb-12 max-w-2xl">
          These are operating rules, not values on a wall. They decide what we do when a
          project gets difficult.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {PRINCIPLES.map((principle, index) => (
            <div key={principle.title}>
              <span className="text-[#B4CC04] text-sm font-medium">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white text-base md:text-xl font-medium mt-3 mb-2">
                {principle.title}
              </h3>
              <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-snug md:leading-6">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ----------------------------------------------------------- what we do */}
      <Section theme="light">
        <Eyebrow theme="light" className="mb-4">
          WHAT WE DO
        </Eyebrow>
        <SectionHeading theme="light" className="mb-12">
          Three capabilities, one accountable team
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHAT_WE_DO.map((item) => (
            <div key={item.heading} className="border-t border-[#08090A]/20 pt-6">
              <h3 className="text-black text-base md:text-xl font-medium mb-3">
                {item.heading}
              </h3>
              <p className="text-black/70 text-sm md:text-base mb-4">{item.body}</p>
              <a
                href={item.href}
                className="text-black text-sm underline underline-offset-4 hover:text-black/60 transition-colors"
              >
                {item.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------ global delivery */}
      <Section theme="dark">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-[35%]">
            <Eyebrow>GLOBAL DELIVERY</Eyebrow>
          </div>
          <div className="md:w-[65%] space-y-5">
            <SectionHeading>Remote by design, not by circumstance</SectionHeading>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
              We work with clients internationally and structure every engagement around a
              guaranteed overlap window with your team. Asynchronous communication carries the
              rest, with decisions written down so nothing depends on who happened to be awake
              for a call.
            </p>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
              Our products run on the web, in the App Store and on Google Play, and in
              enterprise cloud environments.
            </p>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------- team &amp; timeline stubs */}
      <Section theme="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Eyebrow theme="light" className="mb-4">
              THE TEAM
            </Eyebrow>
            <SectionHeading theme="light" className="mb-4">
              A named team, not a rotating bench
            </SectionHeading>
            <p className="text-black/70 text-sm md:text-base mb-4">
              You work with the people who make the technical decisions. There is no account
              manager between you and the engineers building your system.
            </p>
            {/* This block used to say profiles were "being published shortly" while
                /team has shipped three named founders with photographs since — a
                contradiction a visitor could see, and /team's natural parent page
                gave it no contextual inlink. */}
            <Link href="/team" className="inline-block text-black text-sm underline underline-offset-4 hover:text-black/60 transition-colors">
              Meet the founding engineering team
            </Link>
            <Link href="/careers" className="block mt-3 text-black/60 text-sm underline underline-offset-4 hover:text-black transition-colors">
              We are hiring — see open roles
            </Link>
          </div>
          <div>
            <Eyebrow theme="light" className="mb-4">
              COMPANY
            </Eyebrow>
            <SectionHeading theme="light" className="mb-4">
              Registered and operating
            </SectionHeading>
            <dl className="space-y-3">
              <div className="flex justify-between gap-4 border-b border-[#08090A]/10 pb-3">
                <dt className="text-black/50 text-sm">Brand</dt>
                <dd className="text-black text-sm text-right">{COMPANY.brand}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#08090A]/10 pb-3">
                <dt className="text-black/50 text-sm">Legal entity</dt>
                <dd className="text-black text-sm text-right">{COMPANY.legalName}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#08090A]/10 pb-3">
                <dt className="text-black/50 text-sm">Entity type</dt>
                <dd className="text-black text-sm text-right">{COMPANY.entityType}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#08090A]/10 pb-3">
                <dt className="text-black/50 text-sm">Country</dt>
                <dd className="text-black text-sm text-right">{COMPANY.country}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-black/50 text-sm">Status</dt>
                <dd className="text-black text-sm text-right">{COMPANY.status}</dd>
              </div>
            </dl>
            {/* TODO: company timeline / milestones once founding year is confirmed. */}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ cta */}
      <Section theme="dark" borderBottom={false}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="md:w-3/4">
            <SectionHeading className="mb-4">
              Have a problem worth solving properly?
            </SectionHeading>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base max-w-2xl">
              Bring the problem rather than a solution. If we can help, we will tell you what a
              first phase looks like. If we cannot, we will tell you that too.
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
