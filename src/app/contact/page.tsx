import Link from "next/link";

import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import PageLayout from "@/components/PageLayout";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import { COMPANY, isTodo } from "@/data/company";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact ApexStack — Book a Discovery Call",
  description:
    "Talk to the engineers who would build your product. Tell us the business problem and we will tell you what it would take — reply within 24 hours.",
  path: "/contact",
});

const ENQUIRY_TYPES = [
  {
    title: "New project",
    body: "You have a business problem and want to know whether software is the answer, what it would take, and what it would cost.",
    routing: "Goes straight to an engineer, not a sales queue.",
  },
  {
    title: "Business & partnerships",
    body: "Enterprise engagements, dedicated teams, long-running retainers, vendor onboarding and procurement questions.",
    routing: "Handled by the team who would run the engagement.",
  },
  {
    title: "General enquiry",
    body: "Careers, press, supplier questions, or anything that does not fit the other two.",
    routing: "Reviewed daily and forwarded to the right person.",
  },
];

const WHAT_HAPPENS = [
  {
    step: "01",
    title: "We read it properly",
    body: "Every enquiry is read by someone technical. You will not get an automated qualification sequence.",
  },
  {
    step: "02",
    title: "We reply within 24 hours",
    body: "Either with questions, a suggested call, or an honest note that we are not the right fit for this one.",
  },
  {
    step: "03",
    title: "Discovery call",
    body: "45 minutes. You describe the problem; we ask about users, constraints and the systems already in place.",
  },
  {
    step: "04",
    title: "A written next step",
    body: "What a first phase would look like, what it would deliver, and what it would take. Yours to keep either way.",
  },
];

const CONTACT_FAQS = [
  {
    q: "What should I have ready before the call?",
    a: "Nothing formal. The problem in your own words is enough. If you already know your deadline, budget range, compliance requirements or the systems it must integrate with, bring those — they shape the answer more than a feature list does.",
  },
  {
    q: "Do I need a specification?",
    a: "No, and often it is better that you do not. A specification written before any user research usually encodes assumptions that turn out to be wrong. Discovery exists to turn the problem into a scope worth building.",
  },
  {
    q: "Will I be speaking to a salesperson?",
    a: "No. The first call is with someone who would actually work on the project. We do not put an account manager between you and the people making technical decisions.",
  },
  {
    q: "What if you are not the right fit?",
    a: "We will say so on the first call, and where we can we will point you toward someone better suited. A bad-fit engagement costs us more than it earns.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes, before any detailed discussion of your product or data. Send yours across or ask us for one.",
  },
];

/**
 * FAQPage for the five questions rendered further down this page.
 *
 * It is built from CONTACT_FAQS rather than written out again, so the schema
 * cannot drift from the visible copy — declaring an answer that is not in the
 * DOM is the one thing that gets FAQ markup penalised. The BreadcrumbList and
 * ContactPage graph comes from PageLayout, which takes no extra nodes, so this
 * ships as a sibling script rather than an addition to that @graph.
 */
function ContactFaqSchema() {
  const graph = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/contact#faq`,
    isPartOf: { "@id": `${SITE_URL}/contact` },
    mainEntity: CONTACT_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  const pending = isTodo(value);
  return (
    <div className="flex flex-col gap-1 py-4 border-b border-white/10 last:border-b-0">
      <span className="text-xs uppercase tracking-[1.5px] text-white/40">{label}</span>
      {pending ? (
        <span className="text-white/35 text-sm md:text-base italic">To be published</span>
      ) : (
        <span className="text-white text-sm md:text-base">{value}</span>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageLayout
      eyebrow="CONTACT"
      title="Tell us the problem. We will tell you what it takes."
      intro="No obligation, no pitch deck. A conversation with the people who would build it."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      path="/contact"
      pageType="ContactPage"
    >
      <ContactFaqSchema />

      {/* ---------------------------------------------------------------- form */}
      <Section theme="dark" borderTop={false}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-[60%]">
            <Eyebrow className="mb-4">START HERE</Eyebrow>
            <SectionHeading className="mb-4">Send us an enquiry</SectionHeading>
            <p className="text-white/50 text-sm md:text-base mb-10 max-w-xl">
              The more you can tell us about the business problem, the more useful our first
              reply will be. Fields marked with an asterisk are required.
            </p>
            <ContactForm />
          </div>

          <aside className="lg:w-[40%]">
            <div className="border border-white/15 rounded-[2px] p-6 md:p-8">
              <h2 className="text-white text-base md:text-xl font-medium mb-2">
                Prefer email?
              </h2>
              <p className="text-white/50 text-sm mb-6">
                Write to us directly and we will pick it up the same way.
              </p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-[#B4CC04] hover:text-[#D4F005] text-sm md:text-base break-all underline underline-offset-4 transition-colors"
              >
                {COMPANY.email}
              </a>

              <div className="mt-8">
                <DetailRow label="Phone" value={COMPANY.phone} />
                <DetailRow label="Office" value={COMPANY.addressLine1} />
                <DetailRow label="Book a call" value={COMPANY.calendlyUrl} />
                <DetailRow label="WhatsApp" value={COMPANY.whatsappUrl} />
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs uppercase tracking-[1.5px] text-white/40 block mb-3">
                  Business hours
                </span>
                {COMPANY.businessHours.map((slot) => (
                  <div
                    key={slot.days}
                    className="flex items-baseline justify-between gap-4 py-1"
                  >
                    <span className="text-white/70 text-sm">{slot.days}</span>
                    <span className="text-sm text-right text-white/35 italic">
                      {isTodo(slot.hours) ? "To be published" : slot.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder — keeps the slot and its proportions without
                embedding a third-party frame we cannot yet point anywhere. */}
            <div className="mt-6 border border-white/15 rounded-[2px] overflow-hidden">
              <div className="aspect-video bg-white/[0.03] flex flex-col items-center justify-center text-center px-6">
                <span className="text-white/40 text-sm">Office location map</span>
                <span className="text-white/25 text-xs mt-1">
                  Added once the registered address is published
                </span>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* ------------------------------------------------------- enquiry types */}
      <Section theme="light">
        <Eyebrow theme="light" className="mb-4">
          WHERE YOUR MESSAGE GOES
        </Eyebrow>
        <SectionHeading theme="light" className="mb-12">
          Three kinds of enquiry
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ENQUIRY_TYPES.map((type) => (
            <div key={type.title} className="border-t border-[#08090A]/20 pt-6">
              <h3 className="text-black text-base md:text-xl font-medium mb-3">
                {type.title}
              </h3>
              <p className="text-black/70 text-sm md:text-base mb-4">{type.body}</p>
              <p className="text-black/45 text-sm">{type.routing}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------ what happens next */}
      <Section theme="dark">
        <Eyebrow className="mb-4">WHAT HAPPENS NEXT</Eyebrow>
        <SectionHeading className="mb-4">
          From enquiry to a written next step
        </SectionHeading>
        <p className="text-white/50 text-sm md:text-base mb-12 max-w-2xl">
          You should know exactly what you are signing up for when you press send.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHAT_HAPPENS.map((item) => (
            <div key={item.step}>
              <span className="text-[#B4CC04] text-sm font-medium">{item.step}</span>
              <h3 className="text-white text-base md:text-xl font-medium mt-3 mb-2">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm md:text-base">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------------------- faqs */}
      <Section theme="light" borderBottom={false}>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-[35%]">
            <Eyebrow theme="light" className="mb-4">
              BEFORE YOU WRITE
            </Eyebrow>
            <SectionHeading theme="light">Common questions</SectionHeading>
            <p className="text-black/60 text-sm md:text-base mt-4">
              More on how we work in the{" "}
              <Link href="/process" className="underline underline-offset-4 hover:text-black">
                delivery process
              </Link>{" "}
              and the{" "}
              <Link href="/#faq" className="underline underline-offset-4 hover:text-black">
                full FAQ
              </Link>
              .
            </p>
          </div>
          <div className="md:w-[65%] space-y-4">
            {CONTACT_FAQS.map((faq) => (
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
    </PageLayout>
  );
}
