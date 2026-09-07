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
    <main className="min-h-screen bg-[#fbf7e6] text-totto-dark relative overflow-x-clip">
      {/* overflow-x-clip, not overflow-hidden: "hidden" would turn <main> into a
          scroll container, which detaches the sections from the page scroller and
          breaks scroll snapping. "clip" crops without creating a scrollport. */}
      <AboutHero />
      <Historia />
      <MetodoArtesanal />

      {/* Container with BackgorundAboutUS.webp background */}
      <div className="relative z-10 pb-24">
        {/* Background image container */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40 select-none"
          style={{
            backgroundImage: "url('/images/BackgorundAboutUS.webp')",
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
