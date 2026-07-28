"use client";
import { OfficeTiming } from "@/types/workspace";
import { FiClock } from "react-icons/fi";
// import { OfficeTiming } from "@/app/types/workspace";

export default function OfficeTimingSection({ timing }: { timing: OfficeTiming }) {
  const weekdays = [timing.monday, timing.tuesday, timing.wednesday, timing.thursday, timing.friday];
  const sameWeekday = weekdays.every((t) => t === weekdays[0]);

  const rows = sameWeekday
    ? [
        { label: "Mon - Fri", value: weekdays[0] },
        { label: "Sat", value: timing.saturday },
        { label: "Sun", value: timing.sunday },
      ]
    : [
        { label: "Mon", value: timing.monday },
        { label: "Tue", value: timing.tuesday },
        { label: "Wed", value: timing.wednesday },
        { label: "Thu", value: timing.thursday },
        { label: "Fri", value: timing.friday },
        { label: "Sat", value: timing.saturday },
        { label: "Sun", value: timing.sunday },
      ];

  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-gray-900">Office Timing</h2>
      <div className="flex flex-wrap gap-6">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-2 text-sm">
            <FiClock className="text-orange-500" />
            <span className="font-medium text-gray-700">{row.label}:</span>
            <span className="text-gray-500">{row.value || "Closed"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}