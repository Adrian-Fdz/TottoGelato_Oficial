"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let instance: Lenis | null = null;

/** Scrolls to the top through Lenis when active, natively otherwise. */
export function scrollToTop() {
  if (instance) instance.scrollTo(0, { duration: 1.6 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Mounted once in the root layout. Adds inertial ("heavy") wheel scrolling:
 * the page eases toward the target instead of following the wheel 1:1.
 *
 * Lenis replaces native scroll-snap and CSS smooth scrolling, so the `lenis`
 * class it puts on <html> switches those off in globals.css. Touch keeps the
 * native momentum, and reduced-motion users get the plain browser scroll.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.07, // lower = floatier / more lag
      wheelMultiplier: 0.9,
      anchors: true,
      autoRaf: true,
    });
    instance = lenis;

    return () => {
      lenis.destroy();
      instance = null;
    };
  }, []);

  return null;
}
