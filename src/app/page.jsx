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
          <Image 
            src="https://github.com/danildenha/website-portfolio/blob/584d981b8c5a6e86ea583337eee82be6d159e457/public/hero.png?raw=true" 
            alt="Hero Image" 
            fill 
            className="object-contain" 
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex">
            Computer Science student delivering tech mastery
          </h1>
          {/* DESC */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center">
            Welcome to my website portfolio, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio demonstrates a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center">
            <a href="website-portfolio/portfolio">
              <button className="primary w-full sm:w-auto text-base sm:text-lg md:text-xl">
                <span className="block lg:hidden">Works</span>
                <span className="hidden lg:block">View My Work</span>
              </button>
            </a>
            <a href="website-portfolio/contact">
              <button className="secondary w-full sm:w-auto text-base sm:text-lg md:text-xl">
                <span className="block lg:hidden">Contact</span>
                <span className="hidden lg:block">Contact Me</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
