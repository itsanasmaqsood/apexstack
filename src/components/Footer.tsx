import type { ComponentType, SVGProps } from "react";

import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import NewsletterForm from "@/components/NewsletterForm";
import { COMPANY } from "@/data/company";
import type { FooterColumn } from "@/types";

/**
 * Site footer. Unlike the rest of the page this section is framed by a
 * `w-[90%] md:w-[80%]` box rather than the 153px rails, and it ships two
 * complete trees: a stacked mobile one and a two-column desktop one.
 *
 * The service links here are the only sitewide inlinks a service page gets, so
 * the commercially material engineering and consulting pages all need an entry:
 * api-development, product-engineering, digital-transformation and
 * technical-consulting were missing and collected links from the /services hub
 * alone. The creative long tail (graphic-design, video-production,
 * social-media-design, marketing-assets, presentation-design) is deliberately
 * left to that hub rather than stretched across four already-full columns.
 */
const columns: FooterColumn[] = [
  {
    heading: "ENGINEERING",
    links: [
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "AI Products & Agents", href: "/services/ai-development" },
      { label: "Web Application Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "API Development & Integration", href: "/services/api-development" },
      { label: "Product Engineering", href: "/services/product-engineering" },
    ],
  },
  {
    heading: "SOLUTIONS",
    links: [
      { label: "SaaS Platforms", href: "/services/saas-development" },
      { label: "Enterprise Systems", href: "/services/enterprise-software" },
      { label: "CRM & ERP", href: "/services/crm-erp" },
      { label: "Business Automation", href: "/services/automation" },
      { label: "MVP Development", href: "/services/mvp-development" },
      { label: "Digital Transformation", href: "/services/digital-transformation" },
      { label: "Technical Consulting", href: "/services/technical-consulting" },
    ],
  },
  {
    heading: "DESIGN & BRAND",
    links: [
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Branding & Identity", href: "/services/branding" },
      { label: "Motion & Video", href: "/services/motion-video" },
      { label: "3D & Visualisation", href: "/services/3d-design" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Products", href: "/products" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Team & Leadership", href: "/team" },
      { label: "How We Work", href: "/process" },
      { label: "Industries", href: "/industries" },
      { label: "All Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

/**
 * Mobile heading weights, verbatim from the source: the first column is
 * `font-medium` while the other three are `font-semibold`. The desktop tree
 * uses `font-medium` throughout.
 */
const mobileHeadingClasses = [
  "text-sm font-medium mb-3 text-white",
  "text-sm font-semibold mb-3 text-white",
  "text-sm font-semibold mb-3 text-white",
  "text-sm font-semibold mb-3 text-white",
];

interface SocialLink {
  href: string;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** The mobile Facebook chip is bordered white/20; the other two are #FFFFFF1A. */
  mobileBorderClass: string;
}

/**
 * A chip with an empty `href` renders as a non-interactive element rather than
 * a link to "#": a dead link is worse for users and crawlers than an obviously
 * pending one.
 *
 * TODO: Facebook and LinkedIn profile URLs. Instagram is live.
 */
const socials: SocialLink[] = [
  {
    href: "",
    label: "ApexStack on Facebook",
    Icon: FacebookIcon,
    mobileBorderClass: "border-white/20",
  },
  {
    href: "https://www.instagram.com/apexstack.dev",
    label: "ApexStack on Instagram",
    Icon: InstagramIcon,
    mobileBorderClass: "border-[#FFFFFF1A]",
  },
  {
    href: "",
    label: "ApexStack on LinkedIn",
    Icon: LinkedInIcon,
    mobileBorderClass: "border-[#FFFFFF1A]",
  },
];

function CurrencySelect() {
  return (
    <div className="currency-dropdown">
      <select
        aria-label="Select currency"
        className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded text-white opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
      >
        <option value="USD" className="bg-black text-white">
          USD
        </option>
        <option value="INR" className="bg-black text-white">
          INR
        </option>
      </select>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-black bg-cover bg-center text-white py-8 md:py-16 font-fira-sans">
      <div className="w-[90%] md:w-[80%] mx-auto mb-10 md:mb-16">
        <div className="border border-white/30 md:border-white/30 overflow-hidden">
          <div className="md:hidden">
            <div className="flex flex-col items-center justify-center py-6 border-b border-white/30 h-[120px]">
              <img
                src="/brand/apexstack-logo.png"
                alt="ApexStack"
                width="202"
                height="48"
                className="h-12 "
              />
            </div>
            <div className="p-6 border-b border-[#FFFFFF66]/30">
              <div className="text-center mb-4">
                <p className="text-[21px] font-medium mb-2">
                  Join our newsletter
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  Occasional notes on architecture, delivery and building software that lasts
                </p>
              </div>
              <div className="w-full">
                <NewsletterForm />
              </div>
            </div>
            <div className="p-6 border-b border-[#FFFFFF66]/30">
              <div className="space-y-6">
                {columns.map((column, index) => (
                  <div key={column.heading}>
                    {/* Fixed-length array indexed by column position: a fifth
                        column would otherwise render className={undefined}. */}
                    <h3 className={mobileHeadingClasses[index] ?? mobileHeadingClasses[1]}>
                      {column.heading}
                    </h3>
                    <div className="space-y-2">
                      {column.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="block text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 font-fira-sans p-6">
              <div className="flex items-center gap-4">
                {socials.map(({ href, label, Icon, mobileBorderClass }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      title={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-black/50 border ${mobileBorderClass} p-2 rounded opacity-70 hover:opacity-100 hover:bg-white/10 hover:border-white/40 hover:scale-110 transition-all duration-200`}
                    >
                      <Icon />
                    </a>
                  ) : (
                    <span
                      key={label}
                      title={`${label} — coming soon`}
                      aria-hidden="true"
                      className={`bg-black/50 border ${mobileBorderClass} p-2 rounded opacity-30 inline-flex`}
                    >
                      <Icon />
                    </span>
                  ),
                )}
              </div>
              <CurrencySelect />
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="w-[30%] border-r border-white/30 flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center p-8">
                <img
                  src="/brand/apexstack-logo.png"
                  alt="ApexStack"
                  width="202"
                  height="48"
                  className="h-12 mb-4"
                />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors text-center break-all mb-3"
                >
                  {COMPANY.email}
                </a>
                <p className="text-sm text-gray-400 text-center">
                  © 2026 {COMPANY.brand}. All rights reserved
                </p>
                <p className="text-xs text-gray-500 text-center mt-2 max-w-[220px]">
                  {COMPANY.brand} is a brand of {COMPANY.legalName}, a{" "}
                  {COMPANY.entityType} registered in {COMPANY.country}.
                </p>
              </div>
              <div className=" flex items-center justify-around p-6">
                <div className="flex items-center justify-center gap-4 ">
                  {socials.map(({ href, label, Icon }) =>
                    href ? (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        title={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded opacity-70 hover:opacity-100 transition-opacity"
                      >
                        <Icon />
                      </a>
                    ) : (
                      <span
                        key={label}
                        title={`${label} — coming soon`}
                        aria-hidden="true"
                        className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded opacity-30 inline-flex"
                      >
                        <Icon />
                      </span>
                    ),
                  )}
                </div>
                <div className="flex justify-center">
                  <CurrencySelect />
                </div>
              </div>
            </div>
            <div className="w-[75%] flex flex-col">
              <div className="border-b border-white/30 p-8">
                <div className="grid grid-cols-4 gap-8">
                  {columns.map((column) => (
                    <div key={column.heading}>
                      <h3 className="text-sm font-medium mb-4 text-white">
                        {column.heading}
                      </h3>
                      <div className="space-y-3">
                        {column.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="block text-gray-400 hover:text-white transition-colors text-sm"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 font-fira-sans">
                <div className="flex items-center gap-12">
                  <div className="w-[40%]">
                    <p className="text-lg font-medium mb-2">
                      Join our newsletter
                    </p>
                    <p className="text-sm text-gray-400">
                      Occasional notes on architecture, delivery and building software that lasts
                    </p>
                  </div>
                  <div className="w-[60%]">
                    <NewsletterForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden mt-6 text-center px-4">
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-sm text-white hover:text-[#B4CC04] transition-colors break-all"
          >
            {COMPANY.email}
          </a>
          <p className="text-sm text-white mt-3">
            © 2026 {COMPANY.brand}. All rights reserved
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {COMPANY.brand} is a brand of {COMPANY.legalName}, a {COMPANY.entityType}{" "}
            registered in {COMPANY.country}.
          </p>
        </div>
      </div>
    </footer>
  );
}
