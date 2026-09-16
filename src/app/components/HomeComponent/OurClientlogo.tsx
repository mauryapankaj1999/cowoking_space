"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import MainHeading from "../CommenHeading/MainHeading";

export default function OurClientlogo() {
 const ourclient = [
    { id: 1, img: "/img/partner_logo/partner1.webp" },
    { id: 2, img: "/img/partner_logo/partner2.webp" },
    { id: 3, img: "/img/partner_logo/partner3.webp" },
    { id: 4, img: "/img/partner_logo/partner4.webp" },
    { id: 5, img: "/img/partner_logo/partner5.webp" },
    { id: 6, img: "/img/partner_logo/partner6.webp" },
    { id: 7, img: "/img/partner_logo/partner7.webp" },
  ];

  return (
    <>
      <section className="bg-white lg:px-6 px-4 py-16 sm:py-20">
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
