export default function AnnouncementTicker() {
  const items = [
    "GELATO ARTESANAL",
    "SABORES DE TEMPORADA",
    "HECHO EN CDMX",
    "FRUTA NATURAL",
    "SABORES CON HISTORIA"
  ];

  return (
    <div className="w-full overflow-hidden bg-[#690d0d] py-6 border-y border-[#520909] select-none shadow-md relative z-20">
      <div className="flex w-max flex-nowrap items-center">
        {/* First list copy */}
        <div className="flex shrink-0 items-center gap-12 pr-12 text-3xl md:text-5xl lg:text-4xl font-condensed font-black tracking-[-0.05em] text-totto-cream uppercase animate-marquee">
          {items.map((item, index) => (
            <span key={`first-${index}`} className="flex items-center gap-12 whitespace-nowrap">
              {item}
              <span className="text-totto-red-light select-none text-2xl md:text-3xl">•</span>
            </span>
          ))}
        </div>
        {/* Second list duplicate for seamless loop */}
        <div className="flex shrink-0 items-center gap-12 pr-12 text-3xl md:text-5xl lg:text-4xl font-condensed font-black tracking-[-0.05em] text-totto-cream uppercase animate-marquee" aria-hidden="true">
          {items.map((item, index) => (
            <span key={`second-${index}`} className="flex items-center gap-12 whitespace-nowrap">
              {item}
              <span className="text-totto-red-light select-none text-2xl md:text-4xl">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


