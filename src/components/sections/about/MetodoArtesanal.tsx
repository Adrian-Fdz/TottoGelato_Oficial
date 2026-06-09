export default function MetodoArtesanal() {
  return (
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
  );
}
