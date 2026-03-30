"use client";

import { config } from "@/lib/config";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: FaLinkedin, href: config.social.linkedin, label: "LinkedIn" },
  { icon: FaGithub, href: config.social.github, label: "GitHub" },
  { icon: SiLeetcode, href: config.social.leetcode, label: "LeetCode" },
];

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-display">
            {config.html.fullName} — {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-white/25 hover:text-white/55 transition-colors"
                title={social.label}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>

          <p className="text-white/20 text-xs">
            Built with Next.js &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
