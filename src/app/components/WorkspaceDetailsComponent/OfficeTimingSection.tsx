"use client";
import { FiClock } from "react-icons/fi";

interface TimingRow {
  label: string;
  value: string;
}

export default function OfficeTimingSection({
  timing,
}: {
  timing: TimingRow[];
}) {
  if (!timing?.length) return null;

  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-gray-900">
        Workspace Timing
      </h2>
      <div className="">
        {timing.map((row, index) => (
          <div key={index} className="flex items-center gap-2 text-sm mb-2">
            <FiClock className="text-orange-500" />
            <span className="font-medium text-gray-700">{row.label}:</span>
            <span className="text-gray-500">{row.value || "Closed"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}