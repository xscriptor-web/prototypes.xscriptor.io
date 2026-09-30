import type { Metadata } from "next";
import Script from "next/script";
import "@/app/carolina/carolina.css";
import "@xscriptor/xcomponents/styles.css";
import esMessages from "@/app/carolina/messages/es.json";
import { I18nProvider } from "@/app/carolina/i18n-provider";
import LenisProvider from "@/app/carolina/components/LenisProvider";
import TransitionProvider from "@/app/carolina/components/transitionProvider";
import FooterDivider from "@/app/carolina/components/layout/FooterDivider";
import XFooterComponent from "@/app/carolina/components/layout/footer/XFooterComponent";

export const metadata: Metadata = {
  title: {
    default: "Poesía y Psicología — Carolina Massa",
    template: "%s | Poesía y Psicología",
  },
  description:
    "Reflexiones poéticas y psicológicas que tocan el alma. Portfolio literario de Carolina Massa: poemas, libros y escritura creativa.",
  openGraph: {
    title: "Poesía y Psicología — Carolina Massa",
    description:
      "Reflexiones poéticas y psicológicas que tocan el alma. Portfolio literario de Carolina Massa.",
    locale: "es_ES",
    type: "website",
    siteName: "Poesía y Psicología",
    images: [
      {
        url: "/images/blog/el-arte-y-la-salud-mental.webp",
        width: 1200,
        height: 1200,
        alt: "Poesía y Psicología — Carolina Massa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poesía y Psicología — Carolina Massa",
    description:
      "Reflexiones poéticas y psicológicas que tocan el alma.",
    images: ["/images/blog/el-arte-y-la-salud-mental.webp"],
  },
  robots: { index: true, follow: true },
};

export default function CarolinaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="carolina-root" className="carolina-root">
      <Script id="carolina-theme-init" strategy="beforeInteractive">
        {`(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.setAttribute("data-theme","dark")}}catch(e){}})();`}
      </Script>
      <a href="#main-content" className="skip-to-content">
        Saltar al contenido principal
      </a>
      <I18nProvider locale="es" messages={esMessages}>
        <LenisProvider />
        <TransitionProvider />
        <main id="main-content" className="carolina-main">
          {children}
        </main>
        <FooterDivider />
        <XFooterComponent />
      </I18nProvider>
    </div>
  );
}
