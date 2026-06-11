"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Cargando horario...");
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check shop status based on CDMX Time (UTC-6)
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const utcHours = now.getUTCHours();
      const utcDay = now.getUTCDay(); // 0 is Sunday, 1 is Monday, etc.
      
      // Convert UTC to CDMX Time (UTC-6)
      let cdmxDay = utcDay;
      let cdmxHour = utcHours - 6;
      if (cdmxHour < 0) {
        cdmxHour += 24;
        cdmxDay = (cdmxDay - 1 + 7) % 7;
      }
      
      // Monday to Sunday: 12:00 to 20:00
      const isOpenTime = cdmxHour >= 12 && cdmxHour < 20;
      
      if (isOpenTime) {
        setIsOpen(true);
        setStatusMessage("¡Abierto ahora! Cerramos a las 8:00 PM");
      } else {
        setIsOpen(false);
        if (cdmxHour < 12) {
          setStatusMessage("Cerrado • Abrimos hoy a las 12:00 PM");
        } else {
          setStatusMessage("Cerrado • Abrimos mañana a las 12:00 PM");
        }
      }
    };
    
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Show/Hide Scroll-to-Top Button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setNewsletterStatus("error");
      return;
    }
    setNewsletterStatus("loading");
    setTimeout(() => {
      setNewsletterStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="relative bg-[#2e2c2c] text-totto-cream-dark border-t border-totto-red/10 pt-16 pb-12 overflow-hidden">
      {/* Dynamic Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-totto-red text-totto-cream shadow-lg transition-all duration-300 hover:bg-totto-red-light hover:scale-110 active:scale-95 border border-totto-cream/10 focus:outline-none ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Ir al inicio de la página"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Status Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block focus:outline-none">
              <img 
                src="/images/LogoHeader.png" 
                alt="Totto Gelato Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-totto-cream-dark/80 max-w-md leading-relaxed">
              Descubre el verdadero gelato artesanal en CDMX. Elaborado a mano diariamente en lotes pequeños con fruta fresca mexicana y recetas tradicionales italianas.
            </p>
            
            {/* Reactive Status Card */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl shadow-sm">
              <span className={`relative flex h-3 w-3`}>
                {isOpen && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                )}
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen ? "bg-emerald-500" : "bg-totto-red-light"}`}></span>
              </span>
              <span className="text-xs font-semibold text-white tracking-wide">
                {statusMessage}
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sabores" className="hover:text-white transition-colors duration-200 block py-1">
                  Nuestros Sabores
                </Link>
              </li>
              <li>
                <Link href="/#proceso" className="hover:text-white transition-colors duration-200 block py-1">
                  Proceso Artesanal
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors duration-200 block py-1">
                  Nuestra Filosofía
                </Link>
              </li>
              <li>
                <Link href="/#encuentranos" className="hover:text-white transition-colors duration-200 block py-1">
                  Ubicación & Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Club del Gelato</h4>
            <p className="text-xs text-totto-cream-dark/75 leading-relaxed">
              Recibe notificaciones exclusivas de nuestros sabores secretos y ofertas especiales de temporada.
            </p>
            
            {/* Reactive Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (newsletterStatus === "error") setNewsletterStatus("idle");
                  }}
                  placeholder="Tu correo electrónico"
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-totto-cream-dark/40 focus:outline-none focus:border-totto-red focus:ring-1 focus:ring-totto-red flex-1"
                  required
                  disabled={newsletterStatus === "loading" || newsletterStatus === "success"}
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "loading" || newsletterStatus === "success"}
                  className="bg-totto-red hover:bg-totto-red-light disabled:bg-white/10 disabled:text-white/40 text-totto-cream font-bold text-xs px-6 py-2.5 rounded-full shadow-md transition-all flex items-center justify-center min-h-[40px] focus:outline-none"
                >
                  {newsletterStatus === "loading" ? (
                    <svg className="animate-spin h-5 w-5 text-totto-cream" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : newsletterStatus === "success" ? (
                    "✓ ¡Suscrito!"
                  ) : (
                    "Unirme"
                  )}
                </button>
              </div>

              {/* Status Message */}
              {newsletterStatus === "success" && (
                <p className="text-xs text-emerald-400 font-semibold animate-fade-in">
                  ¡Gracias por unirte! Te mantendremos informado.
                </p>
              )}
              {newsletterStatus === "error" && (
                <p className="text-xs text-totto-red-light font-semibold animate-shake">
                  Por favor ingresa un correo válido.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Totto Gelato. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="https://www.google.com/maps/place/totto+gelato/data=!4m2!3m1!1s0x85d1ff12d2602757:0x5594c11e6dae3397?sa=X&ved=1t:242&ictx=111" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Google Maps
            </a>
            <a href="https://www.instagram.com/totto.gelato/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a href="https://wa.me/525580807417" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
