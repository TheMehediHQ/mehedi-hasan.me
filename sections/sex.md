"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const brandIcons: Record<string, string> = {
  Github: "/icon/github.svg",
  Linkedin: "/icon/linkedin.svg",
  Twitter: "/icon/twitter.svg",
};

export default function ContactSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section
      ref={containerRef}
      className="px-4 sm:px-8 lg:px-16 py-24"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Contact Me" subtitle="" className="text-left" />

    
       <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
   {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35 }}
            className="space-y-10"
          >
            {/* Heading + Description */}
            <div className="space-y-6">
            

              <p className="text-base leading-8 max-w-sm text-[var(--color-secondary-text)]">
                I&apos;m currently available for freelance and full-time
                opportunities. Feel free to reach out.
              </p>
            </div>

            {/* Unified Info List */}
            <div className="space-y-8">
              <div className="space-y-1">
                <p className="text-sm text-[var(--color-secondary-text)]">Email</p>
                <a
                  href="mailto:mehedi.hasan16111@gmail.com"
              className="text-sm transition-colors hover:opacity-80"
style={{ color: "var(--color-primary-text)" }}
                >

                  mehedi.hasan16111@gmail.com
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-[var(--color-secondary-text)]">Location</p>
                <p className="text-sm text-[var(--color-primary-text)]">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-[var(--color-secondary-text)]">Social</p>

                <div className="flex items-center gap-6">
                  {[
                    {
                      icon: "Github",
                      href: "https://github.com/themehedihq",
                      label: "GitHub",
                    },
                    {
                      icon: "Linkedin",
                      href: "https://linkedin.com/in/themehedihq",
                      label: "LinkedIn",
                    },
                    {
                      icon: "Twitter",
                      href: "https://twitter.com/themehedihq",
                      label: "Twitter",
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"

                     className="
relative
flex
items-center
justify-center
w-11
h-11
opacity-60
transition-all
duration-300
hover:opacity-100
hover:-translate-y-1
"
                      whileHover={{ y: -2, scale: 1.05 }}
                    >
                      <Image
                        src={brandIcons[social.icon]}
                        alt={social.label}
                        fill
                        className="object-contain"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — FORM */}
   <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.35, delay: 0.05 }}
  className="w-full max-w-2xl"
>
  <form
    className="space-y-6"
    onSubmit={(e) => e.preventDefault()}
  >
    {/* Name */}
    <div className="space-y-2">
      <label
        htmlFor="name"
        className="text-sm font-medium"
        style={{ color: "var(--color-secondary-text)" }}
      >
        Name
      </label>

      <input
        id="name"
        type="text"
        placeholder="Your name"
        className="
          w-full
          h-12
          rounded-xl
          border
          border-[var(--color-border)]
          bg-transparent
          px-4
          text-sm
          transition-all
          duration-300
          placeholder:text-[var(--color-secondary-text)]
          focus:outline-none
          focus:border-[var(--color-primary-text)]
        "
        style={{ color: "var(--color-primary-text)" }}
      />
    </div>

    {/* Email */}
    <div className="space-y-2">
      <label
        htmlFor="email"
        className="text-sm font-medium"
        style={{ color: "var(--color-secondary-text)" }}
      >
        Email
      </label>

      <input
        id="email"
        type="email"
        placeholder="your@email.com"
        className="
          w-full
          h-12
          rounded-xl
          border
          border-[var(--color-border)]
          bg-transparent
          px-4
          text-sm
          transition-all
          duration-300
          placeholder:text-[var(--color-secondary-text)]
          focus:outline-none
          focus:border-[var(--color-primary-text)]
        "
        style={{ color: "var(--color-primary-text)" }}
      />
    </div>

    {/* Message */}
    <div className="space-y-2">
      <label
        htmlFor="message"
        className="text-sm font-medium"
        style={{ color: "var(--color-secondary-text)" }}
      >
        Message
      </label>

      <textarea
        id="message"
        rows={6}
        placeholder="Tell me about your project..."
        className="
          w-full
          min-h-[180px]
          rounded-xl
          border
          border-[var(--color-border)]
          bg-transparent
          px-4
          py-3
          text-sm
          resize-none
          transition-all
          duration-300
          placeholder:text-[var(--color-secondary-text)]
          focus:outline-none
          focus:border-[var(--color-primary-text)]
        "
        style={{ color: "var(--color-primary-text)" }}
      />
    </div>

    {/* Button */}
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        size="lg"
        className="group h-12 w-full rounded-xl"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>

        <span>Send Message</span>
      </Button>
    </motion.div>
  </form>
</motion.div>
        </div>
      </div>
    </section>
  );
}
