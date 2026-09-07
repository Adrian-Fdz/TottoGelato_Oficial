"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * useLayoutEffect warns during server rendering, so fall back to useEffect
 * there. On the client we need the layout variant: the leaving state has to
 * be cleared *before* the browser paints the incoming page, otherwise the new
 * shell renders one frame of the exit animation before the enter one starts.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Wraps the routed content so each page can animate in. Remounting on
 * `pathname` restarts the enter animation defined in globals.css, and the
 * effect clears the leaving state that TransitionLink set before it handed
 * control to the router.
 *
 * `children` is still rendered on the server — it is passed through as a
 * prop, so wrapping it here does not pull the page into the client bundle.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.remove("is-leaving");

    // Scroll snapping is only enabled for routes that are actually laid out as
    // a stack of sections, detected from the rendered DOM so a page opts in
    // just by using .snap-section.
    //
    // The ancestor walk matters: an ancestor with `overflow` other than
    // visible/clip is itself a scroll container, which makes the sections snap
    // areas of *that* box instead of the page. The page scroller would then be
    // left with only the footer to snap to and would yank the reader to the
    // bottom of the document. In that case snapping is switched off instead.
    const section = document.querySelector(".snap-section");

    const snapsToPage = (el: Element | null) => {
      for (let p = el?.parentElement; p && p !== document.body; p = p.parentElement) {
        const { overflowX, overflowY } = getComputedStyle(p);
        const scrolls = (v: string) => v !== "visible" && v !== "clip";
        if (scrolls(overflowX) || scrolls(overflowY)) return false;
      }
      return Boolean(el);
    };

    root.dataset.snap = snapsToPage(section) ? "sections" : "off";
  }, [pathname]);

  return (
    <div key={pathname} className="page-shell flex flex-1 flex-col">
      {children}
    </div>
  );
}
