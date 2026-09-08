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
      className="group flex flex-col gap-4 rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:border-slate-300 hover:shadow-sm sm:flex-row sm:items-center sm:justify-between"
    >
      {/* Plan Details */}
      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-gray-900">
          {plan.title}
        </h3>

        <p className="mt-1 text-sm leading-5 text-gray-500">
          {plan.description}
        </p>
      </div>

      {/* Price + Button */}
      <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
        <p className="whitespace-nowrap font-semibold text-gray-900">
          ₹{plan.price.toLocaleString()}
          <span className="ml-1 text-xs font-normal text-gray-400">
            /seat
          </span>
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