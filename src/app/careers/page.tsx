import type { Metadata } from "next";

import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import { COMPANY } from "@/data/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Careers at ApexStack — Engineering Roles & Internships",
  description:
    "Work on systems that carry real load, with ownership from architecture through to production. Open roles, how we hire, and what working here is actually like.",
  path: "/careers",
});

const LIFE = [
  {
    title: "You own things end to end",
    body: "Engineers here take a problem from architecture to production and stay with it afterwards. Nobody hands their work to a separate operations team and walks away.",
  },
  {
    title: "Small teams, real decisions",
    body: "You will be in the room where the technical call gets made, and expected to argue for the right answer — including when it is not the one anybody wants.",
  },
  {
    title: "Remote, with genuine overlap",
    body: "We are remote by design, structured around real overlap hours rather than expecting anyone to be permanently available.",
  },
  {
    title: "Written by default",
    body: "Decisions are documented with their reasoning. It makes async work possible, and it means nobody has to be in a meeting to know why something was decided.",
  },
];

const BENEFITS = [
  { title: "Remote-first", body: "Work from wherever you are effective." },
  { title: "Real ownership", body: "Your name is on the architecture, not just the ticket." },
  { title: "Learning budget", body: "TODO: confirm annual allowance and what it covers." },
  { title: "Time off", body: "TODO: confirm leave policy." },
  { title: "Equipment", body: "TODO: confirm hardware and home-office provision." },
  { title: "Health cover", body: "TODO: confirm health and insurance benefits." },
];

const HIRING_STEPS = [
  {
    step: "01",
    title: "Application",
    body: "Send your CV or profile and a short note on something you have built. We read every one.",
  },
  {
    step: "02",
    title: "Intro conversation",
    body: "30 minutes with an engineer. What you have worked on, what you want next, and what we are actually like.",
  },
  {
    step: "03",
    title: "Technical conversation",
    body: "A discussion of real problems rather than algorithm puzzles — architecture, trade-offs, and how you reason when the answer is unclear.",
  },
  {
    step: "04",
    title: "Practical exercise",
    body: "A short, paid, realistic task. We do not ask for unpaid work or multi-day take-homes.",
  },
  {
    step: "05",
    title: "Offer",
    body: "Feedback either way, usually within a week of the final conversation.",
  },
];

export default function CareersPage() {
  return (
    <PageLayout
      eyebrow="CAREERS"
      title="Build systems people actually depend on"
      intro="Small teams, real ownership, and work that ships to production rather than to a demo."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      path="/careers"
      pageType="CollectionPage"
    >
      {/* ------------------------------------------------------------ life here */}
      <Section theme="dark" borderTop={false}>
        <Eyebrow className="mb-4">LIFE AT APEXSTACK</Eyebrow>
        <SectionHeading className="mb-4">What working here is like</SectionHeading>
        <p className="text-white/50 text-sm md:text-base mb-12 max-w-2xl">
          Written plainly, so you can tell early whether it suits you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {LIFE.map((item, index) => (
            <div key={item.title}>
              <span className="text-[#B4CC04] text-sm font-medium">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white text-base md:text-xl font-medium mt-3 mb-2">
                {item.title}
              </h3>
              <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-snug md:leading-6">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------------- open roles */}
      <Section theme="light">
        <Eyebrow theme="light" className="mb-4">
          OPEN POSITIONS
        </Eyebrow>
        <SectionHeading theme="light" className="mb-4">
          Roles we are hiring for
        </SectionHeading>
        {/* TODO: replace with real vacancies — title, discipline, location,
            employment type, seniority, and a JobPosting schema block per role. */}
        <div className="border border-[#08090A4D] bg-[#F5F5F5] rounded-[2px] p-8 md:p-10 mt-8">
          <h3 className="text-black text-base md:text-xl font-medium mb-3">
            No positions are posted right now
          </h3>
          <p className="text-black/70 text-sm md:text-base mb-6 max-w-2xl">
            We hire continuously rather than in bursts, and we would still like to hear from
            strong engineers, designers and product people. Send us something you have built
            and why it was hard — that tells us more than a CV does.
          </p>
          <a
            href={`mailto:${COMPANY.email}?subject=Speculative%20application`}
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-[2px] text-sm md:text-base hover:bg-black/80 transition-colors"
          >
            Send a speculative application
          </a>
        </div>
      </Section>

      {/* ---------------------------------------------------------- benefits */}
      <Section theme="dark">
        <Eyebrow className="mb-4">BENEFITS</Eyebrow>
        <SectionHeading className="mb-12">What we offer</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => {
            const pending = benefit.body.startsWith("TODO:");
            return (
              <div
                key={benefit.title}
                className="border-t pt-6"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                <h3 className="text-white text-base md:text-xl font-medium mb-2">
                  {benefit.title}
                </h3>
                {pending ? (
                  <p className="text-white/30 text-sm italic">Details being finalised</p>
                ) : (
                  <p className="text-white/50 text-sm md:text-base">{benefit.body}</p>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* ----------------------------------------------------- hiring process */}
      <Section theme="light">
        <Eyebrow theme="light" className="mb-4">
          HIRING PROCESS
        </Eyebrow>
        <SectionHeading theme="light" className="mb-4">
          Five steps, no surprises
        </SectionHeading>
        <p className="text-black/60 text-sm md:text-base mb-12 max-w-2xl">
          The same principle as our client work: you should know what you are signing up for.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {HIRING_STEPS.map((item) => (
            <div key={item.step} className="border-t border-[#08090A]/20 pt-6">
              <span className="text-[#B4CC04] text-sm font-medium">{item.step}</span>
              <h3 className="text-black text-base font-medium mt-2 mb-2">{item.title}</h3>
              <p className="text-black/60 text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------------- internships */}
      <Section theme="dark" borderBottom={false}>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-[50%]">
            <Eyebrow className="mb-4">INTERNSHIPS</Eyebrow>
            <SectionHeading className="mb-4">Early-career programme</SectionHeading>
            {/* TODO: confirm internship duration, stipend, intake dates and eligibility. */}
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base mb-6">
              We take a small number of interns and give them real work on real systems, with a
              named engineer responsible for their development. Programme details are being
              finalised.
            </p>
            <a
              href={`mailto:${COMPANY.email}?subject=Internship%20enquiry`}
              className="text-[#B4CC04] hover:text-[#D4F005] text-sm md:text-base underline underline-offset-4 transition-colors"
            >
              Register your interest
            </a>
          </div>
          <div className="md:w-[50%]">
            <Eyebrow className="mb-4">APPLYING</Eyebrow>
            <SectionHeading className="mb-4">How to reach us</SectionHeading>
            <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base mb-6">
              {/* TODO: replace with an applicant tracking system when one is in place. */}
              Applications are handled by email while we set up a proper applicant tracking
              system. Include a CV or profile, links to anything you have built, and a note on
              what you are looking for.
            </p>
            <a
              href={`mailto:${COMPANY.email}?subject=Application`}
              className="text-[#B4CC04] hover:text-[#D4F005] text-sm md:text-base break-all underline underline-offset-4 transition-colors"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
