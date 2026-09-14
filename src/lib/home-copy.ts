export type HomeLocale = "es" | "en";

export interface HomeCopy {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  lede: string;
  stats: {
    published: string;
    categories: string;
    output: string;
  };
  index: {
    title: string;
    filterLabel: string;
    all: string;
    literatura: string;
    tech: string;
    publishedSingular: string;
    publishedPlural: string;
    soonSuffix: string;
    soonLabel: string;
  };
  stackLabel: string;
  externalLabel: string;
  languageLabel: string;
  collection: {
    title: string;
    first: string;
    second: string;
  };
  legal: {
    title: string;
    first: string;
    contactBefore: string;
    contactAfter: string;
  };
}

export const homeCopy: Record<HomeLocale, HomeCopy> = {
  es: {
    eyebrow: "Catálogo de prototipos · Xscriptor",
    titleLead: "Rediseños y",
    titleAccent: "herramientas",
    lede: "Un archivo de ejercicios de front-end y proyectos propios: reconstruyo sitios reales desde cero y desarrollo herramientas de código abierto con Next.js, Tailwind CSS y Rust.",
    stats: {
      published: "Publicados",
      categories: "Categorías",
      output: "Salida",
    },
    index: {
      title: "Índice",
      filterLabel: "Filtrar por categoría",
      all: "Todos",
      literatura: "Literatura",
      tech: "Tech",
      publishedSingular: "publicado",
      publishedPlural: "publicados",
      soonSuffix: "en preparación",
      soonLabel: "Nuevo prototipo en preparación",
    },
    stackLabel: "Stack",
    externalLabel: "(abre en una nueva pestaña)",
    languageLabel: "Idioma",
    collection: {
      title: "Sobre la colección",
      first:
        "El índice reúne dos tipos de trabajo. Por un lado, sitios personales y literarios: reconstrucciones de portfolios reales y proyectos propios. Por otro, herramientas de código abierto: temas, distribuciones y utilidades de terminal.",
      second:
        "Cada pieza es un ejercicio de diseño e ingeniería: explorar decisiones visuales, arquitectura de componentes y rendimiento, y mantener un historial público de trabajo en front-end.",
    },
    legal: {
      title: "Aviso y propiedad",
      first:
        "Las marcas, nombres comerciales, logotipos y contenidos de los sitios reconstruidos pertenecen a sus respectivos propietarios. No existe ninguna relación laboral, contractual o de asociación con las marcas o entidades referenciadas.",
      contactBefore:
        "Material publicado con fines educativos y de demostración técnica. Si eres propietario de una marca representada y deseas que sea retirada, escríbeme desde ",
      contactAfter: ".",
    },
  },
  en: {
    eyebrow: "Prototype catalog · Xscriptor",
    titleLead: "Redesigns and",
    titleAccent: "tools",
    lede: "An archive of front-end exercises and personal projects: I rebuild real sites from scratch and build open-source tools with Next.js, Tailwind CSS and Rust.",
    stats: {
      published: "Published",
      categories: "Categories",
      output: "Output",
    },
    index: {
      title: "Index",
      filterLabel: "Filter by category",
      all: "All",
      literatura: "Literature",
      tech: "Tech",
      publishedSingular: "published",
      publishedPlural: "published",
      soonSuffix: "in progress",
      soonLabel: "New prototype in progress",
    },
    stackLabel: "Stack",
    externalLabel: "(opens in a new tab)",
    languageLabel: "Language",
    collection: {
      title: "About the collection",
      first:
        "The index brings together two kinds of work: personal and literary sites, from rebuilds of real portfolios to original projects, and open-source tools: themes, distributions and terminal utilities.",
      second:
        "Each piece is a design and engineering exercise: exploring visual decisions, component architecture and performance, and keeping a public record of front-end work.",
    },
    legal: {
      title: "Notice and ownership",
      first:
        "Trademarks, trade names, logos and content of the rebuilt sites belong to their respective owners. There is no employment, contractual or association relationship with the referenced brands or entities.",
      contactBefore:
        "Material published for educational and technical demonstration purposes. If you own a represented brand and wish it to be removed, contact me at ",
      contactAfter: ".",
    },
  },
};
