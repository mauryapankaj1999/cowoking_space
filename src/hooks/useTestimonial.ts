import { getTestimonials } from "@/api/testimonialApi";
import { useQuery } from "@tanstack/react-query";
// import { getTestimonials } from "@/services/testimonialApi";

export const useTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });
};