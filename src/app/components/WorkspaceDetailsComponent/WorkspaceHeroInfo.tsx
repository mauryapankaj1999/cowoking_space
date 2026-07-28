"use client";
import { FiMapPin } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Workspace } from "@/types/workspace";


export default function WorkspaceHeroInfo({ data }: { data: Workspace }) {
  const startingPrice = Math.min(...data.plans.map((p) => p.price));

  return (
    <div className="mx-auto flex max-w-7xl items-start justify-between px-6 pt-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">{data.name}</h1>
        <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
          <span className="flex items-center gap-1 font-medium text-gray-700">
            <FaStar className="text-yellow-400" /> 4.4
          </span>
          <span className="flex items-center gap-1">
            <FiMapPin /> {data.subCategory.name}, {data.category.name}
          </span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-400">Starting</p>
        <p className="text-lg font-semibold text-orange-500">
          ₹{startingPrice.toLocaleString()}/month
        </p>
      </div>
    </div>
  );
}