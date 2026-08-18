"use client";

import { useEffect, useRef, useState } from "react";
import type { CurriculumSession } from "@/types";

const sessions: CurriculumSession[] = [
  {
    navLabel: "DISCOVERY & PROBLEM DEFINITION",
    schedule: "PHASE 01 • WHERE EVERY ENGAGEMENT STARTS",
    title: "Discovery & Problem Definition",
    summary:
      "Before anyone writes code, we work out what the business actually needs. Most failed software solves the wrong problem correctly.",
    image: "/home/nc1.webp",
    bullets: [
      "Map the business problem in full before proposing any technical solution",
      "Interview the people who will use the system daily, not only the people commissioning it",
      "Audit the systems, data and integrations you already depend on",
      "Define success in numbers you can measure, not adjectives",
      "Surface the constraints that will shape architecture — compliance, scale, budget, deadline",
      "Deliver a written scope with stated assumptions you are free to challenge",
    ],
  },
  {
    navLabel: "ARCHITECTURE & TECHNICAL STRATEGY",
    schedule: "PHASE 02 • THE DECISIONS THAT ARE EXPENSIVE TO REVERSE",
    title: "Architecture & Technical Strategy",
    summary:
      "The choices made here determine what the system costs to run and how far it scales. We document every one of them, with the reasoning attached.",
    image: "/home/nc2.webp",
    bullets: [
      "Select the stack against your constraints and your team's ability to maintain it",
      "Design the data model and how information moves through the system",
      "Plan integrations with the tools your business already runs on",
      "Define the security model: authentication, authorisation and data handling",
      "Size infrastructure for the load you expect and the load you are hoping for",
      "Decide deliberately what to build, what to buy and what to leave alone",
      "Produce architecture documentation your own engineers can pick up and maintain",
      "Agree milestones, delivery cadence and exactly how progress gets reported",
    ],
  },
  {
    navLabel: "PRODUCT & EXPERIENCE DESIGN",
    schedule: "PHASE 03 • DESIGNING THE THING BEFORE BUILDING IT",
    title: "Product & Experience Design",
    summary:
      "Interface design is the cheapest place to discover a problem. We resolve the hard flows on screen while changing them still costs hours instead of weeks.",
    image: "/home/nc3.webp",
    bullets: [
      "Map every user journey before designing a single screen",
      "Wireframe the flows where the real complexity lives, not the easy ones",
      "Design to your existing brand, or build the visual system if you do not have one",
      "Prototype the interactions that cannot be judged from a static mockup",
      "Design the edge cases: empty states, errors, permissions, slow connections",
      "Build a component library so the product stays coherent as it grows",
      "Hand engineering a working design system rather than a folder of images",
    ],
  },
  {
    navLabel: "ENGINEERING & DELIVERY",
    schedule: "PHASE 04 • WORKING SOFTWARE, EVERY CYCLE",
    title: "Engineering & Delivery",
    summary:
      "Short cycles, running software and an open channel to the engineers building it. You should never have to ask how the project is going.",
    image: "/home/nc4.webp",
    bullets: [
      "Build in short cycles, each ending in software you can actually use",
      "Write automated tests against the behaviour the business depends on",
      "Run continuous integration so every change is verified before it merges",
      "Review every line of code before it reaches your repository",
      "Keep you in a shared channel with the engineers doing the work",
      "Demonstrate progress on a live environment rather than a slide deck",
      "Track and triage defects in the open instead of reporting around them",
      "Document while building, so handover is not a separate project later",
      "Reopen scope when evidence disagrees with the plan, and say so early",
    ],
  },
  {
    navLabel: "DEPLOYMENT, SCALE & SUPPORT",
    schedule: "PHASE 05 • LAUNCH IS THE MIDDLE, NOT THE END",
    title: "Deployment, Scale & Support",
    summary:
      "Software that ships and then degrades has not been delivered. We automate the release path, watch the system in production and hand over everything needed to run it.",
    image: "/home/nc5.webp",
    bullets: [
      "Automate deployment so releases become routine instead of events",
      "Load test before launch rather than after the first outage",
      "Set up monitoring, logging and alerting your team can act on",
      "Migrate data with a rehearsed rollback path",
      "Harden the production environment and review the security posture",
      "Hand over the code, the infrastructure and the knowledge to operate both",
      "Stay on for iteration, optimisation and scale as usage grows",
    ],
  },
];

const ACTIVE_COLOR = "rgb(8, 9, 10)";
const INACTIVE_COLOR = "rgba(8, 9, 10, 0.5)";

export default function Curriculum() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  /**
   * Below 768px the section swaps to portrait-cropped artwork (`nmcN` instead of
   * `ncN`) and drops the desaturation entirely — every card renders in colour,
   * not just the active one. Matches the original's own `window.innerWidth < 768`
   * resize listener.
   */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { root: null, threshold: 0.3, rootMargin: "-10% 0px -10% 0px" },
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div
      data-section-theme="light"
      className="w-full bg-white font-fira-sans "
      style={{
        borderTop: "1px solid rgba(8, 9, 10, 0.2)",
        borderBottom: "1px solid rgba(8, 9, 10, 0.2)",
      }}
    >
      <div
        className="w-[90%] md:w-auto mx-auto md:mx-[153px]"
        style={{
          borderLeft: "1px solid rgba(8, 9, 10, 0.2)",
          borderRight: "1px solid rgba(8, 9, 10, 0.2)",
        }}
      >
        <div
          className="z-10 bg-white px-4 md:px-0 md:pl-[60px] pt-14 pb-8"
          style={{ borderBottom: "1px solid rgba(8, 9, 10, 0.2)" }}
        >
          <p className="text-black text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase mb-4">
            HOW WE WORK
          </p>
          <h2 className="text-black  text-[30px] md:text-[38px] leading-[120%] font-medium">
            Five phases. No surprises.
          </h2>
          <p className="text-black/70 text-[14px] md:text-lg mt-4">
            The same process on every engagement, whether it is a first MVP or a
            twelve-year-old system that needs replacing.
          </p>
        </div>
        <div
          className=" md:px-0 md:pl-[60px] "
          style={{ borderBottom: "1px solid rgba(8, 9, 10, 0.2)" }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-[35%] py-8 hidden md:block">
              <div className="md:sticky md:top-[200px] space-y-6">
                {sessions.map((session, index) => {
                  const color =
                    index === active ? ACTIVE_COLOR : INACTIVE_COLOR;
                  return (
                    <div
                      key={session.navLabel}
                      className="flex gap-4 transition-colors duration-300"
                    >
                      <span
                        className="text-sm md:text-base font-normal"
                        style={{ color }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p
                        // md:leading-6 is a Tailwind v4 compatibility patch: in v3
                        // `md:text-base` was emitted after `leading-[120%]` and its
                        // 1.5rem line-height won at >=768px (measured 16px/24px).
                        className="text-sm md:text-base font-normal uppercase tracking-[1px] leading-[120%] md:leading-6"
                        style={{ color }}
                      >
                        {session.navLabel}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* The rule separating the sidebar from the cards only exists while
                the sidebar does. Below 768px the original drops it to `none`,
                which is also what gives the cards their full 336px width. */}
            <div
              className="md:w-[65%]"
              style={{
                borderLeft: isMobile ? "none" : "1px solid rgba(8, 9, 10, 0.2)",
              }}
            >
              <div className=" space-y-12">
                {sessions.map((session, index) => (
                  <div
                    key={session.title}
                    className="curriculum-card"
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                  >
                    <div className="relative md:[184px] h-[210px] mb-6 group">
                      <img
                        // One image for both breakpoints. The five mobile crops
                        // this used to request (/home/nmc1-5.webp) were never in
                        // public/, so every phone visitor got five broken images
                        // and downloaded ~99 KB of 404 page for each one.
                        src={session.image}
                        alt={session.title}
                        // Lazy because this section is several screens down. While
                        // these were eager, React emitted an SSR <link rel=preload>
                        // for nc1-nc5 with no `media`, so ~135 KB of below-fold
                        // artwork raced the hero for the same priority band.
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                        style={{
                          filter:
                            isMobile || index === active
                              ? "grayscale(0%)"
                              : "grayscale(100%)",
                        }}
                      />
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 text-white max-w-[80%] ">
                        <p className=" text-xs md:text-sm font-normal tracking-[1px] mb-1 md:mb-3">
                          {session.schedule}
                        </p>
                        <h3 className="text-xl md:text-2xl font-medium mb-2">
                          {session.title}
                        </h3>
                        <p className="text-sm md:text-base font-normal text-white/50 w-[80%]">
                          {session.summary}
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        index === sessions.length - 1
                          ? "space-y-4 p-5 ml-3 md:ml-5 mb-20"
                          : "space-y-4 p-5 ml-3 md:ml-5 "
                      }
                    >
                      {session.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <img
                            src="/home/gtick.png"
                            alt="Tick"
                            width="14"
                            height="11"
                            loading="lazy"
                            className="w-4 h-auto mt-1 flex-shrink-0"
                            style={{ filter: "grayscale(100%)" }}
                          />
                          <p className="text-black/70 text-sm md:text-base">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
