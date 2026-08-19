"use client";

import { useParams } from "next/navigation";
import { useBlogBySlug } from "@/hooks/useBlog";
import Enqueryform from "@/app/components/WorkspaceDetailsComponent/Enqueryform";

export default function BlogDetails() {
  const { slug } = useParams();

  const { data, isLoading } = useBlogBySlug(
    Array.isArray(slug) ? slug[0] : slug,
  );

  const blog = data?.data;

  if (isLoading) return <p>Loading...</p>;

  if (!blog) return <p>Blog not found</p>;

  return (
    <section className="p-10 mt-12">
      <img
        src={`${blog.image.url}`}
        alt={blog.title}
        className="w-full rounded-2xl h-[80vh] object-cover mb-5"
      />
      <div className="section-container">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <h2 className="font-semibold text-2xl mb-4">{blog.title}</h2>
              <div
                className="prose m"
                dangerouslySetInnerHTML={{
                  __html: blog.Description,
                }}
              />
            </div>
            <div className="col-span-4">
              <div className="sticky top-20">
                <Enqueryform  data={data} />
              </div>
            </div>
          </div>
          {/* <h2 className="font-semibold text-2xl mb-4">{blog.title}</h2>
          <div
            className="prose m"
            dangerouslySetInnerHTML={{
              __html: blog.Description,
            }}
          /> */}
        </div>
      </div>
    </section>
  );
}
