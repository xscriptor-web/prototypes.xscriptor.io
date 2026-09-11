export type ProjectStatus = "live" | "soon";

export interface PrototypeProject {
  id: string;
  index: string;
  title: string;
  author: string;
  category: string;
  description: string;
  stack: string[];
  monogram: string;
  href?: string;
  status: ProjectStatus;
}

export const projects: PrototypeProject[] = [
  {
    id: "pat-crespo",
    index: "001",
    title: "De poéticas",
    author: "Patricia Crespo Alcalá",
    category: "Portafolio literario",
    description:
      "Rediseño del sitio personal de la poeta y crítica literaria valenciana: bitácora poética, obras publicadas, colaboraciones en medios y contacto.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Static export"],
    monogram: "PCA",
    href: "/portfolios/pat-crespo",
    status: "live",
  },
];
