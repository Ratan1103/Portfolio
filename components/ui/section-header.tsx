"use client";

import { motion } from "framer-motion";
import { textVariant } from "@/lib/motion";

interface SectionHeaderProps {
  subtext: string;
  title: string;
}

export default function SectionHeader({ subtext, title }: SectionHeaderProps) {
  return (
    <motion.div variants={textVariant()}>
      <p className="text-[#5b8dee] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-3 font-display">
        {subtext}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
        {title}
      </h2>
    </motion.div>
  );
}
