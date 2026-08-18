"use client";

import Link from "next/link";

import { bookingLinkProps } from "@/data/company";
import { useEffect, useState } from "react";

/**
 * The persistent bottom CTA bar.
 *
 * The source used this slot for scarcity pricing — a struck-through price and a
 * five-minute countdown. Neither transfers to considered B2B engineering sales,
 * so the price/timer block now carries qualifying detail instead. Layout,
 * height, blur, borders and the lime CTA are unchanged.
 *
 * On visibility: the source ships an IntersectionObserver branch keyed on a
 * `#sticky-sentinel` element, but no such element exists anywhere in its DOM,
 * nor do any of its other candidate triggers. Every one was probed on the live
 * page and all are absent, so the code path that actually runs is this scroll
 * threshold.
 */
const SCROLL_THRESHOLD = 300;

export default function WorkshopSticky() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <>
      <div className="hidden md:block fixed bottom-0 left-0 w-full bg-black/60 backdrop-blur-md border-t border-white/40 shadow-lg z-50 font-fira-sans">
        <div className="w-[90%] md:w-[80%] mx-auto py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-[28px] font-medium text-white leading-[130%] tracking-[0.35%] font-fira-sans">Let&apos;s scope your build</h3>
          </div>
          <div className="flex items-center gap-6">
            <Link {...bookingLinkProps()} aria-label="Book a discovery call" className="bg-[#B4CC04] hover:bg-[#D4F005] text-black font-medium px-8 py-3 rounded-[2px] transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_8px_16px_-4px_rgba(180,204,4,0.4),_8px_8px_16px_-4px_rgba(180,204,4,0.4),_-8px_8px_16px_-4px_rgba(180,204,4,0.4)] text-lg whitespace-nowrap font-fira-sans">Book a Discovery Call</Link>
            <div className="h-12 w-px bg-white/70 hidden md:block"></div>
            <div className="flex flex-col items-start">
              <p className="text-xl font-medium text-white font-fira-sans">No cost, no obligation</p>
              <p className="text-sm text-gray-300 mt-1 font-fira-sans">We reply within 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-white/30 shadow-lg z-50 font-fira-sans">
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-[13px] font-normal text-white leading-tight truncate font-fira-sans">Let&apos;s scope your build</h3>
              <div className="mt-1 flex items-center gap-3">
                <p className="text-[10px] text-white font-fira-sans">No cost, no obligation</p>
                <p className="text-[9px] text-white/50 whitespace-nowrap font-fira-sans">Reply within 24h</p>
              </div>
            </div>
            <Link {...bookingLinkProps()} aria-label="Book a discovery call" className="shrink-0 bg-[#B4CC04] hover:bg-[#D4F005] text-black font-semibold px-2 py-2 rounded-[2px] transition-all duration-200 shadow-lg text-sm">Book a Discovery Call</Link>
          </div>
        </div>
      </div>
    </>
  );
}
