import { ArrowRight, Sparkles } from "lucide-react"

const answers = [
  {
    title: "Sur le dos",
    description: "Besoin d'un soutien ferme au niveau des lombaires.",
  },
  {
    title: "Sur le côté",
    description: "Nécessite de la souplesse pour épouser hanche et épaule.",
  },
  {
    title: "Sur le ventre",
    description: "Soutien évitant que la colonne ne se cambre.",
  },
  {
    title: "Variable / Agité",
    description: "Indépendance de couchage et réactivité requises.",
    selected: true,
  },
]

export default function QuizSection() {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b1730] leading-tight">
          Trouvez le matelas qui guérit votre dos
        </h2>
        <p className="max-w-[760px] mx-auto mt-5 text-base md:text-xl text-[#66758a] leading-relaxed">
          Répondez à notre questionnaire d&apos;ostéopathie en moins de 60
          secondes pour obtenir un score de pertinence chirurgicale sur les
          modèles marocains.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto mt-12 overflow-hidden rounded-[24px] bg-white shadow-[0_18px_45px_rgba(15,27,46,0.16)] ring-1 ring-[#e4eaf2]">
        <div className="bg-gradient-to-r from-[#0d3977] via-[#0b5bd3] to-[#0879f4] px-6 py-7 md:px-11 md:py-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-left">
              <Sparkles className="h-7 w-7 shrink-0 text-[#61efd7]" />
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Quel matelas choisir ? Finder Robotisé
              </h3>
            </div>
            <div className="self-start sm:self-auto rounded-full bg-white/20 px-5 py-2 font-mono text-sm md:text-base font-bold text-white shadow-inner">
              Étape 1 de 4
            </div>
          </div>
        </div>

        <div className="px-6 py-8 md:px-11 md:py-10">
          <div className="grid grid-cols-4 gap-3">
            <div className="h-2 rounded-full bg-[#0a84ff]" />
            <div className="h-2 rounded-full bg-[#e6edf6]" />
            <div className="h-2 rounded-full bg-[#e6edf6]" />
            <div className="h-2 rounded-full bg-[#e6edf6]" />
          </div>

          <div className="mt-10 text-left">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#0b1730] leading-tight">
              Quelle est votre position de sommeil principale ?
            </h4>
            <p className="mt-3 text-base md:text-lg text-[#66758a]">
              Votre position idéale détermine la fermeté requise du matelas.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {answers.map((answer) => (
              <button
                key={answer.title}
                type="button"
                className={`min-h-[108px] rounded-2xl border bg-white px-6 py-5 text-left transition-colors ${
                  answer.selected
                    ? "border-[#0a84ff] bg-[#f2f8ff] shadow-[0_0_0_3px_rgba(10,132,255,0.22)]"
                    : "border-[#dce4ee] hover:border-[#0a84ff] hover:bg-[#f8fbff]"
                }`}
              >
                <span className="block text-xl font-extrabold text-[#0b1730]">
                  {answer.title}
                </span>
                <span className="mt-2 block text-sm md:text-base text-[#66758a] leading-relaxed">
                  {answer.description}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-12 border-t border-[#e8edf3] pt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              disabled
              className="self-start text-base font-extrabold text-[#c8d2df]"
            >
              Précédent
            </button>
            <button
              type="button"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#0a84ff] to-[#15b7ad] px-8 text-base font-extrabold text-white shadow-[0_10px_20px_rgba(10,132,255,0.25)] transition-transform hover:-translate-y-0.5"
            >
              Suivant
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
