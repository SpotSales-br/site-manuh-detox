import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { products } from "@/data/products";

export function Products() {
  return (
    <section id="produtos" className="section">
      <div className="container-site">
        <div data-animate="fade-up">
          <SectionHeader
            tag="Nossos Produtos"
            title="Favoritos da Manuh"
            subtitle="Suplementos naturais selecionados para potencializar seus resultados"
          />
        </div>
        <div
          data-animate="stagger-scale"
          data-animate-stagger="0.18"
          className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {products.map((product) => (
            <div key={product.id} data-animate-item>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
