import PageShell from "@/components/common/PageShell"
import ProductGrid from "@/components/common/ProductGrid"

export const metadata = {
  title: "Accessoires - Moul Pounj",
  description: "Oreillers, protège-matelas et accessoires pour un sommeil parfait.",
}

export default function AccessoiresPage() {
  return (
    <PageShell
      eyebrow="Pour mieux dormir"
      title="Accessoires"
      description="Oreillers, protège-matelas et autres accessoires pour compléter votre couchage."
    >
      <ProductGrid />
    </PageShell>
  )
}
