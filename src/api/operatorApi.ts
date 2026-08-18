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
export const getOperatorByParam = async (param: string) => {
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(param);
  const url = isObjectId ? `/operators/${param}` : `/operators/slug/${param}`;
  const response = await axiosInstance.get(url);
  return response.data;
};