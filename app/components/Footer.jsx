import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ DarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={ DarkMode ? assets.logo_dark : assets.logo} alt='img12' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={ DarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='img13' className='w-6' />
            roysoumodeep8@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; 2025 Soumodeep Roy. All rights reserved.</p>
        <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
            <li><a target='_blank' href='https://github.com/soumodeepRoy853'>GitHub</a></li>
            <li><a target='_blank' href='https://www.linkedin.com/in/soumodeeproy20'>Linkedin</a></li>
            <li><a target='_blank' href='https://leetcode.com/u/SoumodeepRoy/'>Leetcode</a></li>
            <li><a target='_blank' href='https://twitter.com/SoumodeepRoy10'>X</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
