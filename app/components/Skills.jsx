'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', rating: 5 },
  { name: 'React.js', rating: 5 },
  { name: 'Next.js', rating: 4 },
  { name: 'Node.js', rating: 4 },
  { name: 'MongoDB', rating: 4 },
  { name: 'Tailwind CSS', rating: 5 },
  { name: 'Firebase', rating: 3 },
  { name: 'Git & GitHub', rating: 4 },
  { name: 'C++', rating: 4 },
  { name: 'HTML/CSS', rating: 5 },
  { name: 'Express.js', rating: 4 },
  { name: 'REST APIs', rating: 5 },
];

const SkillStars = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-6 sm:px-[10%] py-20 scroll-mt-20 bg-white dark:bg-darkTheme text-black dark:text-white"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-2"
      >
        My Stack
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl sm:text-5xl font-extrabold font-serif mb-16"
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <AnimatePresence>
          {visibleSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateX: 3,
                rotateY: 3,
                boxShadow: '0 10px 30px rgba(0,255,255,0.2)',
              }}
              className="rounded-2xl px-6 py-6 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 transition-all duration-300 hover:border-cyan-400"
            >
              <h3 className="text-lg sm:text-xl font-semibold font-sans text-gray-900 dark:text-gray-100 mb-3 tracking-wide">
                {skill.name}
              </h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) =>
                  i < skill.rating ? (
                    <FaStar key={i} className="text-yellow-400 text-base sm:text-lg" />
                  ) : (
                    <FaRegStar key={i} className="text-yellow-400 text-base sm:text-lg" />
                  )
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowAll(!showAll)}
         className="px-6 py-3 border border-black dark:border-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          {showAll ? 'Show Less' : 'See More Skills'}
        </motion.button>
      </div>
    </motion.section>
  );
};

export default SkillStars;
