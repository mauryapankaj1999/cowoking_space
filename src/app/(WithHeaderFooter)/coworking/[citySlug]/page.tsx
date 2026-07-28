"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import CardComponent from "@/app/components/CardComponent/CardComponent";
import MainHeading from "@/app/components/CommenHeading/MainHeading";
import EnquiryModal from "@/app/components/CommonModal/EnquiryModal";
import { useCategoryBySlug } from "@/hooks/useCategory";
import { useSubCategoriesByCitySlug } from "@/hooks/useSubCategory";
import { useWorkspacesBySlug } from "@/hooks/useWorkspace";

export default function Page() {
  const { citySlug } = useParams(); 
//   const { citySlug } = useParams();

  const [activeTab, setActiveTab] = useState(null); 
  const [open, setOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);

  const { data: categoryData } = useCategoryBySlug(citySlug);
  const { data: subCategoryData } = useSubCategoriesByCitySlug(citySlug);
  const { data: workspaceData, isLoading } = useWorkspacesBySlug(
    citySlug,
    activeTab
  );

  const cityName = categoryData?.data?.name || citySlug;
  const tabslist = subCategoryData?.data || [];
  const workspaces = workspaceData?.data || [];

  const handleOpen = (item) => {
    setSelectedSpace(item);
    setOpen(true);
  };

  return (
    <>
      <section className="bg-white px-10 py-10">
        <div className="mx-auto max-w-7xl">
          <MainHeading title={`Coworking Space In ${cityName}`} />

          <div className="my-4">
            <ul className="flex flex-wrap gap-4">
              <li
                onClick={() => setActiveTab(null)}
                className={`cursor-pointer border-[0.3px] px-3 py-[6px] rounded-[5px] border-[#C2C7D1] text-[13px] font-medium transition-all duration-300 ${
                  activeTab === null
                    ? "bg-[#0058BE] text-white"
                    : "border text-slate-500 hover:text-blue-600"
                }`}
              >
                All
              </li>
              {tabslist.map((item) => (
                <li
                  key={item._id}
                  onClick={() => setActiveTab(item.slug)}
                  className={`cursor-pointer border-[0.3px] px-3 py-[6px] rounded-[5px] border-[#C2C7D1] text-[13px] font-medium transition-all duration-300 ${
                    activeTab === item.slug
                      ? "bg-[#0058BE] text-white"
                      : "border text-slate-500 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10"></div>

          {isLoading ? (
            <p className="text-slate-500">Loading...</p>
          ) : workspaces.length === 0 ? (
            <p className="text-slate-500">No workspaces found.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {workspaces.map((ws) => (
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
                    images: ws.images?.map((img) => img.url) || [],
                  }}
                  onQuoteClick={handleOpen}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {open && (
        <EnquiryModal
          open={open}
          onClose={() => setOpen(false)}
          space={selectedSpace}
        />
      )}
    </>
  );
}