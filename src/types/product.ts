export type ProductCategory =
  | "Suplemento"
  | "Suplemento Avancado"
  | "Kit Economia"
  | "Kit Revenda";

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
  badge?: {
    discount?: string;
    label?: string;
  };
  isBestSeller?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartLine extends CartItem {
  product: Product;
  lineTotal: number;
}
