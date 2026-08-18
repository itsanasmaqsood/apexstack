import { FAQS } from "@/data/faqs";
import { ORGANIZATION, WEBSITE } from "@/data/schema";
import { SITE_URL } from "@/lib/site";

/**
 * JSON-LD for the homepage.
 *
 * The source site shipped zero structured data — no `application/ld+json` block
 * before or after hydration — which was its largest single SEO gap. These graphs
 * are emitted server-side so crawlers see them without executing JavaScript.
 *
 * Deliberately absent until the underlying facts are real and verifiable:
 * `AggregateRating`, `Review` and `CreativeWork` (case studies). Marking up a
 * rating or a testimonial we cannot substantiate is worse than having none.
 *
 * The `Organization` and `WebSite` nodes now live in `@/data/schema` so inner
 * pages can emit resolvable stubs of them; this file assembles the homepage's
 * own graph and nothing else. The founders' `Person` nodes moved to `/team`,
 * the page that actually shows them — `ORGANIZATION.founder` still points at
 * them by `@id`, which is what an `@id` is for.
 */

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [ORGANIZATION, WEBSITE, faqPage],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Content is a compile-time constant assembled from our own data files —
      // no user input reaches this string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
