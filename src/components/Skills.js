const skillsData = [
  { category: "Frontend", items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Next.js", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "SQL", "MongoDB", "Prisma", "Firebase"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Docker", "Vercel"] },
  { category: "Soft Skills", items: ["Communication", "Teamwork", "Problem Solving", "Adaptability"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
        My Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((section) => (
          <div key={section.category} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 shadow-xl shadow-black/20 group">
            <h3 className="text-2xl font-semibold mb-6 text-white group-hover:text-pink-400 transition-colors">{section.category}</h3>
            <div className="flex flex-wrap gap-3">
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
        ))}
      </div>
    </section>
  );
}
