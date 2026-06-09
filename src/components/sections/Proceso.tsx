export default function Proceso() {
  const pasos = [
    {
      num: "01",
      title: "Selección de Ingredientes",
      desc: "Buscamos frutas frescas de temporada mexicana y materias primas de origen como el pistache siciliano.",
      label: "Foto: Ingredientes Frescos",
      color: "text-totto-pistachio bg-totto-pistachio/10 border-totto-pistachio/20",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Mezcla sin Aditivos",
      desc: "Combinamos todo a mano sin bases industriales, estabilizantes químicos ni saborizantes artificiales.",
      label: "Foto: Mezcla a Mano",
      color: "text-totto-red bg-totto-red/10 border-totto-red/20",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Maduración en Frío",
      desc: "Reposo controlado a baja temperatura durante 12-24 horas para potenciar la intensidad del sabor real.",
      label: "Foto: Tina de Maduración",
      color: "text-[#5c3d2e] bg-[#5c3d2e]/10 border-[#5c3d2e]/20",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Resultado Cremoso",
      desc: "Mantecamos lentamente inyectando mínimo aire para lograr la densidad y textura italiana perfecta.",
      label: "Foto: Gelato Cremoso",
      color: "text-totto-honey bg-totto-honey/10 border-totto-honey/20",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-totto-white border-t border-totto-red/10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-totto-red font-bold uppercase tracking-widest text-xs">
            Así lo hacemos
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-totto-dark sm:text-4xl">
            El proceso artesanal en 4 pasos
          </h2>
          <p className="mt-4 text-base md:text-lg text-totto-dark/80">
            A diferencia del helado industrial con aditivos y aire inyectado, nuestro gelato se elabora lentamente para preservar la pureza de cada ingrediente.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {pasos.map((paso, index) => (
            <div 
              key={paso.num} 
              className="group flex flex-col justify-between p-6 bg-totto-cream/15 hover:bg-totto-cream/30 rounded-3xl border border-totto-red/5 hover:border-totto-red/10 shadow-sm transition-all duration-300 relative"
            >
              {/* Desktop Connecting Line (optional visual guide) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-totto-red/10 z-10" />
              )}

              <div>
                {/* Step Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className={`h-12 w-12 flex items-center justify-center rounded-2xl border ${paso.color}`}>
                    {paso.icon}
                  </div>
                  <span className="font-condensed font-black text-3xl tracking-tight text-totto-red/25">
                    {paso.num}
                  </span>
                </div>

                {/* Styled Image Placeholder */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-totto-cream-dark/20 border border-totto-red/5 flex flex-col items-center justify-center mb-6 group-hover:bg-totto-cream-dark/30 transition-colors duration-300">
                  <svg className="w-8 h-8 text-totto-dark/20 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-totto-dark/40 px-2 py-0.5 rounded bg-totto-white/80 shadow-xs border border-totto-dark/5">
                    {paso.label}
                  </span>
                </div>

                {/* Step Text */}
                <h3 className="font-sans text-lg font-bold text-totto-dark mb-2">
                  {paso.title}
                </h3>
                <p className="text-sm text-totto-dark/75 leading-relaxed">
                  {paso.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
