import type { ReactNode } from "react"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

export default function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Page banner */}
      <section className="bg-[#0f1b2e] text-white">
        <div className="max-w-[1200px] mx-auto px-4 py-14 md:py-20">
          {eyebrow && (
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f2622e]">
              <span className="text-[#f2622e]">✦</span>
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">{title}</h1>
          {description && <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">{description}</p>}
        </div>
      </section>

      <div className="flex-1">{children}</div>

      <Footer />
    </main>
  )
}
