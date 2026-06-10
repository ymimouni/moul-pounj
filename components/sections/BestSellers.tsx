"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/common/ProductCard";

export default function BestSellers() {
  const featured = products.filter((p) => p.category === "matelas");
  // Triple the items: [clone | real | clone]
  const items = [...featured, ...featured, ...featured];
  const scrollRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false);

  // After mount, jump silently to the middle set
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const segmentWidth = el.scrollWidth / 3;
    el.scrollLeft = segmentWidth;
  }, []);

  // When near the edges, silently reset to the middle equivalent
  function handleScroll() {
    const el = scrollRef.current;
    if (!el || isJumping.current) return;
    const segmentWidth = el.scrollWidth / 3;
    if (el.scrollLeft < segmentWidth * 0.25) {
      isJumping.current = true;
      el.scrollLeft += segmentWidth;
      requestAnimationFrame(() => {
        isJumping.current = false;
      });
    } else if (el.scrollLeft > segmentWidth * 1.75) {
      isJumping.current = true;
      el.scrollLeft -= segmentWidth;
      requestAnimationFrame(() => {
        isJumping.current = false;
      });
    }
  }

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement;
    const cardWidth = (firstCard?.offsetWidth ?? 260) + 20;
    el.scrollBy({
      left: dir === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  }

  return (
    <section className="py-16 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 flex items-end justify-between mb-10 gap-4">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-[#f2622e] mb-2">
            Nos produits
          </p>
          <h2 className="text-3xl font-extrabold text-[#0f1b2e] leading-tight">
            Meilleures ventes
          </h2>
        </div>
        <Link
          href="/matelas"
          className="hidden sm:inline-flex items-center gap-2 text-[#f2622e] font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          Voir tout <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Slider */}
      <div className="relative max-w-[1200px] mx-auto">
        {/* Arrows — always visible since it loops */}
        <button
          onClick={() => scroll("left")}
          aria-label="Précédent"
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#0f1b2e] hover:text-[#f2622e] hover:border-[#f2622e] transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Suivant"
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#0f1b2e] hover:text-[#f2622e] hover:border-[#f2622e] transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-r from-white to-transparent z-[1] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-white to-transparent z-[1] pointer-events-none" />

        {/* Cards track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto pb-3 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="shrink-0 w-[160px] sm:w-[200px] md:w-[220px]"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile "Voir tout" */}
      <div className="sm:hidden mt-6 text-center">
        <Link
          href="/matelas"
          className="inline-flex items-center gap-2 text-[#f2622e] font-semibold text-sm"
        >
          Voir tout <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
