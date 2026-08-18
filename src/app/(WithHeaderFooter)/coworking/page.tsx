"use client";
import CardComponent from "@/app/components/CardComponent/CardComponent";
import MainHeading from "@/app/components/CommenHeading/MainHeading";
import React, { useState } from "react";

export default function Page() {
  // const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

const [open, setOpen] = useState(false);
const [selectedSpace, setSelectedSpace] = useState(null);

// const handleOpen = (item) => {
//   setSelectedSpace(item);
//   setOpen(true);
// };


  const tabslist = [
    {
      name: "Udyog Vihar",
    },
    {
      name: "Sector 44",
    },
    {
      name: "Sohna Vihar",
    },
    {
      name: "MG Road",
    },
  ];

  const coworkingSpaces = [
    {
      id: 1,
      badge: "POPULAR",
      title: "91springboard Augusta",
      rating: 4.2,
      location: "Golf Course Road, Gurgaon",
      price: 11999,
      images: [
        "/img/portfolio-11.jpg",
        "/img/portfolio-12.jpg",
        "/img/portfolio-13.jpg",
      ],
    },
    {
      id: 2,
      badge: "PREMIUM",
      title: "Wonder Works",
      rating: 2,
      location: "Sector 32, Gurgaon",
      price: 6999,
      images: [
        "/img/portfolio-12.jpg",
        "/img/portfolio-11.jpg",
        "/img/portfolio-13.jpg",
      ],
    },
    {
      id: 3,
      badge: "",
      title: "Awfis Paras Trinity",
      rating: 3,
      location: "Sector 18, Gurgaon",
      price: 6999,
      images: [
        "/img/portfolio-12.jpg",
        "/img/portfolio-11.jpg",
        "/img/portfolio-13.jpg",
      ],
    },
    {
      id: 4,
      badge: "POPULAR",
      title: "Work To share",
      rating: 3,
      location: "Sector 18, Gurgaon",
      price: 6999,
      images: [
        "/img/worktoshareimg.jpeg",
        "/img/worktoshareimg2.jpeg",
        "/img/portfolio-13.jpg",
      ],
    },
    {
      id: 1,
      badge: "POPULAR",
      title: "91springboard Augusta",
      rating: 4.2,
      location: "Golf Course Road, Gurgaon",
      price: 11999,
      images: [
        "/img/portfolio-11.jpg",
        "/img/portfolio-12.jpg",
        "/img/portfolio-13.jpg",
      ],
    },
    {
      id: 2,
      badge: "PREMIUM",
      title: "Wonder Works",
      rating: 2,
      location: "Sector 32, Gurgaon",
      price: 6999,
      images: [
        "/img/portfolio-12.jpg",
        "/img/portfolio-11.jpg",
        "/img/portfolio-13.jpg",
      ],
    },
    {
      id: 3,
      badge: "",
      title: "Awfis Paras Trinity",
      rating: 3,
      location: "Sector 18, Gurgaon",
      price: 6999,
      images: [
        "/img/portfolio-12.jpg",
        "/img/portfolio-11.jpg",
        "/img/portfolio-13.jpg",
      ],
    },
    {
      id: 4,
      badge: "POPULAR",
      title: "Work To share",
      rating: 3,
      location: "Sector 18, Gurgaon",
      price: 6999,
      images: [
        "/img/worktoshareimg.jpeg",
        "/img/worktoshareimg2.jpeg",
        "/img/portfolio-13.jpg",
      ],
    },
  ];

  return (
    <>


      <section className="bg-white px-10 py-10">
        <div className="mx-auto max-w-7xl">
          <MainHeading title="Coworking Space In Gurgaon" />

          <div className="my-4">
            <ul className="flex gap-4">
              {tabslist.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer border-[0.3px]  px-3 py-[6px] rounded-[5px] border-[#C2C7D1] text-[13px] font-medium transition-all duration-300 ${
                    activeTab === index
                      ? "bg-[#0058BE] text-white "
                      : "border text-slate-500 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10"></div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coworkingSpaces.map((item) => (
              <CardComponent key={item.id} item={item}   
              // onQuoteClick={handleOpen} 
              />
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
}
