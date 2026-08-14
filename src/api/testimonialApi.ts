// import axios from "@/lib/axios";
import axiosInstance from "./axiosInstance";


export const getTestimonials = async () => {
  const { data } = await axiosInstance.get("/testimonial");
  return data;
};