"use client";

import { useRef } from "react";

import { COMMUNITY_IMAGES } from "@/data/testimonials";

const TALL = "h-[240px] md:h-[400px]";
const SHORT = "h-[110px] md:h-[180px]";

/** The strip repeats a three-column motif: two narrow columns then a wide one. */
const COLUMN_SHAPES: { widthClass: string; tallFirst: boolean }[] = [
  { widthClass: "w-[160px] md:w-[260px]", tallFirst: true },
  { widthClass: "w-[160px] md:w-[260px]", tallFirst: false },
  { widthClass: "w-[200px] md:w-[380px]", tallFirst: true },
];

const GROUP_COUNT = 10;

/** "Learn Online, Connect Offline" — a horizontally scrolled photo mosaic. */
export default function Community() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (amount: number) => {
    railRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-black text-white overflow-hidden pb-6 font-fira-sans">
      <div className="flex justify-between items-center mb-10 px-4 md:px-[60px]">
        <div>
          <p className="uppercase text-white/60 mb-4 text-[16px] tracking-[1.75px] leading-[160%] font-normal">
            Inside ApexStack
          </p>
          <h2 className="text-[30px] md:text-[38px] leading-[120%] font-medium mb-5">
            Remote by design, together by habit
          </h2>
          <p className="text-white/50 max-w-xl">
            Architecture reviews, pairing sessions and release days. The work happens across time
            zones, but never in isolation — you get the same visibility into it that we do.
          </p>
        </div>
        <div className="hidden md:flex gap-3">
          <button
            aria-label="Scroll community images left"
            className="w-10 h-10 border border-white/40 rounded flex items-center justify-center"
            onClick={() => scrollBy(-948)}
          >
            ←
          </button>
          <button
            aria-label="Scroll community images right"
            className="w-10 h-10 bg-white text-black rounded flex items-center justify-center"
            onClick={() => scrollBy(948)}
          >
            →
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className=" md:mx-0">
          <div
            ref={railRef}
            className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-hide pl-4 pr-4 md:pl-[60px] md:pr-0"
          >
            {Array.from({ length: GROUP_COUNT }, (_, group) => (
              <div key={group} className="flex gap-3 md:gap-6">
                {COLUMN_SHAPES.map((shape, offset) => {
                  const column = group * COLUMN_SHAPES.length + offset;
                  const index = column * 2;
                  return (
                    <div
                      key={offset}
                      className={`flex flex-col gap-3 md:gap-6 ${shape.widthClass} flex-shrink-0`}
                    >
                      <div className={shape.tallFirst ? TALL : SHORT}>
                        <img
                          src={COMMUNITY_IMAGES[index % 16]}
                          alt="Community learning moment"
                          className="w-full h-full object-cover rounded-[2px] border border-white/30"
                          loading="lazy"
                        />
                      </div>
                      <div className={shape.tallFirst ? SHORT : TALL}>
                        <img
                          src={COMMUNITY_IMAGES[(index + 1) % 16]}
                          alt="Community learning moment"
                          className="w-full h-full object-cover rounded-[2px] border border-white/30"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
