"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { Send } from "lucide-react";
import { socials } from "@/constants/socials";

export default function ContactSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;

    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      honeypot: (form.elements.namedItem("honeypot") as HTMLInputElement).value,
    };

    if (!body.name || !body.email || !body.message) {
      setError("All fields are required");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok) {
        form.reset();
        toast.success("Message sent successfully! I'll get back to you within 24–48 hours.");
      } else {
        setError(data.error || "Failed to send message");
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={containerRef}
      className="px-4 sm:px-8 lg:px-16 py-24"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Contact Me" subtitle="" className="text-left" />

        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <p className="leading-6 text-sm max-w-sm text-[var(--color-secondary-text)]">
                I&apos;m currently available for full‑time opportunities. Feel free to reach out.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-1">
                <p className="text-sm text-[var(--color-secondary-text)]">Email</p>
                <a
                  href="mailto:hello@mehedi-hasan.me"
                  className="text-sm hover:opacity-80"
                  style={{ color: "var(--color-primary-text)" }}
                >
                  hello@mehedi-hasan.me
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-[var(--color-secondary-text)]">Location</p>
                <p className="text-sm text-[var(--color-primary-text)]">Dhaka, Bangladesh</p>
              </div>

    {/* WHATSAPP */}
              <div className="space-y-1">
                <p className="text-sm text-[var(--color-secondary-text)]">WhatsApp</p>
                <a
                  href="https://wa.me/8801747874773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:opacity-80"
                  style={{ color: "var(--color-primary-text)" }}
                >
                  +880 1747 874 773
                </a>
              </div>

              {/* CALENDLY */}
              <div className="space-y-1">
                <p className="text-sm text-[var(--color-secondary-text)]">Schedule a Call</p>
                <a
                  href="https://cal.com/TheMehediHQ/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:opacity-80"
                  style={{ color: "var(--color-primary-text)" }}
                >
                  cal.com/themehedihq
                </a>
              </div>


              <div className="space-y-3">
                <p className="text-sm text-[var(--color-secondary-text)]">Social</p>

                <div className="flex items-center gap-6">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 opacity-60 transition-all duration-300 hover:opacity-100"
                      initial={{ opacity: 0.6, scale: 1 }}
                      whileHover={{ scale: 1.1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <social.icon className="w-6 h-6 text-[var(--color-primary-text)]" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="w-full max-w-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

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
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl border border-[var(--color-border)] bg-transparent px-4 text-sm placeholder:text-[var(--color-secondary-text)] focus:outline-none focus:border-[var(--color-primary-text)] disabled:opacity-50"
                  style={{ color: "var(--color-primary-text)" }}
                />
              </div>

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
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl border border-[var(--color-border)] bg-transparent px-4 text-sm placeholder:text-[var(--color-secondary-text)] focus:outline-none focus:border-[var(--color-primary-text)] disabled:opacity-50"
                  style={{ color: "var(--color-primary-text)" }}
                />
              </div>

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
                  name="message"
                  rows={6}
                  placeholder="Tell me about the position or project..."
                  required
                  disabled={isSubmitting}
                  className="w-full min-h-[180px] rounded-xl border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm resize-none placeholder:text-[var(--color-secondary-text)] focus:outline-none focus:border-[var(--color-primary-text)] disabled:opacity-50"
                  style={{ color: "var(--color-primary-text)" }}
                />
              </div>

              {error && (
                <p className="text-sm text-red-500" role="alert">
                  {error}
                </p>
              )}

              <motion.div
                initial={{ opacity: 1, y: 0 }}
                // whileHover={{ y: -2 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 20 }}
              >
               <Button
  type="submit"
  variant="secondary"
  size="lg"
  disabled={isSubmitting}
  className=" h-12 w-full rounded-xl cursor-pointer"
>
  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>

  <Send
    size={18}
    className="transition-transform duration-200 "
  />
</Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
