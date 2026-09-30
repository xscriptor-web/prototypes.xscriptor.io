"use client";

import { XMinimalFooter } from "@/app/carolina/components/xcomponents";
import { useT } from "@/app/carolina/i18n-provider";

export default function XFooterComponent() {
  const t = useT("Footer");

  const year = new Date().getFullYear();

  const links = [
    { label: t("contacto"), href: "/carolina/contacto" },
    { label: t("terms"), href: "/carolina/terminos-y-condiciones" },
    { label: t("dev"), href: "https://xscriptor.com" },
  ];

  return (
    <XMinimalFooter
      copyright={`© ${year} ${t("copyright")} · ${t("rights")}`}
      links={links}
    />
  );
}

export { XFooterComponent };
