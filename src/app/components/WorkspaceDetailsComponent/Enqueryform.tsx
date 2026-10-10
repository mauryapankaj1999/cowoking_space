// "use client";
// import { useState } from "react";
// import { FiCheck, FiTag, FiShield } from "react-icons/fi";
// import EnquiryModal from "../CommonModal/EnquiryModal";

// const PRIMARY = "#003F2D";

// export default function Enqueryform({ data }: { data: any }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const price = data?.plans?.[0]?.price || 0;
//   const category = data?.workspaceCategory?.name || data?.subCategory?.name || "—";
//   const status = data?.status ? "Ready to Move" : "Not Available";

//   return (
//     <>
//       <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/60">
//         {/* Price header */}
//         <div className="flex items-start justify-between">
//           <div>
//             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//               Starting from
//             </p>
//             <p className="mt-1 flex items-baseline gap-1">
//               <span className="text-3xl font-bold text-slate-900">
//                 ₹{price.toLocaleString()}
//               </span>
//               <span className="text-sm font-medium text-slate-400">/seat/mo</span>
//             </p>
//           </div>
//           <div
//             className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
//             style={{ backgroundColor: `${PRIMARY}14` }}
//           >
//             <FiCheck className="h-4 w-4" style={{ color: PRIMARY }} />
//           </div>
//         </div>

//         <span
//           className="mt-3 inline-block rounded-full px-3 py-1 text-[11px] font-semibold"
//           style={{ backgroundColor: `${PRIMARY}14`, color: PRIMARY }}
//         >
//           All-inclusive pricing
//         </span>

//         {/* Badges */}
//         <div className="mt-4 flex flex-wrap gap-2">
//           <span
//             className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold"
//             style={{ borderColor: `${PRIMARY}33`, color: PRIMARY }}
//           >
//             <FiShield className="h-3.5 w-3.5" />
//             Verified operator
//           </span>
//           <span
//             className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold text-white"
//             style={{ backgroundColor: PRIMARY }}
//           >
//             <FiTag className="h-3.5 w-3.5" />0 Brokerage
//           </span>
//         </div>

//         {/* Info boxes */}
//         <div className="mt-5 space-y-3">
//           <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5">
//             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//               Property Address
//             </p>
//             <p className="mt-1 text-[13px] font-semibold leading-snug text-slate-800">
//               {data?.address}
//             </p>
//           </div>

       

//           <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5">
//             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//               Workspace Status
//             </p>
//             <p className="mt-1 text-[13px] font-semibold text-slate-800">
//               {status}
//             </p>
//           </div>
//         </div>

//         {/* Form */}
//         <p className="mt-6 text-[13px] font-semibold uppercase tracking-wide text-slate-500">
//           Interested in this Property
//         </p>

//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             setIsModalOpen(true);
//           }}
//           className="mt-3 space-y-3"
//         >
//           <input
//             type="text"
//             placeholder="Full name"
//             className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
//           />
//           <input
//             type="email"
//             placeholder="Work email"
//             className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
//           />
//           <input
//             type="tel"
//             placeholder="Phone"
//             className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
//           />

//           <div className="grid grid-cols-2 gap-3">
//             <select className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]">
//               <option value="">Space type</option>
//               <option>Dedicated Desk</option>
//               <option>Private Cabin</option>
//             </select>
//             <select className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]">
//               <option value="">No. of seats</option>
//               <option>1 to 10</option>
//               <option>11 to 50</option>
//               <option>51 to 100</option>
//               <option>ABOVE 100</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             style={{ backgroundColor: PRIMARY }}
//             className="h-12 w-full rounded-lg text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
//           >
//             Get Quote
//           </button>

//           <p className="text-center text-[11px] text-slate-400">
//             Expert reply within one business day
//           </p>
//         </form>

//         <div className="mt-5 flex items-start gap-2 border-t border-slate-100 pt-4">
//           <FiShield
//             className="mt-0.5 h-4 w-4 shrink-0"
//             style={{ color: PRIMARY }}
//           />
//           <p className="text-[12px] leading-relaxed text-slate-500">
//             <span className="font-semibold text-slate-700">
//               Verified operator.
//             </span>{" "}
//             What you see is what you take — accurate pricing and real
//             availability, in true view.
//           </p>
//         </div>
//       </div>

//       <EnquiryModal
//         open={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         space={{
//           title: data?.name,
//           operator: data?.operator?.name,
//           location: data?.address,
//         }}
//       />
//     </>
//   );
// }


  // "use client";

  // import { useState } from "react";
  // import { FiCheck, FiTag, FiShield } from "react-icons/fi";
  // import EnquiryModal from "../CommonModal/EnquiryModal";

  // const PRIMARY = "#003F2D";

  // export default function Enqueryform({ data }: { data: any }) {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const [form, setForm] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     spaceType: "",
  //     seats: "",
  //   });

  //   const price = data?.plans?.[0]?.price || 0;
  //   const category =
  //     data?.workspaceCategory?.name ||
  //     data?.subCategory?.name ||
  //     "—";
  //   const status = data?.status ? "Ready to Move" : "Not Available";

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     setIsModalOpen(true);
  //   };

  //   return (
  //     <>
  //       <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/60">
  //         {/* Price header */}
  //         <div className="flex items-start justify-between">
  //           <div>
  //             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
  //               Starting from
  //             </p>

  //             <p className="mt-1 flex items-baseline gap-1">
  //               <span className="text-3xl font-bold text-slate-900">
  //                 ₹{price.toLocaleString()}
  //               </span>
  //               <span className="text-sm font-medium text-slate-400">
  //                 /seat/mo
  //               </span>
  //             </p>
  //           </div>

  //           <div
  //             className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
  //             style={{ backgroundColor: `${PRIMARY}14` }}
  //           >
  //             <FiCheck className="h-4 w-4" style={{ color: PRIMARY }} />
  //           </div>
  //         </div>

  //         <span
  //           className="mt-3 inline-block rounded-full px-3 py-1 text-[11px] font-semibold"
  //           style={{ backgroundColor: `${PRIMARY}14`, color: PRIMARY }}
  //         >
  //           All-inclusive pricing
  //         </span>

  //         {/* Badges */}
  //         <div className="mt-4 flex flex-wrap gap-2">
  //           <span
  //             className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold"
  //             style={{ borderColor: `${PRIMARY}33`, color: PRIMARY }}
  //           >
  //             <FiShield className="h-3.5 w-3.5" />
  //             Verified operator
  //           </span>

  //           <span
  //             className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold text-white"
  //             style={{ backgroundColor: PRIMARY }}
  //           >
  //             <FiTag className="h-3.5 w-3.5" />
  //             0 Brokerage
  //           </span>
  //         </div>

  //         {/* Info boxes */}
  //         <div className="mt-5 space-y-3">
  //           <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5">
  //             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
  //               Property Address
  //             </p>

  //             <p className="mt-1 text-[13px] font-semibold leading-snug text-slate-800">
  //               {data?.address}
  //             </p>
  //           </div>

  //           <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5">
  //             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
  //               Workspace Status
  //             </p>

  //             <p className="mt-1 text-[13px] font-semibold text-slate-800">
  //               {status}
  //             </p>
  //           </div>
  //         </div>

  //         {/* Enquiry form */}
  //         <p className="mt-6 text-[13px] font-semibold uppercase tracking-wide text-slate-500">
  //           Interested in this Property
  //         </p>

  //         <form onSubmit={handleSubmit} className="mt-3 space-y-3">
  //           <input
  //             type="text"
  //             placeholder="Full name"
  //             required
  //             minLength={2}
  //             value={form.name}
  //             onChange={(e) =>
  //               setForm({ ...form, name: e.target.value })
  //             }
  //             className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
  //           />

  //           <input
  //             type="email"
  //             placeholder="Work email"
  //             required
  //             value={form.email}
  //             onChange={(e) =>
  //               setForm({ ...form, email: e.target.value })
  //             }
  //             className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
  //           />

  //           <input
  //             type="tel"
  //             placeholder="Phone"
  //             required
  //             pattern="[0-9+\\-\\s]{10,15}"
  //             title="Enter a valid phone number"
  //             value={form.phone}
  //             onChange={(e) =>
  //               setForm({ ...form, phone: e.target.value })
  //             }
  //             className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
  //           />

  //           <div className="grid grid-cols-2 gap-3">
  //             <select
  //               required
  //               value={form.spaceType}
  //               onChange={(e) =>
  //                 setForm({ ...form, spaceType: e.target.value })
  //               }
  //               className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
  //             >
  //               <option value="">Space type</option>
  //               <option value="Dedicated Desk">Dedicated Desk</option>
  //               <option value="Private Cabin">Private Cabin</option>
  //             </select>

  //             <select
  //               required
  //               value={form.seats}
  //               onChange={(e) =>
  //                 setForm({ ...form, seats: e.target.value })
  //               }
  //               className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
  //             >
  //               <option value="">No. of seats</option>
  //               <option value="1 to 10">1 to 10</option>
  //               <option value="11 to 50">11 to 50</option>
  //               <option value="51 to 100">51 to 100</option>
  //               <option value="ABOVE 100">ABOVE 100</option>
  //             </select>
  //           </div>

  //           <button
  //             type="submit"
  //             style={{ backgroundColor: PRIMARY }}
  //             className="h-12 w-full rounded-lg text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
  //           >
  //             Get Quote
  //           </button>

  //           <p className="text-center text-[11px] text-slate-400">
  //             Expert reply within one business day
  //           </p>
  //         </form>

  //         {/* Trust information */}
  //         <div className="mt-5 flex items-start gap-2 border-t border-slate-100 pt-4">
  //           <FiShield
  //             className="mt-0.5 h-4 w-4 shrink-0"
  //             style={{ color: PRIMARY }}
  //           />

  //           <p className="text-[12px] leading-relaxed text-slate-500">
  //             <span className="font-semibold text-slate-700">
  //               Verified operator.
  //             </span>{" "}
  //             What you see is what you take — accurate pricing and real
  //             availability, in true view.
  //           </p>
  //         </div>
  //       </div>

  //       <EnquiryModal
  //         open={isModalOpen}
  //         onClose={() => setIsModalOpen(false)}
  //         space={{
  //           title: data?.name,
  //           operator: data?.operator?.name,
  //           location: data?.address,
  //           _id: data?._id,
  //           id: data?.id,
  //         }}
  //       />
  //     </>
  //   );
  // }


"use client";

import { useState } from "react";
import { FiCheck, FiTag, FiShield } from "react-icons/fi";
import { useCreateEnquiry } from "@/hooks/useEnquiry";

const PRIMARY = "#003F2D";

export default function Enqueryform({ data }: { data: any }) {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    spaceType: "",
    seats: "",
  });

  const {
    mutate: createEnquiryMutation,
    isPending: submitting,
  } = useCreateEnquiry();

  const price = data?.plans?.[0]?.price || 0;
  const status = data?.status ? "Ready to Move" : "Not Available";

  const updateForm = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting) return;

    setErrorMessage("");

    const payload = {
      name: form.name.trim(),
      designation: "",
      companyName: "",
      email: form.email.trim(),
      phone: form.phone.trim(),
      seats: form.seats,
      budget: "",
      message: `Space type: ${form.spaceType}`,
      workspace: data?._id || data?.id || null,
      workspaceName: data?.name || "",
      operatorName: data?.operator?.name || "",
      location: data?.address || "",
    };

    createEnquiryMutation(payload, {
      onSuccess: () => {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          spaceType: "",
          seats: "",
        });
      },
      onError: (error: any) => {
        console.error("Enquiry submission failed:", error);

        setErrorMessage(
          error?.response?.data?.message ||
            "Failed to submit your enquiry. Please try again."
        );
      },
    });
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/60">
      {/* Price header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Starting from
          </p>

          <p className="mt-1 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-slate-900">
              ₹{price.toLocaleString()}
            </span>
            <span className="text-sm font-medium text-slate-400">
              /seat/mo
            </span>
          </p>
        </div>

        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: `${PRIMARY}14` }}
        >
          <FiCheck className="h-4 w-4" style={{ color: PRIMARY }} />
        </div>
      </div>

      <span
        className="mt-3 inline-block rounded-full px-3 py-1 text-[11px] font-semibold"
        style={{ backgroundColor: `${PRIMARY}14`, color: PRIMARY }}
      >
        All-inclusive pricing
      </span>

      {/* Badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span
          className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold"
          style={{ borderColor: `${PRIMARY}33`, color: PRIMARY }}
        >
          <FiShield className="h-3.5 w-3.5" />
          Verified operator
        </span>

        <span
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold text-white"
          style={{ backgroundColor: PRIMARY }}
        >
          <FiTag className="h-3.5 w-3.5" />
          0 Brokerage
        </span>
      </div>

      {/* Info boxes */}
      <div className="mt-5 space-y-3">
        <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Property Address
          </p>
          <p className="mt-1 text-[13px] font-semibold leading-snug text-slate-800">
            {data?.address}
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Workspace Status
          </p>
          <p className="mt-1 text-[13px] font-semibold text-slate-800">
            {status}
          </p>
        </div>
      </div>

      {/* Enquiry form */}
      <p className="mt-6 text-[13px] font-semibold uppercase tracking-wide text-slate-500">
        Interested in this Property
      </p>

      {submitted ? (
        <div
          role="status"
          className="mt-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
        >
          Thank you! Your enquiry has been submitted successfully. Our team
          will contact you shortly.
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-3 block font-semibold underline"
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-3 space-y-3">
          <input
            type="text"
            placeholder="Full name"
            required
            minLength={2}
            value={form.name}
            onChange={(e) => updateForm("name", e.target.value)}
            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
          />

          <input
            type="email"
            placeholder="Work email"
            required
            value={form.email}
            onChange={(e) => updateForm("email", e.target.value)}
            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
          />

          <input
            type="tel"
            placeholder="Phone"
            required
            pattern="[0-9+\-\s]{10,15}"
            title="Enter a valid phone number"
            value={form.phone}
            onChange={(e) => updateForm("phone", e.target.value)}
            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
          />

          <div className="grid grid-cols-2 gap-3">
            <select
              required
              value={form.spaceType}
              onChange={(e) => updateForm("spaceType", e.target.value)}
              className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
            >
              <option value="">Space type</option>
              <option value="Dedicated Desk">Dedicated Desk</option>
              <option value="Private Cabin">Private Cabin</option>
            </select>

            <select
              required
              value={form.seats}
              onChange={(e) => updateForm("seats", e.target.value)}
              className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 text-[14px] outline-none focus:border-[#003F2D] focus:ring-1 focus:ring-[#003F2D]"
            >
              <option value="">No. of seats</option>
              <option value="1 to 10">1 to 10</option>
              <option value="11 to 50">11 to 50</option>
              <option value="51 to 100">51 to 100</option>
              <option value="ABOVE 100">ABOVE 100</option>
            </select>
          </div>

          {errorMessage && (
            <p role="alert" className="text-sm text-red-600">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            style={{ backgroundColor: PRIMARY }}
            className="h-12 w-full rounded-lg text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Get Quote"}
          </button>

          <p className="text-center text-[11px] text-slate-400">
            Expert reply within one business day
          </p>
        </form>
      )}

      {/* Trust information */}
      <div className="mt-5 flex items-start gap-2 border-t border-slate-100 pt-4">
        <FiShield
          className="mt-0.5 h-4 w-4 shrink-0"
          style={{ color: PRIMARY }}
        />

        <p className="text-[12px] leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-700">
            Verified operator.
          </span>{" "}
          What you see is what you take — accurate pricing and real
          availability, in true view.
        </p>
      </div>
    </div>
  );
}
