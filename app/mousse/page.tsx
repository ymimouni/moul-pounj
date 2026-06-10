import PageShell from "@/components/common/PageShell"
import ProductGrid from "@/components/common/ProductGrid"

export const metadata = {
  title: "Mousse - Moul Pounj",
  description: "Nos matelas et produits en mousse haute densité.",
}

export default function MoussePage() {
  return (
    <PageShell
      eyebrow="Confort moelleux"
      title="Mousse"
      description="Une gamme de produits en mousse haute densité pour un confort enveloppant nuit après nuit."
    >
      <ProductGrid />
    </PageShell>
  )
}
