export type ProductCategory = "Suplemento" | "Suplemento Avancado";

export type ProductTagVariant = "iniciante" | "avancado";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  originalPrice: number;
  installments: number;
  units: number;
  capsulesPerUnit: number;
  image: string;
  imageAlt: string;
  tag?: {
    label: string;
    variant: ProductTagVariant;
  };
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartLine extends CartItem {
  product: Product;
  lineTotal: number;
}
