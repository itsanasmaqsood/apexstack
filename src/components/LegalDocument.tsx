import type { ReactNode } from "react";

/**
 * Shared shell for Privacy Policy and Terms.
 *
 * Legal pages are read, not scanned, so the measure is capped near 70 characters
 * and the type is set larger than a marketing section would use.
 */

export interface LegalClause {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Rendered in a muted style — used for items awaiting real legal detail. */
  pending?: string;
}

export function LegalBody({
  clauses,
  children,
}: {
  clauses: LegalClause[];
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {children}
      <ol className="space-y-12 counter-reset-none">
        {clauses.map((clause, index) => (
          <li key={clause.heading}>
            <h2 className="text-black text-xl md:text-2xl font-medium mb-4">
              <span className="text-[#B4CC04] mr-3">{String(index + 1).padStart(2, "0")}</span>
              {clause.heading}
            </h2>
            {clause.paragraphs?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-black/70 text-sm md:text-base leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
            {clause.bullets && (
              <ul className="space-y-2 mb-4">
                {clause.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="text-[#B4CC04] mt-1 shrink-0" aria-hidden="true">
                      —
                    </span>
                    <span className="text-black/70 text-sm md:text-base leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {clause.pending && (
              <p className="text-black/40 text-sm italic border-l-2 border-black/10 pl-4">
                {clause.pending}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
