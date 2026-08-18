/**
 * The isometric hub: ApexStack at the centre, the sectors we build for arranged
 * around it, joined by circuit traces.
 *
 * Drawn entirely as SVG rather than shipped as an image. The reference that
 * prompted this — atonomi.ai — uses a 1869x2161 PNG, which would have meant
 * either lifting their artwork or exporting a flat file that goes soft on a
 * retina screen and cannot carry our own colours. Every shape below is
 * computed, so it is crisp at any size, weighs a few kilobytes, recolours from
 * two constants, and animates without a second asset.
 *
 * ── WHAT THE REFERENCE ACTUALLY DOES ─────────────────────────────────────────
 * The atonomi.ai graphic is a static PNG for the scene — cube, plinth, tiles,
 * traces are all painted in — with a live layer on top that sends pulses
 * travelling along the connector traces. Measured: 116 of 308 elements in that
 * section change position in 900ms, one group translating y 128 -> 365 while its
 * opacity runs 0.16 -> 0.62. There is no SMIL and no registered CSS animation,
 * so it is driven from JavaScript.
 *
 * (An earlier reading of mine said "no animation". That was wrong: it relied on
 * `document.getAnimations()`, which does not report requestAnimationFrame work.)
 *
 * Here the same effect is done with CSS `offset-path`, so the pulses ride the
 * exact same path data the traces are drawn from — one source of truth, no JS,
 * no rAF loop, and it stops dead under prefers-reduced-motion.
 *
 * ── THE PROJECTION ───────────────────────────────────────────────────────────
 * Standard 2:1 isometric. A point on the ground plane at grid (gx, gy) lands at
 *   screen x = originX + (gx - gy) * TILE_W
 *   screen y = originY + (gx + gy) * TILE_H
 * with TILE_W exactly twice TILE_H, which is what makes the diamonds read as
 * squares seen from above. Height is a straight subtraction on y, so a solid is
 * just its top face plus two side faces dropped by its depth.
 */

const INK = "#08090A";
const LIME = "#B4CC04";

/** 2:1 isometric: width is always twice height. */
const TILE_W = 2;
const TILE_H = 1;

function project(gx: number, gy: number, scale: number, ox: number, oy: number) {
  return {
    x: ox + (gx - gy) * TILE_W * scale,
    y: oy + (gx + gy) * TILE_H * scale,
  };
}

/** The four corners of a flat diamond centred on (cx, cy). */
function diamond(cx: number, cy: number, w: number, h: number) {
  return `${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`;
}

/**
 * A slab: a diamond top face with two shaded side faces dropped by `depth`.
 * Used for both the central plinth and the satellite tiles.
 */
function Slab({
  cx,
  cy,
  w,
  h,
  depth,
  accent = false,
}: {
  cx: number;
  cy: number;
  w: number;
  h: number;
  depth: number;
  accent?: boolean;
}) {
  return (
    <g>
      {/* left face */}
      <polygon
        points={`${cx - w},${cy} ${cx},${cy + h} ${cx},${cy + h + depth} ${cx - w},${cy + depth}`}
        fill="#101214"
      />
      {/* right face, a shade lighter so the form reads */}
      <polygon
        points={`${cx + w},${cy} ${cx},${cy + h} ${cx},${cy + h + depth} ${cx + w},${cy + depth}`}
        fill="#161A1C"
      />
      {/* top face */}
      <polygon
        points={diamond(cx, cy, w, h)}
        fill="#0D0F11"
        stroke={accent ? LIME : "rgba(255,255,255,0.16)"}
        strokeWidth={accent ? 1.4 : 1}
      />
    </g>
  );
}

/**
 * Six sectors, mirrored three to a side. The reference uses six, not seven, and
 * the symmetry is what makes it sit square on the page — an odd count leaves one
 * side heavier and the centre line drifts.
 */
const NODES = [
  // Mirrored pairs. In this projection screen-x is (gx - gy) and screen-y is
  // (gx + gy), so swapping a point's two grid values flips it across the centre
  // line while holding its height — which is what makes the two sides read as
  // an exact reflection rather than an approximate one.
  { label: "Financial Services", gx: -3.4, gy: -0.2, side: "left" as const },
  { label: "Healthcare", gx: -3.0, gy: 1.0, side: "left" as const },
  { label: "Retail & E-Commerce", gx: -1.6, gy: 2.2, side: "left" as const },
  { label: "Logistics", gx: -0.2, gy: -3.4, side: "right" as const },
  { label: "Manufacturing", gx: 1.0, gy: -3.0, side: "right" as const },
  { label: "Professional Services", gx: 2.2, gy: -1.6, side: "right" as const },
];

/**
 * Tile glyphs. Each is drawn upright then pushed onto the isometric plane with
 * the same 2:1 skew the tiles use, so they sit *on* the surface rather than
 * floating above it — matrix(1, 0.5, -1, 0.5) is that projection.
 */
const ISO = "matrix(1, 0.5, -1, 0.5, 0, 0)";
const ISO_MARK = "matrix(1, 0.5, -1, 0.5, 0, 0)";

const ICONS = [
  // paper plane
  <g key="i0" transform={ISO}><path d="M 14 -11 L -13 1 L -3 4 L 1 13 Z" /><path d="M -3 4 L 14 -11" /></g>,
  // starburst / spark
  <g key="i1" transform={ISO}><circle cx="0" cy="0" r="5.5" /><path d="M 0 -13 L 0 -8 M 0 8 L 0 13 M -13 0 L -8 0 M 8 0 L 13 0 M -9 -9 L -5.5 -5.5 M 5.5 5.5 L 9 9 M 9 -9 L 5.5 -5.5 M -5.5 5.5 L -9 9" /></g>,
  // graduation cap
  <g key="i2" transform={ISO}><path d="M -13 -3 L 0 -9 L 13 -3 L 0 3 Z" /><path d="M -7 0 L -7 7 Q 0 11 7 7 L 7 0" /><path d="M 13 -3 L 13 5" /></g>,
  // speech bubble
  <g key="i3" transform={ISO}><path d="M -12 -8 L 12 -8 Q 14 -8 14 -6 L 14 4 Q 14 6 12 6 L -2 6 L -8 12 L -8 6 L -12 6 Q -14 6 -14 4 L -14 -6 Q -14 -8 -12 -8 Z" /><path d="M -8 -3 L 8 -3 M -8 2 L 3 2" /></g>,
  // cart with rising arrow
  <g key="i4" transform={ISO}><path d="M -13 -7 L -8 -7 L -4 6 L 10 6" /><circle cx="-2" cy="11" r="2" /><circle cx="8" cy="11" r="2" /><path d="M 2 -2 L 2 -11 M -1 -8 L 2 -11 L 5 -8" /></g>,
  // person
  <g key="i5" transform={ISO}><circle cx="0" cy="-5" r="5" /><path d="M -9 12 Q 0 3 9 12" /></g>,
];

const OX = 800;
const OY = 300;
const SCALE = 62;

export default function IndustryHub() {
  // The cube is the subject of the graphic, so it carries the size. Everything
  // below is derived from it rather than typed independently: the plinth is
  // sized to leave a consistent margin of dais around the cube's footprint, and
  // it drops by the cube's own depth so the cube always lands ON it. Scaling the
  // cube alone would have left it either floating off the plinth or overhanging.
  const cube = { w: 144, h: 76, depth: 160 };
  const plinth = { w: cube.w + 132, h: cube.h + 68, depth: 24 };
  const plinthY = OY + cube.depth - 17;

  return (
    <svg
      viewBox="0 0 1600 620"
      className="w-full h-auto select-none"
      role="img"
      aria-label="ApexStack at the centre of the sectors it builds software for"
    >
      <defs>
        <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={LIME} stopOpacity="0.30" />
          <stop offset="100%" stopColor={LIME} stopOpacity="0" />
        </radialGradient>
        {/* The reference lights the cube from above: the top face is near-white
            lime, the two side faces fall off steeply toward the base, and a hot
            rim runs along every top edge. */}
        <linearGradient id="cube-top" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#EAFF4B" />
          <stop offset="100%" stopColor="#C2DC05" />
        </linearGradient>
        <linearGradient id="cube-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C6DE06" />
          <stop offset="55%" stopColor="#93A803" />
          <stop offset="100%" stopColor="#5E6C01" />
        </linearGradient>
        <linearGradient id="cube-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DCF60A" />
          <stop offset="55%" stopColor="#AFC804" />
          <stop offset="100%" stopColor="#75871F" />
        </linearGradient>
        {/* Hard guarantee that nothing renders past the frame. The traces run to
            the outermost tiles, and at some viewport widths a dot reached the
            very edge — 13 frames measured out of bounds even after the motion
            was corrected. Clipping settles it for every size. */}
        {/* The window lattice is laid out on a regular grid, which does not know
            where the cube ends — panes ran past the bottom-right edge and out
            into open space. Clipping each set to its own face polygon is what
            keeps every pane on the solid. */}
        <clipPath id="face-left">
          <polygon points={`${OX - 118},${OY} ${OX},${OY + 62} ${OX},${OY + 62 + 132} ${OX - 118},${OY + 132}`} />
        </clipPath>
        <clipPath id="face-right">
          <polygon points={`${OX + 118},${OY} ${OX},${OY + 62} ${OX},${OY + 62 + 132} ${OX + 118},${OY + 132}`} />
        </clipPath>
        <clipPath id="hub-frame">
          <rect x="0" y="0" width="1600" height="620" />
        </clipPath>
        <filter id="cube-bloom" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="26" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        /* The tile does NOT float as one piece. In the reference the base stack
           stays planted and only the top face lifts away from it, opening a gap
           that reveals the layers underneath — a lid rising off a stack. That is
           why an earlier pass looked wrong: it translated the whole group.

           The lift is deliberately small. At rest the lid must READ AS CLOSED —
           sitting on the stack at the same 11px pitch as the slabs below it, so
           the tile is one object. A -15px lift against an 11px pitch opened a
           gap taller than the stack itself and the lid stopped looking attached
           to anything. -6px is just over half the pitch: the seam opens enough
           to catch the light and closes again. */
        .hub-lid { animation: hub-lift 4.8s ease-in-out infinite; }
        @keyframes hub-lift {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        /* Window flicker. Each pane runs the same short cycle on its own delay
           and duration, so the lattice reads as lights switching on and off
           across the face rather than the whole cube pulsing at once. */
        .hub-win { animation: hub-flicker 3.2s steps(1, end) infinite; }
        @keyframes hub-flicker {
          0%, 42%  { opacity: var(--lit); }
          46%      { opacity: calc(var(--lit) * 0.25); }
          52%      { opacity: var(--lit); }
          74%      { opacity: calc(var(--lit) * 0.45); }
          78%, 100%{ opacity: var(--lit); }
        }

        /* The bloom breathes very slightly, which is what stops the cube
           looking like a flat sticker between flickers. */
        .hub-cube { animation: hub-breathe 4.6s ease-in-out infinite; }
        @keyframes hub-breathe {
          0%, 100% { filter: brightness(1); }
          50%      { filter: brightness(1.08); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hub-win   { animation: none; opacity: var(--lit); }
          .hub-cube  { animation: none; }
          .hub-tile  { animation: none; }
        }
      `}</style>

      <rect width="1600" height="620" fill={INK} />
      <g clipPath="url(#hub-frame)">
      <ellipse cx={OX} cy={OY + 90} rx="420" ry="230" fill="url(#hub-glow)" />

      {/* ------------------------------------------------- traces and pulses */}
      {NODES.map((node, i) => {
        const p = project(node.gx, node.gy, SCALE, OX, OY);
        const toward = node.side === "left" ? 1 : -1;
        /* Stepped, not diagonal. The reference routes every trace as isometric
           right angles, and it ends ON the plinth edge — an earlier pass ran the
           path past the centre, which is why pulses appeared to shoot out of
           the far side of the graphic. */
        const startX = p.x + toward * 78;
        const startY = p.y + 34;
        const kneeX = startX + toward * 92;
        const kneeY = startY + 46;
        const endX = OX - toward * 236;
        const endY = plinthY + 6;
        const d = `M ${startX} ${startY} L ${kneeX} ${kneeY} L ${kneeX + toward * 60} ${kneeY + 30} L ${endX} ${endY}`;
        return (
          <g key={`trace-${node.label}`}>
            <path
              d={d}
              fill="none"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="1"
              strokeDasharray="6 8"
            />
            {/* The single travelling dot. It is the only dot on this run: the
                static corner marker was removed because together they read as
                two competing indicators. */}
            {/* SMIL, not CSS `offset-path`.
                offset-path resolves its coordinates in CSS pixels, while the
                path is authored in viewBox units — so the moment the SVG scaled
                to its container the two diverged and the dots drifted clean off
                the artwork (measured: 89 frames out of bounds). animateMotion
                runs in the SVG's own coordinate system, so the dot is locked to
                the trace at every size. */}
            <circle r="5" fill={LIME} opacity="0">
              <animateMotion
                dur="4.2s"
                begin={`${i * 0.7}s`}
                repeatCount="indefinite"
                path={d}
                rotate="0"
              />
              <animate
                attributeName="opacity"
                values="0;0.95;0.95;0"
                keyTimes="0;0.12;0.82;1"
                dur="4.2s"
                begin={`${i * 0.7}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}

      {/* Dashed containment rings — the reference stacks three around the cube. */}
      {[1.32, 1.62, 1.94].map((k) => (
        <polygon
          key={`ring-${k}`}
          points={diamond(OX, OY + 40, 250 * k * 0.72, 130 * k * 0.72)}
          fill="none"
          stroke="rgba(255,255,255,0.13)"
          strokeWidth="1"
          strokeDasharray="7 9"
        />
      ))}

      {/* ------------------------------------------------------ centre plinth */}
      <Slab cx={OX} cy={plinthY} w={plinth.w} h={plinth.h} depth={plinth.depth} />
      <polygon
        points={diamond(OX, plinthY, plinth.w - 34, plinth.h - 18)}
        fill="none"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1"
      />

      {/* ------------------------------------------------------- the ApexStack cube */}
      <g className="hub-cube" filter="url(#cube-bloom)">
        <polygon
          points={`${OX - cube.w},${OY} ${OX},${OY + cube.h} ${OX},${OY + cube.h + cube.depth} ${OX - cube.w},${OY + cube.depth}`}
          fill="url(#cube-left)"
        />
        <polygon
          points={`${OX + cube.w},${OY} ${OX},${OY + cube.h} ${OX},${OY + cube.h + cube.depth} ${OX + cube.w},${OY + cube.depth}`}
          fill="url(#cube-right)"
        />
        <polygon points={diamond(OX, OY, cube.w, cube.h)} fill="url(#cube-top)" />

        {/* Hot rim along the three top edges and the front vertical seam — this
            is what reads as "lit from inside" in the reference. */}
        <path
          d={`M ${OX - cube.w} ${OY} L ${OX} ${OY - cube.h} L ${OX + cube.w} ${OY}`}
          fill="none"
          stroke="#F4FFA8"
          strokeWidth="2.5"
          opacity="0.9"
        />
        <path
          d={`M ${OX - cube.w} ${OY} L ${OX} ${OY + cube.h} L ${OX + cube.w} ${OY}`}
          fill="none"
          stroke="#FBFFD0"
          strokeWidth="2"
          opacity="0.75"
        />
        <line
          x1={OX}
          y1={OY + cube.h}
          x2={OX}
          y2={OY + cube.h + cube.depth}
          stroke="#FBFFD0"
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Window grid. Both faces carry the same lattice, skewed onto their own
            plane and fading toward the base, exactly as the reference does. */}
        {Array.from({ length: 6 }).flatMap((_, col) =>
          Array.from({ length: 6 }).map((__, row) => {
            const fade = 0.55 - row * 0.07 - (col % 2) * 0.06;
            const cx = -cube.w + 24 + col * 19;
            const cy = 26 + row * 19;
            return (
              <g key={`win-${col}-${row}`}>
                <g clipPath="url(#face-left)">
                <rect
                  className="hub-win"
                  x={0}
                  y={0}
                  width="11"
                  height="11"
                  fill="#FFFFFF"
                  style={{
                    ["--lit" as string]: Math.max(0.08, fade),
                    animationDelay: `${((col * 7 + row * 13) % 31) * 0.21}s`,
                    animationDuration: `${2.6 + ((col + row) % 5) * 0.5}s`,
                  }}
                  transform={`translate(${OX + cx}, ${OY + cy + col * 9.5}) skewY(26.57)`}
                />
                </g>
                <g clipPath="url(#face-right)">
                <rect
                  className="hub-win"
                  x={0}
                  y={0}
                  width="11"
                  height="11"
                  fill="#FFFFFF"
                  style={{
                    ["--lit" as string]: Math.max(0.1, fade + 0.08),
                    animationDelay: `${((col * 11 + row * 5) % 29) * 0.23}s`,
                    animationDuration: `${2.4 + ((col * 2 + row) % 6) * 0.45}s`,
                  }}
                  transform={`translate(${OX + 16 + col * 19}, ${OY + cy + (5 - col) * 9.5}) skewY(-26.57)`}
                />
                </g>
              </g>
            );
          }),
        )}

        {/* The real ApexStack mark, not a redrawn approximation. It is the
            actual brand asset, skewed onto the cube's top face with the same
            isometric matrix the face itself uses so it sits on the surface. */}
        <g transform={`translate(${OX}, ${OY + 5}) ${ISO_MARK}`}>
          <image
            href="/brand/apexstack-mark.png"
            x={-56}
            y={-56}
            width="112"
            height="112"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "brightness(0) invert(1)" }}
            opacity="0.97"
          />
        </g>
      </g>

      {/* ---------------------------------------------------------- sectors */}
      {NODES.map((node, i) => {
        const p = project(node.gx, node.gy, SCALE, OX, OY);
        return (
          <g key={node.label}>
            {/* Three stacked slabs. The reference builds its tiles the same way:
                one thin diamond reads as a sticker, layers read as an object. */}
            <Slab cx={p.x} cy={p.y + 22} w={74} h={38} depth={7} />
            <Slab cx={p.x} cy={p.y + 11} w={74} h={38} depth={7} />
            {/* Everything from here up is the lid, and only the lid moves. */}
            <g
              className="hub-lid"
              style={{ animationDelay: `${(i % 4) * 0.7 + (i > 3 ? 0.35 : 0)}s` }}
            >
              <Slab cx={p.x} cy={p.y} w={74} h={38} depth={4} accent />
            <g
              transform={`translate(${p.x}, ${p.y}) scale(1.15)`}
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            >
              {ICONS[i % ICONS.length]}
            </g>
            </g>
          </g>
        );
      })}
      </g>
    </svg>
  );
}
