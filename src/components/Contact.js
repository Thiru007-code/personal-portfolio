export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      
      <p className="text-center text-gray-200 mb-12 text-lg">
        Have a project in mind or just want to say hi? Feel free to send me a message!
      </p>

      <form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/10 transition-shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-200">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-200">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder-gray-400"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-200">Message</label>
          <textarea 
            id="message" 
            rows="5"
            placeholder="Your message..."
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder-gray-400 resize-none"
          ></textarea>
        </div>

        <button 
          type="button" 
          className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transform hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/25"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 flex justify-center gap-8 text-2xl">
        <a href="#" className="text-gray-200 hover:text-white transition-colors hover:-translate-y-1 transform duration-300" title="LinkedIn"><i className="fab fa-linkedin"></i> LinkedIn</a>
        <a href="#" className="text-gray-200 hover:text-white transition-colors hover:-translate-y-1 transform duration-300" title="GitHub"><i className="fab fa-github"></i> GitHub</a>
        <a href="#" className="text-gray-200 hover:text-white transition-colors hover:-translate-y-1 transform duration-300" title="Twitter"><i className="fab fa-twitter"></i> Twitter</a>
      </div>
      
      <footer className="mt-20 border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </section>
  );
}
