import type { Metadata } from "next"
import BioContent from "@/components/pat-crespo/BioContent"

export const metadata: Metadata = {
  title: "Bio",
  description: "Biografía de Patricia Crespo Alcalá — poeta, escritora y crítica literaria valenciana",
}

export default function BioPage() {
  return <BioContent />
}
