"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Phase {
  id: number;
  phaseNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  highlight1: string;
  highlight2: string;
  icon: React.ReactNode;
}

export default function MetodoArtesanal() {
  const [activeStep, setActiveStep] = useState(0);
  const [displayedStep, setDisplayedStep] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);
  const progressTimer = useRef<NodeJS.Timeout | null>(null);
  const stepDuration = 10000; // 10 seconds per step

  const phases: Phase[] = [
    {
      id: 0,
      phaseNumber: "01",
      title: "Pureza de Ingredientes",
      subtitle: "Fase 1: La Selección",
      description:
        "Utilizamos frutas frescas mexicanas directo de mercados locales en su punto perfecto de maduración. Para los sabores clásicos tradicionales, importamos ingredientes de origen como el pistache de Sicilia o cacao de alta selección. No agregamos saborizantes artificiales, colorantes ni conservadores.",
      image: "/images/proceso_ingredientes.png",
      badge: "Insumos 100% naturales",
      highlight1: "Cero aditivos",
      highlight2: "Origen certificado",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12m0 0c-2-3-5.5-3-5.5-3S6 11.5 9 12.5m3-0.5c2-3 5.5-3 5.5-3s0.5 2.5-2.5 3.5" />
        </svg>
      ),
    },
    {
      id: 1,
      phaseNumber: "02",
      title: "Balance y Formulación",
      subtitle: "Fase 2: El Equilibrio",
      description:
        "Cada sabor es una fórmula matemática única. Equilibramos minuciosamente los sólidos lácteos, grasas y azúcares naturales para lograr un punto de congelación óptimo. Esto nos permite obtener una cremosidad excepcional sin utilizar estabilizantes químicos ni espesantes artificiales.",
      image: "/images/proceso_mezcla.png",
      badge: "Formulación artesanal",
      highlight1: "Receta propia",
      highlight2: "Balance de sólidos",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 2,
      phaseNumber: "03",
      title: "Maduración en Frío",
      subtitle: "Fase 3: El Reposo",
      description:
        "Nuestras bases pasteurizadas reposan de 12 a 24 horas a 4°C. Este reposo en frío permite que las proteínas de la leche se hidraten y que los aromas naturales de los ingredientes se infundan de manera profunda y homogénea, logrando un sabor mucho más complejo y persistente.",
      image: "/images/proceso_maduracion.png",
      badge: "Reposo lento a 4°C",
      highlight1: "Hidratación óptima",
      highlight2: "Sabor complejo",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V12l3.5 2M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
    },
    {
      id: 3,
      phaseNumber: "04",
      title: "Mantecación y Batido",
      subtitle: "Fase 4: La Textura",
      description:
        "Congelamos la mezcla mientras se bate lentamente en nuestra mantecadora italiana de última generación. Al girar despacio, inyectamos menos del 30% de aire (overrun) a diferencia del helado comercial que lleva hasta 80%. El resultado es un gelato extremadamente denso, sedoso y con un sabor intenso.",
      image: "/images/proceso_mantecacion.png",
      badge: "Mantecación lenta",
      highlight1: "Aire inferior al 30%",
      highlight2: "Sedosidad y densidad",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477A6 6 0 0012 3v18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18" />
        </svg>
      ),
    },
  ];

  const triggerNextStep = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % phases.length;
        setDisplayedStep(next);
        return next;
      });
      setIsFading(false);
      setProgress(0);
    }, 300);
  };

  const startTimers = () => {
    stopTimers();
    setProgress(0);

    // Auto-advance step timer
    autoPlayTimer.current = setInterval(() => {
      triggerNextStep();
    }, stepDuration);

    // Progress bar loader timer (runs every 50ms)
    const intervalTime = 50;
    const increment = (intervalTime / stepDuration) * 100;
    progressTimer.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + increment;
      });
    }, intervalTime);
  };

  const stopTimers = () => {
    if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    if (progressTimer.current) clearInterval(progressTimer.current);
  };

  const selectStep = (index: number) => {
    if (index === activeStep) return;
    setIsFading(true);
    stopTimers();
    setTimeout(() => {
      setActiveStep(index);
      setDisplayedStep(index);
      setIsFading(false);
      startTimers();
    }, 300);
  };

  useEffect(() => {
    startTimers();
    return () => stopTimers();
  }, []);

  const activePhase = phases[displayedStep];

  return (
    <section id="metodo-artesanal" className="py-20 bg-white/60 backdrop-blur-sm border-y border-totto-red/5 relative z-10">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-totto-red/5 border border-totto-red/10">
            <span className="h-2 w-2 rounded-full bg-totto-red animate-pulse"></span>
            <span className="text-totto-red font-extrabold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
              MÉTODO Y ARTESANALIDAD
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-totto-dark font-condensed leading-[1.1]">
            Cómo Trabajamos
          </h2>
          <p className="text-base sm:text-lg text-totto-dark/70 font-light max-w-2xl mx-auto leading-relaxed">
            Crear gelato real requiere paciencia, dedicación e insumos de primera calidad. Sigue las fases de nuestro taller.
          </p>
        </div>

        {/* TIMELINE NAVIGATION (At the top, horizontal, centered) */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          {/* Connector line */}
          <div className="absolute top-5 left-8 right-8 h-[2px] bg-totto-cream-dark -z-10 rounded-full"></div>
          
          {/* Active step progress fill */}
          <div 
            className="absolute top-5 left-8 h-[2px] bg-totto-red -z-10 rounded-full transition-all duration-500"
            style={{ width: `${(activeStep / (phases.length - 1)) * 90 + 5}%` }}
          ></div>

          {/* Timeline points */}
          <div className="flex justify-between items-center">
            {phases.map((phase, idx) => {
              const isActive = activeStep === idx;
              const isCompleted = idx < activeStep;
              
              return (
                <button
                  key={phase.id}
                  onClick={() => selectStep(idx)}
                  className="flex flex-col items-center group focus:outline-none relative w-20"
                >
                  {/* Step Bubble */}
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm ${
                      isActive
                        ? "bg-totto-red border-totto-red text-totto-cream scale-110 ring-4 ring-totto-red/10"
                        : isCompleted
                        ? "bg-totto-red-light border-totto-red-light text-totto-cream"
                        : "bg-white border-totto-cream-dark text-totto-dark hover:border-totto-red/30"
                    }`}
                  >
                    <span className="font-condensed font-bold text-sm">{idx + 1}</span>
                  </div>

                  {/* Step Title Label */}
                  <span
                    className={`mt-2 text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-totto-red scale-105 font-bold"
                        : "text-totto-dark/60 group-hover:text-totto-dark"
                    }`}
                  >
                    {phase.title.split(" ")[0]}
                  </span>

                  {/* Individual active step progress bar loader */}
                  {isActive && (
                    <div className="absolute -bottom-2 w-10 h-1 bg-totto-cream-dark rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-totto-red transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE PHASE DETAILS CARD CONTAINER (Below timeline, horizontal layout) */}
        <div className="bg-white rounded-[2rem] border border-totto-red/5 shadow-xl p-8 md:p-10 overflow-hidden relative">
          
          <div 
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center transition-all duration-300 transform ${
              isFading ? "opacity-0 translate-y-2 scale-[0.99]" : "opacity-100 translate-y-0 scale-100"
            }`}
          >
            
            {/* TEXT COLUMN */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-6 bg-totto-red"></span>
                <span className="text-totto-red font-extrabold uppercase tracking-[0.25em] text-[10px] md:text-xs">
                  {activePhase.subtitle}
                </span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-totto-dark font-condensed leading-tight">
                {activePhase.title}
              </h3>
              
              <p className="text-totto-dark/80 leading-relaxed text-sm md:text-base font-light font-sans min-h-[100px]">
                {activePhase.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-totto-red/5">
                <span className="inline-flex items-center rounded-full bg-totto-red/5 px-3 py-1 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-totto-red border border-totto-red/10">
                  {activePhase.badge}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-totto-pistachio/5 px-3 py-1 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-totto-pistachio border border-totto-pistachio/10">
                  <svg className="h-3 w-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {activePhase.highlight1}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-totto-honey/5 px-3.5 py-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-totto-honey border border-totto-honey/10">
                  <svg className="h-3 w-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                  {activePhase.highlight2}
                </span>
              </div>
            </div>

            {/* IMAGE COLUMN */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              {/* Background decorative square */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl bg-totto-red/5 -z-10 border border-totto-red/5"></div>
              
              {/* Main Image */}
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-totto-red/10 relative group bg-white/40">
                <Image
                  src={activePhase.image}
                  alt={activePhase.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Dynamic icon badge */}
                <div className="absolute top-3 left-3 h-8 w-8 flex items-center justify-center rounded-lg bg-white/95 backdrop-blur-sm text-totto-red border border-white/20 shadow-md">
                  {activePhase.icon}
                </div>

                <span className="absolute bottom-3 left-3 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider bg-totto-red/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-sm">
                  Fase {activePhase.phaseNumber}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
