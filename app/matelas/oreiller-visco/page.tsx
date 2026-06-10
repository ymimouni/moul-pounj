import PageShell from "@/components/common/PageShell"
import ProductGrid from "@/components/common/ProductGrid"

export const metadata = {
  title: "Oreiller Visco - Moul Pounj",
  description: "Oreillers en mousse à mémoire de forme visco-élastique.",
}

export default function OreillerViscoPage() {
  return (
    <PageShell
      eyebrow="Accessoire"
      title="Oreiller Visco"
      description="Nos oreillers en mousse à mémoire de forme visco-élastique épousent votre nuque pour soulager les tensions cervicales nuit après nuit."
    >
      <ProductGrid />
    </PageShell>
  )
}
