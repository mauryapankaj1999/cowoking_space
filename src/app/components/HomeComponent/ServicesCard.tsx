"use client";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import MainHeading from "../CommenHeading/MainHeading";
import { useWorkspaces } from "@/hooks/useWorkspace";

const SERVICES = [
  {
    slug: "private-office-spaces",
    title: "Coworking Spaces",
    description: "Perfect for businesses that need quiet dedicated space.",
    image: "img/service-img-1.jpg",
  },
  {
    slug: "meeting-rooms",
    title: "Manage Office Space",
    description: "Perfect for businesses that need quiet dedicated space.",
    image: "img/service-img-2.jpg",
  },
  {
    slug: "virtual-office",
    title: "virtual office space",
    description: "Perfect for businesses that need quiet dedicated space.",
    image: "img/service-img-3.jpg",
  },
];

export default function ServicesCardMain() {


 



  return (
    <section className="bg-white px-6 py-16 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <MainHeading title="Flexible Workspace Solutions" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="group relative block overflow-hidden rounded-[20px]"
            >
              <figure className="relative m-0 aspect-[1/1.2] w-full overflow-hidden rounded-[20px]">
                <div className="relative h-full w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full rounded-[20px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-0 w-[200%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30 transition-all duration-[600ms] ease-linear group-hover:h-[250%] group-hover:bg-transparent" />
                </div>

                {/* Darker gradient overlay */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              </figure>

              <div className="absolute inset-x-10 bottom-10 z-[2] translate-y-[50px] transition-all duration-500 ease-out group-hover:translate-y-0">
                <h3 className="mb-2.5 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="m-0 text-white/90">{item.description}</p>

                <span className="mt-5 flex items-center gap-1.5 text-[15px] font-semibold text-[#D6FF5C] opacity-0 invisible transition-all delay-100 duration-500 ease-out group-hover:visible group-hover:opacity-100">
                  Learn More
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
