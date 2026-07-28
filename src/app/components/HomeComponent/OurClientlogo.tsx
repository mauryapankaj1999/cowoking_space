"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import MainHeading from "../CommenHeading/MainHeading";

export default function OurClientlogo() {
  const ourclient = [
    { id: 1, img: "/img/logo/partners-01.png" },
    { id: 2, img: "/img/logo/partners-02.png" },
    { id: 3, img: "/img/logo/partners-03.png" },
    { id: 4, img: "/img/logo/partners-04.png" },
    { id: 5, img: "/img/logo/partners-05.png" },
    { id: 6, img: "/img/logo/partners-06.png" },
    { id: 7, img: "/img/logo/partners-07.png" },
    { id: 8, img: "/img/logo/partners-08.png" },
    { id: 9, img: "/img/logo/partners-01.png" },
    { id: 10, img: "/img/logo/partners-01.png" },
  ];

  return (
    <>
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <MainHeading title="Our Clients" />
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
            speed={2000}
          spaceBetween={20}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {ourclient.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.img}
                alt={`Client Logo ${item.id}`}
                className="h-20 w-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
