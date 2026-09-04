// "use client";
// import { FiMapPin, FiClock } from "react-icons/fi";
// import { FaStar } from "react-icons/fa";
// import MulitipleSliderSection from "@/app/components/WorkspaceDetailsComponent/MulitipleSliderSection";
// import Enqueryform from "@/app/components/WorkspaceDetailsComponent/Enqueryform";
// import SeatingPlansSection from "@/app/components/WorkspaceDetailsComponent/SeatingPlansSection";
// import AboutWorkspaceSection from "@/app/components/WorkspaceDetailsComponent/AboutWorkspaceSection";
// import OfficeTimingSection from "@/app/components/WorkspaceDetailsComponent/OfficeTimingSection";
// import AmenitiesSection from "@/app/components/WorkspaceDetailsComponent/AmenitiesSection";
// import LocationSection from "@/app/components/WorkspaceDetailsComponent/LocationSection";
// import { getWorkspaceBySlug } from "@/api/workspaceApi";
// import FaqSection from "@/app/components/FaqSection/FaqSection";
// import RelatedWorkspaces from "@/app/components/Relatedworkspaces/Relatedworkspaces";
// import ConnectivitySection from "@/app/components/WorkspaceDetailsComponent/ConnectivitySection";
// import { useEffect, useState } from "react";

// export default async function WorkspaceDetailsPage({
//   params,
// }: {
//   params: { citySlug: string; workspaceSlug: string };
// }) {
//   // const data = await getWorkspaceBySlug(params.workspaceSlug);

//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     const fetchWorkspace = async () => {
//       try {
//         const response = await getWorkspaceBySlug(params.workspaceSlug);

//         console.log("WORKSPACE DATA:", response);

//         setData(response);
//       } catch (error) {
//         console.error("Workspace API Error:", error);
//       }
//     };

//     fetchWorkspace();
//   }, [params.workspaceSlug]); // 👈 IMPORTANT

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   console.log(data, "details data from services card main");
//   console.log("FULL DATA:", data);
// console.log("MAIN IMAGES:", data?.mainImages);
// console.log("MAIN IMAGES LENGTH:", data?.mainImages?.length);
// console.log("NORMAL IMAGES:", data?.images);
// console.log("NORMAL IMAGES LENGTH:", data?.images?.length);

//   return (
//     <>
//       <div className="mt-16 bg-white">
//         {/* <MulitipleSliderSection images={data.images} /> */}
//       <MulitipleSliderSection
//   images={[
//     ...(data.mainImages || []),
//     ...(data.images || []),
//   ]}
//   galleryImages={data.mainImages}
//   workspaceName={data.name}
//   consultant={{
//     name: "Pankaj Maurya",
//     phone: "+91 8130000071",
//   }}
// />


//         <div className="bg-[#F9FBFC]">
//           <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16">
//             <div className="grid grid-cols-12 gap-8">
//               <div className="col-span-12 lg:col-span-8">
//                 <div className="space-y-10 ">
//                   <AboutWorkspaceSection
//                     name={data.name}
//                     description={data.description}
//                   />

//                   <hr className="border-slate-100" />
//                   <SeatingPlansSection plans={data.plans} />


//                   <hr className="border-slate-100" />

//                   <OfficeTimingSection timing={data.officeTiming} />

//                   <hr className="border-slate-100" />

//                   <AmenitiesSection amenities={data.amenities} />

//                   <hr className="border-slate-100" />

//                   <LocationSection
//                     address={data.address}
//                     mapLink={data.mapLink}
//                   />

//                   <hr className="border-slate-100" />

//                   <ConnectivitySection connectivity={data.connectivity} />
//                 </div>
//               </div>

//               <div className="col-span-12 lg:col-span-4">
//                 <div className="sticky top-20">
//                       <Enqueryform data={data} />

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white">
//         <div className="mx-auto max-w-7xl px-6 py-16">
//           <FaqSection />
//         </div>
//       </div> 
//     </>
//   );
// }

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

export default function WorkspaceDetailsPage({
  params,
}: {
  params: { citySlug: string; workspaceSlug: string };
}) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-lg text-gray-600">
          Loading workspace...
        </p>
      </div>
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
      <div className="mt-16 bg-white">

       

        <MulitipleSliderSection
          images={combinedImages}
          galleryImages={data?.mainImages || []}
          workspaceName={data?.name}
          // consultant={{
          //   name: "Pankaj Maurya",
          //   phone: "+91 8130000071",
          // }}
        />

        <div className="bg-[#F9FBFC]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16">

            <div className="grid grid-cols-12 gap-8">

             

              <div className="col-span-12 lg:col-span-8">

                <div className="space-y-10">

                  {/* ABOUT */}

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