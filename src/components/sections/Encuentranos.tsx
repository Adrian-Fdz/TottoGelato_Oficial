"use client";

import { useState, useEffect } from "react";

export default function Encuentranos() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Cargando horario...");

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const utcHours = now.getUTCHours();
      
      // Convert UTC to CDMX Time (UTC-6)
      let cdmxHour = utcHours - 6;
      if (cdmxHour < 0) {
        cdmxHour += 24;
      }
      
      // Monday to Sunday: 12:00 to 20:00 (12:00 PM to 8:00 PM)
      const isOpenTime = cdmxHour >= 12 && cdmxHour < 20;
      
      if (isOpenTime) {
        setIsOpen(true);
        setStatusMessage("Abierto ahora");
      } else {
        setIsOpen(false);
        setStatusMessage("Cerrado ahora");
      }
    };
    
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="encuentranos" className="py-24 bg-[#fbf7e6] text-totto-dark overflow-hidden relative">
      {/* Texture background overlay */}
      <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-totto-red font-bold uppercase tracking-[0.2em] text-[11px] sm:text-xs block">
            COLONIA VÉRTIZ NARVARTE · CDMX
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-totto-dark sm:text-5xl font-condensed">
            Encuéntranos
          </h2>
          <p className="text-sm sm:text-base text-totto-dark/60 max-w-lg mx-auto leading-relaxed">
            Ven a visitarnos — te esperamos con el gelato listo
          </p>
        </div>

        {/* TWO COLUMNS (MAP AND INFO CARD) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16">
          
          <div className="lg:col-span-6 h-[320px] md:h-auto min-h-[320px] rounded-3xl overflow-hidden border border-totto-red/10 shadow-md relative bg-white/50">
            <iframe
              src="https://maps.google.com/maps?q=Totto%20Gelato,%20San%20Borja%201405,%20V%C3%A9rtiz%20Narvarte,%20CDMX&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] opacity-95 hover:opacity-100 transition-opacity duration-300"
            ></iframe>
          </div>

          {/* RIGHT COLUMN: CARD WITH INFO AND CONTACTS */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-totto-red/5 p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-[0_12px_40px_rgba(46,44,44,0.03)]">
            
            <div className="space-y-6">
              
              {/* DIRECTION ROW */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-totto-red/5 border border-totto-red/10 flex items-center justify-center text-totto-red">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] text-totto-dark/40 font-semibold uppercase tracking-wider block">Dirección</span>
                  <h4 className="font-bold text-totto-dark text-base sm:text-lg leading-tight">San Borja 1405</h4>
                  <p className="text-sm text-totto-dark/70">Col. Vértiz Narvarte, CDMX</p>
                </div>
              </div>

              {/* HORARIOS ROW */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-totto-red/5 border border-totto-red/10 flex items-center justify-center text-totto-red">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] text-totto-dark/40 font-semibold uppercase tracking-wider block">Horarios</span>
                    {/* Reactive Status Badge */}
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isOpen 
                        ? "bg-emerald-55 text-emerald-700 border border-emerald-300/40 animate-fade-in" 
                        : "bg-gray-100 text-gray-500 border border-gray-300/30"
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-emerald-500 animate-ping" : "bg-gray-400"}`}></span>
                      <span className={`h-1.5 w-1.5 rounded-full -ml-2.5 ${isOpen ? "bg-emerald-500" : "bg-gray-400"}`}></span>
                      {statusMessage}
                    </span>
                  </div>
                  <h4 className="font-bold text-totto-dark text-base sm:text-lg leading-tight">Lun - Dom 12:00 - 20:00</h4>
                  <p className="text-xs text-totto-dark/50">Abierto todos los días de la semana, incluyendo días festivos.</p>
                </div>
              </div>

            </div>

            {/* 4 CONTACT BUTTONS */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 pt-6 border-t border-totto-red/10">
              
              {/* CÓMO LLEGAR */}
              <a
                href="https://www.google.com/maps/place/totto+gelato/data=!4m2!3m1!1s0x85d1ff12d2602757:0x5594c11e6dae3397?sa=X&ved=1t:242&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-sky-300 bg-sky-50/50 p-3 text-center hover:bg-sky-100/50 hover:border-sky-400 transition-all duration-300 group focus:outline-none hover:scale-[1.03] active:scale-[0.97] min-h-[84px]"
              >
                <div className="text-sky-600 group-hover:scale-110 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-totto-dark group-hover:text-totto-dark transition-colors leading-none">
                  Cómo llegar
                </span>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/525580807417?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20Totto%20Gelato"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-gray-50/30 p-3 text-center hover:bg-gray-100/40 hover:border-gray-300 transition-all duration-300 group focus:outline-none hover:scale-[1.03] active:scale-[0.97] min-h-[84px]"
              >
                <div className="text-emerald-600 group-hover:scale-110 transition-transform">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-totto-dark group-hover:text-totto-dark transition-colors leading-none">
                  WhatsApp
                </span>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/totto.gelato/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-gray-50/30 p-3 text-center hover:bg-gray-100/40 hover:border-gray-300 transition-all duration-300 group focus:outline-none hover:scale-[1.03] active:scale-[0.97] min-h-[84px]"
              >
                <div className="text-pink-600 group-hover:scale-110 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-totto-dark group-hover:text-totto-dark transition-colors leading-none">
                  Instagram
                </span>
              </a>

              {/* LLAMAR */}
              <a
                href="tel:+525580807417"
                className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-gray-50/30 p-3 text-center hover:bg-gray-100/40 hover:border-gray-300 transition-all duration-300 group focus:outline-none hover:scale-[1.03] active:scale-[0.97] min-h-[84px]"
              >
                <div className="text-totto-red group-hover:scale-110 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-totto-dark group-hover:text-totto-dark transition-colors leading-none">
                  Llamar
                </span>
              </a>
            </div>

          </div>

        </div>

        {/* ASYMMETRIC EDITORIAL IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          
          {/* Main Wide Image (Facade) */}
          <div className="md:col-span-2 overflow-hidden rounded-3xl h-64 md:h-[400px] relative group border border-white/5 shadow-md">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 z-10"></div>
            <img
              src="/images/local_fachada.png"
              alt="Fachada de Totto Gelato en CDMX"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="inline-flex items-center rounded-full bg-totto-red px-3 py-1 text-xs font-bold text-totto-cream shadow">
                El Local
              </span>
            </div>
          </div>

          {/* Two Smaller Images (Interior and Copa) */}
          <div className="grid grid-rows-2 gap-6 h-64 md:h-[400px]">
            
            <div className="overflow-hidden rounded-3xl relative group border border-white/5 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 z-10"></div>
              <img
                src="/images/local_interior.png"
                alt="Interior y vitrina de Totto Gelato"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="inline-flex items-center rounded-full bg-totto-dark/70 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold text-white shadow">
                  Nuestra Vitrina
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl relative group border border-white/5 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 z-10"></div>
              <img
                src="/images/local_gelato_detail.png"
                alt="Detalle de Gelato en Copa"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="inline-flex items-center rounded-full bg-totto-dark/70 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold text-white shadow">
                  Calidad Artesanal
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
