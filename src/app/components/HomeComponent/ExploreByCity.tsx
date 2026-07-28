import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import MainHeading from "../CommenHeading/MainHeading";

const cities = [
  {
    name: "Delhi",
    spaces: "420+ spaces",
    slug: "Delhi",
    image: "/img/cities/space-coworking.jpg",
  },
  {
    name: "Noida",
    spaces: "310+ spaces",
    slug: "Noida",
    image: "/img/cities/space-coworking1.jpg",
  },
  {
    name: "Noida",
    spaces: "380+ spaces",
    slug: "Gurgaon",
    image: "/img/cities/space-coworking2.jpg",
  },
  {
    name: "Coming soon",
    spaces: "190+ spaces",
    slug: "pune",
    image: "/img/cities/space-coworking3.jpg",
  },
];

export default function ExploreByCity() {
  return (
    <section className="bg-[#FAF6ED] px-6 py-16 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <MainHeading title="Explore by city" />
        </div>

        {/* City cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/coworking/${city.slug}`}
              className="group relative block h-[400px] overflow-hidden rounded-2xl"
            >
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent" />

              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white">{city.name}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
                  <FiMapPin className="h-3.5 w-3.5" />
                  {city.spaces}
                </div>
              </div>
            </Link>
          ))}
        </div>

      
      </div>
    </section>
  );
}