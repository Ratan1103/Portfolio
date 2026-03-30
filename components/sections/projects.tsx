"use client";

import { motion } from "framer-motion";
import { config, projects } from "@/lib/config";
import { fadeIn } from "@/lib/motion";
import SectionHeader from "@/components/ui/section-header";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  liveLink: string;
  githubLink: string;
  highlights: string[];
}

function ProjectCard({ index, name, description, tags, image, liveLink, githubLink, highlights }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      className="group glass-card-hover rounded-xl overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/30 to-transparent" />

        {/* Live badge */}
        {liveLink && liveLink !== "#" && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-white/80 font-medium">Live</span>
          </div>
        )}

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white border border-white/10 hover:border-white/25 transition-all"
            >
              <Github size={15} />
            </a>
          )}
          {liveLink && liveLink !== "#" && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white border border-white/10 hover:border-white/25 transition-all"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-[17px] font-semibold text-white font-display leading-snug">{name}</h3>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-white/25 hover:text-white/60 transition-colors mt-0.5"
            >
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>

        <p className="text-white/45 text-sm leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4 flex-1">
          {highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-white/40">
              <span className="w-1 h-1 rounded-full bg-[#5b8dee]/60 mt-1.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/6"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-4">
            <SectionHeader subtext={config.sections.projects.p} title="Projects." />
            <p className="text-white/40 text-sm max-w-sm lg:text-right leading-relaxed">
              {config.sections.projects.content}
            </p>
          </div>

          <div className="w-full h-px bg-white/6 mt-8 mb-8" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} index={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
