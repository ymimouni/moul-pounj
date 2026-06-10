import { ArrowRight } from "lucide-react"

const steps = [
  { num: 1, label: "Vous dormez ?", sub: "Seul ou à deux" },
  { num: 2, label: "Quelle est votre", sub: "position de sommeil ?" },
  { num: 3, label: "Avez-vous des", sub: "douleurs au dos ?" },
  { num: 4, label: "Quel est votre", sub: "budget ?" },
]

export default function QuizSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="bg-[#faf6f1] rounded-2xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[1.1fr_2.2fr_1fr] gap-6 items-center">
          {/* Title */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#0f1b2e] leading-tight">
              Quel matelas est <span className="text-[#f2622e]">fait pour vous ?</span>
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Répondez à 4 questions et trouvez le matelas idéal en 30 secondes.
            </p>
          </div>

          {/* Steps */}
          <div className="flex items-center gap-2">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center gap-2 flex-1">
                <div className="bg-white rounded-xl px-4 py-4 flex-1 text-center shadow-sm">
                  <div className="w-7 h-7 mx-auto mb-2 rounded-full bg-[#f2622e] text-white text-xs font-bold flex items-center justify-center">
                    {s.num}
                  </div>
                  <p className="text-xs font-semibold text-[#0f1b2e] leading-tight">{s.label}</p>
                  <p className="text-xs text-gray-500 leading-tight">{s.sub}</p>
                </div>
                {i < steps.length - 1 && <ArrowRight className="w-4 h-4 text-gray-300 shrink-0" />}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="w-full inline-flex items-center justify-center gap-2 bg-[#f2622e] hover:bg-[#d94f1f] text-white font-semibold text-sm px-5 py-3.5 rounded-full transition-colors">
              Voir mon matelas
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-2 text-xs text-gray-500">100% gratuit et sans engagement</p>
          </div>
        </div>
      </div>
    </section>
  )
}
