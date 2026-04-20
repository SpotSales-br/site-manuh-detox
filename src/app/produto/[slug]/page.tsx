import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ProductBreadcrumb } from "@/components/product/ProductBreadcrumb";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductTrustBadges } from "@/components/product/ProductTrustBadges";
import { BuyBox } from "@/components/product/BuyBox";
import { HowItWorks } from "@/components/product/HowItWorks";
import { Composition } from "@/components/product/Composition";
import { ManuelaStory } from "@/components/product/ManuelaStory";
import { UsageSteps } from "@/components/product/UsageSteps";
import { FAQ } from "@/components/product/FAQ";
import { products, getProductBySlug } from "@/data/products";
import { productFaq } from "@/data/product-details";
import { site } from "@/data/site";

interface PageParams {
  slug: string;
}

export async function generateStaticParams(): Promise<PageParams[]> {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto nao encontrado" };

  const title = `${product.name} | ${site.name}`;
  const description = product.shortDescription;
  return {
    title,
    description,
    alternates: { canonical: `/produto/${product.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${site.url}/produto/${product.slug}`,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <ProductBreadcrumb productName={product.name} />

        <section className="pb-16 pt-8 md:pb-20 md:pt-12">
          <div className="container-site">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
              <div className="flex flex-col gap-6">
                <ProductGallery
                  images={product.galleryImages}
                  alt={product.imageAlt}
                />
                <ProductTrustBadges />
              </div>
              <BuyBox product={product} />
            </div>

            <div className="mx-auto mt-12 max-w-[820px] rounded-[16px] border border-line bg-white p-6 md:p-8">
              <h2 className="mb-3 font-display text-[22px] font-semibold text-ink">
                Sobre o produto
              </h2>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                {product.longDescription}
              </p>
            </div>
          </div>
        </section>

        <HowItWorks items={product.howItWorks} />
        <Composition
          items={product.composition}
          differential={product.differential}
        />
        <ManuelaStory />
        <UsageSteps steps={product.usageInstructions} />
        <FAQ items={productFaq} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
