"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import getTest from "@/lib/api/get-test";
import { Product } from "@/lib/types/types";
import { useTranslations, useLocale } from "next-intl";

export default function Page() {
  const [state, action, isPending] = useActionState(getTest, []);
  const t = useTranslations("test");
  const locale = useLocale();

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Filter Card */}
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <form action={action} className="flex flex-col gap-4 sm:flex-row">
          <Input
            name="minPrice"
            type="number"
            placeholder={t("minPrice")}
            className="sm:w-40"
          />
          <Input
            name="maxPrice"
            type="number"
            placeholder={t("maxPrice")}
            className="sm:w-40"
          />
          <Button type="submit" disabled={isPending} className="sm:ml-auto">
            {isPending ? t("loading") : t("fetchProducts")}
          </Button>
        </form>
      </div>

      {/* States */}
      {isPending && (
        <p className="text-center text-sm text-muted-foreground">
          {t("loadingProducts")}
        </p>
      )}

      {!isPending && state.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          {t("noProducts")}
        </p>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.map((product: Product) => (
          <div
            key={product.id}
            className="group rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            {/* Content */}
            <h3 className="line-clamp-1 text-lg font-semibold">
              {product.title[locale as keyof typeof product.title]}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {product.category[locale as keyof typeof product.category]}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-lg font-bold text-primary">
                {product.finalPrice ?? product.price}$
              </span>

              {product.discount > 0 && (
                <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
