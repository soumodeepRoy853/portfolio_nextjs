'use client';
import React from 'react';
import { motion } from 'motion/react';
import { assets } from '@/assets/assets'; // Optional: for using icon images

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Learnstrick Edutech',
    duration: 'Jan 2024 – Mar 2024',
    description: 'Built a blog platform using the MERN stack with user auth, markdown editing, and comment features.',
    icon: '💻',
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Bharat Intern',
    duration: 'Oct 2023 – Dec 2023',
    description: 'Created a Money Tracker and a Registration System using React, Node.js, MongoDB, and Express.',
    icon: '🧾',
  },
  {
    role: 'Personal Projects',
    company: 'Freelance & Self-learning',
    duration: '2023 – Present',
    description: 'Developed DevConnect, a full-stack social networking app, and a real-time AI chat system.',
    icon: '🚀',
  },
];

const Experience = () => {
  return (
    <motion.section
      id='experience'
      className='w-full px-6 sm:px-[10%] py-20 scroll-mt-20 bg-gray-50 dark:bg-darkTheme text-black dark:text-white'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className='text-center text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-2'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Career Journey
      </motion.h4>

      <motion.h2
        className='text-center text-4xl sm:text-5xl font-extrabold font-serif mb-16'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Experience Timeline
      </motion.h2>

      <div className='relative border-l-4 border-gray-300 dark:border-white/30 pl-6 space-y-12 max-w-3xl mx-auto'>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className='relative'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className='absolute -left-[26px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-sm text-white bg-blue-600 dark:bg-blue-400 shadow-md'>
              {exp.icon}
            </div>

            <h3 className='text-xl font-bold mb-1'>{exp.role}</h3>
            <p className='text-gray-700 dark:text-gray-300 font-medium'>{exp.company}</p>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-2'>{exp.duration}</p>
            <p className='text-gray-700 dark:text-gray-300 text-base leading-relaxed'>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
