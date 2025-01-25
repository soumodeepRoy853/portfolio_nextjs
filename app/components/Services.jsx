import {assets, serviceData} from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"
import Link from 'next/link';

const Services = () => {
  return (
    <div>
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
       id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.3}}
       className='text-center mb-2 text-lg font-Ovo'>What I offer</motion.h4>

      <motion.h2
       initial={{opacity:0, y:-20}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:0.5, delay:0.5}} 
      className='text-center text-5xl font-Ovo'>My Services</motion.h2>

      <motion.p
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:0.5, delay:0.7}}
       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I offer a range of services including Frontend and Backend development, FullStack solutions, and Portfolio creation. 
        With expertise in modern technologies like the MERN stack and Next.js, I deliver high-quality, scalable web applications 
        tailored to your needs. Whether you're looking for a complete web solution or just need to showcase your work, 
        I can help bring your vision to life.
      </motion.p>

      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.9}} 
       className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index)=>(
            <motion.div
            whileHover={{scale:1.05}}
             key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                <Image src={icon} alt='img10' className='w-10' />
                <h3 className='text-lg text-gray-700 my-4 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                <Link href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='img11' className='w-4' /></Link>
            <div/>
            </motion.div>
        ))}
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Services;
