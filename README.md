# prototypes.xscriptor.io

Catálogo de interfaces rediseñadas por [Xscriptor](https://xscriptor.io). Cada prototipo es un ejercicio personal de front-end: tomo un sitio público y lo reconstruyo desde cero con Next.js, Tailwind CSS y TypeScript, explorando decisiones de diseño, arquitectura de componentes y rendimiento.

El sitio es una **exportación estática** (`output: "export"`) pensada para publicarse en `prototypes.xscriptor.io`.

## Rutas

| Ruta | Contenido |
|------|-----------|
| `/` | Portada del catálogo: índice de todos los prototipos |
| `/portfolios` | Categoría de portfolios personales (tarjetas) |
| `/portfolios/pat-crespo` | **De poéticas** — portafolio literario de Patricia Crespo Alcalá |

### `/portfolios/pat-crespo`

Rediseño completo del sitio personal de la poeta y crítica literaria valenciana Patricia Crespo Alcalá. Incluye:

- Portada con rotador de fragmentos poéticos, libros y últimas publicaciones
- Blog literario con 21 entradas (`/portfolios/pat-crespo/blog`)
- Biografía y obras publicadas (`/bio`, `/obras`)
- Contacto y enlaces a medios (`/contacto`)

Se conserva el look & feel del proyecto original (tipografías Playfair Display, Lora y Caveat; paleta verde bosque / marrón cuero; componentes y estilos Tailwind idénticos), ahora servido bajo el subdominio `prototypes.xscriptor.io`.

El retrato de la autora y las portadas de sus libros se sirven en local desde `public/images/pat-crespo/` para no depender de servidores externos. Las imágenes del blog se cargan desde `blogger.googleusercontent.com` (el sitio original).

## Estructura

```
src/
├── app/
│   ├── layout.tsx                  # Layout raíz (fuentes y metadata del hub)
│   ├── page.tsx                    # Portada del catálogo
│   ├── not-found.tsx               # 404 del hub
│   ├── hub.module.css              # Estilos del hub
│   ├── globals.css                 # Tailwind + estilos del hub + estilos del portafolio
│   └── portfolios/
│       ├── page.tsx                # Categoría /portfolios (tarjetas)
│       └── pat-crespo/             # Sitio de Patricia Crespo Alcalá
│           ├── layout.tsx          # Header, Footer y transiciones del portafolio
│           ├── page.tsx
│           ├── bio/ blog/ contacto/ obras/
├── components/
│   ├── hub/                        # HubShell, ProjectCard, ProjectTile
│   └── pat-crespo/                 # Componentes del portafolio literario
└── lib/
    ├── projects.ts                 # Registro de prototipos del hub
    └── pat-crespo/                 # Datos y utilidades del portafolio
```

## Stack

| Tecnología | Versión |
|------------|---------|
| Next.js | 16 |
| React | 19 |
| TypeScript | 5.9 |
| Tailwind CSS | 3.4 |
| sanitize-html | 2.17 |

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # entorno de desarrollo
npm run lint       # ESLint
npm run typecheck  # comprobación de tipos
npm run build      # exportación estática a ./out
npm run serve      # servir ./out en local
```

## Añadir un prototipo

1. Añade una entrada en `src/lib/projects.ts` (`status: "live"`, `href` a la nueva ruta y `monogram` para la tarjeta).
2. Crea la página bajo `src/app/`.
3. Ejecuta `npm run build` y verifica la exportación en `./out`.

## Aviso

Las marcas, nombres comerciales, logotipos y contenidos mostrados en estos prototipos pertenecen a sus respectivos propietarios. No existe ninguna relación laboral, contractual o de asociación con las marcas o entidades cuyos sitios se referencian. Este material se publica exclusivamente con fines educativos y de demostración técnica.

Si eres propietario de una marca representada en este repositorio y deseas que el material sea retirado, abre un issue y será atendido con la mayor brevedad.

---

*Mantenido por Xscriptor — [xscriptor.io](https://xscriptor.io)*
