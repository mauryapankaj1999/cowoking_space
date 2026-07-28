import { useQuery } from "@tanstack/react-query";
import { getSubCategoriesByCitySlug } from "../api/subCategoryApi";

export const useSubCategoriesByCitySlug = (citySlug: any) => {
  return useQuery({
    queryKey: ["sub-categories", "city", citySlug],
    queryFn: () => getSubCategoriesByCitySlug(citySlug),
    enabled: !!citySlug,
  });
};