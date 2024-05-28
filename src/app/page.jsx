"use client";
import Image from "next/image";
import { motion } from "framer-motion";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full p-1 lg:w-1/2 relative">
          <Image src="https://github.com/danildenha/website-portfolio/blob/584d981b8c5a6e86ea583337eee82be6d159e457/public/hero.png?raw=true" alt="" fill className="object-contain" priority/>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <a href="website-portfolio/portfolio">
            <button className="primary">View My Work</button>
            </a>
            <a href="website-portfolio/contact">
            <button className="secondary">Contact Me</button>
            </a>

          </div>
        </div>
      </div>
      </motion.div>
  );
};

export default Homepage;