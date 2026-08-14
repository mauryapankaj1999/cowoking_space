"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiUser, FiMessageSquare } from "react-icons/fi";
import MainHeading from "../CommenHeading/MainHeading";
import { useBlogs } from "@/hooks/useBlog";






export default function BlogSection() {
  const {data, isLoading, isError} = useBlogs();


  console.log(data, "data from blog section");


  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/40 to-blue-50 px-6 py-16 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <MainHeading title="Blog" />
        

        {/* Blog cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {data?.data?.map((blog: any) => (
            <article key={blog.slug}>
              {/* Image with date badge */}
              <Link
                href={`/blog/${blog.slug}`}
                className="relative block h-64 w-full overflow-hidden rounded-xl"
              >
                <Image
                  src={blog.image.url}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              
              </Link>
              <h3 className="mt-3 text-[17px] font-bold leading-snug text-slate-900">
                <Link href={`/blog/${blog.slug}`} className="hover:text-emerald-700">
                  {blog.title}
                </Link>
              </h3>

              {/* Excerpt */}
              {/* <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {blog.excerpt}
              </p> */}
              <div
                      className="prose mt-3 text-sm leading-relaxed text-slate-500 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: blog.Description,
                      }}
                    />

              {/* Divider + CTA */}
              <div className="mt-2 border-t border-slate-200 pt-1">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-[10px] font-bold tracking-wide text-slate-900 hover:text-emerald-700"
                >
                  CONTINUE READING
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}