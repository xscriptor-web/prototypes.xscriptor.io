import type { Metadata } from "next";
import SobreMiClientPage from "@/app/carolina/sobre-mi/SobreMiClientPage";
import esMessages from "@/app/carolina/messages/es.json";
import { getMsg } from "@/app/carolina/lib/i18n-utils";

export const metadata: Metadata = {
  title: getMsg(esMessages, "SobreMiPage.metadataTitle"),
  description: getMsg(esMessages, "SobreMiPage.metadataDescription"),
  openGraph: {
    title: getMsg(esMessages, "SobreMiPage.metadataTitle"),
    description: getMsg(esMessages, "SobreMiPage.metadataDescription"),
    locale: getMsg(esMessages, "Meta.ogLocale"),
  },
};

export default function SobreMiPage() {
  return <SobreMiClientPage />;
}
