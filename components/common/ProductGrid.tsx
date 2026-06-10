import ProductCard from "@/components/common/ProductCard"
import { products as allProducts, type Product } from "@/data/products"

export default function ProductGrid({ items }: { items?: Product[] }) {
  const list = items ?? allProducts
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-14">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
