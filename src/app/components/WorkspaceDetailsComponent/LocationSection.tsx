"use client";
import { FiMapPin } from "react-icons/fi";

export default function LocationSection({
  address,
  latitude,
  longitude,
}: {
  address: string;
  latitude: string;
  longitude: string;
}) {
  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-gray-900">Location</h2>
      <p className="mb-3 flex items-center gap-2 text-sm text-gray-600">
        <FiMapPin className="text-orange-500" /> {address}
      </p>
      <div className="h-64 w-full overflow-hidden rounded-xl border border-gray-200">
        <iframe
          title="location-map"
          className="h-full w-full"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
        />
      </div>
    </div>
  );
}