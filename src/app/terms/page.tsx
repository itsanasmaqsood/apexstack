import Link from "next/link";

import type { Metadata } from "next";

import { LegalBody, type LegalClause } from "@/components/LegalDocument";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import { COMPANY } from "@/data/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions | ApexStack",
  description:
    "The terms governing use of the ApexStack website and the basis on which we engage with clients, including scope, intellectual property and liability.",
  path: "/terms",
  extra: { robots: { index: true, follow: true } },
});

/**
 * ISO date these terms took effect, or null while they are still unreviewed.
 * Same reasoning as the privacy policy: an admission that the document is
 * unreviewed is worse than no date at all, and the date is not ours to invent.
 */
const EFFECTIVE_DATE: string | null = null;

const CLAUSES: LegalClause[] = [
  {
    heading: "About these terms",
    paragraphs: [
      `These terms govern your use of this website, operated by ${COMPANY.legalName}, a ${COMPANY.entityType} registered in ${COMPANY.country} and trading as ${COMPANY.brand}.`,
      "By using this website you accept these terms. If you do not accept them, please do not use the site.",
    ],
    pending:
      "Registered office address and company registration number are to be published here.",
  },
  {
    heading: "These terms are not a client agreement",
    paragraphs: [
      "Nothing on this website constitutes an offer capable of acceptance, a quotation, or a commitment to provide services.",
      "Client engagements are governed by a separate written agreement covering scope, deliverables, timelines, fees, payment terms, intellectual property, confidentiality, warranties and liability. Where that agreement conflicts with these terms, that agreement takes precedence.",
    ],
  },
  {
    heading: "Use of this website",
    bullets: [
      "You may use this website for lawful purposes connected with evaluating or engaging our services.",
      "You must not attempt to gain unauthorised access to any part of the site, its servers or connected systems.",
      "You must not use the site in a way that damages it, impairs its availability, or interferes with another user's access.",
      "You must not use automated systems to extract content from the site in a manner that places unreasonable load on our infrastructure.",
      "You must not submit anything unlawful, misleading, malicious, or infringing another party's rights.",
    ],
  },
  {
    heading: "Enquiries submitted to us",
    paragraphs: [
      "When you submit an enquiry, you confirm that the information you provide is accurate and that you are entitled to share it.",
      "We treat enquiry content as confidential and use it only to respond and to prepare any proposal you have asked for. Sharing information with us before a written agreement is in place does not by itself create a confidentiality obligation beyond that — if you need formal protection before a detailed discussion, ask us for a non-disclosure agreement and we will put one in place.",
    ],
  },
  {
    heading: "Intellectual property in this website",
    paragraphs: [
      `All content on this website — including text, layout, design, graphics and code — is owned by or licensed to ${COMPANY.legalName} and is protected by intellectual property law.`,
      "You may view and print pages for your own internal evaluation. You may not reproduce, republish, sell or exploit any part of the site commercially without our written permission.",
      "Third-party names, logos and trade marks appearing on this site remain the property of their respective owners.",
    ],
  },
  {
    heading: "Intellectual property in client work",
    paragraphs: [
      "For client engagements, ownership of deliverables is set out in the applicable client agreement. Our standard position is that on full payment, the client owns the code, designs and documentation produced specifically for them.",
      "We retain ownership of our pre-existing materials, general know-how, tools and reusable components, and grant a licence to use them to the extent needed to operate the deliverables.",
    ],
  },
  {
    heading: "Accuracy of information",
    paragraphs: [
      "We take care to keep this website accurate and current, but we do not warrant that it is complete, error-free or up to date at any given moment.",
      "Descriptions of services, capabilities and process are provided for information. They are not contractual commitments and may change without notice.",
    ],
  },
  {
    heading: "No professional advice",
    paragraphs: [
      "Content on this website is general information, not professional, technical, legal or financial advice for your specific circumstances. Do not act on it without appropriate advice for your situation.",
    ],
  },
  {
    heading: "Third-party links",
    paragraphs: [
      "This website may link to third-party sites and services. Those links are provided for convenience. We do not control those sites and are not responsible for their content, availability or practices.",
    ],
  },
  {
    heading: "Availability",
    paragraphs: [
      "We aim to keep this website available but do not guarantee uninterrupted access. We may suspend, withdraw or restrict all or part of it for business or operational reasons, without notice.",
    ],
  },
  {
    heading: "Liability",
    paragraphs: [
      "To the extent permitted by law, we exclude liability for any loss or damage arising from use of, or inability to use, this website — including indirect or consequential loss, loss of profit, loss of business or loss of data.",
      "Nothing in these terms excludes or limits liability where it would be unlawful to do so, including for death or personal injury caused by negligence, or for fraud.",
      "Liability arising from client engagements is governed by the applicable client agreement.",
    ],
  },
  {
    heading: "Privacy",
    paragraphs: [
      "Our handling of personal information is described in our Privacy Policy, which forms part of these terms.",
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: [
      "We may revise these terms at any time. The version published on this page is the one that applies. Continued use of the site after a change constitutes acceptance of the revised terms.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms, and any dispute arising from them, are governed by the laws applicable in the jurisdiction of our registration, and the courts of that jurisdiction have exclusive jurisdiction.",
    ],
    pending:
      "The specific governing law and jurisdiction clause is to be confirmed with legal counsel.",
  },
  {
    heading: "Contact",
    paragraphs: [
      `Questions about these terms can be sent to ${COMPANY.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <PageLayout
      eyebrow="LEGAL"
      title="Terms &amp; Conditions"
      intro="The terms governing use of this website, and how they relate to a client agreement."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      path="/terms"
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
              These terms cover the website. They deliberately make no commitments about
              engagements — those belong in a signed agreement written for the specific work.
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
            <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-white transition-colors">
              Privacy Policy
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
