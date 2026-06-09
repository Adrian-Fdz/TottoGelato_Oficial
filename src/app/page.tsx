import Hero from "@/components/sections/Hero";
import AnnouncementTicker from "@/components/sections/AnnouncementTicker";
import SaboresPreview from "@/components/sections/SaboresPreview";
import Proceso from "@/components/sections/Proceso";
import NosotrosPreview from "@/components/sections/NosotrosPreview";
import Galeria from "@/components/sections/Galeria";
import Encuentranos from "@/components/sections/Encuentranos";

export default function Home() {
  return (
    <main className="flex-1 bg-totto-white">
      <Hero />
      <AnnouncementTicker />
      <SaboresPreview />
      <Proceso />
      <NosotrosPreview />
      <Galeria />
      <Encuentranos />
    </main>
  );
}

