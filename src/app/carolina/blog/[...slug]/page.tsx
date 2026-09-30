import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllArticleSlugs,
  getArticleData,
} from "@/app/carolina/lib/articles";
import { XBlogDecrypt } from "@/app/carolina/components/xcomponents";
import esMessages from "@/app/carolina/messages/es.json";
import { getMsg } from "@/app/carolina/lib/i18n-utils";
import styles from "./ArticlePage.module.css";

interface ArticlePageProps {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  const slugs = getAllArticleSlugs("es");
  return slugs.map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleData(slug.join("/"), "es");
  if (!article) return { title: "Artículo no encontrado" };

  const siteName = getMsg(esMessages, "Meta.siteName");

  return {
    title: article.title,
    description: article.description ?? article.excerpt,
    openGraph: {
      title: article.title,
      description: article.description ?? article.excerpt,
      locale: getMsg(esMessages, "Meta.ogLocale"),
      type: "article",
      siteName,
      publishedTime: article.date,
      authors: article.author ? [article.author] : undefined,
      images: article.image ? [{ url: article.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description ?? article.excerpt,
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleData(slug.join("/"), "es");

  if (!article) notFound();

  const dateFormatter = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "long",
  });

  const categories = article.categories ?? [];
  const keywords = article.keywords ?? article.tags ?? [];

  return (
    <div className={styles.page}>
      <XBlogDecrypt
        contentHtml={article.contentHtml ?? ""}
        title={article.title}
        image={article.image}
        author={article.author}
        date={dateFormatter.format(new Date(article.date))}
        isoDate={article.date}
        categories={categories}
        keywords={keywords}
        readingTime={article.readingTime}
        speed={10}
        revealColor="var(--accent, #e3342f)"
        scrambleColor="#b8a8ff"
        startDelay={450}
      />
      <nav className={styles.footerNav} aria-label="Navegación del artículo">
        <Link href="/carolina/blog" className={styles.backLink}>
          {getMsg(esMessages, "BlogPage.backToBlog")}
        </Link>
      </nav>
    </div>
  );
}
