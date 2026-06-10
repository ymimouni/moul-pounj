import PageShell from "@/components/common/PageShell"
import ProductGrid from "@/components/common/ProductGrid"

export const metadata = {
  title: "Matelas en Mousse - Moul Pounj",
  description: "Matelas en mousse haute densité pour un confort enveloppant.",
}

export default function MatelasMoussePage() {
  return (
    <PageShell
      eyebrow="Matelas"
      title="Matelas en Mousse"
      description="Des matelas en mousse haute densité qui épousent les courbes de votre corps pour un confort enveloppant et un excellent maintien."
    >
      <ProductGrid />
    </PageShell>
  )
}
