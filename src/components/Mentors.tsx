"use client";

import { useRef } from "react";

const MENTOR_COUNT = 15;
const DESKTOP_SCROLL_AMOUNT = 324;
const MOBILE_SCROLL_AMOUNT = 296;
const DESKTOP_BREAKPOINT = 768;

export default function Mentors() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const rail = scrollRef.current;
    if (!rail) {
      return;
    }

    const amount =
      window.innerWidth >= DESKTOP_BREAKPOINT
        ? DESKTOP_SCROLL_AMOUNT
        : MOBILE_SCROLL_AMOUNT;

    rail.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div
      data-section-theme="light "
      className="w-full  font-fira-sans"
      style={{
        borderTop: "1px solid rgba(8, 9, 10, 0.2)",
        borderBottom: "1px solid rgba(8, 9, 10, 0.2)",
      }}
    >
      <div
        className="w-[90%] md:w-auto mx-auto md:mx-[153px]"
        style={{
          borderLeft: "1px solid rgba(8, 9, 10, 0.2)",
          borderRight: "1px solid rgba(8, 9, 10, 0.2)",
        }}
      >
        <div className="px-4 md:px-0 md:pl-[60px] md:pr-[60px] pt-10">
          <div className="mb-12">
            <p className="text-black text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase mb-4">
              THE PEOPLE ON YOUR PROJECT
            </p>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* TODO: replace with real team photos, names and roles. The rail is
                  already structured for it — only the slide data changes. */}
              <h2 className="text-black text-[30px] md:text-[38px] leading-[120%] font-medium">
                Senior engineers, not a rotating bench
              </h2>
              <div className="hidden md:flex gap-3">
                <button
                  type="button"
                  aria-label="Scroll mentors left"
                  onClick={() => scroll("prev")}
                  className="w-10 h-10 border border-black/40 rounded flex items-center justify-center"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Scroll mentors right"
                  onClick={() => scroll("next")}
                  className="w-10 h-10 bg-black text-white rounded flex items-center justify-center"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden pb-16">
          <div className="-mx-4 md:mx-0">
            <div
              ref={scrollRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pl-4 pr-4 md:pl-[60px] md:pr-0"
            >
              {Array.from({ length: MENTOR_COUNT }, (_, i) => i + 1).map((n) => (
                <div key={n} className="flex-shrink-0 w-[280px] md:w-[300px]">
                  <img
                    src={`/brand/ph/team-${String(n).padStart(2, "0")}.webp`}
                    alt="ApexStack engineer"
                    width={300}
                    height={420}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
