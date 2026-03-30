"use client";

import { motion } from "framer-motion";
import { config, education } from "@/lib/config";
import { fadeIn } from "@/lib/motion";
import SectionHeader from "@/components/ui/section-header";
import { GraduationCap, School, BookOpen, MapPin, Calendar } from "lucide-react";

const iconMap = {
  graduation: GraduationCap,
  school: School,
  book: BookOpen,
};

interface EducationCardProps {
  edu: {
    degree: string;
    institution: string;
    duration: string;
    score: string;
    location: string;
    side: "left" | "right";
    icon: string;
    color: string;
  };
  index: number;
}

function EducationCard({ edu, index }: EducationCardProps) {
  const IconComponent = iconMap[edu.icon as keyof typeof iconMap] || GraduationCap;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      className="flex gap-5 group"
    >
      {/* Icon + line */}
      <div className="flex flex-col items-center pt-1 shrink-0">
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/8 bg-white/3"
          style={{ boxShadow: `0 0 16px ${edu.color}22` }}
        >
          <IconComponent size={18} style={{ color: edu.color }} />
        </motion.div>
        {index < education.length - 1 && (
          <div className="w-px flex-1 mt-3 bg-white/6" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="glass-card-hover rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-[16px] font-semibold text-white font-display leading-snug">
                {edu.institution}
              </h3>
              <p className="text-sm text-white/55 mt-0.5">{edu.degree}</p>
            </div>
            <span
              className="shrink-0 text-sm font-semibold font-display mt-0.5"
              style={{ color: edu.color }}
            >
              {edu.score}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/35">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {edu.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {edu.location}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-4">
            <SectionHeader subtext={config.sections.education.p} title="Education." />
            <p className="text-white/40 text-sm max-w-sm lg:text-right leading-relaxed">
              Solid fundamentals from a nationally recognized engineering institution.
            </p>
          </div>

          <div className="w-full h-px bg-white/6 mt-8 mb-8" />

          <div className="max-w-2xl">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} edu={edu} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
