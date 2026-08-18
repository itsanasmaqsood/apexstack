"use client";

import Link from "next/link";

import ScrambleText from "@/components/originkit/ui/scrambletext";
import { bookingLinkProps } from "@/data/company";
import { useEffect, useState } from "react";

/**
 * A top-level navigation entry. Local to the navbar rather than `@/types`
 * because nothing else on the page consumes it.
 */
interface NavLink {
  label: string;
  href: string;
  /** Rendered with `target="_blank" rel="noopener noreferrer"`. */
  external?: boolean;
}

/**
 * Three links only. Industries and Careers still exist and are still reachable
 * from the footer and the sitemap — they are simply not competing for attention
 * in the top bar.
 */
const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "How We Work", href: "/process" },
  { label: "Blog", href: "/blog" },
];

/**
 * The original pointed this slot at an external LMS. ApexStack has no such
 * product, so the slot carries the secondary conversion path instead — and
 * unlike the source's `#contact`, this one resolves.
 */
const CONTACT_HREF = "/contact";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // The live site locks the page behind the open panel.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="hidden md:block text-center">
        <div className="w-full border-b font-fira-sans transition-all duration-300 border-white/20 bg-transparent">
          <div className="w-[90%] md:w-[80%] mx-auto">
            <nav>
              <div className="px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                  <div className="flex items-center">
                    <Link href="/" aria-label="ApexStack home" className="rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B4CC04]">
                      <img src="/brand/apexstack-logo.png" alt="ApexStack" width="169" height="40" className="h-10 w-auto cursor-pointer" />
                    </Link>
                  </div>
                  <div className="flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="group text-base font-normal px-3 py-2 cursor-pointer relative z-10 whitespace-nowrap [&>div]:!w-auto [&>div]:!h-auto [&>div]:!inline-flex [&>div>p]:!inline [&>div>span]:!inline [&_span]:!whitespace-nowrap"
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        {/*
                          ScrambleText owns the label. `enterAnimation.mode` is
                          "none" because a nav item should not perform on page
                          load; the effect belongs to hover, where the diffusion
                          mode scrambles the characters nearest the cursor and
                          settles them again.

                          Its root is a full-size centred flex box built for a
                          standalone Framer frame, so the `!` variants collapse it
                          to an inline label. `font={{}}` is required — unset, the
                          component's defaults impose Inter at 120px.
                        */}
                        <ScrambleText
                          words={link.label}
                          tag="span"
                          color="#FFFFFFB3"
                          font={{}}
                          enterAnimation={{ mode: "none" }}
                          hoverAnimation={{
                            type: "diffusion",
                            lines: "oneLine",
                            radius: 3,
                            collapse: true,
                            collapseTime: 0.5,
                            glitchChars: "abcdefghijklmnopqrstuvwxyz",
                            glitchShuffle: true,
                          }}
                        />
                      </a>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href={CONTACT_HREF} className="hidden md:block text-white/50 hover:text-white hover:bg-white/10 w-[120px] font-normal text-base px-4 py-3 rounded-[2px] transition-all duration-200">Contact</a>
                    <a {...bookingLinkProps()} className="bg-white hover:bg-[#ffffff]/30 hover:text-white text-black font-medium px-6 py-3 rounded-[2px] transition-all duration-200 text-base text-center inline-block">Book a Discovery Call</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="w-full border-b font-fira-sans transition-all duration-300 border-white/20 bg-transparent">
          <div className="w-[90%] md:w-[80%] mx-auto">
            <nav>
              <div className="px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                  <div className="flex items-center">
                    <Link href="/" aria-label="ApexStack home" onClick={() => setIsMenuOpen(false)} className="rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B4CC04]">
                      <img src="/brand/apexstack-logo.png" alt="ApexStack" width="135" height="32" className="h-8 w-auto cursor-pointer" />
                    </Link>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="flex flex-col items-center justify-center w-8 h-8 space-y-1"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  >
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
                  </button>
                </div>
                {isMenuOpen && (
                  <>
                    <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsMenuOpen(false)}></div>
                    <div className="fixed inset-x-4 top-20 z-50 bg-[#1A1B1C]/95 backdrop-blur-[34px] border border-white/20 rounded-[2px] p-6 shadow-2xl">
                      <div className="space-y-2 mb-4">
                        {NAV_LINKS.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="block text-white text-base font-normal hover:bg-white/5 py-3 px-3 rounded-[2px] transition-all duration-200 cursor-pointer"
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                      <div className="border-t border-white/10 my-4"></div>
                      <div className="flex gap-3">
                        <Link href="/services" onClick={() => setIsMenuOpen(false)} className="flex-1 border bg-white/10 text-white transition-all duration-500 border-white/40 font-medium py-3 rounded-[2px] text-sm hover:bg-white/20 text-center">View Services</Link>
                        <a {...bookingLinkProps()} onClick={() => setIsMenuOpen(false)} className="flex-1 bg-white hover:bg-gray-100 text-black font-medium py-3 rounded-[2px] transition-all duration-200 text-sm text-center">Book a Call</a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
