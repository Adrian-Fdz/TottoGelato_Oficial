"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sabor, sabores, SaborTipo } from "@/data/sabores";
import FlavorCard from "@/components/ui/FlavorCard";

export default function SaboresCatalog() {
  const [activeFilter, setActiveFilter] = useState<"todos" | SaborTipo>("todos");
  const [selectedSabor, setSelectedSabor] = useState<Sabor | null>(null);

  // Derived during render: the list is a pure function of the active filter,
  // so keeping it in state would only add a second render on every change.
  const filteredSabores =
    activeFilter === "todos"
      ? sabores
      : sabores.filter((s) => s.tipo === activeFilter);

  // Accessibility keyboard close for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSabor(null);
      }
    };
    if (selectedSabor) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedSabor]);

  // The page behind an open modal must not scroll, and the card that
  // opened it should get focus back when it closes.
  useEffect(() => {
    if (!selectedSabor) return;

    const opener = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
      opener?.focus?.();
    };
  }, [selectedSabor]);

  const filters: { label: string; value: "todos" | SaborTipo }[] = [
    { label: "Todos", value: "todos" },
    { label: "Frutas", value: "frutas" },
    { label: "Cremosos", value: "cremosos" },
    { label: "Chocolate", value: "chocolate" },
    { label: "Sin azúcar", value: "sin-azucar" },
  ];

  return (
    <section className="bg-[#fbf7e6] py-20 min-h-screen relative z-10 overflow-hidden">
      {/* Artisanal waffle texture overlay */}
      <div className="absolute inset-0 bg-texture-waffle pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" data-reveal>
          <span className="text-totto-red font-bold uppercase tracking-widest text-xs">
            Catálogo completo
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-totto-dark font-condensed">
            Nuestros <span className="text-[#8f1f1f]">sabores</span>
          </h1>
          <p className="text-base sm:text-lg text-totto-dark/80 max-w-2xl mx-auto leading-relaxed">
            Elaborados a mano con ingredientes naturales. El catálogo se actualiza con nuevas creaciones cada temporada.
          </p>

          {/* CATEGORIES PILLS EXPLANATION */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border bg-totto-pistachio/5 border-totto-pistachio/20 text-totto-pistachio">
              <span className="h-1.5 w-1.5 rounded-full bg-totto-pistachio"></span>
              Gourmet (Sabores Tradicionales Italianos)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border bg-totto-honey/5 border-totto-honey/20 text-totto-honey">
              <span className="h-1.5 w-1.5 rounded-full bg-totto-honey"></span>
              Top (Recetas Locales Innovadoras)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border bg-totto-red/5 border-totto-red/20 text-totto-red">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8f1f1f]"></span>
              Select (Ediciones Especiales)
            </span>
          </div>
        </div>

        {/* FILTERS & COUNTER */}
        <div className="flex flex-col items-center justify-center gap-4 border-b border-totto-dark/5 pb-6 mb-10 w-full text-center">
          {/* Filters Row */}
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filtros de catálogo">
            {filters.map((filter) => {
              const isSelected = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-200 focus:ring-2 focus:ring-totto-red/30 cursor-pointer ${
                    isSelected
                      ? "bg-[#8f1f1f] text-white border-[#8f1f1f] shadow-sm hover:bg-[#7a1a1a]"
                      : "bg-white text-totto-dark/85 border-[#E5E5E5] hover:bg-gray-50 hover:border-totto-dark/20"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Counter */}
          <div className="text-sm font-bold text-totto-dark/60 uppercase tracking-wider">
            {filteredSabores.length} {filteredSabores.length === 1 ? "sabor" : "sabores"}
          </div>
        </div>

        {/* CATALOG GRID */}
        {filteredSabores.length > 0 ? (
          <div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in"
          >
            {filteredSabores.map((sabor) => (
              <FlavorCard
                key={sabor.id}
                sabor={sabor}
                onClick={setSelectedSabor}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#E5E5E5] max-w-xl mx-auto space-y-3">
            <span className="text-3xl block">🍦</span>
            <h3 className="font-sans text-lg font-bold text-totto-dark">No se encontraron sabores</h3>
            <p className="text-sm text-totto-dark/70 max-w-xs mx-auto leading-relaxed">
              Pronto añadiremos más opciones a esta categoría. Prueba cambiando de filtro.
            </p>
          </div>
        )}

      </div>

      {/* ACCESSIBLE INGREDIENTS MODAL */}
      {selectedSabor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setSelectedSabor(null)}
        >
          {/* Modal Card wrapper */}
          <div
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-totto-red/5 max-w-2xl w-full max-h-[90vh] flex flex-col relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button absolute top right */}
            <button
              onClick={() => setSelectedSabor(null)}
              aria-label="Cerrar"
              className="absolute top-5 right-5 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-md hover:bg-totto-red hover:text-totto-cream hover:scale-105 active:scale-95 text-totto-dark transition-all cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Body Container with scroll */}
            <div className="overflow-y-auto flex-1 flex flex-col md:flex-row">
              {/* Left Column: Image in aspect-square for mobile, full height relative for desktop */}
              <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-full bg-totto-cream-dark/15 border-b md:border-b-0 md:border-r border-[#E5E5E5]">
                <Image
                  src={selectedSabor.imagen}
                  alt={`Gelato de ${selectedSabor.nombre} de Totto Gelato`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>

              {/* Right Column: Text content details */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Status tags */}
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-totto-red/10 text-totto-red border border-totto-red/20 px-2 py-0.5 rounded-md">
                      {selectedSabor.categoria}
                    </span>
                    {selectedSabor.estado && (
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-totto-dark text-white px-2 py-0.5 rounded-md">
                        {selectedSabor.estado}
                      </span>
                    )}
                  </div>

                  <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-totto-dark leading-tight">
                    {selectedSabor.nombre}
                  </h2>

                  <p className="text-sm text-totto-dark/80 leading-relaxed font-light">
                    {selectedSabor.descripcion}
                  </p>

                  <div className="pt-2 border-t border-[#F0F0F0] space-y-2">
                    <span className="text-[11px] font-bold text-totto-dark/50 uppercase tracking-wider block">Ingredientes Completos</span>
                    <p className="text-xs sm:text-sm text-totto-dark/95 leading-relaxed bg-[#fbf7e6] border border-totto-red/5 p-4 rounded-2xl">
                      {selectedSabor.ingredientes}
                    </p>
                  </div>
                </div>

                {/* Footer tags labels */}
                {selectedSabor.etiquetas.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#F0F0F0]">
                    {selectedSabor.etiquetas.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold text-totto-dark/65 bg-gray-100 border border-gray-200/50 px-2.5 py-0.5 rounded-full">
                        {tag === "sin-azucar" ? "Sin azúcar 🍬" : tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
