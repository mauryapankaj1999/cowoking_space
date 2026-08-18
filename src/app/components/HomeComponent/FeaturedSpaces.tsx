"use client";
import CardComponent from "../CardComponent/CardComponent";
import MainHeading from "../CommenHeading/MainHeading";
import { useWorkspaces } from "@/hooks/useWorkspace";

export default function FeaturedSpaces() {
  const { data, isLoading, isError } = useWorkspaces();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-[#F9FBFC] px-6 py-16 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <MainHeading title="Featured Spaces in NCR" />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.data?.slice(0, 9).map((space: any) => (
            <CardComponent
              key={space._id}
              item={{
                id: space._id,
                slug: space.slug,
                badge: space.featured ? "POPULAR" : "",
                title: space.name,
                rating: space.rating || 0,
                location: `${space.subCategory?.name || ""}, ${space.category?.name || ""}`,
                price: space.plans?.[0]?.price || 0,
                images: space.images?.map((img: any) => img.url) || [],
              }}
              linkPrefix={`/coworking/${space.category?.name
                ?.toLowerCase()
                .replace(/\s+/g, "-")}/${space.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}