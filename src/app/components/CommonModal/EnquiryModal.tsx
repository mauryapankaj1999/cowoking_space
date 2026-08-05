"use client";

import { IoClose } from "react-icons/io5";
import MainHeading from "../CommenHeading/MainHeading";

interface Props {
  open: boolean;
  onClose: () => void;
  space: any;
}

export default function EnquiryModal({ open,onClose,}: Props) {  
 if (!open) return null; 
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-5">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 text-3xl"
        >
          <IoClose />
        </button>

        <div className="grid md:grid-cols-2">

          {/* Left */}
          <div className="bg-[#EDF6FF] p-10">

        <MainHeading title=" Find Your Perfect Office Now" />
            <p className="mt-5 text-slate-600 text-[13px]">
              Our experts will help you find the best office according to your
              needs.
            </p>

            <div className="mt-8 space-y-4">
              <div className="text-[13px]">✔ Customized Workspaces</div>
              <div className="text-[13px]">✔ Prime Locations</div>
              <div className="text-[13px]">✔ Flexible Terms</div>
              <div className="text-[13px]">✔ Free Guided Tours</div>
            </div>
          </div>

          {/* Right */}
          <div className="p-10">

            <h2 className="mb-3 text-lg font-semibold text-gray-900">
              Interested in this Property
            </h2>

            <p className="mb-8 text-slate-500 text-[13px]">
              Fill your details for a customized quote
            </p>

            <form className="space-y-5">

              <input
                className="w-full rounded-lg border p-3"
                placeholder="Name"
              />

              <input
                className="w-full rounded-lg border p-3"
                placeholder="Email"
              />
            

              <input
                className="w-full rounded-lg border p-3"
                placeholder="Phone"
              />

              <div className="grid grid-cols-1 gap-4">

                <select className="rounded-lg border p-3">
                  <option>Type of Seat</option>
                  <option>0 to 10</option>
                  <option>11 to 20</option>
                  <option>21 to 30</option>
                  <option>31 to 40</option>
                  <option>41 to 50</option>
                  <option>51 to 60</option>
                  <option>61 to 70</option>
                  <option>71 to 80</option>
                  <option>81 to 90</option>
                  <option>91 to 100</option>
                </select>

                {/* <select className="rounded-lg border p-3">
                  <option>No. Of Seats</option>
                </select> */}

              </div>

              <button
                className="w-full rounded-lg bg-[#0058BE] py-4 text-white"
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}