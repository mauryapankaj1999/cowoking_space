import Image from "next/image";
import React from "react";
import { GrGallery } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5";

export default function MulitipleSliderSection() {
  return (
    <>
      <div className="lg:block hidden">
        <div className="grid grid-cols-10 gap-1 ">
          <div className="col-span-2 ">
            <div className="flex flex-col gap-1">
              <div className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[300px] relative">
                <Image
                  src="/img/logo/detailsimg1.jpg"
                  alt="slider"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[300px] relative">
                <Image
                  src="/img/logo/detailsimg2.jpg"
                  alt="slider"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="w-full lg:h-[420px] xl:h-[565px] 2xl:h-[37.9rem] relative">
              <Image
                src="/img/logo/detailsimg3.jpeg"
                alt="slider"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-4 right-4">
                <div className="">
                    <ul className="flex gap-2">
                        <li className="flex gap-2 items-center cursor-pointer bg-navibule bg-opacity-50 border  border-[#ffffff80] text-white lg:py-2 2xl:p-2 rounded-md font-montserrat xl:text-[0.8rem] 2xl:text-[1rem] px-5 hover:bg-[#da6633] hover:border-[#da6633]">
                            
                        <IoVideocamOutline size={20} />
    Play Video
                        </li>
                        <li className="flex gap-2 items-center cursor-pointer bg-navibule bg-opacity-50 border  border-[#ffffff80] text-white lg:py-2 2xl:p-2 rounded-md font-montserrat xl:text-[0.8rem] 2xl:text-[1rem] px-5 hover:bg-[#da6633] hover:border-[#da6633]">
                            <GrGallery />

                            View More</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-1">
              <div className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[300px] relative">
                <Image
                  src="/img/logo/detailsimg4.jpeg"
                  alt="slider"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:h-[208px] xl:h-[280px] 2xl:h-[300px] relative">
                <Image
                  src="/img/logo/detailsimg5.jpeg"
                  alt="slider"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
