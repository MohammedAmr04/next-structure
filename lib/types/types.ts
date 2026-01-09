interface Locale {
  en: string;
  ar: string;
}

export interface ProductRate {
  average: number;
  count: number;
}

export interface ProductImage {
  _id: string;
  url: string;
}

export interface ProductCountry {
  code: string;
}

export interface Product {
  _id: string;
  id: string;

  title: Locale;
  category: Locale;
  description: Locale;

  slug: string;

  rate: ProductRate;

  images: ProductImage[];
  image3D: string | null;

  minimumOrderQuantity: number;

  createdAt: string;
  updatedAt: string;

  price: number;
  finalPrice: number;
  discount: number;

  currency: string | null;

  stock: "stock" | "unStock";
  sold: number;
  amount: number;

  country: ProductCountry;
}
