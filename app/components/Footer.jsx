import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = ({ DarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-darkTheme pt-14 pb-10 px-4 border-t border-gray-300 dark:border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">

        {/* Logo + Email */}
        <div className="flex flex-col items-center text-center gap-2">
          <Image
            src={DarkMode ? assets.logo_dark : assets.logo}
            alt="Footer Logo"
            className="w-36 mb-1"
            priority
          />
          <div className="flex items-center gap-2 text-gray-700 dark:text-white text-sm sm:text-base font-medium">
            <Image
              src={DarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="Email Icon"
              className="w-5"
            />
            roysoumodeep8@gmail.com
          </div>
        </div>

        {/* Platform Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-10 mt-8 text-sm sm:text-base">
        <a
          href="https://github.com/soumodeepRoy853"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-600 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/soumodeeproy20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-600 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://leetcode.com/u/SoumodeepRoy/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-yellow-600 transition"
        >
          LeetCode
        </a>
        <a
          href="https://twitter.com/SoumodeepRoy10"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-400 transition"
        >
          X (Twitter)
        </a>
      </div>

        {/* Newsletter Form */}
        <form
          className="w-full sm:w-2/3 md:w-1/2 flex flex-col items-center gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for subscribing!");
          }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
            Subscribe to Newsletter
          </h3>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-darkHover/30 dark:border-white/50 dark:text-white outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-darkHover/30 dark:border-white/50 dark:text-white outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 border border-black dark:border-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Subscribe
          </button>
        </form>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base px-6 py-2 rounded-full transition"
        >
          ↑ Back to Top
        </button>

        {/* Copyright */}
        <div className="text-center text-gray-600 dark:text-white/50 text-sm mt-6 border-t w-full pt-4">
          &copy; {new Date().getFullYear()} Soumodeep Roy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
