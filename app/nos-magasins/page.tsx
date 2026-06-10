import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import StoreLocator from "@/components/sections/StoreLocator"

export const metadata = {
  title: "Nos Magasins - Moul Pounj",
  description: "Plus de 40 points de vente partout au Maroc. Trouvez le magasin Moul Pounj le plus proche de chez vous.",
}

export default function NosMagasinsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <StoreLocator />
      </div>
      <Footer />
    </main>
  )
}
