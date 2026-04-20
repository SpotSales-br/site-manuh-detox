export type ProductCategory = "Suplemento" | "Suplemento Avancado";

export type ProductTagVariant = "iniciante" | "avancado";

export interface PricingOption {
  id: string;
  units: number;
  pricePerUnit: number;
  totalPrice: number;
  label: string;
  sublabel?: string;
  savings?: number;
  highlight?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  originalPrice: number;
  installments: number;
  units: number;
  capsulesPerUnit: number;
  image: string;
  imageAlt: string;
  galleryImages: string[];
  tag?: {
    label: string;
    variant: ProductTagVariant;
  };
  pricingOptions: PricingOption[];
  howItWorks: string[];
  composition: string[];
  differential: string;
  usageInstructions: string[];
  rating: number;
  reviewCount: string;
}
