import type { BlogBlock, BlogSection } from "@/data/blog/types";

/**
 * Renders a post's typed content blocks.
 *
 * The one place that decides how blog content looks. Posts are data; if the
 * article layout needs to change, it changes here and every post follows —
 * which is the entire reason the content model is structured rather than
 * markdown.
 *
 * Headings carry `id`s derived from their text so the table of contents can link
 * into them and so a reader or crawler can address one part of a long page.
 */

export const ACCENT = "#B4CC04";

/** Slug for a heading, used as its anchor id. */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-[rgba(207,207,207,0.9)] text-base md:text-[17px] leading-[1.75] mb-5">
          {block.text}
        </p>
      );

    case "h3":
      return (
        <h3
          id={headingId(block.text)}
          className="scroll-mt-28 text-white text-[20px] md:text-[23px] font-medium leading-[130%] mt-9 mb-4"
        >
          {block.text}
        </h3>
      );

    case "list":
      return block.ordered ? (
        <ol className="mb-6 space-y-2.5 list-decimal pl-5 marker:text-white/40">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-[rgba(207,207,207,0.9)] text-base md:text-[17px] leading-[1.7] pl-1"
            >
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="mb-6 space-y-2.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-6 text-[rgba(207,207,207,0.9)] text-base md:text-[17px] leading-[1.7]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.7em] h-[6px] w-[6px] -translate-y-1/2 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              {item}
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        // Wide tables scroll inside their own container so the page body never
        // scrolls sideways on a phone.
        <figure className="mb-7 -mx-4 md:mx-0">
          <div className="overflow-x-auto px-4 md:px-0">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr>
                  {block.head.map((cell) => (
                    <th
                      key={cell}
                      scope="col"
                      className="border-b border-white/25 py-3 pr-5 text-sm font-medium uppercase tracking-[0.06em] text-white/70 align-bottom"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className="border-b border-white/10">
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className={`py-3.5 pr-5 text-[15px] leading-[1.6] align-top ${
                          c === 0
                            ? "text-white font-medium"
                            : "text-[rgba(207,207,207,0.85)]"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-3 px-4 md:px-0 text-sm text-white/40">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "callout":
      return (
        <aside
          className="my-7 border-l-2 pl-5 py-1"
          style={{ borderColor: ACCENT }}
        >
          <p className="text-white text-[17px] md:text-[19px] leading-[1.6] font-medium">
            {block.text}
          </p>
        </aside>
      );

    case "code":
      return (
        <pre className="mb-7 overflow-x-auto rounded-[2px] border border-white/15 bg-black/60 p-4 text-[13px] leading-[1.65]">
          <code className="text-[rgba(207,207,207,0.95)]">{block.code}</code>
        </pre>
      );
  }
}

export default function BlogBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div>
      {sections.map((section) => (
        <section key={section.heading} className="mb-11">
          <h2
            id={headingId(section.heading)}
            className="scroll-mt-28 text-white text-[24px] md:text-[30px] font-medium leading-[125%] mb-5"
          >
            {section.heading}
          </h2>
          {section.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </section>
      ))}
    </div>
  );
}
