# Documentación — Patricia Crespo Alcalá

> Portafolio integrado en `prototypes.xscriptor.io` y servido en la ruta `/portfolios/pat-crespo`.

## Descripción

Sitio web poético-literario que funciona como bitácora personal, portafolio de obra publicada y punto de contacto. El diseño prioriza la legibilidad, la jerarquía tipográfica y una atmósfera serena que acompañe la experiencia de lectura.

## Estructura del proyecto

```
src/
├── app/portfolios/pat-crespo/
│   ├── bio/            # Página biográfica
│   ├── blog/           # Blog literario (entradas)
│   ├── contacto/       # Página de contacto
│   ├── obras/          # Obras publicadas
│   ├── layout.tsx      # Layout del portafolio (Header, Footer, transiciones)
│   └── page.tsx        # Portada
├── components/pat-crespo/
│   ├── BooksSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PageTransition.tsx
│   ├── PoetryRotator.tsx
│   ├── PostCard.tsx
│   ├── PostContent.tsx
│   └── TagBadge.tsx
├── lib/pat-crespo/
│   ├── posts.json      # Datos extraídos del sitio original
│   ├── posts.ts        # Utilidades para entradas del blog
│   ├── routes.ts       # Prefijo de rutas bajo /portfolios/pat-crespo
│   └── types.ts        # Tipos del contenido
└── app/globals.css     # Tailwind + estilos del portafolio
```

## Tecnologías

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| Next.js | 16.3 | Framework React con App Router y exportación estática |
| React | 19.3 | Librería de UI |
| TypeScript | 5.9 | Tipado estático |
| Tailwind CSS | 3.4 | Estilos utilitarios |
| PostCSS / Autoprefixer | — | Procesamiento CSS |

## Tipografía

| Rol | Fuente | Estilo |
|-----|--------|--------|
| Títulos | Playfair Display | Serif, elegante |
| Cuerpo | Lora | Serif, legible |
| Acentos | Caveat | Cursiva, manuscrita |

Las fuentes se sirven localmente mediante `next/font/google`, sin depender de peticiones externas en tiempo de ejecución.

## Paleta de color

- **Primario**: `#2D4A3E` (verde bosque)
- **Acento**: `#8B5E3C` (marrón cuero)
- **Fondo**: `#FFFFFF` / `#FAFAF8` (blanco / crema)
- **Texto**: `#1E332A` (verde oscuro)

## Páginas

- `/portfolios/pat-crespo` — Portada con rotador de poesía, entrada destacada, libros
- `/portfolios/pat-crespo/bio` — Información biográfica
- `/portfolios/pat-crespo/blog` — Archivo de entradas literarias
- `/portfolios/pat-crespo/obras` — Obras publicadas
- `/portfolios/pat-crespo/contacto` — Información de contacto
