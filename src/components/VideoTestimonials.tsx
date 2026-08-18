"use client";

import Link from "next/link";

import { useRef } from "react";
import type { CSSProperties } from "react";

import { PRODUCT_COUNT } from "@/data/products";
import { WORK_ITEMS } from "@/data/work";

const RAIL_BORDERS = {
  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
};

/**
 * Card art, drawn rather than fetched.
 *
 * Each card used to load `/brand/ph/work-NN.webp` — a placeholder of dark
 * diagonal hatching with a small olive X. Sixteen of them side by side read as
 * sixteen broken images, which is a poor first impression on the one rail whose
 * job is to prove we ship real products.
 *
 * These are the brand's own colours instead: ink ground, lime light. The angle
 * and the lime's position rotate with the index so a row of sixteen has
 * movement without any card shouting, and the whole rail costs zero bytes and
 * zero requests. Real product screenshots at `public/products/<slug>.png`
 * should replace this — the footprint is identical, so nothing shifts when
 * they land.
 */
const INK = "#08090A";
const LIME = "180, 204, 4";

function cardArt(index: number): CSSProperties {
  const angle = 140 + ((index * 37) % 80);
  const stop = 26 + ((index * 13) % 22);
  const strength = 0.16 + ((index * 7) % 5) * 0.03;
  return {
    backgroundColor: INK,
    backgroundImage: `linear-gradient(${angle}deg, rgba(${LIME},${strength.toFixed(2)}) 0%, rgba(${LIME},0.04) ${stop}%, ${INK} 72%)`,
  };
}

/**
 * "Built. Shipped. Still Running." — the full-bleed work rail, plus the two
 * blocks that share this section's frame.
 *
 * The cards were <video> elements streaming from a third party's account. They
 * are posters now, and each one links to the product's own store listing, so the
 * rail keeps its exact footprint, hover reveal and scroll behaviour while
 * becoming something a visitor can actually verify.
 */
export default function VideoTestimonials() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const amount = window.innerWidth < 768 ? 220 : 280;
    railRef.current?.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div
      className="relative w-full bg-black text-white font-fira-sans"
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.15)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      {/* The video rail breaks out of the 153px gutter, so the page's rail rules are painted here. */}
      <div className="hidden md:block absolute top-0 bottom-0 left-[153px] w-px bg-white/15 z-40 pointer-events-none" />
      <div className="hidden md:block absolute top-0 bottom-0 right-[153px] w-px bg-white/15 z-40 pointer-events-none" />
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px]" style={RAIL_BORDERS}>
        <div className="relative z-20 px-4 md:px-[60px] pt-12 md:pt-16 pb-6 md:pb-10">
          <p className="text-xs md:text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase text-white/70 mb-2 md:mb-3">
            Work in production
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-6 md:mb-10">
            <div className="flex-1">
              <h2 className="text-[30px] md:text-[38px] leading-[120%] font-medium text-white mb-2">
                Built. Shipped. Still Running.
              </h2>
              <p className="text-white/50 text-sm md:text-base">
                Our own apps, live on the App Store and Google Play. Tap any of them.{" "}
                <Link
                  href="/products"
                  className="text-[#B4CC04] hover:text-[#D4F005] underline underline-offset-4 transition-colors"
                >
                  See all {PRODUCT_COUNT}
                </Link>
              </p>
            </div>
            <div className="hidden md:flex gap-3">
              <button
                aria-label="Scroll work rail left"
                className="w-10 h-10 border border-white/40 rounded flex items-center justify-center"
                onClick={() => scrollBy(-1)}
              >
                ←
              </button>
              <button
                aria-label="Scroll work rail right"
                className="w-10 h-10 bg-white text-black rounded flex items-center justify-center"
                onClick={() => scrollBy(1)}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-50" style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}>
        <div
          ref={railRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pl-4 pr-4 md:pl-[213px] md:pr-[120px]"
        >
          {WORK_ITEMS.map((item, index) => {
            const card = (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                  style={cardArt(index)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 md:p-4">
                  <h3 className="text-white text-xs md:text-sm font-semibold">{item.name}</h3>
                  <p className="text-gray-400 text-[10px] md:text-xs">{item.role}</p>
                </div>
              </>
            );
            const shell =
              "w-[200px] md:w-[240px] h-[340px] md:h-[404px] flex-shrink-0 rounded-[2px] overflow-hidden border border-[#D9D9D9]/40 relative group";

            return item.href ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${shell} block`}
              >
                {card}
              </a>
            ) : (
              <div key={item.name} className={shell}>
                {card}
              </div>
            );
          })}
        </div>
      </div>
      {/* Both blocks that used to sit here are gone, and the rail wrapper with
          them — an empty bordered box is worse than no box.

          `Community` showed the source company's event photographs captioned
          "Community learning moment". `OfflineImmersion` was worse: its poster
          (/cdn/videothumb.webp) is a collage carrying another company's logo,
          staff and events, and its play button opened an iframe with an empty
          src because IMMERSION_VIDEO_EMBED was never filled in — so it shipped
          someone else's branding attached to a control that did nothing.

          Both components and every image remain on disk. Restoring either is an
          import and a line, once there is real footage to put behind it. */}
      <div className="pb-12 md:pb-20" />
    </div>
  );
}
