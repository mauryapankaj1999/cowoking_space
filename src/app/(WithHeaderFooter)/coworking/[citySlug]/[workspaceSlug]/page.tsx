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
      <div className="mt-16">
        <MulitipleSliderSection images={data.images} />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <SeatingPlansSection plans={data.plans} />

              <div className="my-8">
                <hr />
              </div>

              <AboutWorkspaceSection
                name={data.name}
                description={data.description}
              />
              <div className="my-8">
                <hr />
              </div>

              <OfficeTimingSection timing={data.officeTiming} />

              <div className="my-8">
                <hr />
              </div>

              <AmenitiesSection amenities={data.amenities} />

              <div className="my-8">
                <hr />
              </div>

              <LocationSection address={data.address} mapLink={data.mapLink} />
              <div className="my-8">
                <hr />
              </div>
              <ConnectivitySection connectivity={data.connectivity} />
              <div className="my-8">
                <hr />
              </div>
            </div>
            <div className="col-span-4 ">
              <div className="sticky top-20">
                <Enqueryform />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 mb-8">
        <RelatedWorkspaces
          citySlug={params.citySlug}
          currentSlug={params.workspaceSlug}
          cityName={data.category?.name}
        />

        {/* <FaqSection /> */}
      </div>
    </>
  );
}
