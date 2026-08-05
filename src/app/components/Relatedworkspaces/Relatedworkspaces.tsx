"use client";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import CardComponent from "@/app/components/CardComponent/CardComponent";
import MainHeading from "@/app/components/CommenHeading/MainHeading";
import { useWorkspacesBySlug } from "@/hooks/useWorkspace";

interface RelatedWorkspacesProps {
  citySlug: string;
  currentSlug: string;
  cityName?: string;
}

export default function RelatedWorkspaces({
  citySlug,
  currentSlug,
  cityName,
}: RelatedWorkspacesProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const { data, isLoading } = useWorkspacesBySlug(citySlug);

  const workspaces = (data?.data || []).filter(
    (ws: any) => ws.slug !== currentSlug
  );

  if (isLoading || workspaces.length === 0) return null;

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <MainHeading
          title={` explore similar workspaces ${cityName || citySlug}`}
        />

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
        className="mt-6 !pb-2"
      >
        {workspaces.map((ws: any) => (
          <SwiperSlide key={ws._id}>
            <CardComponent
              item={{
                id: ws._id,
                slug: ws.slug,
                badge: ws.featured ? "POPULAR" : "",
                title: ws.name,
                rating: ws.rating || 0,
                location: ws.address,
                price: ws.plans?.[0]?.price || 0,
                images: ws.images?.map((img: any) => img.url) || [],
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}