import type { Metadata } from "next";
import { getSortedArticles } from "@/app/carolina/lib/articles";
import BlogListClient from "@/app/carolina/components/blog/BlogListClient";
import esMessages from "@/app/carolina/messages/es.json";
import { getMsg } from "@/app/carolina/lib/i18n-utils";

export const metadata: Metadata = {
  title: getMsg(esMessages, "BlogPage.metadataTitle"),
  description: getMsg(esMessages, "BlogPage.metadataDescription"),
  openGraph: {
    title: getMsg(esMessages, "BlogPage.metadataTitle"),
    description: getMsg(esMessages, "BlogPage.metadataDescription"),
    locale: getMsg(esMessages, "Meta.ogLocale"),
  },
};

export default function BlogPage() {
  const articles = getSortedArticles("es");
  return <BlogListClient articles={articles} />;
}
