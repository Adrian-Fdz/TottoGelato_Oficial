import Image from "next/image";

export default function Historia() {
  return (
    <section className="mx-auto max-w-5xl px-6 md:px-8 py-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-totto-dark sm:text-4xl font-condensed">
            El Sueño de Traer Italia a México
          </h2>
          <div className="space-y-4 text-totto-dark/80 leading-relaxed text-base">
            <p>
              Totto Gelato nació de un viaje de aprendizaje a Florencia, la cuna del gelato. Fascinados por la textura sedosa y la pureza de sabores que caracterizan a las gelaterías artesanales italianas tradicionales, nos propusimos entender el arte de la formulación exacta.
            </p>
            <p>
              El secreto de un auténtico gelato no está en los polvos listos ni en las esencias artificiales. Se encuentra en el equilibrio perfecto de grasas, azúcares y sólidos lácteos, combinado con un proceso de enfriamiento lento que inyecta una cantidad mínima de aire.
            </p>
            <p>
              Al regresar a la Ciudad de México, decidimos abrir nuestras puertas en la vibrante colonia **Vértiz Narvarte**, un barrio conocido por su vida comunitaria y su gusto por la buena gastronomía, convirtiendo nuestra pasión en un taller de sabor diario.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-totto-red/10 relative group bg-white/40">
            <Image
              src="/images/local_interior.png"
              alt="Interior de Totto Gelato"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <span className="absolute bottom-6 left-6 inline-flex items-center rounded-full bg-totto-red px-3 py-1 text-xs font-bold text-totto-cream shadow">
              Nuestro Taller
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
