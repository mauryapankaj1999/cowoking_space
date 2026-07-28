import react from "react";
import MainHeading from "../CommenHeading/MainHeading";
import { FaCheckCircle } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { LuCoffee } from "react-icons/lu";
import { MdOutlineWorkspaces } from "react-icons/md";
import { FiUsers } from "react-icons/fi";


export default function FeatureSection() {
  return (
    <>
      <section className="relative bg-[#FDFCF8] overflow-hidden bg-gradient-to-br px-6 py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <MainHeading title="Everything you need. Nothing you don't." />
            <p className="my-6 text-[14x] leading-relaxed text-slate-500">
              We take care of the boring bits — from Wi-Fi and coffee to
              community and contracts — so you can focus on the work that
              matters.
            </p>
            <ul>
              <li className="flex items-center gap-2 my-2 text-[16px] leading-relaxed text-slate-700">
                <FaCheckCircle /> Dedicated account manager
              </li>
              <li className="flex items-center gap-2 my-2 text-[16px] leading-relaxed text-slate-700">
                <FaCheckCircle className="text-[18px] " /> No lock-in contracts
              </li>
              <li className="flex items-center gap-2 my-2 text-[16px] leading-relaxed text-slate-700">
                <FaCheckCircle /> Instant booking confirmation
              </li>
            </ul>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative col-span-2 row-span-2 ">
              <div className="flex gap-4">
                <div className="bg-white p-3 border rounded-xl flex-1 mb-4">
                  <div className="bg-[#F6F2E7] p-3 rounded-full inline-block">
                    <IoWifi className="text-primary" />
                  </div>
                  <h2 className="text-[14px] font-semibold my-1">
                    High-speed Wi-Fi
                  </h2>
                  <p className="text-[12px] leading-relaxed text-slate-500">
                    Gigabit fibre in every location.
                  </p>
                </div>

                <div className="bg-white p-3 border rounded-xl flex-1 mb-4">
                  <div className="bg-[#F6F2E7] p-3 rounded-full inline-block">
                    <LuCoffee />
                  </div>
                  <h2 className="text-[14px] font-semibold my-1">
                   Unlimited coffee
                  </h2>
                  <p className="text-[12px] leading-relaxed text-slate-500">
                    Barista-grade brews on the house.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white p-3 border rounded-xl flex-1">
                  <div className="bg-[#F6F2E7] p-3 rounded-full inline-block">
                        <MdOutlineWorkspaces />
                    </div>                  
                  <h2 className="text-[14px] font-semibold my-1">Verified spaces</h2>
                  <p className="text-[12px] leading-relaxed text-slate-500">Every listing personally inspected.</p>
                </div>

                <div className="bg-white p-3 border rounded-xl flex-1">
                  <div className="bg-[#F6F2E7] p-3 rounded-full inline-block">

                  <FiUsers />
                  </div>
                  <h2 className="text-[14px] font-semibold my-1">Community events</h2>
                  <p className="text-[12px] leading-relaxed text-slate-500">Meet founders, freelancers & creators.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
