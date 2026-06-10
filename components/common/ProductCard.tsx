import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produits/${product.id}`} className="group block">
      {/* Image container — square, cream bg, info overlays on hover */}
      <div className="relative bg-[#faf6f1] rounded-2xl overflow-hidden aspect-square">
        {product.badge && (
          <span className="absolute top-3 right-3 z-10 bg-white/90 text-[#0f1b2e] text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-6 group-hover:scale-[1.04] transition-transform duration-300"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2e]/80 via-[#0f1b2e]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col justify-end p-3.5 gap-1.5">
          <h3 className="text-white font-bold text-xs leading-snug line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-2.5 h-2.5 ${
                  i < Math.round(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-white/30"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#f2622e] font-extrabold text-sm">
              {product.price.toLocaleString("fr-FR")} Dhs
            </span>
            <span className="w-6 h-6 rounded-full bg-[#f2622e] flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
