"use client";
import {
  FiWifi,
  FiUsers,
  FiPrinter,
  FiCoffee,
  FiHome,
  FiShield,
  FiPhone,
  FiCheckCircle,
} from "react-icons/fi";

const iconMap: Record<string, React.ReactNode> = {
  "High Speed WiFi": <FiWifi />,
  "Meeting Rooms": <FiUsers />,
  "Ergo Workstations": <FiHome />,
  Printer: <FiPrinter />,
  "Tea/Coffee": <FiCoffee />,
  Reception: <FiShield />,
  "Phone Booth": <FiPhone />,
};

export default function AmenitiesSection({ amenities }: { amenities: string[] }) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Amenities</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {amenities.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-orange-500">{iconMap[item] ?? <FiCheckCircle />}</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}