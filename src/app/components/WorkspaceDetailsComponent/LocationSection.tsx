
// "use client";
// import { FiMapPin, FiExternalLink } from "react-icons/fi";

// export default function LocationSection({
//   address,
//   mapLink,
// }: {
//   address: any;
//   mapLink: any;
// }) {
//   return (
//     <div>
//       <h2 className="mb-3 text-lg font-semibold text-gray-900">Location</h2>
//       <p className="mb-3 flex items-center gap-2 text-sm text-gray-600">
//         <FiMapPin className="text-orange-500" /> {address}
//       </p>

//       {mapLink && (
//         <a
//           href={mapLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
//         >
//           <FiExternalLink className="text-orange-500" />
//           View on Google Maps
//         </a>
//       )}
//     </div>
//   );
// }
"use client";
import { FiMapPin, FiExternalLink } from "react-icons/fi";

export default function LocationSection({
  address,
  mapLink,
}: {
  address: string;
  mapLink?: string;
}) {
  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-gray-900">Location</h2>
      <p className="mb-3 flex items-center gap-2 text-sm text-gray-600">
        <FiMapPin className="text-orange-500" /> {address}
      </p>

      <div className="h-64 w-full overflow-hidden rounded-xl border border-gray-200 mb-3">
        <iframe
          title="location-map"
          className="h-full w-full"
          loading="lazy"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            address
          )}&z=15&output=embed`}
        />
      </div>

      {/* {mapLink && (
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
        >
          <FiExternalLink className="text-orange-500" />
          View on Google Maps
        </a>
      )} */}
    </div>
  );
}