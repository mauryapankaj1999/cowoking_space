// "use client";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { FaStar } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/pagination";
// import MainHeading from "../CommenHeading/MainHeading";
// import { useTestimonials } from "@/hooks/useTestimonial";



// export default function Testimonials() {
//   const { data, isLoading } = useTestimonials();

//   const testimonials = data?.data || [];
//   console.log("testimonials", testimonials);

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/40 to-blue-50 px-6 py-16 sm:py-12">
//       <div className="mx-auto max-w-7xl">
//         <MainHeading title="Testimonials" />
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           speed={800}
//           spaceBetween={24}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="!pb-12 mt-12"
//         >
//           {testimonials.map((t:any) => (
//             <SwiperSlide key={t.name}>
//               <div className="min-h-[300px] rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
//                 <div className="flex gap-1 text-[#FFB703]">
//                   {Array.from({ length: t.rating }).map((_, i) => (
//                     <FaStar key={i} className="h-5 w-5" />
//                   ))}
//                 </div>

//                 <p className="mt-4 text-[18px] leading-relaxed text-[#667282]">
//                   "{t.description}"
//                 </p>

//                 <div className="mt-6 flex items-center gap-3">
//                   <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-200">
//                     <Image
//                       src={t.image?.url}
//                       alt={t.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-slate-900">{t.name}</p>
//                     <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
//                       {t.designation}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import MainHeading from "../CommenHeading/MainHeading";
import { useTestimonials } from "@/hooks/useTestimonial";

const PRIMARY = "#003F2D";

export default function Testimonials() {
  const { data, isLoading } = useTestimonials();

  const testimonials = data?.data || [];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 sm:py-20">
      {/* decorative background blob */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-[0.05]"
        style={{ backgroundColor: PRIMARY }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          {/* <span
            className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
            style={{ backgroundColor: `${PRIMARY}14`, color: PRIMARY }}
          >
            <FiMessageSquare className="h-3.5 w-3.5" />
            Client stories
          </span> */}
          <MainHeading title="What Our Clients Say" />
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-500">
            Real experiences from teams who found their perfect workspace
            through us.
          </p>
        </div>

        {isLoading ? (
          <p className="mt-12 text-center text-sm text-slate-400">
            Loading testimonials...
          </p>
        ) : testimonials.length === 0 ? (
          <p className="mt-12 text-center text-sm text-slate-400">
            No testimonials yet.
          </p>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={800}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14 mt-14 testimonial-swiper"
          >
            {testimonials.map((t: any) => (
              <SwiperSlide key={t.name} className="!h-auto pb-1">
                <div className="group relative flex h-full min-h-[300px] flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
                  <FiMessageSquare
                    className="absolute right-6 top-6 h-10 w-10 opacity-[0.06]"
                    style={{ color: PRIMARY }}
                  />

                  <div className="flex gap-1 text-[#FFB703]">
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <FaStar key={i} className="h-4 w-4" />
                    ))}
                  </div>

                  <p className="relative mt-4 line-clamp-5 flex-1 text-[16px] leading-relaxed text-slate-600">
                    "{t.description}"
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <div
                      className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2"
                      style={{
                        backgroundColor: "#e2e8f0",
                        borderColor: `${PRIMARY}22`,
                      }}
                    >
                      <Image
                        src={t.image?.url}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 ">
                        {t.name}
                      </p>
                      <p
                        className="text-xs font-medium uppercase tracking-wide "
                        style={{ color: PRIMARY }}
                      >
                        {t.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: ${PRIMARY};
          width: 22px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}