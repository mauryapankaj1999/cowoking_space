"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface SliderImage {
  url: string;
  public_id?: string;
}

interface MobileSliderProps {
  images?: SliderImage[];
}

export default function MobileSlider({
  images = [],
}: MobileSliderProps) {
  return (
    <div className="w-full min-w-0 overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        observer={true}
        observeParents={true}
        className="mobile-slider w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={img.public_id || index}>
            <div className="relative w-full h-[50vh] sm:h-[60vh]">
              <Image
                src={img.url}
                alt={`gallery-${index}`}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}