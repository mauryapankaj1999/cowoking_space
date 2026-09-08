"use client";
import { useEffect, useState } from "react";
import MulitipleSliderSection from "@/app/components/WorkspaceDetailsComponent/MulitipleSliderSection";
import Enqueryform from "@/app/components/WorkspaceDetailsComponent/Enqueryform";
import SeatingPlansSection from "@/app/components/WorkspaceDetailsComponent/SeatingPlansSection";
import AboutWorkspaceSection from "@/app/components/WorkspaceDetailsComponent/AboutWorkspaceSection";
import OfficeTimingSection from "@/app/components/WorkspaceDetailsComponent/OfficeTimingSection";
import AmenitiesSection from "@/app/components/WorkspaceDetailsComponent/AmenitiesSection";
import LocationSection from "@/app/components/WorkspaceDetailsComponent/LocationSection";
import FaqSection from "@/app/components/FaqSection/FaqSection";
import ConnectivitySection from "@/app/components/WorkspaceDetailsComponent/ConnectivitySection";

import { getWorkspaceBySlug } from "@/api/workspaceApi";
import EnquiryModal from "@/app/components/CommonModal/EnquiryModal";
import WorkspaceDetailsLoader from "@/app/components/WorkspaceDetailsLoader";

export default function WorkspaceDetailsPage({
  params,
}: {
  params: { citySlug: string; workspaceSlug: string };
}) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);
  useEffect(() => {
    const fetchWorkspace = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getWorkspaceBySlug(params.workspaceSlug);

        

        console.log("========== WORKSPACE DATA ==========");

        console.log("FULL DATA:", response);

        console.log(
          "MAIN IMAGES:",
          response?.mainImages
        );

        console.log(
          "MAIN IMAGES LENGTH:",
          response?.mainImages?.length
        );

        console.log(
          "NORMAL IMAGES:",
          response?.images
        );

        console.log(
          "NORMAL IMAGES LENGTH:",
          response?.images?.length
        );

        // Combined images
        const combinedImages = [
          ...(response?.mainImages || []),
          ...(response?.images || []),
        ];

        console.log(
          "COMBINED IMAGES:",
          combinedImages
        );

        console.log(
          "COMBINED IMAGES LENGTH:",
          combinedImages.length
        );

        setData(response);
      } catch (error) {
        console.error(
          "Workspace API Error:",
          error
        );

        setError(
          "Unable to load workspace details."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWorkspace();
  }, [params.workspaceSlug]);


  if (loading) {
    return (
      // <div className="flex min-h-[500px] items-center justify-center">
      //   <p className="text-lg text-gray-600">
      //     Loading workspace...
      //   </p>
      // </div>
      <>
      <WorkspaceDetailsLoader />
      </>
    );
  }



  if (error) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-lg text-red-500">
          {error}
        </p>
      </div>
    );
  }



  if (!data) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-lg text-gray-600">
          Workspace not found.
        </p>
      </div>
    );
  }


  const combinedImages = [
    ...(data?.mainImages || []),
    ...(data?.images || []),
  ];

  return (
    <>
      {/* <div className="lg:mt-16 bg-white">
        <div className="bg-[#F9FBFC]">
        <MulitipleSliderSection
          images={combinedImages}
          galleryImages={data?.mainImages || []}
          workspaceName={data?.name}
        />
        <div className="mx-auto w-full lg:max-w-7xl px-4 sm:px-6 pt-2 pb-24 lg:pb-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="space-y-10">
                <AboutWorkspaceSection
                  name={data.name}
                  description={data.description}
                />
                <hr className="border-slate-100" />
                <SeatingPlansSection
                  plans={data.plans}
                />
                <hr className="border-slate-100" />
                <OfficeTimingSection
                  timing={data.officeTiming}
                />
                <hr className="border-slate-100" />
                <AmenitiesSection
                  amenities={data.amenities}
                />
                <hr className="border-slate-100" />
                <LocationSection
                  address={data.address}
                  mapLink={data.mapLink}
                />
                <hr className="border-slate-100" />
                <ConnectivitySection
                  connectivity={data.connectivity}
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 min-w-0">
              <div className="lg:sticky lg:top-20">
                <Enqueryform data={data} />
              </div>
            </div>

          </div>
        </div>
        </div>
      </div> */}


<div className="lg:mt-16 bg-white">
  <div className="bg-[#F9FBFC]">
    <MulitipleSliderSection
      images={combinedImages}
      galleryImages={data?.mainImages || []}
      workspaceName={data?.name}
    />
    <div className="mx-auto w-full max-w-7xl px-4 pt-10 pb-24 sm:px-6 lg:pb-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="w-full min-w-0 lg:col-span-8">
          <div className="space-y-10">
            <AboutWorkspaceSection
              name={data.name}
              description={data.description}
            />

            <hr className="border-slate-100" />

            <SeatingPlansSection
              plans={data.plans}
            />

            <hr className="border-slate-100" />

            <OfficeTimingSection
              timing={data.officeTiming}
            />

            <hr className="border-slate-100" />

            <AmenitiesSection
              amenities={data.amenities}
            />

            <hr className="border-slate-100" />

            <LocationSection
              address={data.address}
              mapLink={data.mapLink}
            />
            <hr className="border-slate-100" />
            <ConnectivitySection
              connectivity={data.connectivity}
            />
          </div>
        </div>
        <div className="w-full min-w-0 lg:col-span-4">
          <div className="lg:sticky lg:top-20">
            <Enqueryform data={data} />
          </div>

        </div>

      </div>
    </div>

  </div>
</div>





      <div className="bg-white">
        <div className="mx-auto lg:max-w-7xl px-6 py-16">
          <FaqSection />
        </div>
      </div>

    <div className="lg:hidden">
      <div className="fixed bottom-0 left-0 right-0 bg-primary rounded-t-lg shadow-lg z-50">
        <div className="flex justify-between items-center p-4">
          <div className="">
            <h3 className="text-white font-bold text-[16px] mb-0">{data.plans?.[0]?.price}/-</h3>
            <p className="text-white text-[13px]">per month</p>
          </div>
          <div className="">
            <button    onClick={() => setIsModalOpen(true)} className="bg-white text-primary hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 text-[12px] font-medium rounded-lg text-sm px-2 py-1.5 text-center">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>


        <EnquiryModal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              space={selectedSpace}
            />
    </>
  );
}