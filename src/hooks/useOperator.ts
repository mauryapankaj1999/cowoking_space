import { useQuery } from "@tanstack/react-query";
import { getOperators, getOperator } from "@/api/operatorApi";

export const useOperators = () => {
  return useQuery({
    queryKey: ["operators"],
    queryFn: getOperators,
  });
};

export const useOperator = (id: string) => {
  return useQuery({
    queryKey: ["operator", id],
    queryFn: () => getOperator(id),
    enabled: !!id,
  });
};