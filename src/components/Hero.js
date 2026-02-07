import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 py-20">
      <div className="space-y-4 animate-in fade-in zoom-in duration-500 slide-in-from-bottom-5">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2">
          Hello, I&apos;m a Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
          Building digital experiences with modern technologies. Passionate about creating beautiful and functional web applications.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-150">
        <Link 
          href="#projects" 
          className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-transform hover:scale-105 shadow-lg shadow-blue-500/30"
        >
          View Work
        </Link>
        <Link 
          href="#contact" 
          className="px-8 py-3 rounded-full border border-gray-700 hover:border-gray-500 hover:bg-white/5 text-gray-100 transition-transform hover:scale-105 backdrop-blur-sm"
        >
          Contact Me
        </Link>
      </div>

      <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50"></div>
      </div>
    </section>
  );
}
