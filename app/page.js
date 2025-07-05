'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Experience from "./components/Experience";
import SkillStars from "./components/Skills";

export default function Home() {
  const [DarkMode, setDarkMode] = useState(false); // Use boolean for easier comparison

  // Fetch theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark'); // Convert saved value to boolean
    } else {
      // Default to system preference if no saved theme
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Update document's theme based on DarkMode state
    if (DarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Save theme to localStorage
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Save theme to localStorage
    }
  }, [DarkMode]);

  return (
    <div>
      <Navbar DarkMode={DarkMode} setDarkMode={setDarkMode} />
      <Header DarkMode={DarkMode} />
      <SkillStars DarkMode={DarkMode}/>
      <About DarkMode={DarkMode} />
      <Experience DarkMode={DarkMode}/>
      <Services DarkMode={DarkMode} />
      <Work DarkMode={DarkMode} />
      <Contact DarkMode={DarkMode} />
      <Footer DarkMode={DarkMode} />
    </div>
  )
}
