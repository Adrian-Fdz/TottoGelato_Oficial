import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex w-full min-h-[720px] md:min-h-[420px] md:h-[44.25vw] max-h-[720px] items-start md:items-center overflow-hidden border-b border-totto-red/10">
      
      {/* Background Image (Desktop: Hero.png, Mobile: HeroMobile.png) */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background: Taller vertical image, centered */}
        <Image
          src="/images/HeroMobile.png"
          alt="Fondo oficial Totto Gelato Móvil"
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover object-center"
        />
        {/* Desktop Background: Landscape image, right-bottom aligned */}
        <Image
          src="/images/Hero.png"
          alt="Fondo oficial Totto Gelato"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-[right_100%]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 w-full relative z-10 pt-16 md:pt-0">
        {/* TEXT CONTENT (Centered on mobile, left-aligned on desktop) */}
        <div className="max-w-2xl space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* BRAND PILL (Only desktop) */}
          <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#690d0d]/90 px-4 py-1.5 text-xs font-bold italic tracking-wider text-totto-cream border border-white/20 shadow-md">
            "De la Florencia a la Narvarte"
          </span>

          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white lg:leading-tight drop-shadow-md text-center md:text-left">
            Gelato artesanal <br />
            hecho <span className="text-totto-cream bg-[#690d0d]/90 px-3.5 py-1 rounded-2xl border border-white/20 inline-block transform hover:-rotate-1 transition-transform shadow-md">diferente</span>
          </h1>
          
          {/* BRAND SUBTITLE (Only desktop) */}
          <p className="hidden md:block text-lg md:text-xl text-totto-cream font-medium max-w-xl drop-shadow-md leading-relaxed">
            Recetas tradicionales italianas elaboradas diariamente de forma artesanal, con fruta fresca local y sin conservadores artificiales.
          </p>
          
          <div className="pt-2">
            <Link
              href="#sabores"
              className="inline-flex items-center justify-center rounded-full bg-[#690d0d] px-8 py-4 text-base font-bold text-totto-cream shadow-lg hover:bg-[#520909] hover:scale-105 active:scale-95 text-center transition-all border border-[#520909]"
            >
              Ver sabores del mes
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
