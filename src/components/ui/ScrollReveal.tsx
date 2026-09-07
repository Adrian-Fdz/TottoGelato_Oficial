"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mounted once in the root layout. Watches every element marked with
 * `data-reveal` or `data-reveal-stagger` and reveals it the first time it
 * enters the viewport, so sections stay plain Server Components.
 *
 * The `js-reveal` class on <html> is what arms the hidden state in CSS:
 * without JS the class is never added and everything renders normally.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // js-reveal is rendered by the layout, so the hidden state is already
    // armed. All that is left is to drop it when there is nothing to animate.
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      root.classList.remove("js-reveal");
      return;
    }

    // Tells the safety-net script in the layout that the observer is live, so
    // it does not fall back to showing everything unanimated.
    root.dataset.revealReady = "1";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          // Reveal once, then stop paying the observation cost
          observer.unobserve(entry.target);
        }
      },
      {
        // Trigger slightly before the element is fully on screen so the
        // motion reads as "arriving with" the scroll, not lagging behind it
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.1,
      }
    );

    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-reveal-stagger]"
    );

    for (const el of targets) {
      // Anything already in view on load (the hero, above-the-fold copy)
      // is shown immediately rather than animated in after paint
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        el.classList.add("is-revealed");
        continue;
      }
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
