import Link from "@/components/ui/TransitionLink";
import Image from "next/image";

export default function AboutCTA() {
  return (
    <section className="snap-section mx-auto max-w-5xl px-6 md:px-8 pt-10 text-center md:text-left relative z-10">
      <div className="bg-gradient-to-br from-[#690d0d] via-[#5c0b0b] to-[#3a0606] text-totto-cream rounded-[2.5rem] p-8 md:p-12 border border-[#520909] shadow-2xl relative overflow-hidden group">
        
        {/* Background Texture & Light effect */}
        <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* LEFT: Text & Buttons */}
          <div className="lg:col-span-7 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left" data-reveal="left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-totto-honey animate-pulse"></span>
              <span className="text-totto-cream font-bold uppercase tracking-widest text-[9px]">
                VISÍTANOS HOY
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold font-condensed leading-tight">
              ¿Listo para probar la diferencia?
            </h3>
            
            <p className="text-sm md:text-base text-totto-cream/80 font-light leading-relaxed max-w-lg">
              Pásate por nuestro local en la colonia Narvarte o descubre la selección de sabores especiales que tenemos preparados para este mes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <Link
                href="/sabores"
                className="inline-flex items-center justify-center rounded-full bg-totto-cream px-8 py-3.5 text-sm font-bold text-totto-red-dark hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                Nuestros sabores
              </Link>
              <Link
                href="/#encuentranos"
                className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white px-8 py-3.5 text-sm font-bold text-totto-cream hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Cómo Llegar
              </Link>
            </div>
          </div>

          {/* RIGHT: Image container */}
          <div className="lg:col-span-5 hidden lg:block relative" data-reveal="right">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/15 relative transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-[#520909]/40 group-hover:scale-[1.02]">
              <Image
                src="/images/local_gelato_detail.webp"
                alt="Gelato artesanal cremoso en vitrina"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
