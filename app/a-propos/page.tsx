import { Award, Factory, Truck, Users } from "lucide-react"
import PageShell from "@/components/common/PageShell"

export const metadata = {
  title: "À propos - Moul Pounj",
  description: "Notre histoire : de notre usine à votre domicile depuis 2011.",
}

const stats = [
  { icon: Award, value: "+12 ans", label: "d'expertise" },
  { icon: Factory, value: "100%", label: "fabrication marocaine" },
  { icon: Users, value: "+100.000", label: "clients satisfaits" },
  { icon: Truck, value: "+20", label: "magasins au Maroc" },
]

export default function AProposPage() {
  return (
    <PageShell
      eyebrow="Notre histoire"
      title="De notre usine à votre domicile"
      description="Depuis 2011, Moul Pounj conçoit et fabrique des matelas de qualité au Maroc."
    >
      <section className="max-w-[1200px] mx-auto px-4 py-14">
        <div className="max-w-3xl space-y-4 text-[#0f1b2e]/80 leading-relaxed">
          <p>
            Moul Pounj est né d&apos;une conviction simple : chaque Marocain mérite un sommeil de qualité, à un
            prix juste. En maîtrisant l&apos;ensemble de la chaîne, de la conception à la fabrication dans nos
            propres usines, nous supprimons les intermédiaires et vous offrons le meilleur rapport qualité-prix.
          </p>
          <p>
            Aujourd&apos;hui, ce sont plus de 100.000 clients qui nous font confiance partout au Maroc, avec une
            garantie pouvant aller jusqu&apos;à 10 ans et une livraison gratuite directement depuis nos usines.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#faf6f1] rounded-xl p-6 flex flex-col items-start gap-3">
              <s.icon className="w-7 h-7 text-[#f2622e]" />
              <div>
                <div className="text-2xl font-extrabold text-[#0f1b2e]">{s.value}</div>
                <div className="text-sm text-[#0f1b2e]/60">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
