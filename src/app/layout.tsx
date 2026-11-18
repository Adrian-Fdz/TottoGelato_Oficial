import type { Metadata } from "next";
import { Poppins, Oswald } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tottogelato.mx"),
  title: {
    default: "Totto Gelato | Gelatería Artesanal en CDMX",
    template: "%s",
  },
  description: "Descubre el auténtico gelato artesanal en CDMX. Sabores únicos hechos con ingredientes frescos y pasión. Visítanos en nuestra tienda física o contáctanos.",
  icons: {
    icon: "/FaviWebi.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Totto Gelato",
    url: "/",
    title: "Totto Gelato | Gelatería Artesanal en CDMX",
    description: "Gelato artesanal elaborado en lotes pequeños con frutas frescas e ingredientes de Italia. Vértiz Narvarte, CDMX.",
    images: [{ url: "/images/LogoHeader.webp", alt: "Totto Gelato" }],
  },
  twitter: {
    card: "summary",
    title: "Totto Gelato | Gelatería Artesanal en CDMX",
    description: "Gelato artesanal elaborado en lotes pequeños con frutas frescas e ingredientes de Italia.",
    images: ["/images/LogoHeader.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // "js-reveal" ships in the server-rendered markup instead of being added
    // by a script before hydration. React owns this className, and mutating it
    // early is exactly what caused the hydration mismatch. Rendering it here
    // keeps server and client identical while still arming the scroll-reveal
    // hidden state ahead of the first paint.
    <html
      lang="es"
      className={`${poppins.variable} ${oswald.variable} h-full antialiased font-sans js-reveal`}
    >
      <body className="min-h-full flex flex-col">
        {/*
          With JS disabled the reveal observer never runs, so the hidden state
          has to be lifted by markup that needs no JS at all.
        */}
        <noscript>
          <style>{`[data-reveal],[data-reveal-stagger]>*{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {/*
          Safety net only: if ScrollReveal never reports ready (its bundle
          failed to load), drop the class so the content shows up unanimated
          instead of staying invisible. This fires long after hydration, so
          touching the className here no longer risks a mismatch.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var r=document.documentElement;setTimeout(function(){" +
              "if(!r.dataset.revealReady)r.classList.remove('js-reveal')},3000)}catch(e){}",
          }}
        />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <ScrollReveal />
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "IceCreamShop",
              "name": "Totto Gelato",
              "image": "https://tottogelato.mx/images/LogoHeader.webp",
              "@id": "https://tottogelato.mx/#organization",
              "url": "https://tottogelato.mx",
              "telephone": "+525528906616",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "San Borja 1405, Vértiz Narvarte",
                "addressLocality": "Ciudad de México",
                "addressRegion": "CDMX",
                "postalCode": "03600",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.3857,
                "longitude": -99.1578
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "12:00",
                  "closes": "20:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/totto.gelato/"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}


