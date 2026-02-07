"use client";

import { useState } from 'react';

const projects = [
  {
    title: "Linguistic Chatbot",
    description: "Multi-lingual conversational AI leveraging NLP to provide real-time support across various languages. Designed for seamless user interaction and accessibility. This chatbot can understand and respond in multiple Indian regional languages, making technology accessible to a wider demographic.",
    link: "#"
  },
  {
    title: "ERP System",
    description: "Comprehensive Enterprise Resource Planning solution for managing business processes, including inventory, sales, and supply chain management in one unified platform. It features real-time analytics, automated reporting, and role-based access control for secure data management.",
    link: "#"
  },
  {
    title: "HR Payroll",
    description: "Automated payroll management system handling employee salaries, tax calculations, and compliance reporting with high security and accuracy. Includes features for leave management, attendance tracking, and generating payslips automatically at the end of each month.",
    link: "#"
  },
  {
    title: "Tourism App (Ongoing)",
    description: "An immersive travel booking platform currently in development. Features include destination guides, itinerary planning, and real-time booking integrations. The app aims to provide personalized travel recommendations based on user preferences and budget.",
    link: "#"
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (index) => {
      if (activeProject === index) {
          setActiveProject(null);
      } else {
          setActiveProject(index);
      }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto min-h-[600px] flex flex-col justify-center">
      <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent transition-all duration-500`}>
        Featured Projects
      </h2>

      {/* Desktop Layout: Split View */}
      <div className="hidden md:flex transition-all duration-500 ease-in-out gap-8 items-start w-full">
        <div className={`w-full transition-all duration-500 ease-in-out ${activeProject !== null ? 'w-1/3 flex flex-col gap-4' : 'grid grid-cols-2 gap-6 max-w-4xl mx-auto'}`}>
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`text-left rounded-xl transition-all duration-300 border group flex items-center ${
                activeProject === index 
                  ? 'bg-cyan-900/20 border-cyan-500/50 text-cyan-400 shadow-lg shadow-cyan-500/10 scale-105 ring-1 ring-cyan-500/50 p-6' 
                  : 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:text-white hover:border-cyan-500/30 p-6'
              } ${activeProject === null ? 'h-40 justify-center text-center items-center hover:scale-105 hover:shadow-2xl' : ''}`}
            >
              <h3 className={`font-bold transition-all duration-300 ${activeProject === null ? 'text-2xl' : 'text-xl'}`}>
                {project.title}
              </h3>
            </button>
          ))}
        </div>

        {activeProject !== null && (
          <div className="w-2/3 animate-in fade-in slide-in-from-right-10 duration-500">
            <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <div key={activeProject} className="animate-in fade-in zoom-in duration-300">
                 <div className="flex justify-between items-start mb-6">
                   <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                      {projects[activeProject].title}
                      <span className="text-cyan-500 text-xs bg-cyan-500/10 px-2 py-1 rounded-full border border-cyan-500/20 align-middle">Active</span>
                   </h3>
                   <button 
                      onClick={(e) => { e.stopPropagation(); setActiveProject(null); }}
                      className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                      title="Back to Grid"
                   >
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                   </button>
                 </div>
                 
                 <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {projects[activeProject].description}
                 </p>
  
                 {projects[activeProject].link !== "#" && (
                    <a 
                      href={projects[activeProject].link} 
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
                    >
                       View Case Study
                       <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                 )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Layout: Accordion Style */}
      <div className="md:hidden flex flex-col gap-4">
        {projects.map((project, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300">
                <button
                    onClick={() => toggleProject(index)}
                    className={`w-full text-left p-6 flex justify-between items-center transition-colors ${activeProject === index ? 'bg-white/5 text-cyan-400' : 'text-gray-200'}`}
                >
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className={`transform transition-transform duration-300 ${activeProject === index ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                </button>
                
                <div 
                    className={`transition-all duration-300 ease-in-out ${activeProject === index ? 'max-h-[500px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 p-0 overflow-hidden'}`}
                >
                    <p className="text-gray-300 text-base leading-relaxed mb-6 mt-4 border-t border-white/10 pt-4">
                        {project.description}
                    </p>
                    {project.link !== "#" && (
                        <a 
                          href={project.link} 
                          className="inline-flex items-center px-5 py-2 rounded-lg bg-cyan-600/90 hover:bg-cyan-600 text-white text-sm font-semibold transition-colors"
                        >
                           View Case Study
                           <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    )}
                </div>
            </div>
        ))}
      </div>

    </section>
  );
}
