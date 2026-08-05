"use client";
import Image from "next/image";
import { useState } from "react";
import { FiSearch, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const categories = [
  "Delhi",
  "Gurgaon",
  "Noida",
  "Faridabad",
//   "Private Office",
//   "Virtual Office",
//   "Day Pass",
//   "Meeting Room",
//   "Event Space",
//   "Training Room",
//   "Podcast Studio",
//   "Enterprise Office",
];

const trustPoints = ["Verified operators", "Real photos", "Zero brokerage"];

export default function HeroSectionNew() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-slate-950 px-6 py-20 sm:py-28">
      <Image
        src="/img/headerimg.jpg"
        alt="Coworking lounge"
        fill
        priority
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl mt-20">
        <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
          Every space, <br />
          in true view.
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
          A flex-workspace marketplace for Delhi-NCR. Accurate pricing, real
          photos and verified listings — shown upfront. Decide in hours, not
          weeks.
        </p>

       <div className="mt-8 flex w-full max-w-xl flex-col gap-2 rounded-full bg-white p-2 shadow-xl sm:flex-row sm:items-center">
  <div className="flex flex-1 items-center gap-3 rounded-full px-5 py-3">
    <FiSearch className="h-5 w-5 shrink-0 text-slate-400" />
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Try 'Gurugram' or 'WeWork'"
      className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
    />
  </div>

  <button
    type="button"
    className="flex items-center justify-center gap-2 rounded-full bg-[#8B2E1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#75261a]"
  >
    Search
    <FiSearch className="h-4 w-4" />
  </button>
</div>

        <div className="mt-6 max-w-xl flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/20"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Trust points */}
        <div className="mt-8 flex flex-wrap max-w-xl items-center gap-x-6 gap-y-2">
          {trustPoints.map((point) => (
            <span
              key={point}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-200"
            >
              <FiCheckCircle className="h-3.5 w-3.5 text-emerald-400" />
              {point}
            </span>
          ))}
        </div>

        {/* Bottom links */}
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
          <span>
            Not sure what you need?{" "}
            <a href="/get-quote" className="font-semibold text-white underline underline-offset-2">
              Get a free quote
            </a>
          </span>
          
           <a  href="/list-your-space"
            className="flex items-center gap-1 font-semibold text-white hover:text-emerald-300"
          >
            Are you an operator? List your space
            <FiArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}