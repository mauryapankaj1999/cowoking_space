// "use client";
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

export default async function WorkspaceDetailsPage({
  params,
}: {
  params: { citySlug: string; workspaceSlug: string };
}) {
  const data = await getWorkspaceBySlug(params.workspaceSlug);

  console.log(data);

  return (
    <>
      <MulitipleSliderSection />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16">
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <SeatingPlansSection plans={data.plans} />
            <AboutWorkspaceSection
              name={data.name}
              description={data.description}
            />
            <OfficeTimingSection timing={data.officeTiming} />
             <AmenitiesSection amenities={data.amenities} />
        <LocationSection
          address={data.address}
          latitude={data.latitude}
          longitude={data.longitude}
        />
          </div>
          <div className="col-span-4">
            <Enqueryform />
          </div>
        </div>
      </div>
    </>
  );
}
