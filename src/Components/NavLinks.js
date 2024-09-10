"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="uppercase h-10 px-5 flex justify-between items-center space-x-4 text-sm text-gray-400 border-b border-slate-700 font-semibold">
      {/* Logo or brand name that links to home */}
      <div>
        <Link
          className={`link lowercase text-white ${
            pathname === "/" ? "active" : ""
          }`}
          href="/"
        >
          m.balami
        </Link>
      </div>

      {/* Navigations links to different pages */}
      <div className="flex space-x-4">

        {/* Home Link */}
        <Link
          className={`link ${
            pathname === "/" ? "text-white" : "text-gray-400"
          }`}
          href="/"
        >
          Home
        </Link>

        {/* Dashboard link */}
        <Link
          className={`link ${
            pathname === "/dashboard" ? "text-white" : "text-gray-400"
          }`}
          href="/dashboard"
        >
          dashboard
        </Link>

        {/* Task1 link */}
        <Link
          className={`link ${
            pathname === "/searchfilter" ? "text-white" : "text-gray-400"
          }`}
          href="/searchfilter"
        >
          searchfilter
        </Link>

        {/* Task2 link */}
        <Link
          className={`link ${
            pathname === "/userlist" ? "text-white" : "text-gray-400"
          }`}
          href="/userlist"
        >
          userlist
        </Link>

        {/* Login link */}
        <Link
          className={`link ${
            pathname === "/login" ? "text-white" : "text-gray-400"
          }`}
          href="/login"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
