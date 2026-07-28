"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories, getCategoryBySlug } from "@/api/categoryApi";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};

// fixed — plain string param
export const useCategoryBySlug = (slug: any) => {
  return useQuery({
    queryKey: ["category", "slug", slug],
    queryFn: () => getCategoryBySlug(slug),
    enabled: !!slug,
  });
};