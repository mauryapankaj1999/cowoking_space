"use client";

import Image from "next/image";
import { FiShield, FiGift, FiHeadphones } from "react-icons/fi";
import MainHeading from "../CommenHeading/MainHeading";

const FEATURES = [
  {
    icon: FiShield,
    title: "Verified Spaces",
    description:
      "Every workspace is hand picked and audited for quality and safety standards.",
  },
  {
    icon: FiGift,
    title: "No Booking Fee",
    description:
      "We don't charge anything for the search or the booking. Our service is 100% free for users.",
  },
  {
    icon: FiHeadphones,
    title: "Expert Support",
    description:
      "Get a dedicated workspace advisor to help you navigate through shortlisting and negotiations.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="relative overflow-hidden  px-6 py-16 sm:py-12">
      {/* <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" /> */}
      {/* <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" /> */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <MainHeading title="What You Get From Us" />
          <div className="mt-9 space-y-7">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="group flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-[#1764D8] shadow-sm shadow-slate-200 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#1764D8] group-hover:text-white group-hover:shadow-md">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="group relative h-52 overflow-hidden rounded-2xl shadow-lg shadow-slate-300/40 sm:h-72">
              <Image
                src="/img/img1.jpg"
                alt="Woman working at a modern desk setup"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="group relative h-40 overflow-hidden rounded-2xl shadow-lg shadow-slate-300/40 sm:h-72">
              <Image
                src="/img/img2.jpg"
                alt="Cozy lounge workspace"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-8">
            <div className="group relative h-52 overflow-hidden rounded-2xl shadow-lg shadow-slate-300/40 sm:h-80">
              <Image
                src="/img/smallimg2.jpg"
                alt="Meeting room with city view"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="group relative h-32 overflow-hidden rounded-2xl shadow-lg shadow-slate-300/40 sm:h-56">
              <Image
                src="/img/smallimg1.jpg"
                alt="Modern office building glass facade"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}