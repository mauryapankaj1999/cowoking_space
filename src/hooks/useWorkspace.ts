// import { useQuery } from "@tanstack/react-query";
// import { getWorkspacesBySlug, getWorkspaceBySlug, getWorkspaces, getWorkspacesByCategory, getWorkspacesByOperator } from "../api/workspaceApi";

// export const useWorkspacesBySlug = (
//   citySlug: any,
//   subCategorySlug?: any
// ) => {
//   return useQuery({
//     queryKey: ["workspace", "slug", citySlug, subCategorySlug],
//     queryFn: () => getWorkspacesBySlug(citySlug, subCategorySlug),
//     enabled: !!citySlug,
//     staleTime: 5 * 60 * 1000,
//     gcTime: 10 * 60 * 1000,
//     refetchOnWindowFocus: false,
//   });
// };

// export const useWorkspaceBySlug = (slug: any) => {
//   return useQuery({
//     queryKey: ["workspace", "slug", slug],
//     queryFn: () => getWorkspaceBySlug(slug),
//     enabled: !!slug,
//   });
// };

// export const useWorkspaces = () => {
//   return useQuery({
//     queryKey: ["workspace"],
//     queryFn: getWorkspaces,
//   });
// };
// export const useWorkspacesByCategory = (categoryId: any) => {
//   return useQuery({
//     queryKey: ["workspace", "category", categoryId],
//     queryFn: () => getWorkspacesByCategory(categoryId),
//     enabled: !!categoryId,
//   });
// };
// export const useWorkspacesByOperator = (param: any) => {
//   return useQuery({
//     queryKey: ["workspace", "operator", param],
//     queryFn: () => getWorkspacesByOperator(param),
//     enabled: !!param,
//   });
// };

import { useQuery } from "@tanstack/react-query";

import {
  getWorkspacesBySlug,
  getWorkspaceBySlug,
  getWorkspaces,
  getWorkspacesByCategory,
  getWorkspacesByOperator,
} from "../api/workspaceApi";

export const useWorkspacesBySlug = (
  citySlug: any,
  subCategorySlug?: any,
  page: number = 1,
  limit: number = 12
) => {
  return useQuery({
    queryKey: [
      "workspace",
      "slug",
      citySlug,
      subCategorySlug,
      page,
      limit,
    ],

    queryFn: () =>
      getWorkspacesBySlug(
        citySlug,
        subCategorySlug,
        page,
        limit
      ),

    enabled: !!citySlug,

    staleTime: 5 * 60 * 1000,

    gcTime: 10 * 60 * 1000,

    refetchOnWindowFocus: false,
  });
};

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

export const useWorkspacesByCategory = (categoryId: any) => {
  return useQuery({
    queryKey: ["workspace", "category", categoryId],
    queryFn: () => getWorkspacesByCategory(categoryId),
    enabled: !!categoryId,
  });
};

export const useWorkspacesByOperator = (param: any) => {
  return useQuery({
    queryKey: ["workspace", "operator", param],
    queryFn: () => getWorkspacesByOperator(param),
    enabled: !!param,
  });
};