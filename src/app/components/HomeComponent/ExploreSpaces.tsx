"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiBriefcase, FiHome, FiUsers } from "react-icons/fi";
import MainHeading from "../CommenHeading/MainHeading";

const SPACES = [
  {
    title: "Coworking",
    subtitle: "Shared desks & offices",
    image: "/img/smallimg1.jpg",
    icon: FiBriefcase,
    link: "/coworking",
  },
  {
    title: "Coliving",
    subtitle: "Fully furnished stays",
    image: "/img/smallimg2.jpg",
    icon: FiHome,
    link: "/coliving",
  },
  {
    title: "Virtual Office",
    subtitle: "Prestigious addresses",
    image: "/img/smallimg3.jpg",
    icon: FiBriefcase,
    link: "/virtual-office",
  },
  {
    title: "Meeting Rooms",
    subtitle: "By the hour",
    image: "/img/smallimg1.jpg",
    icon: FiUsers,
    link: "/meeting-rooms",
  },
];

export default function ExploreSpaces() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <MainHeading title="Spaces for every kind of work" />
          </div>
          <Link
            href="/spaces"
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-[#1764D8] sm:flex"
          >
            Browse all
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPACES.map((space) => {
            const Icon = space.icon;
            return (
              <Link
                key={space.title}
                href={space.link}
                className="group relative block h-72 overflow-hidden rounded-2xl shadow-md shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-300/60"
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/85" />

                {/* Icon badge */}
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-4 w-4" />
                </span>

                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-bold text-white">
                    {space.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-200 transition-colors duration-300 group-hover:text-amber-300">
                    {space.subtitle}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition group-hover:ring-white/30" />
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/spaces"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#1764D8]"
          >
            Browse all
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}