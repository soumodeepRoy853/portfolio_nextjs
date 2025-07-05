import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 pt-32 md:pt-40 px-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 80 }}
      >
        <Image src={assets.profile_img} alt='Profile Picture' className='rounded-full w-32 shadow-lg shadow-black/20 dark:shadow-white/10' />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='text-base sm:text-lg text-gray-600 font-medium font-sans dark:text-gray-300'
      >
        MERN Stack & NextJs Developer | JavaScript Enthusiast | Lifelong Learner
      </motion.h3>

      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-2xl sm:text-5xl md:text-6xl font-extrabold font-serif text-black dark:text-white leading-tight'
      >
        Using React and Node.js to Create Scalable, User-Friendly Web Apps
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto text-base sm:text-lg font-light font-sans text-gray-700 dark:text-gray-300'
      >
        Full-stack developer who knows a lot about modern web technologies and cares a lot about performance, scalability, and maintainability. Available for remote and on-site work, and development in teams.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className='flex flex-col sm:flex-row items-center gap-4 mt-6 flex-wrap justify-center'
      >
        <a
          href='#contact'
          className='px-8 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 transition hover:scale-105 dark:bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-black'
        >
          Contact me <Image src={assets.right_arrow_white} alt='Right Arrow' className='w-4' />
        </a>

        <a
          href='/SDE_Soumodeep.pdf
          '
          download
          className='px-8 py-3 border border-black rounded-full flex items-center gap-2 bg-white text-black transition hover:scale-105 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black'
        >
          Download Resume <Image src={assets.download_icon} alt='Download Icon' className='w-4' />
        </a>

        <a
          href='https://github.com/soumodeepRoy853'
          target='_blank'
          className='px-8 py-3 border border-black rounded-full flex items-center gap-2 bg-white text-black transition hover:scale-105 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black'
        >
          🌟 Visit My GitHub Profile
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
