"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/constants/personalInfo";
import HeroCTA from "@/components/ui/HeroCTA";
import { socials } from "@/constants/socials";

export default function HomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div
      ref={ref}
      className="flex mt-20 items-center justify-center px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-4xl w-full">
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
          style={{ color: "var(--color-primary-text)" }}
        >
          Hello, I&apos;m <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, var(--color-accent), var(--color-accent-hover))",
            }}
          >
            {personalInfo.name}
          </span>
        </motion.h1> */}

<div className="w-full flex justify-start mt-3  mb-8">
  <img
    src="/mehedi.png"
    alt="signature"
    className="w-32 h-auto opacity-90"
  />
</div>





        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4"
          style={{ color: "var(--color-secondary-text)" }}
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base mb-8 sm:mb-10 max-w-2xl"
          style={{ color: "var(--color-muted-text)" }}
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
         <HeroCTA
  items={[
    {
      label: "mehedi.hasan16111@gmail.com",
      href: "mailto:mehedi.hasan16111@gmail.com",
    },
    ...socials,
    {
      label: "Resume",
      href: personalInfo.resume,
    },
  ]}
/>   </motion.div>
      </div>
    </div>
  );
}