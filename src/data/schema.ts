import { COMPANY, isTodo, SOCIALS } from "@/data/company";
import { ALL_SERVICES } from "@/data/services";
import { LEADERSHIP } from "@/data/team";
import { ORG_ID, SITE_URL, WEBSITE_ID } from "@/lib/site";

/**
 * The JSON-LD nodes shared by every page, in one place.
 *
 * WHY THIS EXISTS: `#organization` and `#website` were defined inside
 * `StructuredData.tsx`, which renders on the homepage and nowhere else. Every
 * other page still pointed `publisher` and `provider` at those two `@id`s, so
 * on 55 of 56 URLs the references resolved to nothing — the service and product
 * pages, the ones with commercial intent, never said in machine-readable form
 * who provides the thing. Holding the nodes in a data module lets the homepage
 * emit the full versions while every inner page emits a resolvable stub, with
 * no page importing a component to get them.
 *
 * Nothing here is invented. Every value traces back to `company.ts` or
 * `team.ts`, and anything still marked `TODO:` is filtered out rather than
 * shipped as a placeholder.
 */

/** A single JSON-LD node. Deliberately loose — schema.org shapes are open. */
export type SchemaNode = Record<string, unknown>;

/** The `@id` a founder's `Person` node carries, wherever it is emitted. */
export function personId(memberId: string): string {
  return `${SITE_URL}/team#${memberId}`;
}

/**
 * Derived from the service catalogue rather than typed out again.
 *
 * This was a hand-maintained array of 19 strings while `ALL_SERVICES` held 23
 * entries, so the Organization node advertised a service list that had drifted
 * four services out of date and matched no page on the site. Deriving it means
 * adding a service to the catalogue updates the graph, and a rename can never
 * leave `knowsAbout` pointing at a name that no longer exists.
 */
export const SERVICES: string[] = ALL_SERVICES.map((service) => service.name);

/**
 * The three co-founders as `Person` nodes, referenced from
 * `ORGANIZATION.founder`.
 *
 * These are emitted on `/team` — the page that actually shows the people —
 * rather than on the homepage, which has no team section at all. The homepage
 * keeps only the `@id` references, which is the point of an `@id`.
 *
 * Only supplied facts appear: name, title, photograph, employer and public
 * profile. `sameAs` is what lets a search engine connect the person on this
 * page to the same person elsewhere, so it is the field that carries the trust.
 */
export const FOUNDERS: SchemaNode[] = LEADERSHIP.map((member) => ({
  "@type": "Person",
  "@id": personId(member.id),
  name: member.name,
  jobTitle: member.role,
  image: `${SITE_URL}${member.photo}`,
  description: member.bio,
  knowsAbout: member.focus,
  worksFor: { "@id": ORG_ID },
  url: `${SITE_URL}/team`,
  // Every public profile we can point at. `sameAs` is what lets a search
  // engine tie this person to the same person elsewhere, so more verified
  // links here is strictly better.
  ...(member.handle || member.github
    ? {
        sameAs: [
          ...(member.handle ? [`https://x.com/${member.handle}`] : []),
          ...(member.github ? [`https://github.com/${member.github}`] : []),
        ],
      }
    : {}),
}));

/** `@id`-only references to the founders, for graphs that do not define them. */
export const FOUNDER_REFS: SchemaNode[] = LEADERSHIP.map((member) => ({
  "@id": personId(member.id),
}));

/**
 * Public profiles, filtered through `isTodo` so an unfilled placeholder can
 * never reach the graph. Today that is Instagram only; the day a real LinkedIn
 * or Facebook URL lands in `company.ts` it appears here with no further change.
 */
const publicProfiles = SOCIALS.filter((social) => !isTodo(social.href)).map(
  (social): string => social.href,
);

const LOGO = {
  "@type": "ImageObject",
  url: `${SITE_URL}/brand/apexstack-logo.png`,
  width: 843,
  height: 200,
};

export const ORGANIZATION: SchemaNode = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: "ApexStack",
  legalName: COMPANY.legalName,
  url: SITE_URL,
  description:
    "ApexStack is a digital product engineering company. We design, build and scale custom software, AI products, cloud platforms and mobile applications for businesses worldwide.",
  slogan: "From business problem to production software",
  logo: LOGO,
  image: `${SITE_URL}/brand/og.webp`,
  email: COMPANY.email,
  founder: FOUNDER_REFS,
  address: { "@type": "PostalAddress", addressCountry: COMPANY.country },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: COMPANY.email,
    areaServed: "Worldwide",
    availableLanguage: "English",
  },
  ...(publicProfiles.length ? { sameAs: publicProfiles } : {}),
  // TODO: add `telephone` and the full postal address once confirmed. Omitted
  // rather than invented.
  areaServed: { "@type": "Place", name: "Worldwide" },
  knowsAbout: SERVICES,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Product engineering and design services",
    // Each offer carries the `@id` and `url` of the service's own page, so the
    // catalogue entry and the page that sells it are one entity rather than two
    // unrelated mentions of the same words. The `#service` fragment matches the
    // node emitted by src/app/services/[slug]/page.tsx.
    itemListElement: ALL_SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${service.slug}#service`,
        name: service.name,
        url: `${SITE_URL}/services/${service.slug}`,
        provider: { "@id": ORG_ID },
      },
    })),
  },
};

export const WEBSITE: SchemaNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "ApexStack",
  publisher: { "@id": ORG_ID },
};

/**
 * The same two entities, cut down for inner pages.
 *
 * An `@id` reference only means something if the node it names exists in the
 * graph that carries the reference — a crawler is not obliged to fetch another
 * URL to resolve it. These stubs are the minimum that makes `publisher` and
 * `provider` resolve on every page: identity, name, canonical URL, logo, and
 * the off-site profiles that reconcile the entity. The full catalogue,
 * description and contact details stay on the homepage, which is the page that
 * is actually about the company.
 */
export const ENTITY_STUBS: SchemaNode[] = [
  {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: "ApexStack",
    url: SITE_URL,
    logo: LOGO,
    ...(publicProfiles.length ? { sameAs: publicProfiles } : {}),
  },
  {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "ApexStack",
    publisher: { "@id": ORG_ID },
  },
];
