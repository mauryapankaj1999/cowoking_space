import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiUser, FiMessageSquare } from "react-icons/fi";
import MainHeading from "../CommenHeading/MainHeading";

const blogs = [
  {
    slug: "how-co-working-boosts-productivity",
    image: "/img/smallimg3.jpg",
    date: "01 December, 2025",
    author: "admin",
    comments: "05",
    title: "How Co-Working Boosts Productivity",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rerum voluptas harum...",
  },
  {
    slug: "tips-for-building-a-strong-remote-work-routine",
    image: "/img/smallimg2.jpg",
    date: "01 December, 2025",
    author: "admin",
    comments: "05",
    title: "Tips for Building a Strong Remote Work Routine",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rerum voluptas harum...",
  },
  {
    slug: "why-startups-prefer-flexible-workspaces",
    image: "/img/smallimg1.jpg",
    date: "01 December, 2025",
    author: "admin",
    comments: "05",
    title: "Why Startups Prefer Flexible Workspaces",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rerum voluptas harum...",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white px-6 py-16 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <MainHeading title="Blog" />
        

        {/* Blog cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.slug}>
              {/* Image with date badge */}
              <Link
                href={`/blog/${blog.slug}`}
                className="relative block h-64 w-full overflow-hidden rounded-xl"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-md bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white">
                  {blog.date}
                </span>
              </Link>

              {/* Meta */}
              <div className="mt-4 flex items-center gap-5 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5">
                  <FiUser className="h-3.5 w-3.5" />
                  By {blog.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiMessageSquare className="h-3.5 w-3.5" />
                  Comments ({blog.comments})
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
                <Link href={`/blog/${blog.slug}`} className="hover:text-emerald-700">
                  {blog.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {blog.excerpt}
              </p>

              {/* Divider + CTA */}
              <div className="mt-5 border-t border-slate-200 pt-4">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-xs font-bold tracking-wide text-slate-900 hover:text-emerald-700"
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