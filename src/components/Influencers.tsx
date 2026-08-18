import type { CSSProperties } from "react";

/**
 * "Global delivery" — the band under the process rail.
 *
 * WHAT CHANGED AND WHY: this used to crossfade seven desktop and seven mobile
 * slides from `/brand/ph/delivery-*.webp` on a 4-second timer. Every one of
 * those fourteen files is a placeholder — dark diagonal hatching with a small
 * olive X in the middle — so the section spent its life fading one placeholder
 * into the next, and read as a broken image to anyone who scrolled past it.
 *
 * It is now a single real background. That removes the timer, the two pieces of
 * component state, the resize-free crossfade machinery and the `"use client"`
 * boundary: nothing here is interactive any more, so it renders on the server
 * and ships no JavaScript at all.
 *
 * The fourteen placeholders are untouched on disk.
 */

const BACKGROUND = "/brand/global-delivery.webp";

/**
 * The artwork holds its subject — a stack of layers with lit nodes — in the
 * right-hand half and leaves the left dark, which is where the heading sits.
 * Desktop anchors right so the stack stays in frame at any width. Mobile is a
 * tall box against a landscape source, so `cover` scales it hard; 72% keeps the
 * stack in view instead of cropping to empty space.
 */
const backdrop = (position: string): CSSProperties => ({
  backgroundImage: `url('${BACKGROUND}')`,
  backgroundSize: "cover",
  backgroundPosition: position,
  backgroundRepeat: "no-repeat",
});

/** Darkens the left third so the heading holds contrast over the artwork. */
const scrim: CSSProperties = {
  background:
    "linear-gradient(to right, rgba(8,9,10,0.92) 0%, rgba(8,9,10,0.72) 35%, rgba(8,9,10,0.15) 70%, rgba(8,9,10,0) 100%)",
};

export default function Influencers() {
  return (
    <div
      className="w-full text-white font-fira-sans relative overflow-hidden bg-[#08090A]"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
    >
      {/* Mobile: full-bleed, outside the rails. */}
      <div className="md:hidden absolute inset-0" style={backdrop("72% center")} />
      <div className="md:hidden absolute inset-0" style={scrim} />

      <div
        className="relative z-10 w-[90%] md:w-auto mx-auto md:mx-[153px] md:overflow-hidden"
        style={{
          borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
          borderRight: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Desktop: inset within the 153px rails, matching the original. */}
        <div className="hidden md:block absolute inset-0" style={backdrop("right center")} />
        <div className="hidden md:block absolute inset-0" style={scrim} />

        <div className="relative z-10 py-10 min-h-[750px] md:min-h-[450px]">
          <div className="relative md:pl-[60px] md:pr-[60px] px-4 pt-8 md:pt-12">
            <p className="text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase text-white/60 mb-4">
              GLOBAL DELIVERY
            </p>
            <h2 className="text-[30px] md:text-[38px] leading-[120%] font-medium text-white max-w-[400px]">
              One team, working across every time zone you operate in
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
