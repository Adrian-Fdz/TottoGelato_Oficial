import type { Metadata } from "next";
import { Poppins, Oswald } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  title: "Totto Gelato | Gelatería Artesanal en CDMX",
  description: "Descubre el auténtico gelato artesanal en CDMX. Sabores únicos hechos con ingredientes frescos y pasión. Visítanos en nuestra tienda física o contáctanos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${oswald.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "IceCreamShop",
              "name": "Totto Gelato",
              "image": "https://tottogelato.mx/images/LogoHeader.png",
              "@id": "https://tottogelato.mx/#organization",
              "url": "https://tottogelato.mx",
              "telephone": "+525580807417",
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


