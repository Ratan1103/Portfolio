"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07090f]"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Monogram */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="w-16 h-16 rounded-xl flex items-center justify-center bg-[#5b8dee]/10 border border-[#5b8dee]/25"
            >
              <span className="text-2xl font-bold text-[#5b8dee] font-display">RS</span>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-40 h-[2px] bg-white/5 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-[#5b8dee] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
