import { Truck, Factory, Star, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Livraison gratuite partout au Maroc",
    sub: "Chez vous en 24 à 48h",
  },
  {
    icon: Factory,
    title: "Prix d'usine sans intermédiaire",
    sub: "Meilleurs prix garantis",
  },
  {
    icon: Star,
    title: "Plus de 100.000 clients satisfaits",
    sub: "Merci pour votre confiance",
  },
  {
    icon: ShieldCheck,
    title: "Garantie jusqu'à 10 ans",
    sub: "Qualité premium",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <h2 className="text-2xl font-extrabold text-[#0f1b2e] mb-6">
        Pourquoi choisir Moul Pounj ?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-[#faf6f1] rounded-xl p-5 flex items-start gap-3"
          >
            <item.icon className="w-7 h-7 text-[#f2622e] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-[#0f1b2e] leading-snug">
                {item.title}
              </p>
              <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
