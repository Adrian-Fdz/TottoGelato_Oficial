import Image from "next/image";
import { Sabor } from "@/data/sabores";

type FlavorCardProps = {
  sabor: Sabor;
  onClick: (sabor: Sabor) => void;
};

export default function FlavorCard({ sabor, onClick }: FlavorCardProps) {
  // Category coloring helper
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "gourmet":
        return "bg-totto-pistachio/10 text-totto-pistachio border-totto-pistachio/20";
      case "top":
        return "bg-totto-honey/10 text-totto-honey border-totto-honey/20";
      case "select":
        return "bg-totto-red/10 text-totto-red border-totto-red/20";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  // State tag helper
  const getStateLabel = (state: string) => {
    switch (state) {
      case "nuevo":
        return "Nuevo";
      case "temporal":
        return "Temporal";
      default:
        return "";
    }
  };

  // Label tag helper
  const getTagLabel = (tag: Sabor["etiquetas"][number]) => {
    if (tag === "sin-azucar") {
      return "Sin azúcar";
    }
    return tag;
  };

  return (
    <article
      onClick={() => onClick(sabor)}
      className="group bg-white rounded-3xl p-5 border border-[#E5E5E5] hover:shadow-md hover:border-totto-red/10 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full relative"
    >
      <div>
        {/* Badges Container (Absolute top-8 left-8) */}
        <div className="absolute top-8 left-8 z-10 flex flex-wrap gap-1.5 pointer-events-none">
          {sabor.estado && (
            <span className="bg-[#690d0d] text-totto-cream font-bold text-[10px] px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
              {getStateLabel(sabor.estado)}
            </span>
          )}
          {sabor.etiquetas.map((tag) => (
            <span
              key={tag}
              className="bg-white/90 backdrop-blur-sm text-totto-dark border border-totto-dark/10 font-medium text-[9px] px-2 py-0.5 rounded-full shadow-sm"
            >
              {getTagLabel(tag)}
            </span>
          ))}
        </div>

        {/* Image Container */}
        <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-totto-cream-dark/15 border border-[#E5E5E5]/50 mb-5">
          <Image
            src={sabor.imagen}
            alt={`Gelato de ${sabor.nombre} de Totto Gelato`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 50vw"
          />
        </div>

        {/* Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-sans text-lg font-bold text-totto-dark group-hover:text-totto-red transition-colors leading-tight">
              {sabor.nombre}
            </h3>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${getCategoryStyles(sabor.categoria)}`}>
              {sabor.categoria}
            </span>
          </div>
          <p className="text-xs text-totto-dark/70 line-clamp-3 leading-relaxed">
            {sabor.descripcion}
          </p>
        </div>
      </div>

      {/* Footer card link */}
      <div className="mt-4 pt-4 border-t border-[#F0F0F0] flex items-center justify-between">
        <span className="text-[10px] font-bold text-totto-red group-hover:underline">
          Ver ingredientes
        </span>
        <svg className="w-3.5 h-3.5 text-totto-red transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </article>
  );
}
