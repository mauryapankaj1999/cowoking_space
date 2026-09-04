"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { IoVideocamOutline, IoClose, IoCallOutline, IoCall } from "react-icons/io5";
import { FiTag } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaWhatsapp } from "react-icons/fa";

const PRIMARY = "#003F2D";

interface WorkspaceImage {
  url: string;
  public_id: string;
  _id?: string;
}

interface MulitipleSliderSectionProps {
  images: WorkspaceImage[];
  videoUrl?: string;
  workspaceName?: string;
  galleryImages?: WorkspaceImage[];
  consultant?: {
    name: string;
    phone: string;
    avatar?: string;
  };
}

export default function MulitipleSliderSection({
  images = [],
  galleryImages = [],
  videoUrl = "https://www.youtube.com/embed/tgbNymZ7vqY",
  workspaceName = "this workspace",
  consultant = {
    name: "Our Team",
    phone: "+91 93556 89999",
  },
}: MulitipleSliderSectionProps) {
  const [openVideo, setOpenVideo] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  const [img1, img2, img3, img4, img5] = galleryImages.slice(0, 5);

  const openGalleryAt = (index: number) => {
    setActiveIndex(index);
    setOpenGallery(true);
  };

  const maskPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 6) return phone;
    return `${phone.slice(0, phone.length - 7)}*****${digits.slice(-2)}`;
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
                  className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[40vh] relative cursor-pointer"
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
                  className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[40vh] relative cursor-pointer"
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
            <div className="w-full lg:h-[420px] xl:h-[565px] 2xl:h-80vh] relative">
              {img3 && (
                <Image
                  src={img3.url}
                  alt="workspace"
                  fill
                  className="object-cover"
                />
              )}

              <div className="absolute bottom-4 right-4">
                <ul className="flex gap-2.5">
                  <li
                    onClick={() => setOpenVideo(true)}
                    className="flex items-center gap-2 cursor-pointer rounded-lg border border-white/30 bg-black/40 px-4 py-2.5 text-[13px] font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-black/60"
                  >
                    <IoVideocamOutline size={18} />
                    Play Video
                  </li>
                  <li
                    onClick={() => openGalleryAt(2)}
                    style={{ backgroundColor: PRIMARY }}
                    className="flex items-center gap-2 cursor-pointer rounded-lg px-4 py-2.5 text-[13px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                  >
                    <GrGallery size={15} />
                    View More · {images.length}
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
                  className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[40vh] relative cursor-pointer"
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
                  className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[40vh] relative cursor-pointer"
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

      {openGallery && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-90">
          <div className="flex items-center justify-between p-4 text-white">
            <span className="text-sm">
              {Math.min(activeIndex + 1, images.length + 1)}/{images.length + 1}
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
              className="w-full max-w-5xl h-full slidermapper"
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

              {/* Last slide — contact card */}
              <SwiperSlide>
                <div
                  className="mx-auto flex h-full max-h-[80vh] w-full max-w-[48rem] flex-col items-center justify-center rounded-2xl px-8 py-10 text-center"
                  style={{ backgroundColor: `${PRIMARY}` }}
                >
                  <h3 className="text-2xl font-bold text-white sm:text-[28px]">
                    Interested in {workspaceName}?
                  </h3>

                  <div className="mt-8 flex w-full items-center justify-between gap-4 rounded-xl bg-white/10 p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white/30">
                        {consultant.avatar ? (
                          <Image
                            src={consultant.avatar}
                            alt={consultant.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-white/20 text-lg font-bold text-white">
                            {consultant.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="text-left">
                        <p className="text-[15px] font-bold text-white">
                          {/* {consultant.name} */}
                          Monty verma
                        </p>
                        <p className="text-[13px] text-white/70">
                          {/* {maskPhone(consultant.phone)} */}
                          9911900230
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:9911900230`}
                        className="whitespace-nowrap h-[40px] w-[40px]  flex items-center justify-center rounded-full bg-white font-semibold transition hover:opacity-90"
                        style={{ color: PRIMARY }}
                      >
                      <IoCallOutline className="text-[25px]" />
                      </a>


                      <br />

                      <a
                        href={`https://api.whatsapp.com/send?phone=9911900230`} target="_blank" rel="noopener noreferrer"
                        className=" flex h-[40px] w-[40px] items-center justify-center  whitespace-nowrap rounded-full bg-white  font-semibold transition hover:opacity-90"
                        style={{ color: PRIMARY }}
                      >
                        <FaWhatsapp className="text-[25px]" />

                      </a>
                    </div>

                    
                  </div>

                  <div className="mt-6 border-l-2 border-white/40 pl-4 text-left">
                    <p className="text-[15px] italic leading-relaxed text-white/90">
                      Hi, I’m Monty — your trusted workspace consultant.
                    </p>
                    <p className="mt-1 text-[15px] italic leading-relaxed text-white/90">
                      I help you find the right workspace, schedule tours, and
                      get the best deal.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3 self-start">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
                      <FiTag className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-[14px] font-bold text-white">
                        Price Guarantee
                      </p>
                      <p className="text-[13px] text-white/70">
                        Up to 15% savings through expert negotiation
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}
