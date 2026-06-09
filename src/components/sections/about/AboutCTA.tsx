import Link from "next/link";

export default function AboutCTA() {
  return (
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
              href="/sabores"
              className="inline-flex items-center justify-center rounded-full bg-totto-cream px-6 py-3 text-sm font-semibold text-totto-red-dark hover:bg-white transition-all duration-200 hover:scale-105 active:scale-95 shadow"
            >
              Nuestros sabores
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
  );
}
