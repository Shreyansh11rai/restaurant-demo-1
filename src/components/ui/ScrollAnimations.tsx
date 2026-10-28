"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "main > header, main section, main article",
    );

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((target) => {
      const siblingIndex = Array.from(target.parentElement?.children ?? []).indexOf(
        target,
      );
      target.style.setProperty(
        "--scroll-reveal-delay",
        `${(siblingIndex % 4) * 70}ms`,
      );
      target.classList.add("scroll-reveal");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
