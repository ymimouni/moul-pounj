import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"
import { testimonials } from "@/data/testimonials"

export default function TestimonialsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-[#0f1b2e]">
          Ils dorment mieux, ils en parlent mieux
        </h2>
        <a href="#" className="flex items-center gap-1 text-sm font-semibold text-[#f2622e] hover:underline">
          Voir tous les avis
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#faf6f1] rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image src={t.avatar || "/placeholder.svg"} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0f1b2e]">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mt-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#f2622e] text-[#f2622e]" />
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{t.content}</p>
            </div>
          ))}
        </div>
        <button
          aria-label="Suivant"
          className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-[#0f1b2e] hover:text-[#f2622e]"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
