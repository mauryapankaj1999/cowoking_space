"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiSearch, FiMapPin, FiChevronDown } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import FeatureSection from "./FeatureSection";
import ComfortableSpaces from "./ComfortableSpaces";
import { useCategories } from "@/hooks/useCategory";

const LOOKING_FOR_OPTIONS = [
  "Coworking Space",
  "Manage Office Space",
  "virtual office space",
];

export default function HeroSection() {
  const router = useRouter();

  const [lookingFor, setLookingFor] = useState(LOOKING_FOR_OPTIONS[0]);
  const [selectedCity, setSelectedCity] = useState<{
    name: string;
    slug: string;
  } | null>(null);
  const [lookingForOpen, setLookingForOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

  const { data, isLoading } = useCategories();

  const categories = data?.data || [];

  const handleSearch = () => {
    if (!selectedCity?.slug) return;
    router.push(`/coworking/${selectedCity.slug}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/40 to-blue-50 px-6 py-14 sm:py-20 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
            Find a place to <span className="text-blue-600">work</span>,
            <br />
            somewhere to <span className="text-blue-600">live</span>.
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
            Discover coworking spaces, coliving homes, virtual offices and
            meeting rooms in every major city in India. Book instantly, work
            brilliantly.
          </p>

          {/* Search bar */}
          <div className="relative mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60 sm:flex-row sm:items-center">
            {/* Looking for */}
            <div className="relative flex-1">
              <button
                type="button"
                onClick={() => {
                  setLookingForOpen((v) => !v);
                  setCityOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left hover:bg-slate-50"
              >
                <FiSearch className="h-5 w-5 shrink-0 text-slate-400" />
                <span className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Looking for
                  </span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                    {lookingFor}
                    <FiChevronDown className="h-4 w-4 text-slate-400" />
                  </span>
                </span>
              </button>

              {lookingForOpen && (
                <ul className="absolute left-0 top-full z-20 mt-2 w-56 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl">
                  {LOOKING_FOR_OPTIONS.map((option) => (
                    <li key={option}>
                      <button
                        type="button"
                        onClick={() => {
                          setLookingFor(option);
                          setLookingForOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="hidden h-10 w-px bg-slate-200 sm:block" />
            <div className="relative flex-1">
              <button
                type="button"
                onClick={() => {
                  setCityOpen((v) => !v);
                  setLookingForOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left hover:bg-slate-50"
              >
                <FiMapPin className="h-5 w-5 shrink-0 text-slate-400" />
                <span className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    City
                  </span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                    {selectedCity?.name || "Select City"}
                    <FiChevronDown className="h-4 w-4 text-slate-400" />
                  </span>
                </span>
              </button>

              {cityOpen && (
                <ul className="absolute left-0 top-full z-20 mt-2 max-h-56 w-56 overflow-y-auto rounded-xl border border-slate-100 bg-white shadow-xl">
                  {isLoading && (
                    <li className="px-4 py-2.5 text-sm text-slate-400">
                      Loading...
                    </li>
                  )}
                  {categories.map((cat: any) => (
                    <li key={cat._id}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCity(cat); // 👈 poora object save
                          setCityOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="button"
              onClick={handleSearch}
              disabled={!selectedCity}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              <FiSearch className="h-4 w-4" />
              Search
            </button>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold tracking-wide text-slate-400">
              POPULAR CITIES
            </p>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat: any) => (
                <button
                  key={cat._id}
                  type="button"
                  onClick={() => router.push(`/coworking/${cat.slug}`)} // 👈 direct navigate
                  className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                    selectedCity?.name === cat.name
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {cat.name}
                  <FiMapPin className="h-3.5 w-3.5 text-blue-500" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <ComfortableSpaces />
        </div>
      </div>
    </section>
  );
}