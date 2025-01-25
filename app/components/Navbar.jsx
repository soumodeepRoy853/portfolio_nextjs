"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ DarkMode, setDarkMode }) => {
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const [isScroll, setisScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    });
  }, []);

  return (
    <nav
    className={`w-full flex items-center justify-between sticky px-5 ${
      isScroll
        ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
        : ""
    }sticky top-0 z-50`}
  >
    <a href="#top">
      <Image
        src={DarkMode ? assets.logo_dark : assets.logo}
        alt="img1"
        className="w-28 cursor-pointer"
      />
    </a>
  
    {/* Center the ul properly */}
    <div className="flex-1 flex justify-center">
      <ul
        className={`hidden md:flex items-center justify-center gap-4 lg:gap-6 xl:gap-8 rounded-full px-6 py-2 ${
          isScroll
            ? ""
            : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
        }`}
      >
        <li>
          <a className="font-Ovo whitespace-nowrap" href="#top">
            Home
          </a>
        </li>
        <li>
          <a className="font-Ovo whitespace-nowrap" href="#about">
            About Me
          </a>
        </li>
        <li>
          <a className="font-Ovo whitespace-nowrap" href="#services">
            Services
          </a>
        </li>
        <li>
          <Link className="font-Ovo whitespace-nowrap" href="#work">
            Work
          </Link>
        </li>
        <li>
          <a className="font-Ovo whitespace-nowrap" href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  
    <div className="flex items-center gap-4">
      <button onClick={() => setDarkMode((prev) => !prev)}>
        <Image
          src={DarkMode ? assets.sun_icon : assets.moon_icon}
          alt="img4"
          className="w-6"
        />
      </button>
      <a
        href="#contact"
        className="hidden lg:flex items-center gap-3 px-8 py-2.7 border border-gray-500 rounded-full 
              font-Ovo"
      >
        Contact <Image src={assets.arrow_icon} alt="img2" className="w-3" />
      </a>
  
      <button className="block md:hidden ml-3" onClick={openMenu}>
        <Image
          src={DarkMode ? assets.menu_white : assets.menu_black}
          alt="img5"
          className="w-6"
        />
      </button>
    </div>
  
    {/* -------For Mobile Menu-------- */}
  
    <div>
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image
            src={DarkMode ? assets.close_white : assets.close_black}
            alt="img6"
            className="w-5 cursor-pointer"
          />
        </div>
  
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#about">
            About me
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#top">
            Home
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#work">
            Work
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  </nav>
  
  );
};

export default Navbar;
