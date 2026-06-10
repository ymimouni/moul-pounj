import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { articles } from "@/data/articles"

export default function BlogSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-[#0f1b2e]">Conseils &amp; guides sommeil</h2>
        <a href="#" className="flex items-center gap-1 text-sm font-semibold text-[#f2622e] hover:underline">
          Voir tous les articles
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {articles.map((article) => (
          <a key={article.id} href="#" className="flex gap-4 group">
            <div className="relative w-28 h-24 rounded-xl overflow-hidden shrink-0">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[11px]">
                <span className="text-[#f2622e] font-semibold">{article.category}</span>
                <span className="text-gray-400">{article.date}</span>
              </div>
              <h3 className="mt-1 text-sm font-bold text-[#0f1b2e] leading-snug group-hover:text-[#f2622e] transition-colors">
                {article.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
