import Link from "next/link";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { SITE_URL } from "@/app/layout";
import BlogBanner from "@/components/BlogBanner";
import BlogBody, { ACCENT, headingId } from "@/components/BlogBody";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import {
  POSTS,
  formatPostDate,
  getPost,
  readingMinutes,
  relatedPosts,
} from "@/data/blog";
import { CLUSTER_IMAGE } from "@/data/blog/imagery";
import { bookingLinkProps } from "@/data/company";
import { ALL_SERVICES } from "@/data/services";
import { LEADERSHIP } from "@/data/team";
import { OG_IMAGE, pageMetadata } from "@/lib/metadata";

/**
 * One page per blog post.
 *
 * Every post prerenders to static HTML at build time. That matters more here
 * than anywhere else on the site: answer engines and most crawlers read the raw
 * response without executing JavaScript, and a post they cannot read is a post
 * they cannot cite.
 */

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found | ApexStack" };

  const author = LEADERSHIP.find((member) => member.id === post.authorId);
  const url = `/blog/${post.slug}`;

  // Everything shared — og:image, og:site_name, locale, the full twitter card —
  // comes from `pageMetadata`. The article properties go through its `article`
  // parameter rather than being merged on afterwards, so `og:image` cannot be
  // lost the way it was on 53 other pages before this helper existed.
  return pageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: url,
    article: {
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      ...(author ? { authors: [author.name] } : {}),
      section: post.category,
      tags: [post.primaryKeyword, ...post.secondaryKeywords],
    },
    extra: {
      keywords: [post.primaryKeyword, ...post.secondaryKeywords],
      ...(author ? { authors: [{ name: author.name, url: `${SITE_URL}/team` }] } : {}),
    },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = LEADERSHIP.find((member) => member.id === post.authorId);
  const service = post.serviceSlug
    ? ALL_SERVICES.find((item) => item.slug === post.serviceSlug)
    : undefined;
  const related = relatedPosts(post);
  const clusterImage = CLUSTER_IMAGE[post.category];
  const minutes = readingMinutes(post);
  const url = `${SITE_URL}/blog/${post.slug}`;

  /**
   * `BlogPosting` carries its own `@id` and points at the `WebPage` node that
   * `PageLayout` emits, rather than competing with it for the same identity.
   * `FAQPage` is added only when the post has visible questions and answers.
   * Empty or universal FAQ markup describes content that is not on the page.
   */
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.description,
      articleSection: post.category,
      keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
      datePublished: post.published,
      dateModified: post.updated ?? post.published,
      image: `${SITE_URL}${clusterImage?.src ?? OG_IMAGE.url}`,
      wordCount: post.sections.reduce(
        (sum, section) =>
          sum +
          section.blocks.reduce(
            (n, block) =>
              n +
              (block.type === "p" || block.type === "callout" || block.type === "h3"
                ? block.text.split(/\s+/).length
                : 0),
            0,
          ),
        0,
      ),
      inLanguage: "en-GB",
      isPartOf: { "@id": `${SITE_URL}/blog#blog` },
      mainEntityOfPage: { "@id": url },
      publisher: { "@id": `${SITE_URL}/#organization` },
      ...(author ? { author: { "@id": `${SITE_URL}/team#${author.id}` } } : {}),
    },
    ...(post.faqs.length > 0
      ? [
          {
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]
      : []),
  ];

  return (
    <PageLayout
      eyebrow={post.category}
      title={post.title}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: post.title },
      ]}
      path={`/blog/${post.slug}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <Section theme="dark">
        {/* The cluster's illustration, where one exists. Same artwork on all
            six posts in a cluster on purpose — it signals which cluster you are
            in rather than decorating this particular post. AI Engineering has
            none, so those six posts open straight on the byline. */}
        {clusterImage && (
          <div className="mb-12">
            <BlogBanner image={clusterImage} size="hero" priority />
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* ------------------------------------------------ table of contents */}
          <aside className="lg:w-[240px] lg:flex-shrink-0 order-first">
            <div className="lg:sticky lg:top-28">
              <p className="text-white/50 text-xs uppercase tracking-[1.5px] mb-4">
                On this page
              </p>
              <nav aria-label="Table of contents">
                <ol className="space-y-2.5">
                  {post.sections.map((section) => (
                    <li key={section.heading}>
                      <a
                        href={`#${headingId(section.heading)}`}
                        className="text-white/55 hover:text-white text-[13px] leading-[1.5] block transition-colors"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                  {post.faqs.length > 0 && (
                    <li>
                      <a
                        href="#faq"
                        className="text-white/55 hover:text-white text-[13px] leading-[1.5] block transition-colors"
                      >
                        Frequently asked questions
                      </a>
                    </li>
                  )}
                  {post.sources && post.sources.length > 0 && (
                    <li>
                      <a
                        href="#sources"
                        className="text-white/55 hover:text-white text-[13px] leading-[1.5] block transition-colors"
                      >
                        Sources
                      </a>
                    </li>
                  )}
                </ol>
              </nav>
            </div>
          </aside>

          {/* ------------------------------------------------------------ article */}
          <article className="flex-1 min-w-0 max-w-[720px]">
            {/* Byline. A named, checkable author with a real title is the
                strongest experience signal a young domain has. */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pb-6 mb-9 border-b border-white/15 text-sm text-white/50">
              {author && (
                <>
                  <Link
                    href="/team"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {author.name}
                  </Link>
                  <span aria-hidden="true">·</span>
                  <span>{author.role}</span>
                  <span aria-hidden="true">·</span>
                </>
              )}
              <time dateTime={post.published}>{formatPostDate(post.published)}</time>
              <span aria-hidden="true">·</span>
              <span>{minutes} min read</span>
            </div>

            {/* The passage an answer engine quotes. Placed before the body so it
                is the first substantive text in the document, and marked up so a
                reader gets the answer without scrolling. */}
            <div
              className="mb-11 border border-white/20 rounded-[2px] p-5 md:p-6"
              style={{ borderLeftWidth: "2px", borderLeftColor: ACCENT }}
            >
              <p className="text-white/50 text-xs uppercase tracking-[1.5px] mb-3">
                The short answer
              </p>
              <p className="text-white text-[17px] md:text-[19px] leading-[1.65]">
                {post.keyTakeaway}
              </p>
            </div>

            <BlogBody sections={post.sections} />

            {post.sources && post.sources.length > 0 && (
              <section id="sources" className="scroll-mt-28 pt-4 mb-11">
                <h2 className="text-white text-[24px] md:text-[30px] font-medium leading-[125%] mb-6">
                  Sources
                </h2>
                <ul className="space-y-3">
                  {post.sources.map((source) => (
                    <li key={source.url} className="text-[rgba(207,207,207,0.9)] leading-[1.7]">
                      <a
                        href={source.url}
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-white transition-colors"
                      >
                        {source.title}
                      </a>
                      {source.publisher ? ` — ${source.publisher}` : ""}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* ------------------------------------------------------------- FAQ */}
            {post.faqs.length > 0 && (
              <section id="faq" className="scroll-mt-28 pt-4">
                <h2 className="text-white text-[24px] md:text-[30px] font-medium leading-[125%] mb-6">
                  Frequently asked questions
                </h2>
                <dl className="space-y-6">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="border-b border-white/10 pb-6">
                      <dt className="text-white text-[17px] md:text-[18px] font-medium mb-2.5">
                        {faq.question}
                      </dt>
                      <dd className="text-[rgba(207,207,207,0.9)] text-base leading-[1.7]">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {/* --------------------------------------------------------- the ask */}
            <div className="mt-12 border border-white/20 rounded-[2px] p-6 md:p-8">
              <h2 className="text-white text-[22px] md:text-[26px] font-medium leading-[130%] mb-3">
                {service
                  ? `Talking about ${service.name.toLowerCase()}?`
                  : "Working on something like this?"}
              </h2>
              <p className="text-[rgba(207,207,207,0.9)] text-base leading-[1.7] mb-6 max-w-xl">
                {service
                  ? service.summary
                  : "We design, build and scale custom software from the business problem through to production."}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  {...bookingLinkProps()}
                  className="inline-flex items-center px-5 py-3 text-sm font-medium text-black rounded-[2px] transition-opacity hover:opacity-90"
                  style={{ backgroundColor: ACCENT }}
                >
                  Book a discovery call
                </a>
                {service && (
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center px-5 py-3 text-sm font-medium text-white border border-white/30 rounded-[2px] hover:border-white/60 transition-colors"
                  >
                    {service.name}
                  </Link>
                )}
              </div>
            </div>
          </article>
        </div>
      </Section>

      {/* ------------------------------------------------------- related reading */}
      {related.length > 0 && (
        <Section theme="dark">
          <h2 className="text-white text-[24px] md:text-[30px] font-medium leading-[125%] mb-8">
            Related reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group block border border-white/15 rounded-[2px] p-5 hover:border-white/40 transition-colors"
              >
                <p className="text-white/45 text-xs uppercase tracking-[1.2px] mb-3">
                  {item.category}
                </p>
                <h3 className="text-white text-[17px] font-medium leading-[1.4] mb-2.5 group-hover:opacity-80 transition-opacity">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-[1.6]">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </PageLayout>
  );
}
