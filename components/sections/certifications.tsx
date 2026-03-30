"use client";

import { motion } from "framer-motion";
import { config, certifications } from "@/lib/config";
import { fadeIn } from "@/lib/motion";
import SectionHeader from "@/components/ui/section-header";
import { SiGoogle, SiCisco } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Check, Clock, ExternalLink } from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<any> } = {
  SiGoogle,
  SiCisco,
};

interface CertificationCardProps {
  cert: {
    title: string;
    issuer: string;
    status: "Ongoing" | "Completed";
    modules: string[];
    linkedinUrl: string;
    icon: string;
    color: string;
    year: string;
  };
  index: number;
}

function CertificationCard({ cert, index }: CertificationCardProps) {
  const IconComponent = iconMap[cert.icon] || SiGoogle;
  const isOngoing = cert.status === "Ongoing";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.6)}
      className="glass-card-hover rounded-xl overflow-hidden"
    >
      {/* Top accent line — very thin */}
      <div className="h-[2px]" style={{ backgroundColor: `${cert.color}60` }} />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-white/6"
            style={{ backgroundColor: `${cert.color}10` }}
          >
            <IconComponent size={20} style={{ color: cert.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-semibold text-white font-display leading-snug line-clamp-2">
              {cert.title}
            </h3>
            <p className="text-xs text-white/40 mt-0.5">{cert.issuer}</p>
          </div>
        </div>

        {/* Status + year */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-white/30">{cert.year}</span>
          <span
            className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium ${
              isOngoing
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            }`}
          >
            {isOngoing ? (
              <><Clock size={10} className="animate-pulse" /> In Progress</>
            ) : (
              <><Check size={10} /> Completed</>
            )}
          </span>
        </div>

        {/* Modules */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {cert.modules.slice(0, 4).map((module) => (
            <span
              key={module}
              className="text-[11px] px-2 py-0.5 rounded-full text-white/40 border"
              style={{
                backgroundColor: `${cert.color}08`,
                borderColor: `${cert.color}20`,
              }}
            >
              {module}
            </span>
          ))}
          {cert.modules.length > 4 && (
            <span className="text-[11px] px-2 py-0.5 rounded-full text-white/25 bg-white/4 border border-white/8">
              +{cert.modules.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <a
          href={cert.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-medium transition-all ${
            cert.linkedinUrl === "#"
              ? "bg-white/3 text-white/20 cursor-not-allowed border border-white/5"
              : "border border-white/8 text-white/45 hover:text-white/70 hover:border-white/18 hover:bg-white/4"
          }`}
          onClick={(e) => cert.linkedinUrl === "#" && e.preventDefault()}
        >
          <FaLinkedin size={14} />
          View on LinkedIn
          {cert.linkedinUrl !== "#" && <ExternalLink size={12} />}
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-4">
            <SectionHeader subtext={config.sections.certifications.p} title="Certifications." />
            <p className="text-white/40 text-sm max-w-sm lg:text-right leading-relaxed">
              Industry credentials from Google and Cisco — applied directly to projects.
            </p>
          </div>

          <div className="w-full h-px bg-white/6 mt-8 mb-8" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.title} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
