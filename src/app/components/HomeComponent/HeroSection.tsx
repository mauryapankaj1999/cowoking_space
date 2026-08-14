// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { FiSearch, FiMapPin, FiChevronDown } from "react-icons/fi";
// import { FaStar } from "react-icons/fa";
// import FeatureSection from "./FeatureSection";
// import ComfortableSpaces from "./ComfortableSpaces";
// import { useCategories } from "@/hooks/useCategory";

// const LOOKING_FOR_OPTIONS = [
//   "Coworking Space",
//   "Manage Office Space",
//   "virtual office space",
// ];

// export default function HeroSection() {
//   const router = useRouter();

//   const [lookingFor, setLookingFor] = useState(LOOKING_FOR_OPTIONS[0]);
//   const [selectedCity, setSelectedCity] = useState<{
//     name: string;
//     slug: string;
//   } | null>(null);
//   const [lookingForOpen, setLookingForOpen] = useState(false);
//   const [cityOpen, setCityOpen] = useState(false);

//   const { data, isLoading } = useCategories();

//   const categories = data?.data || [];

//   const handleSearch = () => {
//     if (!selectedCity?.slug) return;
//     router.push(`/coworking/${selectedCity.slug}`);
//   };

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/40 to-blue-50 px-6 py-14 sm:py-20 lg:py-20">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
//         <div>
//           <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
//             Find a place to <span className="text-blue-600">work</span>,
//             <br />
//             somewhere to <span className="text-blue-600">live</span>.
//           </h1>

//           <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
//             Discover coworking spaces, coliving homes, virtual offices and
//             meeting rooms in every major city in India. Book instantly, work
//             brilliantly.
//           </p>

//           {/* Search bar */}
//           <div className="relative mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60 sm:flex-row sm:items-center">
//             {/* Looking for */}
//             <div className="relative flex-1">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setLookingForOpen((v) => !v);
//                   setCityOpen(false);
//                 }}
//                 className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left hover:bg-slate-50"
//               >
//                 <FiSearch className="h-5 w-5 shrink-0 text-slate-400" />
//                 <span className="flex flex-col">
//                   <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                     Looking for
//                   </span>
//                   <span className="flex items-center gap-1 text-sm font-semibold text-slate-900">
//                     {lookingFor}
//                     <FiChevronDown className="h-4 w-4 text-slate-400" />
//                   </span>
//                 </span>
//               </button>

//               {lookingForOpen && (
//                 <ul className="absolute left-0 top-full z-20 mt-2 w-56 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl">
//                   {LOOKING_FOR_OPTIONS.map((option) => (
//                     <li key={option}>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setLookingFor(option);
//                           setLookingForOpen(false);
//                         }}
//                         className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         {option}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//             <div className="hidden h-10 w-px bg-slate-200 sm:block" />
//             <div className="relative flex-1">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setCityOpen((v) => !v);
//                   setLookingForOpen(false);
//                 }}
//                 className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left hover:bg-slate-50"
//               >
//                 <FiMapPin className="h-5 w-5 shrink-0 text-slate-400" />
//                 <span className="flex flex-col">
//                   <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                     City
//                   </span>
//                   <span className="flex items-center gap-1 text-sm font-semibold text-slate-900">
//                     {selectedCity?.name || "Select City"}
//                     <FiChevronDown className="h-4 w-4 text-slate-400" />
//                   </span>
//                 </span>
//               </button>

//               {cityOpen && (
//                 <ul className="absolute left-0 top-full z-20 mt-2 max-h-56 w-56 overflow-y-auto rounded-xl border border-slate-100 bg-white shadow-xl">
//                   {isLoading && (
//                     <li className="px-4 py-2.5 text-sm text-slate-400">
//                       Loading...
//                     </li>
//                   )}
//                   {categories.map((cat: any) => (
//                     <li key={cat._id}>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSelectedCity(cat); // 👈 poora object save
//                           setCityOpen(false);
//                         }}
//                         className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         {cat.name}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             <button
//               type="button"
//               onClick={handleSearch}
//               disabled={!selectedCity}
//               className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
//             >
//               <FiSearch className="h-4 w-4" />
//               Search
//             </button>
//           </div>

//           <div className="mt-8">
//             <p className="mb-3 text-xs font-semibold tracking-wide text-slate-400">
//               POPULAR CITIES
//             </p>
//             <div className="flex flex-wrap gap-2.5">
//               {categories.map((cat: any) => (
//                 <button
//                   key={cat._id}
//                   type="button"
//                   onClick={() => router.push(`/coworking/${cat.slug}`)} // 👈 direct navigate
//                   className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition ${
//                     selectedCity?.name === cat.name
//                       ? "border-blue-600 bg-blue-50 text-blue-700"
//                       : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
//                   }`}
//                 >
//                   {cat.name}
//                   <FiMapPin className="h-3.5 w-3.5 text-blue-500" />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="relative">
//           <ComfortableSpaces />
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FiUser, FiPhone, FiMail, FiUsers, FiMapPin, FiX } from "react-icons/fi";
// import ComfortableSpaces from "./ComfortableSpaces";
// import { useCategories } from "@/hooks/useCategory";

// const CITY_OPTIONS = ["Delhi", "Noida", "Gurgaon"];

// export default function HeroSection() {
//   const router = useRouter();

//   const [form, setForm] = useState({ name: "", phone: "", email: "", seats: "" });
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);

//   const { data } = useCategories();
//   const categories = data?.data || [];

//   const openModal = () => {
//     setModalOpen(true);
//     requestAnimationFrame(() => setModalVisible(true));
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setTimeout(() => setModalOpen(false), 200); // exit anim complete hone do
//   };

//   const handleCitySelect = (city: string) => {
//     const match = categories.find(
//       (c: any) => c.name?.toLowerCase() === city.toLowerCase()
//     );
//     closeModal();
//     router.push(`/coworking/${match?.slug || city.toLowerCase()}`);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // TODO: apna API call / lead-submit logic yaha lagao
//     console.log(form);
//   };

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#003F2D] via-[#00543B] to-[#00251b] px-6 py-14 sm:py-20 lg:py-20">
//       {/* ambient glow blobs */}
//       <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#00E0A1]/20 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#00E0A1]/10 blur-3xl" />

//       <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
//         {/* LEFT — Heading + Glass Form */}
//         <div>
//           <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
//             Find a place to <span className="text-[#00E0A1]">work</span>,
//             <br />
//             somewhere to <span className="text-[#00E0A1]">live</span>.
//           </h1>

//           <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
//             Discover coworking spaces, coliving homes, virtual offices and
//             meeting rooms in every major city in India. Book instantly, work
//             brilliantly.
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className="mt-8 max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7"
//           >
//             <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-[#00E0A1]">
//               Book a free tour
//             </p>

//             <div className="space-y-4">
//               <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 focus-within:border-[#00E0A1] transition">
//                 <FiUser className="h-4 w-4 shrink-0 text-white/50" />
//                 <input
//                   type="text"
//                   placeholder="Full name"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
//                   required
//                 />
//               </div>

//               <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 focus-within:border-[#00E0A1] transition">
//                 <FiPhone className="h-4 w-4 shrink-0 text-white/50" />
//                 <input
//                   type="tel"
//                   placeholder="Phone number"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
//                   required
//                 />
//               </div>

//               <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 focus-within:border-[#00E0A1] transition">
//                 <FiMail className="h-4 w-4 shrink-0 text-white/50" />
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
//                   required
//                 />
//               </div>

//               <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 focus-within:border-[#00E0A1] transition">
//                 <FiUsers className="h-4 w-4 shrink-0 text-white/50" />
//                 <input
//                   type="number"
//                   min={1}
//                   placeholder="Number of seats"
//                   value={form.seats}
//                   onChange={(e) => setForm({ ...form, seats: e.target.value })}
//                   className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="mt-6 w-full rounded-xl bg-[#00E0A1] px-6 py-3.5 text-sm font-semibold text-[#003F2D] transition hover:bg-[#00c78d] active:scale-[0.98]"
//             >
//               Get a Callback
//             </button>
//           </form>
//         </div>

//         {/* RIGHT — Slides, click pe city popup */}
//         <div className="relative cursor-pointer" onClick={openModal}>
//           <ComfortableSpaces />
//         </div>
//       </div>

//       {/* City popup */}
//       {modalOpen && (
//         <div
//           className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
//             modalVisible ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={closeModal}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className={`relative w-[90%] max-w-sm rounded-3xl border border-white/20 p-7 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-out ${
//               modalVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
//             }`}
//             style={{ backgroundColor: "rgba(0,63,45,0.8)" }}
//           >
//             <button
//               onClick={closeModal}
//               className="absolute right-4 top-4 text-white/60 hover:text-white"
//             >
//               <FiX className="h-5 w-5" />
//             </button>

//             <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#00E0A1]">
//               Choose a city
//             </p>
//             <h3 className="mb-6 text-xl font-bold text-white">
//               Where do you want to work?
//             </h3>

//             <div className="space-y-3">
//               {CITY_OPTIONS.map((city) => (
//                 <button
//                   key={city}
//                   onClick={() => handleCitySelect(city)}
//                   className="flex w-full items-center justify-between rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-left text-sm font-medium text-white transition hover:border-[#00E0A1] hover:bg-white/10"
//                 >
//                   {city}
//                   <FiMapPin className="h-4 w-4 text-[#00E0A1]" />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }





// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FiUser, FiPhone, FiMail, FiUsers, FiMapPin, FiX } from "react-icons/fi";
// import ComfortableSpaces from "./ComfortableSpaces";
// import { useCategories } from "@/hooks/useCategory";

// const CITY_OPTIONS = ["Delhi", "Noida", "Gurgaon"];
// const PRIMARY = "#003F2D";

// export default function HeroSection() {
//   const router = useRouter();

//   const [form, setForm] = useState({ name: "", phone: "", email: "", seats: "" });
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);

//   const { data } = useCategories();
//   const categories = data?.data || [];

//   const openModal = () => {
//     setModalOpen(true);
//     requestAnimationFrame(() => setModalVisible(true));
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setTimeout(() => setModalOpen(false), 200);
//   };

//   const handleCitySelect = (city: string) => {
//     const match = categories.find(
//       (c: any) => c.name?.toLowerCase() === city.toLowerCase()
//     );
//     closeModal();
//     router.push(`/coworking/${match?.slug || city.toLowerCase()}`);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/40 to-blue-50 px-6 py-14 sm:py-20 lg:py-12">
//       <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
//         <div>
//           <form
//             onSubmit={handleSubmit}
//             className=" rounded-3xl border border-white/60 bg-white/40 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl sm:p-7"
//           >
//             <p
//               className="mb-5 text-sm font-semibold uppercase tracking-wide"
//               style={{ color: PRIMARY }}
//             >
//               Book a free tour
//             </p>

//             <div className="space-y-4">
//               <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/60 px-4 py-3 transition focus-within:border-[#003F2D]">
//                 <FiUser className="h-4 w-4 shrink-0 text-slate-400" />
//                 <input
//                   type="text"
//                   placeholder="Full name"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
//                   required
//                 />
//               </div>

//               <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/60 px-4 py-3 transition focus-within:border-[#003F2D]">
//                 <FiPhone className="h-4 w-4 shrink-0 text-slate-400" />
//                 <input
//                   type="tel"
//                   placeholder="Phone number"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
//                   required
//                 />
//               </div>

//               <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/60 px-4 py-3 transition focus-within:border-[#003F2D]">
//                 <FiMail className="h-4 w-4 shrink-0 text-slate-400" />
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
//                   required
//                 />
//               </div>

//               <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/60 px-4 py-3 transition focus-within:border-[#003F2D]">
//                 <FiUsers className="h-4 w-4 shrink-0 text-slate-400" />
//                 <input
//                   type="number"
//                   min={1}
//                   placeholder="Number of seats"
//                   value={form.seats}
//                   onChange={(e) => setForm({ ...form, seats: e.target.value })}
//                   className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               style={{ backgroundColor: PRIMARY }}
//               className="mt-6 w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
//             >
//               Get a Callback
//             </button>
//           </form>
//         </div>

//         {/* RIGHT — Slides, click pe city popup */}
//         <div className="relative cursor-pointer" onClick={openModal}>
//           <ComfortableSpaces />
//         </div>
//       </div>

//       {/* City popup */}
//       {modalOpen && (
//         <div
//           className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm transition-opacity duration-200 ${
//             modalVisible ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={closeModal}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className={`relative w-[90%] max-w-sm rounded-3xl border border-white/60 bg-white/70 p-7 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-out ${
//               modalVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
//             }`}
//           >
//             <button
//               onClick={closeModal}
//               className="absolute right-4 top-4 text-slate-400 hover:text-slate-700"
//             >
//               <FiX className="h-5 w-5" />
//             </button>

//             <p
//               className="mb-1 text-xs font-semibold uppercase tracking-wide"
//               style={{ color: PRIMARY }}
//             >
//               Choose a city
//             </p>
//             <h3 className="mb-6 text-xl font-bold text-slate-900">
//               Where do you want to work?
//             </h3>

//             <div className="space-y-3">
//               {CITY_OPTIONS.map((city) => (
//                 <button
//                   key={city}
//                   onClick={() => handleCitySelect(city)}
//                   className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-left text-sm font-medium text-slate-700 transition hover:border-[#003F2D] hover:bg-slate-50"
//                 >
//                   {city}
//                   <FiMapPin className="h-4 w-4" style={{ color: PRIMARY }} />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiUser, FiPhone, FiMail, FiUsers, FiMapPin, FiX, FiCheck } from "react-icons/fi";
import ComfortableSpaces from "./ComfortableSpaces";
import { useCategories } from "@/hooks/useCategory";

const CITY_OPTIONS = ["Delhi", "Noida", "Gurgaon"];
const PRIMARY = "#003F2D";

interface Category {
  name: string;
  slug: string;
}

interface TourForm {
  name: string;
  phone: string;
  email: string;
  seats: string;
}

const emptyForm: TourForm = { name: "", phone: "", email: "", seats: "" };

export default function HeroSection() {
  const router = useRouter();

  const [form, setForm] = useState<TourForm>(emptyForm);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { data } = useCategories();
  const categories: Category[] = data?.data || [];

  // Close modal on Escape key
  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const openModal = () => {
    setModalOpen(true);
    requestAnimationFrame(() => setModalVisible(true));
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setModalOpen(false), 200);
  };

  const handleCitySelect = (city: string) => {
    const match = categories.find(
      (c) => c.name?.toLowerCase() === city.toLowerCase()
    );
    closeModal();
    router.push(`/coworking/${match?.slug || city.toLowerCase()}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    try {
      // TODO: replace with actual lead-submission API call
      console.log(form);
      await new Promise((resolve) => setTimeout(resolve, 600));

      setSubmitted(true);
      setForm(emptyForm);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Failed to submit tour request", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/40 to-blue-50 px-6 py-14 sm:py-20 lg:py-12">
      <div className="mx-auto grid w-[90%] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/60 bg-white p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl sm:p-7"
          >
            <p
              className="mb-5 text-sm font-semibold uppercase tracking-wide"
              style={{ color: PRIMARY }}
            >
              Book a free tour
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/60 px-4 py-3 transition focus-within:border-[#003F2D]">
                <FiUser className="h-4 w-4 shrink-0 text-slate-400" />
                <input
                  type="text"
                  aria-label="Full name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/40 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  required
                  minLength={2}
                />
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/60 px-4 py-3 transition focus-within:border-[#003F2D]">
                <FiPhone className="h-4 w-4 shrink-0 text-slate-400" />
                <input
                  type="tel"
                  aria-label="Phone number"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  required
                  pattern="[0-9+\-\s]{10,15}"
                  title="Enter a valid phone number"
                />
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/60 px-4 py-3 transition focus-within:border-[#003F2D]">
                <FiMail className="h-4 w-4 shrink-0 text-slate-400" />
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/60 px-4 py-3 transition focus-within:border-[#003F2D]">
                <FiUsers className="h-4 w-4 shrink-0 text-slate-400" />
                <input
                  type="number"
                  aria-label="Number of seats"
                  min={1}
                  placeholder="Number of seats"
                  value={form.seats}
                  onChange={(e) => setForm({ ...form, seats: e.target.value })}
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{ backgroundColor: PRIMARY }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitted ? (
                <>
                  <FiCheck className="h-4 w-4" />
                  Request Sent
                </>
              ) : submitting ? (
                "Sending..."
              ) : (
                "Get a Callback"
              )}
            </button>
          </form>
        </div>

        {/* RIGHT — Slides, click pe city popup */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Choose your city to explore coworking spaces"
          className="relative cursor-pointer"
          onClick={openModal}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openModal()}
        >
          <ComfortableSpaces />
        </div>
      </div>

      {/* City popup */}
      {modalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm transition-opacity duration-200 ${
            modalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="city-modal-title"
            onClick={(e) => e.stopPropagation()}
            className={`relative w-[90%] max-w-sm rounded-3xl border border-white/60 bg-white/70 p-7 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-out ${
              modalVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-4 top-4 text-slate-400 transition hover:text-slate-700"
            >
              <FiX className="h-5 w-5" />
            </button>

            <p
              className="mb-1 text-xs font-semibold uppercase tracking-wide"
              style={{ color: PRIMARY }}
            >
              Choose a city
            </p>
            <h3 id="city-modal-title" className="mb-6 text-xl font-bold text-slate-900">
              Where do you want to work?
            </h3>

            <div className="space-y-3">
              {CITY_OPTIONS.map((city) => (
                <button
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-left text-sm font-medium text-slate-700 transition hover:border-[#003F2D] hover:bg-slate-50"
                >
                  {city}
                  <FiMapPin className="h-4 w-4" style={{ color: PRIMARY }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}