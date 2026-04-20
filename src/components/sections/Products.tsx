import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { products } from "@/data/products";

export function Products() {
  return (
    <section id="produtos" className="section">
      <div className="container-site">
        <SectionHeader
          tag="Nossos Produtos"
          title="Favoritos da Manuh"
          subtitle="Suplementos naturais selecionados para potencializar seus resultados"
        />
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
