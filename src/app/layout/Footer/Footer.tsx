"use client";

import BookDemoButton from "@/app/components/BookDemoButton";
import EnquiryModal from "@/app/components/CommonModal/EnquiryModal";
import Link from "next/link";
import { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Coworking", href: "/coworking" },
      { label: "Manage Office", href: "/coliving" },
      { label: "Virtual Office", href: "/virtual-office" },
      // { label: "Meeting Rooms", href: "/meeting-rooms" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      // { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "/help-center" },
      { label: "List a space", href: "/list-a-space" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectedSpace, setSelectedSpace] = useState(null);
  return (
    <>
    <footer className="bg-primary border-t border-border  px-6 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Logo + tagline */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
             
              <span className="text-xl font-bold text-white">
                FyndMySpace
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              India&apos;s marketplace for flexible workspaces. Find, book and
              manage on one platform.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-base font-bold text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/90 transition-colors duration-300 hover:underline hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 h-px w-full bg-slate-200" />

        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/90">
            © {year} FyndMySpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:hello@worknest.in"
              className="flex items-center gap-2 text-sm text-white/90 transition "
            >
              <FiMail className="h-4 w-4" />
              hello@worknest.in
            </a>
            <a
              href="tel:+919355689999"
              className="flex items-center gap-2 text-sm text-white/90 transition"
            >
              <FiPhone className="h-4 w-4" />
              +91 93556 89999
            </a>
          </div>
        </div>
      </div>
    </footer>
    <BookDemoButton setIsModalOpen={setIsModalOpen} />

 <EnquiryModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
  space={selectedSpace}

      />
    </>
  );
}