import Image from "next/image";
import Link from "next/link";

import { LIVE_PORTFOLIO } from "@/data/portfolio";
import { PRODUCTS, PRODUCT_COUNT } from "@/data/products";

/**
 * The proof band, sitting directly above "One Team. The Whole Stack."
 *
 * WHY THIS SECTION EXISTS
 * The two studios this site is benchmarked against both put evidence in the
 * first screen after the headline — one leads with delivery statistics, the
 * other with named client case studies. Before this section the homepage went
 * from the hero straight into a wordless graphic, so a visitor met the claim
 * and then had nothing to test it against for two more scrolls.
 *
 * It is placed immediately before the "what we build" grid rather than after
 * it: the evidence that we ship has to land before the list of things we say
 * we can ship, or the list is just a menu of claims.
 *
 * Every figure and every name below is checkable by the reader in one click.
 * Nothing here is an estimate: the counts are computed from the catalogue
 * rather than typed, so they cannot drift out of date, and the only two
 * reported numbers on the site (Iqra's downloads and rating) are attributed to
 * the store listing they come from. No client names appear — permission for
 * those has not been given — which is why the evidence offered is our own
 * published work instead.
 */

/** Six with icons and live listings, ordered to show range rather than rank. */
const SHOWCASE = [
  "iqra",
  "safemama",
  "nutrinudge",
  "snapchef",
  "captionlab",
  "salafimatch",
] as const;

const IQRA = PRODUCTS.find((product) => product.slug === "iqra");

export default function Proof() {
  const showcase = SHOWCASE.map((slug) =>
    PRODUCTS.find((product) => product.slug === slug),
  ).filter((product) => product !== undefined);

  const onBothStores = PRODUCTS.filter(
    (product) => product.appStoreUrl && product.playStoreUrl,
  ).length;

  return (
    <section className="w-full bg-[#08090A] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[153px] py-16 md:py-24">
        {/* ------------------------------------------------------------- claim */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-[#B4CC04] text-xs uppercase tracking-[2px] mb-4">
            THE PROOF
          </p>
          <h2 className="text-white text-2xl md:text-[38px] leading-[1.2] font-medium mb-5">
            We ship our own products, not just decks
          </h2>
          <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
            Most agencies can only show you work they cannot name. We publish{" "}
            {PRODUCT_COUNT} apps of our own on the App Store and Google Play, under
            our own company. You can download any of them right now and judge the
            engineering yourself — before you have spoken to us.
          </p>
        </div>

        {/* -------------------------------------------------------------- facts */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-14 md:mb-20">
          <div className="border-t border-white/15 pt-5">
            <dt className="text-white text-2xl md:text-[34px] font-medium leading-none mb-2">
              {PRODUCT_COUNT}
            </dt>
            <dd className="text-[rgba(207,207,207,0.75)] text-sm leading-snug">
              Apps live on the App Store and Google Play
            </dd>
          </div>
          <div className="border-t border-white/15 pt-5">
            <dt className="text-white text-2xl md:text-[34px] font-medium leading-none mb-2">
              {LIVE_PORTFOLIO.length}
            </dt>
            <dd className="text-[rgba(207,207,207,0.75)] text-sm leading-snug">
              Web platforms running in production
            </dd>
          </div>
          <div className="border-t border-white/15 pt-5">
            <dt className="text-white text-2xl md:text-[34px] font-medium leading-none mb-2">
              {onBothStores}
            </dt>
            <dd className="text-[rgba(207,207,207,0.75)] text-sm leading-snug">
              Shipped on iOS and Android from one codebase
            </dd>
          </div>
          <div className="border-t border-white/15 pt-5">
            <dt className="text-white text-2xl md:text-[34px] font-medium leading-none mb-2">
              {IQRA?.downloads ?? "—"}
            </dt>
            <dd className="text-[rgba(207,207,207,0.75)] text-sm leading-snug">
              Downloads on Iqra, our largest app
            </dd>
          </div>
        </dl>

        {/* ------------------------------------------------------------ the apps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 mb-12">
          {showcase.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col items-start"
            >
              {product.icon && (
                /* next/image, not a raw <img>: the store icons in public/products
                   are 512x512 masters (up to 390 KB each) and this box paints
                   them at 56px, so six of them cost ~142 KB of the wrong pixels.
                   Routed through the optimiser they arrive as ~64px AVIF. No
                   `sizes` on purpose — the box is a fixed 56px, so Next emits a
                   two-entry 1x/2x srcSet; passing `sizes` would switch it to the
                   full 16-width responsive set for no benefit. */
                <Image
                  src={product.icon}
                  alt=""
                  width={56}
                  height={56}
                  loading="lazy"
                  /* Desaturated at rest so six loud app icons do not fight the
                     page, and so the row reads as one set rather than six brands.
                     Colour returns on hover — the icon is the real thing, and
                     the reveal rewards the pointer that is already heading for
                     the link. `filter` is GPU-composited, so this stays cheap. */
                  className="w-14 h-14 rounded-[22%] border border-white/15 mb-3 grayscale opacity-70 transition-[filter,opacity,border-color] duration-300 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:border-[#B4CC04]/70 motion-reduce:transition-none"
                />
              )}
              <span className="text-white text-sm font-medium group-hover:text-[#B4CC04] transition-colors">
                {product.name}
              </span>
              <span className="text-[rgba(207,207,207,0.6)] text-xs leading-snug mt-1">
                {product.category}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
          <Link
            href="/products"
            className="text-white text-sm underline underline-offset-4 hover:text-[#B4CC04] transition-colors"
          >
            All {PRODUCT_COUNT} products
          </Link>
          <Link
            href="/portfolio"
            className="text-white/60 text-sm underline underline-offset-4 hover:text-white transition-colors"
          >
            Platforms we have built
          </Link>
        </div>
      </div>
    </section>
  );
}
