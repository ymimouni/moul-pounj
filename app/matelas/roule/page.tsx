import PageShell from "@/components/common/PageShell"
import ProductGrid from "@/components/common/ProductGrid"

export const metadata = {
  title: "Matelas roulé - Moul Pounj",
  description: "Matelas roulés livrés compressés directement chez vous.",
}

export default function MatelasRoulePage() {
  return (
    <PageShell
      eyebrow="Matelas"
      title="Matelas roulé"
      description="Compressés et roulés pour une livraison facile, nos matelas roulés reprennent leur forme en quelques heures pour un confort immédiat."
    >
      <ProductGrid />
    </PageShell>
  )
}
