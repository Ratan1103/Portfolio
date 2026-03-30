"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import { fadeIn } from "@/lib/motion";
import { SiLeetcode } from "react-icons/si";
import { ExternalLink, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { dsaStats } from "@/lib/config";

interface LCStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

const DIFF = {
  easy: { color: "#14b8a6", label: "Easy", total: 935 },
  medium: { color: "#f59e0b", label: "Medium", total: 2033 },
  hard: { color: "#ef4444", label: "Hard", total: 919 },
};

const topics = [
  "Arrays", "Strings", "Recursion", "Linked Lists",
  "Trees", "Graphs", "Heaps", "Binary Search",
  "Searching & Sorting", "Dynamic Programming", "Backtracking", "Greedy",
  "Stack & Queue", "Hashing", "Two Pointers", "Sliding Window",
];

export default function DSAStats() {
  const [lcStats, setLcStats] = useState<LCStats>({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((res) => res.json())
      .then((data) => setLcStats(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const chartData = [
    { name: "Easy", value: lcStats.easySolved || 1, color: DIFF.easy.color },
    { name: "Medium", value: lcStats.mediumSolved || 1, color: DIFF.medium.color },
    { name: "Hard", value: lcStats.hardSolved || 1, color: DIFF.hard.color },
  ];

  return (
    <section id="dsa" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-4">
            <SectionHeader
              subtext="Competitive Programming"
              title="DSA & Problem Solving."
            />
            <p className="text-white/40 text-sm max-w-sm lg:text-right leading-relaxed">
              Consistent practice across difficulty levels — building pattern recognition and clean thinking.
            </p>
          </div>

          <div className="w-full h-px bg-white/6 mt-8 mb-8" />

          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* LEFT — Topics */}
            <motion.div variants={fadeIn("right", "spring", 0.1, 0.7)}>
              <h3 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-5 font-display">
                Topics Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span key={topic} className="skill-pill">
                    {topic}
                  </span>
                ))}
              </div>

              {/* GFG stats */}
              <div className="mt-8 glass-card rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white/70 font-medium text-sm font-display">GeeksForGeeks</h4>
                  <span className="text-xs text-white/30">Practice profile</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-xl font-bold text-white font-display">{dsaStats.gfg.totalSolved}</p>
                    <p className="text-xs text-white/35 mt-0.5">Total</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white font-display">{dsaStats.gfg.medium}</p>
                    <p className="text-xs text-white/35 mt-0.5">Medium</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white font-display">{dsaStats.gfg.hard}</p>
                    <p className="text-xs text-white/35 mt-0.5">Hard</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — LeetCode */}
            <motion.div
              variants={fadeIn("left", "spring", 0.2, 0.7)}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <SiLeetcode className="text-[#FFA116]" size={24} />
                  <div>
                    <h3 className="text-[15px] font-semibold text-white font-display">LeetCode</h3>
                    <p className="text-xs text-white/35">@{dsaStats.leetcode.username}</p>
                  </div>
                </div>
                <a
                  href={`https://leetcode.com/u/${dsaStats.leetcode.username}`}
                  target="_blank"
                  className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors"
                >
                  Profile <ExternalLink size={12} />
                </a>
              </div>

              <div className="flex items-center gap-6">
                {/* Donut Chart */}
                <div className="relative w-36 h-36 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        dataKey="value"
                        innerRadius={44}
                        outerRadius={60}
                        stroke="none"
                        paddingAngle={2}
                      >
                        {chartData.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    {loading ? (
                      <div className="h-6 w-12 bg-white/10 animate-pulse rounded" />
                    ) : (
                      <>
                        <p className="text-2xl font-bold text-white font-display leading-tight">{lcStats.totalSolved}</p>
                        <p className="text-xs text-white/35">solved</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Breakdown */}
                <div className="flex-1 space-y-3">
                  {[
                    { key: "easy", solved: lcStats.easySolved },
                    { key: "medium", solved: lcStats.mediumSolved },
                    { key: "hard", solved: lcStats.hardSolved },
                  ].map(({ key, solved }) => {
                    const d = DIFF[key as keyof typeof DIFF];
                    const pct = Math.round((solved / d.total) * 100);
                    return (
                      <div key={key}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium" style={{ color: d.color }}>{d.label}</span>
                          <span className="text-xs text-white/40">{solved}/{d.total}</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ background: d.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
