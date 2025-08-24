"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ DarkMode, setDarkMode }) => {
  const sideMenuRef = useRef();
  const [isScroll, setisScroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
  };

  useEffect(() => {
    const handleScroll = () => {
      setisScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-5 py-3 flex items-center justify-between transition-all duration-300 ${
        isScroll
          ? "bg-white/90 shadow-md backdrop-blur-md dark:bg-darkTheme"
          : "bg-transparent"
      }`}
    >
      <a href="#top">
        <Image
          src={DarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-28"
          priority
        />
      </a>

      <div className="flex-1 hidden md:flex justify-center">
        <ul className="flex gap-6 text-sm font-Ovo dark:text-white">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => setDarkMode((prev) => !prev)}>
          <Image
            src={DarkMode ? assets.sun_icon : assets.moon_icon}
            alt="Toggle Theme"
            className="w-6"
          />
        </button>

        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full border border-gray-500 font-Ovo text-sm hover:shadow-md transition dark:text-white dark:border-white"
        >
          Contact
          <Image
            src={assets.arrow_icon}
            alt="Arrow Icon"
            className="w-4 h-4 object-contain"
          />
        </a>

        <button className="md:hidden" onClick={openMenu}>
          <Image
            src={DarkMode ? assets.menu_white : assets.menu_black}
            alt="Menu"
            className="w-6"
          />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 right-0 w-64 h-screen z-[100] bg-white dark:bg-darkHover text-black dark:text-white flex flex-col gap-6 p-8 transition-transform duration-500 transform translate-x-full"
      >
        <button className="self-end" onClick={closeMenu}>
          <Image
            src={DarkMode ? assets.close_white : assets.close_black}
            alt="Close"
            className="w-5"
          />
        </button>

        <a href="#top" onClick={closeMenu} className="font-Ovo">
          Home
        </a>
        <a href="#skills" onClick={closeMenu} className="font-Ovo">
          Skills
        </a>
        <a href="#about" onClick={closeMenu} className="font-Ovo">
          About Me
        </a>
        <a href="#services" onClick={closeMenu} className="font-Ovo">
          Services
        </a>
        <a href="#work" onClick={closeMenu} className="font-Ovo">
          Work
        </a>
        <a href="#contact" onClick={closeMenu} className="font-Ovo">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
