// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FiPhone, FiMenu, FiX } from "react-icons/fi";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menus = [
//     { title: "Coworking", link: "/coworking" },
//     { title: "Coliving", link: "/coliving" },
//     { title: "Virtual Office", link: "/virtual-office" },
//     { title: "Enterprise", link: "/enterprise" },
//   ];

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//         scrolled
//           ? "border-slate-200 bg-white/70 shadow-sm backdrop-blur-md"
//           : "border-b border-slate-200 bg-[#F8F9FF] shadow-none"
//       }`}
//     >
//       <div className="mx-auto max-w-7xl px-4 lg:px-8">
//         <div className="flex items-center justify-between py-3">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2.5">
           
//             <span className="text-xl font-bold text-slate-900">
//              Office Spaces
//             </span>
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden lg:flex items-center gap-9">
//             {menus.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.link}
//                 className="text-[15px] text-slate-500 transition hover:text-[#1764D8]"
//               >
//                 {item.title}
//               </Link>
//             ))}
//           </nav>

//           {/* Right side */}
//           <div className="hidden lg:flex items-center gap-6">
//             <a
//               href="tel:+919355689999"
//               className="flex items-center gap-2 text-[15px] font-medium text-slate-700 hover:text-[#1764D8]"
//             >
//               <FiPhone className="h-4 w-4" />
//               +91 93556 89999
//             </a>

//             <button className="rounded-md bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800">
//               List your space
//             </button>
//           </div>

//           {/* Mobile toggle */}
//           <button
//             className="lg:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <FiX className="h-7 w-7 text-slate-900" />
//             ) : (
//               <FiMenu className="h-7 w-7 text-slate-900" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div className="border-t bg-white lg:hidden">
//           <div className="flex flex-col px-5 py-5">
//             {menus.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.link}
//                 className="py-3 border-b text-[15px] text-slate-700"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.title}
//               </Link>
//             ))}

//             <a
//               href="tel:+919355689999"
//               className="mt-4 flex items-center gap-2 text-[15px] font-medium text-slate-700"
//             >
//               <FiPhone className="h-4 w-4" />
//               +91 93556 89999
//             </a>

//             <button className="mt-4 rounded-md bg-slate-900 py-3 font-medium text-white">
//               List your space
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

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

  const menus = [
    { title: "Coworking", link: "/coworking" },
    { title: "Coliving", link: "/coliving" },
    { title: "Virtual Office", link: "/virtual-office" },
    { title: "Enterprise", link: "/enterprise" },
  ];

  // sirf home page ke top pe (video ke upar), scroll se pehle transparent
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
              className={`text-xl font-bold transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-slate-900"
              }`}
            >
              Office Spaces
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {menus.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`text-[15px] transition-colors duration-300 hover:text-[#1764D8] ${
                  isTransparent ? "text-white/90" : "text-slate-500"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-6">
            
              <a href="tel:+919355689999"
              className={`flex items-center gap-2 text-[15px] font-medium transition-colors duration-300 hover:text-[#1764D8] ${
                isTransparent ? "text-white" : "text-slate-700"
              }`}
            >
              <FiPhone className="h-4 w-4" />
              +91 93556 89999
            </a>

            <button
              className={`rounded-md px-6 py-3 font-medium transition-all duration-300 ${
                isTransparent
                  ? "bg-white text-slate-900 hover:bg-white/90"
                  : "bg-slate-900 text-white hover:bg-slate-800"
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
              <FiX
                className={`h-7 w-7 ${isTransparent ? "text-white" : "text-slate-900"}`}
              />
            ) : (
              <FiMenu
                className={`h-7 w-7 ${isTransparent ? "text-white" : "text-slate-900"}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="flex flex-col px-5 py-5">
            {menus.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="py-3 border-b text-[15px] text-slate-700"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}

            
             <a href="tel:+919355689999"
              className="mt-4 flex items-center gap-2 text-[15px] font-medium text-slate-700"
            >
              <FiPhone className="h-4 w-4" />
              +91 93556 89999
            </a>

            <button className="mt-4 rounded-md bg-slate-900 py-3 font-medium text-white">
              List your space
            </button>
          </div>
        </div>
      )}
    </header>
  );
}