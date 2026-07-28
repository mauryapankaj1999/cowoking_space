import axiosInstance from "./axiosInstance";

export const getSubCategoriesByCitySlug = async (citySlug: string) => {
  const response = await axiosInstance.get(`/sub-category/city/${citySlug}`);
  return response.data;
};