"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

interface TrackedBlogLinkProps {
  href: string;
  postSlug: string;
  destination: "contact" | "pricing" | "service";
  serviceSlug?: string;
  className: string;
  accent?: boolean;
  children: React.ReactNode;
}

export function TrackedBlogLink({
  href,
  postSlug,
  destination,
  serviceSlug,
  className,
  accent = false,
  children,
}: TrackedBlogLinkProps) {
  function recordIntent() {
    window.sessionStorage.setItem("apexstack_blog_origin", postSlug);
    track("Blog CTA Click", {
      article: postSlug,
      destination,
      service: serviceSlug ?? "unmapped",
    });
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={recordIntent}
      style={accent ? { backgroundColor: "#B4CC04" } : undefined}
    >
      {children}
    </Link>
  );
}
