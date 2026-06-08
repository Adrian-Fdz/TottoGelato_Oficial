import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 bg-totto-white">
      {/* HERO SECTION WITH 16:9 BACKGROUND IMAGE */}
      <section className="relative flex w-full min-h-[420px] h-[44.25vw] max-h-[720px] items-center overflow-hidden border-b border-totto-red/10">
        
        {/* Background Image (FondoHero.png, max-h 720, object-right for left-to-right compression) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/HeroBackshot.png"
            alt="Fondo oficial Totto Gelato"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-8 w-full relative z-10">
          {/* TEXT CONTENT (H1 and 2 buttons only, left-aligned) */}
          <div className="max-w-2xl space-y-6 lg:space-y-8 text-left">

            <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white lg:leading-tight drop-shadow-md">
              Gelato artesanal <br />
              hecho <span className="text-totto-cream bg-[#690d0d]/90 px-3.5 py-1 rounded-2xl border border-white/20 inline-block transform hover:-rotate-1 transition-transform shadow-md">diferente</span>
            </h1>
            
            <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <Link
                href="#sabores-mes"
                className="inline-flex items-center justify-center rounded-full bg-totto-red px-8 py-3.5 text-base font-bold text-totto-cream shadow-lg hover:bg-totto-red-dark hover:scale-105 active:scale-95 text-center transition-all"
              >
                Ver sabores del mes
              </Link>
              <Link
                href="#encuentranos"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-[#690d0d]/40 px-8 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-[#690d0d]/75 hover:scale-105 active:scale-95 text-center"
              >
                Cómo llegar
              </Link>
            </div>
          </div>
        </div>
      </section>




      {/* TEMPORARY SECTIONS FOR VISUAL ANCHORING */}
      <section id="sabores" className="py-16 bg-totto-cream-dark/10 border-t border-totto-red/5">
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-totto-dark sm:text-4xl">Nuestros Sabores</h2>
          <p className="mt-4 text-totto-dark/70">[Sección de Sabores en construcción...]</p>
        </div>
      </section>

      <section id="nosotros" className="py-16 bg-totto-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-totto-dark sm:text-4xl">Nosotros</h2>
          <p className="mt-4 text-totto-dark/70">[Sección Nosotros en construcción...]</p>
        </div>
      </section>

      <section id="encuentranos" className="py-16 bg-totto-cream-dark/10">
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-totto-dark sm:text-4xl">Encuéntranos</h2>
          <p className="mt-4 text-totto-dark/70">[Sección Encuéntranos en construcción...]</p>
        </div>
      </section>
    </main>
  );
}


