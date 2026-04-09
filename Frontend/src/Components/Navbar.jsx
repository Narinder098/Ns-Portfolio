import React from 'react';

export default function Navbar() {
  const menuItems = ['About', 'Experience', 'Skills', 'Projects', 'Certifications'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-[#0a192f]/30 backdrop-blur-sm z-50 px-4 py-4 transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('Hero')}
          className="text-yellow-500/75 font-bold text-2xl group">
          <span className="group-hover:animate-pulse ">Narinder.dev</span>
        </button>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative group text-[#bbd3cd] hover:text-[#64ffda]/80 capitalize transition-colors">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          {/* Hire Me Button */}
          <button
            onClick={() => scrollToSection('Contact')}
            className="border border-[#bbd3cd] px-4 py-1 text-[#bbd3cd] hover:bg-[#64ffda]/10 transition-colors">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}