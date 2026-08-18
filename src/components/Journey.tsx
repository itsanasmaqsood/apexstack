/**
 * Art direction lives in `globals.css`: `.journey-bg-mobile` swaps the
 * background image at >=768px and `.journey-height` overrides the height
 * at the 1450px / 1550px breakpoints.
 */
export default function Journey() {
  return (
    <div className="w-full bg-[#08090A] text-white font-fira-sans" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] journey-bg-mobile" style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)", borderRight: "1px solid rgba(255, 255, 255, 0.2)", backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="relative py-12 md:py-28 h-[610px] journey-height">
          <div className="relative md:pl-[60px] md:pr-[60px] px-4">
            <p className="text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase text-white/60 mb-2">For every stage</p>
            <h2 className="text-[30px] md:text-[38px] leading-[120%] font-medium text-white mb-24">Who we build for</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
