"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

// import NavDropdown from "./NavDropdown";
import { useCategories } from "@/hooks/useCategory";
import { useOperators } from "@/hooks/useOperator";

import NavDropdown from "@/app/components/NavDropdown";
// import { useWorkspaceCategories } from "@/hooks/useworkspaceCategory";
import { useWorkspaceCategories } from "@/hooks/useWorkspaceCategory";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data: citiesData, isLoading: citiesLoading } = useCategories();
  const { data: categoriesData, isLoading: categoriesLoading } = useWorkspaceCategories();
  const { data: operatorsData, isLoading: operatorsLoading } = useOperators();

  const cities = citiesData?.data || [];
  const categories = categoriesData?.data || [];
  const operators = operatorsData?.data || [];

  const menus = [
    { title: "About Us", link: "/about" },
    // { title: "Virtual Office", link: "/virtual-office" },
  ];

  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-transparent"
          : scrolled
          ? "border-slate-200 bg-white/70 shadow-sm backdrop-blur-md"
          : "border-b border-slate-200 bg-[#F8F9FF] shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span
              className={`text-xl font-medium transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-slate-900"
              }`}
            >
              {/* FyndMySpace */}
              {
                isTransparent ?
                <img src="/img/logo11.png" alt="logo" className="h-9 w-48 object-contain" />
                :
                <img src="/img/black_logo11.png" alt="logo" className="h-9 w-48 object-contain" />

              }



            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            <NavDropdown
              label="Cities"
              items={cities}
                basePath="/coworking"
              isTransparent={isTransparent}
              loading={citiesLoading}
            />

            <NavDropdown
              label="Categories"
              items={categories}
              basePath="/category"
              isTransparent={isTransparent}
              loading={categoriesLoading}
            />

            <NavDropdown
              label="Operators"
              items={operators}
               basePath="/operator"
              isTransparent={isTransparent}
              loading={operatorsLoading}
            />

            {/* <NavDropdown
              label="Coliving"
              items={[
                { title: "Manage Office", link: "/coliving" },
                { title: "Virtual Office", link: "/virtual-office" },
              ]}
              basePath="/coliving"
              isTransparent={isTransparent}
            /> */}
            

            {menus.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`text-[15px] transition-colors duration-300 hover:text-white/[0.8] ${
                  isTransparent ? "text-white/90" : "text-slate-500"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+9911900230"
              className={`flex items-center gap-2 text-[15px] font-medium transition-colors duration-300 hover:text-[#1764D8] ${
                isTransparent ? "text-white" : "text-slate-700"
              }`}
            >
              <FiPhone className="h-4 w-4" />
              +91 991190 0230
            </a>

            <button
              className={`rounded-md px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                isTransparent
                  ? "bg-white text-slate-900 hover:bg-white/90"
                  : "bg-primary text-white hover:bg-promary-800"
              }`}
            >
              List your space
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX className={`h-7 w-7 ${isTransparent ? "text-white" : "text-slate-900"}`} />
            ) : (
              <FiMenu className={`h-7 w-7 ${isTransparent ? "text-white" : "text-slate-900"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="flex flex-col px-5 py-5">
            <p className="pt-2 pb-1 text-xs font-semibold uppercase text-slate-400">Cities</p>
            {cities.map((c: any) => (
              <Link
                key={c.slug}
                href={`/coworking/${c.slug}`}
                className="py-2 text-[15px] text-slate-700"
                onClick={() => setMenuOpen(false)}
              >
                {c.name}
              </Link>
            ))}

            <p className="pt-4 pb-1 text-xs font-semibold uppercase text-slate-400">Categories</p>
            {categories.map((c: any) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="py-2 text-[15px] text-slate-700"
                onClick={() => setMenuOpen(false)}
              >
                {c.name}
              </Link>
            ))}

            <p className="pt-4 pb-1 text-xs font-semibold uppercase text-slate-400">Operators</p>
            {operators.map((o: any) => (
              <Link
                key={o.slug}
                href={`/operator/${o.slug}`}
                className="py-2 text-[15px] text-slate-700"
                onClick={() => setMenuOpen(false)}
              >
                {o.name}
              </Link>
            ))}

            {/* {menus.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="py-3 border-b text-[15px] text-slate-700"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))} */}

            <a
              href="tel:+919911900230"
              className="mt-4 flex items-center gap-2 text-[15px] font-medium text-slate-700"
            >
              <FiPhone className="h-4 w-4" />
              +91 991190 0230
            </a>

            <button className="mt-4 rounded-md bg-primary px-6 py-3 font-medium text-white">
              List your space
            </button>
          </div>
        </div>
      )}
    </header>
  );
}