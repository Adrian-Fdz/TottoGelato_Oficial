"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
  date: string;
  source: "Google" | "Instagram" | "Foodie";
  initials: string;
  accentColor: string;
}

export default function Testimonios() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const DURATION = 7000;

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Miguel Morales",
      role: "Cliente Frecuente",
      review:
        "El mejor gelato de pistache en toda la CDMX. La textura es increíblemente densa y cremosa, idéntica a la que probé en las tradicionales gelaterías de Florencia. Se nota de inmediato la pureza del ingrediente.",
      rating: 5,
      date: "Hace 2 semanas",
      source: "Google",
      initials: "MM",
      accentColor: "totto-honey",
    },
    {
      id: 2,
      name: "Helena Ornelas",
      role: "Food Blogger",
      review:
        "Los sabores de temporada de Totto Gelato son una obra de arte. El de maracuyá con albahaca fresca es simplemente espectacular, un balance de acidez y dulzura perfecto. ¡Se ha convertido en mi parada semanal obligada!",
      rating: 5,
      date: "Hace 1 mes",
      source: "Instagram",
      initials: "HO",
      accentColor: "totto-red",
    },
    {
      id: 3,
      name: "Lucia Gonzales",
      role: "Local Guide",
      review:
        "Me encanta el taller abierto donde puedes ver cómo mantecan el helado en el momento. Cero aditivos, sin bases industriales y en el corazón de la Narvarte. La atención es sumamente cálida e italiana.",
      rating: 5,
      date: "Hace 3 días",
      source: "Google",
      initials: "LG",
      accentColor: "totto-pistachio",
    },
    {
      id: 4,
      name: "Jose Guevara",
      role: "Vecino Narvarte",
      review:
        "Desde que abrieron cambió la cuadra. Cada que paso por la calle el olor es irresistible. Mis hijos ya no piden helado de marca, sólo quieren Totto. Es otra cosa completamente distinta. 100% recomendado.",
      rating: 5,
      date: "Hace 1 semana",
      source: "Google",
      initials: "JG",
      accentColor: "totto-hazelnut",
    },
  ];

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
        setProgress(0);
      }, 350);
    },
    [activeIndex, isTransitioning]
  );

  const startTimers = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);

    const tick = 40;
    const inc = (tick / DURATION) * 100;
    progressRef.current = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + inc));
    }, tick);

    autoPlayRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
        setProgress(0);
      }, 350);
    }, DURATION);
  }, [testimonials.length]);

  const selectTestimonial = useCallback(
    (index: number) => {
      goTo(index);
      startTimers();
    },
    [goTo, startTimers]
  );

  useEffect(() => {
    startTimers();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [startTimers]);

  const active = testimonials[activeIndex];

  const SourceIcon = ({ source }: { source: string }) => {
    if (source === "Google")
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
      );
    return (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    );
  };

  return (
    <section
      id="testimonios"
      className="relative py-28 overflow-hidden"
    >
      {/* Warm cream background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf7e6] via-[#f8f0d4] to-[#fbf7e6]" />
      
      {/* Subtle radial glow accent */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-totto-red/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-totto-honey/[0.04] blur-[100px] pointer-events-none" />
      
      {/* Top edge accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-totto-red/15 to-transparent" />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-texture-waffle opacity-50 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-totto-red/5 border border-totto-red/10">
            <span className="h-1.5 w-1.5 rounded-full bg-totto-honey animate-pulse" />
            <span className="text-totto-red font-bold uppercase tracking-[0.25em] text-[9px] sm:text-[10px]">
              OPINIONES VERIFICADAS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-totto-dark font-condensed leading-[1.05]">
            Lo Que Dicen<br className="hidden sm:block" /> Nuestros Clientes
          </h2>
          <p className="text-sm sm:text-base text-totto-dark/50 font-light max-w-xl mx-auto leading-relaxed">
            Reseñas reales de quienes ya descubrieron la diferencia del gelato artesanal auténtico.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT: Large Quote Card */}
          <div className="lg:col-span-7 relative">
            {/* Giant decorative quote mark */}
            <div className="absolute -top-8 -left-2 text-totto-red/[0.07] text-[180px] md:text-[240px] leading-none font-serif select-none pointer-events-none z-0">
              &ldquo;
            </div>

            <div
              className={`relative z-10 transition-all duration-350 ${
                isTransitioning
                  ? "opacity-0 translate-y-3 scale-[0.98]"
                  : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1.5 mb-6">
                {[...Array(active.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-totto-honey fill-current drop-shadow-[0_0_4px_rgba(226,163,71,0.25)]"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl text-totto-dark/85 font-light leading-relaxed tracking-tight font-sans mb-8">
                &ldquo;{active.review}&rdquo;
              </blockquote>

              {/* Author row */}
              <div className="flex items-center gap-4">
                {/* Avatar initials */}
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-totto-red to-totto-red-dark flex items-center justify-center border-2 border-totto-red/20 shadow-lg shadow-totto-red/10">
                  <span className="text-totto-cream font-bold text-sm tracking-wide">
                    {active.initials}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-totto-dark text-base">
                    {active.name}
                  </span>
                  <span className="text-xs text-totto-dark/40 font-medium">
                    {active.role} · {active.date}
                  </span>
                </div>
                {/* Source badge */}
                <div className="ml-auto flex items-center gap-1.5 bg-white/70 border border-totto-red/8 rounded-full px-3 py-1.5 shadow-sm">
                  <SourceIcon source={active.source} />
                  <span className="text-[10px] font-bold text-totto-dark/60 uppercase tracking-wider">
                    {active.source}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Selection panel + stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Testimonial selector cards */}
            <div className="space-y-3">
              {testimonials.map((t, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={t.id}
                    onClick={() => selectTestimonial(idx)}
                    className={`w-full text-left rounded-2xl p-4 transition-all duration-300 border relative overflow-hidden group ${
                      isActive
                        ? "bg-white border-totto-red/15 shadow-lg shadow-totto-red/5"
                        : "bg-white/50 border-totto-dark/5 hover:bg-white/80 hover:border-totto-red/10 hover:shadow-md"
                    }`}
                  >
                    {/* Progress bar on active */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-[2px] bg-totto-red rounded-full transition-all duration-75" style={{ width: `${progress}%` }} />
                    )}
                    
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 flex-shrink-0 ${
                          isActive
                            ? "bg-totto-red text-totto-cream scale-110"
                            : "bg-totto-red/5 text-totto-dark/40 group-hover:text-totto-dark/60 group-hover:bg-totto-red/10"
                        }`}
                      >
                        {t.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className={`block text-sm font-bold truncate transition-colors duration-300 ${
                            isActive ? "text-totto-dark" : "text-totto-dark/50 group-hover:text-totto-dark/70"
                          }`}
                        >
                          {t.name}
                        </span>
                        <span className="block text-[10px] text-totto-dark/30 truncate">
                          {t.role} · vía {t.source}
                        </span>
                      </div>
                      {/* Active indicator dot */}
                      <div
                        className={`h-2 w-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                          isActive ? "bg-totto-red scale-100" : "bg-totto-dark/10 scale-75"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mini stats strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white/70 border border-totto-red/5 rounded-xl px-3 py-4 text-center shadow-sm">
                <span className="block text-2xl font-extrabold text-totto-dark font-condensed">4.6</span>
                <span className="block text-[9px] text-totto-dark/40 font-semibold uppercase tracking-wider mt-1">Calificación</span>
              </div>
              <div className="bg-white/70 border border-totto-red/5 rounded-xl px-3 py-4 text-center shadow-sm">
                <span className="block text-2xl font-extrabold text-totto-dark font-condensed">175+</span>
                <span className="block text-[9px] text-totto-dark/40 font-semibold uppercase tracking-wider mt-1">Reseñas</span>
              </div>
              <div className="bg-white/70 border border-totto-red/5 rounded-xl px-3 py-4 text-center shadow-sm">
                <span className="block text-2xl font-extrabold text-totto-dark font-condensed">100%</span>
                <span className="block text-[9px] text-totto-dark/40 font-semibold uppercase tracking-wider mt-1">Recomiendan</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-totto-red/10 to-transparent" />
    </section>
  );
}
