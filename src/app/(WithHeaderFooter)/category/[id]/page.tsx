"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import CardComponent from "@/app/components/CardComponent/CardComponent";
import EnquiryModal from "@/app/components/CommonModal/EnquiryModal";
import { useWorkspacesByCategory } from "@/hooks/useWorkspace";
import { useWorkspaceCategory } from "@/hooks/useWorkspaceCategory";
import CorworkingSpaceCaption from "@/app/components/CorworkingSpaceCaption/CorworkingSpaceCaption";

export default function CategoryWorkspacesPage() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState<any>(null);

  const { data: workspaceData, isLoading } = useWorkspacesByCategory(id);
  const { data: categoryData } = useWorkspaceCategory(id as any );

  const workspaces = workspaceData?.data || [];
  const categoryName = categoryData?.data?.name || "";

  const handleOpen = (item: any) => {
    setSelectedSpace(item);
    setOpen(true);
  };

  if (isLoading) return <div className="pt-32 text-center">Loading...</div>;

  return (
    <>
      <div className="mt-[3.8rem]">
        <CorworkingSpaceCaption cityName={categoryName} />

        <div className="bg-[#f5fdff] px-10 py-10 ">
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