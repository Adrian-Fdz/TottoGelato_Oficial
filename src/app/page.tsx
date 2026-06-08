import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 bg-totto-white">
      {/* HERO SECTION WITH RESPONSIVE BACKGROUND IMAGE */}
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
                href="#sabores-mes"
                className="inline-flex items-center justify-center rounded-full bg-[#690d0d] px-8 py-4 text-base font-bold text-totto-cream shadow-lg hover:bg-[#520909] hover:scale-105 active:scale-95 text-center transition-all border border-[#520909]"
              >
                Ver sabores del mes
              </Link>
            </div>
          </div>
        </div>


      </section>




      {/* SECCIÓN SABORES */}
      <section id="sabores" className="py-20 bg-totto-cream-dark/15 border-t border-totto-red/10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-totto-red font-bold uppercase tracking-widest text-xs">
              Nuestra Selección
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-totto-dark sm:text-4xl">
              Sabores del Mes
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
                  <span className="text-sm font-semibold text-totto-red">★ Destacado</span>
                </div>
                <h3 className="font-sans text-xl font-bold text-totto-dark mb-2">Pistache Siciliano</h3>
                <p className="text-sm text-totto-dark/75 leading-relaxed">
                  Elaborado con pistaches tostados de la región de Bronte, Sicilia, y un toque sutil de sal de mar para resaltar la cremosidad.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-totto-cream-dark flex items-center justify-between">
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
                  <span className="text-xs font-bold bg-totto-red/10 text-totto-red px-2 py-0.5 rounded-md">De Temporada</span>
                </div>
                <h3 className="font-sans text-xl font-bold text-totto-dark mb-2">Mango con Maracuyá</h3>
                <p className="text-sm text-totto-dark/75 leading-relaxed">
                  Refrescante sorbete 100% frutal hecho con mangos Manila de Veracruz maduros y un toque ácido de maracuyá fresco.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-totto-cream-dark flex items-center justify-between">
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
                  <span className="text-sm font-semibold text-totto-dark/50">Receta Italiana</span>
                </div>
                <h3 className="font-sans text-xl font-bold text-totto-dark mb-2">Chocolate Belga 70%</h3>
                <p className="text-sm text-totto-dark/75 leading-relaxed">
                  Sorbete de chocolate oscuro belga de origen único. Intenso, espeso y sorprendentemente cremoso, sin lácteos.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-totto-cream-dark flex items-center justify-between">
                <span className="text-xs font-semibold text-totto-dark/65">Ingrediente: Cacao Belga 70%</span>
                <span className="h-2 w-2 rounded-full bg-[#5c3d2e]"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NOSOTROS */}
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
              <p className="text-base text-totto-dark/75 leading-relaxed">
                No usamos bases prefabricadas ni saborizantes artificiales. Cada sabor se desarrolla de forma individual balanceando fruta de temporada mexicana con técnicas de mantecación artesanal para lograr un helado con menos aire y máxima cremosidad.
              </p>
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

      {/* SECCIÓN ENCUÉNTRANOS */}
      <section id="encuentranos" className="py-20 bg-totto-cream-dark/15">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* LEFT COLUMN: DATOS DE TIENDA Y HORARIOS */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-totto-red font-bold uppercase tracking-widest text-xs">
                  Te Esperamos
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-totto-dark sm:text-4xl">
                  Ubicación & Contacto
                </h2>
                
                {/* CONTACT LIST */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <span className="text-totto-red text-xl mt-0.5">📍</span>
                    <div>
                      <h4 className="font-bold text-totto-dark">Dirección</h4>
                      <p className="text-sm text-totto-dark/75">[DIRECCIÓN_PENDIENTE]</p>
                      <p className="text-xs text-totto-dark/60">Colonia Narvarte, Ciudad de México.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-totto-red text-xl mt-0.5">⏰</span>
                    <div>
                      <h4 className="font-bold text-totto-dark">Horarios</h4>
                      <p className="text-sm text-totto-dark/75">[HORARIOS_PENDIENTES]</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-totto-red text-xl mt-0.5">📱</span>
                    <div>
                      <h4 className="font-bold text-totto-dark">WhatsApp</h4>
                      <p className="text-sm text-totto-dark/75">[WHATSAPP_PENDIENTE]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION CONVERSION BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="[GOOGLE_MAPS_LINK_PENDIENTE]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#690d0d] px-6 py-3 text-sm font-bold text-totto-cream shadow-md transition-all duration-200 hover:bg-[#520909] hover:scale-105 active:scale-95 text-center"
                >
                  📍 Cómo llegar en Maps
                </a>
                <a
                  href="[INSTAGRAM_PENDIENTE]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-totto-red/20 bg-white px-6 py-3 text-sm font-bold text-totto-dark transition-all duration-200 hover:border-totto-red hover:bg-totto-red/5 hover:scale-105 active:scale-95 text-center"
                >
                  📸 Instagram
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: VISUAL MOCK BRANCH DETAILS */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 shadow-sm border border-totto-red/5 flex flex-col justify-center relative overflow-hidden min-h-[300px]">
              {/* Decorative background circle */}
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-totto-cream blur-2xl"></div>
              
              <div className="relative z-10 space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center rounded-full bg-totto-cream px-3 py-1 text-xs font-bold text-totto-red-dark">
                  🍦 ¡Visítanos y pide una degustación gratis!
                </span>
                <h3 className="font-sans text-2xl font-bold text-totto-dark">Nuestra Tienda en Narvarte</h3>
                <p className="text-sm text-totto-dark/75 leading-relaxed max-w-lg">
                  Ven y disfruta de un ambiente cálido, acogedor y el auténtico sabor artesanal. Contamos con estacionamiento de bicicletas y espacio para mascotas (Pet Friendly).
                </p>
                <div className="p-4 bg-totto-cream-dark/10 rounded-2xl border border-totto-red/5 text-left inline-block w-full">
                  <p className="text-xs font-semibold text-totto-red-dark uppercase tracking-wider mb-2">📌 Nota de Negocio Local</p>
                  <p className="text-xs text-totto-dark/75">
                    ¿Quieres algún sabor especial para tu evento o restaurante? Contáctanos a través de nuestras redes sociales o visítanos directamente en la tienda para armar tu cotización.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}



