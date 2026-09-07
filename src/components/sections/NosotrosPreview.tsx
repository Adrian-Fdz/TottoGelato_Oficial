import Link from "@/components/ui/TransitionLink";
import Image from "next/image";

export default function NosotrosPreview() {
  return (
    <section id="nosotros" className="snap-section py-20 bg-totto-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN: TOTTO THE MASCOT IMAGE */}
          <div className="lg:col-span-5 relative" data-reveal="left">
            <div className="aspect-square md:aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg border border-totto-red/10 relative group bg-totto-cream/20">
              <Image
                src="/images/Totto-Perfil.webp"
                alt="Totto, el San Bernardo de 10 años que inspiró la heladería"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 35vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-totto-red px-4 py-1.5 text-xs font-bold text-totto-cream shadow">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <ellipse cx="6.5" cy="9" rx="2.1" ry="2.7" />
                  <ellipse cx="17.5" cy="9" rx="2.1" ry="2.7" />
                  <ellipse cx="10.2" cy="5.2" rx="2" ry="2.6" />
                  <ellipse cx="13.8" cy="5.2" rx="2" ry="2.6" />
                  <path d="M12 12.4c2.7 0 5.4 2.1 5.4 4.6 0 1.9-1.5 2.9-3.2 2.9-.9 0-1.5-.3-2.2-.3s-1.3.3-2.2.3c-1.7 0-3.2-1-3.2-2.9 0-2.5 2.7-4.6 5.4-4.6Z" />
                </svg>
                Conoce al CEO (Totto)
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: HISTORIA DE TOTTO Y FILOSOFÍA */}
          <div className="lg:col-span-7 space-y-6" data-reveal="right">
            <span className="text-totto-red font-bold uppercase tracking-widest text-xs">
              La Inspiración Detrás de la Marca
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-totto-dark sm:text-4xl font-condensed">
              Nuestra Historia & Filosofía
            </h2>
            <p className="text-lg text-totto-dark/90 leading-relaxed font-light">
              Totto Gelato nació de la pasión por la heladería tradicional italiana y está inspirado en <strong>Totto</strong>, nuestro noble San Bernardo de 10 años que le da identidad y calidez a nuestro local.
            </p>
            <div className="space-y-4 text-sm sm:text-base text-totto-dark/75 leading-relaxed">
              <p>
                Al igual que el carácter noble, honesto y transparente de nuestro fiel compañero, creemos que el gelato debe ser puro. Por eso, elaboramos cada receta desde cero en lotes pequeños, utilizando únicamente fruta fresca de temporada y materias primas seleccionadas, sin bases industriales, saborizantes artificiales ni conservadores.
              </p>
              <p>
                Nuestra filosofía combina el respeto por la técnica de mantecación lenta florentina con la calidez del barrio de la Narvarte, creando un espacio familiar donde cada tina de gelato cuenta una historia de dedicación y cariño.
              </p>
            </div>
            
            <div className="pt-4">
              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center rounded-full bg-totto-red px-6 py-3 text-sm font-semibold text-totto-cream hover:bg-totto-red-light transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
              >
                Conoce nuestra historia completa →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
