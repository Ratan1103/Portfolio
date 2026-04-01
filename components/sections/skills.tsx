"use client";

import { motion } from "framer-motion";
import { config, skillCategories } from "@/lib/config";
import { fadeIn, textVariant } from "@/lib/motion";
import SectionHeader from "@/components/ui/section-header";
import {
  SiCplusplus, SiPython, SiJavascript, SiMysql, SiDjango, SiPostman,
  SiReact, SiNextdotjs, SiHtml5, SiPostgresql, SiGit, SiGithub,
  SiLinux, SiFigma, SiLeetcode, SiCisco, SiTypescript, SiDocker,
} from "react-icons/si";
import { Code, Server, Layout, Database, Wrench, Brain, Cpu, Globe } from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<any> } = {
  SiCplusplus, SiPython, SiJavascript, SiMysql, SiDjango, SiPostman,
  SiReact, SiNextdotjs, SiHtml5, SiCss3: Layout, SiPostgresql, SiGit,
  SiGithub, SiLinux, SiFigma, SiLeetcode, SiCisco, SiTypescript, SiDocker,
  SiAmazon: Globe,
};

const categoryIconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  code: Code, server: Server, layout: Layout, database: Database, wrench: Wrench, brain: Brain,
};

// Richer tech stack grouped display
const techStack = [
  {
    category: "Languages",
    icon: Code,
    items: [
      { name: "C++", level: "Advanced", note: "DSA & competitive" },
      { name: "Python", level: "Advanced", note: "Backend & scripting" },
      { name: "JavaScript", level: "Intermediate", note: "Full-stack" },
      { name: "SQL", level: "Intermediate", note: "PostgreSQL, MySQL" },
    ],
  },
  {
    category: "Frontend",
    icon: Globe,
    items: [
      { name: "React.js", level: "Intermediate", note: "Router, props, component" },
      { name: "Next.js", level: "Beginner", note: "SSR, routing" },
      { name: "HTML5 & CSS3", level: "Beginner", note: "Responsive design" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Django", level: "Advanced", note: "MVC, ORM, auth" },
      { name: "Django REST Framework", level: "Advanced", note: "REST APIs" },
      { name: "Node.js / Express", level: "Intermediate", note: "JS backend" },
      { name: "REST API Design", level: "Advanced", note: "CRUD, auth, pagination" },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      { name: "PostgreSQL", level: "Advanced", note: "Indexes, joins, perf" },
      { name: "MySQL", level: "Intermediate", note: "Queries, schema design" },
      { name: "DBMS & 3NF", level: "Advanced", note: "Normalization, theory" },
      { name: "ORM (Django)", level: "Advanced", note: "Migrations, queries" },
    ],
  },
  {
    category: "Core CS",
    icon: Brain,
    items: [
      { name: "Data Structures & Algorithms", level: "Advanced", note: "400+ problems solved" },
      { name: "Object-Oriented Programming", level: "Advanced", note: "C++ & Python" },
      { name: "Operating Systems", level: "Intermediate", note: "Processes, memory" },
      { name: "Computer Networks", level: "Advanced", note: "TCP/IP, HTTP, DNS" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    items: [
      { name: "Git & GitHub", level: "Advanced", note: "Branching, PRs, CI" },
      { name: "Linux / Bash", level: "Intermediate", note: "CLI, scripts" },
      { name: "Figma", level: "Intermediate", note: "UI mockups" },
      { name: "Postman", level: "Intermediate", note: "API testing" },
    ],
  },
];

const levelColor: { [key: string]: string } = {
  Advanced: "#5b8dee",
  Intermediate: "#64748b",
  Beginner: "#374151",
};

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-4">
            <SectionHeader
              subtext={config.sections.skills.p}
              title="Technical Skills."
            />
            <p className="text-white/40 text-sm max-w-sm lg:text-right leading-relaxed">
              Battle-tested tools for shipping full-stack products — from schema design to responsive UIs.
            </p>
          </div>

          {/* Horizontal rule */}
          <div className="w-full h-px bg-white/6 mt-8 mb-8" />

          {/* Skills grid — all categories visible at once */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {techStack.map((category, catIdx) => {
              const CatIcon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  variants={fadeIn("up", "spring", catIdx * 0.08, 0.6)}
                  className="glass-card-hover rounded-xl p-5"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#5b8dee]/10 flex items-center justify-center">
                      <CatIcon size={16} className="text-[#5b8dee]" />
                    </div>
                    <h3 className="text-[15px] font-semibold text-white font-display">
                      {category.category}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-white/75 font-medium truncate">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-xs text-white/30 truncate">
                            {item.note}
                          </span>
                        </div>
                        <span
                          className="shrink-0 ml-3 text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{
                            color: levelColor[item.level],
                            background: `${levelColor[item.level]}15`,
                            border: `1px solid ${levelColor[item.level]}25`,
                          }}
                        >
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>


        </motion.div>
      </div>
    </section>
  );
}
