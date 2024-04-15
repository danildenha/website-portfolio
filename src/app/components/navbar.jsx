"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='h-full flex items-center justify-between 
        px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* LOGO WITH GRADIENT */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify:left">
        <Link href="/" className="flex items-center justify-center">
          <span className="text-3xl font-bold tracking-wide 
  bg-gradient-to-r from-blue-600 to-black
  text-transparent bg-clip-text">Denha</span>
          <span className="ml-3 text-white text-sm rounded-md px-4 py-2 shadow-md" style={{ backgroundImage: 'linear-gradient(to right, #000000, #2563EB)' }}>portfolio</span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title}/>
        ))}
      </div>
      {/* SOCIAL MEDIA */}
      <div className="hidden sm:flex md:flex gap-4 w-1/3 justify-center">
        <Link href="https://github.com/danildenha">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/danil-denha/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden"></div>
      {/* MENU BUTTON */}
      <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(() => setOpen(!open))}>
        <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-black rounded"></div>
        <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-black rounded"></div>
        <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-black rounded"></div>
      </button>
      {/* MENU BUTTON LIST */}
      {open && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white
      flex flex-col items-center 
      justify-center gap-8 text-4xl z-40">
          {links.map((link) => (
            <Link href={link.url}>{link.title}</Link>
          ))}
        </div>
      )}



      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default Navbar;