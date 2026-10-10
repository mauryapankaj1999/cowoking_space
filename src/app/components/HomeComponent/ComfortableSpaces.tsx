// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import react from "react";
// import MainHeading from "../CommenHeading/MainHeading";


// const AREAS = [
//   {
//     label: "Coworking space",
//     image: "/img/portfolio-11.jpg",
//     flex: "lg:flex-[1] lg:hover:flex-[3]",
//   },
//   {
//     label: "Manage Office Space",
//     image: "/img/portfolio-12.jpg",
//     flex: "lg:flex-[1] lg:hover:flex-[3.5]",
//   },
//   {
//     label: "virtual office space",
//     image: "/img/portfolio-13.jpg",
//     flex: "lg:flex-[1] lg:hover:flex-[3]",
//   },
//   {
//     label: "Dedicated Desk",
//     image: "/img/portfolio-14.jpg",
//     flex: "lg:flex-[1] lg:hover:flex-[3]",
//   },
//   {
//     label: "Coffe & Baverage Room",
//     image: "/img/portfolio-15.jpg",
//     flex: "lg:flex-[1] lg:hover:flex-[3]",
//   },
// ];

// export default function ComfortableSpaces() {
//   return (
//     <section className="px-6">
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-6">
         
//           <MainHeading title="" />  
          
//         </div>

//         <div className="mt-2 flex flex-col gap-4 lg:h-[450px] lg:flex-row">
//           {AREAS.map((area) => (
//             <div
//               key={area.label}
//               className={`relative h-54 w-full overflow-hidden rounded-xl transition-[flex-grow] duration-500 ease-in-out lg:h-54 ${area.flex}`}
//             // className={`relative w-full flex-1 min-h-0 overflow-hidden rounded-xl transition-[flex-grow] duration-500 ease-in-out lg:flex-none ${area.flex}`}
//             >
//               <img
//                 src={area.image}
//                 alt={area.label}
//                 className="absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

//               <span
//                 className="absolute bottom-6 right-4 text-base font-bold uppercase tracking-wide text-white sm:text-lg"
//                 style={{
//                   writingMode: "vertical-rl",
//                   transform: "rotate(180deg)",
//                 }}
//               >
//                 {area.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // "use client";

// // import Image from "next/image";
// // import MainHeading from "../CommenHeading/MainHeading";

// // const AREAS = [
// //   {
// //     label: "Coworking space",
// //     image: "/img/portfolio-11.jpg",
// //     flex: "lg:flex-[1] lg:hover:flex-[3]",
// //   },
// //   {
// //     label: "Manage Office Space",
// //     image: "/img/portfolio-12.jpg",
// //     flex: "lg:flex-[1] lg:hover:flex-[3.5]",
// //   },
// //   {
// //     label: "Virtual Office Space",
// //     image: "/img/portfolio-13.jpg",
// //     flex: "lg:flex-[1] lg:hover:flex-[3]",
// //   },
// //   {
// //     label: "Dedicated Desk",
// //     image: "/img/portfolio-14.jpg",
// //     flex: "lg:flex-[1] lg:hover:flex-[3]",
// //   },
// //   {
// //     label: "Coffee & Beverage Room",
// //     image: "/img/portfolio-15.jpg",
// //     flex: "lg:flex-[1] lg:hover:flex-[3]",
// //   },
// // ];

// // export default function ComfortableSpaces() {
// //   return (
// //     <section className="w-full px-0 sm:px-2 lg:px-6">
// //       <div className="mx-auto w-full max-w-7xl">

// //         {/* Heading */}
// //         <div className="mb-6">
// //           <MainHeading title="" />
// //         </div>

// //         {/* Spaces */}
// //         <div className="mt-2 flex w-full flex-col gap-4 lg:h-[450px] lg:flex-row">

// //           {AREAS.map((area) => (
// //             <div
// //               key={area.label}
// //               className={`
// //                 relative
// //                 h-[90px]
// //                 w-full
// //                 overflow-hidden
// //                 rounded-xl
// //                 transition-[flex-grow]
// //                 duration-500
// //                 ease-in-out
// //                 sm:h-[280px]
// //                 lg:h-full
// //                 lg:min-h-0
// //                 ${area.flex}
// //               `}
// //             >
// //               {/* Image */}
// //               <Image
// //                 src={area.image}
// //                 alt={area.label}
// //                 fill
// //                 sizes="(max-width: 1024px) 100vw, 20vw"
// //                 className="object-cover"
// //               />

// //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

// //               <span
// //                 className="
// //                   absolute
// //                   bottom-6
// //                   right-4
// //                   text-base
// //                   font-bold
// //                   uppercase
// //                   tracking-wide
// //                   text-white
// //                   sm:text-[14px]

// //                   lg:bottom-6
// //                   lg:right-4
// //                 "
// //               >
// //                 {area.label}
// //               </span>
// //             </div>
// //           ))}

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


"use client";

import MainHeading from "../CommenHeading/MainHeading";

const AREAS = [
  {
    label: "Coworking space",
    image: "/img/portfolio-11.jpg",
    flex: "lg:hover:flex-[3]",
  },
  {
    label: "Manage Office Space",
    image: "/img/portfolio-12.jpg",
    flex: "lg:hover:flex-[3.5]",
  },
  {
    label: "Virtual Office Space",
    image: "/img/portfolio-13.jpg",
    flex: "lg:hover:flex-[3]",
  },
  {
    label: "Dedicated Desk",
    image: "/img/portfolio-14.jpg",
    flex: "lg:hover:flex-[3]",
  },
  {
    label: "Coffee & Beverage Room",
    image: "/img/portfolio-15.jpg",
    flex: "lg:hover:flex-[3]",
  },
];

export default function ComfortableSpaces() {
  return (
    <section className="w-full px-4 sm:px-6">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-6">
          <MainHeading title="" />
        </div>

        {/* Responsive spaces */}
        <div className="mt-2 flex w-full flex-col gap-3 sm:gap-4 lg:h-[450px] lg:flex-row">
          {AREAS.map((area) => (
            <div
              key={area.label}
              className={`group relative h-[100px] w-full min-w-0 overflow-hidden rounded-xl transition-[flex-grow] duration-500 ease-in-out sm:h-[180px] md:h-[240px] lg:h-full lg:flex-1 ${area.flex}`}
            >
              {/* Background image */}
              <img
                src={area.image}
                alt={area.label}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Label */}
          <span className="absolute bottom-4 left-4 right-4 text-sm font-bold uppercase tracking-wide text-white lg:hidden">
  {area.label}
</span>

{/* Desktop: vertical text */}
<span
  className="absolute bottom-6 right-4 hidden text-lg font-bold uppercase tracking-wide text-white lg:block"
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
