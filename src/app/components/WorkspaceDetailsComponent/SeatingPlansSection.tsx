// "use client";
// import { WorkspacePlan } from "@/types/workspace";
// import { useState } from "react";
// import EnquiryModal from "../CommonModal/EnquiryModal";
// export default function SeatingPlansSection({ plans }: { plans: WorkspacePlan[] }) {

//  const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedSpace, setSelectedSpace] = useState(null);

//   return (
//     <div>
//       <h2 className="mb-4 text-lg font-semibold text-gray-900">Seating Plans</h2>
//       <div className="space-y-4">
//         {plans.map((plan) => (
//           <div
//             key={plan._id}
//             className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
//           >
//             <div>
//               <h3 className="font-medium text-gray-900">{plan.title}</h3>
//               <p className="text-sm text-gray-500 w-[80%]">{plan.description}</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <p className="font-semibold text-gray-900">
//                 ₹{plan.price.toLocaleString()}
//                 <span className="text-xs font-normal text-gray-400">/seat</span>
//               </p>
//               <button onClick={() => setIsModalOpen(true)} className="whitespace-nowrap rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
//                 Enquire Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>


//       <EnquiryModal
//               open={isModalOpen}
//               onClose={() => setIsModalOpen(false)}
//                 space={selectedSpace}
//             />
//     </div>
//   );
// }

"use client";
import { WorkspacePlan } from "@/types/workspace";
import { useState } from "react";
import EnquiryModal from "../CommonModal/EnquiryModal";

const PRIMARY = "#003F2D";

export default function SeatingPlansSection({ plans }: { plans: WorkspacePlan[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Seating Plans</h2>
      <div className="space-y-4">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="group flex items-center justify-between rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:border-slate-300 hover:shadow-sm"
            style={{ borderColor: undefined }}
          >
            <div>
              <h3 className="font-medium text-gray-900">{plan.title}</h3>
              <p className="w-[80%] text-sm text-gray-500">{plan.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold text-gray-900">
                ₹{plan.price.toLocaleString()}
                <span className="text-xs font-normal text-gray-400">/seat</span>
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                style={{ backgroundColor: PRIMARY }}
                className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <EnquiryModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        space={selectedSpace}
      />
    </div>
  );
}