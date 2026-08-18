import { useQuery } from "@tanstack/react-query";
import { getOperators, getOperator, getOperatorByParam } from "@/api/operatorApi";

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
export const useOperatorByParam = (param: any) => {
  return useQuery({
    queryKey: ["operator", "param", param],
    queryFn: () => getOperatorByParam(param),
    enabled: !!param,
  });
};