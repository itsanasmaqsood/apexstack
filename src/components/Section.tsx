import type { CSSProperties, ReactNode } from "react";

/**
 * The page's structural signature, extracted so inner pages reuse it verbatim.
 *
 * Every homepage section is the same three-layer frame: a full-bleed background
 * with 1px horizontal rules, a 153px gutter drawn as 1px vertical rules, and
 * 60px of inner padding. Reproducing that by hand on eight new pages would drift;
 * this component is the single definition.
 */

export const RAIL_DARK = "rgba(255, 255, 255, 0.2)";
export const RAIL_LIGHT = "rgba(8, 9, 10, 0.2)";

export type SectionTheme = "dark" | "light" | "black";

const BACKGROUNDS: Record<SectionTheme, string> = {
  dark: "bg-[#08090A]",
  light: "bg-white",
  black: "bg-black",
};

interface SectionProps {
  theme?: SectionTheme;
  /** Draws the 1px rule along the top edge. */
  borderTop?: boolean;
  /** Draws the 1px rule along the bottom edge. */
  borderBottom?: boolean;
  /** Vertical padding on the inner column. Defaults to the page's `py-16` rhythm. */
  padding?: string;
  id?: string;
  children: ReactNode;
}

export default function Section({
  theme = "dark",
  borderTop = true,
  borderBottom = true,
  padding = "py-16",
  id,
  children,
}: SectionProps) {
  const rail = theme === "light" ? RAIL_LIGHT : RAIL_DARK;
  const outer: CSSProperties = {};
  if (borderTop) outer.borderTop = `1px solid ${rail}`;
  if (borderBottom) outer.borderBottom = `1px solid ${rail}`;

  return (
    <div
      id={id}
      data-section-theme={theme === "light" ? "light" : undefined}
      className={`w-full ${BACKGROUNDS[theme]} font-fira-sans`}
      style={outer}
    >
      <div
        className="w-[90%] md:w-auto mx-auto md:mx-[153px]"
        style={{ borderLeft: `1px solid ${rail}`, borderRight: `1px solid ${rail}` }}
      >
        <div className={`px-4 md:px-0 md:pl-[60px] md:pr-[60px] ${padding}`}>{children}</div>
      </div>
    </div>
  );
}

/** The uppercase, wide-tracked label that opens every section on this site. */
export function Eyebrow({
  children,
  theme = "dark",
  className = "",
}: {
  children: ReactNode;
  theme?: SectionTheme;
  className?: string;
}) {
  const colour = theme === "light" ? "text-black" : "text-white/60";
  return (
    <p
      className={`text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase ${colour} ${className}`}
    >
      {children}
    </p>
  );
}

/** Section heading at the page's standard 30/38px step. */
export function SectionHeading({
  children,
  theme = "dark",
  className = "",
}: {
  children: ReactNode;
  theme?: SectionTheme;
  className?: string;
}) {
  const colour = theme === "light" ? "text-black" : "text-white";
  return (
    <h2
      className={`text-[30px] md:text-[38px] leading-[120%] font-medium ${colour} ${className}`}
    >
      {children}
    </h2>
  );
}
