import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Star,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { products } from "@/data/products";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ProductActions from "@/components/common/ProductActions";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: `${product.name} — Moul Pounj`,
    description: product.description,
  };
}

const PHONE = "+212661475136";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const discountPct = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100,
  );

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* ── Breadcrumb ── */}
        <div className="bg-[#faf6f1] border-b border-[#e8dfd5]">
          <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#f2622e] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/matelas"
              className="hover:text-[#f2622e] transition-colors"
            >
              Boutique
            </Link>
            <span>/</span>
            <span className="text-[#0f1b2e] font-medium truncate">
              {product.name}
            </span>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-10">
          {/* ── Back link ── */}
          <Link
            href="/matelas"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#f2622e] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à la boutique
          </Link>

          {/* ── Main product section ── */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT — Image */}
            <div className="lg:sticky lg:top-6">
              <div className="relative bg-[#faf6f1] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-6">
                {discountPct > 0 && (
                  <div className="absolute top-4 left-4 bg-[#f2622e] text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                    -{discountPct}%
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={540}
                  height={540}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              {/* Trust mini-bar */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { icon: Truck, label: "Livraison gratuite" },
                  { icon: RotateCcw, label: "100 nuits offertes" },
                  {
                    icon: ShieldCheck,
                    label: product.guarantee
                      ? `Garantie ${product.guarantee}`
                      : "Garantie incluse",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-1.5 bg-[#faf6f1] rounded-xl p-3 text-center"
                  >
                    <item.icon className="w-5 h-5 text-[#f2622e]" />
                    <span className="text-[11px] font-medium text-[#0f1b2e] leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Info */}
            <div>
              {/* Badge + Category */}
              <div className="flex items-center gap-2 mb-3">
                {product.badge && (
                  <span className="bg-[#f2622e]/10 text-[#f2622e] text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <span className="text-xs text-gray-400 capitalize">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f1b2e] leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#0f1b2e]">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-sm text-gray-400">
                  (
                  {product.reviews >= 1000
                    ? `+${Math.floor(product.reviews / 1000)}K`
                    : product.reviews}{" "}
                  avis)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-5 pb-5 border-b border-gray-100">
                <span className="text-4xl font-extrabold text-[#f2622e]">
                  {product.price.toLocaleString("fr-FR")} Dhs
                </span>
                <span className="text-lg text-gray-400 line-through">
                  {product.oldPrice.toLocaleString("fr-FR")} Dhs
                </span>
                <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Vous économisez{" "}
                  {(product.oldPrice - product.price).toLocaleString("fr-FR")}{" "}
                  Dhs
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 text-gray-600 leading-relaxed text-sm">
                {product.description}
              </p>

              {/* Specs */}
              {(product.comfort ||
                product.height ||
                product.guarantee ||
                product.fabric) && (
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {product.comfort && (
                    <div className="bg-[#faf6f1] rounded-xl px-4 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Confort
                      </p>
                      <p className="text-sm font-semibold text-[#0f1b2e]">
                        {product.comfort}
                      </p>
                    </div>
                  )}
                  {product.height && (
                    <div className="bg-[#faf6f1] rounded-xl px-4 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Hauteur
                      </p>
                      <p className="text-sm font-semibold text-[#0f1b2e]">
                        {product.height}
                      </p>
                    </div>
                  )}
                  {product.guarantee && (
                    <div className="bg-[#faf6f1] rounded-xl px-4 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Garantie
                      </p>
                      <p className="text-sm font-semibold text-[#0f1b2e]">
                        {product.guarantee}
                      </p>
                    </div>
                  )}
                  {product.fabric && (
                    <div className="bg-[#faf6f1] rounded-xl px-4 py-3 col-span-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Tissu
                      </p>
                      <p className="text-sm font-semibold text-[#0f1b2e]">
                        {product.fabric}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Features */}
              {product.features.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-bold text-[#0f1b2e] mb-3">
                    Points forts
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-gray-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#f2622e] mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dimensions + WhatsApp CTA */}
              <ProductActions
                dimensions={product.dimensions}
                productName={product.name}
                price={product.price}
                whatsappText={product.whatsappText}
                phone={PHONE}
              />
            </div>
          </div>

          {/* ── Related products ── */}
          {related.length > 0 && (
            <div className="mt-20 pt-10 border-t border-gray-100">
              <h2 className="text-2xl font-extrabold text-[#0f1b2e] mb-8">
                Vous aimerez aussi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/produits/${p.id}`}
                    className="group bg-[#faf6f1] rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-square bg-white p-4">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      {p.badge && (
                        <span className="absolute top-3 left-3 bg-[#f2622e] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[#0f1b2e] text-sm leading-tight">
                        {p.name}
                      </h3>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-base font-bold text-[#f2622e]">
                          {p.price.toLocaleString("fr-FR")} Dhs
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          {p.oldPrice.toLocaleString("fr-FR")} Dhs
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
