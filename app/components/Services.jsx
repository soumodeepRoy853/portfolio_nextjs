'use client';
import React from 'react';
import { motion } from 'motion/react';
import { assets } from '@/assets/assets';

const services = [
  {
    title: 'Frontend Development',
    description: 'Crafting visually appealing, responsive, and accessible UI using React, Tailwind, and Next.js.',
    icon: assets.frontend_icon || '🖥️',
  },
  {
    title: 'Backend Development',
    description: 'Building robust REST APIs and business logic with Node.js, Express, and MongoDB.',
    icon: assets.backend_icon || '🛠️',
  },
  {
    title: 'Full-Stack Projects',
    description: 'End-to-end application development including auth, dashboard, chat, real-time systems, etc.',
    icon: assets.fullstack_icon || '🚀',
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="w-full px-6 sm:px-[10%] py-20 scroll-mt-20 bg-white dark:bg-darkTheme text-black dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        What I Do
      </motion.h4>

      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold font-serif mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Services I Offer
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 shadow-md dark:shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex justify-center items-center mb-5">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 text-2xl rounded-full flex items-center justify-center text-blue-600 dark:text-white shadow-lg">
                {typeof service.icon === 'string' ? service.icon : <img src={service.icon.src} alt="" className="w-8 h-8" />}
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">{service.title}</h3>
            <p className="text-center text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
