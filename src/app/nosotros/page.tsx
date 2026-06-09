"use client";

import Link from "next/link";

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-[#fbf7e6] text-totto-dark pb-24 relative overflow-hidden">
      {/* Texture background overlay */}
      <div className="absolute inset-0 bg-texture opacity-[0.03] pointer-events-none z-0"></div>

      {/* HERO BANNER */}
      <section className="relative bg-[#690d0d] text-totto-cream py-24 md:py-32 overflow-hidden border-b border-[#520909]">
        <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none"></div>
        <div className="mx-auto max-w-5xl px-6 md:px-8 relative z-10 text-center space-y-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-totto-cream/70 hover:text-white transition-colors group mb-4"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al inicio
          </Link>
          <span className="text-totto-cream-dark/60 font-bold uppercase tracking-[0.2em] text-xs block">
            NUESTRA HISTORIA Y PASIÓN
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-condensed">
            De Florencia a la Narvarte
          </h1>
          <p className="text-lg md:text-xl text-totto-cream/80 max-w-2xl mx-auto leading-relaxed font-light">
            Conoce el origen, el método y la filosofía detrás del gelato más cremoso de la Ciudad de México.
          </p>
        </div>
      </section>

      {/* HISTORIA SECTION */}
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
              <img
                src="/images/local_interior.png"
                alt="El interior de Totto Gelato"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <span className="absolute bottom-6 left-6 inline-flex items-center rounded-full bg-totto-red px-3 py-1 text-xs font-bold text-totto-cream shadow">
                Nuestro Taller
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* METODO ARTESANAL SECTION */}
      <section className="py-20 bg-white/45 border-y border-totto-red/10 relative z-10">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-totto-red font-bold uppercase tracking-widest text-xs">
              MÉTODO Y ARTESANALIDAD
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-totto-dark sm:text-4xl font-condensed">
              Cómo Trabajamos
            </h2>
            <p className="text-base text-totto-dark/75">
              Crear gelato real requiere paciencia, dedicación e insumos de primera calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-totto-red/5 shadow-sm space-y-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-totto-pistachio/10 text-totto-pistachio text-2xl font-bold">🌱</div>
              <h3 className="font-sans text-xl font-bold text-totto-dark">Pureza de Ingredientes</h3>
              <p className="text-sm text-totto-dark/75 leading-relaxed">
                Utilizamos frutas frescas mexicanas directo de mercados locales en su punto perfecto de maduración. Para los sabores clásicos tradicionales, importamos ingredientes de origen como el pistache de Sicilia o cacao de alta selección. No agregamos saborizantes artificiales, colorantes ni conservadores.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-totto-red/5 shadow-sm space-y-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-totto-honey/10 text-totto-honey text-2xl font-bold">⏳</div>
              <h3 className="font-sans text-xl font-bold text-totto-dark">Maduración y Mantecación</h3>
              <p className="text-sm text-totto-dark/75 leading-relaxed">
                Nuestras bases reposan de 12 a 24 horas a baja temperatura para que los sabores naturales se integren de forma óptima. Después, realizamos un mantecado lento. Este proceso inyecta menos de un 30% de aire (a diferencia del helado industrial que tiene hasta un 80%), logrando la densidad de sabor y suavidad icónica del gelato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION, VALUES SECTION */}
      <section className="mx-auto max-w-5xl px-6 md:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* MISIÓN */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-totto-red/10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] text-totto-red font-bold uppercase tracking-wider block">Nuestra Misión</span>
              <h3 className="font-condensed text-2xl font-bold text-totto-dark">Misión</h3>
              <p className="text-sm text-totto-dark/85 leading-relaxed">
                Traer la experiencia auténtica del gelato artesanal italiano a la Ciudad de México, respetando fielmente el balance de las recetas tradicionales e impulsando a los productores locales a través de ingredientes frescos y naturales.
              </p>
            </div>
            <span className="h-1 w-10 bg-totto-red rounded-full"></span>
          </div>

          {/* VISIÓN */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-totto-red/10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] text-totto-red font-bold uppercase tracking-wider block">Nuestro Rumbo</span>
              <h3 className="font-condensed text-2xl font-bold text-totto-dark">Visión</h3>
              <p className="text-sm text-totto-dark/85 leading-relaxed">
                Ser la gelatería de especialidad referente en CDMX, reconocida por la honestidad absoluta en nuestros procesos, la intensidad pura de nuestros sabores y la creación de un espacio cálido de encuentro en nuestra comunidad.
              </p>
            </div>
            <span className="h-1 w-10 bg-totto-pistachio rounded-full"></span>
          </div>

          {/* VALORES */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-totto-red/10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] text-totto-red font-bold uppercase tracking-wider block">Lo que nos guía</span>
              <h3 className="font-condensed text-2xl font-bold text-totto-dark">Valores</h3>
              <ul className="space-y-3.5 text-sm text-totto-dark/85">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-totto-red"></span>
                  <strong>Honestidad:</strong> Procesos limpios sin trucos.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-totto-pistachio"></span>
                  <strong>Calidad:</strong> Sin compromisos en insumos.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-totto-honey"></span>
                  <strong>Artesanalidad:</strong> Hecho a mano, lote por lote.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-totto-red-light"></span>
                  <strong>Comunidad:</strong> Cuidado de nuestro entorno local.
                </li>
              </ul>
            </div>
            <span className="h-1 w-10 bg-totto-honey rounded-full"></span>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-6 md:px-8 pt-10 text-center relative z-10">
        <div className="bg-[#690d0d] text-totto-cream rounded-3xl p-10 md:p-14 border border-[#520909] shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-texture opacity-5 pointer-events-none"></div>
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-extrabold font-condensed">¿Listo para probar la diferencia?</h3>
            <p className="text-sm md:text-base text-totto-cream/80 font-light leading-relaxed">
              Pásate por nuestro local en la colonia Narvarte o descubre la selección de sabores especiales que tenemos preparados para este mes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/#sabores"
                className="inline-flex items-center justify-center rounded-full bg-totto-cream px-6 py-3 text-sm font-semibold text-totto-red-dark hover:bg-white transition-all duration-200 hover:scale-105 active:scale-95 shadow"
              >
                Ver Sabores del Mes
              </Link>
              <Link
                href="/#encuentranos"
                className="inline-flex items-center justify-center rounded-full border border-totto-cream/30 hover:border-totto-cream px-6 py-3 text-sm font-semibold text-totto-cream hover:bg-white/5 transition-all duration-200"
              >
                📍 Cómo Llegar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
