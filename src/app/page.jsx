"use client";
import Image from "next/image";


const Homepage = () => {
  return (
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative mr-10">
          <Image src="/hero.png" alt="" fill className="object-contain" />
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
          <button className="p-4 rounded-lg ring-1 bg-black text-white 
          transition duration-300 ease-in-out transform hover:scale-105 
          hover:bg-gradient-to-r from-black to-blue-800 hover:shadow-lg">
           View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black text-white 
          transition duration-300 ease-in-out transform hover:scale-105 
          hover:bg-gradient-to-r from-blue-100 hover:shadow-lg ">
              Contact Me
            </button>
          </div>
        </div>
      </div>
  );
};

export default Homepage;