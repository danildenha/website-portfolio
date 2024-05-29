"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-purple-300",
    title: "TSP in C++",
    desc: "This project solves TSP in C++ using dynamic programming and bitset vectors. Given list of cities and distances between, the task is to find the shortest Hamiltonian Cycle. This project can efficiently handle small-medium instances of the problem in O(n^2 * 2^n)",
    img: "https://i.ytimg.com/vi/cY4HiiFHO1o/maxresdefault.jpg",
    link: "https://github.com/danildenha/TSP",
  },
  {
    id: 2,
    color: "from-purple-300 to-blue-300",
    title: "Sudoku Solver in Python",
    desc: "This Sudoku Solving App is a Python program that utilizes the Pygame library to create an interactive interface for solving Sudoku puzzles. It is designed to allow users to input their own Sudoku puzzles, receive step-by-step solving visualizations, and view the solution.",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilVgOK_q714LFvmLQxNmgt7RmtayO6AKkycakErIfRjGIF8F75D_Vp_TY4Bv1knbzZDw8zm2LFffmPizf65kh5BE4SSaUzBkmy3d3qxGDsC9jKIyLKStxEM916aXQ11n5q3Dbs96fSDPxm/s1600/Screenshot-Sudoku+Solver-2.png",
    link: "https://github.com/danildenha/Sudoku-Solver",
  },
  {
    id: 3,
    color: "from-blue-300 to-purple-300",
    title: "VisionOS App in Swift",
    desc: "VisionOS App that implements 3D objects and creates random GIFs in immersed reality. Generates random GIFs on user button press using API calls. Includes a collection of 3D models for interactive exploration.",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*xCTmjMthlzg6NtnG56L7VQ.png",
    link: "https://github.com/danildenha/visionOsApp",
  },
  {
    id: 4,
    color: "from-purple-300 to-yellow-300",
    title: "Neural Nets in C++",
    desc: "This repository hosts various projects showcasing the implementation of neural networks in C++. These projects demonstrate the fundamental concepts of neural networks applied to logical operations and number recognition tasks.",
    img: "https://www.trentonsystems.com/hubfs/Neural_Networks.png",
    link: "https://github.com/danildenha/Neural-Networks",
  },
  {
    id: 5,
    color: "from-yellow-300 to-red-300",
    title: "A* Search Python",
    desc: "This A* Search project uses Python and Pygame to visualize an informed best-first search algorithm that efficiently determines the lowest cost path between any two nodes in a directed weighted graph with non-negative edge weights.",
    img: "https://theory.stanford.edu/~amitp/game-programming/a-star/best-first-search-trap.png?2017-11-17-16-52-06",
    link: "https://github.com/danildenha/Astar.search",
  }
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Code</button>
                  </Link>

                </div>
              </div>
            ))}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-purple-300" />
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                SWE|Full Stack|Data Scientist|Quant
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="custom-circle"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;