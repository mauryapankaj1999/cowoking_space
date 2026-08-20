// import api from "./api";
import axiosInstance from "./axiosInstance";


export const createEnquiry = async (payload:any) => {
  const response = await axiosInstance.post("/enquiries", payload);
  return response.data;
};