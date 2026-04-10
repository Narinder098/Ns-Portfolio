import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const menuItems = ["about", "experience", "skills", "projects", "certifications"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  // 🔥 SCROLL SPY (active section)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Hero", ...menuItems, "contact"];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 100;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-[#0a192f]/30 backdrop-blur-sm z-50 px-4 py-4 transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <button
          onClick={() => scrollToSection("Hero")}
          className="text-yellow-500/75 font-bold text-2xl group">
          <span className="group-hover:animate-pulse">Narinder.dev</span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative group capitalize transition-all duration-300
              ${active === item
                  ? "text-[#64ffda] drop-shadow-[0_0_6px_rgba(100,255,218,0.5)] "
                  : "text-[#bbd3cd] hover:text-[#64ffda]/80"
                }`}>
              {item}

              {/* underline */}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#64ffda] transition-all duration-300
                   ${active === item
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
              ></span>
            </button>
          ))}

          {/* Hire Me */}
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-[#bbd3cd] px-4 py-1 text-[#bbd3cd] hover:bg-[#64ffda]/10 transition-colors">
            Hire Me
          </button>
        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-[#64ffda]"
          onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0a192f] px-6 py-6 flex flex-col gap-6 text-sm uppercase tracking-wider border-t border-gray-800">

          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-left capitalize transition
              ${active === item
                  ? "text-[#64ffda]"
                  : "text-[#bbd3cd] hover:text-[#64ffda]"
                }`} >
              {item}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className="border border-[#64ffda] px-4 py-2 text-[#64ffda] w-fit">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}