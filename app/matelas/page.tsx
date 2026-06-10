import { Suspense } from "react";
import PageShell from "@/components/common/PageShell";
import CatalogGrid from "@/components/common/CatalogGrid";

export const metadata = {
  title: "Matelas - Moul Pounj",
  description:
    "Découvrez toute notre collection de matelas fabriqués au Maroc.",
};

export default function MatelasPage() {
  return (
    <PageShell
      eyebrow="Notre collection"
      title="Tous nos produits"
      description="Matelas, banquettes et accessoires fabriqués au Maroc, livrés directement depuis nos usines."
    >
      <Suspense
        fallback={
          <div className="py-16 text-center text-gray-400 text-sm">
            Chargement…
          </div>
        }
      >
        <CatalogGrid />
      </Suspense>
    </PageShell>
  );
}
