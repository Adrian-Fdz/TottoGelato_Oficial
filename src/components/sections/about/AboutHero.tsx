import Link from "next/link";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-[#690d0d] text-totto-cream pt-8 pb-4 md:pt-12 md:pb-6 overflow-hidden border-b border-[#520909]">
      {/* Background texture */}
      <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none"></div>

      {/* Botanical ornamental line art overlay */}
      <img
        src="/images/nosotros_hero_botanical.png"
        alt="Ornamental botanical leaves"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none opacity-10 mix-blend-screen select-none z-0"
      />

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">

        {/* Back Link */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-totto-cream/70 hover:text-white transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> VOLVER AL INICIO
          </Link>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* LEFT COLUMN: Texts and Cards */}
          <div className="lg:col-span-7 space-y-3 md:space-y-4 flex flex-col items-start text-left">
            <span className="text-totto-cream-dark/60 font-bold uppercase tracking-[0.2em] text-xs block">
              NUESTRA HISTORIA Y PASIÓN
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-condensed text-white leading-[1.1]">
              De Florencia a la Narvarte
            </h1>

            <p className="text-sm sm:text-base text-totto-cream/80 leading-relaxed font-light max-w-2xl">
              Conoce el origen, el método y la filosofía detrás del gelato más cremoso de la Ciudad de México. Una receta honesta que combina la técnica florentina con los mejores ingredientes locales.
            </p>

            {/* Three Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4">

              {/* Card 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between space-y-3 hover:bg-white/8 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-totto-cream/90">
                    {/* Leaf Icon */}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs sm:text-sm text-totto-cream leading-tight">Ingredientes naturales</h4>
                  <p className="text-[10px] sm:text-[11px] text-totto-cream/75 leading-snug font-light">Seleccionados con cuidado y sin conservadores.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between space-y-3 hover:bg-white/8 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-totto-cream/90">
                    {/* Whisk or process icon */}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs sm:text-sm text-totto-cream leading-tight">Hecho diariamente</h4>
                  <p className="text-[10px] sm:text-[11px] text-totto-cream/75 leading-snug font-light">Pequeños lotes para garantizar frescura y calidad.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between space-y-3 hover:bg-white/8 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-totto-cream/90">
                    {/* Book Icon */}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs sm:text-sm text-totto-cream leading-tight">Recetas con historia</h4>
                  <p className="text-[10px] sm:text-[11px] text-totto-cream/75 leading-snug font-light">Inspiradas en la tradición italiana, hechas en México.</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Large Image Card with stamp */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">

            {/* Dotted stamp badge */}
            <div className="absolute -top-6 left-6 lg:left-auto lg:-left-8 z-20 h-20 w-20 rounded-full overflow-hidden shadow-lg transform -rotate-12 select-none border border-white/10 bg-[#690d0d]">
              <Image
                src="/images/florencia_stamp_badge.png"
                alt="Sello Desde Florencia Artesanal"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            {/* Image Wrapper */}
            <div className="relative w-full max-w-[360px] md:max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-[#520909]/40">
              <Image
                src="/images/nosotros_hero_gelato_wide.png"
                alt="Gelatos artesanales en vitrina de Totto Gelato"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 80vw"
              />
              {/* Subtle dark overlay gradient at the bottom of image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>

        </div>

        {/* BOTTOM: Down Arrow Anchor */}
        <div className="flex flex-col items-center justify-center pt-4 lg:pt-6 w-full text-center">
          <a
            href="#historia"
            className="flex flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-totto-cream/50 hover:text-white transition-colors group focus:outline-none"
          >
            <span className="flex items-center justify-center h-8 w-8 rounded-full border border-white/20 text-totto-cream/70 group-hover:border-white group-hover:text-white transition-all transform group-hover:translate-y-0.5">
              ↓
            </span>
            DESCUBRE NUESTRA HISTORIA
          </a>
        </div>

      </div>
    </section>
  );
}
