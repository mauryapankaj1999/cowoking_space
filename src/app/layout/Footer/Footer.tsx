"use client";

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
    <footer className="bg-[#FBF7EF] border-t border-border bg-secondary/40 px-6 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Logo + tagline */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
             
              <span className="text-xl font-bold text-slate-900">
                Office Spaces
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              India&apos;s marketplace for flexible workspaces. Find, book and
              manage on one platform.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-base font-bold text-slate-900">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-slate-500 transition hover:text-[#1764D8]"
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
          <p className="text-sm text-slate-500">
            © {year} WorkNest. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:hello@worknest.in"
              className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-[#1764D8]"
            >
              <FiMail className="h-4 w-4" />
              hello@worknest.in
            </a>
            <a
              href="tel:+919355689999"
              className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-[#1764D8]"
            >
              <FiPhone className="h-4 w-4" />
              +91 93556 89999
            </a>
          </div>
        </div>
      </div>
    </footer>
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[99999]">
      <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#1764D8] border border-[#1764D8] rounded-l-lg px-3 py-4 font-semibold shadow-lg hover:bg-[#1764D8] hover:text-white transition-all duration-300">
        <span className="[writing-mode:vertical-rl] whitespace-nowrap">
          Book a demo
        </span>
      </button>
    </div>

 <EnquiryModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
  space={selectedSpace}

      />
    </>
  );
}