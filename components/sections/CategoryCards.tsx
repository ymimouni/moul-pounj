import Image from "next/image"

const categories = [
  {
    title: "Mal de dos ?",
    description: "Découvrez nos matelas spécialement conçus pour soulager votre dos.",
    image: "/categories/back-pain.png",
  },
  {
    title: "Vous dormez à deux ?",
    description: "Confort et indépendance de couchage pour des nuits sereines à deux.",
    image: "/categories/couple.png",
  },
  {
    title: "Budget maîtrisé",
    description: "Des matelas de qualité au meilleur prix.",
    image: "/categories/budget.png",
  },
]

export default function CategoryCards() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <h2 className="text-2xl font-extrabold text-[#0f1b2e] mb-6">
        Trouvez le matelas adapté à vos besoins
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <div key={cat.title} className="relative h-64 rounded-2xl overflow-hidden group">
            <Image
              src={cat.image || "/placeholder.svg"}
              alt={cat.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
              <h3 className="text-xl font-bold">{cat.title}</h3>
              <p className="text-sm text-white/85 mt-1 leading-snug">{cat.description}</p>
              <button className="mt-3 self-start bg-white text-[#0f1b2e] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#f2622e] hover:text-white transition-colors">
                Découvrir
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
