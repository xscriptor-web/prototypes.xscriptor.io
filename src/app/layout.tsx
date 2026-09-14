import type { Metadata } from "next";
import {
  Caveat,
  JetBrains_Mono,
  Lora,
  Manrope,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prototypes.xscriptor.io"),
  title: {
    default: "Prototypes — Xscriptor",
    template: "%s | Prototypes — Xscriptor",
  },
  description:
    "Colección de interfaces rediseñadas por Xscriptor: ejercicios de front-end que reconstruyen sitios reales con Next.js, Tailwind CSS y TypeScript.",
  keywords: [
    "Xscriptor",
    "prototypes",
    "prototipos",
    "front-end",
    "rediseño",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
  ],
  authors: [{ name: "Xscriptor", url: "https://xscriptor.io" }],
  openGraph: {
    title: "Prototypes — Xscriptor",
    description:
      "Colección de interfaces rediseñadas por Xscriptor: ejercicios de front-end que reconstruyen sitios reales con Next.js, Tailwind CSS y TypeScript.",
    url: "https://prototypes.xscriptor.io/",
    siteName: "Prototypes — Xscriptor",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Prototypes — Xscriptor",
    description:
      "Colección de interfaces rediseñadas por Xscriptor: ejercicios de front-end que reconstruyen sitios reales con Next.js, Tailwind CSS y TypeScript.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${playfair.variable} ${lora.variable} ${caveat.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var stored=localStorage.getItem("data-theme");var dark=stored?stored==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.theme=dark?"dark":"light";}catch(e){}})();`,
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[9999] focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:font-bold focus:text-white"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
