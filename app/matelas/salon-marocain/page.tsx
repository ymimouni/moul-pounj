import PageShell from "@/components/common/PageShell"
import ProductGrid from "@/components/common/ProductGrid"

export const metadata = {
  title: "Salon Marocain - Moul Pounj",
  description: "Mousse et matelas pour salon marocain de qualité.",
}

export default function SalonMarocainPage() {
  return (
    <PageShell
      eyebrow="Salon"
      title="Salon Marocain"
      description="Mousse haute densité et matelas sur mesure pour votre salon marocain, alliant fermeté, durabilité et confort traditionnel."
    >
      <ProductGrid />
    </PageShell>
  )
}
