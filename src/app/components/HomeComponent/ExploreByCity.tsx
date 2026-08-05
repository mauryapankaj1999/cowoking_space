"use client";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import MainHeading from "../CommenHeading/MainHeading";
import { useCategories } from "@/hooks/useCategory";


export default function ExploreByCity() {
  const { data, isLoading, error } = useCategories();
  console.log(data, "data from services card main");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-[#FAF6ED] px-6 py-16 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <MainHeading title="Explore by city" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data?.data?.map((city:any) => (
            <Link
              key={city.slug}
              href={`/coworking/${city.slug}`}
              className="group relative block h-[400px] overflow-hidden rounded-2xl"
            >
              <Image
                src={city.image?.url}
                alt={city.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white">{city.name}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
                  <FiMapPin className="h-3.5 w-3.5" />
                  420+ spaces
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
