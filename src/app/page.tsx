import HubShell from "@/components/hub/HubShell";
import ProjectCard from "@/components/hub/ProjectCard";
import { projects } from "@/lib/projects";
import styles from "./hub.module.css";

const soonProjects = [{ id: "next", index: "002" }];

export default function HomePage() {
  const liveCount = projects.filter((project) => project.status === "live").length;

  return (
    <HubShell>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Catálogo de prototipos · Xscriptor</p>
          <h1 className={styles.title}>
            Sitios reales,
            <br />
            <em>reconstruidos</em>
            <span className={styles.titleDot}>.</span>
          </h1>
        </div>
        <div className={styles.heroAside}>
          <p className={styles.lede}>
            Un archivo de ejercicios de front-end: tomo sitios existentes y los
            reconstruyo desde cero con Next.js, Tailwind CSS y TypeScript. El mismo
            contenido, otra ingeniería y una dirección de arte propia.
          </p>
          <dl className={styles.stats}>
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Publicados</dt>
              <dd className={styles.statValue}>{String(liveCount).padStart(2, "0")}</dd>
            </div>
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Tecnologías</dt>
              <dd className={styles.statValue}>03</dd>
            </div>
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Salida</dt>
              <dd className={styles.statValue}>100%</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles.index} aria-labelledby="indice-title">
        <div className={styles.indexHead}>
          <h2 id="indice-title" className={styles.indexTitle}>
            Índice
          </h2>
          <span className={styles.indexCount}>
            {String(liveCount).padStart(2, "0")} publicado ·{" "}
            {String(soonProjects.length).padStart(2, "0")} en preparación
          </span>
        </div>
        <ul className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {soonProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={{
                id: project.id,
                index: project.index,
                title: "",
                author: "",
                category: "",
                description: "",
                stack: [],
                monogram: "",
                status: "soon",
              }}
            />
          ))}
        </ul>
      </section>

      <section className={styles.notice}>
        <div className={styles.noticeCard}>
          <h2 className={styles.noticeTitle}>Sobre la colección</h2>
          <p className={styles.noticeText}>
            Cada prototipo es un ejercicio personal de rediseño. Tomo sitios
            públicos —marcas, servicios o proyectos personales— y los reconstruyo
            desde cero para explorar decisiones de diseño, arquitectura de
            componentes y rendimiento.
          </p>
          <p className={styles.noticeText}>
            El objetivo es doble: demostrar capacidad técnica construyendo
            interfaces completas y mantener un historial público de trabajo en
            front-end e ingeniería web.
          </p>
        </div>
        <div className={styles.noticeCard}>
          <h2 className={styles.noticeTitle}>Aviso y propiedad</h2>
          <p className={styles.noticeText}>
            Las marcas, nombres comerciales, logotipos y contenidos mostrados en
            estos prototipos pertenecen a sus respectivos propietarios. No existe
            ninguna relación laboral, contractual o de asociación con las marcas o
            entidades cuyos sitios se referencian.
          </p>
          <p className={styles.noticeText}>
            Material publicado con fines educativos y de demostración técnica. Si
            eres propietario de una marca representada y deseas que sea retirada,
            escríbeme desde{" "}
            <a href="https://xscriptor.io" target="_blank" rel="noopener noreferrer">
              xscriptor.io
            </a>
            .
          </p>
        </div>
      </section>
    </HubShell>
  );
}
