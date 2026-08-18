import Link from "next/link";

import type { Metadata } from "next";

import { LegalBody, type LegalClause } from "@/components/LegalDocument";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import { COMPANY } from "@/data/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy — How We Handle Your Data | ApexStack",
  description:
    "How ApexStack collects, uses, stores and protects personal information submitted through this website and during client engagements.",
  path: "/privacy-policy",
  extra: { robots: { index: true, follow: true } },
});

/**
 * ISO date this policy took effect, or null while it is still unreviewed.
 *
 * The page used to print "Effective date to be confirmed on legal review", which
 * is worse than printing nothing: it tells every reader the policy they are
 * being asked to rely on has not been checked. Nobody can invent the date, so
 * the line is omitted until a real one lands here — set it and both the sentence
 * and its machine-readable <time> appear.
 */
const EFFECTIVE_DATE: string | null = null;

const CLAUSES: LegalClause[] = [
  {
    heading: "Who we are",
    paragraphs: [
      `${COMPANY.brand} is the trading brand of ${COMPANY.legalName}, a ${COMPANY.entityType} registered in ${COMPANY.country}. This policy explains how we handle personal information collected through this website and in the course of our work with clients.`,
      `For any question about this policy or about the information we hold, contact us at ${COMPANY.email}.`,
    ],
    pending:
      "Registered office address and company registration number are to be published here.",
  },
  {
    heading: "What we collect",
    paragraphs: [
      "We collect only what we need in order to respond to you and to deliver work you have asked for.",
    ],
    bullets: [
      "Information you submit through our contact form: name, company, email address, and optionally phone number, country, budget range, timeline and your description of the project.",
      "Information you send us directly by email or during a call.",
      "Basic technical information your browser provides automatically, such as IP address, browser type and the pages you visited.",
      "Where you subscribe to our newsletter, the email address you provide and your subscription status.",
    ],
  },
  {
    heading: "Why we use it",
    bullets: [
      "To respond to your enquiry and to have the follow-up conversation you asked for.",
      "To prepare proposals, scopes and estimates at your request.",
      "To deliver, support and improve services you have engaged us for.",
      "To send you the newsletter, where you have chosen to receive it.",
      "To keep the website secure, reliable and functioning correctly.",
      "To meet legal, accounting and regulatory obligations.",
    ],
  },
  {
    heading: "Legal basis for processing",
    paragraphs: [
      "Where data protection law requires a legal basis, we rely on: your consent, where you have given it; the performance of a contract, where you have engaged us; our legitimate interest in responding to business enquiries and operating our website securely; and compliance with legal obligations.",
      "You may withdraw consent at any time. Doing so does not affect processing carried out before the withdrawal.",
    ],
  },
  {
    heading: "How we share it",
    paragraphs: [
      "We do not sell personal information, and we do not share it for advertising purposes.",
      "We share information only with service providers who process it on our behalf in order to run the business — for example email delivery, customer relationship management, analytics and cloud hosting. These providers act on our instructions and are bound by confidentiality obligations.",
      "We may also disclose information where we are required to by law, or to establish, exercise or defend legal claims.",
    ],
    pending:
      "The specific processors we use will be listed here once the email, CRM and analytics stack is finalised.",
  },
  {
    heading: "International transfers",
    paragraphs: [
      "We work with clients internationally, and some of our service providers operate outside the country in which you are located. Where personal information is transferred across borders, we take steps to ensure it remains protected to an equivalent standard.",
    ],
    pending:
      "Specific transfer mechanisms and safeguards are to be confirmed with legal counsel.",
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep enquiry information for as long as needed to respond and to follow up on a potential engagement, and thereafter for a reasonable period in case you contact us again.",
      "Where you become a client, we retain records for the duration of the engagement and for as long afterwards as legal, tax and accounting obligations require.",
      "Newsletter subscriptions are retained until you unsubscribe.",
    ],
    pending: "Specific retention periods are to be confirmed and stated here.",
  },
  {
    heading: "Your rights",
    paragraphs: [
      "Depending on where you are located, you may have some or all of the following rights in relation to your personal information.",
    ],
    bullets: [
      "Access — to ask what information we hold about you.",
      "Correction — to have inaccurate information corrected.",
      "Deletion — to ask us to delete information, where no legal obligation requires us to keep it.",
      "Restriction — to ask us to limit how we use it.",
      "Portability — to receive a copy in a machine-readable format.",
      "Objection — to object to processing carried out on the basis of legitimate interest.",
      "Withdrawal of consent — at any time, where processing is based on consent.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "This website uses only what is necessary for it to function. Where we introduce analytics or other non-essential cookies, we will describe them here and, where required, ask for your consent before setting them.",
    ],
    pending:
      "A full cookie table will be published once the analytics stack is configured.",
  },
  {
    heading: "Security",
    paragraphs: [
      "We apply appropriate technical and organisational measures to protect personal information, including encryption in transit, access control, and limiting access to those who need it to do their work.",
      "No system is completely secure. If a breach occurs that presents a risk to you, we will notify you and the relevant authority as required by law.",
    ],
  },
  {
    heading: "Client data",
    paragraphs: [
      "Where we process personal data belonging to a client's own users in the course of an engagement, we do so as a processor acting on that client's documented instructions, under a separate data processing agreement.",
      "This policy governs our own collection of information. It does not replace the terms of any client agreement.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "Our services are directed at businesses. We do not knowingly collect personal information from children. If you believe a child has provided information to us, contact us and we will delete it.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      // Previously ended "with its effective date shown above" — there is no
      // effective date on the page and we cannot invent one, so the clause now
      // promises only what the page actually delivers.
      "We may update this policy as our services and obligations change. The version published on this page is always the current one.",
    ],
  },
  {
    heading: "Contact and complaints",
    paragraphs: [
      `To exercise any right, or to raise a concern about how we handle your information, contact ${COMPANY.email}. We will respond as promptly as we can.`,
      "If you are not satisfied with our response, you may have the right to complain to the data protection authority in your jurisdiction.",
    ],
    pending:
      "A named data protection contact and the relevant supervisory authority are to be confirmed.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      eyebrow="LEGAL"
      title="Privacy Policy"
      intro="What we collect, why we collect it, and what you can ask us to do about it."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      path="/privacy-policy"
      pageType="WebPage"
    >
      <Section theme="light" borderTop={false} borderBottom={false} padding="py-16 md:py-20">
        <LegalBody clauses={CLAUSES}>
          <div className="mb-12 pb-8 border-b border-[#08090A]/15">
            {EFFECTIVE_DATE !== null && (
              <p className="text-black/50 text-sm mb-4">
                Effective from{" "}
                <time dateTime={EFFECTIVE_DATE}>
                  {new Intl.DateTimeFormat("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(EFFECTIVE_DATE))}
                </time>
                .
              </p>
            )}
            <p className="text-black/70 text-sm md:text-base leading-relaxed">
              This policy is written to be readable rather than defensive. If anything here is
              unclear, ask us and we will explain it plainly.
            </p>
            <p className="text-black/40 text-sm mt-4">
              This document is provided in good faith and is pending review by qualified legal
              counsel in the relevant jurisdictions.
            </p>
          </div>
        </LegalBody>
      </Section>

      <Section theme="dark">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base md:w-3/4">
            Read alongside our{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            . For anything else, get in touch.
          </p>
          <Link href="/contact" className="shrink-0 inline-flex items-center justify-center px-6 py-3 text-black border bg-[#B4CC04] border-white/30 rounded-[2px] hover:bg-white hover:text-black transition">
            Contact Us
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}
