"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/common/ProductCard";

const TABS = [
  { label: "Tous", value: "all" },
  { label: "Matelas en mousse", value: "mousse" },
  { label: "Ressorts ensachés", value: "ressorts" },
  { label: "Salon Marocain", value: "salon" },
  { label: "Accessoires", value: "accessoires" },
];

export default function CatalogGrid() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState("all");

  useEffect(() => {
    const filter = searchParams.get("filter");
    const valid = TABS.map((t) => t.value);
    setActive(valid.includes(filter ?? "") ? (filter as string) : "all");
  }, [searchParams]);

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.subcategory === active);

  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-16">
      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap mb-10">
        {TABS.map((tab) => {
          const count =
            tab.value === "all"
              ? products.length
              : products.filter((p) => p.subcategory === tab.value).length;
          const isActive = active === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[#f2622e] text-white shadow-md shadow-[#f2622e]/25"
                  : "bg-[#faf6f1] text-[#0f1b2e] hover:bg-[#f2622e]/10"
              }`}
            >
              {tab.label}
              <span
                className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-20">
          Aucun produit dans cette catégorie.
        </p>
      )}
    </div>
  );
}
