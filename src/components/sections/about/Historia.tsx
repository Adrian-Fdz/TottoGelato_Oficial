import Image from "next/image";

export default function Historia() {
  return (
    <section id="historia" className="relative z-10 py-24 overflow-hidden border-t border-totto-red/5 bg-gradient-to-b from-transparent to-[#fdfbf2]">
      {/* Decorative Waffle Texture Accent */}
      <div className="absolute inset-0 bg-texture-waffle opacity-20 pointer-events-none"></div>
      
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* TEXT COLUMN */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-totto-red"></span>
              <span className="text-totto-red font-bold uppercase tracking-[0.2em] text-xs">
                EL VIAJE DEL ORIGEN
              </span>
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-totto-dark sm:text-4xl md:text-5xl font-condensed leading-[1.15]">
              El Sueño de Traer <br />
              <span className="text-totto-red">Italia a la Narvarte</span>
            </h2>
            
            <div className="space-y-5 text-totto-dark/85 leading-relaxed text-base font-light">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-totto-red first-letter:float-left first-letter:mr-3 first-letter:line-height-[0.8] first-letter:font-condensed">
                Totto Gelato nació de un viaje de aprendizaje a Florencia, la cuna del gelato. Fascinados por la textura sedosa y la pureza de sabores que caracterizan a las gelaterías artesanales italianas tradicionales, nos propusimos entender el arte de la formulación exacta.
              </p>
              <p>
                El secreto de un auténtico gelato no está en los polvos listos ni en las esencias artificiales. Se encuentra en el equilibrio perfecto de grasas, azúcares y sólidos lácteos, combinado con un proceso de enfriamiento lento que inyecta una cantidad mínima de aire.
              </p>
              <p>
                Al regresar a la Ciudad de México, decidimos abrir nuestras puertas en la vibrante colonia <strong className="font-bold text-totto-dark">Vértiz Narvarte</strong>, un barrio conocido por su vida comunitaria y su gusto por la buena gastronomía, convirtiendo nuestra pasión en un taller de sabor diario.
              </p>
            </div>
          </div>

          {/* DUAL IMAGE COLLAGE COLUMN */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Background decorative square */}
            <div className="absolute -top-4 -right-4 w-72 h-72 rounded-3xl bg-totto-red/5 -z-10 border border-totto-red/5"></div>
            
            {/* Primary Image */}
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-totto-red/10 relative group bg-white/40">
              <Image
                src="/images/local_interior.png"
                alt="Interior de Totto Gelato"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 30vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-6 left-6 inline-flex items-center rounded-full bg-totto-red px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-totto-cream shadow-md border border-white/10">
                Nuestro Taller
              </span>
            </div>

            {/* Secondary Overlapping Detail Image (Only visible on screens larger than mobile) */}
            <div className="absolute -bottom-8 -left-10 w-48 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#fbf7e6] hidden sm:block group/detail">
              <Image
                src="/images/local_gelato_detail.png"
                alt="Detalle de Gelato Artesanal"
                fill
                className="object-cover transition-transform duration-700 group-hover/detail:scale-110"
                sizes="192px"
              />
              <div className="absolute inset-0 bg-black/10 group-hover/detail:bg-transparent transition-colors duration-300" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
