import Link from "next/link";
import type { Metadata } from "next";
import { BOOKS, getBookBySlug } from "@/app/carolina/lib/books";
import esMessages from "@/app/carolina/messages/es.json";
import { getMsg } from "@/app/carolina/lib/i18n-utils";
import styles from "./BookDetail.module.css";

interface BookDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BOOKS.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: BookDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: "Libro no encontrado" };

  return {
    title: `${book.title} | ${getMsg(esMessages, "Meta.siteName")}`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      locale: getMsg(esMessages, "Meta.ogLocale"),
      images: [{ url: book.cover }],
    },
  };
}

export default async function BookDetailPage({
  params,
}: BookDetailPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return (
      <div className={styles.missing}>
        <h1>Libro no encontrado</h1>
        <Link href="/carolina/libros" className="marker-chip">
          ← Volver a libros
        </Link>
      </div>
    );
  }

  const longKey = `Books.${book.key}.longDescription`;
  const longDescription = getMsg(esMessages, longKey);

  return (
    <div className={styles.page}>
      <Link href="/carolina/libros" className={styles.backLink}>
        {getMsg(esMessages, "LibrosPage.backToList")}
      </Link>

      <div className={styles.layout}>
        <div className={styles.coverWrap}>
          <img
            src={book.cover}
            alt={`Portada de ${book.title}`}
            className={styles.cover}
          />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{book.title}</h1>
          <p className={styles.price}>
            {book.price.toLocaleString("es-ES", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "EUR",
            })}
          </p>
          <p className={styles.description}>{longDescription}</p>
          <a
            className={styles.cta}
            href={`mailto:autovigilantes@gmail.com?subject=${encodeURIComponent(
              `Quiero adquirir: ${book.title}`
            )}`}
          >
            {getMsg(esMessages, "LibrosPage.buyCta")}
          </a>
        </div>
      </div>
    </div>
  );
}
