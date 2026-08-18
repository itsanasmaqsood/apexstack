import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WorkshopSticky from "@/components/WorkshopSticky";
import { RAIL_DARK } from "@/components/Section";
import { ENTITY_STUBS, type SchemaNode } from "@/data/schema";
import { ORG_ID, SITE_URL, WEBSITE_ID } from "@/lib/site";

/**
 * Shell for every page that is not the homepage.
 *
 * The homepage overlays the navbar on a full-bleed hero image. Inner pages have
 * no hero photograph, so the navbar sits on the brand ink instead — same markup,
 * same height, same hairline, just an opaque ground beneath it.
 */

export interface Crumb {
  label: string;
  href?: string;
}

interface PageLayoutProps {
  /** Uppercase label above the H1. */
  eyebrow: string;
  /** The page's only H1. */
  title: string;
  /** One or two sentences under the title. */
  intro?: string;
  breadcrumbs?: Crumb[];
  /** Path of this page, used for the schema `@id`. */
  path?: string;
  /** schema.org type for the page itself. */
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ProfilePage";
  /**
   * `mainEntity` for the page node — normally `@id` references to nodes passed
   * in `extraSchema`, which is what tells a crawler what the page is *about*
   * rather than merely what it contains.
   */
  mainEntity?: SchemaNode | SchemaNode[];
  /** Page-specific JSON-LD nodes, appended to this page's single `@graph`. */
  extraSchema?: SchemaNode[];
  children: ReactNode;
}

/**
 * Emits the shared entity stubs, BreadcrumbList, a typed WebPage node and
 * anything the page adds.
 *
 * The stubs come first and matter most: this node's `isPartOf` and `publisher`
 * point at `#website` and `#organization`, and until they were unshifted here
 * those `@id`s were defined on the homepage alone, so on every other URL both
 * references dangled. One graph per page, with every reference resolvable
 * inside it.
 */
function PageSchema({
  title,
  intro,
  breadcrumbs,
  path,
  pageType,
  mainEntity,
  extraSchema,
}: Required<Pick<PageLayoutProps, "title" | "breadcrumbs" | "pageType">> & {
  intro?: string;
  path?: string;
  mainEntity?: SchemaNode | SchemaNode[];
  extraSchema?: SchemaNode[];
}) {
  const graph: SchemaNode[] = [...ENTITY_STUBS];

  if (breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        ...(crumb.href ? { item: `${SITE_URL}${crumb.href === "/" ? "" : crumb.href}` } : {}),
      })),
    });
  }

  graph.push({
    "@type": pageType,
    name: title,
    ...(intro ? { description: intro } : {}),
    ...(path ? { "@id": `${SITE_URL}${path}`, url: `${SITE_URL}${path}` } : {}),
    ...(mainEntity ? { mainEntity } : {}),
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
  });

  if (extraSchema?.length) {
    graph.push(...extraSchema);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

export default function PageLayout({
  eyebrow,
  title,
  intro,
  breadcrumbs = [],
  path,
  pageType = "WebPage",
  mainEntity,
  extraSchema,
  children,
}: PageLayoutProps) {
  return (
    <div id="root">
      <PageSchema
        title={title}
        intro={intro}
        breadcrumbs={breadcrumbs}
        path={path}
        pageType={pageType}
        mainEntity={mainEntity}
        extraSchema={extraSchema}
      />
      <div className="relative bg-[#08090A]">
        <Navbar />
        <div
          className="w-[90%] md:w-auto mx-auto md:mx-[153px]"
          style={{ borderLeft: `1px solid ${RAIL_DARK}`, borderRight: `1px solid ${RAIL_DARK}` }}
        >
          <div className="px-4 md:px-0 md:pl-[60px] md:pr-[60px] pt-16 pb-16 md:pt-24 md:pb-20">
            {breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-white/50">
                  {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.label} className="flex items-center gap-2">
                      {crumb.href ? (
                        <a href={crumb.href} className="hover:text-white transition-colors">
                          {crumb.label}
                        </a>
                      ) : (
                        <span aria-current="page" className="text-white/80">
                          {crumb.label}
                        </span>
                      )}
                      {index < breadcrumbs.length - 1 && (
                        <span aria-hidden="true" className="text-white/25">
                          /
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <p className="text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase text-white/60 mb-4">
              {eyebrow}
            </p>
            <h1 className="text-[32px] md:text-[50px] font-medium text-white leading-tight max-w-4xl">
              {title}
            </h1>
            {intro && (
              <p className="text-base md:text-[20px] font-[400] text-white/60 mt-6 max-w-2xl leading-relaxed">
                {intro}
              </p>
            )}
          </div>
        </div>
      </div>

      <main id="main-content">{children}</main>

      <Footer />
      <WorkshopSticky />
    </div>
  );
}
