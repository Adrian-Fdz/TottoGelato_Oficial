export default function Galeria() {
  const row1 = [
    { src: "/images/FlavorMock.png", alt: "Gelato artesanal de la casa" },
    { src: "/images/jj.png", alt: "Detalle de vasos y helado" },
    { src: "/images/Hero.png", alt: "Local y ambiente Narvarte" },
    { src: "/images/GelatoMain.webp", alt: "Copa de gelato servida" },
    { src: "/images/FlavorMock.png", alt: "Sabores de temporada" },
    { src: "/images/jj.png", alt: "Tradición Totto Gelato" }
  ];

  const row2 = [
    { src: "/images/jj.png", alt: "Nuestros productos e insumos" },
    { src: "/images/GelatoMain.webp", alt: "Gelato de fruta 100% natural" },
    { src: "/images/FlavorMock.png", alt: "Elaboración en la tienda" },
    { src: "/images/Hero.png", alt: "Fachada e iluminación" },
    { src: "/images/jj.png", alt: "Detalles y cucharas" },
    { src: "/images/GelatoMain.webp", alt: "Tradición italiana" }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-[#801414] via-[#690d0d] to-[#450505] border-t border-[#520909] relative overflow-hidden">
      {/* Subtle background texture grid */}
      <div className="absolute inset-0 bg-texture opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-6">
          <span className="text-totto-cream font-bold uppercase tracking-widest text-xs">
            Galería
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Momentos Totto Gelato
          </h2>
          <p className="mt-4 text-base md:text-lg text-totto-cream/80">
            Sabor artesanal que entra por los ojos. Pasa el cursor por encima para pausar y contemplar cada momento.
          </p>
        </div>

        {/* Dual Marquee Container */}
        <div className="space-y-4">
          
          {/* Row 1: Top Row - Taller - Scrolls Left */}
          <div className="w-full overflow-hidden select-none relative py-4">
            <div className="flex w-max flex-nowrap items-center animate-marquee-left hover:[animation-play-state:paused]">
              {/* Copy 1 */}
              <div className="flex shrink-0 items-center gap-6 pr-6">
                {row1.map((item, idx) => (
                  <div 
                    key={`row1-a-${idx}`} 
                    className="relative group shrink-0 rounded-3xl overflow-hidden border border-[#520909] group-hover:border-totto-cream/30 shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="h-56 md:h-72 w-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
              {/* Copy 2 (Seamless loop duplicate) */}
              <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
                {row1.map((item, idx) => (
                  <div 
                    key={`row1-b-${idx}`} 
                    className="relative group shrink-0 rounded-3xl overflow-hidden border border-[#520909] group-hover:border-totto-cream/30 shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="h-56 md:h-72 w-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Bottom Row - Shorter - Scrolls Right */}
          <div className="w-full overflow-hidden select-none relative py-4">
            <div className="flex w-max flex-nowrap items-center animate-marquee-right hover:[animation-play-state:paused]">
              {/* Copy 1 */}
              <div className="flex shrink-0 items-center gap-6 pr-6">
                {row2.map((item, idx) => (
                  <div 
                    key={`row2-a-${idx}`} 
                    className="relative group shrink-0 rounded-3xl overflow-hidden border border-[#520909] group-hover:border-totto-cream/30 shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="h-40 md:h-52 w-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
              {/* Copy 2 (Seamless loop duplicate) */}
              <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
                {row2.map((item, idx) => (
                  <div 
                    key={`row2-b-${idx}`} 
                    className="relative group shrink-0 rounded-3xl overflow-hidden border border-[#520909] group-hover:border-totto-cream/30 shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="h-40 md:h-52 w-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
