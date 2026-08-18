import IndustryHub from "@/components/IndustryHub";

/**
 * The seven sectors we build for. The same seven render twice: a seven-column
 * desktop grid and a horizontally scrolling mobile rail.
 *
 * This slot is the page's credibility position, directly below the hero. It
 * holds industry expertise until named client logos are cleared for public use
 * — at which point only this array changes, not the markup.
 */
export default function Investors() {
  return (
    <div className="bg-[#08090A] w-full font-fira-sans " style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px]" style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)", borderRight: "1px solid rgba(255, 255, 255, 0.2)" }}>
        <div className="px-4 md:px-0 md:pl-[60px] md:pr-[60px] py-16">
          <div className="-mx-4 md:mx-0">
            <IndustryHub />
          </div>

        </div>
      </div>
    </div>
  );
}
