import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-[#690d0d] text-totto-cream py-24 md:py-32 overflow-hidden border-b border-[#520909]">
      <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none"></div>
      <div className="mx-auto max-w-5xl px-6 md:px-8 relative z-10 text-center space-y-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-totto-cream/70 hover:text-white transition-colors group mb-4"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al inicio
        </Link>
        <span className="text-totto-cream-dark/60 font-bold uppercase tracking-[0.2em] text-xs block">
          NUESTRA HISTORIA Y PASIÓN
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-condensed">
          De Florencia a la Narvarte
        </h1>
        <p className="text-lg md:text-xl text-totto-cream/80 max-w-2xl mx-auto leading-relaxed font-light">
          Conoce el origen, el método y la filosofía detrás del gelato más cremoso de la Ciudad de México.
        </p>
      </div>
    </section>
  );
}
