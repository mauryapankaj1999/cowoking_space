import { createEnquiry } from "@/api/enquiryApi";
import { useMutation } from "@tanstack/react-query";
// import { createEnquiry } from "../services/enquiryService";

export const useCreateEnquiry = () => {
  return useMutation({
    mutationFn: createEnquiry,
  });
};