import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const About = ({ DarkMode }) => {
  return (
    <motion.section
      id='about'
      className='w-full px-6 sm:px-[10%] py-20 scroll-mt-20 bg-white dark:bg-darkTheme text-black dark:text-white'
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
        Who I Am
      </motion.h4>

      <motion.h2
        className='text-center text-4xl sm:text-5xl font-extrabold font-serif mb-12'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      <div className='flex flex-col lg:flex-row gap-14 items-center justify-center'>
        <motion.div
          className='w-64 sm:w-80 rounded-3xl overflow-hidden shadow-xl dark:shadow-white/10'
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <Image
            src={assets.user_image}
            alt='My Profile'
            className='w-full h-full object-cover rounded-3xl'
          />
        </motion.div>

        <motion.div
          className='flex-1 text-lg leading-relaxed max-w-2xl'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className='mb-6'>
            I’m <span className='font-semibold'>Soumodeep Roy</span>, a passionate Full-Stack Developer who uses the <span className='text-blue-600 dark:text-blue-400 font-semibold'>MERN stack</span> and <span className='text-blue-600 dark:text-blue-400 font-semibold'>Next.js</span> to make web apps that are scalable, fast, and easy to use.
          </p>
          <p className='mb-8'>
             I want to work with others on software projects that make a difference in the world and improve the user experience. I want to keep getting better as a developer and help make modern web ecosystems better.
          </p>

          <h4 className='font-semibold text-xl mb-4'>Quick Info</h4>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className='flex items-start gap-4 p-4 border border-gray-300 dark:border-white/30 rounded-lg hover:shadow-md dark:hover:shadow-white/10 transition'
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={DarkMode ? iconDark : icon}
                  alt={title}
                  className='w-8 h-8'
                />
                <div>
                  <h3 className='font-semibold'>{title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          <h4 className='font-semibold text-xl mt-10 mb-4'>Tools I Use</h4>
          <motion.ul
            className='flex flex-wrap gap-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-gray-300 dark:border-white/30 rounded-lg hover:-translate-y-1 hover:shadow-md dark:hover:shadow-white/10 transition'
                whileHover={{ scale: 1.1 }}
              >
                <Image src={tool} alt='Tool Icon' className='w-6 h-6 sm:w-7 sm:h-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
