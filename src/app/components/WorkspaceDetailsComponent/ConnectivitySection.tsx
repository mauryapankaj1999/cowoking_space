"use client";
import { FiMapPin } from "react-icons/fi";

export default function ConnectivitySection({connectivity,}: { connectivity: string[];
}) {
  if (!connectivity || connectivity.length === 0) return null;

    





  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-gray-900">
        Connectivity
      </h2>
      <div className="flex flex-wrap gap-3">
        {connectivity.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700"
          >
            <FiMapPin className="text-orange-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}