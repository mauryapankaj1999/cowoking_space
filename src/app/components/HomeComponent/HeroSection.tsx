// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiUsers,
//   FiMapPin,
//   FiX,
// } from "react-icons/fi";
// import ComfortableSpaces from "./ComfortableSpaces";
// import { useCategories } from "@/hooks/useCategory";
// import MainHeading from "../CommenHeading/MainHeading";
// import ThankYouPopup from "../CommenComponent/ThankYouPopup";

// const CITY_OPTIONS = ["Delhi", "Noida", "Gurgaon"];
// const PRIMARY = "#003F2D";

// interface Category {
//   name: string;
//   slug: string;
// }

// interface TourForm {
//   name: string;
//   companyName: string;
//   workEmail: string;
//   phone: string;
//   seats: string;
//   preferredLocation: string;
// }

// const emptyForm: TourForm = {
//   name: "",
//   companyName: "",
//   workEmail: "",
//   phone: "",
//   seats: "",
//   preferredLocation: "",
// };

// export default function HeroSection() {
//   const router = useRouter();

//   const [form, setForm] = useState<TourForm>(emptyForm);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [showThankYou, setShowThankYou] = useState(false);

//   const { data } = useCategories();
//   const categories: Category[] = data?.data || [];

//   useEffect(() => {
//     if (!modalOpen) return;
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [modalOpen]);

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
//       (c) => c.name?.toLowerCase() === city.toLowerCase()
//     );
//     closeModal();
//     router.push(`/coworking/${match?.slug || city.toLowerCase()}`);
//   };

//   const handleChange = (field: keyof TourForm, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (submitting) return;

//     setSubmitting(true);
//     try {
//       console.log(form);
//       await new Promise((resolve) => setTimeout(resolve, 600));

//       setForm(emptyForm);
//       setShowThankYou(true); // 👈 form submit hote hi popup
//     } catch (error) {
//       console.error("Failed to submit tour request", error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/40 to-blue-50 lg:px-6 px-4 py-14 sm:py-20 lg:py-12">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
//         {/* LEFT — Form */}
//         <div>
//           <form
//             onSubmit={handleSubmit}
//             className="rounded-3xl border border-white/60 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8"
//           >
//             <MainHeading title="Book a free tour" />

//             <p className="mb-6 text-[13px] text-slate-500 mt-2">
//               Share your details and our team will reach out within one
//               business day.
//             </p>

//             <div className="space-y-4">
//               <IconField
//                 icon={<FiUser className="h-4 w-4 shrink-0 text-slate-400" />}
//                 type="text"
//                 ariaLabel="Full name"
//                 placeholder="Full name"
//                 value={form.name}
//                 onChange={(v) => handleChange("name", v)}
//                 required
//                 minLength={2}
//               />

//               <IconField
//                 icon={
//                   <FiBriefcase className="h-4 w-4 shrink-0 text-slate-400" />
//                 }
//                 type="text"
//                 ariaLabel="Company name"
//                 placeholder="Company name"
//                 value={form.companyName}
//                 onChange={(v) => handleChange("companyName", v)}
//                 required
//               />

//               <IconField
//                 icon={<FiMail className="h-4 w-4 shrink-0 text-slate-400" />}
//                 type="email"
//                 ariaLabel="Work email"
//                 placeholder="Work email"
//                 value={form.workEmail}
//                 onChange={(v) => handleChange("workEmail", v)}
//                 required
//               />

//               <IconField
//                 icon={<FiPhone className="h-4 w-4 shrink-0 text-slate-400" />}
//                 type="tel"
//                 ariaLabel="Phone number"
//                 placeholder="Phone number"
//                 value={form.phone}
//                 onChange={(v) => handleChange("phone", v)}
//                 required
//                 pattern="[0-9+\-\s]{10,15}"
//                 title="Enter a valid phone number"
//               />

//               <div className="grid grid-cols-2 gap-3">
//                 <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-[#003F2D]">
//                   <FiUsers className="h-4 w-4 shrink-0 text-slate-400" />
//                   <select
//                     aria-label="Seats needed"
//                     value={form.seats}
//                     onChange={(e) => handleChange("seats", e.target.value)}
//                     required
//                     className="w-full bg-transparent text-sm text-slate-900 outline-none"
//                   >
//                     <option value="">Seats</option>
//                     <option>1 to 10</option>
//                     <option>11 to 30</option>
//                     <option>31 to 50</option>
//                     <option>50 to 100</option>
//                     <option>100 above</option>
//                   </select>
//                 </div>

//                 <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-[#003F2D]">
//                   <FiMapPin className="h-4 w-4 shrink-0 text-slate-400" />
//                   <select
//                     aria-label="Preferred location"
//                     value={form.preferredLocation}
//                     onChange={(e) =>
//                       handleChange("preferredLocation", e.target.value)
//                     }
//                     required
//                     className="w-full bg-transparent text-sm text-slate-900 outline-none"
//                   >
//                     <option value="">Location</option>
//                     <option>Delhi</option>
//                     <option>Gurugram</option>
//                     <option>Noida</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={submitting}
//               // style={{ backgroundColor: PRIMARY }}
//               className="mt-6 bg-primary flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {submitting ? "Sending..." : "Get a Callback"}
//             </button>
//           </form>
//         </div>

//         <div
//           role="button"
//           tabIndex={0}
//           aria-label="Choose your city to explore coworking spaces"
//           className="relative cursor-pointer"
//           onClick={openModal}
//           onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openModal()}
//         >
//           <ComfortableSpaces />
//         </div>
//       </div>

//       {modalOpen && (
//         <div
//           className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm transition-opacity duration-200 ${
//             modalVisible ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={closeModal}
//         >
//           <div
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="city-modal-title"
//             onClick={(e) => e.stopPropagation()}
//             className={`relative w-[90%] max-w-sm rounded-3xl border border-white/60 bg-white/70 p-7 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-out ${
//               modalVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
//             }`}
//           >
//             <button
//               onClick={closeModal}
//               aria-label="Close"
//               className="absolute right-4 top-4 text-slate-400 transition hover:text-slate-700"
//             >
//               <FiX className="h-5 w-5" />
//             </button>

//             <p
//               className="mb-1 text-xs font-semibold uppercase tracking-wide"
//               style={{ color: PRIMARY }}
//             >
//               Choose a city
//             </p>
//             <h3
//               id="city-modal-title"
//               className="mb-6 text-xl font-bold text-slate-900"
//             >
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

//       <ThankYouPopup
//         open={showThankYou}
//         onClose={() => setShowThankYou(false)}
//         message="Thank You!"
//         subMessage="We've received your tour request. Our team will contact you within one business day."
//       />
//     </section>
//   );
// }

// function IconField({
//   icon,
//   value,
//   onChange,
//   placeholder,
//   ariaLabel,
//   type = "text",
//   required,
//   minLength,
//   pattern,
//   title,
// }: {
//   icon: React.ReactNode;
//   value: string;
//   onChange: (v: string) => void;
//   placeholder: string;
//   ariaLabel: string;
//   type?: string;
//   required?: boolean;
//   minLength?: number;
//   pattern?: string;
//   title?: string;
// }) {
//   return (
//     <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 px-4 py-3 transition focus-within:border-[#003F2D]">
//       {icon}
//       <input
//         type={type}
//         aria-label={ariaLabel}
//         placeholder={placeholder}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         required={required}
//         minLength={minLength}
//         pattern={pattern}
//         title={title}
//         className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
//       />
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiBriefcase,
  FiUsers,
  FiMapPin,
  FiX,
} from "react-icons/fi";

import ComfortableSpaces from "./ComfortableSpaces";
import { useCategories } from "@/hooks/useCategory";
import { useCreateEnquiry } from "@/hooks/useEnquiry";
import MainHeading from "../CommenHeading/MainHeading";
import ThankYouPopup from "../CommenComponent/ThankYouPopup";

const CITY_OPTIONS = ["Delhi", "Noida", "Gurgaon"];
const PRIMARY = "#003F2D";

interface Category {
  name: string;
  slug: string;
}

interface TourForm {
  name: string;
  companyName: string;
  workEmail: string;
  phone: string;
  seats: string;
  preferredLocation: string;
}

const emptyForm: TourForm = {
  name: "",
  companyName: "",
  workEmail: "",
  phone: "",
  seats: "",
  preferredLocation: "",
};

export default function HeroSection() {
  const router = useRouter();

  const [form, setForm] = useState<TourForm>(emptyForm);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const {
    mutate: createEnquiryMutation,
    isPending: submitting,
  } = useCreateEnquiry();

  const { data } = useCategories();
  const categories: Category[] = data?.data || [];

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

  const handleChange = (field: keyof TourForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Submit tour enquiry using the existing enquiry API
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting) return;

    const payload = {
      name: form.name.trim(),
      designation: "",
      companyName: form.companyName.trim(),
      email: form.workEmail.trim(),
      phone: form.phone.trim(),
      seats: form.seats,
      budget: "",
      message: "I would like to book a free coworking space tour.",
      workspace: null,
      workspaceName: "",
      operatorName: "",
      location: form.preferredLocation,
    };

    createEnquiryMutation(payload, {
      onSuccess: (response) => {
        console.log("Tour enquiry submitted successfully:", response);

        setForm(emptyForm);
        setShowThankYou(true);
      },

      onError: (error: any) => {
        console.error("Tour enquiry submission failed:", error);

        alert(
          error?.response?.data?.message ||
            "Failed to submit your request. Please try again."
        );
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/40 to-blue-50 lg:px-6 px-4 py-14 sm:py-20 lg:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/60 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8"
          >
            <MainHeading title="Book a free tour" />

            <p className="mb-6 text-[13px] text-slate-500 mt-2">
              Share your details and our team will reach out within one
              business day.
            </p>

            <div className="space-y-4">
              <IconField
                icon={<FiUser className="h-4 w-4 shrink-0 text-slate-400" />}
                type="text"
                ariaLabel="Full name"
                placeholder="Full name"
                value={form.name}
                onChange={(v) => handleChange("name", v)}
                required
                minLength={2}
              />

              <IconField
                icon={
                  <FiBriefcase className="h-4 w-4 shrink-0 text-slate-400" />
                }
                type="text"
                ariaLabel="Company name"
                placeholder="Company name"
                value={form.companyName}
                onChange={(v) => handleChange("companyName", v)}
                required
              />

              <IconField
                icon={<FiMail className="h-4 w-4 shrink-0 text-slate-400" />}
                type="email"
                ariaLabel="Work email"
                placeholder="Work email"
                value={form.workEmail}
                onChange={(v) => handleChange("workEmail", v)}
                required
              />

              <IconField
                icon={<FiPhone className="h-4 w-4 shrink-0 text-slate-400" />}
                type="tel"
                ariaLabel="Phone number"
                placeholder="Phone number"
                value={form.phone}
                onChange={(v) => handleChange("phone", v)}
                required
                pattern="[0-9+\-\s]{10,15}"
                title="Enter a valid phone number"
              />

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-[#003F2D]">
                  <FiUsers className="h-4 w-4 shrink-0 text-slate-400" />

                  <select
                    aria-label="Seats needed"
                    value={form.seats}
                    onChange={(e) => handleChange("seats", e.target.value)}
                    required
                    className="w-full bg-transparent text-sm text-slate-900 outline-none"
                  >
                    <option value="">Seats</option>
                    <option>1 to 10</option>
                    <option>11 to 30</option>
                    <option>31 to 50</option>
                    <option>50 to 100</option>
                    <option>100 above</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-[#003F2D]">
                  <FiMapPin className="h-4 w-4 shrink-0 text-slate-400" />

                  <select
                    aria-label="Preferred location"
                    value={form.preferredLocation}
                    onChange={(e) =>
                      handleChange("preferredLocation", e.target.value)
                    }
                    required
                    className="w-full bg-transparent text-sm text-slate-900 outline-none"
                  >
                    <option value="">Location</option>
                    <option>Delhi</option>
                    <option>Gurugram</option>
                    <option>Noida</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{ backgroundColor: PRIMARY }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Get a Callback"}
            </button>
          </form>
        </div>

        {/* Comfortable Spaces */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Choose your city to explore coworking spaces"
          className="relative cursor-pointer"
          onClick={openModal}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && openModal()
          }
        >
          <ComfortableSpaces />
        </div>
      </div>

      {/* City Selection Modal */}
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
              type="button"
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

            <h3
              id="city-modal-title"
              className="mb-6 text-xl font-bold text-slate-900"
            >
              Where do you want to work?
            </h3>

            <div className="space-y-3">
              {CITY_OPTIONS.map((city) => (
                <button
                  type="button"
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-left text-sm font-medium text-slate-700 transition hover:border-[#003F2D] hover:bg-slate-50"
                >
                  {city}
                  <FiMapPin
                    className="h-4 w-4"
                    style={{ color: PRIMARY }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      <ThankYouPopup
        open={showThankYou}
        onClose={() => setShowThankYou(false)}
        message="Thank You!"
        subMessage="We've received your tour request. Our team will contact you within one business day."
      />
    </section>
  );
}

function IconField({
  icon,
  value,
  onChange,
  placeholder,
  ariaLabel,
  type = "text",
  required,
  minLength,
  pattern,
  title,
}: {
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  ariaLabel: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  pattern?: string;
  title?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 transition focus-within:border-[#003F2D]">
      {icon}

      <input
        type={type}
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        minLength={minLength}
        pattern={pattern}
        title={title}
        className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
      />
    </div>
  );
}
