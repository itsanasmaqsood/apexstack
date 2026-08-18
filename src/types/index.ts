/** Content shapes for the ApexStack homepage. */

export interface FaqItem {
  question: string;
  answer: string;
}

/** A person card in "With the trust of 80+ Angel Investors". */
export interface Investor {
  name: string;
  title: string;
  image: string;
}

/** A background-image tile in "One Weekend. Lifetime of AI Skills." */
export interface SkillCard {
  title: string;
  description: string;
  image: string;
  /** Tailwind width class for the desktop row, e.g. "md:w-[60%]". */
  widthClass: string;
  /**
   * Destination for the whole tile. Optional because the tile already looks
   * clickable (`cursor-pointer` plus the expand chip); without an href that
   * affordance lies, so a card with no href must drop the pointer cursor.
   */
  href?: string;
  /**
   * `background-position` for the tile art. Defaults to `center center`, which
   * suits artwork with a centred subject. Set it where the subject sits off to
   * one side and centring would crop it out of a 416px-tall tile.
   */
  position?: string;
}

/** One of the five weekend sessions. */
export interface CurriculumSession {
  /** Sidebar label, e.g. "GETTING STARTED WITH GENERATIVE AI". */
  navLabel: string;
  /** e.g. "DAY 1 • SESSION 1 • 10 AM - 2 PM IST". */
  schedule: string;
  title: string;
  summary: string;
  /** Used at every breakpoint. */
  image: string;
  bullets: string[];
}

/** A video card in the "Monday Morning. Different Person." rail. */
export interface VideoTestimonial {
  name: string;
  role: string;
  /** Gumlet HLS manifest. */
  videoUrl: string;
  /** Gumlet poster frame, used as the <video> poster. */
  thumbnail: string;
}

/** A course tile in "Ready for More? Explore Advanced Programs". */
export interface CourseCard {
  title: string;
  description: string;
  image: string;
  meta: { icon: string; label: string }[];
  /** Same contract as SkillCard.href — no href means no `cursor-pointer`. */
  href?: string;
}

/** A "Why ApexStack" pillar. */
export interface BusinessBenefit {
  title: string;
  description: string;
  icon: string;
}

/** A logo in the "Brands in Collaboration" row. */
export interface BrandLogo {
  name: string;
  src: string;
  desktop: { width: number; height: number };
  mobile: { width: number; height: number };
}

/** A footer link column. */
export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}
