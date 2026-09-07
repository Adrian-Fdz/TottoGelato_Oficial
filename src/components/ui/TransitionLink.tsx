"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type TransitionLinkProps = ComponentProps<typeof Link>;

/** Matches the exit animation in globals.css (--duration-fast). */
const EXIT_MS = 150;
/** If a navigation never lands, un-fade the page rather than leave it blank. */
const RECOVERY_MS = 1500;

/**
 * Drop-in replacement for next/link that animates the route change.
 *
 * The direction comes from where the user is going:
 *   - home            -> "back"    (page arrives from the left)
 *   - anywhere deeper -> "forward" (page arrives from the right)
 *   - same route      -> untouched, the anchor scroll says it all
 *
 * The old page fades out first, then the router navigates, so the two
 * pages hand off instead of hard-cutting. Every bail-out path falls
 * through to plain <Link> behaviour, so navigation still works when the
 * animation can't or shouldn't run (modified click, reduced motion, no JS).
 * PageTransition clears the leaving state once the new route is mounted.
 */
export default function TransitionLink({
  href,
  onClick,
  ...props
}: TransitionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isStringHref = typeof href === "string";
  const targetPath = isStringHref ? href.split(/[?#]/)[0] || pathname : pathname;
  const direction = targetPath === "/" ? "back" : "forward";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) return;

    // Let the browser handle anything that isn't a plain left click,
    // an object href, or a link that stays on the current route.
    if (
      !isStringHref ||
      targetPath === pathname ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target === "_blank"
    ) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;

    // A second click mid-transition would stack timers and could
    // strand the page half-faded.
    if (root.classList.contains("is-leaving")) {
      event.preventDefault();
      return;
    }

    event.preventDefault();

    root.dataset.nav = direction;
    root.classList.add("is-leaving");

    window.setTimeout(() => router.push(href), EXIT_MS);
    window.setTimeout(
      () => root.classList.remove("is-leaving"),
      RECOVERY_MS
    );
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
