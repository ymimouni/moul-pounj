import Image from "next/image"
import PageShell from "@/components/common/PageShell"
import { articles } from "@/data/articles"

export const metadata = {
  title: "Conseils - Moul Pounj",
  description: "Conseils et guides sommeil pour mieux dormir.",
}

export default function ConseilsPage() {
  return (
    <PageShell
      eyebrow="Bien dormir"
      title="Conseils & guides sommeil"
      description="Nos guides pour choisir le bon matelas et améliorer la qualité de votre sommeil."
    >
      <section className="max-w-[1200px] mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="pt-4 flex items-center gap-3">
                <span className="text-[11px] font-bold text-[#f2622e] tracking-wide">{article.category}</span>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>
              <h3 className="mt-2 font-bold text-[#0f1b2e] leading-snug group-hover:text-[#f2622e] transition-colors">
                {article.title}
              </h3>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
