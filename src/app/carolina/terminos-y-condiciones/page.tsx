import type { Metadata } from "next";
import esMessages from "@/app/carolina/messages/es.json";
import { getMsg } from "@/app/carolina/lib/i18n-utils";
import styles from "./TermsPage.module.css";

export const metadata: Metadata = {
  title: getMsg(esMessages, "TermsPage.metadataTitle"),
  description: getMsg(esMessages, "TermsPage.metadataDescription"),
};

const SECTIONS: Array<{ heading: string; paragraphs: string[] }> = [
  {
    heading: "Términos y Condiciones: fundamentos",
    paragraphs: [
      "Los Términos y Condiciones («T&C») son un conjunto de términos legalmente vinculantes definidos por la propietaria de este sitio web. Los T&C establecen los límites legales que rigen las actividades de los visitantes del sitio web mientras visitan o participan en este sitio web.",
      "Los T&C tienen como finalidad establecer la relación legal entre los visitantes del sitio y la propietaria de dicho sitio.",
    ],
  },
  {
    heading: "Propiedad intelectual",
    paragraphs: [
      "Todos los textos, poemas, reflexiones, artículos e imágenes publicados en este sitio pertenecen a su autora, Carolina Massa, salvo indicación expresa en contrario. Queda prohibida su reproducción, distribución o transformación sin autorización previa por escrito.",
      "Las imágenes de portada de las entradas y de los libros pueden incluir material de terceros utilizado con fines ilustrativos; los derechos corresponden a sus respectivos autores.",
    ],
  },
  {
    heading: "Uso permitido del sitio",
    paragraphs: [
      "El contenido de este sitio tiene una finalidad informativa, literaria y de acompañamiento emocional. No constituye asesoramiento psicológico, médico ni legal. Ante cualquier situación de salud mental, se recomienda acudir a un profesional cualificado.",
      "Los visitantes se comprometen a hacer un uso respetuoso del sitio y de sus contenidos.",
    ],
  },
  {
    heading: "Libros y adquisiciones",
    paragraphs: [
      "Los libros ofrecidos en este sitio se adquieren contactando directamente a través del correo electrónico publicado en la sección de contacto. Los precios indicados son orientativos y pueden variar.",
    ],
  },
  {
    heading: "Modificaciones",
    paragraphs: [
      "La propietaria del sitio se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor desde su publicación en esta página.",
    ],
  },
  {
    heading: "Contacto",
    paragraphs: [
      "Para cualquier consulta sobre estos Términos y Condiciones, puedes escribir a autovigilantes@gmail.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>{getMsg(esMessages, "TermsPage.title")}</h1>
      </header>

      <div className="article-content">
        {SECTIONS.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
