// "use client";
// import { useState } from "react";
// import { useParams } from "next/navigation";
// import CardComponent from "@/app/components/CardComponent/CardComponent";
// import MainHeading from "@/app/components/CommenHeading/MainHeading";
// import EnquiryModal from "@/app/components/CommonModal/EnquiryModal";
// import { useCategoryBySlug } from "@/hooks/useCategory";
// import { useSubCategoriesByCitySlug } from "@/hooks/useSubCategory";
// import { useWorkspacesBySlug } from "@/hooks/useWorkspace";
// import CorworkingSpaceCaption from "@/app/components/CorworkingSpaceCaption/CorworkingSpaceCaption";
// import CardLoading from "@/app/components/CardLoading";

// export default function Page() {
//   const { citySlug } = useParams();
//   const [activeTab, setActiveTab] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [selectedSpace, setSelectedSpace] = useState(null);

//   const { data: categoryData } = useCategoryBySlug(citySlug);
//   const { data: subCategoryData } = useSubCategoriesByCitySlug(citySlug);
//   const { data: workspaceData, isLoading } = useWorkspacesBySlug(
//     citySlug,
//     activeTab,
//   );

//   const cityName = categoryData?.data?.name || citySlug;
//   const tabslist = subCategoryData?.data || [];
//   const workspaces = workspaceData?.data || [];

//   const handleOpen = (item: any) => {
//     setSelectedSpace(item);
//     setOpen(true);
//   };

//   return (
//     <>
//       <div className="mt-[3.8rem]">
//         <CorworkingSpaceCaption cityName={cityName} />
//         <section className="bg-[#f5fdff] lg:px-10 px-4 py-10 ">
//           <div className="mx-auto max-w-7xl">
//             {/* <MainHeading title={`Coworking Space In ${cityName}`} /> */}
//             <div className="my-4">
//               <div className="mobile-tabs-scroll">
//                 <ul className="flex w-max min-w-full flex-nowrap gap-4">
//                   <li
//                     onClick={() => setActiveTab(null)}
//                     className={`
//                     shrink-0 cursor-pointer
//                     rounded-[5px]
//                     border-[0.3px]
//                     border-primary
//                     px-3 py-[6px]
//                     text-[13px]
//                     font-medium
//                     transition-all duration-300
//                     ${
//                       activeTab === null
//                         ? "bg-primary text-white"
//                         : "text-primary hover:text-primary"
//                     }
//                   `}
//                   >
//                     All
//                   </li>

//                   {tabslist.map((item: any) => (
//                     <li
//                       key={item._id}
//                       onClick={() => setActiveTab(item.slug)}
//                       className={`
//                       shrink-0 cursor-pointer
//                       rounded-[5px]
//                       border-[0.3px]
//                       border-primary
//                       px-3 py-[6px]
//                       text-[13px]
//                       font-medium
//                       transition-all duration-300
//                       ${
//                         activeTab === item.slug
//                           ? "bg-primary text-white"
//                           : "text-primary hover:text-primary"
//                       }
//                     `}
//                     >
//                       {item.name}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-10"></div>

//             {isLoading ? (
//               <>
//                 <CardLoading />
//               </>
//             ) : workspaces.length === 0 ? (
//               <p className="text-slate-500">No workspaces found.</p>
//             ) : (
//               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 {workspaces.map((ws: any) => (
//                   <CardComponent
//                     key={ws._id}
//                     item={{
//                       id: ws._id,
//                       slug: ws.slug,
//                       badge: ws.featured ? "POPULAR" : "",
//                       title: ws.name,
//                       rating: ws.rating || 0,
//                       location: ws.address,
//                       price: ws.plans?.[0]?.price || 0,
//                       images: ws.images?.map((img: any) => img.url) || [],
//                     }}
//                     onQuoteClick={handleOpen}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>

//         {open && (
//           <EnquiryModal
//             open={open}
//             onClose={() => setOpen(false)}
//             space={selectedSpace}
//           />
//         )}
//       </div>
//     </>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CardComponent from "@/app/components/CardComponent/CardComponent";
import EnquiryModal from "@/app/components/CommonModal/EnquiryModal";
import { useCategoryBySlug } from "@/hooks/useCategory";
import { useSubCategoriesByCitySlug } from "@/hooks/useSubCategory";
import { useWorkspacesBySlug } from "@/hooks/useWorkspace";
import CorworkingSpaceCaption from "@/app/components/CorworkingSpaceCaption/CorworkingSpaceCaption";
import CardLoading from "@/app/components/CardLoading";

export default function Page() {
  const { citySlug } = useParams();

  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState<any>(null);

  // Pagination
  const [page, setPage] = useState(1);
  const [allWorkspaces, setAllWorkspaces] = useState<any[]>([]);

  const limit = 12;

  const { data: categoryData } = useCategoryBySlug(citySlug);

  const { data: subCategoryData } =
    useSubCategoriesByCitySlug(citySlug);

  const {
    data: workspaceData,
    isLoading,
    isFetching,
  } = useWorkspacesBySlug(
    citySlug,
    activeTab,
    page,
    limit
  );

  const cityName =
    categoryData?.data?.name || citySlug;

  const tabslist =
    subCategoryData?.data || [];

  useEffect(() => {
    if (!workspaceData?.data) return;

    if (page === 1) {
      setAllWorkspaces(workspaceData.data);
    } else {
      setAllWorkspaces((prev) => {
        const existingIds = new Set(
          prev.map((item) => item._id)
        );

        const newWorkspaces =
          workspaceData.data.filter(
            (item: any) => !existingIds.has(item._id)
          );

        return [...prev, ...newWorkspaces];
      });
    }
  }, [workspaceData, page]);

  const workspaces = allWorkspaces;

  const handleOpen = (item: any) => {
    setSelectedSpace(item);
    setOpen(true);
  };

  // All tab
  const handleAllClick = () => {
    setPage(1);
    setAllWorkspaces([]);
    setActiveTab(null);
  };

  // Subcategory tab
  const handleTabClick = (slug: string) => {
    setPage(1);
    setAllWorkspaces([]);
    setActiveTab(slug);
  };

  // Load more
  const handleLoadMore = () => {
    if (
      workspaceData?.pagination?.hasNextPage &&
      !isFetching
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="mt-[3.8rem]">
        <CorworkingSpaceCaption
          cityName={cityName}
        />

        <section className="bg-[#f5fdff] lg:px-10 px-4 py-10">
          <div className="mx-auto max-w-7xl">

            {/* Tabs */}
            <div className="my-4">
              <div className="mobile-tabs-scroll">
                <ul className="flex w-max min-w-full flex-nowrap gap-4">

                  {/* ALL */}
                  <li
                    onClick={handleAllClick}
                    className={`
                      shrink-0 cursor-pointer
                      rounded-[5px]
                      border-[0.3px]
                      border-primary
                      px-3 py-[6px]
                      text-[13px]
                      font-medium
                      transition-all duration-300
                      ${
                        activeTab === null
                          ? "bg-primary text-white"
                          : "text-primary hover:text-primary"
                      }
                    `}
                  >
                    All
                  </li>

                  {/* SUB CATEGORIES */}
                  {tabslist.map((item: any) => (
                    <li
                      key={item._id}
                      onClick={() =>
                        handleTabClick(item.slug)
                      }
                      className={`
                        shrink-0 cursor-pointer
                        rounded-[5px]
                        border-[0.3px]
                        border-primary
                        px-3 py-[6px]
                        text-[13px]
                        font-medium
                        transition-all duration-300
                        ${
                          activeTab === item.slug
                            ? "bg-primary text-white"
                            : "text-primary hover:text-primary"
                        }
                      `}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10"></div>

            {/* Initial Loading */}
            {isLoading && page === 1 ? (
              <CardLoading />

            ) : workspaces.length === 0 ? (

              <p className="text-slate-500">
                No workspaces found.
              </p>

            ) : (

              <>
                {/* Workspace Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {workspaces.map((ws: any) => (
                    <CardComponent
                      key={ws._id}
                      item={{
                        id: ws._id,
                        slug: ws.slug,
                        badge: ws.featured
                          ? "POPULAR"
                          : "",
                        title: ws.name,
                        rating: ws.rating || 0,
                        location: ws.address,
                        price:
                          ws.plans?.[0]?.price || 0,
                        images:
                          ws.images?.map(
                            (img: any) => img.url
                          ) || [],
                      }}
                      onQuoteClick={handleOpen}
                    />
                  ))}
                </div>

                {/* Load More */}
                {workspaceData?.pagination
                  ?.hasNextPage && (
                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={handleLoadMore}
                      disabled={isFetching}
                      className="
                        rounded-md
                        bg-primary
                        px-6
                        py-3
                        text-sm
                        font-medium
                        text-white
                        transition
                        hover:opacity-90
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      "
                    >
                      {isFetching
                        ? "Loading..."
                        : "Load More"}
                    </button>
                  </div>
                )}

                {/* Loading indicator while loading next page */}
                {isFetching && page > 1 && (
                  <div className="mt-6 text-center text-sm text-slate-500">
                    Loading more workspaces...
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Enquiry Modal */}
        {open && (
          <EnquiryModal
            open={open}
            onClose={() => setOpen(false)}
            space={selectedSpace}
          />
        )}
      </div>
    </>
  );
}