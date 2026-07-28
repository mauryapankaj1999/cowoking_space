import { useQuery } from "@tanstack/react-query";
import { getWorkspacesBySlug, getWorkspaceBySlug, getWorkspaces } from "../api/workspaceApi";

export const useWorkspacesBySlug = (citySlug: any, subCategorySlug?: any) => {
  return useQuery({
    queryKey: ["workspace", "slug", citySlug, subCategorySlug],
    queryFn: () => getWorkspacesBySlug(citySlug, subCategorySlug),
    enabled: !!citySlug,
  });
};

// GET SINGLE BY SLUG (fixed)
export const useWorkspaceBySlug = (slug: any) => {
  return useQuery({
    queryKey: ["workspace", "slug", slug],
    queryFn: () => getWorkspaceBySlug(slug),
    enabled: !!slug,
  });
};

export const useWorkspaces = () => {
  return useQuery({
    queryKey: ["workspace"],
    queryFn: getWorkspaces,
  });
};