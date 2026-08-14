"use client";
import { useBlogs } from "@/hooks/useBlog";
import react from "react";
import Link from "next/link";
export default function Page() {
  const { data, isLoading, isError } = useBlogs();

  console.log(data, "data from blog section");
  return (
    <div className="container mx-auto px-4 py-8 mt-12   ">
      <section className="mx-auto mt-4 w-[100%] rounded-[30px] bg-[#0E2A2F] py-36 relative overflow-hidden">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-semibold text-white">Blog</h1>

          <div className="mt-5 flex items-center gap-3 text-2xl text-white">
            <span>Home</span>
            <span>/</span>
            <span className="font-medium">Blog</span>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {data?.data?.map((blog: any) => (
            <div
              key={blog._id}
              className="group cursor-pointer overflow-hidden rounded-[22px]"
            >
              <Link href={`/blog/${blog.slug}`}>
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={blog.image?.url}
                    alt={blog.title}
                    className="h-[280px] w-full rounded-[22px] object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>

              <Link href={`/blog/${blog.slug}`} className="mb-4 block">
                <h2 className="mt-6 line-clamp-2 text-[15px] font-semibold leading-tight text-[#18353D] hover:text-[#C79A4B] transition-colors">
                  {blog.title}
                </h2>
              </Link>

              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
