"use client";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { motion } from "motion/react";
import Image from "next/image";
import { certifications } from "@/constants/certifications";

export const Certifications = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.name}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <div className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-2xl transition duration-200 pt-4">
              <Image
  src={cert.thumbnail}
  alt={cert.name}
  width={200}
  height={150} // 4:3 ratio
  className="w-[200px] aspect-[4/3] rounded-md object-cover"
/>
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg"
                  >
                    {cert.name}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {cert.description}
                  </Paragraph>
                </div>
                <div className="flex items-center gap-3 mt-2 md:mt-0">
                  <span className="text-xs md:text-xs lg:text-xs text-secondary dark:text-neutral-400">
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-neutral-300 dark:text-neutral-700">•</span>
                  <span className="text-xs md:text-xs lg:text-xs text-secondary dark:text-neutral-400">
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
