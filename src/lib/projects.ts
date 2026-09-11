export type ProjectStatus = "live" | "soon";
export type ProjectKind = "tech" | "literatura";
export type ProjectLocale = "es" | "en";

export interface ProjectTranslation {
  author?: string;
  category?: string;
  description?: string;
  stack?: string[];
}

export interface PrototypeProject {
  id: string;
  index: string;
  title: string;
  author: string;
  category: string;
  kind: ProjectKind;
  description: string;
  stack: string[];
  monogram: string;
  href?: string;
  external?: boolean;
  status: ProjectStatus;
  translations?: Partial<Record<ProjectLocale, ProjectTranslation>>;
}

export const projects: PrototypeProject[] = [
  {
    id: "pat-crespo",
    index: "001",
    title: "De poéticas",
    author: "Patricia Crespo Alcalá",
    category: "Portafolio literario",
    kind: "literatura",
    description:
      "Rediseño del sitio personal de la poeta y crítica literaria valenciana: bitácora poética, obras publicadas, colaboraciones en medios y contacto.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Static export"],
    monogram: "PCA",
    href: "/portfolios/pat-crespo",
    status: "live",
    translations: {
      en: {
        author: "Patricia Crespo Alcalá",
        category: "Literary portfolio",
        description:
          "Redesign of the personal site of the Valencian poet and literary critic: poetry journal, published works, media collaborations and contact.",
      },
    },
  },
  {
    id: "xscriptor-colors",
    index: "002",
    title: "Xscriptor Colors",
    author: "Temas y personalizaciones",
    category: "Recursos visuales",
    kind: "tech",
    description:
      "Colección de temas y ajustes para VS Code, JetBrains, Obsidian, terminal y más: paletas claras y oscuras listas para instalar.",
    stack: ["Temas", "VS Code", "JetBrains", "Terminal"],
    monogram: "XC",
    href: "https://xscriptor-colors.github.io/web/",
    external: true,
    status: "live",
    translations: {
      en: {
        author: "Themes and customizations",
        category: "Visual resources",
        description:
          "A collection of themes and tweaks for VS Code, JetBrains, Obsidian, the terminal and more: light and dark palettes ready to install.",
        stack: ["Themes", "VS Code", "JetBrains", "Terminal"],
      },
    },
  },
  {
    id: "x-linux",
    index: "003",
    title: "X Linux",
    author: "Distribución basada en Arch Linux",
    category: "Sistema operativo",
    kind: "tech",
    description:
      "Distribución enfocada en la simplicidad, una identidad propia y builds reproducibles, con scripts de configuración, editores y herramientas preinstaladas.",
    stack: ["Arch Linux", "Shell", "Rust"],
    monogram: "XL",
    href: "https://xlnux.github.io/web/es/",
    external: true,
    status: "live",
    translations: {
      en: {
        author: "Arch Linux-based distribution",
        category: "Operating system",
        description:
          "A distribution focused on simplicity, a distinct identity and reproducible builds, with setup scripts, editors and tools preinstalled.",
      },
    },
  },
  {
    id: "xfetch",
    index: "004",
    title: "xfetch",
    author: "Información del sistema en Rust",
    category: "Herramienta CLI",
    kind: "tech",
    description:
      "Herramienta multiplataforma de información del sistema escrita en Rust, con layouts configurables, animaciones de logo, paleta ANSI y sistema de plugins.",
    stack: ["Rust", "CLI", "Multiplataforma"],
    monogram: "XF",
    href: "https://xfetch-cli.github.io/web/",
    external: true,
    status: "live",
    translations: {
      en: {
        author: "System info in Rust",
        category: "CLI tool",
        description:
          "A cross-platform system information tool written in Rust, with configurable layouts, logo animations, an ANSI palette and a plugin system.",
        stack: ["Rust", "CLI", "Cross-platform"],
      },
    },
  },
  {
    id: "xtop",
    index: "005",
    title: "xtop",
    author: "Monitor de sistema en la terminal",
    category: "Monitor TUI",
    kind: "tech",
    description:
      "Monitor de sistema TUI multiplataforma escrito en Rust: métricas reales, temas y layouts configurables, plugins, extensiones y efectos sobre un kernel modular.",
    stack: ["Rust", "Ratatui", "TUI"],
    monogram: "XT",
    href: "https://xtop-cli.github.io/web/",
    external: true,
    status: "live",
    translations: {
      en: {
        author: "Terminal system monitor",
        category: "TUI monitor",
        description:
          "A cross-platform TUI system monitor written in Rust: real metrics, configurable themes and layouts, plugins, extensions and effects on a modular kernel.",
      },
    },
  },
];

export const soonProjects: PrototypeProject[] = [
  {
    id: "next",
    index: "006",
    title: "",
    author: "",
    category: "",
    kind: "tech",
    description: "",
    stack: [],
    monogram: "",
    status: "soon",
  },
];

export function localizeProject(
  project: PrototypeProject,
  locale: ProjectLocale
): PrototypeProject {
  if (locale === "es") return project;
  const translation = project.translations?.en;
  if (!translation) return project;
  return {
    ...project,
    author: translation.author ?? project.author,
    category: translation.category ?? project.category,
    description: translation.description ?? project.description,
    stack: translation.stack ?? project.stack,
  };
}
