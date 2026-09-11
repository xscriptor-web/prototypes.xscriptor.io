import type { Metadata } from "next"
import ContactoContent from "@/components/pat-crespo/ContactoContent"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con Patricia Crespo Alcalá a través de sus redes sociales",
}

export default function ContactoPage() {
  return <ContactoContent />
}
