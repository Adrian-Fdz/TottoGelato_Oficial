import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada | Totto Gelato",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center bg-totto-cream px-6 py-32 text-center">
      <div className="max-w-md">
        <p className="font-[family-name:var(--font-oswald)] text-7xl font-semibold text-totto-red">
          404
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-oswald)] text-3xl font-semibold uppercase text-totto-dark">
          Este sabor no existe
        </h1>
        <p className="mt-3 text-totto-dark/70">
          La página que buscas no está disponible. Regresa al inicio o explora
          nuestros sabores.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-totto-red px-6 py-3 text-sm font-semibold text-totto-cream hover:bg-totto-red-dark transition-colors"
          >
            Ir al inicio
          </Link>
          <Link
            href="/sabores"
            className="rounded-full border border-totto-red px-6 py-3 text-sm font-semibold text-totto-red hover:bg-totto-red hover:text-totto-cream transition-colors"
          >
            Ver sabores
          </Link>
        </div>
      </div>
    </main>
  );
}
