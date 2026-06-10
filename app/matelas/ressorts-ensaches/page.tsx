import PageShell from "@/components/common/PageShell"
import ProductGrid from "@/components/common/ProductGrid"

export const metadata = {
  title: "Matelas à ressorts ensachés - Moul Pounj",
  description: "Matelas à ressorts ensachés pour un soutien indépendant et ciblé.",
}

export default function MatelasRessortsPage() {
  return (
    <PageShell
      eyebrow="Matelas"
      title="Matelas à ressorts ensachés"
      description="Chaque ressort travaille indépendamment pour un soutien ciblé, une excellente ventilation et une indépendance de couchage idéale à deux."
    >
      <ProductGrid />
    </PageShell>
  )
}
