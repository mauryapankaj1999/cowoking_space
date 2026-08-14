import { useQuery } from "@tanstack/react-query";
import { getCategories, getCategory, getCategoryBySlug } from "@/api/workspaceCategoryApi";

export const useWorkspaceCategories = () => {
  return useQuery({
    queryKey: ["workspace-categories"],
    queryFn: getCategories,
  });
};

export const useWorkspaceCategory = (id: string) => {
  return useQuery({
    queryKey: ["workspace-category", id],
    queryFn: () => getCategory(id),
    enabled: !!id,
  });
};

export const useWorkspaceCategoryBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["workspace-category-slug", slug],
    queryFn: () => getCategoryBySlug(slug),
    enabled: !!slug,
  });
};