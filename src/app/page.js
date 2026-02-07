"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
// Projects isn't used yet in the main flow, let's fix that
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="space-y-24 scroll-smooth">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-purple-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-64 h-64 bg-pink-900/10 rounded-full blur-[80px]"></div>
      </div>
    </div>
  );
}
