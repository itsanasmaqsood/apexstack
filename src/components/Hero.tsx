import Link from "next/link";

import { bookingLinkProps } from "@/data/company";
import { PORTFOLIO_COUNT } from "@/data/portfolio";
import { PRODUCT_COUNT } from "@/data/products";

import HeroStatements from "@/components/HeroStatements";
import Navbar from "@/components/Navbar";
import SpotlightReveal from "@/components/originkit/ui/image-spotlight";

/**
 * The desktop hero artwork.
 *
 * Declared once because it is referenced twice — by the `<picture>` source and
 * by SpotlightReveal — and the two must stay identical. If they diverge, a
 * desktop visitor downloads both files: `display:none` on the `<picture>` does
 * not prevent the fetch, which is the whole reason that `<source>` exists.
 *
 * The artwork is a brutalist corridor, pre-darkened to 60% on the way into
 * webp. That step matters: `SpotlightReveal` works by laying a near-black veil
 * over the image and lifting it around the cursor, so a source with bright
 * highlights stays readable through the veil and the reveal reads as a smudge
 * instead of a light. This frame has lit openings at both edges, which is
 * exactly what would punch through; dropping the gain first gives the spotlight
 * somewhere to travel.
 *
 * Earlier artwork is still at `/brand/hero-desktop.webp`,
 * `/brand/hero-structure.webp` and `/brand/hero-wave.webp`, all untouched.
 * Reverting is a one-line change to this constant.
 */
const DESKTOP_HERO = "/brand/hero-corridor.webp";

/**
 * The same artwork, cover-cropped to the 750x1062 portrait slot and darkened by
 * the same 0.60 gain, so the two breakpoints match.
 *
 * Cropped from the RIGHT edge, not the centre. This frame is lit at both sides
 * and near-black through the middle, so a centre crop produced a 2 KB file that
 * was almost entirely black. The right edge carries the curved span, the
 * columns and the steps, and keeps the top dark where the navbar and headline
 * sit over it.
 *
 * The previous mobile artwork is still at `/brand/hero-mobile.webp` and
 * `/brand/hero-wave-mobile.webp`.
 */
const MOBILE_HERO = "/brand/hero-corridor-mobile.webp";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="relative w-full h-[720px] md:h-screen overflow-hidden font-fira-sans">
        {/*
          Mobile keeps the plain image. The spotlight is driven entirely by
          `pointermove`, which a touch screen never fires, so on a phone the veil
          would simply sit there at full opacity and black the artwork out.

          The `<source>` is not decoration. Without it this <picture> resolved to
          hero-mobile.webp at every width, so a desktop visitor downloaded 42 KB
          of phone artwork it never paints. Pointing the desktop branch at the
          file SpotlightReveal is already fetching costs nothing — same URL, one
          request — and it carries the `fetchPriority="high"` hint onto the image
          that is actually the desktop LCP, which SpotlightReveal exposes no prop
          for.
        */}
        <picture className="absolute inset-0 md:hidden">
          <source media="(min-width: 768px)" srcSet={DESKTOP_HERO} />
          <img src={MOBILE_HERO} alt="" aria-hidden="true" loading="eager" fetchPriority="high" width={750} height={1062} className="h-full w-full object-cover object-center" />
        </picture>

        {/*
          Desktop: the artwork under a dark veil that lifts around the cursor.

          Three of the component's own preset values are overridden because they
          are tuned for a small framed image, not a full-bleed hero:
            rounded    20 -> 0    a rounded corner on a full-bleed hero shows the
                                  page background through the gap
            size      230 -> 520  a 230px circle reads as a torch on a 1440px
                                  hero; 520 reveals a whole district
            visibility  8 -> 42   8 means a 92% black veil. Even at 26 it buried
                                  the lit canyon, which is the strongest thing in
                                  the frame; 42 darkens enough to lift the text
                                  and still leaves the artwork readable
        */}
        <div className="absolute inset-0 hidden md:block">
          <SpotlightReveal
            image={{ src: DESKTOP_HERO, alt: "" }}
            mode="followCursor"
            fit="cover"
            focusY={50}
            size={520}
            visibility={42}
            rounded={0}
            veilColor="#08090A"
            transition={{ type: "tween", duration: 0.45, ease: "easeOut" }}
          />
        </div>
        <div
          className="relative z-10 flex flex-col justify-center h-full w-[90%] md:w-auto mx-auto md:mx-[153px] md:pointer-events-none [&_a]:pointer-events-auto"
          style={{
            borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
            borderRight: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Nudged down off the exact vertical centre. The navbar sits over the
              top of the hero, so true centring reads as slightly high — this
              settles the block optically rather than mathematically. */}
          <div className="w-full max-w-3xl mx-auto px-4 md:px-8 text-center flex flex-col items-center pt-16 md:pt-24">
            <h1 className="text-base md:text-[20px] font-normal text-white/60 mb-3 leading-relaxed">Your technology partner from idea to scale.</h1>
            <HeroStatements />
            <p className="text-base font-[400] md:text-[20px] text-white/60 mb-10 md:mb-12 max-w-[620px] leading-relaxed">From product development to launch, automation, growth, SEO, GEO, and AI visibility, ApexStack handles the technology behind your business.</p>
            <div className="flex flex-row justify-center gap-8 mb-4 md:mb-0 md:hidden">
              <div>
                <div className="text-gray-300 text-xs">First Response</div>
                <div className="text-white text-sm font-medium">Within 24 Hours</div>
              </div>
              <div>
                <div className="text-gray-300 text-xs">Delivery</div>
                <div className="text-white text-sm font-medium">Global, Remote-First</div>
              </div>
            </div>
            {/*
              Three columns on desktop, with the two outer ones sharing the
              remaining width equally (`1fr auto 1fr`). That is what puts the
              button on the true centre line of the hero: a plain flex row would
              centre the group, so the button itself would sit off-centre by half
              the difference between the two labels' widths.
            */}
            <div className="w-full flex flex-col items-center gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10">
              <div className="hidden md:block md:text-right">
                <div className="text-gray-300 text-xs">First Response</div>
                <div className="text-white text-sm md:text-base font-medium">Within 24 Hours</div>
              </div>

              {/* Was a <button> with no destination on the source site. As an anchor
                  it actually navigates; the centering utilities keep it pixel-identical. */}
              <Link {...bookingLinkProps()} className="border border-[#62626266]/40 bg-[#B4CC04] hover:bg-[#D4F005] text-black font-normal px-5 py-[10px] w-[251px] rounded-[4px] transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_8px_16px_-4px_rgba(180,204,4,0.4),_8px_8px_16px_-4px_rgba(180,204,4,0.4),_-8px_8px_16px_-4px_rgba(180,204,4,0.4)] text-sm md:text-base inline-flex items-center justify-center">Book a Discovery Call</Link>

              <div className="hidden md:block md:text-left">
                <div className="text-gray-300 text-xs">Delivery</div>
                <div className="text-white text-sm md:text-base font-medium">Global, Remote-First</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
        Proof, moved out of the hero and below the fold.

        It used to sit inside the `h-screen` block, so on a laptop it competed
        with the headline and the call to action for the one screen a first-time
        visitor sees. Numbers are more persuasive after the claim than beside it.

        Placing it outside that block rather than pushing it down with margin is
        deliberate: a margin that clears the fold at 900px tall does not clear it
        at 1200px. Sitting after a 100vh element puts it below the fold at every
        viewport height by construction.

        Counts come straight from the catalogues; the download figure is the one
        number the founders supplied. Nothing here is estimated.
      */}
      <div className="w-full bg-[#08090A]" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}>
        <div
          className="w-[90%] md:w-auto mx-auto md:mx-[153px]"
          style={{
            borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
            borderRight: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div className="w-full grid grid-cols-3 text-white py-10 md:py-12 px-4 md:px-[60px]">
            {[
              { figure: `${PRODUCT_COUNT} Apps`, caption: "Live on iOS & Android" },
              { figure: `${PORTFOLIO_COUNT} Platforms`, caption: "Web products in production" },
              { figure: "150,000+", caption: "Downloads on our top app" },
            ].map((stat, i) => (
              <div
                key={stat.figure}
                className={`px-3 md:px-6 ${i > 0 ? "border-l border-white/15" : ""}`}
              >
                <div className="text-lg md:text-2xl font-normal leading-tight">
                  {stat.figure}
                </div>
                <div className="text-[13px] md:text-base text-gray-400 mt-1.5 leading-snug">
                  {stat.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
