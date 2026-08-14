"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import MainHeading from "../CommenHeading/MainHeading";
import { useTestimonials } from "@/hooks/useTestimonial";



export default function Testimonials() {
  const { data, isLoading } = useTestimonials();

  const testimonials = data?.data || [];
  console.log("testimonials", testimonials);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/40 to-blue-50 px-6 py-16 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <MainHeading title="Testimonials" />
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={800}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12 mt-12"
        >
          {testimonials.map((t:any) => (
            <SwiperSlide key={t.name}>
              <div className="min-h-[300px] rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex gap-1 text-[#FFB703]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="h-5 w-5" />
                  ))}
                </div>

                <p className="mt-4 text-[18px] leading-relaxed text-[#667282]">
                  "{t.description}"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-200">
                    <Image
                      src={t.image?.url}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      {t.designation}
                    </p>
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
