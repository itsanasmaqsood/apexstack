import Link from "next/link";

import { bookingLinkProps } from "@/data/company";

import type { BrandLogo, BusinessBenefit } from "@/types";

/**
 * "Engineering Partners, Not Just Developers" — the /business anchor target.
 *
 * The rails here are rgba(255,255,255,0.15), a shade lighter than the 0.2 used
 * by the rest of the page. The benefit icons were served from CloudFront and
 * are mirrored under /cdn.
 */
const benefits: BusinessBenefit[] = [
  {
    title: "We start with the problem, not the brief",
    description:
      "Plenty of software gets built exactly to spec and still fails, because the spec was wrong. Discovery is where we find that out — before it costs you a quarter.",
    icon: "/cdn/osbn1.svg",
  },
  {
    title: "One team from architecture to production",
    description:
      "No handoffs between an agency, a design studio and a DevOps contractor. The people who designed the system are the people who run it on launch day.",
    icon: "/cdn/osbn2.svg",
  },
  {
    title: "Built to be handed over",
    description:
      "Documented architecture, tested code and infrastructure your own engineers can operate. You should be able to take the project in-house whenever you choose.",
    icon: "/cdn/osbn3.svg",
  },
  {
    title: "We stay after launch",
    description:
      "Monitoring, iteration and scaling as usage grows. Shipping is the middle of an engagement — most of what determines cost happens after it.",
    icon: "/cdn/osbn4.svg",
  },
];

/**
 * Logo row. Every logo carries its own hand-tuned pixel size per viewport, set
 * inline on the original page — there is no shared scale to derive them from.
 * The mobile layout splits these into a row of four then a row of three.
 *
 * The `name` values are deliberately generic. The image files are still the
 * source site's and are pending replacement; labelling them with real company
 * names would assert client relationships ApexStack has not verified.
 *
 * TODO: replace src + name together with cleared client or partner marks.
 */
const brands: BrandLogo[] = [
  {
    name: "Partner logo 1",
    src: "/brand/ph/partner-1.webp",
    desktop: { width: 120, height: 60 },
    mobile: { width: 80, height: 40 },
  },
  {
    name: "Partner logo 2",
    src: "/brand/ph/partner-2.webp",
    desktop: { width: 130, height: 65 },
    mobile: { width: 85, height: 45 },
  },
  {
    name: "Partner logo 3",
    src: "/brand/ph/partner-3.webp",
    desktop: { width: 60, height: 60 },
    mobile: { width: 50, height: 50 },
  },
  {
    name: "Partner logo 4",
    src: "/brand/ph/partner-4.webp",
    desktop: { width: 80, height: 50 },
    mobile: { width: 70, height: 40 },
  },
  {
    name: "Partner logo 5",
    src: "/brand/ph/partner-5.webp",
    desktop: { width: 150, height: 80 },
    mobile: { width: 70, height: 30 },
  },
  {
    name: "Partner logo 6",
    src: "/brand/ph/partner-6.webp",
    desktop: { width: 160, height: 90 },
    mobile: { width: 75, height: 55 },
  },
  {
    name: "Partner logo 7",
    src: "/brand/ph/partner-7.webp",
    desktop: { width: 250, height: 100 },
    mobile: { width: 140, height: 65 },
  },
];

const mobileTopRow = brands.slice(0, 4);
const mobileBottomRow = brands.slice(4);

export default function Business() {
  return (
    <div
      className="w-full bg-[#08090A] font-fira-sans"
      id="business"
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.15)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      <div
        className="w-[90%] md:w-auto mx-auto md:mx-[153px]"
        style={{
          borderLeft: "1px solid rgba(255, 255, 255, 0.15)",
          borderRight: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <div className="px-4 md:px-[60px] py-14 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
            <div className="md:w-3/4">
              <p className="text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase text-white mb-4">
                Why ApexStack
              </p>
              <h2 className="text-[30px] md:text-[38px] leading-[120%] font-medium text-white mb-2">
                Engineering Partners,
              </h2>
              <h2 className="text-[30px] md:text-[38px] leading-[120%] font-medium text-white mb-4 md:mb-8">
                Not Just Developers
              </h2>
              {/* Source reads `text-[#CFCFCFE5]/90`, which computes to
                  rgba(207,207,207,0.9) under v3 -- there the /90 REPLACED the
                  hex's E5 alpha. v4 multiplies them instead (0.898 x 0.9 = 0.808),
                  reading visibly dimmer. Spelling the colour as rgba avoids both
                  that and v4's Lab round-trip, which lands a channel off by 1. */}
              <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base">
                Anyone can write code to a specification. The value is in knowing
                which system to build, what it will cost to run, and what happens
                to it eighteen months from now.
              </p>
            </div>
            <div className="hidden md:flex md:w-1/4 justify-end">
              <Link {...bookingLinkProps()} className="px-6 py-3 text-black border bg-[#b4cc04] border-white/30 rounded-[2px] hover:bg-white hover:text-black transition">
                Book a Discovery Call
              </Link>
            </div>
          </div>
          <p className="text-base font-medium text-white mb-6">
            What working with us actually looks like
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 md:p-4"
              >
                <div className="w-[52px] h-[52px] min-w-[52px] flex-shrink-0 flex items-center justify-center bg-white/10 rounded-lg">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    // Lazy: this section is well below the fold on the homepage,
                    // and an eager <img> makes React emit an unscoped SSR image
                    // preload that competes with the hero. Arriving via the
                    // #business anchor still loads it immediately — a lazy image
                    // already inside the viewport is fetched at once.
                    loading="lazy"
                    className="w-[52px] h-[52px] md:w-12 md:h-12 object-contain grayscale rounded-none"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-base font-medium mb-2 leading-tight">
                    {benefit.title}
                  </h3>
                  {/* md:leading-6 is a Tailwind v4 compatibility patch, not source
                      drift. In v3 `md:text-base` was emitted after `leading-snug`
                      and its 1.5rem line-height won at >=768px (measured 16px/24px);
                      v4 lets leading-snug win, costing 12px of section height. */}
                  <p className="text-[rgba(207,207,207,0.9)] text-[14px] md:text-base leading-snug md:leading-6">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <div className="w-full mt-10 pt-0 py-10">
              <div className="w-full mx-auto">
                <h3 className="text-base font-medium text-white mb-8">
                  Platforms and partners we build on
                </h3>
                <div className="px-0">
                  <div className="md:hidden flex flex-col gap-4">
                    <div className="flex gap-4 justify-center items-center">
                      {mobileTopRow.map((brand) => (
                        <div
                          key={brand.name}
                          className="flex items-center justify-center"
                          style={{ width: "calc(25% - 12px)" }}
                        >
                          <img
                            src={brand.src}
                            alt=""
                            loading="lazy"
                            className="object-contain grayscale"
                            style={{
                              width: `${brand.mobile.width}px`,
                              height: `${brand.mobile.height}px`,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4 ">
                      {mobileBottomRow.map((brand) => (
                        <div
                          key={brand.name}
                          className="flex items-center justify-center"
                        >
                          <img
                            src={brand.src}
                            alt=""
                            loading="lazy"
                            className="object-contain grayscale"
                            style={{
                              width: `${brand.mobile.width}px`,
                              height: `${brand.mobile.height}px`,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex gap-8 justify-start items-center">
                    {brands.map((brand) => (
                      <div
                        key={brand.name}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={brand.src}
                          alt=""
                          loading="lazy"
                          className="object-contain grayscale"
                          style={{
                            width: `${brand.desktop.width}px`,
                            height: `${brand.desktop.height}px`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center md:hidden ">
            <Link {...bookingLinkProps()} className="w-full text-black border bg-[#b4cc04] border-white/60 rounded-[2px] px-6 py-3 text-center">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
