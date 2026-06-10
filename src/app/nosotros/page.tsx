import type { Metadata } from "next";
import Image from "next/image";
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
    <main className="min-h-screen bg-[#fbf7e6] text-totto-dark relative overflow-hidden">
      <AboutHero />
      <Historia />
      <MetodoArtesanal />

      {/* Container with BackgorundAboutUS.png background */}
      <div className="relative z-10 pb-24">
        {/* Background image container */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40 select-none"
          style={{
            backgroundImage: "url('/images/BackgorundAboutUS.png')",
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat"
          }}
        />

        <div className="relative z-10">
          <MisionVisionValores />
          <AboutCTA />
        </div>
      </div>
    </main>
  );
}
