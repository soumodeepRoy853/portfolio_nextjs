"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = ({ DarkMode }) => {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "1a29818c-8078-48c3-a563-39a3cdff8424");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message Sent Successfully!");
        event.target.reset();
      } else {
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("❌ Network error. Please try later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="w-full px-4 sm:px-[10%] py-20 scroll-mt-20 bg-white dark:bg-darkTheme"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-2"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Connect With Me
      </motion.h4>

      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold font-serif mb-12 text-black dark:text-white"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mb-12 text-gray-700 dark:text-gray-300 font-sans"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Have a project in mind or just want to say hello? Drop a message and
        I’ll get back to you as soon as possible.
      </motion.p>

      <motion.form
        onSubmit={onSubmitHandler}
        className="max-w-2xl mx-auto space-y-6 p-8 border border-gray-200 dark:border-white/20 rounded-xl bg-white/60 dark:bg-white/5 shadow-lg backdrop-blur"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="flex-1 p-3 border border-gray-300 rounded-md outline-none bg-white dark:bg-darkHover/30 dark:border-white/30 text-black dark:text-white"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="flex-1 p-3 border border-gray-300 rounded-md outline-none bg-white dark:bg-darkHover/30 dark:border-white/30 text-black dark:text-white"
          />
        </div>

        <textarea
          rows="5"
          name="message"
          required
          placeholder="Write your message here..."
          className="w-full p-3 border border-gray-300 rounded-md outline-none bg-white dark:bg-darkHover/30 dark:border-white/30 text-black dark:text-white"
        ></textarea>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSending}
            className={`flex items-center gap-2 px-5 py-3 border border-black dark:border-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition ${
              isSending ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
            <Image
              src={assets.right_arrow_white}
              alt="arrow"
              className="w-4 h-4"
            />
          </button>
        </div>

        {result && (
          <p
            className={`text-center text-sm mt-3 font-medium ${
              result.startsWith("✅")
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {result}
          </p>
        )}
      </motion.form>
    </motion.section>
  );
};

export default Contact;
