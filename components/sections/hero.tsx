"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { config } from "@/lib/config";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Download, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const roles = [
  "Full-Stack Developer",
  "Backend Engineer",
  "React + Django Developer",
  "Software Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 45 : 95
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: FaLinkedin, href: config.social.linkedin, label: "LinkedIn" },
    { icon: FaGithub, href: config.social.github, label: "GitHub" },
    { icon: SiLeetcode, href: config.social.leetcode, label: "LeetCode" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#5b8dee] text-sm font-medium tracking-[0.2em] uppercase mb-4 font-display"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 font-display leading-normal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {config.hero.name}
            </motion.h1>

            {/* Role Typewriter */}
            <div className="text-xl sm:text-2xl font-medium text-white/60 mb-6 h-9 font-display">
              <span className="typing-cursor">{displayText}</span>
            </div>

            {/* About */}
            <p className="text-white/50 text-[15px] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {config.hero.about}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-8">
              <motion.a
                href={config.hero.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium text-white bg-[#5b8dee] hover:bg-[#4a7de0] transition-colors"
              >
                <Download size={16} />
                Download Resume
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium text-white/70 border border-white/12 hover:border-white/25 hover:text-white transition-all"
              >
                View Projects
                <ArrowRight size={16} />
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/15 transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-1 flex flex-col items-center"
          >
            <div className="relative">
              {/* Subtle ring glow */}
              <div
                className="absolute -inset-3 rounded-full opacity-30 blur-lg"
                style={{ background: "radial-gradient(circle, #5b8dee 0%, transparent 70%)" }}
              />

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-white/10"
                style={{ boxShadow: "0 0 60px rgba(91, 141, 238, 0.15)" }}
              >
                <Image
                  src="/assets/my.png"
                  alt={config.hero.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-5 flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-ring" />
              <span className="text-sm text-white/55">Open to opportunities</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <div className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center p-1.5 group-hover:border-white/30 transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/40"
          />
        </div>
      </motion.a>
    </section>
  );
}
