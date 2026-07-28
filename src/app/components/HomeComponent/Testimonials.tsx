"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import MainHeading from "../CommenHeading/MainHeading";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "COO, TechFlow India",
     avatar: "/img/smallimg2.jpg",
    rating: 5,
    quote:
      "The transition to our managed office was seamless. Office Spaces handled every detail from IT setup to custom branding, allowing our team to hit the ground running from day one.",
  },
  {
    name: "Vikram Malhotra",
    role: "Managing Partner, Elevate Capital",
    avatar: "/img/smallimg2.jpg",
    rating: 5,
    quote:
      "Finding a premium space in BKC was a challenge until we found Office Spaces. Their curation is unmatched. It's more than a desk; it's a statement for our clients.",
  },
  {
    name: "Sarah Chen",
    role: "Founder, Zenit Global",
    avatar: "/img/smallimg2.jpg",
    rating: 5,
    quote:
      "The virtual office solutions saved us months of paperwork for our GST registration. The process was transparent, professional, and incredibly fast.",
  },
  {
    name: "Rohan Mehta",
    role: "CEO, NimbusWorks",
     avatar: "/img/smallimg2.jpg",
    rating: 5,
    quote:
      "From the first tour to move-in, everything was handled end to end. Our team scaled from 10 to 60 seats without a single hiccup.",
  },
  {
    name: "Vikram Malhotra",
    role: "Managing Partner, Elevate Capital",
     avatar: "/img/smallimg2.jpg",
    rating: 5,
    quote:
      "Finding a premium space in BKC was a challenge until we found Office Spaces. Their curation is unmatched. It's more than a desk; it's a statement for our clients.",
  },
  {
    name: "Sarah Chen",
    role: "Founder, Zenit Global",
    avatar: "/img/smallimg2.jpg",
    rating: 5,
    quote:
      "The virtual office solutions saved us months of paperwork for our GST registration. The process was transparent, professional, and incredibly fast.",
  },
  {
    name: "Rohan Mehta",
    role: "CEO, NimbusWorks",
    avatar: "/img/smallimg2.jpg",
    rating: 5,
    quote:
      "From the first tour to move-in, everything was handled end to end. Our team scaled from 10 to 60 seats without a single hiccup.",
  },
];

export default function Testimonials() {
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
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="min-h-[300px] rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

                <div className="flex gap-1 text-[#FFB703]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="h-5 w-5" />
                  ))}
                </div>

                <p className="mt-4 text-[18px] leading-relaxed text-[#667282]">
                  "{t.quote}"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-200">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      {t.role}
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
