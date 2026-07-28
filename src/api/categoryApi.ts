import axiosInstance from "./axiosInstance";

export const getCategories = async () => {
  const res = await axiosInstance.get("/category");
  return res.data;
};

// GET BY SLUG (fixed)
export const getCategoryBySlug = async (slug: string) => {
  const response = await axiosInstance.get(`/category/slug/${slug}`);
  return response.data;
};