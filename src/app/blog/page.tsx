import Link from "next/link";

import type { Metadata } from "next";

import { SITE_URL } from "@/app/layout";
import BlogBanner from "@/components/BlogBanner";
import { ACCENT } from "@/components/BlogBody";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import {
  PINNED_POST,
  POSTS,
  POST_COUNT,
  formatPostDate,
  postsInCategory,
  readingMinutes,
} from "@/data/blog";
import { CLUSTER_IMAGE } from "@/data/blog/imagery";
import { BLOG_CATEGORIES } from "@/data/blog/types";
import { LEADERSHIP } from "@/data/team";
import { pageMetadata } from "@/lib/metadata";

/**
 * The blog index.
 *
 * Grouped by cluster rather than listed by date. Date ordering is the right
 * default for a news site and the wrong one for a reference library: a buyer
 * arriving on a cost article should see the other four cost-and-decision
 * articles next to it, not whatever happened to be published most recently.
 * Grouping is also what makes the topical relationship between posts legible to
 * a crawler.
 */

const TITLE = "Engineering & Product Blog";
const DESCRIPTION =
  "Practical guides on MVP cost and scoping, automation, AI engineering and legacy modernisation — written by the engineers who build the software.";

export const metadata: Metadata = pageMetadata({
  title: "Software Engineering Blog | ApexStack",
  description: DESCRIPTION,
  path: "/blog",
});

/** One line per cluster, so a category heading is never a bare label. */
const CATEGORY_INTRO: Record<string, string> = {
  "Choosing a Partner":
    "Contracts, ownership, discovery and what to ask before you sign — the decisions made before a line of code exists, which are usually the ones that decide how it goes.",
  "MVP & Startups":
    "What a first version costs, how long it takes, and how to scope one so the budget survives contact with reality.",
  "Automation & Internal Tools":
    "Deciding what is worth automating, and whether to build it, buy it, or assemble it from something low-code.",
  "AI Engineering":
    "Shipping AI features that hold up under real users — architecture, evaluation, and what they cost to run.",
  "Legacy Modernisation":
    "Replacing systems that still earn their keep, without the rewrite that never lands.",
  "Design & Brand":
    "Identity, interface and landing pages: the work that decides whether a good product reads as a credible one.",
  "Case Studies":
    "Products we have shipped, and what each one cost us to get right. Written from the code, not from a brief.",
};

export default function BlogIndexPage() {
  const graph = [
    {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      name: `${TITLE} | ApexStack`,
      description: DESCRIPTION,
      url: `${SITE_URL}/blog`,
      inLanguage: "en-GB",
      publisher: { "@id": `${SITE_URL}/#organization` },
      blogPost: POSTS.map((post) => ({ "@id": `${SITE_URL}/blog/${post.slug}#article` })),
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/blog#list`,
      itemListElement: POSTS.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  ];

  return (
    <PageLayout
      eyebrow="BLOG"
      title="Engineering decisions, explained"
      intro={`${POST_COUNT} guides on the decisions that shape a software build — what things cost, what breaks, and which trade-off to take. Written by the people doing the work.`}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      path="/blog"
      pageType="CollectionPage"
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

      {/* Jump links. Four clusters is enough that a reader landing here should
          not have to scroll past three of them to find theirs. */}
      <Section theme="dark" padding="py-8">
        <nav aria-label="Blog categories" className="flex flex-wrap gap-2.5">
          {BLOG_CATEGORIES.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="inline-flex items-center px-4 py-2 text-sm text-white/70 border border-white/20 rounded-[2px] hover:text-white hover:border-white/50 transition-colors"
            >
              {category}
              <span className="ml-2 text-white/35">{postsInCategory(category).length}</span>
            </a>
          ))}
        </nav>
      </Section>

      {/* The orientation post. Pinned rather than sorted to the top: it is
          older than most of what it introduces, so any date ordering buries
          the one post a first-time reader should open first. */}
      {PINNED_POST && (
        <Section theme="dark" padding="py-10">
          <Link
            href={`/blog/${PINNED_POST.slug}`}
            className="group block border border-white/25 rounded-[2px] p-7 md:p-9 hover:border-white/50 transition-colors"
          >
            <span
              className="text-xs font-medium tracking-[0.12em] uppercase"
              style={{ color: ACCENT }}
            >
              Start here
            </span>
            <h2 className="text-white text-[24px] md:text-[30px] font-medium leading-[1.25] mt-3 mb-4 group-hover:opacity-85 transition-opacity">
              {PINNED_POST.title}
            </h2>
            <p className="text-[rgba(207,207,207,0.8)] text-base leading-[1.7] max-w-3xl mb-5">
              {PINNED_POST.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-white/45">
              <time dateTime={PINNED_POST.published}>
                {formatPostDate(PINNED_POST.published)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(PINNED_POST)} min read</span>
            </div>
          </Link>
        </Section>
      )}

      {BLOG_CATEGORIES.map((category) => {
        const posts = postsInCategory(category);
        if (posts.length === 0) return null;

        return (
          <Section
            key={category}
            theme="dark"
            id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          >
            {/* The cluster's illustration, shown once here rather than on all
                six cards. Repeating it per card would read as a template; once
                per section it reads as a marker. Absent for clusters with no
                image, which is deliberate — see src/data/blog/imagery.ts. */}
            {CLUSTER_IMAGE[category] && (
              <div className="mb-7">
                <BlogBanner image={CLUSTER_IMAGE[category]} size="band" />
              </div>
            )}

            <div className="mb-8 max-w-2xl">
              <h2 className="text-white text-[26px] md:text-[32px] font-medium leading-[125%] mb-3">
                {category}
              </h2>
              <p className="text-[rgba(207,207,207,0.75)] text-base leading-[1.7]">
                {CATEGORY_INTRO[category]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {posts.map((post) => {
                const author = LEADERSHIP.find((member) => member.id === post.authorId);

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col border border-white/15 rounded-[2px] p-6 hover:border-white/40 transition-colors"
                  >
                    <h3 className="text-white text-[19px] md:text-[21px] font-medium leading-[1.35] mb-3 group-hover:opacity-85 transition-opacity">
                      {post.title}
                    </h3>
                    <p className="text-[rgba(207,207,207,0.75)] text-[15px] leading-[1.65] mb-5 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-white/45">
                      {author && (
                        <>
                          <span>{author.name}</span>
                          <span aria-hidden="true">·</span>
                        </>
                      )}
                      <time dateTime={post.published}>{formatPostDate(post.published)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{readingMinutes(post)} min read</span>
                    </div>
                    <span
                      className="mt-4 text-sm font-medium transition-opacity group-hover:opacity-80"
                      style={{ color: ACCENT }}
                    >
                      Read the guide →
                    </span>
                  </Link>
                );
              })}
            </div>
          </Section>
        );
      })}
    </PageLayout>
  );
}
