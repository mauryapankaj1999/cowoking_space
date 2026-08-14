"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

interface DropdownItem {
  name: string;
  description?: string;
  slug: string;
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
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`flex items-center gap-1 text-[15px] transition-colors duration-300 hover:text-white ${
          isTransparent ? "text-white/90" : "text-slate-700"
        } ${open ? "text-[#1764D8]" : ""}`}
      >
        {label}
        <FiChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-md border border-slate-100 bg-white py-2 shadow-md">
          <p className="px-4 py-1 border-b border-[#012a2d33] text-[10px] font-medium uppercase tracking-wide text-slate-400">
            By {label.toLowerCase().replace(/s$/, "")}
          </p>
{/* 
          {loading && (
            <p className="px-4 py-3 text-sm text-slate-400">Loading...</p>
          )}

          {!loading && items.length === 0 && (
            <p className="px-4 py-3 text-sm text-slate-400">No {label.toLowerCase()} found</p>
          )} */}

          {!loading &&
            items.map((item) => (
              <Link
                key={item.slug}
                href={`${basePath}/${item.slug}`}
                onClick={() => setOpen(false)}
                className="block px-2 py-2 hover:bg-slate-50"
              >
                <p className="text-[13px] font-medium text-primary">
                  {item.name}
                </p>
                {item.description && (
                  <p className="text-[11px] text-slate-500">{item.description}</p>
                )}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}