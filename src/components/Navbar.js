"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 top-0 start-0 border-b border-white/5 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-3 rtl:space-x-reverse group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">P</div>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-wide">Portfolio</span>
        </Link>
        <div className="hidden md:block w-auto" id="navbar-default">
          <ul className="font-medium flex flex-row space-x-8 rtl:space-x-reverse mt-0 border-0 bg-transparent">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 px-3 p-0 text-gray-200 hover:text-white relative group transition-colors"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
