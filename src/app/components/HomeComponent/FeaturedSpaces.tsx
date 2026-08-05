"use client";
import { useRef } from "react";
import Link from "next/link";
import { FiStar, FiMapPin, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MainHeading from "../CommenHeading/MainHeading";
import { useWorkspaces } from "@/hooks/useWorkspace";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

export default function FeaturedSpaces() {
  const { data, isLoading, isError } = useWorkspaces();
  console.log(data, "data from services card main");

  const swiperRef = useRef<SwiperType | null>(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-[#FBF7EF] px-6 py-16 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <MainHeading title="Featured spaces this week" />

          {/* Custom Nav Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-900 hover:text-white"
              aria-label="Previous"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-900 hover:text-white"
              aria-label="Next"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mt-8 !pb-2"
        >
          {data?.data?.map((space: any) => (
            <SwiperSlide key={space._id}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-300/60">
                <div className="relative h-56 w-full overflow-hidden">
                  <Swiper modules={[Navigation]} navigation loop>
                    {space.images?.map((img: any, index: number) => (
                      <SwiperSlide key={index}>
                        <img
                          src={img.url}
                          alt={space.name}
                          className="h-56 w-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* <span className="absolute left-3 top-3 z-10 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900 shadow">
                    Available now
                  </span>

                  <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-900 shadow backdrop-blur-sm">
                    <FiStar className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {space.rating || "4.8"}
                  </span> */}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#1764D8]">
                    {space.name}
                  </h3>

                  <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                    <FiMapPin className="h-3.5 w-3.5" />
                    {space.category?.name}
                  </p>

                  <div className="my-4 h-px w-full bg-slate-100" />

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Starting from</p>

                      <p className="text-base font-bold text-slate-900">
                        ₹{space.plans?.[0]?.price?.toLocaleString() || "0"}
                        <span className="text-sm font-medium text-slate-400">
                          {" "}
                          / desk / mo
                        </span>
                      </p>
                    </div>

                    <Link
                      href={`/coworking/${space.category?.name
                        ?.toLowerCase()
                        .replace(/\s+/g, "-")}/${space.slug}`}
                      className="group/btn flex items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1764D8]"
                    >
                      View
                      <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}