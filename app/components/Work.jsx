import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react"

const Work = ({ DarkMode }) => {
  const [visibleProjects, setVisibleProjects] = useState(4); // Initially show 4 projects

  const handleShowMore = () => {
    setVisibleProjects(workData.length); // Show all projects
  };

  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
     id="work" className="w-full px-[12%] py-10 scroll-mt-20">

      <motion.h4 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.3}}
      className="text-center mb-2 text-lg font-Ovo">My portfolio</motion.h4>

      <motion.h2
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.3}}
       className="text-center text-5xl font-Ovo">My latest work</motion.h2>

      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}}
       className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my portfolio! Explore a collection of projects showcasing my expertise in Full-stack development.
      </motion.p>

      {/* Grid Layout */}
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}} 
       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 justify-center">
        {workData.slice(0, visibleProjects).map((project, index) => (
          <motion.div
          whileInView={{scale:1.05}}
          transition={{duration:0.3}}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold dark:text-black">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  className="w-5"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      {workData.length > visibleProjects && (
        <motion.button
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:1.1}}
          onClick={handleShowMore}
          className="w-max flex justify-center items-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-black dark:border-white dark:hover:bg-darkHover"
        >
          Show more
          <Image
            src={
              DarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
            }
            alt="Right arrow"
            className="w-4"
          />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Work;
