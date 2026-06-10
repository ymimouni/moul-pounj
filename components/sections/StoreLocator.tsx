"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Clock, LayoutGrid, ExternalLink } from "lucide-react"
import { stores } from "@/data/stores"

export default function StoreLocator() {
  const [activeCity, setActiveCity] = useState<string>("all")

  const cityCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const s of stores) {
      counts[s.city] = (counts[s.city] || 0) + 1
    }
    return counts
  }, [])

  const cities = useMemo(
    () => Object.keys(cityCounts).sort((a, b) => a.localeCompare(b, "fr")),
    [cityCounts],
  )

  const filtered = useMemo(
    () => (activeCity === "all" ? stores : stores.filter((s) => s.city === activeCity)),
    [activeCity],
  )

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-12 md:py-16">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f1b2e] text-balance">
          Trouvez votre <span className="text-[#f2622e]">Moul Pounj</span>
        </h1>
        <p className="mt-4 text-[#0f1b2e]/60 leading-relaxed max-w-xl mx-auto">
          Premier reseau de distribution de matelas et literie au Maroc.
          <br className="hidden sm:block" />
          Directement de l&apos;usine a votre porte.
        </p>
        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0f1b2e] px-6 py-3 text-sm text-white">
            <span className="font-bold text-[#f2622e]">+40</span>
            points de vente a travers le Maroc
          </span>
        </div>
      </div>

      {/* City filter chips */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <FilterChip
          label="Toutes les villes"
          count={stores.length}
          active={activeCity === "all"}
          onClick={() => setActiveCity("all")}
          icon={<LayoutGrid className="w-4 h-4" />}
        />
        {cities.map((city) => (
          <FilterChip
            key={city}
            label={city}
            count={cityCounts[city]}
            active={activeCity === city}
            onClick={() => setActiveCity(city)}
            icon={<MapPin className="w-4 h-4" />}
          />
        ))}
      </div>

      {/* Store grid */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {filtered.map((store, i) => (
          <article
            key={store.name}
            className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
          >
            <div className="relative h-56 md:h-64">
              <Image
                src={store.image || "/placeholder.svg"}
                alt={`Magasin ${store.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0f1b2e] text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="absolute top-4 right-4 rounded-full bg-[#f2622e] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                {store.city}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-extrabold text-[#0f1b2e]">{store.name}</h3>
              <ul className="mt-4 space-y-3 text-sm text-[#0f1b2e]/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#f2622e] mt-0.5 shrink-0" />
                  {store.address}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#f2622e] shrink-0" />
                  {store.phone}
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#f2622e] shrink-0" />
                  {store.hours}
                </li>
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${store.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#0f1b2e] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0f1b2e]/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Appeler
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${store.name} ${store.address} ${store.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#f2622e] px-4 py-3 text-sm font-semibold text-white hover:bg-[#d94f1f] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visitez
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function FilterChip({
  label,
  count,
  active,
  onClick,
  icon,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
  icon: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
        active
          ? "border-[#f2622e] bg-[#f2622e] text-white"
          : "border-gray-200 bg-white text-[#0f1b2e] hover:border-[#f2622e]/40"
      }`}
    >
      <span className={active ? "text-white" : "text-[#f2622e]"}>{icon}</span>
      {label}
      <span
        className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-bold ${
          active ? "bg-white/25 text-white" : "bg-gray-100 text-[#0f1b2e]/60"
        }`}
      >
        {count}
      </span>
    </button>
  )
}
