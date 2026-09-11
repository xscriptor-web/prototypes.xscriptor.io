import type { Metadata } from "next";
import HubShell from "@/components/hub/HubShell";
import ProjectTile from "@/components/hub/ProjectTile";
import { projects } from "@/lib/projects";
import styles from "@/app/hub.module.css";

export const metadata: Metadata = {
  title: "Portfolios",
  description:
    "Rediseños de portfolios personales reconstruidos desde cero con Next.js, Tailwind CSS y TypeScript.",
};

export default function PortfoliosPage() {
  const liveProjects = projects.filter((project) => project.status === "live");

  return (
    <HubShell>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Categoría · Portfolios</p>
          <h1 className={styles.title}>
            Portfolios
            <br />
            <em>personales</em>
            <span className={styles.titleDot}>.</span>
          </h1>
        </div>
        <div className={styles.heroAside}>
          <p className={styles.lede}>
            Sitios de autores, artistas y profesionales reconstruidos desde cero:
            misma esencia y mismo contenido, con una nueva arquitectura de
            front-end y una dirección de arte propia.
          </p>
        </div>
      </section>

      <section aria-labelledby="portfolios-title">
        <div className={styles.indexHead}>
          <h2 id="portfolios-title" className={styles.indexTitle}>
            Proyectos
          </h2>
          <span className={styles.indexCount}>
            {String(liveProjects.length).padStart(2, "0")} disponible
            {liveProjects.length === 1 ? "" : "s"}
          </span>
        </div>
        <div className={styles.cards}>
          {liveProjects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </section>
    </HubShell>
  );
}
