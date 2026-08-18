import Link from "next/link";

import { bookingLinkProps } from "@/data/company";

import type { Metadata } from "next";

import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "How We Work — Our Software Development Process | ApexStack",
  description:
    "The twelve stages of an ApexStack engagement — discovery, architecture, design, engineering, testing, deployment, monitoring and support — and what you get at each.",
  path: "/process",
});

interface Stage {
  number: string;
  name: string;
  purpose: string;
  deliverables: string[];
}

interface Phase {
  id: string;
  label: string;
  heading: string;
  intro: string;
  stages: Stage[];
}

const PHASES: Phase[] = [
  {
    id: "discovery",
    label: "PHASE 01",
    heading: "Discovery & Problem Definition",
    intro:
      "Before anyone writes code, we work out what the business actually needs. Most failed software solves the wrong problem correctly.",
    stages: [
      {
        number: "01",
        name: "Discovery",
        purpose:
          "Understand the business problem in full — who has it, what it costs today, and what changes if it is solved.",
        deliverables: [
          "Stakeholder and end-user interviews",
          "Problem statement agreed in writing",
          "Success criteria defined as measurable outcomes",
          "Constraints surfaced: compliance, budget, deadline, existing systems",
        ],
      },
      {
        number: "02",
        name: "Research & Audit",
        purpose:
          "Examine what already exists, because almost nothing is built on empty ground.",
        deliverables: [
          "Audit of current systems, data and integrations",
          "Technical risk register",
          "Competitive and comparable-product review where relevant",
          "Written scope with assumptions you are free to challenge",
        ],
      },
    ],
  },
  {
    id: "architecture",
    label: "PHASE 02",
    heading: "Architecture & Planning",
    intro:
      "The decisions made here determine what the system costs to run and how far it scales. Each one is documented with its reasoning attached.",
    stages: [
      {
        number: "03",
        name: "Architecture",
        purpose:
          "Choose the shape of the system against your constraints, not our preferences.",
        deliverables: [
          "Technology selection with trade-offs made explicit",
          "Data model and information flow",
          "Security model: authentication, authorisation, data handling",
          "Infrastructure sizing for expected and hoped-for load",
        ],
      },
      {
        number: "04",
        name: "Planning",
        purpose:
          "Turn the architecture into a sequence of work with visible checkpoints.",
        deliverables: [
          "Delivery plan with milestones and dependencies",
          "Build-versus-buy decisions recorded",
          "Team composition and named technical lead",
          "Reporting cadence and communication channels agreed",
        ],
      },
    ],
  },
  {
    id: "design",
    label: "PHASE 03",
    heading: "Product & Experience Design",
    intro:
      "Interface design is the cheapest place to discover a problem. We resolve the hard flows on screen while changing them still costs hours instead of weeks.",
    stages: [
      {
        number: "05",
        name: "Design",
        purpose:
          "Design the product before building it, including everything that goes wrong.",
        deliverables: [
          "User journeys mapped end to end",
          "Wireframes for the genuinely complex flows",
          "High-fidelity interface design, including empty, error and permission states",
          "Component library engineering can build directly from",
        ],
      },
    ],
  },
  {
    id: "engineering",
    label: "PHASE 04",
    heading: "Engineering & Delivery",
    intro:
      "Short cycles, running software and an open channel to the engineers building it. You should never have to ask how the project is going.",
    stages: [
      {
        number: "06",
        name: "Engineering",
        purpose: "Build in increments that each end in something you can actually use.",
        deliverables: [
          "Working software at the end of every cycle",
          "Code review on every change before it merges",
          "Shared channel with the engineers doing the work",
          "Documentation written alongside the build",
        ],
      },
      {
        number: "07",
        name: "Testing & Quality Assurance",
        purpose:
          "Verify behaviour the business depends on, continuously rather than at the end.",
        deliverables: [
          "Automated test suite covering critical paths",
          "Continuous integration verifying every change",
          "Accessibility and performance checks",
          "Open defect list, triaged in the open",
        ],
      },
    ],
  },
  {
    id: "deployment",
    label: "PHASE 05",
    heading: "Deployment, Scale & Support",
    intro:
      "Software that ships and then degrades has not been delivered. Launch is the middle of the engagement.",
    stages: [
      {
        number: "08",
        name: "Deployment",
        purpose: "Make releasing routine rather than an event.",
        deliverables: [
          "Automated deployment pipeline",
          "Staging environment matching production",
          "Data migration with a rehearsed rollback path",
          "Release checklist and go-live plan",
        ],
      },
      {
        number: "09",
        name: "Monitoring",
        purpose: "Know what the system is doing before your users tell you.",
        deliverables: [
          "Monitoring, logging and alerting your team can act on",
          "Error tracking and performance dashboards",
          "Uptime and incident alerting",
          "Runbook for common failure modes",
        ],
      },
      {
        number: "10",
        name: "Maintenance",
        purpose: "Keep the system healthy as its dependencies and context change.",
        deliverables: [
          "Dependency and security patching",
          "Regular architecture and cost review",
          "Technical debt tracked and scheduled deliberately",
          "Incident response and post-incident review",
        ],
      },
      {
        number: "11",
        name: "Scaling",
        purpose: "Grow capacity ahead of demand rather than in reaction to an outage.",
        deliverables: [
          "Load testing against realistic peaks",
          "Capacity planning and cost modelling",
          "Performance optimisation informed by production data",
          "Infrastructure right-sizing",
        ],
      },
      {
        number: "12",
        name: "Support & Handover",
        purpose:
          "Leave you able to run it — whether we stay on or not.",
        deliverables: [
          "Full handover of code, infrastructure and documentation",
          "Team training and knowledge transfer",
          "Ongoing support retainer, if you want one",
          "A clean exit path if you would rather take it in-house",
        ],
      },
    ],
  },
];

export default function ProcessPage() {
  return (
    <PageLayout
      eyebrow="HOW WE WORK"
      title="Twelve stages. No surprises."
      intro="The same process on every engagement, whether it is a first MVP or a twelve-year-old system that needs replacing."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "How We Work" }]}
      path="/process"
      pageType="WebPage"
    >
      <Section theme="dark" borderTop={false}>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-[35%]">
            <Eyebrow>WHY WE PUBLISH THIS</Eyebrow>
          </div>
          <div className="md:w-[65%] space-y-5">
            <p className="text-white text-base md:text-[20px] leading-relaxed">
              Most software companies describe their process as &ldquo;agile&rdquo; and stop
              there. That tells a buyer nothing about what they will actually receive.
            </p>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
              So here is the whole thing — twelve stages across five phases, with the concrete
              deliverables at each one. If something below does not match what you need, say so
              during discovery and we will adapt it. What we will not do is skip a stage and
              discover the consequence in production.
            </p>
          </div>
        </div>
      </Section>

      {PHASES.map((phase, index) => {
        const isLight = index % 2 === 1;
        const theme = isLight ? "light" : "dark";
        return (
          <Section key={phase.id} theme={theme} id={phase.id}>
            <div className="mb-12">
              <Eyebrow theme={theme} className="mb-4">
                {phase.label}
              </Eyebrow>
              <SectionHeading theme={theme} className="mb-4">
                {phase.heading}
              </SectionHeading>
              <p
                className={`text-sm md:text-base max-w-2xl ${
                  isLight ? "text-black/60" : "text-white/50"
                }`}
              >
                {phase.intro}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {phase.stages.map((stage) => (
                <div
                  key={stage.number}
                  className="border-t pt-6"
                  style={{
                    borderColor: isLight ? "rgba(8,9,10,0.2)" : "rgba(255,255,255,0.2)",
                  }}
                >
                  <span className="text-[#B4CC04] text-sm font-medium">{stage.number}</span>
                  <h3
                    className={`text-base md:text-xl font-medium mt-2 mb-2 ${
                      isLight ? "text-black" : "text-white"
                    }`}
                  >
                    {stage.name}
                  </h3>
                  <p
                    className={`text-sm md:text-base mb-5 ${
                      isLight ? "text-black/70" : "text-white/50"
                    }`}
                  >
                    {stage.purpose}
                  </p>
                  <span
                    className={`text-xs uppercase tracking-[1.5px] block mb-3 ${
                      isLight ? "text-black/40" : "text-white/40"
                    }`}
                  >
                    You receive
                  </span>
                  <ul className="space-y-2">
                    {stage.deliverables.map((item) => (
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
              ))}
            </div>
          </Section>
        );
      })}

      <Section theme="dark" borderBottom={false}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="md:w-3/4">
            <SectionHeading className="mb-4">Start at stage one</SectionHeading>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base max-w-2xl">
              Every engagement begins with discovery, and discovery begins with a
              conversation. See the{" "}
              <Link href="/services" className="underline underline-offset-4 hover:text-white transition-colors">
                services this process delivers
              </Link>{" "}
              or tell us what is not working.
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
