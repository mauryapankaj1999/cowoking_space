import axiosInstance from "./axiosInstance";

// Get all operators
export const getOperators = async () => {
  const response = await axiosInstance.get("/operators");
  return response.data;
};

// Get single operator by ID
export const getOperator = async (id: string) => {
  const response = await axiosInstance.get(`/operators/${id}`);
  return response.data;
};