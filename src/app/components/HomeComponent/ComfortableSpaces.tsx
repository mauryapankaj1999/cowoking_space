"use client";
import Image from "next/image";
import Link from "next/link";
import react from "react";
import MainHeading from "../CommenHeading/MainHeading";


const AREAS = [
  {
    label: "Coworking space",
    image: "/img/portfolio-11.jpg",
    flex: "lg:flex-[1] lg:hover:flex-[3]",
  },
  {
    label: "Manage Office Space",
    image: "/img/portfolio-12.jpg",
    flex: "lg:flex-[1] lg:hover:flex-[3.5]",
  },
  {
    label: "virtual office space",
    image: "/img/portfolio-13.jpg",
    flex: "lg:flex-[1] lg:hover:flex-[3]",
  },
  {
    label: "Dedicated Desk",
    image: "/img/portfolio-14.jpg",
    flex: "lg:flex-[1] lg:hover:flex-[3]",
  },
  {
    label: "Coffe & Baverage Room",
    image: "/img/portfolio-15.jpg",
    flex: "lg:flex-[1] lg:hover:flex-[3]",
  },
];

export default function ComfortableSpaces() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
         
          <MainHeading title="" />  
          
        </div>

        <div className="mt-2 flex flex-col gap-4 lg:h-[450px] lg:flex-row">
          {AREAS.map((area) => (
            <div
              key={area.label}
              className={`relative h-54 w-full overflow-hidden rounded-xl transition-[flex-grow] duration-500 ease-in-out lg:h-54 ${area.flex}`}
            >
              <img
                src={area.image}
                alt={area.label}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <span
                className="absolute bottom-6 right-4 text-base font-bold uppercase tracking-wide text-white sm:text-lg"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {area.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}