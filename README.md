# 🍦 Totto Gelato — Sitio Web Oficial

Sitio web oficial de **Totto Gelato**, gelatería artesanal ubicada en la colonia Vértiz Narvarte, Ciudad de México. Gelato elaborado diariamente en lotes pequeños con frutas frescas mexicanas e ingredientes importados de Italia — sin aditivos, colorantes ni conservadores.

---

## ✨ Características

- **Catálogo de sabores** dinámico con categorías (Clásicos, Frutales, Especiales, Temporada) y filtros interactivos
- **Timeline interactivo** del método artesanal en 4 fases con auto-rotación y progress bars
- **Galería** con marquee infinito dual (scroll izquierda/derecha) y pausa al hover
- **Testimonios** con sistema de rotación automática, selector de reseñas y estadísticas verificadas
- **Sección Instagram** con mockup de teléfono, grid de publicaciones y hashtags flotantes animados
- **Mapa y contacto** con integración de Google Maps, estado de apertura en tiempo real y accesos directos a WhatsApp
- **Newsletter** con formulario reactivo y validación (solo en el cliente, aún sin backend)
- **Scroll-to-top** dinámico con animación de entrada/salida
- **Diseño responsive** optimizado para móvil, tablet y desktop
- **Micro-animaciones** y transiciones suaves a lo largo de toda la experiencia

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **Next.js 16** | Framework React con App Router (páginas estáticas) |
| **TypeScript** | Tipado estático |
| **Tailwind CSS v4** | Estilos utilitarios y sistema de diseño |
| **Oswald + Poppins** | Tipografía (Google Fonts via `next/font`) |
| **next/image** | Optimización automática de imágenes |

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx              # Página principal
│   ├── nosotros/page.tsx     # Página "Nosotros"
│   ├── sabores/page.tsx      # Catálogo de sabores
│   ├── robots.ts / sitemap.ts # SEO
│   ├── not-found.tsx         # Página 404
│   ├── globals.css           # Variables de diseño y animaciones
│   └── layout.tsx            # Layout raíz con Header/Footer
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navegación principal
│   │   └── Footer.tsx        # Footer con newsletter y contacto
│   └── sections/
│       ├── Hero.tsx           # Hero principal con CTA
│       ├── AnnouncementTicker.tsx # Ticker de anuncios
│       ├── SaboresPreview.tsx # Preview de sabores destacados
│       ├── Proceso.tsx        # Resumen del proceso artesanal
│       ├── NosotrosPreview.tsx # Preview de la página Nosotros
│       ├── Testimonios.tsx    # Reseñas con auto-rotación
│       ├── Galeria.tsx        # Galería con marquee infinito
│       ├── SocialInvite.tsx   # Sección Instagram
│       ├── Encuentranos.tsx   # Mapa y contacto
│       └── about/
│           ├── AboutHero.tsx
│           ├── Historia.tsx
│           ├── MetodoArtesanal.tsx
│           ├── MisionVisionValores.tsx
│           └── AboutCTA.tsx
└── public/images/             # Imágenes optimizadas (.webp)

Los PNG originales viven en `public/images/originals/` (ignorados por git).
```

## 🎨 Paleta de Marca

| Color | Hex | Uso |
|---|---|---|
| 🔴 Totto Red | `#aa2323` | Color primario, CTAs, acentos |
| 🟡 Totto Cream | `#fffae2` | Fondos claros, texto sobre oscuro |
| 🟤 Totto Dark | `#2e2c2c` | Texto principal, fondos oscuros |
| 🟢 Pistachio | `#7d9770` | Acento verde, valores |
| 🟠 Honey | `#e2a347` | Acento dorado, estrellas, badges |
| 🫘 Hazelnut | `#7c5c43` | Acento cálido complementario |

## 🚀 Getting Started

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📍 Totto Gelato

**Dirección:** San Borja 1405, Col. Vértiz Narvarte, CDMX  
**Horario:** Lun – Dom, 12:00 – 20:00  
**Instagram:** [@totto.gelato](https://www.instagram.com/totto.gelato/)  
**WhatsApp:** [55 2890 6616](https://wa.me/525528906616)

---

Hecho con ❤️ y pistache siciliano.
