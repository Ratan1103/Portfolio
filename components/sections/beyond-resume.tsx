"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/motion";
import { Network, ShieldCheck, Cpu, GitBranch, BookOpen, Layers } from "lucide-react";

const interests = [
  {
    icon: Layers,
    title: "Systems & Architecture",
    description:
      "I get genuinely excited breaking down how large systems handle scale — how databases choose consistency over availability, why event-driven architectures win at certain problem sizes, and when a monolith is actually the right call. I spend time reading about distributed systems, message queues, and caching strategies even when a project doesn't demand it.",
    tags: ["Distributed Systems", "Event-Driven Design", "Database Internals", "CAP Theorem"],
  },
  {
    icon: Network,
    title: "Networking & Protocols",
    description:
      "The TCP handshake, DNS resolution chains, HTTP/2 multiplexing — understanding what actually happens between a browser and a server makes me write better APIs. I find it hard to build reliable networked software without knowing what's happening at the transport layer, so I keep digging deeper.",
    tags: ["TCP/IP", "HTTP/2", "DNS", "WebSockets", "CDNs"],
  },
  {
    icon: ShieldCheck,
    title: "Security Fundamentals",
    description:
      "Pursuing Google's Cybersecurity Certificate and Cisco certifications isn't just credential-chasing — I'm genuinely curious about threat models, secure-by-default API design, and why most vulnerabilities come down to trust boundary mistakes. I apply this to how I design auth flows and handle user data in my own projects.",
    tags: ["Auth Flows", "OWASP", "Zero Trust", "Threat Modeling"],
  },
  {
    icon: Cpu,
    title: "How Software Actually Works",
    description:
      "I care about what happens below the framework level: how the OS schedules processes, why memory layout matters for cache performance, what a compiler does to my loops. This layer doesn't show up in user stories, but it's where the 10x performance wins come from — and understanding it makes debugging feel like reading instead of guessing.",
    tags: ["OS Internals", "Memory Management", "Compiler Basics", "CPU Cache"],
  },
  {
    icon: GitBranch,
    title: "Clean Code & Engineering Craft",
    description:
      "Beyond making things work, I care about making them maintainable. I think about naming, separation of concerns, and keeping complexity local. Not for aesthetics — but because messy code slows teams down and erodes confidence in the codebase. Good structure is a product decision, not a luxury.",
    tags: ["SOLID Principles", "Refactoring", "Code Review", "DRY/YAGNI"],
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "I keep a reading list of engineering blogs, research papers, and post-mortems from companies like Cloudflare, Stripe, and Notion. Real system failures teach more than any textbook. I treat learning like a background process — always running, not a sprint before an interview.",
    tags: ["Engineering Blogs", "Post-Mortems", "CS Papers", "Side Projects"],
  },
];

export default function BeyondResume() {
  return (
    <section id="beyond" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.div variants={textVariant()} className="mb-4">
            <p className="text-[#5b8dee] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-3 font-display">
              Beyond the resume
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
                What I think about.
              </h2>
              <p className="text-white/40 text-sm max-w-sm lg:text-right leading-relaxed">
                The things I read, explore, and obsess over when there&apos;s no deadline attached.
              </p>
            </div>
          </motion.div>

          <div className="w-full h-px bg-white/6 mt-8 mb-8" />

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {interests.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeIn("up", "spring", idx * 0.07, 0.55)}
                  className="group glass-card-hover rounded-xl p-5 flex flex-col gap-4"
                >
                  {/* Icon + title */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#5b8dee]/8 border border-[#5b8dee]/12 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#5b8dee]/14 transition-colors">
                      <Icon size={17} className="text-[#5b8dee]" />
                    </div>
                    <h3 className="text-[15px] font-semibold text-white font-display leading-snug pt-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[13.5px] text-white/45 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-full text-white/35 bg-white/4 border border-white/7"
                      >
                        {tag}
                      </span>
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
