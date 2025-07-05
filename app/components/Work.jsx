"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Work = ({ DarkMode }) => {
  const initialVisible = 3;
  const [visibleProjects, setVisibleProjects] = useState(initialVisible);

  const toggleVisibility = () => {
    setVisibleProjects((prev) =>
      prev >= workData.length ? initialVisible : workData.length
    );
  };

  const isAllVisible = visibleProjects >= workData.length;

  return (
    <motion.section
      id="work"
      className="w-full px-4 sm:px-[10%] py-20 scroll-mt-20 bg-white dark:bg-darkTheme text-black dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-2"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Portfolio
      </motion.h4>

      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold font-serif mb-12"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My Latest Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {workData.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-gray-300 dark:border-white/20 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div
                className="w-full h-48 sm:h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              ></div>

              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </a>

            {/* GitHub Repo Button outside the card */}
            {project.github && (
              <div className="px-5 py-3 bg-white dark:bg-darkTheme border-t border-gray-200 dark:border-white/10 flex items-center justify-between rounded-b-xl">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:underline inline-flex items-center gap-1"
                >
                  GitHub Repo
                  <Image
                    src={assets.github_icon}
                    alt="GitHub"
                    className="w-4 transition-transform hover:-translate-y-1"
                  />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {workData.length > initialVisible && (
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={toggleVisibility}
            className="px-6 py-3 border border-black dark:border-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            {isAllVisible ? "See Less" : "See More"}
          </button>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Work;
