import Image from "next/image"
import { Award, Store, Factory, Users, ArrowRight } from "lucide-react"

const stats = [
  { icon: Award, value: "+12 ans", label: "d'expertise" },
  { icon: Store, value: "+20", label: "magasins au Maroc" },
  { icon: Factory, value: "Fabrication", label: "100% marocaine" },
  { icon: Users, value: "+100.000", label: "clients satisfaits" },
]

export default function CompanyStory() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="bg-[#0f1b2e] rounded-2xl overflow-hidden grid lg:grid-cols-[1fr_1.4fr]">
        {/* Image */}
        <div className="relative min-h-[300px]">
          <Image src="/company-founder.png" alt="Fondateur Moul Pounj" fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-8 lg:p-10 text-white grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-[#f2622e] text-xs font-semibold tracking-wide uppercase">
              Notre Histoire
            </span>
            <h2 className="text-3xl font-extrabold mt-3 leading-tight">
              De notre usine à votre domicile.
            </h2>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Depuis 2011, Moul Pounj conçoit et fabrique des matelas de qualité au Maroc. Notre
              mission : vous offrir le meilleur confort, au meilleur prix.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 bg-[#f2622e] hover:bg-[#d94f1f] text-white font-semibold text-sm px-5 py-3 rounded-full transition-colors">
              Découvrir notre histoire
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-start gap-3">
                <s.icon className="w-7 h-7 text-[#f2622e] shrink-0" />
                <div>
                  <p className="text-lg font-bold leading-tight">{s.value}</p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
