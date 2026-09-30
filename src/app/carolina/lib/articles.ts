import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const articlesBaseDir = path.join(
  process.cwd(),
  "src/app/carolina/content/articulos"
);
const FALLBACK_LOCALE = "es";
const SUPPORTED_LOCALES = ["es"];

export interface ArticleMetadata {
  slug: string;
  title: string;
  description?: string;
  date: string;
  categories: string[];
  tags?: string[];
  keywords?: string[];
  excerpt?: string;
  readingTime: number;
  image?: string;
  author?: string;
  contentHtml?: string;
}

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((v) => String(v));
  if (typeof value === "string") return [value];
  return [];
}

function stripDuplicateLeadMeta(body: string, title: string): string {
  let out = body;
  const h1 = new RegExp(`^#\\s+${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "m");
  out = out.replace(h1, "");
  out = out.replace(/^\s*\*\*Publicado por[^*]*\*\*\s*/m, "");
  return out.trim();
}

function wrapTables(html: string): string {
  return html.replace(/<table[\s\S]*?<\/table>/g, (m) => `<div class="table-wrapper">${m}</div>`);
}

function softBreaksToBr(html: string): string {
  return html.replace(
    /<(p|h[1-6]|blockquote|li|div)([^>]*)>([\s\S]*?)<\/\1>/g,
    (match, tag, attrs, inner) => {
      if (/katex|<\/?(pre|code)/.test(inner)) return match;
      const converted = inner.replace(/\n/g, "<br>");
      return `<${tag}${attrs}>${converted}</${tag}>`;
    }
  );
}

export async function markdownToHtml(body: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(body);
  return String(file);
}

function resolveArticlePath(locale: string, slug: string): string | null {
  for (const loc of [locale, FALLBACK_LOCALE]) {
    const candidate = path.join(articlesBaseDir, loc, `${slug}.md`);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function slugFromFile(localeDir: string, filePath: string): string {
  const rel = path.relative(localeDir, filePath);
  return rel.replace(/\.md$/, "").split(path.sep).join("/");
}

export function getSortedArticles(locale = FALLBACK_LOCALE): ArticleMetadata[] {
  const localeDir = path.join(
    articlesBaseDir,
    SUPPORTED_LOCALES.includes(locale) ? locale : FALLBACK_LOCALE
  );
  if (!fs.existsSync(localeDir)) return [];

  const collect = (dir: string): string[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "research") continue;
        files.push(...collect(full));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(full);
      }
    }
    return files;
  };

  const files = collect(localeDir);
  const articles = files
    .map((file) => {
      const raw = fs.readFileSync(file, "utf-8");
      const { data, content } = matter(raw);
      const title = String(data.title ?? "Sin título");
      const date = data.date ? String(data.date) : new Date().toISOString().slice(0, 10);
      const description = data.description ? String(data.description) : undefined;
      const categories = toStringArray(data.categories);
      const tags = data.tags ? toStringArray(data.tags) : undefined;
      const keywords = data.keywords ? toStringArray(data.keywords) : undefined;
      const image = data.image ? String(data.image) : undefined;
      const author = data.author ? String(data.author) : undefined;
      const words = content.split(/\s+/).filter(Boolean).length;
      const readingTime = Math.max(1, Math.ceil(words / 200));

      const headingsStripped = content
        .replace(/^#{1,6}\s+.*$/gm, "")
        .replace(/!\[[^\]]*\]\([^)]*\)/g, "");
      const excerpt =
        typeof data.excerpt === "string" && data.excerpt
          ? data.excerpt
          : (description && description.length > 0
              ? description
              : `${headingsStripped.replace(/\s+/g, " ").trim().slice(0, 150)}...`);

      return {
        slug: slugFromFile(localeDir, file),
        title,
        description,
        date,
        categories,
        tags,
        keywords,
        excerpt,
        readingTime,
        image,
        author,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return articles;
}

export function getAllArticleSlugs(locale = FALLBACK_LOCALE): string[] {
  const localeDir = path.join(
    articlesBaseDir,
    SUPPORTED_LOCALES.includes(locale) ? locale : FALLBACK_LOCALE
  );
  if (!fs.existsSync(localeDir)) return [];

  const collect = (dir: string): string[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const slugs: string[] = [];
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "research") continue;
        slugs.push(...collect(full));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        slugs.push(slugFromFile(localeDir, full));
      }
    }
    return slugs;
  };

  return Array.from(new Set(collect(localeDir)));
}

export async function getArticleData(
  slug: string,
  locale = FALLBACK_LOCALE
): Promise<ArticleMetadata | null> {
  const filePath = resolveArticlePath(locale, slug);
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const title = String(data.title ?? "Sin título");
  const body = stripDuplicateLeadMeta(content, title);
  const contentHtml = await markdownToHtml(body);

  const date = data.date ? String(data.date) : new Date().toISOString().slice(0, 10);
  const words = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return {
    slug,
    title,
    description: data.description ? String(data.description) : undefined,
    date,
    categories: toStringArray(data.categories),
    tags: data.tags ? toStringArray(data.tags) : undefined,
    keywords: data.keywords ? toStringArray(data.keywords) : undefined,
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
    readingTime,
    image: data.image ? String(data.image) : undefined,
    author: data.author ? String(data.author) : undefined,
    contentHtml: wrapTables(softBreaksToBr(contentHtml)),
  };
}

export function getArticlesByCategory(
  category: string,
  locale = FALLBACK_LOCALE
): ArticleMetadata[] {
  return getSortedArticles(locale).filter((a) =>
    a.categories.some((c) => c.toLowerCase() === category.toLowerCase())
  );
}
