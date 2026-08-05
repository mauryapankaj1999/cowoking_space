"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface WorkspaceImage {
  url: string;
  public_id: string;
  _id?: string;
}

interface MulitipleSliderSectionProps {
  images: WorkspaceImage[];
  videoUrl?: string;
}

export default function MulitipleSliderSection({
  images = [],
  videoUrl = "https://www.youtube.com/embed/tgbNymZ7vqY",
}: MulitipleSliderSectionProps) {
  const [openVideo, setOpenVideo] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  const [img1, img2, img3, img4, img5] = images;

  const openGalleryAt = (index: number) => {
    setActiveIndex(index);
    setOpenGallery(true);
  };

  return (
    <>
      <div className="lg:block hidden">
        <div className="grid grid-cols-10 gap-1">
          <div className="col-span-2">
            <div className="flex flex-col gap-1">
              {img1 && (
                <div
                  onClick={() => openGalleryAt(0)}
                  className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[300px] relative cursor-pointer"
                >
                  <Image
                    src={img1.url}
                    alt="workspace"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {img2 && (
                <div
                  onClick={() => openGalleryAt(1)}
                  className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[300px] relative cursor-pointer"
                >
                  <Image
                    src={img2.url}
                    alt="workspace"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="col-span-6">
            <div className="w-full lg:h-[420px] xl:h-[565px] 2xl:h-[37.9rem] relative">
              {img3 && (
                <Image
                  src={img3.url}
                  alt="workspace"
                  fill
                  className="object-cover"
                />
              )}

              <div className="absolute bottom-4 right-4">
                <ul className="flex gap-2">
                  <li
                    onClick={() => setOpenVideo(true)}
                    className="flex gap-2 items-center cursor-pointer bg-navibule bg-opacity-50 border border-[#ffffff80] text-white lg:py-2 2xl:p-2 rounded-md font-montserrat xl:text-[0.8rem] 2xl:text-[1rem] px-5 hover:bg-[#da6633] hover:border-[#da6633]"
                  >
                    <IoVideocamOutline size={20} />
                    Play Video
                  </li>
                  <li
                    onClick={() => openGalleryAt(2)}
                    className="flex gap-2 items-center cursor-pointer bg-navibule bg-opacity-50 border border-[#ffffff80] text-white lg:py-2 2xl:p-2 rounded-md font-montserrat xl:text-[0.8rem] 2xl:text-[1rem] px-5 hover:bg-[#da6633] hover:border-[#da6633]"
                  >
                    <GrGallery />
                    View More
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex flex-col gap-1">
              {img4 && (
                <div
                  onClick={() => openGalleryAt(3)}
                  className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[300px] relative cursor-pointer"
                >
                  <Image
                    src={img4.url}
                    alt="workspace"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {img5 && (
                <div
                  onClick={() => openGalleryAt(4)}
                  className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[300px] relative cursor-pointer"
                >
                  <Image
                    src={img5.url}
                    alt="workspace"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {openVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <button
            onClick={() => setOpenVideo(false)}
            className="absolute top-6 right-6 text-white z-50"
          >
            <IoClose size={32} />
          </button>
          <div className="relative w-full max-w-3xl p-4">
            <div className="relative w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Modal with Swiper */}
      {openGallery && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-90">
          <div className="flex items-center justify-between p-4 text-white">
            <span className="text-sm">
              {activeIndex + 1}/{images.length}
            </span>
            <button onClick={() => setOpenGallery(false)}>
              <IoClose size={28} />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center px-4 pb-6">
            <Swiper
              modules={[Navigation]}
              navigation
              initialSlide={activeIndex}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full max-w-5xl h-full"
            >
              {images.map((img, i) => (
                <SwiperSlide key={img.public_id || i}>
                  <div className="relative w-full h-full max-h-[80vh]">
                    <Image
                      src={img.url}
                      alt={`gallery-${i}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}