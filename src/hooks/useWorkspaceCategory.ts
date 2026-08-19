import { useQuery } from "@tanstack/react-query";
import { getCategories, getCategory, getCategoryBySlug } from "@/api/workspaceCategoryApi";

export const useWorkspaceCategories = () => {
  return useQuery({
    queryKey: ["workspacecategories"],
    queryFn: getCategories,
  });
};

export const useWorkspaceCategory = (id: any) => {
  return useQuery({
    queryKey: ["workspacecategory", id],
    queryFn: () => getCategory(id),
    enabled: !!id,
  });
};

export const useWorkspaceCategoryBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["workspacecategory-slug", slug],
    queryFn: () => getCategoryBySlug(slug),
    enabled: !!slug,
  });
};