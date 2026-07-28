"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CardComponent({ item }: any) {

  const { citySlug } = useParams();

  
  return (
    // <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative">
        <Swiper modules={[Navigation]} navigation loop>
          {item.images.map((img: string, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={item.title}
                className="h-52 w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {
           item.badge && 
        <span
          className={`absolute left-3 top-3 z-20 rounded px-2 py-1 text-[11px] font-semibold text-white ${
            item.badge === "POPULAR" ? "bg-orange-500" : "bg-[#0058BE]"
          }`}
        >
           {item.badge}
        </span>
        } 
      </div>

      {/* <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-[17px] font-semibold">{item.title}</h3>

          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="text-sm font-semibold">{item.rating}</span>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
          <FaMapMarkerAlt />
          <span>{item.location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-[16px] font-bold">
              ₹{item.price.toLocaleString()}
            </span>

            <span className="text-sm text-slate-500"> / month</span>
          </div>

          <button
           onClick={(e) => e.preventDefault()}
          className="rounded bg-[#0058BE] px-4 py-1 text-[12px] font-regular   text-white hover:bg-blue-700">
            Get Quote
          </button>
        </div>
      </div> */}

       <Link href={`/coworking/${citySlug}/${item.slug}`} className="block">
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-[17px] font-semibold">{item.title}</h3>

            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-semibold">{item.rating}</span>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            <FaMapMarkerAlt />
            <span>{item.location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-[16px] font-bold">
                ₹{item.price.toLocaleString()}
              </span>
              <span className="text-sm text-slate-500"> / month</span>
            </div>

            <button
              onClick={(e) => e.preventDefault()} // card-level navigate se conflict na ho
              className="rounded bg-[#0058BE] px-4 py-1 text-[12px] font-regular text-white hover:bg-blue-700"
            >
              Get Quote
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
