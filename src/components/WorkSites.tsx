import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import RoundCarousel from "@/components/originkit/ui/round-carousel";
import { WORK_SITES } from "@/data/work-sites";

/**
 * "Sites we built" — a 3D ring of live-site screenshots, with the same sites
 * listed underneath as real links.
 *
 * The list is not decoration. `RoundCarousel` renders its cards as background
 * images on `aria-hidden` divs, so on its own it is invisible to a screen
 * reader and to a crawler alike — eight empty boxes and no outbound links.
 * The grid below carries the names, the one-line summaries and the anchors, so
 * the section works with the animation, without it, and with no CSS at all.
 *
 * The ring is deliberately the smaller half of the section. It is evidence
 * presented attractively; the thing a buyer actually acts on is a link to a
 * site they can open and judge for themselves.
 */
export default function WorkSites() {
  return (
    <Section theme="dark" padding="py-16 md:py-20">
      <div className="max-w-2xl mb-10">
        <Eyebrow className="mb-4">SITES WE BUILT</Eyebrow>
        <SectionHeading className="mb-4">
          {WORK_SITES.length} live sites you can open right now
        </SectionHeading>
        <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-relaxed">
          Product marketing sites, a matrimonial platform, a creative
          director&rsquo;s portfolio and a Japanese steel fabricator. Drag the
          ring, or open any of them below and judge the work directly.
        </p>
      </div>

      {/* Fixed height rather than aspect-derived: the ring's radius is computed
          from card width, so the space it needs does not track the viewport. */}
      <div className="h-[300px] md:h-[420px] -mx-4 md:mx-0 mb-12 select-none">
        <RoundCarousel
          images={WORK_SITES.map((site) => ({ src: site.image }))}
          imageWidth={380}
          imageHeight={238}
          spacing={2}
          speed={4}
          tilt={-6}
          perspective={2600}
          cornerRadius={6}
          innerDim={2}
          background="transparent"
        />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
        {WORK_SITES.map((site) => (
          <li key={site.url} className="border-t border-white/15 pt-4">
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B4CC04]"
            >
              <span className="block text-white text-[15px] font-medium mb-1 group-hover:text-[#B4CC04] transition-colors">
                {site.name}
              </span>
              <span className="block text-white/50 text-[13px] leading-[1.5]">
                {site.summary}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
