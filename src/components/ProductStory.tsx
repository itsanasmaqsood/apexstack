import { ACCENT } from "@/components/BlogBody";
import { parseStory } from "@/lib/product-story";

/**
 * The long product description, given a shape.
 *
 * WHAT THIS REPLACED: the same copy rendered as undifferentiated paragraphs,
 * produced by splitting the store listing on sentence boundaries and grouping
 * every three. On a listing like Iqra's, which carries twelve feature groups
 * and roughly fifty individual features, that collapsed into a single block of
 * small grey text with feature names buried mid-sentence. There was nothing for
 * an eye to land on and no way to find one capability without reading all of
 * them.
 *
 * WHY A GRID OF GROUPS: the copy is already a list of groups, so the page
 * should be too. Scanning is the actual behaviour here. Somebody deciding
 * whether an app does the one thing they need is looking for that thing, not
 * reading an essay, and a heading plus a short list answers that in seconds.
 *
 * NOTHING IS REWRITTEN. Every word comes from the published listing; this only
 * decides what is a heading, what is a feature and what is a legal note, then
 * sets each accordingly. See `src/lib/product-story.ts` for how that is read.
 */

/** Roughly three sentences per paragraph, for listings written without headings. */
function paragraphs(text: string): string[] {
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z"'“])/);
  const out: string[] = [];
  for (let i = 0; i < sentences.length; i += 3) {
    const para = sentences.slice(i, i + 3).join(" ").trim();
    if (para) out.push(para);
  }
  return out;
}

export default function ProductStory({
  name,
  story,
}: {
  name: string;
  story: string;
}) {
  const { lead, groups, closing } = parseStory(story);
  const features = groups.filter((g) => !g.isNote);
  const notes = groups.filter((g) => g.isNote);

  if (!lead && features.length === 0) return null;

  return (
    <div>
      {/* The lead sits at reading width and one step up in size. When a listing
          has no headings at all, it is the whole description, so it is broken
          into paragraphs rather than left as one block. */}
      {lead && (
        <div className="max-w-3xl space-y-4 mb-12">
          {paragraphs(lead).map((para, i) => (
            <p
              key={para.slice(0, 32)}
              className={
                i === 0
                  ? "text-black/80 text-base md:text-[19px] leading-[1.6]"
                  : "text-black/60 text-sm md:text-base leading-[1.7]"
              }
            >
              {para}
            </p>
          ))}
        </div>
      )}

      {/* COLUMNS RATHER THAN A GRID. Groups run from two features to ten, and a
          two-column grid aligns every row to its tallest cell, so a short group
          beside a long one leaves a block of dead space. Columns let each group
          flow into the gap the previous one left, which is what makes the
          section read as one body of text rather than as a broken table. */}
      {features.length > 0 && (
        <div className="columns-1 md:columns-2 gap-x-10 [column-fill:balance]">
          {features.map((group) => (
            <section
              key={group.heading}
              className="break-inside-avoid mb-9 first:mt-0"
            >
              {/* A short accent rule rather than a coloured heading: the accent
                  is legible on the dark sections and washes out on white. */}
              <span
                aria-hidden="true"
                className="block w-7 h-[2px] mb-3.5"
                style={{ backgroundColor: ACCENT }}
              />
              <h3 className="text-black text-[15px] md:text-base font-medium tracking-[0.01em] mb-3.5">
                {group.heading}
              </h3>

              {group.items.length > 0 ? (
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={(item.title ?? "") + item.text.slice(0, 32)}
                      className="text-black/60 text-sm leading-[1.6] pl-4 relative"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.62em] w-1.5 h-px bg-black/25"
                      />
                      {item.title && (
                        <span className="text-black/85 font-medium">
                          {item.title}.{" "}
                        </span>
                      )}
                      {item.text}
                    </li>
                  ))}
                </ul>
              ) : (
                group.prose && (
                  <p className="text-black/60 text-sm leading-[1.7]">{group.prose}</p>
                )
              )}
            </section>
          ))}
        </div>
      )}

      {/* The listing's sign-off. Kept out of the last feature group, where it
          would otherwise arrive as one very long final bullet. */}
      {closing && (
        <p className="mt-11 max-w-3xl text-black/60 text-sm md:text-base leading-[1.7]">
          {closing}
        </p>
      )}

      {/* Disclaimers and billing terms. Required on the page, and not the reason
          anyone opened it, so they are set smaller and last rather than being
          allowed to interrupt the features above. */}
      {notes.length > 0 && (
        <div className="mt-12 pt-8 border-t border-black/10 max-w-3xl space-y-5">
          {notes.map((group) => (
            <div key={group.heading}>
              <h3 className="text-black/45 text-[11px] uppercase tracking-[1.5px] mb-2">
                {group.heading}
              </h3>
              {group.items.length > 0 ? (
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li
                      key={(item.title ?? "") + item.text.slice(0, 32)}
                      className="text-black/45 text-[13px] leading-[1.6]"
                    >
                      {item.title && (
                        <span className="text-black/60">{item.title}. </span>
                      )}
                      {item.text}
                    </li>
                  ))}
                </ul>
              ) : (
                group.prose && (
                  <p className="text-black/45 text-[13px] leading-[1.65]">
                    {group.prose}
                  </p>
                )
              )}
            </div>
          ))}
          <p className="text-black/35 text-[12px] leading-[1.6] pt-1">
            Description as published on the {name} store listing.
          </p>
        </div>
      )}
    </div>
  );
}
