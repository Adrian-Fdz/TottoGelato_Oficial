import Link from "next/link";

export default function NosotrosPreview() {
  return (
    <section id="nosotros" className="py-20 bg-totto-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN: HISTORIA/FILOSOFÍA */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-totto-red font-bold uppercase tracking-widest text-xs">
              De la Florencia a la Narvarte
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-totto-dark sm:text-4xl">
              Nuestra Filosofía
            </h2>
            <p className="text-lg text-totto-dark/85 leading-relaxed">
              Totto Gelato nació de la pasión por la heladería tradicional italiana y el deseo de traer su textura e intensidad de sabor a la Ciudad de México.
            </p>
            <p className="text-base text-totto-dark/70 leading-relaxed">
              Elaboramos nuestro gelato diariamente en lotes pequeños, utilizando únicamente fruta fresca local e ingredientes seleccionados de alta calidad. No utilizamos bases industriales, saborizantes artificiales ni conservadores.
            </p>
            <div className="pt-2">
              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center rounded-full bg-totto-red px-6 py-3 text-sm font-semibold text-totto-cream hover:bg-totto-red-light transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
              >
                Conoce nuestra historia →
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: VALORES / CARACTERÍSTICAS */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-totto-cream-dark/10 p-6 rounded-3xl border border-totto-red/5 space-y-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-totto-red text-totto-cream text-lg font-bold">🧑‍🍳</div>
              <h3 className="font-sans text-lg font-bold text-totto-dark">Hecho a Mano</h3>
              <p className="text-sm text-totto-dark/75 leading-relaxed">
                Producido diariamente en lotes pequeños para garantizar máxima frescura y textura sedosa.
              </p>
            </div>

            <div className="bg-totto-cream-dark/10 p-6 rounded-3xl border border-totto-red/5 space-y-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-totto-pistachio text-totto-cream text-lg font-bold">🌱</div>
              <h3 className="font-sans text-lg font-bold text-totto-dark">100% Natural</h3>
              <p className="text-sm text-totto-dark/75 leading-relaxed">
                Libre de colorantes, conservadores artificiales o aditivos sintéticos. El sabor de la fruta real.
              </p>
            </div>

            <div className="bg-totto-cream-dark/10 p-6 rounded-3xl border border-totto-red/5 space-y-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-[#690d0d] text-totto-cream text-lg font-bold">📍</div>
              <h3 className="font-sans text-lg font-bold text-totto-dark">Ingredientes Locales</h3>
              <p className="text-sm text-totto-dark/75 leading-relaxed">
                Apoyamos a productores locales de fruta de temporada de los mercados locales mexicanos.
              </p>
            </div>

            <div className="bg-totto-cream-dark/10 p-6 rounded-3xl border border-totto-red/5 space-y-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-totto-honey text-totto-cream text-lg font-bold">✨</div>
              <h3 className="font-sans text-lg font-bold text-totto-dark">Menos Aire</h3>
              <p className="text-sm text-totto-dark/75 leading-relaxed">
                Mantecado tradicional lento que evita el exceso de aire y genera una densidad de sabor inigualable.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
