"use server";

import { Product } from "../types/types";

// http://localhost:5000/api/products

// x-country-code
export default async function getTest(
  prevState: Product[],
  formData: FormData
): Promise<Product[]> {
  const min = formData.get("minPrice");
  const max = formData.get("maxPrice");
  const res = await fetch(
    `http://localhost:5000/api/products?minPrice=${min}&maxPrice=${max}`,
    {
      headers: {
        "x-country-code": "EG",
      },
      cache: "no-store",
    }
  );
  const data = await res.json();
  console.log(data);

  return data.data.products as Product[];
}
