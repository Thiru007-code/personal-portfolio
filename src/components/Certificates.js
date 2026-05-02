"use client";

import { useState } from 'react';

const certificatesData = [
  {
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    date: "Sep 2025",
    image: "/certificates/java.png"
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL | IIT Kharagpur",
    date: "Jul-Sep 2025",
    image: "/certificates/ml.png"
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "Sep 2024",
    image: "/certificates/python.png"
  },
  {
    title: "Digital 101 - 30 Hours",
    issuer: "FutureSkills Prime | NASSCOM",
    date: "Mar 2026",
    image: "/certificates/digital.png"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL | IIT Kharagpur",
    date: "Jul-Oct 2025",
    image: "/certificates/cloud.png"
  }
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (e, image) => {
    e.preventDefault();
    setSelectedImage(image);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="certificates" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <div 
            key={index}
            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div 
              className="aspect-video w-full overflow-hidden relative cursor-pointer"
              onClick={(e) => openModal(e, cert.image)}
            >
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{cert.issuer} • {cert.date}</p>
              
              <button 
                onClick={(e) => openModal(e, cert.image)}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors group/btn"
              >
                View Certificate
                <svg className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
            
            {/* Glow effect on hover */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-sm -z-10 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all duration-300"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors flex items-center gap-2 font-medium"
            >
              <span>Close</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <div className="bg-white/5 p-2 rounded-2xl border border-white/10 shadow-2xl">
              <img 
                src={selectedImage} 
                alt="Certificate" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
