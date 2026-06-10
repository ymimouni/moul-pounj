import Image from "next/image";
import Link from "next/link";
import { Truck, ShieldCheck, Star, MapPin, ArrowRight } from "lucide-react";

const badges = [
  { icon: Truck, title: "Livraison gratuite", sub: "Partout au Maroc" },
  { icon: ShieldCheck, title: "Garantie 10 ans", sub: "Qualité premium" },
  { icon: Star, title: "+100 000 clients", sub: "Satisfaits" },
  { icon: MapPin, title: "Fabriqué au Maroc", sub: "100% marocain" },
];

const avatars = [
  "/avatars/ahmed.png",
  "/avatars/salma.png",
  "/avatars/youssef.png",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* ── SPLIT LAYOUT: navy left | image right ── */}
      <div className="flex flex-col lg:flex-row min-h-[560px]">
        {/* ── LEFT PANEL — cream/white ── */}
        <div className="relative flex-1 bg-[#faf6f1] flex items-center px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
          {/* subtle dot-grid texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0f1b2e 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* orange accent bar on the right edge (desktop) */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-[#f2622e] rounded-l-full" />

          <div className="relative z-10 max-w-[500px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 border border-[#f2622e]/40 text-[#f2622e] text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2622e] animate-pulse" />
              Spécialiste du sommeil au Maroc
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] text-[#0f1b2e] tracking-tight">
              Dormez mieux. <span className="text-[#f2622e]">Vivez mieux.</span>
            </h1>

            <p className="mt-5 text-gray-500 text-base leading-relaxed">
              Matelas fabriqués au Maroc, livrés directement depuis nos usines
              avec une garantie allant jusqu'à 10 ans.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/matelas"
                className="inline-flex items-center gap-2 bg-[#f2622e] hover:bg-[#d94f1f] active:scale-[0.98] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-[#f2622e]/30 transition-all duration-200"
              >
                Trouver mon matelas
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/matelas"
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#0f1b2e] text-[#0f1b2e] font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200"
              >
                Voir la collection
              </Link>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL — hero image ── */}
        <div className="relative w-full lg:w-[52%] min-h-[360px] lg:min-h-0">
          <Image
            src="/hero/Family_laughing.jpeg"
            alt="Famille heureuse sur un matelas Moul Pounj"
            fill
            className="object-cover object-center"
            priority
          />
          {/* gradient fade into the cream panel on desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#faf6f1] to-transparent" />

          {/* Floating card */}
          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#f2622e]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#f2622e]" />
            </div>
            <div>
              <p className="text-[11px] text-gray-400 font-medium leading-none mb-1">
                Essai sans risque
              </p>
              <p className="text-sm font-extrabold text-[#0f1b2e] leading-none">
                100 nuits offertes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="bg-[#faf6f1] border-t border-[#e8dfd5]">
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e8dfd5]">
            {badges.map((b) => (
              <div
                key={b.title}
                className="flex items-center justify-center gap-3 px-4 py-1 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#f2622e]/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#f2622e]/20">
                  <b.icon className="w-4 h-4 text-[#f2622e]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0f1b2e] leading-tight">
                    {b.title}
                  </p>
                  <p className="text-xs text-gray-400">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
