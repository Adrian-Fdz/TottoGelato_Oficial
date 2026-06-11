"use client";

import Image from "next/image";

export default function SocialInvite() {
  const posts = [
    { src: "/images/Pistache.png", tag: "#PistacheSiciliano" },
    { src: "/images/ChocolateBelga.png", tag: "#CacaoBelga" },
    { src: "/images/Maracuya.png", tag: "#MaracuyáFresco" },
    { src: "/images/local_fachada.png", tag: "#NuestroLocal" },
    { src: "/images/jj.png", tag: "#TottoMoments" },
    { src: "/images/GelatoMain.webp", tag: "#GelatoReal" },
    { src: "/images/local_interior.png", tag: "#LaVitrina" },
    { src: "/images/local_gelato_detail.png", tag: "#Artesanal" },
    { src: "/images/nosotros_hero_gelato.png", tag: "#Cremosidad" },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Warm cream background matching brand */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf7e6] via-[#f8f0d4] to-[#fbf7e6]" />

      {/* Subtle textured overlay */}
      <div className="absolute inset-0 bg-texture-waffle opacity-60 pointer-events-none" />

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-totto-red/[0.03] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-totto-honey/[0.05] blur-[60px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">

        {/* Main Section: Text + Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center mb-16">
          
          {/* Left: Content — takes 5 cols to push closer */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-totto-red/5 border border-totto-red/10">
              <span className="h-1.5 w-1.5 rounded-full bg-totto-red animate-pulse" />
              <span className="text-totto-red font-bold uppercase tracking-[0.25em] text-[9px] sm:text-[10px]">
                @TOTTO.GELATO
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-totto-dark font-condensed leading-[1.05]">
              Únete a la<br />
              <span className="text-totto-red">Comunidad</span>
            </h2>

            <p className="text-base sm:text-lg text-totto-dark/60 font-light leading-relaxed max-w-md">
              Sabores secretos, el proceso artesanal diario y promociones que sólo viven en nuestro Instagram. No te lo pierdas.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-totto-dark font-condensed">1,086</span>
                <span className="text-[10px] text-totto-dark/40 font-semibold uppercase tracking-wider">Seguidores</span>
              </div>
              <div className="h-8 w-[1px] bg-totto-dark/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-totto-dark font-condensed">100+</span>
                <span className="text-[10px] text-totto-dark/40 font-semibold uppercase tracking-wider">Publicaciones</span>
              </div>
              <div className="h-8 w-[1px] bg-totto-dark/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-totto-dark font-condensed">Diario</span>
                <span className="text-[10px] text-totto-dark/40 font-semibold uppercase tracking-wider">Contenido</span>
              </div>
            </div>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="https://www.instagram.com/totto.gelato/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-7 py-3.5 text-sm font-bold text-white hover:shadow-lg hover:shadow-[#fd1d1d]/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Seguir en Instagram
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Recent activity mini-strip */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2.5">
                              <div className="h-8 w-8 rounded-full bg-totto-red flex items-center justify-center text-[8px] font-bold text-totto-cream border-2 border-[#fbf7e6] z-30">MM</div>
                <div className="h-8 w-8 rounded-full bg-totto-honey flex items-center justify-center text-[8px] font-bold text-white border-2 border-[#fbf7e6] z-20">HO</div>
                <div className="h-8 w-8 rounded-full bg-totto-pistachio flex items-center justify-center text-[8px] font-bold text-white border-2 border-[#fbf7e6] z-10">LG</div>
              </div>
              <span className="text-[11px] text-totto-dark/40 font-medium">
                +1,086 siguen nuestros sabores
              </span>
            </div>
          </div>

          {/* Right: Instagram-style phone mockup — takes 7 cols, bigger */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            {/* Phone frame */}
            <div className="relative w-[320px] sm:w-[360px]">
              {/* Phone shell */}
              <div className="bg-gradient-to-b from-[#2e2c2c] to-[#1a1919] rounded-[2.5rem] p-2.5 shadow-2xl shadow-black/30 border border-white/[0.06]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#2e2c2c] rounded-b-2xl z-20" />
                
                {/* Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden relative">
                  {/* Instagram-style header */}
                  <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {/* IG-style gradient ring around avatar */}
                      <div className="h-9 w-9 rounded-full p-[2px] bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                        <div className="h-full w-full rounded-full bg-white p-[1px]">
                          <div className="h-full w-full rounded-full bg-gradient-to-br from-totto-red to-totto-honey flex items-center justify-center">
                            <span className="text-white text-[7px] font-black">TG</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="text-[12px] font-bold text-gray-900 leading-tight">totto.gelato</span>
                          {/* Verified badge */}
                          <svg className="h-3.5 w-3.5 text-blue-500 fill-current" viewBox="0 0 24 24">
                            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                          </svg>
                        </div>
                        <span className="text-[9px] text-gray-400">Gelato Artesanal · Narvarte</span>
                      </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-[10px] font-bold px-3.5 py-1.5 rounded-lg transition-colors">
                      Seguir
                    </button>
                  </div>

                  {/* Profile stats bar */}
                  <div className="bg-white px-4 py-2.5 border-b border-gray-50 flex items-center justify-around">
                    <div className="text-center">
                      <span className="block text-[12px] font-bold text-gray-900">100+</span>
                      <span className="block text-[9px] text-gray-400">posts</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[12px] font-bold text-gray-900">1,086</span>
                      <span className="block text-[9px] text-gray-400">seguidores</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[12px] font-bold text-gray-900">186</span>
                      <span className="block text-[9px] text-gray-400">seguidos</span>
                    </div>
                  </div>

                  {/* Grid of 9 posts (3x3) */}
                  <div className="grid grid-cols-3 gap-[1px] bg-gray-100">
                    {posts.map((post, idx) => (
                      <div key={idx} className="aspect-square relative overflow-hidden group/post bg-gray-200">
                        <Image
                          src={post.src}
                          alt={post.tag}
                          fill
                          className="object-cover transition-transform duration-500 group-hover/post:scale-110"
                          sizes="120px"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover/post:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/post:opacity-100">
                          <svg className="h-5 w-5 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom bar */}
                  <div className="bg-white px-4 py-3 border-t border-gray-100 flex items-center justify-center gap-1.5">
                    <span className="text-[10px] font-bold text-totto-red">Ver más en Instagram</span>
                    <svg className="h-3 w-3 text-totto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating hashtag badges */}
              <div className="absolute -top-3 -left-8 bg-totto-red text-totto-cream text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-totto-red-dark/20 rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
                #TottoMoments
              </div>
              <div className="absolute bottom-20 -right-6 bg-totto-honey text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-totto-honey/20 rotate-[4deg] hover:rotate-0 transition-transform duration-300">
                #GelatoReal
              </div>
              <div className="absolute top-1/4 -left-12 bg-totto-pistachio text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg border border-totto-pistachio/20 rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                #Artesanal
              </div>
              <div className="absolute bottom-1/3 -left-6 bg-totto-hazelnut text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg border border-totto-hazelnut/20 rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                #Narvarte
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Full-width photo strip marquee */}
        <div className="relative">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fbf7e6] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fbf7e6] to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden select-none">
            <div className="flex w-max flex-nowrap items-center animate-marquee-left hover:[animation-play-state:paused]">
              {[...posts, ...posts].map((post, idx) => (
                <div
                  key={idx}
                  className="shrink-0 h-28 w-28 sm:h-36 sm:w-36 rounded-2xl overflow-hidden mx-2 relative group border border-totto-red/5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <Image
                    src={post.src}
                    alt={post.tag}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="144px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-2 left-2 right-2 text-[8px] text-white font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                    {post.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
