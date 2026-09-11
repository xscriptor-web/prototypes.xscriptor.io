import type { Metadata } from "next"
import Header from "@/components/pat-crespo/Header"
import Footer from "@/components/pat-crespo/Footer"
import PageTransition from "@/components/pat-crespo/PageTransition"
import { PatLocaleProvider } from "@/components/pat-crespo/LocaleProvider"
import { getSiteInfo } from "@/lib/pat-crespo/posts"

export const metadata: Metadata = {
  title: {
    absolute: "Patricia Crespo Alcalá",
    template: "%s | Patricia Crespo Alcalá",
  },
  description:
    "patricia crespo alcalá, poesía — De poéticas. Poesía, literatura y crítica literaria.",
  openGraph: {
    title: "Patricia Crespo Alcalá",
    description: "De poéticas — Poesía, literatura y crítica literaria.",
    url: "https://www.patriciacrespoalcala.com/",
    siteName: "Patricia Crespo Alcalá",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patricia Crespo Alcalá",
    description: "De poéticas — Poesía, literatura y crítica literaria.",
  },
  icons: {
    icon: "/favicon-pat-crespo.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LiteratureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { navLinks } = getSiteInfo()

  return (
    <PatLocaleProvider>
      <div className="pat-crespo-root min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer navLinks={navLinks} />
      </div>
    </PatLocaleProvider>
  )
}
