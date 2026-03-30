"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { config } from "@/lib/config";
import { slideIn, fadeIn } from "@/lib/motion";
import SectionHeader from "@/components/ui/section-header";
import dynamic from "next/dynamic";
import { Mail, MapPin, Send, Loader2, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const EarthCanvas = dynamic(() => import("@/components/canvas/earth"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/8 border-t-[#5b8dee]/50 rounded-full animate-spin" />
    </div>
  ),
});

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sanjayratan665@gmail.com",
    href: `mailto:sanjayratan665@gmail.com`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ratansanjay10",
    href: "https://linkedin.com/in/ratansanjay10",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Ratan1103",
    href: "https://github.com/Ratan1103",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mysore, Karnataka, India",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mvzvzjnq", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    }
    setLoading(false);
    setTimeout(() => setSuccess(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg text-sm text-white/80 placeholder-white/20 focus:outline-none transition-all " +
    "bg-white/[0.04] border border-white/[0.08] " +
    "focus:bg-white/[0.07] focus:border-[#5b8dee]/35 focus:shadow-[0_0_0_3px_rgba(91,141,238,0.07)]";

  return (
    <section id="contact" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-4">
            <SectionHeader subtext={config.sections.contact.p} title="Contact." />
            <p className="text-white/40 text-sm max-w-sm lg:text-right leading-relaxed">
              I&apos;m actively looking for roles. Let&apos;s talk about systems, products, or internships.
            </p>
          </div>

          <div className="w-full h-px bg-white/6 mt-8 mb-8" />

          <div className="flex flex-col lg:flex-row gap-8">

            {/* LEFT — Contact Info + Earth */}
            <motion.div
              variants={slideIn("left", "tween", 0.1, 0.75)}
              className="lg:w-[320px] shrink-0 flex flex-col gap-3"
            >
              {/* Contact link cards */}
              {contactLinks.map((link) => {
                const IconComp = link.icon as any;
                const inner = (
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl group cursor-pointer transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(91,141,238,0.08)",
                        border: "1px solid rgba(91,141,238,0.13)",
                      }}
                    >
                      <IconComp size={15} className="text-[#5b8dee]/70 group-hover:text-[#5b8dee] transition-colors" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-white/25 uppercase tracking-wider mb-0.5 font-display">{link.label}</p>
                      <p className="text-[13px] text-white/55 group-hover:text-white/75 transition-colors truncate">{link.value}</p>
                    </div>
                    {link.href && (
                      <ExternalLink size={12} className="shrink-0 text-white/12 group-hover:text-white/35 transition-colors" />
                    )}
                  </div>
                );

                return link.href ? (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={link.label}>{inner}</div>
                );
              })}

              {/* Earth canvas */}
              <div
                className="flex-1 min-h-[220px] rounded-xl overflow-hidden mt-1"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <EarthCanvas />
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              variants={slideIn("right", "tween", 0.1, 0.75)}
              className="flex-1"
            >
              <div
                className="rounded-2xl p-6 sm:p-7 h-full"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(16px)",
                  boxShadow:
                    "0 8px 40px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.05) inset, 0 0 60px rgba(91,141,238,0.04)",
                }}
              >
                <div className="mb-6">
                  <h3 className="text-[16px] font-semibold text-white font-display">Send a message</h3>
                  <p className="text-xs text-white/30 mt-1">
                    I usually respond within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value="New Portfolio Message" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/30 mb-1.5 font-medium tracking-wide">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/30 mb-1.5 font-medium tracking-wide">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/30 mb-1.5 font-medium tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the role, project, or idea..."
                      required
                      rows={6}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading || success}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      success
                        ? "text-emerald-400 border border-emerald-500/20"
                        : "text-white hover:opacity-90 active:scale-[0.99]"
                    }`}
                    style={
                      success
                        ? { background: "rgba(16,185,129,0.08)" }
                        : {
                            background: loading
                              ? "rgba(91,141,238,0.6)"
                              : "#5b8dee",
                            boxShadow: "0 4px 18px rgba(91,141,238,0.28)",
                          }
                    }
                  >
                    {loading ? (
                      <><Loader2 size={15} className="animate-spin" /> Sending...</>
                    ) : success ? (
                      "Message sent — thank you!"
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </form>

                {/* Footer note */}
                <p className="text-[11px] text-white/18 mt-4 text-center">
                  Messages are sent securely via Formspree.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
