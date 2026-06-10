"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <section className="bg-[#0f1b2e] text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-[#f2622e]/20 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#f2622e]" />
            </div>
            <div>
              <p className="font-bold text-base">Recevez nos conseils sommeil</p>
              <p className="text-sm text-white/60">et nos offres exclusives</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full lg:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-1 lg:w-72 px-4 py-3 rounded-full bg-white text-gray-900 text-sm outline-none focus:ring-2 focus:ring-[#f2622e]"
            />
            <button
              type="submit"
              className="bg-[#f2622e] hover:bg-[#d94f1f] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              S&apos;inscrire
            </button>
          </form>

          <p className="text-xs text-white/50 hidden xl:block">Pas de spam, désinscription en 1 clic.</p>
        </div>
      </div>
    </section>
  )
}
