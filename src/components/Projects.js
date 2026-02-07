const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store built with Next.js, Stripe, and Sanity CMS. Includes user authentication, cart management, and payment processing.",
    tags: ["Next.js", "Stripe", "Tailwind", "Sanity"],
    link: "#"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat interface powered by OpenAI's GPT-4 API. Features markdown support, code highlighting, and chat history storage.",
    tags: ["React", "Node.js", "Socket.io", "OpenAI"],
    link: "#"
  },
  {
    title: "Task Management Dashboard",
    description: "A productivity tool for teams to track tasks with kanban boards, calendars, and progress analytics.",
    tags: ["Vue.js", "Firebase", "Chart.js"],
    link: "#"
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather dashboard providing real-time forecasts, air quality data, and severe weather alerts using OpenWeatherMap API.",
    tags: ["JavaScript", "CSS3", "API Integration"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <a href={project.link} className="p-2 rounded-full bg-white/10 hover:bg-cyan-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
              <p className="text-gray-200 mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-800/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
