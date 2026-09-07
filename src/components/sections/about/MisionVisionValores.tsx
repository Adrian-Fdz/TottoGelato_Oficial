import Image from "next/image";

export default function MisionVisionValores() {
  return (
    <section className="snap-section mx-auto max-w-5xl px-6 md:px-8 py-24 space-y-24 relative z-10">
      
      {/* 1. MISIÓN Y VISIÓN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10" data-reveal-stagger>
        
        {/* MISIÓN CARD */}
        <div className="bg-white rounded-[2.5rem] border border-totto-red/5 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group hover:-translate-y-1">
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-totto-red/5">
            <Image
              src="/images/local_fachada.webp"
              alt="Fachada del local de Totto Gelato"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-5 left-6 text-white text-[10px] font-bold uppercase tracking-widest bg-totto-red px-3.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
              NUESTRO PROPÓSITO
            </span>
          </div>
          
          <div className="p-8 md:p-10 flex-grow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-condensed text-3xl font-extrabold text-totto-dark group-hover:text-totto-red transition-colors duration-300">
                Nuestra Misión
              </h3>
              <p className="text-sm md:text-base text-totto-dark/80 leading-relaxed font-light font-sans">
                En Totto Gelato creamos una experiencia única y deliciosa a través de productos de calidad excepcional. Trabajamos con pasión en un ambiente humano y colaborativo, donde cada persona aporta valor para sorprender a nuestros clientes y generar conexiones reales. Buscamos crear riqueza compartida, beneficiando tanto a nuestro equipo como a la comunidad que nos rodea.
              </p>
            </div>
            <span className="h-[2px] w-16 bg-totto-red rounded-full"></span>
          </div>
        </div>

        {/* VISIÓN CARD */}
        <div className="bg-white rounded-[2.5rem] border border-totto-red/5 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group hover:-translate-y-1">
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-totto-red/5">
            <Image
              src="/images/nosotros_hero_gelato.webp"
              alt="Vaso de gelato cremoso Totto Gelato"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-5 left-6 text-white text-[10px] font-bold uppercase tracking-widest bg-totto-pistachio px-3.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
              NUESTRO RUMBO
            </span>
          </div>
          
          <div className="p-8 md:p-10 flex-grow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-condensed text-3xl font-extrabold text-totto-dark group-hover:text-totto-pistachio transition-colors duration-300">
                Nuestra Visión
              </h3>
              <p className="text-sm md:text-base text-totto-dark/80 leading-relaxed font-light font-sans">
                Expandir la experiencia de Totto Gelato a más comunidades, llevando nuestros sabores únicos y artesanales a todo México, para que cada persona descubra la magia de los gelatos hechos con pasión, calidad y creatividad. Queremos que Totto Gelato sea sinónimo de momentos felices y memorables en cada rincón del país.
              </p>
            </div>
            <span className="h-[2px] w-16 bg-totto-pistachio rounded-full"></span>
          </div>
        </div>

      </div>

      {/* 2. VALORES SECTION */}
      <div className="space-y-12">
        
        {/* Header de Valores */}
        <div className="text-center max-w-xl mx-auto space-y-3" data-reveal>
          <span className="text-totto-red font-bold uppercase tracking-[0.2em] text-xs">
            LO QUE NOS GUÍA
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-totto-dark sm:text-4xl font-condensed">
            Nuestros Valores
          </h2>
          <p className="text-sm sm:text-base text-totto-dark/70 font-light leading-relaxed font-sans">
            Lo que guía cada receta, cada lote y cada experiencia en Totto Gelato.
          </p>
        </div>

        {/* Grid de 4 columnas para los Valores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* VALOR 1: Calidad */}
          <div className="bg-white rounded-3xl p-6 border border-totto-red/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 bg-totto-red/5 rounded-bl-[4rem] group-hover:bg-totto-red/10 transition-colors duration-300"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-totto-red/10 text-totto-red border border-totto-red/10 flex items-center justify-center shadow-inner">
                {/* Shield check icon */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <h4 className="font-condensed text-xl font-bold text-totto-dark group-hover:text-totto-red transition-colors duration-300">
                Calidad
              </h4>
              <p className="text-xs text-totto-dark/75 leading-relaxed font-light font-sans">
                Elaboramos cada sabor con ingredientes frescos y naturales, garantizando una experiencia de excelencia en cada bocado.
              </p>
            </div>
            
            <div className="pt-6 border-t border-totto-red/5 mt-4 text-[10px] uppercase font-bold tracking-wider text-totto-red/50">
              Excelencia pura
            </div>
          </div>

          {/* VALOR 2: Innovación */}
          <div className="bg-white rounded-3xl p-6 border border-totto-red/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 bg-totto-honey/5 rounded-bl-[4rem] group-hover:bg-totto-honey/10 transition-colors duration-300"></div>

            <div className="space-y-4 relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-totto-honey/10 text-totto-honey border border-totto-honey/10 flex items-center justify-center shadow-inner">
                {/* Light bulb/Spark icon */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              <h4 className="font-condensed text-xl font-bold text-totto-dark group-hover:text-totto-honey transition-colors duration-300">
                Innovación
              </h4>
              <p className="text-xs text-totto-dark/75 leading-relaxed font-light font-sans">
                Nos apasiona crear sabores únicos, explorando combinaciones que sorprendan y deleiten a nuestros clientes.
              </p>
            </div>

            <div className="pt-6 border-t border-totto-red/5 mt-4 text-[10px] uppercase font-bold tracking-wider text-totto-honey/60">
              Creatividad
            </div>
          </div>

          {/* VALOR 3: Pasión */}
          <div className="bg-white rounded-3xl p-6 border border-totto-red/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 bg-totto-red-light/5 rounded-bl-[4rem] group-hover:bg-totto-red-light/10 transition-colors duration-300"></div>

            <div className="space-y-4 relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-totto-red-light/10 text-totto-red-light border border-totto-red-light/10 flex items-center justify-center shadow-inner">
                {/* Heart icon */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>

              <h4 className="font-condensed text-xl font-bold text-totto-dark group-hover:text-totto-red-light transition-colors duration-300">
                Pasión
              </h4>
              <p className="text-xs text-totto-dark/75 leading-relaxed font-light font-sans">
                Ponemos el corazón en cada helado, trabajando con dedicación para compartir nuestra pasión por el auténtico gelato.
              </p>
            </div>

            <div className="pt-6 border-t border-totto-red/5 mt-4 text-[10px] uppercase font-bold tracking-wider text-totto-red-light/60">
              Amor al oficio
            </div>
          </div>

          {/* VALOR 4: Responsabilidad */}
          <div className="bg-white rounded-3xl p-6 border border-totto-red/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 bg-totto-pistachio/5 rounded-bl-[4rem] group-hover:bg-totto-pistachio/10 transition-colors duration-300"></div>

            <div className="space-y-4 relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-totto-pistachio/10 text-totto-pistachio border border-totto-pistachio/10 flex items-center justify-center shadow-inner">
                {/* Globe/Leaf icon */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m-4-3h1.872c.5 0 .966.252 1.23.666l1 .667c.272.18.574.27.878.27H20M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h4 className="font-condensed text-xl font-bold text-totto-dark group-hover:text-totto-pistachio transition-colors duration-300">
                Responsabilidad
              </h4>
              <p className="text-xs text-totto-dark/75 leading-relaxed font-light font-sans">
                Actuamos con responsabilidad, apoyando la sostenibilidad y siendo una fuerza positiva en nuestra comunidad.
              </p>
            </div>

            <div className="pt-6 border-t border-totto-red/5 mt-4 text-[10px] uppercase font-bold tracking-wider text-totto-pistachio/60">
              Sostenibilidad
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
