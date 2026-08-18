import Image from "next/image";

import type { ClusterImage } from "@/data/blog/imagery";

/**
 * The cluster illustration, as a banner.
 *
 * `object-position: right` is the load-bearing detail. These images put their
 * subject in the right-hand third and leave the left in shadow, so cropping a
 * 3.75:1 source into a shorter band from the centre — the browser default —
 * would cut the figure out and leave a rectangle of dark rock. Anchoring right
 * keeps the subject in frame at every width.
 *
 * Rendered through `next/image` rather than a raw tag so it is served as AVIF
 * or WebP by negotiation, and because a fixed aspect box plus intrinsic
 * dimensions means it cannot shift layout as it loads.
 */

interface BlogBannerProps {
  image: ClusterImage;
  /** `hero` for the top of a page, `band` for a section divider. */
  size?: "hero" | "band";
  /**
   * Set only on the one banner above the fold. It becomes the LCP element, and
   * marking more than one destroys the point of marking any.
   */
  priority?: boolean;
}

const HEIGHTS: Record<NonNullable<BlogBannerProps["size"]>, string> = {
  hero: "h-[150px] sm:h-[190px] md:h-[260px]",
  band: "h-[104px] md:h-[136px]",
};

export default function BlogBanner({
  image,
  size = "hero",
  priority = false,
}: BlogBannerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[2px] border border-white/15 bg-[#08090A] ${HEIGHTS[size]}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        // The banner spans the rail interior, which caps at roughly 1150px on a
        // wide screen and runs full-bleed below the breakpoint.
        sizes="(min-width: 1024px) 1150px, 100vw"
        className="object-cover object-right"
      />
    </div>
  );
}
