// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import axiosInstance from "@/api/axiosInstance";

// const isObjectId = (val: string) => /^[0-9a-fA-F]{24}$/.test(val);

// export default function OperatorWorkspacesPage() {
//   const { operatorId } = useParams();
//   const [workspaces, setWorkspaces] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!operatorId) return;

//     const fetchWorkspaces = async () => {
//       try {
//         const param = operatorId as string;
//         const url = isObjectId(param)
//           ? `/workspace/operator/${param}`
//           : `/workspace/operator/slug/${param}`;

//         const res = await axiosInstance.get(url);
//         setWorkspaces(res.data?.data || []);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWorkspaces();
//   }, [operatorId]);

//   if (loading) return <div className="pt-32 text-center">Loading...</div>;

//   return (
//     <div className="pt-28 px-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">
//         Workspaces ({workspaces.length})
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {workspaces.map((ws: any) => (
//           <div key={ws._id} className="border rounded-xl overflow-hidden">
//             <img
//               src={ws.images?.[0]?.url}
//               alt={ws.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold text-lg">{ws.name}</h3>
//               <p className="text-sm text-slate-500">{ws.address}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import CardComponent from "@/app/components/CardComponent/CardComponent";
import EnquiryModal from "@/app/components/CommonModal/EnquiryModal";
import CorworkingSpaceCaption from "@/app/components/CorworkingSpaceCaption/CorworkingSpaceCaption";
import { useWorkspacesByOperator } from "@/hooks/useWorkspace";
import { useOperatorByParam } from "@/hooks/useOperator";

export default function OperatorWorkspacesPage() {
  const { operatorId } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState<any>(null);

  const { data: workspaceData, isLoading } = useWorkspacesByOperator(operatorId as string);
  const { data: operatorData } = useOperatorByParam(operatorId as string);

  const workspaces = workspaceData?.data || [];
  const operatorName = operatorData?.data?.name || "";

  const handleOpen = (item: any) => {
    setSelectedSpace(item);
    setOpen(true);
  };

  if (isLoading) return <div className="pt-32 text-center">Loading...</div>;

  return (
    <>
      <div className="mt-[3.8rem]">
        <CorworkingSpaceCaption cityName={operatorName} />

        <div className="bg-[#f5fdff] px-10 py-10">
          <div className="px-6 max-w-7xl mx-auto py-10">
            {workspaces.length === 0 ? (
              <p className="text-slate-500">No workspaces found.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {workspaces.map((ws: any) => (
                  <CardComponent
                    key={ws._id}
                    item={{
                      id: ws._id,
                      slug: ws.slug,
                      badge: ws.featured ? "POPULAR" : "",
                      title: ws.name,
                      rating: ws.rating || 0,
                      location: ws.address,
                      price: ws.plans?.[0]?.price || 0,
                      images: ws.images?.map((img: any) => img.url) || [],
                    }}
                    onQuoteClick={handleOpen}
                    linkPrefix={`/workspace/${ws.slug}`}
                  />
                ))}
              </div>
            )}
          </div>

          {open && (
            <EnquiryModal
              open={open}
              onClose={() => setOpen(false)}
              space={selectedSpace}
            />
          )}
        </div>
      </div>
    </>
  );
}