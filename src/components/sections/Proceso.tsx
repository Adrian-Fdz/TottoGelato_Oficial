export default function Proceso() {
  const pasos = [
    {
      num: "01",
      title: "Selección de Ingredientes",
      desc: "Buscamos frutas frescas de temporada mexicana y materias primas de origen como el pistache siciliano.",
      img: "/images/proceso_ingredientes.png",
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
      img: "/images/proceso_mezcla.png",
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
      img: "/images/proceso_maduracion.png",
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
      img: "/images/proceso_mantecacion.png",
      color: "text-totto-honey bg-totto-honey/10 border-totto-honey/20",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="proceso" className="py-20 relative overflow-hidden bg-[#fbf7e6] border-t border-totto-red/10">
      {/* Background Image overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mobile Background: vertical */}
        <img
          src="/images/FondoGelatoMB.png"
          alt="Fondo Gelato Móvil"
          className="block md:hidden w-full h-full object-cover opacity-[0.55]"
        />
        {/* Desktop Background: landscape */}
        <img
          src="/images/FondoGelato.png"
          alt="Fondo Gelato"
          className="hidden md:block w-full h-full object-cover opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-[#fbf7e6]/50 mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">

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
              className="group flex flex-col justify-between p-6 bg-white/80 backdrop-blur-sm hover:bg-white/95 rounded-3xl border border-totto-red/10 hover:border-totto-red/20 shadow-sm hover:shadow-md transition-all duration-300 relative"
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
                  <span className="font-condensed font-black text-3xl tracking-tight text-totto-red-dark">
                    {paso.num}
                  </span>
                </div>

                {/* Styled Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-totto-cream-dark/20 border border-totto-red/5 mb-6">
                  <img
                    src={paso.img}
                    alt={paso.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
