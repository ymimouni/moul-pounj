import PageShell from "@/components/common/PageShell"
import ProductGrid from "@/components/common/ProductGrid"

export const metadata = {
  title: "Salon sublimya premium 35 - Moul Pounj",
  description: "Mousse premium 35 pour salon marocain haut de gamme.",
}

export default function SalonSublimyaPage() {
  return (
    <PageShell
      eyebrow="Salon"
      title="Salon sublimya premium 35"
      description="Notre mousse premium 35 kg/m³ pour un salon marocain haut de gamme : fermeté optimale, grande durabilité et confort supérieur."
    >
      <ProductGrid />
    </PageShell>
  )
}
