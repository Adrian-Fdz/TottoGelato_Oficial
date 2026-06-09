import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import Historia from "@/components/sections/about/Historia";
import MetodoArtesanal from "@/components/sections/about/MetodoArtesanal";
import MisionVisionValores from "@/components/sections/about/MisionVisionValores";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "Nosotros | Totto Gelato",
  description: "Conoce nuestra historia de Florencia a la Narvarte, nuestra filosofía y nuestro método artesanal de elaboración de gelato.",
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-[#fbf7e6] text-totto-dark pb-24 relative overflow-hidden">
      {/* Texture background overlay */}
      <div className="absolute inset-0 bg-texture opacity-[0.03] pointer-events-none z-0"></div>

      <AboutHero />
      <Historia />
      <MetodoArtesanal />
      <MisionVisionValores />
      <AboutCTA />
    </main>
  );
}
