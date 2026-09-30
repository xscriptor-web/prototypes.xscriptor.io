import type { Metadata } from "next";
import LibrosClientPage from "@/app/carolina/libros/LibrosClientPage";
import esMessages from "@/app/carolina/messages/es.json";
import { getMsg } from "@/app/carolina/lib/i18n-utils";

export const metadata: Metadata = {
  title: getMsg(esMessages, "LibrosPage.metadataTitle"),
  description: getMsg(esMessages, "LibrosPage.metadataDescription"),
  openGraph: {
    title: getMsg(esMessages, "LibrosPage.metadataTitle"),
    description: getMsg(esMessages, "LibrosPage.metadataDescription"),
    locale: getMsg(esMessages, "Meta.ogLocale"),
  },
};

export default function LibrosPage() {
  return <LibrosClientPage />;
}
