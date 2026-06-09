import type { Metadata } from "next";
import SaboresCatalog from "@/components/sections/sabores/SaboresCatalog";

export const metadata: Metadata = {
  title: "Sabores | Totto Gelato",
  description:
    "Explora el catálogo de sabores de Totto Gelato: gelatos artesanales, sabores de temporada y creaciones especiales en CDMX.",
};

export default function SaboresPage() {
  return <SaboresCatalog />;
}
