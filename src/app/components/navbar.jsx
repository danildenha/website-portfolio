"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import NavLink from "./navLink"
import '../content.css'
import {motion} from "framer-motion"

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

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
      <NavLink link={link} key={link.title} />
    ))}
  </div>
      {/* SOCIAL MEDIA */}
      <div className="hidden sm:flex md:flex gap-4 w-1/3 justify-center">
  <div className="transition-transform duration-500 ease-out text-gray-200 rounded-full transform hover:scale-110">
    <a href="https://github.com/danildenha" target="_blank" rel="noopener noreferrer">
      <img src="https://github.com/danildenha/website-portfolio/blob/9be4dacaf62156e2438158b81e3c0791a0b86009/public/github.png?raw=true" alt="GitHub" width={24} height={24} />
    </a>
  </div>
  <div className="transition-transform duration-500 ease-out text-gray-700 transform hover:scale-110">
  <a href="https://www.linkedin.com/in/danil-denha/" target="_blank" rel="noopener noreferrer">
    <img src="https://github.com/danildenha/website-portfolio/blob/9be4dacaf62156e2438158b81e3c0791a0b86009/public/linkedin.png?raw=true" alt="LinkedIn" width={24} height={24} />
  </a>
</div>

</div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-50"
        >
          {links.map((link) => (
            <motion.div
              variants={listItemVariants}
              className=""
              key={link.title}
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
        )}
      </div>
    </div>
  );
};


export default Navbar;