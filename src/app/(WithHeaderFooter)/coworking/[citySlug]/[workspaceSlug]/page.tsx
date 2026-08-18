import { FiMapPin, FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import MulitipleSliderSection from "@/app/components/WorkspaceDetailsComponent/MulitipleSliderSection";
import Enqueryform from "@/app/components/WorkspaceDetailsComponent/Enqueryform";
import SeatingPlansSection from "@/app/components/WorkspaceDetailsComponent/SeatingPlansSection";
import AboutWorkspaceSection from "@/app/components/WorkspaceDetailsComponent/AboutWorkspaceSection";
import OfficeTimingSection from "@/app/components/WorkspaceDetailsComponent/OfficeTimingSection";
import AmenitiesSection from "@/app/components/WorkspaceDetailsComponent/AmenitiesSection";
import LocationSection from "@/app/components/WorkspaceDetailsComponent/LocationSection";
import { getWorkspaceBySlug } from "@/api/workspaceApi";
import FaqSection from "@/app/components/FaqSection/FaqSection";
import RelatedWorkspaces from "@/app/components/Relatedworkspaces/Relatedworkspaces";
import ConnectivitySection from "@/app/components/WorkspaceDetailsComponent/ConnectivitySection";

export default async function WorkspaceDetailsPage({
  params,
}: {
  params: { citySlug: string; workspaceSlug: string };
}) {
  const data = await getWorkspaceBySlug(params.workspaceSlug);

  console.log(data, "details data from services card main");

  return (
    <>
      <div className="mt-16 bg-white">
        {/* <MulitipleSliderSection images={data.images} /> */}
        <MulitipleSliderSection
  images={data.images}
  workspaceName={data.name}
  consultant={{
    name: "Pankaj Maurya",
    phone: "+91 8130000071",
  }}
/>

        <div className="bg-[#F9FBFC]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8">
                <div className="space-y-10 ">
                  <AboutWorkspaceSection
                    name={data.name}
                    description={data.description}
                  />

                  <hr className="border-slate-100" />
                  <SeatingPlansSection plans={data.plans} />


                  <hr className="border-slate-100" />

                  <OfficeTimingSection timing={data.officeTiming} />

                  <hr className="border-slate-100" />

                  <AmenitiesSection amenities={data.amenities} />

                  <hr className="border-slate-100" />

                  <LocationSection
                    address={data.address}
                    mapLink={data.mapLink}
                  />

                  <hr className="border-slate-100" />

                  <ConnectivitySection connectivity={data.connectivity} />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <div className="sticky top-20">
                      <Enqueryform data={data} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <FaqSection />
        </div>
      </div>
    </>
  );
}