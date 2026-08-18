import Link from "next/link";

import type { SkillCard } from "@/types";

/**
 * Five background-image tiles across two rows: 60/40 on the first,
 * three equal thirds on the second. The grayscale hover and the lime
 * `.icon-box` hover live in `globals.css` -- nothing inline here.
 *
 * Each tile links to its service page. Previously they were bare divs
 * carrying `cursor-pointer`, so the homepage — the highest-authority URL
 * on the domain — passed nothing to the service pages from its body, and
 * a visitor clicking a tile got nothing.
 */
const SKILL_CARDS: SkillCard[] = [
  {
    title: "Custom Software & Enterprise Systems",
    description: "SaaS platforms, CRM and ERP, internal tools and the systems your operation actually runs on",
    // Replaces the source site's stock portrait, which carried its visual
    // identity rather than ours. `nhc1.webp` is left in place, unused.
    //
    // Briefly swapped for `custom-software-stack.webp` (the isometric stack
    // with capability icons) and reverted: at tile scale its icon cards
    // collided with the heading and subheading sitting over the top-left.
    // That file stays on disk if it finds a better home.
    image: "custom-software",
    widthClass: "md:w-[60%]",
    href: "/services/custom-software-development",
  },
  {
    title: "AI Products & Agents",
    description: "Production AI features, autonomous agents and model integration",
    image: "hc20",
    widthClass: "md:w-[40%]",
    href: "/services/ai-development",
  },
  {
    title: "Web & Mobile Applications",
    description: "Web apps, iOS and Android, shipped to the stores",
    image: "hc6",
    widthClass: "md:w-1/3",
    href: "/services/web-development",
  },
  {
    title: "Cloud, DevOps & APIs",
    description: "Infrastructure, CI/CD pipelines and integration layers",
    image: "hc2",
    widthClass: "md:w-1/3",
    href: "/services/cloud-devops",
  },
  {
    title: "Business Process Automation",
    description: "Replace manual workflows with systems that run themselves",
    // Replaces the source site's chrome treble clef. `hc3.webp` stays on disk,
    // unused, in case this needs reverting.
    image: "process-automation",
    widthClass: "md:w-1/3",
    href: "/services/automation",
  },
];

function SkillTile({ card }: { card: SkillCard }) {
  return (
    <div
      className={`skill-card relative ${card.widthClass} rounded-[4px] overflow-hidden ${card.href ? "cursor-pointer" : ""} `}
      style={{
        height: "416px",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        backgroundSize: "cover",
        backgroundPosition: card.position ?? "center center",
        backgroundImage: `url("/home/${card.image}.webp")`,
      }}
    >
      <div className="relative h-full flex flex-col justify-between p-4">
        <div className="flex justify-between items-start gap-4">
          <div className="min-w-0 flex-1">
            {/* md:leading-6 is a Tailwind v4 compatibility patch: an arbitrary
                `text-[18px]` set only font-size in v3, so the line-height stayed
                at text-base's 1.5rem (measured 18px/24px). v4 gives arbitrary
                sizes a default 1.5 leading, which would render 27px. */}
            <h3 className="text-white text-base md:text-[18px] md:leading-6 font-normal mb-2">
              {/* The heading is the anchor so the crawlable link text stays the
                  service name, while `after:inset-0` stretches the hit area over
                  the whole tile — matching the cursor the tile already showed. */}
              {card.href ? (
                <Link
                  href={card.href}
                  className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {card.title}
                </Link>
              ) : (
                card.title
              )}
            </h3>
            <p className="text-white/50 text-xs md:text-sm">{card.description}</p>
          </div>
          <div className="icon-box w-7 h-7 min-w-[28px] flex-shrink-0 rounded flex items-center justify-center">
            <img src="/home/exp.svg" alt="Icon" className="w-3 h-3 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Program() {
  return (
    <div className="w-full bg-[#08090A] font-fira-sans " style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)", borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px]" style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)", borderRight: "1px solid rgba(255, 255, 255, 0.2)" }}>
        <div className="px-4 md:px-0 md:pl-[60px] md:pr-[60px] py-16">
          <div className="mb-12">
            <p className="text-white text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase mb-4">WHAT WE BUILD</p>
            <h2 className="text-white text-[30px] md:text-[38px] leading-[120%] font-medium">One Team. The Whole Stack.</h2>
            <p className="text-white/50 text-[14px] font-normal md:text-base mt-4 max-w-3xl">Most companies stitch together an agency, a design studio and a DevOps contractor, then spend the project managing the seams. We hold architecture, design, engineering and infrastructure in one team — so nobody hands your problem to somebody else.</p>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              {SKILL_CARDS.slice(0, 2).map((card) => (
                <SkillTile key={card.image} card={card} />
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {SKILL_CARDS.slice(2).map((card) => (
                <SkillTile key={card.image} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
