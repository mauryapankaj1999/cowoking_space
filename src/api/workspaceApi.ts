import { Workspace } from "@/types/workspace";
import axiosInstance from "./axiosInstance";
import { AnyARecord } from "node:dns";

export const getWorkspacesBySlug = async (citySlug: string, subCategorySlug?: string) => {
  const url = subCategorySlug
    ? `/workspace/city/${citySlug}/${subCategorySlug}`
    : `/workspace/city/${citySlug}`;

  const response = await axiosInstance.get(url);
  return response.data;
};

// GET SINGLE WORKSPACE BY SLUG (fixed) 
export async function getWorkspaceBySlug(slug: string): Promise<Workspace> {
  const res = await axiosInstance.get(`/workspace/slug/${slug}`);
  return res.data.data;
}

export const getWorkspaces = async () => {
  const response = await axiosInstance.get("/workspace");
  return response.data;
};

// GET SINGLE
export const getSingleWorkspace = async (id:any) => {
  const response = await axiosInstance.get(`/workspace/${id}`);
  return response.data;
};

export const getWorkspacesByCategory = async (categoryId: string) => {
  const response = await axiosInstance.get(`/workspace/workspacecategory/${categoryId}`);
  return response.data;
};
const isObjectId = (val: string) => /^[0-9a-fA-F]{24}$/.test(val);

export const getWorkspacesByOperator = async (param: string) => {
  const url = isObjectId(param)
    ? `/workspace/operator/${param}`
    : `/workspace/operator/slug/${param}`;
  const response = await axiosInstance.get(url);
  return response.data;
};