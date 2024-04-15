"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded-full py-2 px-2 text-sm font-semibold tracking-wide uppercase transition duration-300 ease-in-out ${pathName === link.url ? "bg-gradient-to-r from-blue-500 to-gray-600 text-white shadow-md hover:shadow-lg" : "text-gray-700 hover:bg-gradient-to-r from-blue-50 to-silver-400"}`} href={link.url}>
  {link.title}
</Link>

  );
};

export default NavLink;