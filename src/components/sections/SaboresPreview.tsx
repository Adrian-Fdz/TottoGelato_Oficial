import Link from "next/link";

export default function SaboresPreview() {
  return (
    <section id="sabores" className="py-20 bg-totto-cream-dark/15 border-t border-totto-red/10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-totto-red font-bold uppercase tracking-widest text-xs">
            Nuestra Selección
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-totto-dark sm:text-4xl">
            Nuestros sabores
          </h2>
          <p className="mt-4 text-lg text-totto-dark/80">
            Gelatos elaborados diariamente en lotes pequeños con ingredientes frescos y recetas artesanales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* CARD 1: PISTACHE */}
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-totto-red/5 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-totto-pistachio/15 text-totto-pistachio font-bold text-xs px-3 py-1 rounded-full border border-totto-pistachio/10">
                  Cremoso / Base Leche
                </span>
              </div>
              <h3 className="font-sans text-xl font-bold text-totto-dark mb-3">Pistache Siciliano</h3>
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl mb-4 bg-totto-cream/30">
                <img
                  src="/images/Pistache.png"
                  alt="Pistache Siciliano"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-totto-dark/75 leading-relaxed">
                Auténtico pistache de Bronte tostado con un toque sutil de sal de mar.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-totto-cream-dark flex items-center justify-between">
              <span className="text-xs font-semibold text-totto-dark/65">Ingrediente: Pistache de Bronte</span>
              <span className="h-2 w-2 rounded-full bg-totto-pistachio"></span>
            </div>
          </div>

          {/* CARD 2: MANGO MARACUYÁ */}
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-totto-red/5 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-totto-honey/15 text-totto-honey font-bold text-xs px-3 py-1 rounded-full border border-totto-honey/10">
                  Frutal / Base Agua
                </span>
              </div>
              <h3 className="font-sans text-xl font-bold text-totto-dark mb-3">Mango con Maracuyá</h3>
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl mb-4 bg-totto-cream/30">
                <img
                  src="/images/Maracuya.png"
                  alt="Mango con Maracuyá"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-totto-dark/75 leading-relaxed">
                Sorbete refrescante de mango Manila con un toque ácido de maracuyá fresco.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-totto-cream-dark flex items-center justify-between">
              <span className="text-xs font-semibold text-totto-dark/65">Ingrediente: Mango Manila natural</span>
              <span className="h-2 w-2 rounded-full bg-totto-honey"></span>
            </div>
          </div>

          {/* CARD 3: CHOCOLATE */}
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-totto-red/5 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-[#5c3d2e]/15 text-[#5c3d2e] font-bold text-xs px-3 py-1 rounded-full border border-[#5c3d2e]/10">
                  Intenso / Vegano
                </span>
              </div>
              <h3 className="font-sans text-xl font-bold text-totto-dark mb-3">Chocolate Belga 70%</h3>
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl mb-4 bg-totto-cream/30">
                <img
                  src="/images/ChocolateBelga.png"
                  alt="Chocolate Belga 70%"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-totto-dark/75 leading-relaxed">
                Sorbete espeso de chocolate belga oscuro 70%, cremoso y libre de lácteos.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-totto-cream-dark flex items-center justify-between">
              <span className="text-xs font-semibold text-totto-dark/65">Ingrediente: Cacao Belga 70%</span>
              <span className="h-2 w-2 rounded-full bg-[#5c3d2e]"></span>
            </div>
          </div>
        </div>

        {/* Button to view complete catalog */}
        <div className="mt-16 text-center">
          <Link
            href="/sabores"
            className="inline-flex items-center justify-center rounded-full bg-[#690d0d] px-8 py-3.5 text-sm font-semibold text-totto-cream shadow-md hover:bg-[#520909] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Ver todos los sabores →
          </Link>
        </div>

      </div>
    </section>
  );
}
