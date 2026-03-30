"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import BeyondResume from "@/components/sections/beyond-resume";
import Skills from "@/components/sections/skills";
import DSAStats from "@/components/sections/dsa-stats";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/layout/scroll-progress";
import BackToTop from "@/components/layout/back-to-top";

const LoadingScreen = dynamic(
  () => import("@/components/layout/loading-screen"),
  { ssr: false }
);

const StarsCanvas = dynamic(() => import("@/components/canvas/stars"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative z-0 bg-[#07090f]">
      <LoadingScreen />
      <ScrollProgress />

      {/* Global starfield background — fixed, behind everything */}
      <StarsCanvas />

      <Navbar />

      <main>
        <Hero />
        <BeyondResume />
        <Skills />
        <DSAStats />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
