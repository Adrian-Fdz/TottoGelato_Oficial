"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "@/components/ui/TransitionLink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Lift the bar off the page once the user leaves the top, so the sticky
  // header reads as floating above the content instead of sitting in it.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/sabores", label: "Nuestros sabores" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/#encuentranos", label: "Encuéntranos" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#520909] bg-[#690d0d] transition-shadow duration-[var(--duration-base)] ease-[var(--ease-out-soft)] ${
        isScrolled ? "shadow-lg shadow-black/25" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center group"
          aria-label="Totto Gelato Inicio"
        >
          <Image
            src="/images/LogoHeader.webp"
            alt="Totto Gelato"
            width={1800}
            height={1200}
            priority
            sizes="(min-width: 768px) 66px, 60px"
            className="h-10 md:h-11 w-auto transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-soft)] group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`font-medium transition-colors duration-[var(--duration-base)] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-totto-cream after:transition-[width] after:duration-[var(--duration-base)] after:ease-[var(--ease-out-soft)] hover:text-white hover:after:w-full ${
                    pathname === link.href
                      ? "text-white after:w-full"
                      : "text-totto-cream/90 after:w-0"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Prominent CTA */}
          <Link
            href="/#sabores"
            className="ml-4 inline-flex items-center justify-center rounded-full bg-totto-cream px-5 py-2.5 text-sm font-semibold text-totto-red-dark shadow-md transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95"
          >
            Sabores del Mes
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-totto-cream hover:bg-white/10 focus:ring-2 focus:ring-totto-cream lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label="Alternar menú de navegación"
        >
          {isMenuOpen ? (
            /* Close Icon */
            <svg
              className="h-6 w-6 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              className="h-6 w-6 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden border-t border-[#520909] transition-all duration-[var(--duration-slow)] ease-[var(--ease-out-soft)] ${
          isMenuOpen
            ? "max-h-[320px] opacity-100 py-4 bg-[#690d0d]"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-medium text-totto-cream/90 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Prominent CTA Mobile */}
          <Link
            href="/#sabores"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 w-full text-center rounded-full bg-totto-cream px-5 py-3 text-sm font-semibold text-totto-red-dark shadow-md transition-colors hover:bg-white block"
          >
            Sabores del Mes
          </Link>
        </nav>
      </div>
    </header>
  );
}
