"use client";
import Image from "next/image";
import { FiShield, FiGift, FiHeadphones, FiCheck } from "react-icons/fi";
import MainHeading from "../CommenHeading/MainHeading";

const PRIMARY = "#003F2D";

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
    <section className="relative overflow-hidden bg-white px-6 py-16 sm:py-20">
      
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-[0.06]"
        style={{ backgroundColor: PRIMARY }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
         

          <MainHeading title="What You Get From Us" />

          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-500">
            From search to signature, we make finding your next workspace
            simple, transparent and completely free.
          </p>

          <div className="mt-10 space-y-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group flex gap-4 rounded-2xl p-3 transition-colors duration-300 hover:bg-slate-50"
                >
                  <span
                    className="flex  h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-white"
                    style={{
                      borderColor: `${PRIMARY}22`,
                      color: PRIMARY,
                      backgroundColor: "white",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = PRIMARY;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                    }}
                  >
                    <Icon className="h-5 w-5 hover:text-white" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            <div className="group relative h-40 overflow-hidden rounded-2xl shadow-lg shadow-slate-300/40 sm:h-72">
              <Image
                src="/img/img2.jpg"
                alt="Cozy lounge workspace"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            <div className="group relative h-32 overflow-hidden rounded-2xl shadow-lg shadow-slate-300/40 sm:h-56">
              <Image
                src="/img/smallimg1.jpg"
                alt="Modern office building glass facade"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-xl shadow-slate-300/50 sm:flex">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: PRIMARY }}
            >
              <FiCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">5,000+</p>
              <p className="text-xs text-slate-500">Verified workspaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}