import Link from "next/link";

import { bookingLinkProps } from "@/data/company";

import type { CourseCard } from "@/types";

/**
 * "Two ways to work with us" — the engagement models section.
 *
 * Engineering leads deliberately; creative is a supporting capability, not a
 * second identity. The meta-row icons are mirrored under /cdn, and
 * grayscale-on-hover lives in globals.css as `.course-card`.
 *
 * Both cards link out. They carried `cursor-pointer` while being inert divs,
 * so the click went nowhere and the homepage passed no link equity to the
 * pages the section is describing.
 */
const courses: CourseCard[] = [
  {
    title: "Product Engineering",
    description:
      "Custom software, AI products, cloud platforms and mobile apps — architected, built, deployed and supported by one team.",
    image: "/home/ncourse1.webp",
    meta: [
      { icon: "/cdn/Clock.svg", label: "Project or Retainer" },
      { icon: "/cdn/Monitor.svg", label: "Dedicated Team" },
      { icon: "/cdn/country.svg", label: "Global Delivery" },
    ],
    href: "/services/product-engineering",
  },
  {
    title: "Design & Brand",
    description:
      "Product design, brand identity, motion, video and 3D — the work that makes what we engineer worth looking at.",
    image: "/home/ncourse2.webp",
    meta: [
      { icon: "/cdn/Clock.svg", label: "Standalone or Bundled" },
      { icon: "/cdn/Monitor.svg", label: "In-House Studio" },
      { icon: "/cdn/country.svg", label: "Global Delivery" },
    ],
    // No single service page covers the whole studio, so this points at the
    // creative block of the services hub rather than one discipline inside it.
    href: "/services#creative-services",
  },
];

function CourseTile({ course }: { course: CourseCard }) {
  // The caption sits in an absolutely positioned box, which would trap a
  // stretched-link pseudo-element inside itself, so the whole card is the
  // anchor here rather than just the heading.
  const className = `course-card relative w-full md:w-[50%] overflow-hidden${course.href ? " cursor-pointer" : ""}`;
  const style = { border: "1px solid rgba(8, 9, 10, 0.2)", borderRadius: "2px" };
  const body = (
    <>
      <img
        src={course.image}
        alt={course.title}
        width="1200"
        height="675"
        className="w-full h-auto object-cover"
      />
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white">
        <h3 className="text-xl md:text-3xl font-medium mb-2 md:mb-3">
          {course.title}
        </h3>
        <p className="text-xs md:text-base max-w-[85%] md:max-w-[80%] font-normal text-white/50 mb-4 md:mb-6">
          {course.description}
        </p>
        <div className="flex flex-wrap gap-3 md:gap-6">
          {course.meta.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 md:gap-2">
              <img src={item.icon} alt="" className="w-4 h-4 md:w-6 md:h-6" />
              <span className="text-[10px] md:text-base font-normal text-white/70">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return course.href ? (
    <Link href={course.href} className={`${className} block`} style={style}>
      {body}
    </Link>
  ) : (
    <div className={className} style={style}>
      {body}
    </div>
  );
}

export default function Courses() {
  return (
    <div
      data-section-theme="light"
      className="w-full font-fira-sans "
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
        <div className="px-4 md:px-0 md:pl-[60px] md:pr-[60px] py-8 md:py-16">
          <div className="mb-8 md:mb-12">
            <p className="text-black text-xs md:text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase mb-2 md:mb-4">
              HOW ENGAGEMENTS WORK
            </p>
            <h2 className="text-black text-[24px] md:text-[38px] leading-[120%] font-medium">
              Two ways to work with us
            </h2>
          </div>
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {courses.map((course) => (
                <CourseTile key={course.title} course={course} />
              ))}
            </div>
            <div>
              <div
                className="course-card relative w-full overflow-hidden md:h-[250px]"
                style={{
                  border: "1px solid rgba(8, 9, 10, 0.2)",
                  borderRadius: "2px",
                }}
              >
                <img
                  src="/home/ntest.webp"
                  alt="Not sure where to start?"
                  className="hidden md:block w-full h-full object-cover"
                />
                <img
                  src="/home/newcm.webp"
                  alt="Not sure where to start?"
                  width="768"
                  height="512"
                  className="block md:hidden w-full h-auto object-cover"
                />
                <div className="absolute inset-0 md:inset-y-0  md:left-auto md:right-0 md:w-1/2 flex flex-col justify-end md:justify-center px-4 md:px-12 pb-4 md:pb-4">
                  <h3 className="text-white text-xl md:text-3xl font-medium mb-2 md:mb-3">
                    Not sure where to start?
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6">
                    Tell us the problem. We will tell you whether software is the answer, and what it would take.
                  </p>
                  <Link {...bookingLinkProps()} className="px-4 py-2 md:px-6 md:py-3 bg-white/10 hover:bg-white/20 text-white border border-white/40 rounded transition-colors w-fit text-sm md:text-base">
                    Book a Discovery Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
