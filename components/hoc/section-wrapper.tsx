"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { ComponentType } from "react";

interface SectionWrapperProps {
  idName: string;
}

export default function SectionWrapper<P extends object>(
  Component: ComponentType<P>,
  idName: string
) {
  function HOC(props: P) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0 mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 py-16 sm:py-24"
        id={idName}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    );
  }

  return HOC;
}
