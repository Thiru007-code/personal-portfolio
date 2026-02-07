"use client";

import { useState } from 'react';

const skillsData = [
  { category: "Frontend", items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Next.js", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "SQL", "MongoDB", "Prisma", "Firebase"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Docker", "Vercel"] },
  { category: "Soft Skills", items: ["Communication", "Teamwork", "Problem Solving", "Adaptability"] }
];

export default function Skills() {
  // Initialize state to keep track of multiple open sections
  const [openSections, setOpenSections] = useState({});

  const toggleSkill = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
        My Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {skillsData.map((section, index) => {
          const isOpen = openSections[index];
          return (
            <div 
              key={section.category} 
              onClick={() => toggleSkill(index)}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 cursor-pointer ${isOpen ? 'border-pink-500/50 shadow-lg shadow-pink-500/10' : 'hover:border-white/20 hover:-translate-y-1'}`}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-2xl font-bold transition-colors ${isOpen ? 'text-pink-400' : 'text-white group-hover:text-pink-300'}`}>
                  {section.category}
                </h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-pink-400' : 'text-gray-400'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </div>
              
              <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                 <div className="overflow-hidden">
                    <div className="flex flex-wrap gap-3 pt-2">
                      {section.items.map((skill) => (
                        <span 
                          key={skill}
                          className="px-4 py-2 rounded-lg bg-white/10 text-gray-200 text-sm font-medium hover:bg-white/20 hover:text-white transition-colors cursor-default border border-transparent hover:border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
