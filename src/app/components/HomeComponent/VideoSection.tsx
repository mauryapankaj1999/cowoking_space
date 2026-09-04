
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch, FiMapPin, FiBriefcase, FiChevronDown, FiLoader } from "react-icons/fi";
import { useCategories } from "@/hooks/useCategory";

const lookingForOptions = [
  "Coworking Space",
  "Manage Space",
  "Office/Commercial",
  "Flexi Desk",
  "Dedicated Desk",
  "Virtual Office",
  "Meeting Rooms",
  "Day Pass",
  
];

export default function VideoSection() {
  const router = useRouter();

  const [lookingFor, setLookingFor] = useState(lookingForOptions[0]);
  const [lookingOpen, setLookingOpen] = useState(false);

  const [selectedCity, setSelectedCity] = useState<{ name: string; slug: string } | null>(null);
  const [cityOpen, setCityOpen] = useState(false);

  const [searching, setSearching] = useState(false);

  const { data, isLoading } = useCategories();
  const categories = data?.data || [];

  const handleSearch = () => {
    if (!selectedCity?.slug) return;
    setSearching(true);
    router.push(`/coworking/${selectedCity.slug}`);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/img/video22.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-financierDisplay text-4xl md:text-6xl lg:text-6xl font-bold leading-tight">
          Find Your <span >Space </span> <br />
        
        </h1>

        <p className="mt-6 max-w-3xl
         text-white  font-light
         text-base md:text-lg">
         Find Premium Coworking and Office Spaces Perfectly Suited for Your Growing Team
        </p>

        <div className="mt-10 w-full max-w-4xl">
          {/* <div className="
            relative z-30 flex flex-col gap-2 rounded-2xl border
           border-white/30 bg-white/20 p-2 shadow-2xl backdrop-blur-xl 
           md:flex-row md:items-center md:rounded-full"
           > */}
          <div className="
            relative z-30 flex flex-col gap-2 border
           border-white/30 bg-white/20 p-6 shadow-2xl backdrop-blur-xl 
           md:flex-row md:items-center md:rounded-xl"
           >
            <div className="relative flex-1">
              <button
                type="button"
                onClick={() => {
                  setLookingOpen(!lookingOpen);
                  setCityOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-xl bg-white px-4 py-4 text-left hover:bg-slate-50 md:rounded-xl"
              >
                <FiBriefcase className="h-4 w-4 shrink-0 text-slate-400" />
                <span className="flex-1 truncate text-sm font-medium text-primary">
                  {lookingFor}
                </span>
                <FiChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
              </button>

              {lookingOpen && (
                <div className="absolute left-0 top-full z-30 mt-2 w-full min-w-[200px] rounded-xl bg-white p-2 text-left shadow-xl max-h-60 overflow-y-auto">
                  {lookingForOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setLookingFor(opt);
                        setLookingOpen(false);
                      }}
                      className="block w-full text-primary rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative flex-1">
              <button
                type="button"
                onClick={() => {
                  setCityOpen(!cityOpen);
                  setLookingOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-xl bg-white px-4 py-4 text-left hover:bg-slate-50 md:rounded-xl"
              >
                <FiMapPin className="h-4 w-4 shrink-0 text-slate-400" />
                <span className="flex-1 truncate text-sm font-medium text-primary">
                  {selectedCity?.name || "Select City"}
                </span>
                <FiChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
              </button>

              {cityOpen && (
                <div className="absolute left-0 top-full z-[100] mt-2 max-h-60 w-full min-w-[200px] overflow-y-auto rounded-xl bg-white p-2 text-left shadow-xl">
                  {isLoading && (
                    <div className="px-3 py-2 text-sm text-slate-400">Loading...</div>
                  )}
                  {categories.map((cat: any) => (
                    <button
                      key={cat._id}
                      onClick={() => {
                        setSelectedCity(cat);
                        setCityOpen(false);
                      }}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleSearch}
              // disabled={!selectedCity || searching}
              className="flex items-center justify-center gap-2 rounded-xl hover:bg-primary/80 bg-primary px-6 py-4 font-semibold text-white transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60 md:rounded-xl"
            >
              {searching ? (
                <FiLoader className="h-4 w-4 animate-spin" />
              ) : (
                <FiSearch className="h-4 w-4" />
              )}
              {searching ? "Searching..." : "Find Space"}
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {categories.slice(0, 6).map((cat: any) => (
              <div
                key={cat._id}
                onClick={() => setSelectedCity(cat)}
                className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm transition hover:border-white/60 hover:bg-primary hover:text-white cursor-pointer"
              >
                <FiMapPin className="h-3.5 w-3.5" />
                {cat.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}