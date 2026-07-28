"use client";

import { IoClose } from "react-icons/io5";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ open,onClose,}: Props) {  

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

            <h2 className="text-4xl font-bold">
              Find Your Perfect Office Now !
            </h2>

            <p className="mt-5 text-slate-600">
              Our experts will help you find the best office according to your
              needs.
            </p>

            <div className="mt-8 space-y-4">

              <div>✔ Customized Workspaces</div>

              <div>✔ Prime Locations</div>

              <div>✔ Flexible Terms</div>

              <div>✔ Free Guided Tours</div>

            </div>

            <div className="mt-14">

              <h3 className="mb-6 text-2xl font-semibold">
                Trusted by top companies
              </h3>

              <div className="grid grid-cols-3 gap-5">
                <img src="/logos/logo1.png" />
                <img src="/logos/logo2.png" />
                <img src="/logos/logo3.png" />
                <img src="/logos/logo4.png" />
                <img src="/logos/logo5.png" />
                <img src="/logos/logo6.png" />
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="p-10">

            <h2 className="text-3xl font-bold">
              Interested in this Property
            </h2>

            <p className="mb-8 text-slate-500">
              Fill your details for a customized quote
            </p>

            <form className="space-y-5">

              <input
                className="w-full rounded-lg border p-4"
                placeholder="Name"
              />

              <input
                className="w-full rounded-lg border p-4"
                placeholder="Email"
              />

              <input
                className="w-full rounded-lg border p-4"
                placeholder="Phone"
              />

              <div className="grid grid-cols-2 gap-4">

                <select className="rounded-lg border p-4">
                  <option>Type</option>
                </select>

                <select className="rounded-lg border p-4">
                  <option>No. Of Seats</option>
                </select>

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