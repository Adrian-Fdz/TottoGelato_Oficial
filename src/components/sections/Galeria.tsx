import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function Galeria() {
  const row1: GalleryItem[] = [
    { src: "/images/sabores/FlavorMock.webp", alt: "Gelato artesanal de la casa", width: 1254, height: 1254 },
    { src: "/images/jj.webp", alt: "Detalle de vasos y helado", width: 1122, height: 1402 },
    { src: "/images/Hero.webp", alt: "Local y ambiente Narvarte", width: 1633, height: 700 },
    { src: "/images/GelatoMain.webp", alt: "Copa de gelato servida", width: 1086, height: 1024 },
    { src: "/images/galeria_manos_gelato.webp", alt: "Cono y vaso de gelato Totto: gelato para tu alma", width: 720, height: 900 },
    { src: "/images/galeria_gelato_huella.webp", alt: "Gelato con huellita de chocolate sobre cono", width: 675, height: 900 }
  ];

  const row2: GalleryItem[] = [
    { src: "/images/galeria_perro_totto.webp", alt: "Totto, el san bernardo de la casa, con su peluche", width: 707, height: 900 },
    { src: "/images/GelatoMain.webp", alt: "Gelato de fruta 100% natural", width: 1086, height: 1024 },
    { src: "/images/sabores/FlavorMock.webp", alt: "Elaboración en la tienda", width: 1254, height: 1254 },
    { src: "/images/Hero.webp", alt: "Fachada e iluminación", width: 1633, height: 700 },
    { src: "/images/jj.webp", alt: "Detalles y cucharas", width: 1122, height: 1402 },
    { src: "/images/galeria_cobertura_ferrero.webp", alt: "Gelato con cobertura de Ferrero, desde Florencia a la Narvarte", width: 720, height: 900 }
  ];

  // Both marquee rows render each list twice so the loop is seamless. The
  // duplicate copy is hidden from assistive tech and its images are decorative.
  const renderRow = (
    items: GalleryItem[],
    rowKey: string,
    sizeClasses: string,
    duplicate: boolean
  ) =>
    items.map((item, idx) => (
      <div
        key={`${rowKey}-${idx}`}
        className="group relative shrink-0 overflow-hidden rounded-3xl border border-[#520909] shadow-md transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:border-totto-cream/30 hover:shadow-xl"
      >
        <Image
          src={item.src}
          alt={duplicate ? "" : item.alt}
          aria-hidden={duplicate || undefined}
          width={item.width}
          height={item.height}
          sizes="(min-width: 768px) 288px, 224px"
          className={`${sizeClasses} w-auto object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-105`}
        />
      </div>
    ));

  return (
    <section id="galeria" className="snap-section py-20 bg-gradient-to-br from-[#801414] via-[#690d0d] to-[#450505] border-t border-[#520909] relative overflow-hidden">
      {/* Subtle background texture grid */}
      <div className="absolute inset-0 bg-texture opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-6" data-reveal>
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
              <div className="flex shrink-0 items-center gap-6 pr-6">
                {renderRow(row1, "row1-a", "h-56 md:h-72", false)}
              </div>
              <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
                {renderRow(row1, "row1-b", "h-56 md:h-72", true)}
              </div>
            </div>
          </div>

          {/* Row 2: Bottom Row - Shorter - Scrolls Right */}
          <div className="w-full overflow-hidden select-none relative py-4">
            <div className="flex w-max flex-nowrap items-center animate-marquee-right hover:[animation-play-state:paused]">
              <div className="flex shrink-0 items-center gap-6 pr-6">
                {renderRow(row2, "row2-a", "h-40 md:h-52", false)}
              </div>
              <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
                {renderRow(row2, "row2-b", "h-40 md:h-52", true)}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
