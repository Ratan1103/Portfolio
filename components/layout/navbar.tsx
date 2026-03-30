"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, config } from "@/lib/config";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActive(navLinks[index].title);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090f]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#5b8dee]/10 border border-[#5b8dee]/20 group-hover:bg-[#5b8dee]/15 transition-all">
            <span className="text-[#5b8dee] font-bold text-sm font-display">RS</span>
          </div>
          <span className="hidden sm:block text-[15px] font-semibold text-white/90 font-display">
            {config.html.fullName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative text-sm font-medium transition-colors duration-150 ${
                  active === link.title
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
                {active === link.title && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#5b8dee]"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 text-white/70 hover:text-white transition-colors"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-0 md:hidden bg-[#07090f]/98 backdrop-blur-xl z-[55]"
            >
              <button
                className="absolute top-5 right-4 w-9 h-9 flex items-center justify-center text-white/70 hover:text-white"
                onClick={() => setToggle(false)}
              >
                <X size={22} />
              </button>
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className={`text-2xl font-semibold font-display transition-colors ${
                      active === link.title
                        ? "text-[#5b8dee]"
                        : "text-white/60 hover:text-white"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
