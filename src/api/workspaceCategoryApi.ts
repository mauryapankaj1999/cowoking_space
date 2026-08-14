import axiosInstance from "./axiosInstance";

// Get all categories
export const getCategories = async () => {
  const response = await axiosInstance.get("/workspacecategories");
  return response.data;
};

// Get single category by ID
export const getCategory = async (id: string) => {
  const response = await axiosInstance.get(`/workspacecategories/${id}`);
  return response.data;
};

// Get single category by slug
export const getCategoryBySlug = async (slug: string) => {
  const response = await axiosInstance.get(`/workspacecategories/slug/${slug}`);
  return response.data;
};