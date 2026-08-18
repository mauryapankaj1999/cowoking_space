// "use client";

// import { useState, useRef } from "react";
// import Link from "next/link";
// import { FiChevronDown } from "react-icons/fi";

// interface DropdownItem {
//   name: string;
//   description?: string;
//   slug: string;
// }

// interface NavDropdownProps {
//   label: string;
//   items: DropdownItem[];
//   basePath: string; 
//   isTransparent: boolean;
//   loading?: boolean;
// }

// export default function NavDropdown({
//   label,
//   items,
//   basePath,
//   isTransparent,
//   loading,
// }: NavDropdownProps) {
//   const [open, setOpen] = useState(false);
//   const closeTimer = useRef<NodeJS.Timeout | null>(null);

//   const handleEnter = () => {
//     if (closeTimer.current) clearTimeout(closeTimer.current);
//     setOpen(true);
//   };

//   const handleLeave = () => {
//     closeTimer.current = setTimeout(() => setOpen(false), 150);
//   };

//   return (
//     <div
//       className="relative"
//       onMouseEnter={handleEnter}
//       onMouseLeave={handleLeave}
//     >
//       <button
//         className={`flex items-center gap-1 text-[15px] transition-colors duration-300 hover:text-white ${
//           isTransparent ? "text-white/90" : "text-slate-700"
//         } ${open ? "text-[#1764D8]" : ""}`}
//       >
//         {label}
//         <FiChevronDown
//           className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
//         />
//       </button>

//       {open && (
//         <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-md border border-slate-100 bg-white py-2 shadow-md">
//           <p className="px-4 py-1 border-b border-[#012a2d33] text-[10px] font-medium uppercase tracking-wide text-slate-400">
//             By {label.toLowerCase().replace(/s$/, "")}
//           </p>
// {/* 
//           {loading && (
//             <p className="px-4 py-3 text-sm text-slate-400">Loading...</p>
//           )}

//           {!loading && items.length === 0 && (
//             <p className="px-4 py-3 text-sm text-slate-400">No {label.toLowerCase()} found</p>
//           )} */}

//          {!loading &&
//   items.map((item: any) => {
//     const linkKey = item.slug || item._id;
//     return (
//       <Link
//         key={linkKey}
//         href={`${basePath}/${linkKey}`}
//         onClick={() => setOpen(false)}
//         className="block px-2 py-2 hover:bg-slate-50"
//       >
//         <p className="text-[13px] font-medium text-primary">
//           {item.name}
//         </p>
//         {item.description && (
//           <p className="text-[11px] text-slate-500">{item.description}</p>
//         )}
//       </Link>
//     );
//   })}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

interface DropdownItem {
  name: string;
  description?: string;
  slug?: string;
  _id?: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  basePath: string;
  isTransparent: boolean;
  loading?: boolean;
}

export default function NavDropdown({
  label,
  items,
  basePath,
  isTransparent,
  loading,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // click-outside se close
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-1 text-[15px] transition-colors duration-300 hover:text-primary ${
          isTransparent ? "text-white/90" : "text-slate-700"
        } ${open ? "text-[#1764D8]" : ""}`}
      >
        {label}
        <FiChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-0 top-full z-50 mt-2 w-72 origin-top-left rounded-xl border border-slate-100 bg-white py-2 shadow-xl transition-all duration-200 ease-out ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-90 opacity-0"
        }`}
      >
        <p className="px-4 py-1.5 border-b border-slate-100 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          By {label.toLowerCase().replace(/s$/, "")}
        </p>

        {loading && (
          <p className="px-4 py-3 text-sm text-slate-400">Loading...</p>
        )}

        {!loading && items.length === 0 && (
          <p className="px-4 py-3 text-sm text-slate-400">
            No {label.toLowerCase()} found
          </p>
        )}

        {!loading &&
          items.map((item) => {
            const linkKey = item.slug || item._id;
            return (
              <Link
                key={linkKey}
                href={`${basePath}/${linkKey}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 transition-colors hover:bg-slate-50"
              >
                <p className="text-[13px] font-medium text-primary">
                  {item.name}
                </p>
                {item.description && (
                  <p className="text-[11px] text-slate-500">
                    {item.description}
                  </p>
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
}