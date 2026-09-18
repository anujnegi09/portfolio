"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-15 border-white  border-b  bg-slate-950 flex items-center justify-center gap-8">
      <Link
        href="/"
        className={`relative text-md text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full  ${
          pathname === "/"
            ? "text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]"
            : "text-gray-700 hover:text-violet-400"
        }`}
      >
        Home
      </Link>
      <Link
        href="/#about"
        className={`relative text-md text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full ${
          pathname === "/about"
            ? "text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]"
            : "text-gray-700 hover:text-violet-400"
        }`}
      >
        About
      </Link>
      <Link
        href="/projects"
        className={`relative text-md text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full ${
          pathname === "/projects"
            ? "text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]"
            : "text-gray-700 hover:text-violet-400"
        }`}
      >
        Projects
      </Link>
      <Link
        href="/skills"
        className={`relative text-md text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full ${
          pathname === "/skills"
            ? "text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]"
            : "text-gray-700 hover:text-violet-400"
        }`}
      >
        Skills
      </Link>
      <Link
        href="/contact"
        className={`relative text-md text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full ${
          pathname === "/contact"
            ? "text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]"
            : "text-gray-700 hover:text-violet-400"
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}
