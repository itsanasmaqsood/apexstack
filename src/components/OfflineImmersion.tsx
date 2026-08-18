"use client";

import { useState } from "react";

import { IMMERSION_VIDEO_EMBED } from "@/data/testimonials";

/** "How we work, in ninety seconds" — poster swaps to a Gumlet embed on click. */
export default function OfflineImmersion() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-6 font-fira-sans px-4 md:px-[60px] pt-16 ">
      <div className="w-[100%] mx-auto">
        <div className="mb-8">
          <p className="text-[16px] tracking-[1.75px] leading-[160%] font-normal text-white uppercase mb-2">
            Inside the work
          </p>
          {/* Demoted from <h1> to <h2>: the source shipped two H1s on one page,
              which splits topical relevance. The hero owns the only H1 now. */}
          <h2 className="text-[30px] md:text-[38px] leading-[120%] font-medium text-white mb-4">
            How we work, in ninety seconds
          </h2>
        </div>
        <div
          className="relative w-full  overflow-hidden rounded-[2px] border border-white/30"
          style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
        >
          {isPlaying ? (
            <div className="relative w-full aspect-video">
              <iframe
                loading="lazy"
                title="Gumlet video player"
                src={IMMERSION_VIDEO_EMBED}
                className="w-full h-full border-none"
                style={{
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-video bg-black">
              <img
                src="/cdn/videothumb.webp"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  className="w-20 h-20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 focus:outline-none"
                  aria-label="Play video"
                  onClick={() => setIsPlaying(true)}
                >
                  <img src="/cdn/osvideo.svg" alt="video play icon" className="w-12 h-12" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
