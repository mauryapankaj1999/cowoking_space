// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";

// export default function CardComponent({ item }: any) {

//   const { citySlug } = useParams();

  
//   return (
//     <div className="group overflow-hidden rounded-xl card-lift border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
//       <div className="relative">
//         <Swiper modules={[Navigation]} navigation loop>
//           {item.images.map((img: string, index: number) => (
//             <SwiperSlide key={index} className="relative ">
//               <div className="aspect-[3/2] w-full">

//               <img
//                 src={img}
//                 alt={item.title}
//                 className="h-80  w-full object-cover"
//                 />
//                 </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {
//            item.badge && 
//         <span
//           className={`absolute left-3 top-3 z-20 rounded px-2 py-1 text-[11px] font-semibold text-white ${
//             item.badge === "POPULAR" ? "bg-orange-500" : "bg-[#0058BE]"
//           }`}
//         >
//            {item.badge}
//         </span>
//         } 
//       </div>

      

//        <Link href={`/coworking/${citySlug}/${item.slug}`} className="block">
//         <div className="p-4">
//           <div className="mb-2 flex items-center justify-between">
//             <h3 className="text-[17px] font-semibold">{item.title}</h3>

//             <div className="flex items-center gap-1">
//               <FaStar className="text-yellow-500" />
//               <span className="text-sm font-semibold">{item.rating}</span>
//             </div>
//           </div>

//           <div className="mb-4 flex items-center gap-2 text-sm text-slate-500 ">
//             <FaMapMarkerAlt />
//             <span className="line-clamp-1">{item.location}</span>
//           </div>

//           <div className="flex items-center justify-between">
//             <div>
//               <span className="text-[16px] font-bold">
//                 ₹{item.price.toLocaleString()}
//               </span>
//               <span className="text-sm text-slate-500"> / month</span>
//             </div>

//             <button
//               onClick={(e) => e.preventDefault()} // card-level navigate se conflict na ho
//               className="rounded bg-[#0058BE] px-4 py-1 text-[12px] font-regular text-white hover:bg-blue-700"
//             >
//               Get Quote
//             </button>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }


"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import EnquiryModal from "../CommonModal/EnquiryModal";
import { useState } from "react";

export default function CardComponent({ item }: any) {
  const { citySlug } = useParams();
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="card-lift group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300">
      <div className="relative overflow-hidden">
        <Swiper modules={[Navigation]} navigation loop>
          {item.images.map((img: string, index: number) => (
            <SwiperSlide key={index} className="relative">
              <div className="aspect-[3/2] w-full overflow-hidden">
                <img
                  src={img}
                  alt={item.title}
                  className="h-80 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {item.badge && (
          <span
            className={`absolute left-3 top-3 z-20 rounded px-2 py-1 text-[11px] font-semibold text-white ${
              item.badge === "POPULAR" ? "bg-orange-500" : "bg-[#0058BE]"
            }`}
            >
            {item.badge}
          </span>
        )}
      </div>

      <Link href={`/coworking/${citySlug}/${item.slug}`} className="block">
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-[17px] font-semibold">{item.title}</h3>

            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-semibold">{item.rating}</span>
            </div>
          </div>

          <div className=" flex items-center gap-2 text-sm text-slate-500">
            <FaMapMarkerAlt />
            <span className="line-clamp-1">{item.location}</span>
          </div>

            <hr className="my-2" />

          <div className="flex items-center justify-between mt-3">
            <div>
              <h4 className="text-[10px] mb-0 font-semibold text-slate-500">FROM</h4>
              <span className="text-[26px] font-bold text-primary">
                ₹{item.price.toLocaleString()}
              </span>
              <h2 className="text-sm text-slate-500">per seat / monthly</h2>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
              className="rounded bg-white tracking-wide px-4 py-1.5 border-primary border text-[13px] font-semibold text-primary hover:bg-primary hover:text-white"
              >
              Get Quote
            </button>
          </div>
        </div>
      </Link>
    </div>
     {open && ( 
              <EnquiryModal
                open={open}
                onClose={() => setOpen(false)}
                space={ item }
              />
            )}
              </>
  );
}