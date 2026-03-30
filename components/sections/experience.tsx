"use client";

import { motion } from "framer-motion";
import { config, experiences } from "@/lib/config";
import { fadeIn } from "@/lib/motion";
import SectionHeader from "@/components/ui/section-header";
import Image from "next/image";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  experience: {
    title: string;
    companyName: string;
    icon: string;
    iconBg: string;
    date: string;
    type: string;
    points: string[];
  };
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.6)}
      className="flex gap-5"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center pt-1">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/8"
          style={{ backgroundColor: experience.iconBg || "rgba(255,255,255,0.04)" }}
        >
          <Image
            src={experience.icon}
            alt={experience.companyName}
            width={22}
            height={22}
            className="object-contain"
          />
        </div>
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 mt-3 bg-white/6" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 glass-card rounded-xl p-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-[16px] font-semibold text-white font-display leading-snug">
              {experience.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              <p className="text-sm text-white/50">{experience.companyName}</p>
              <span className="px-2 py-0.5 text-[11px] rounded-full bg-[#5b8dee]/10 text-[#5b8dee] border border-[#5b8dee]/15 font-medium">
                {experience.type}
              </span>
            </div>
          </div>
          <span className="text-xs text-white/35 font-medium shrink-0 mt-0.5">
            {experience.date}
          </span>
        </div>

        <ul className="space-y-2.5">
          {experience.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-white/45 leading-relaxed">
              <span className="w-1 h-1 rounded-full bg-[#5b8dee]/50 mt-2 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-4">
            <SectionHeader subtext={config.sections.experience.p} title="Experience." />
            <p className="text-white/40 text-sm max-w-sm lg:text-right leading-relaxed">
              Hands-on roles where I contributed to real product decisions and engineering challenges.
            </p>
          </div>

          <div className="w-full h-px bg-white/6 mt-8 mb-8" />

          <div className="max-w-3xl">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.title} experience={experience} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
