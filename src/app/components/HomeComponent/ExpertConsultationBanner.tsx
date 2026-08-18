// "use client";
// import { useState } from "react";
// import { FiUserCheck } from "react-icons/fi";
// import EnquiryModal from "../CommonModal/EnquiryModal";

// const PRIMARY = "#003F2D";

// export default function ExpertConsultationBanner() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <section
//         className="px-6 py-6"
//         style={{ backgroundColor: `${PRIMARY}1A` }} // primary color @ 10% opacity
//       >
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
//           <div className="flex items-center gap-4">
//             <div
//               className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
//               style={{ backgroundColor: `${PRIMARY}26` }} // slightly darker tint for icon bg
//             >
//               <FiUserCheck className="h-5 w-5" style={{ color: PRIMARY }} />
//             </div>

//             <div>
//               <h3 className="text-[15px] font-semibold text-slate-900 sm:text-base">
//                 Need expert consultation to upgrade your office space?
//               </h3>
//               <p className="mt-0.5 text-[13px] text-slate-600">
//                 Talk to our dedicated enterprise manager for comprehensive and
//                 cost-effective rentals for premium office spaces.
//               </p>
//             </div>
//           </div>

//           <button
//             onClick={() => setOpen(true)}
//             style={{ backgroundColor: PRIMARY }}
//             className="shrink-0 whitespace-nowrap rounded-lg px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
//           >
//             Talk to an expert
//           </button>
//         </div>
//       </section>

//       {open && (
//         <EnquiryModal
//           open={open}
//           onClose={() => setOpen(false)}
//           space={null}
//         />
//       )}
//     </>
//   );
// }


"use client";
import { useState } from "react";
import { FiUserCheck, FiPhoneCall, FiCheckCircle } from "react-icons/fi";
import EnquiryModal from "../CommonModal/EnquiryModal";

const PRIMARY = "#003F2D";

export default function ExpertConsultationBanner() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/headerimg.jpg')" }}
        />
        {/* Dark overlay for readability, tinted with primary color */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(110deg, ${PRIMARY}F2 0%, ${PRIMARY}D9 45%, ${PRIMARY}99 100%)`,
          }}
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-16 sm:py-20 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            {/* <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              <FiUserCheck className="h-3.5 w-3.5" />
              Enterprise consultation
            </span> */}

            <h2 className="mt-5 text-2xl font-financierDisplay  font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
              Need expert consultation to upgrade your office space?
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-white/80 sm:text-base">
              Talk to our dedicated enterprise manager for comprehensive and
              cost-effective rentals for premium office spaces — tailored to
              your team's exact needs.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {[
                "Free consultation",
                "Zero brokerage",
                "Pan-India network",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-[13px] font-medium text-white/90"
                >
                  <FiCheckCircle className="h-4 w-4 shrink-0 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full shrink-0 flex-col items-start gap-4 sm:w-auto sm:items-center">
            <button
              onClick={() => setOpen(true)}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-[15px] font-semibold shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.98] sm:w-auto"
              style={{ color: PRIMARY }}
            >
              <FiPhoneCall className="h-4 w-4 transition-transform group-hover:rotate-12" />
              Talk to an expert
            </button>
            {/* <p className="text-[12px] text-white/60">
              Response within one business hour
            </p> */}
          </div>
        </div>
      </section>

      {open && (
        <EnquiryModal open={open} onClose={() => setOpen(false)} space={null} />
      )}
    </>
  );
}