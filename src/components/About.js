export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent inline-block">
          About Me
        </h2>
        <div className="prose prose-invert prose-lg text-gray-200 max-w-none">
          <p>
            I am a passionate software developer focused on building interactive and responsive web applications.
            With a keen eye for design and a love for clean code, I strive to create digital experiences that are not only functional but also delightful to use.
          </p>
          <p>
            Welcome to my personal portfolio! This is where I showcase my journey, projects, and the skills I&apos;ve cultivated along the way.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors duration-300 h-full">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Education</h3>
          <ul className="space-y-6 text-gray-300 relative border-l border-white/10 ml-3 pl-8">
            <li className="relative">
              <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-black"></span>
              <div className="flex flex-col">
                <span className="text-white font-medium text-lg">B.E in Computer Science</span>
                <span className="text-sm text-gray-400">Sona College Of Technology • 2023 - 2027</span>
                <p className="mt-2 text-sm">Specialized in Full Stack Development and Artificial Intelligence.</p>
              </div>
            </li>
            <li className="relative">
              <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-gray-600 ring-4 ring-black"></span>
              <div className="flex flex-col">
                <span className="text-white font-medium text-lg">Higher Secondary</span>
                <span className="text-sm text-gray-400">Wisdom Gates Matriculation School • 2022 - 2023</span>
                <p className="mt-2 text-sm">Maths Computer Science.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors duration-300 h-full">
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">Interests & Hobbies</h3>
          <div className="grid grid-cols-2 gap-4">
             {/* Interest Cards */}
             <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center">
                <span className="text-3xl mb-2 block">💻</span>
                <span className="text-sm font-medium text-gray-300">Web Dev</span>
             </div>
             <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center">
                <span className="text-3xl mb-2 block">🎨</span>
                <span className="text-sm font-medium text-gray-300">UI/UX Design</span>
             </div>
             <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center">
                <span className="text-3xl mb-2 block">🚀</span>
                <span className="text-sm font-medium text-gray-300">Open Source</span>
             </div>
             <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center">
                <span className="text-3xl mb-2 block">✍️</span>
                <span className="text-sm font-medium text-gray-300">Tech Blogging</span>
             </div>
             <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center">
                <span className="text-3xl mb-2 block">🎮</span>
                <span className="text-sm font-medium text-gray-300">Gaming</span>
             </div>
             <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center">
                <span className="text-3xl mb-2 block">📚</span>
                <span className="text-sm font-medium text-gray-300">Reading</span>
             </div>
              <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center">
                <span className="text-3xl mb-2 block">🏋️</span>
                <span className="text-sm font-medium text-gray-300">Gym</span>
             </div>
             <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center">
                <span className="text-3xl mb-2 block">🎵</span>
                <span className="text-sm font-medium text-gray-300">Music</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
