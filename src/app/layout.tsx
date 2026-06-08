import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      className={`${poppins.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}


