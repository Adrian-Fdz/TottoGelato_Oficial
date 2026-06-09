export default function MisionVisionValores() {
  return (
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
  );
}
