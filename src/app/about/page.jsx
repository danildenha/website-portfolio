"use client";
import { motion, useInView, useScroll } from "framer-motion";
import ExperienceItem from "./experience";
import SkillItem from "./skillItem.jsx";
import { useRef } from "react";
import ScrollIcon from "./scrollIcon.jsx";
import Brain from "../components/brain"

const AboutPage = () => {
  const skills = ["C++", "C", "Python", "JavaScript", "Swift", "HTML/CSS", "Bash", "SQL", "Nodejs"]
  const experienceData = [
    {
      title: "Software Engineering Internship",
      description: "Developed fullstack websites / built filesharing systems (Strapi, Nextjs, Tailwind CSS)",
      date: "Feb 2024 - Present",
      company: "Aeroplicity",
      align: "left"
    },
    {
      title: "Backend Developer Internship",
      description: "Utilized SQL with automation scripts in Python working with databases",
      date: "May 2023 – August 2023",
      company: "FollowStyle",
      align: "right"
    },
    {
      title: "National Hackathon Winner",
      description: "Built an AI bot for a Ukrainian telecom provider LifeCell",
      date: "June 2023",
      company: "GoIT",
      align: "left"
    }
    // Add more experience items as needed
  ];
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}

            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">Biography</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SCROLL SVG */}
            <ScrollIcon />
          </div>
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
      {/* SKILL TITLE */}
      <motion.h1 initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">
              SKILLS
              </motion.h1>
      {/* SKILL LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        className="flex gap-4 flex-wrap"
      >
        {/* Render Skill Items */}
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </motion.div>
      {/* SKILL SCROLL SVG */}
      <ScrollIcon />
    </div>
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE CONTAINER */}
            <div
              className="flex flex-col gap-12 justify-center pb-48"
              ref={experienceRef}
            >
              {/* EXPERIENCE TITLE */}
              <motion.h1 initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">
                Professional Experiences
              </motion.h1>
              {/* EXPERIENCE LIST */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isExperienceRefInView ? { x: "0" } : {}}
                className=""
              >
                {/* RENDER EXPERIENCE ITEMS */}
                {experienceData.map((experience, index) => (
                  <ExperienceItem key={index} {...experience} />
                ))}
              </motion.div>
            </div>
          </div>

        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
        </div>
    </motion.div>
  );
};

export default AboutPage;