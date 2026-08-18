"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";

/**
 * Originkit's Round Carousel — a ring of cards rotating in 3D, draggable with
 * momentum.
 *
 * Supplied by the client. The transform maths, the drag physics and the
 * 0.94 velocity decay are theirs and are unchanged. Three things were added,
 * all of which the original would need before shipping on a real page:
 *
 *   1. `prefers-reduced-motion` stops the auto-rotation. A ring that spins
 *      forever is exactly the kind of continuous motion that triggers
 *      vestibular symptoms, and it is the one animation on this page a visitor
 *      cannot scroll away from — it sits still and keeps moving.
 *   2. An IntersectionObserver pauses the rAF loop while the ring is off
 *      screen. Without it the loop runs for the whole session on every page
 *      the component appears on, animating something nobody is looking at.
 *   3. The ring is `aria-hidden`. The cards are background images with no text,
 *      so to a screen reader they are eight empty divs. The section that uses
 *      this is responsible for naming the work in real markup.
 */

export interface RoundCarouselImage {
  src: string;
}

interface RoundCarouselProps {
  images: RoundCarouselImage[];
  imageWidth?: number;
  imageHeight?: number;
  spacing?: number;
  speed?: number;
  direction?: "right" | "left";
  drag?: boolean;
  sensitivity?: number;
  tilt?: number;
  perspective?: number;
  cornerRadius?: number;
  innerDim?: number;
  background?: string;
  style?: CSSProperties;
}

export default function RoundCarousel({
  images,
  imageWidth = 300,
  imageHeight = 300,
  spacing = 3,
  speed = 7,
  direction = "right",
  drag = true,
  sensitivity = 5,
  tilt = -7,
  perspective = 3000,
  cornerRadius = 22,
  innerDim = 3.5,
  background = "transparent",
  style = {},
}: RoundCarouselProps) {
  const count = images.length;

  const hostRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const rotYRef = useRef(0);
  const velRef = useRef(0);
  const lastRef = useRef(0);
  const dragRef = useRef({ active: false, x: 0 });

  const angle = 360 / count;
  const factor = 1 + spacing * 0.15;
  const radius = (imageWidth * factor) / (2 * Math.tan(Math.PI / count));
  const degPerSec = speed * 6 * (direction === "left" ? -1 : 1);

  useEffect(() => {
    const ring = ringRef.current;
    const host = hostRef.current;
    if (!ring || !host) return;

    const apply = () => {
      ring.style.transform = `translateZ(${-radius}px) rotateY(${rotYRef.current}deg)`;
    };
    apply();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;

    const draw = (now: number) => {
      const dt = lastRef.current ? (now - lastRef.current) / 1000 : 0;
      lastRef.current = now;
      const f = Math.min(dt, 0.1);
      const d = dragRef.current;
      if (!d.active) {
        if (Math.abs(velRef.current) > 0.01) {
          rotYRef.current += velRef.current * f;
          velRef.current *= 0.94;
        } else if (!reduced.matches) {
          rotYRef.current += degPerSec * f;
        }
      }
      apply();
      rafRef.current = requestAnimationFrame(draw);
    };

    const start = () => {
      if (rafRef.current) return;
      lastRef.current = 0;
      rafRef.current = requestAnimationFrame(draw);
    };
    const stop = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(host);

    if (visible) start();

    return () => {
      io.disconnect();
      stop();
    };
  }, [radius, degPerSec, count]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = { active: true, x: e.clientX };
    velRef.current = 0;
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d.active) return;
    const dx = e.clientX - d.x;
    d.x = e.clientX;
    const k = 0.3 * sensitivity;
    rotYRef.current += dx * k;
    velRef.current = dx * k * 60;
  };
  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    dragRef.current.active = false;
  };

  const faceBase: CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: cornerRadius,
    overflow: "hidden",
    backfaceVisibility: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center top",
  };

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      style={{
        ...style,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background,
        perspective: `${perspective}px`,
        cursor: drag ? "grab" : "default",
        touchAction: "pan-y",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div style={{ transformStyle: "preserve-3d", transform: `rotateX(${tilt}deg)` }}>
        <div
          ref={ringRef}
          style={{
            position: "relative",
            width: imageWidth,
            height: imageHeight,
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              style={{
                position: "absolute",
                inset: 0,
                transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  ...faceBase,
                  backgroundImage: `url(${img.src})`,
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                }}
              />
              <div
                style={{
                  ...faceBase,
                  transform: "rotateY(180deg)",
                  backgroundImage: `url(${img.src})`,
                  filter: `brightness(${innerDim / 10})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
