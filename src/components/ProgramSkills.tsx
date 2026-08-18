/**
 * "Production tools, not experiments" — the tool wall.
 *
 * Tiles are ApexStack-set type rather than vendor logos: naming the
 * technologies we build on is factual, while reproducing their marks would
 * imply a partnership or endorsement that does not exist.
 *
 * This section ships two entirely different trees and keeps
 * both in the DOM, swapping them with `hidden md:block` / `block md:hidden`:
 * a four-row grid of tool tiles under a gradient veil on desktop, and a fanned
 * card deck on mobile. Both are reproduced verbatim below.
 */
export default function ProgramSkills() {
  return (
    <>
      <div className="hidden md:block">
        <div
          data-section-theme="light"
          className="w-full bg-white font-fira-sans relative"
          style={{
            borderTop: "1px solid rgba(8, 9, 10, 0.2)",
            borderBottom: "1px solid rgba(8, 9, 10, 0.2)",
          }}
        >
          {/*
            Everything in this section is lazy. It sits several screens below the
            fold, but while these sixteen tags were eager React emitted an SSR
            `<link rel=preload as=image>` for each one into <head> — fifteen tool
            tiles (~170 KB) queued in the same priority band as the hero, with no
            `media` attribute, so a phone paid for them too even though the
            desktop tree is `hidden` at that width.
          */}
          <img
            src="/home/toolsblur.svg"
            alt=""
            loading="lazy"
            className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none z-50"
          />
          <div
            className="w-[90%] md:w-auto mx-auto md:mx-[153px] relative"
            style={{
              borderLeft: "1px solid rgba(8, 9, 10, 0.2)",
              borderRight: "1px solid rgba(8, 9, 10, 0.2)",
            }}
          >
            <div className="px-4 md:px-0 md:pl-[60px] md:pr-[60px] py-16 relative z-10">
              <div className="mb-12">
                <p className="text-black text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase mb-4">
                  THE STACK WE BUILD ON
                </p>
                <h2 className="text-black text-[38px] leading-[120%] font-medium">
                  Production tools, not experiments
                </h2>
              </div>
              <div className="space-y-8">
                <div className="flex flex-wrap md:flex-nowrap gap-8">
                  <div className="tool-card  overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt1.webp"
                      alt="TypeScript"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card  overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt2.webp"
                      alt="React"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card  overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt3.webp"
                      alt="Next.js"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card  overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt4.webp"
                      alt="Node.js"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card  overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt5.webp"
                      alt="Python"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-8">
                  <div className="tool-card overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt6.webp"
                      alt="PostgreSQL"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt7.webp"
                      alt="Redis"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt8.webp"
                      alt="Docker"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt9.webp"
                      alt="Kubernetes"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt10.webp"
                      alt="AWS"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-8">
                  <div className="tool-card overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt11.webp"
                      alt="Terraform"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt12.webp"
                      alt="GitHub Actions"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt13.webp"
                      alt="React Native"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt14.webp"
                      alt="GraphQL"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="tool-card overflow-hidden cursor-pointer">
                    <img
                      src="/brand/stack/nt15.webp"
                      alt="OpenTelemetry"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* A row of five empty outlined boxes used to sit here. It was
                    copied from the source site, where a gradient overlay faded
                    it out so it read as a hinted fourth row of logos. Without
                    that treatment it rendered as five stark empty rectangles on
                    white — the row above already ends under the blur, so
                    nothing is lost by removing it. */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div
          className="w-[90%] md:w-auto mx-auto md:mx-[153px] py-16 pb-24 md:pb-16 px-4 md:px-0 overflow-hidden font-fira-sans"
          style={{
            borderLeft: "1px solid rgba(8, 9, 10, 0.2)",
            borderRight: "1px solid rgba(8, 9, 10, 0.2)",
          }}
        >
          <div className="mb-12">
            <p className="text-black text-[16px] tracking-[1.75px] uppercase mb-2">
              THE STACK WE BUILD ON
            </p>
            <h2 className="text-black text-[30px] md:text-[38px] font-medium">
              Production tools, not experiments
            </h2>
          </div>
          {/* Fanned deck. The final layer repeats z-index 39 and fans the other
              way; that is how the original renders it. */}
          <div className="relative w-[75%] max-w-sm mx-auto h-[310px]">
            <div
              className="absolute w-full h-full rounded-[4px] shadow-xl bg-white"
              draggable={false}
              style={{
                backgroundImage: 'url("/home/item-1copy.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                zIndex: 40,
                backgroundColor: "transparent",
                userSelect: "none",
                touchAction: "pan-y",
                transform: "none",
              }}
            ></div>
            <div
              className="absolute w-full h-full rounded-[4px] shadow-xl bg-white"
              style={{
                backgroundImage: 'url("/home/Item-2.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                zIndex: 39,
                backgroundColor: "transparent",
                transform:
                  "translateX(12px) translateY(7.2px) scale(0.95) rotate(3deg)",
              }}
            ></div>
            <div
              className="absolute w-full h-full rounded-[4px] shadow-xl bg-white"
              style={{
                backgroundImage: "none",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                zIndex: 38,
                backgroundColor: "rgb(240, 240, 240)",
                transform:
                  "translateX(24px) translateY(14.4px) scale(0.9) rotate(6deg)",
              }}
            ></div>
            <div
              className="absolute w-full h-full rounded-[4px] shadow-xl bg-white"
              style={{
                backgroundImage: "none",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                zIndex: 37,
                backgroundColor: "rgb(240, 240, 240)",
                transform:
                  "translateX(36px) translateY(21.6px) scale(0.85) rotate(9deg)",
              }}
            ></div>
            <div
              className="absolute w-full h-full rounded-[4px] shadow-xl bg-white"
              style={{
                backgroundImage: "none",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                zIndex: 36,
                backgroundColor: "rgb(240, 240, 240)",
                transform:
                  "translateX(48px) translateY(28.8px) scale(0.8) rotate(12deg)",
              }}
            ></div>
            <div
              className="absolute w-full h-full rounded-[4px] shadow-xl bg-white"
              style={{
                backgroundImage: 'url("/home/Item-8.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                zIndex: 39,
                backgroundColor: "transparent",
                transform:
                  "translateX(-12px) translateY(7.2px) scale(0.95) rotate(-3deg)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
