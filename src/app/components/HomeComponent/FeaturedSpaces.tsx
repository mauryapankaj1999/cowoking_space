"use client";

import Image from "next/image";
import Link from "next/link";
import { FiStar, FiMapPin, FiArrowRight } from "react-icons/fi";
import MainHeading from "../CommenHeading/MainHeading";

const SPACES = [
  {
    name: "The Hive · Indiranagar",
    city: "Bangalore",
    rating: "4.9",
    price: "8,500",
    image: "/img/smallimg1.jpg",
    link: "/spaces/the-hive-indiranagar",
  },
  {
    name: "Skyline Workhouse",
    city: "Mumbai",
    rating: "4.8",
    price: "12,000",
    image: "/img/smallimg2.jpg",
    link: "/spaces/skyline-workhouse",
  },
  {
    name: "Sunroom Studios",
    city: "Delhi",
    rating: "4.9",
    price: "7,200",
    image: "/img/smallimg3.jpg",
    link: "/spaces/sunroom-studios",
  },
   {
    name: "The Hive · Indiranagar",
    city: "Bangalore",
    rating: "4.9",
    price: "8,500",
    image: "/img/smallimg1.jpg",
    link: "/spaces/the-hive-indiranagar",
  },
];

export default function FeaturedSpaces() {
  return (
    <section className="bg-[#FBF7EF] px-6 py-16 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <MainHeading title="Featured spaces this week" />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPACES.map((space) => (
            <div
              key={space.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-300/60"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900 shadow">
                  Available now
                </span>

                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-900 shadow backdrop-blur-sm">
                  <FiStar className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {space.rating}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#1764D8]">
                  {space.name}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                  <FiMapPin className="h-3.5 w-3.5" />
                  {space.city}
                </p>

                <div className="my-4 h-px w-full bg-slate-100" />

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Starting from</p>
                    <p className="text-base font-bold text-slate-900">
                      ₹{space.price}{" "}
                      <span className="text-sm font-medium text-slate-400">
                        / desk / mo
                      </span>
                    </p>
                  </div>

                  <Link
                    href={space.link}
                    className="group/btn flex items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1764D8]"
                  >
                    View
                    <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}