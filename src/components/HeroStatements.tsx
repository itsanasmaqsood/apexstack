"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import RandomLetterSwap from "@/components/originkit/ui/random-letter-swap";

/**
 * The rotating statement line in the hero.
 *
 * The animation is Originkit's RandomLetterSwap, used as installed. It is
 * hover-driven — letters swap vertically in a shuffled order on pointer-enter —
 * and exposes no imperative play method, so the loop below raises a `mouseenter`
 * on the element it listens to each time the statement changes. That is the
 * component's own entry point, called from outside; nothing inside it is
 * modified.
 *
 * ── ONE LINE, ALWAYS ─────────────────────────────────────────────────────────
 * The component lays its letters out in an `inline-flex` row, which does not
 * wrap. A statement wider than the column would run off the page rather than
 * break onto a second line, so the type scale below is set from the longest
 * statement measured against the available width at each breakpoint.
 */

export const HERO_STATEMENTS = [
  "We build custom software.",
  "We ship iOS and Android apps.",
  "We build AI products and agents.",
  "We automate your operations.",
  "We get your business found online.",
] as const;

/** Settled dwell before the next statement swaps in. */
const HOLD_MS = 3600;

/** Reduced motion: no swap, so a longer dwell replaces the animation time. */
const REDUCED_HOLD_MS = 5000;

/**
 * Sized so the longest statement — "We get your business found online.", 34
 * characters — stays on one line inside the centred hero column at every
 * breakpoint. Going larger would overflow rather than wrap, because the
 * component's letter row is `inline-flex`.
 */
const TYPE =
  "text-[19px] sm:text-[26px] md:text-[38px] lg:text-[44px] leading-[1.15] font-medium";

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(MOTION_QUERY).matches,
    () => false,
  );
}

export default function HeroStatements() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const holderRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = window.setInterval(
      () => setIndex((current) => (current + 1) % HERO_STATEMENTS.length),
      reducedMotion ? REDUCED_HOLD_MS : HOLD_MS,
    );
    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  // Play the swap whenever the statement changes.
  //
  // It must be a bubbling `mouseover`, not `mouseenter`. React does not attach
  // an `onMouseEnter` listener to the element at all: it listens for
  // mouseover/mouseout at the root and synthesises enter/leave from them, so a
  // native `mouseenter` reaches nothing and the animation silently never runs —
  // which is exactly what happened on the first attempt here.
  //
  // A frame of delay lets the new label mount first; fired immediately, the
  // swap would animate the outgoing text.
  useEffect(() => {
    if (reducedMotion) return;
    const frame = requestAnimationFrame(() => {
      const target = holderRef.current?.querySelector("span");
      if (!target) return;
      target.dispatchEvent(
        new MouseEvent("mouseover", { bubbles: true, cancelable: true }),
      );
    });
    return () => cancelAnimationFrame(frame);
  }, [index, reducedMotion]);

  const statement = HERO_STATEMENTS[index];

  return (
    <div className="grid justify-items-center mb-5 md:mb-7 w-full">
      {/*
        Height reservation. Every statement is rendered invisibly into the same
        grid cell, so the track is permanently as tall as the tallest and
        nothing below it can move when the text swaps.
      */}
      {HERO_STATEMENTS.map((line) => (
        <span
          key={line}
          aria-hidden="true"
          className={`${TYPE} invisible select-none whitespace-nowrap`}
          style={{ gridArea: "1 / 1" }}
        >
          {line}
        </span>
      ))}

      {/*
        The live line. The `!` variants collapse the component's own root — a
        full-size centred flex box built for a standalone Framer frame — into an
        inline label that sits in the hero's flow. Presentation only.
      */}
      <span
        ref={holderRef}
        className={`${TYPE} text-white [&>div]:!h-auto [&>div]:!w-auto [&>div]:!inline-flex`}
        style={{ gridArea: "1 / 1" }}
      >
        {reducedMotion ? (
          statement
        ) : (
          <RandomLetterSwap
            // Deliberately NOT keyed. Remounting per statement tore the
            // component down while framer-motion still had queued animations
            // holding its `useAnimate` scope, and every one of them threw
            // "Cannot read properties of null (reading 'querySelectorAll')" —
            // 26 console errors in a single minute. Keeping one instance mounted
            // and swapping only `label` leaves the scope alive.
            label={statement}
            mode="forward"
            reverse={false}
            staggerDuration={0.022}
            color="#FFFFFF"
            // `font` must be passed. Left unset, the component's defaults apply
            // Inter Medium at 120px, which would wreck the hero. An empty object
            // makes every letter inherit the Tailwind type scale above.
            font={{}}
            ease={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          />
        )}
      </span>
    </div>
  );
}
