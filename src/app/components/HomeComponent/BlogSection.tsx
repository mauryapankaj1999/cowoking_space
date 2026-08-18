// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FiArrowUpRight, FiUser, FiMessageSquare } from "react-icons/fi";
// import MainHeading from "../CommenHeading/MainHeading";
// import { useBlogs } from "@/hooks/useBlog";






// export default function BlogSection() {
//   const {data, isLoading, isError} = useBlogs();


//   console.log(data, "data from blog section");


//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/40 to-blue-50 px-6 py-16 sm:py-12">
//       <div className="mx-auto max-w-7xl">
//         <MainHeading title="Blog" />
        

//         {/* Blog cards */}
//         <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
//           {data?.data?.map((blog: any) => (
//             <article key={blog.slug}>
//               {/* Image with date badge */}
//               <Link
//                 href={`/blog/${blog.slug}`}
//                 className="relative block h-64 w-full overflow-hidden rounded-xl"
//               >
//                 <Image
//                   src={blog.image.url}
//                   alt={blog.title}
//                   fill
//                   className="object-cover transition-transform duration-500 hover:scale-105"
//                 />
              
//               </Link>
//               <h3 className="mt-3 text-[17px] font-bold leading-snug text-slate-900">
//                 <Link href={`/blog/${blog.slug}`} className="hover:text-emerald-700">
//                   {blog.title}
//                 </Link>
//               </h3>

//               {/* Excerpt */}
//               {/* <p className="mt-3 text-sm leading-relaxed text-slate-500">
//                 {blog.excerpt}
//               </p> */}
//               <div
//                       className="prose mt-3 text-sm leading-relaxed text-slate-500 line-clamp-3"
//                       dangerouslySetInnerHTML={{
//                         __html: blog.Description,
//                       }}
//                     />

//               {/* Divider + CTA */}
//               <div className="mt-2 border-t border-slate-200 pt-1">
//                 <Link
//                   href={`/blog/${blog.slug}`}
//                   className="text-[10px] font-bold tracking-wide text-slate-900 hover:text-emerald-700"
//                 >
//                   CONTINUE READING
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";
import MainHeading from "../CommenHeading/MainHeading";
import { useBlogs } from "@/hooks/useBlog";

const PRIMARY = "#003F2D";

export default function BlogSection() {
  const { data, isLoading, isError } = useBlogs();

  const blogs = data?.data || [];

  return (
    <section className="relative overflow-hidden bg-[#F9FBFC] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            {/* <span
              className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
              style={{ backgroundColor: `${PRIMARY}14`, color: PRIMARY }}
            >
              <FiBookOpen className="h-3.5 w-3.5" />
              From the blog
            </span> */}
            <MainHeading title="Insights & Resources" />
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-500">
              Tips, guides and trends on coworking, hybrid work and finding
              the right office.
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold transition hover:gap-2.5 sm:flex"
            style={{ color: PRIMARY }}
          >
            View all articles
            <FiArrowRight className="h-4 w-4 transition-transform" />
          </Link>
        </div>

        {isLoading ? (
          <p className="mt-12 text-center text-sm text-slate-400">
            Loading articles...
          </p>
        ) : blogs.length === 0 ? (
          <p className="mt-12 text-center text-sm text-slate-400">
            No articles yet.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogs.map((blog: any) => (
              <article
                key={blog.slug}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <Link
                  href={`/blog/${blog.slug}`}
                  className="relative block h-52 w-full overflow-hidden"
                >
                  <Image
                    src={blog.image?.url}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </Link>

                <div className="p-5">
                  <h3 className="line-clamp-2 text-[17px] font-bold leading-snug text-slate-900">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="transition-colors duration-300"
                      style={{ color: "inherit" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = PRIMARY)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "inherit")
                      }
                    >
                      {blog.title}
                    </Link>
                  </h3>

                  <div
                    className="prose mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500"
                    dangerouslySetInnerHTML={{
                      __html: blog.Description,
                    }}
                  />

                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold tracking-wide transition-all duration-300 group-hover:gap-2.5"
                      style={{ color: PRIMARY }}
                    >
                      CONTINUE READING
                      <FiArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Mobile "view all" link */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: PRIMARY }}
          >
            View all articles
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}